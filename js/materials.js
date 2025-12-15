// Carregar materiais do banco
async function loadMaterials(certification = null) {
    try {
        let query = supabaseClient
            .from('materiais')
            .select('*, usuarios(nome)')
            .eq('status', 'aprovado')
            .order('created_at', { ascending: false });
        
        if (certification) {
            query = query.ilike('categoria', `%${certification}%`);
        }
        
        const { data: materials, error } = await query;
        
        if (error) throw error;
        
        return materials || [];
    } catch (error) {
        console.error('Erro ao carregar materiais:', error);
        return [];
    }
}

// Carregar materiais por categoria
async function loadMaterialsByCategory(category) {
    try {
        const { data, error } = await supabaseClient
            .from('materiais')
            .select('*, usuarios(nome)')
            .eq('status', 'aprovado')
            .eq('categoria', category)
            .order('created_at', { ascending: false });
        
        if (error) throw error;
        
        return data || [];
    } catch (error) {
        console.error('Erro ao carregar materiais por categoria:', error);
        return [];
    }
}

// Renderizar materiais na página
function renderMaterials(materials, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    materials.forEach(material => {
        const materialCard = createMaterialCard(material);
        container.appendChild(materialCard);
    });
}

// Criar card de material
function createMaterialCard(material) {
    const card = document.createElement('div');
    card.className = 'material-card';
    card.setAttribute('data-type', material.tipo);
    card.setAttribute('data-id', material.id);
    
    const fileIcon = getFileIcon(material.tipo);
    const fileSize = material.tamanho_mb ? `${material.tamanho_mb} MB` : 'N/A';
    
    card.innerHTML = `
        <div class="card-header">
            ${fileIcon}
            <div>
                <h3>${material.titulo}</h3>
                <small>${material.tipo.toUpperCase()} • ${fileSize}</small>
            </div>
        </div>
        <div class="card-body">
            <p>${material.descricao || 'Sem descrição'}</p>
            <div class="file-info">
                <span><i class="far fa-user"></i> ${material.usuarios?.nome || 'Anônimo'}</span>
                <span><i class="far fa-clock"></i> ${formatDate(material.created_at)}</span>
                <span><i class="far fa-eye"></i> ${material.visualizacoes || 0} visualizações</span>
            </div>
            <button class="btn btn-primary download-btn" data-id="${material.id}">
                <i class="fas fa-download"></i> Baixar
            </button>
            <button class="btn btn-outline view-btn" data-id="${material.id}" style="margin-left: 10px;">
                <i class="fas fa-external-link-alt"></i> Ver
            </button>
        </div>
    `;
    
    // Adicionar eventos
    card.querySelector('.download-btn').addEventListener('click', () => downloadMaterial(material.id));
    card.querySelector('.view-btn').addEventListener('click', () => viewMaterial(material));
    
    return card;
}

// Fazer upload de material
async function uploadMaterial(file, metadata) {
    if (!currentUser) {
        showAlert('error', 'Você precisa estar logado para enviar materiais.');
        return false;
    }
    
    try {
        // 1. Upload do arquivo para o Storage do Supabase
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}.${fileExt}`;
        const filePath = `materiais/${currentUser.id}/${fileName}`;
        
        const { error: uploadError } = await supabaseClient.storage
            .from('materiais')
            .upload(filePath, file);
        
        if (uploadError) throw uploadError;
        
        // 2. Obter URL pública do arquivo
        const { data: urlData } = supabaseClient.storage
            .from('materiais')
            .getPublicUrl(filePath);
        
        // 3. Inserir registro na tabela materiais
        const materialData = {
            titulo: metadata.titulo || file.name,
            descricao: metadata.descricao || '',
            tipo: metadata.tipo || fileExt,
            tamanho_mb: (file.size / (1024 * 1024)).toFixed(2),
            nome_arquivo: file.name,
            caminho_arquivo: filePath,
            url_externa: urlData.publicUrl,
            usuario_id: currentUser.id,
            categoria: metadata.categoria || 'geral',
            subcategoria: metadata.subcategoria || '',
            tags: metadata.tags ? metadata.tags.split(',').map(t => t.trim()) : [],
            nivel_dificuldade: metadata.nivel || 'intermediario',
            idioma: metadata.idioma || 'portugues',
            status: 'pendente',
            data_publicacao: new Date()
        };
        
        const { error: dbError } = await supabaseClient
            .from('materiais')
            .insert([materialData]);
        
        if (dbError) throw dbError;
        
        // 4. Registrar download
        await registerDownload(materialData.id, currentUser.id);
        
        showAlert('success', 'Material enviado com sucesso! Aguarde aprovação.');
        return true;
        
    } catch (error) {
        console.error('Erro no upload:', error);
        showAlert('error', 'Erro ao enviar material: ' + error.message);
        return false;
    }
}

// Registrar download
async function registerDownload(materialId, userId) {
    try {
        const { error } = await supabaseClient
            .from('downloads_materiais')
            .insert([{
                material_id: materialId,
                usuario_id: userId,
                data_download: new Date()
            }]);
        
        if (error) throw error;
    } catch (error) {
        console.error('Erro ao registrar download:', error);
    }
}

// Download de material
async function downloadMaterial(materialId) {
    try {
        // Obter informações do material
        const { data: material, error } = await supabaseClient
            .from('materiais')
            .select('*')
            .eq('id', materialId)
            .single();
        
        if (error) throw error;
        
        // Registrar download se usuário logado
        if (currentUser) {
            await registerDownload(materialId, currentUser.id);
        }
        
        // Incrementar contador de downloads
        await supabaseClient
            .from('materiais')
            .update({ downloads: (material.downloads || 0) + 1 })
            .eq('id', materialId);
        
        // Abrir arquivo em nova aba
        if (material.url_externa) {
            window.open(material.url_externa, '_blank');
        } else if (material.caminho_arquivo) {
            const { data: urlData } = supabaseClient.storage
                .from('materiais')
                .getPublicUrl(material.caminho_arquivo);
            window.open(urlData.publicUrl, '_blank');
        }
        
    } catch (error) {
        console.error('Erro ao baixar material:', error);
        showAlert('error', 'Erro ao baixar o material.');
    }
}

// Visualizar material
function viewMaterial(material) {
    const modal = document.createElement('div');
    modal.className = 'modal material-modal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="${getFileIconClass(material.tipo)}"></i> ${material.titulo}</h3>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="material-info">
                    <p><strong>Descrição:</strong> ${material.descricao || 'Sem descrição'}</p>
                    <p><strong>Categoria:</strong> ${material.categoria}</p>
                    <p><strong>Tipo:</strong> ${material.tipo.toUpperCase()}</p>
                    <p><strong>Tamanho:</strong> ${material.tamanho_mb || 'N/A'} MB</p>
                    <p><strong>Enviado por:</strong> ${material.usuarios?.nome || 'Anônimo'}</p>
                    <p><strong>Data:</strong> ${formatDate(material.created_at)}</p>
                    <p><strong>Visualizações:</strong> ${material.visualizacoes || 0}</p>
                    <p><strong>Downloads:</strong> ${material.downloads || 0}</p>
                </div>
                <div class="material-actions">
                    <button class="btn btn-primary download-full" data-id="${material.id}">
                        <i class="fas fa-download"></i> Baixar Completo
                    </button>
                    <button class="btn btn-outline close-btn">
                        <i class="fas fa-times"></i> Fechar
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    // Eventos
    modal.querySelector('.close-modal').addEventListener('click', () => modal.remove());
    modal.querySelector('.close-btn').addEventListener('click', () => modal.remove());
    modal.querySelector('.download-full').addEventListener('click', () => {
        downloadMaterial(material.id);
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Utilitários
function getFileIcon(type) {
    const icons = {
        'pdf': '<i class="fas fa-file-pdf pdf file-icon"></i>',
        'ppt': '<i class="fas fa-file-powerpoint ppt file-icon"></i>',
        'pptx': '<i class="fas fa-file-powerpoint ppt file-icon"></i>',
        'doc': '<i class="fas fa-file-word doc file-icon"></i>',
        'docx': '<i class="fas fa-file-word doc file-icon"></i>',
        'zip': '<i class="fas fa-file-archive zip file-icon"></i>',
        'video': '<i class="fas fa-file-video video file-icon"></i>',
        'mp4': '<i class="fas fa-file-video video file-icon"></i>',
        'link': '<i class="fas fa-link link file-icon"></i>'
    };
    
    return icons[type] || '<i class="fas fa-file file-icon"></i>';
}

function getFileIconClass(type) {
    const icons = {
        'pdf': 'fas fa-file-pdf pdf',
        'ppt': 'fas fa-file-powerpoint ppt',
        'pptx': 'fas fa-file-powerpoint ppt',
        'doc': 'fas fa-file-word doc',
        'docx': 'fas fa-file-word doc',
        'zip': 'fas fa-file-archive zip',
        'video': 'fas fa-file-video video',
        'mp4': 'fas fa-file-video video',
        'link': 'fas fa-link link'
    };
    
    return icons[type] || 'fas fa-file';
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
}

// Exportar funções
window.loadMaterials = loadMaterials;
window.loadMaterialsByCategory = loadMaterialsByCategory;
window.renderMaterials = renderMaterials;
window.uploadMaterial = uploadMaterial;
