class MaterialsManager {
    constructor() {
        this.currentUser = null;
        this.init();
    }

    async init() {
        // Obter usuário atual
        const { data: { user } } = await supabase.auth.getUser();
        this.currentUser = user;
    }

    async uploadMaterial(file, metadata) {
        try {
            // Validar arquivo
            if (!this.validateFile(file)) {
                throw new Error('Tipo de arquivo não suportado');
            }
            
            // Criar nome único para o arquivo
            const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
            const filePath = `materiais/${fileName}`;
            
            // Upload para storage do Supabase
            const { data: uploadData, error: uploadError } = await supabase.storage
                .from('uploads')
                .upload(filePath, file, {
                    cacheControl: '3600',
                    upsert: false
                });
            
            if (uploadError) throw uploadError;
            
            // Obter URL pública do arquivo
            const { data: { publicUrl } } = supabase.storage
                .from('uploads')
                .getPublicUrl(filePath);
            
            // Inserir registro no banco
            const { data: dbData, error: dbError } = await supabase
                .from('materiais')
                .insert([
                    {
                        titulo: metadata.titulo,
                        descricao: metadata.descricao,
                        tipo: this.getFileType(file.name),
                        tamanho_mb: (file.size / (1024 * 1024)).toFixed(2),
                        nome_arquivo: fileName,
                        caminho_arquivo: publicUrl,
                        usuario_id: this.currentUser?.id || null,
                        categoria: metadata.categoria,
                        subcategoria: metadata.subcategoria,
                        tags: metadata.tags ? metadata.tags.split(',').map(t => t.trim()) : [],
                        nivel_dificuldade: metadata.nivel || 'intermediario',
                        status: 'pendente',
                        created_at: new Date()
                    }
                ]);
            
            if (dbError) throw dbError;
            
            this.showAlert('success', 'Material enviado com sucesso! Aguarde aprovação.');
            return { success: true, data: dbData };
            
        } catch (error) {
            this.showAlert('error', `Erro ao enviar material: ${error.message}`);
            return { success: false, error: error.message };
        }
    }

    async downloadMaterial(materialId) {
        try {
            // Buscar informações do material
            const { data: material, error: fetchError } = await supabase
                .from('materiais')
                .select('*')
                .eq('id', materialId)
                .single();
            
            if (fetchError) throw fetchError;
            
            if (material.status !== 'aprovado') {
                throw new Error('Material não disponível para download');
            }
            
            // Registrar download
            const { error: logError } = await supabase
                .from('downloads_materiais')
                .insert([
                    {
                        material_id: materialId,
                        usuario_id: this.currentUser?.id || null,
                        data_download: new Date(),
                        ip_address: await this.getClientIP()
                    }
                ]);
            
            if (logError) console.error('Erro ao registrar download:', logError);
            
            // Atualizar contador de downloads
            await supabase
                .from('materiais')
                .update({ downloads: material.downloads + 1 })
                .eq('id', materialId);
            
            // Criar link de download
            const link = document.createElement('a');
            link.href = material.caminho_arquivo;
            link.download = material.titulo;
            link.target = '_blank';
            link.click();
            
            this.showAlert('success', 'Download iniciado!');
            
        } catch (error) {
            this.showAlert('error', `Erro ao baixar: ${error.message}`);
        }
    }

    async getMaterials(filters = {}) {
        try {
            let query = supabase
                .from('materiais')
                .select(`
                    *,
                    usuarios (
                        nome,
                        email
                    )
                `)
                .eq('status', 'aprovado')
                .order('created_at', { ascending: false });
            
            // Aplicar filtros
            if (filters.categoria) {
                query = query.eq('categoria', filters.categoria);
            }
            
            if (filters.nivel) {
                query = query.eq('nivel_dificuldade', filters.nivel);
            }
            
            if (filters.tags && filters.tags.length > 0) {
                query = query.contains('tags', filters.tags);
            }
            
            if (filters.search) {
                query = query.or(`titulo.ilike.%${filters.search}%,descricao.ilike.%${filters.search}%`);
            }
            
            const { data, error } = await query;
            
            if (error) throw error;
            
            return { success: true, data };
            
        } catch (error) {
            console.error('Erro ao buscar materiais:', error);
            return { success: false, error: error.message };
        }
    }

    async approveMaterial(materialId) {
        try {
            const { error } = await supabase
                .from('materiais')
                .update({ 
                    status: 'aprovado',
                    data_publicacao: new Date()
                })
                .eq('id', materialId);
            
            if (error) throw error;
            
            // Criar notificação para o autor
            const material = await supabase
                .from('materiais')
                .select('usuario_id, titulo')
                .eq('id', materialId)
                .single();
            
            if (material.data) {
                await supabase
                    .from('notificacoes')
                    .insert([
                        {
                            usuario_id: material.data.usuario_id,
                            tipo: 'aprovacao',
                            titulo: 'Material Aprovado',
                            mensagem: `Seu material "${material.data.titulo}" foi aprovado e está disponível para download.`,
                            link: `/materiais/${materialId}`
                        }
                    ]);
            }
            
            this.showAlert('success', 'Material aprovado com sucesso!');
            return { success: true };
            
        } catch (error) {
            this.showAlert('error', `Erro ao aprovar material: ${error.message}`);
            return { success: false, error: error.message };
        }
    }

    async rejectMaterial(materialId, motivo) {
        try {
            const { error } = await supabase
                .from('materiais')
                .update({ 
                    status: 'rejeitado',
                    motivo_rejeicao: motivo
                })
                .eq('id', materialId);
            
            if (error) throw error;
            
            this.showAlert('success', 'Material rejeitado.');
            return { success: true };
            
        } catch (error) {
            this.showAlert('error', `Erro ao rejeitar material: ${error.message}`);
            return { success: false, error: error.message };
        }
    }

    validateFile(file) {
        const allowedTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.ms-powerpoint',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            'application/zip',
            'application/x-rar-compressed',
            'video/mp4',
            'video/x-msvideo',
            'video/quicktime'
        ];
        
        const maxSize = 100 * 1024 * 1024; // 100MB
        
        if (!allowedTypes.includes(file.type) && !file.name.match(/\.(pdf|doc|docx|ppt|pptx|zip|rar|mp4|avi|mov)$/i)) {
            return false;
        }
        
        if (file.size > maxSize) {
            return false;
        }
        
        return true;
    }

    getFileType(filename) {
        const ext = filename.split('.').pop().toLowerCase();
        const types = {
            pdf: 'pdf',
            doc: 'doc',
            docx: 'doc',
            ppt: 'ppt',
            pptx: 'ppt',
            zip: 'zip',
            rar: 'zip',
            mp4: 'video',
            avi: 'video',
            mov: 'video',
            mkv: 'video'
        };
        
        return types[ext] || 'link';
    }

    async getClientIP() {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            return data.ip;
        } catch {
            return null;
        }
    }

    showAlert(type, message) {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type} fade-in`;
        alert.innerHTML = `
            <span>${message}</span>
            <button class="close-alert">&times;</button>
        `;
        
        document.body.prepend(alert);
        
        alert.querySelector('.close-alert').addEventListener('click', () => {
            alert.remove();
        });
        
        setTimeout(() => {
            if (alert.parentNode) alert.remove();
        }, 5000);
    }
}

// Inicializar gerenciador de materiais
const materialsManager = new MaterialsManager();
window.materialsManager = materialsManager;
