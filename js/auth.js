class AuthManager {
    constructor() {
        this.user = null;
        this.isAdmin = false;
        this.initAuth();
    }

    async initAuth() {
        // Verificar sessão existente
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session) {
            this.user = session.user;
            await this.checkAdminStatus();
            this.updateUI();
        }
        
        // Escutar mudanças de autenticação
        supabase.auth.onAuthStateChange(async (event, session) => {
            if (session) {
                this.user = session.user;
                await this.checkAdminStatus();
            } else {
                this.user = null;
                this.isAdmin = false;
            }
            this.updateUI();
        });
    }

    async checkAdminStatus() {
        if (!this.user) return false;
        
        // Verificar se o usuário é admin (por email ou tabela específica)
        const adminEmails = ['admin@studyCert.com', 'administrador@studyCert.com'];
        this.isAdmin = adminEmails.includes(this.user.email);
        
        // Ou verificar em uma tabela de admins no banco
        const { data } = await supabase
            .from('usuarios')
            .select('is_admin')
            .eq('auth_uid', this.user.id)
            .single();
            
        if (data && data.is_admin) {
            this.isAdmin = true;
        }
        
        return this.isAdmin;
    }

    updateUI() {
        const authButtons = document.getElementById('authButtons');
        const adminLink = document.getElementById('adminLink');
        
        if (!authButtons) return;
        
        if (this.user) {
            // Usuário logado
            authButtons.innerHTML = `
                <div class="user-menu">
                    <button class="btn btn-outline" id="userMenuBtn">
                        <i class="fas fa-user"></i> ${this.user.email.split('@')[0]}
                    </button>
                    <div class="user-dropdown" id="userDropdown">
                        <a href="#" class="dropdown-item">
                            <i class="fas fa-user"></i> Perfil
                        </a>
                        <a href="#" class="dropdown-item">
                            <i class="fas fa-book"></i> Meus Materiais
                        </a>
                        <a href="#" class="dropdown-item">
                            <i class="fas fa-download"></i> Downloads
                        </a>
                        <hr>
                        <a href="#" class="dropdown-item text-danger" id="logoutBtn">
                            <i class="fas fa-sign-out-alt"></i> Sair
                        </a>
                    </div>
                </div>
            `;
            
            // Mostrar link de admin se for administrador
            if (this.isAdmin && adminLink) {
                adminLink.style.display = 'block';
            }
            
            // Configurar eventos do dropdown
            this.setupUserMenu();
        } else {
            // Usuário não logado
            authButtons.innerHTML = `
                <a href="auth/login.html" class="btn btn-outline">Entrar</a>
                <a href="auth/register.html" class="btn btn-primary">Cadastrar</a>
            `;
            
            if (adminLink) {
                adminLink.style.display = 'none';
            }
        }
    }

    setupUserMenu() {
        const userMenuBtn = document.getElementById('userMenuBtn');
        const userDropdown = document.getElementById('userDropdown');
        const logoutBtn = document.getElementById('logoutBtn');
        
        if (userMenuBtn) {
            userMenuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                userDropdown.classList.toggle('show');
            });
            
            // Fechar dropdown ao clicar fora
            document.addEventListener('click', () => {
                userDropdown.classList.remove('show');
            });
        }
        
        if (logoutBtn) {
            logoutBtn.addEventListener('click', async (e) => {
                e.preventDefault();
                await this.logout();
            });
        }
    }

    async login(email, password) {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            });
            
            if (error) throw error;
            
            this.user = data.user;
            await this.checkAdminStatus();
            this.updateUI();
            
            this.showAlert('success', 'Login realizado com sucesso!');
            return { success: true, user: data.user };
        } catch (error) {
            this.showAlert('error', error.message);
            return { success: false, error: error.message };
        }
    }

    async register(email, password, name) {
        try {
            // Criar usuário no Auth
            const { data: authData, error: authError } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        name: name,
                        created_at: new Date()
                    }
                }
            });
            
            if (authError) throw authError;
            
            // Criar registro na tabela usuarios
            const { error: dbError } = await supabase
                .from('usuarios')
                .insert([
                    {
                        email: email,
                        nome: name,
                        auth_uid: authData.user.id,
                        status: 'ativo',
                        nivel_experiencia: 'iniciante',
                        created_at: new Date()
                    }
                ]);
            
            if (dbError) throw dbError;
            
            this.showAlert('success', 'Cadastro realizado com sucesso! Verifique seu email.');
            return { success: true };
        } catch (error) {
            this.showAlert('error', error.message);
            return { success: false, error: error.message };
        }
    }

    async logout() {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
            
            this.user = null;
            this.isAdmin = false;
            this.updateUI();
            
            this.showAlert('success', 'Logout realizado com sucesso!');
            window.location.href = 'index.html';
        } catch (error) {
            this.showAlert('error', error.message);
        }
    }

    showAlert(type, message) {
        // Remover alertas existentes
        const existingAlert = document.querySelector('.alert');
        if (existingAlert) existingAlert.remove();
        
        // Criar novo alerta
        const alert = document.createElement('div');
        alert.className = `alert alert-${type} fade-in`;
        alert.innerHTML = `
            <span>${message}</span>
            <button class="close-alert">&times;</button>
        `;
        
        // Adicionar ao corpo
        document.body.prepend(alert);
        
        // Configurar botão de fechar
        alert.querySelector('.close-alert').addEventListener('click', () => {
            alert.remove();
        });
        
        // Remover automaticamente após 5 segundos
        setTimeout(() => {
            if (alert.parentNode) {
                alert.remove();
            }
        }, 5000);
    }
}

// Inicializar gerenciador de autenticação
const authManager = new AuthManager();

// Exportar para uso em outros arquivos
window.authManager = authManager;
