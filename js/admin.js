class AdminManager {
    constructor() {
        this.currentUser = null;
        this.isAdmin = false;
        this.init();
    }

    async init() {
        // Verificar autenticação
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
            window.location.href = '../auth/login.html';
            return;
        }
        
        this.currentUser = session.user;
        await this.verifyAdminAccess();
        
        // Configurar interface
        this.setupUI();
        this.loadDashboardData();
        this.setupEventListeners();
    }

    async verifyAdminAccess() {
        // Verificar se o usuário é admin
        const adminEmails = ['admin@studyCert.com'];
        const isEmailAdmin = adminEmails.includes(this.currentUser.email);
        
        const { data } = await supabase
            .from('usuarios')
            .select('is_admin')
            .eq('auth_uid', this.currentUser.id)
            .single();
            
        this.isAdmin = isEmailAdmin || (data && data.is_admin);
        
        if (!this.isAdmin) {
            window.location.href = '../index.html';
        }
        
        return this.isAdmin;
    }

    setupUI() {
        // Atualizar informações do usuário
        document.getElementById('adminEmail').textContent = this.currentUser.email;
        document.getElementById('userName').textContent = this.currentUser.email;
        
        // Configurar navegação entre abas
        document.querySelectorAll('.sidebar-menu a[data-tab]').forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Atualizar aba ativa
                document.querySelectorAll('.sidebar-menu a').forEach(a => {
                    a.classList.remove('active');
                });
                tab.classList.add('active');
                
                // Mostrar conteúdo da aba
                const tabId = tab.getAttribute('data-tab');
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.style.display = 'none';
                });
                document.getElementById(tabId + 'Tab').style.display = 'block';
                document.getElementById('pageTitle').textContent = tab.textContent.trim();
                
                // Carregar dados da aba
                this.loadTabData(tabId);
            });
        });
        
        // Configurar logout
        document.getElementById('logoutBtn').addEventListener('click', async () => {
            await supabase.auth.signOut();
            window.location.href = '../index.html';
        });
    }

    async loadDashboardData() {
        try {
            // Carregar estatísticas
            const [
                materiaisRes,
                pendentesRes,
                usuariosRes,
                downloadsRes,
                recentesRes
            ] = await Promise.all([
                supabase.from('materiais').select('id', { count: 'exact' }),
                supabase.from('materiais').select('id', { count: 'exact' }).eq('status', 'pendente'),
                supabase.from('usuarios').select('id', { count: 'exact' }),
                supabase.from('downloads_materiais').select('id', { count: 'exact' }),
                supabase
                    .from('materiais')
                    .select(`
                        *,
                        usuarios (
                            nome,
                            email
                        )
                    `)
                    .order('created_at', { ascending: false })
                    .limit(10)
            ]);
            
            // Atualizar estatísticas
            document.getElementById('totalMateriais').textContent = materiaisRes.count || 0;
            document.getElementById('materiaisPendentes').textContent = pendentesRes.count || 0;
            document.getElementById('totalUsuarios').textContent = usuariosRes.count || 0;
            document.getElementById('totalDownloads').textContent = downloadsRes.count || 0;
            
            // Atualizar tabela de materiais recentes
            this.renderRecentMaterials(recentesRes.data);
            
        } catch (error) {
            console.error('Erro ao carregar dashboard:', error);
        }
    }

    async loadTabData(tabId) {
        switch (tabId) {
            case 'materiais':
                await this.loadMaterialsTable();
                break;
            case 'usuarios':
                await this.loadUsersTable();
                break;
            case 'simulados':
                await this.loadSimuladosTable();
                break;
            // ... outros casos
        }
    }

    async loadMaterialsTable(filters = {}) {
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
                .order('created_at', { ascending: false });
            
            // Aplicar filtros
            if (filters.status) {
                query = query.eq('status', filters.status);
            }
            
            if (filters.search) {
                query = query.or(`titulo.ilike.%${filters.search}%,descricao.ilike.%${filters.search}%`);
            }
            
            const { data, error } = await query;
            
            if (error) throw error;
            
            this.renderMaterialsTable(data);
            
        } catch (error) {
            console.error('Erro ao carregar materiais:', error);
        }
    }

    renderMaterialsTable(materials) {
        const container = document.getElementById('materialsTable');
        if (!container) return;
        
        if (!materials || materials.length === 0) {
            container.innerHTML = '<p class="text-muted">Nenhum material encontrado.</p>';
            return;
        }
        
        const html = `
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Tipo</th>
                        <th>Status</th>
                        <th>Downloads</th>
                        <th>Data</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    ${materials.map(material => `
                        <tr>
                            <td>
                                <strong>${material.titulo}</strong><br>
                                <small class="text-muted">${material.descricao?.substring(0, 50)}...</small>
                            </td>
                            <td>${material.usuarios?.nome || 'Anônimo'}</td>
                            <td>${material.tipo}</td>
                            <td>
                                <span class="badge badge-${material.status}">
                                    ${material.status}
                                </span>
                            </td>
                            <td>${material.downloads || 0}</td>
                            <td>${new Date(material.created_at).toLocaleDateString()}</td>
                            <td>
                                <div class="btn-group">
                                    ${material.status === 'pendente' ? `
                                        <button class="btn btn-sm btn-success" onclick="adminManager.approveMaterial('${material.id}')">
                                            <i class="fas fa-check"></i>
                                        </button>
                                        <button class="btn btn-sm btn-danger" onclick="adminManager.showRejectModal('${material.id}')">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    ` : ''}
                                    <button class="btn btn-sm btn-info" onclick="adminManager.viewMaterial('${material.id}')">
                                        <i class="fas fa-eye"></i>
                                    </button>
                                    <button class="btn btn-sm btn-warning" onclick="adminManager.editMaterial('${material.id}')">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        
        container.innerHTML = html;
    }

    async approveMaterial(materialId) {
        if (!confirm('Deseja aprovar este material?')) return;
        
        try {
            const { error } = await supabase
                .from('materiais')
                .update({ 
                    status: 'aprovado',
                    data_publicacao: new Date()
                })
                .eq('id', materialId);
            
            if (error) throw error;
            
            alert('Material aprovado com sucesso!');
            this.loadMaterialsTable();
            this.loadDashboardData();
            
        } catch (error) {
            alert('Erro ao aprovar material: ' + error.message);
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
            
            alert('Material rejeitado.');
            this.loadMaterialsTable();
            
        } catch (error) {
            alert('Erro ao rejeitar material: ' + error.message);
        }
    }

    showRejectModal(materialId) {
        const motivo = prompt('Digite o motivo da rejeição:');
        if (motivo) {
            this.rejectMaterial(materialId, motivo);
        }
    }

    viewMaterial(materialId) {
        window.open(`../material.html?id=${materialId}`, '_blank');
    }

    setupEventListeners() {
        // Filtro de busca
        const searchInput = document.getElementById('searchMaterial');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const search = e.target.value;
                this.loadMaterialsTable({ search });
            });
        }
        
        // Filtro de status
        const statusFilter = document.getElementById('filterStatus');
        if (statusFilter) {
            statusFilter.addEventListener('change', (e) => {
                const status = e.target.value;
                this.loadMaterialsTable({ status });
            });
        }
    }
}

// Inicializar gerenciador admin
const adminManager = new AdminManager();
window.adminManager = adminManager;
