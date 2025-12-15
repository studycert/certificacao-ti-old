// Configuração do Supabase
const SUPABASE_URL = 'https://blnnwbrhrckqegaiparr.supabase.co';
const SUPABASE_KEY = 'sb_publishable_BRAGtPaTnBQAys82wQlwDA_ZorIxDDK';

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

// Estado do usuário
let currentUser = null;

// Inicializar autenticação
async function initAuth() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    
    if (session) {
        currentUser = session.user;
        updateUIForLoggedInUser();
    }
    
    // Escutar mudanças de autenticação
    supabaseClient.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_IN') {
            currentUser = session.user;
            updateUIForLoggedInUser();
            loadUserProfile(session.user.id);
        } else if (event === 'SIGNED_OUT') {
            currentUser = null;
            updateUIForLoggedOutUser();
        }
    });
}

// Carregar perfil do usuário
async function loadUserProfile(userId) {
    const { data, error } = await supabaseClient
        .from('usuarios')
        .select('*')
        .eq('auth_uid', userId)
        .single();
    
    if (error && error.code !== 'PGRST116') {
        console.error('Erro ao carregar perfil:', error);
    }
    
    if (data) {
        localStorage.setItem('userProfile', JSON.stringify(data));
    }
}

// Atualizar UI para usuário logado
function updateUIForLoggedInUser() {
    const authButtons = document.querySelector('.auth-buttons');
    if (authButtons) {
        authButtons.innerHTML = `
            <div class="user-dropdown">
                <button class="user-menu">
                    <i class="fas fa-user-circle"></i> Minha Conta
                </button>
                <div class="dropdown-menu">
                    <a href="#" data-action="profile">Meu Perfil</a>
                    <a href="#" data-action="mymaterials">Meus Materiais</a>
                    <a href="#" data-action="mysimulados">Meus Simulados</a>
                    <a href="#" data-action="progresso">Meu Progresso</a>
                    <hr>
                    <a href="#" data-action="logout">Sair</a>
                </div>
            </div>
        `;
        
        // Adicionar eventos ao dropdown
        document.querySelector('[data-action="logout"]')?.addEventListener('click', logout);
        document.querySelector('[data-action="profile"]')?.addEventListener('click', showProfileModal);
    }
}

// Atualizar UI para usuário deslogado
function updateUIForLoggedOutUser() {
    const authButtons = document.querySelector('.auth-buttons');
    if (authButtons) {
        authButtons.innerHTML = `
            <a href="#" class="btn btn-outline" id="loginBtn">Entrar</a>
            <a href="#" class="btn btn-primary" id="registerBtn">Cadastrar</a>
        `;
        
        document.getElementById('loginBtn')?.addEventListener('click', showLoginModal);
        document.getElementById('registerBtn')?.addEventListener('click', showRegisterModal);
    }
}

// Modal de Login
function showLoginModal() {
    const modal = createAuthModal('login');
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    // Configurar evento de submit
    modal.querySelector('form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = modal.querySelector('#loginEmail').value;
        const password = modal.querySelector('#loginPassword').value;
        
        const { error } = await supabaseClient.auth.signInWithPassword({
            email,
            password
        });
        
        if (error) {
            showAlert('error', error.message);
        } else {
            modal.remove();
            showAlert('success', 'Login realizado com sucesso!');
        }
    });
}

// Modal de Cadastro
function showRegisterModal() {
    const modal = createAuthModal('register');
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    // Configurar evento de submit
    modal.querySelector('form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = modal.querySelector('#registerEmail').value;
        const password = modal.querySelector('#registerPassword').value;
        const nome = modal.querySelector('#registerName').value;
        
        // Registrar no Supabase Auth
        const { data: authData, error: authError } = await supabaseClient.auth.signUp({
            email,
            password
        });
        
        if (authError) {
            showAlert('error', authError.message);
            return;
        }
        
        // Criar perfil na tabela usuarios
        if (authData.user) {
            const { error: profileError } = await supabaseClient
                .from('usuarios')
                .insert([{
                    email: email,
                    nome: nome,
                    auth_uid: authData.user.id,
                    status: 'ativo',
                    nivel_experiencia: 'iniciante',
                    created_at: new Date()
                }]);
            
            if (profileError) {
                console.error('Erro ao criar perfil:', profileError);
                showAlert('error', 'Conta criada, mas houve um erro ao criar o perfil.');
            } else {
                showAlert('success', 'Cadastro realizado com sucesso! Verifique seu e-mail para confirmar.');
                modal.remove();
            }
        }
    });
}

// Criar modal de autenticação
function createAuthModal(type) {
    const isLogin = type === 'login';
    
    return document.createElement('div');
}

// Logout
async function logout() {
    await supabaseClient.auth.signOut();
    localStorage.removeItem('userProfile');
    showAlert('success', 'Você saiu da sua conta.');
}

// Modal de perfil
function showProfileModal() {
    const profile = JSON.parse(localStorage.getItem('userProfile') || '{}');
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-user-edit"></i> Meu Perfil</h3>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <form id="profileForm">
                    <div class="form-group">
                        <label for="profileName">Nome Completo</label>
                        <input type="text" id="profileName" value="${profile.nome || ''}" required>
                    </div>
                    <div class="form-group">
                        <label for="profileBio">Biografia</label>
                        <textarea id="profileBio" rows="4">${profile.bio || ''}</textarea>
                    </div>
                    <div class="form-group">
                        <label for="profileNivel">Nível de Experiência</label>
                        <select id="profileNivel">
                            <option value="iniciante" ${profile.nivel_experiencia === 'iniciante' ? 'selected' : ''}>Iniciante</option>
                            <option value="intermediario" ${profile.nivel_experiencia === 'intermediario' ? 'selected' : ''}>Intermediário</option>
                            <option value="avancado" ${profile.nivel_experiencia === 'avancado' ? 'selected' : ''}>Avançado</option>
                            <option value="expert" ${profile.nivel_experiencia === 'expert' ? 'selected' : ''}>Expert</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Salvar Alterações</button>
                </form>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    // Fechar modal
    modal.querySelector('.close-modal').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
    
    // Salvar perfil
    modal.querySelector('form').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const updatedData = {
            nome: modal.querySelector('#profileName').value,
            bio: modal.querySelector('#profileBio').value,
            nivel_experiencia: modal.querySelector('#profileNivel').value,
            updated_at: new Date()
        };
        
        const { error } = await supabaseClient
            .from('usuarios')
            .update(updatedData)
            .eq('auth_uid', currentUser.id);
        
        if (error) {
            showAlert('error', 'Erro ao atualizar perfil: ' + error.message);
        } else {
            showAlert('success', 'Perfil atualizado com sucesso!');
            loadUserProfile(currentUser.id);
            modal.remove();
        }
    });
}

// Mostrar alerta
function showAlert(type, message) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `
        <span>${message}</span>
        <button class="close-alert">&times;</button>
    `;
    
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.classList.add('show');
    }, 10);
    
    // Remover alerta
    alert.querySelector('.close-alert').addEventListener('click', () => {
        alert.remove();
    });
    
    setTimeout(() => {
        if (alert.parentNode) {
            alert.remove();
        }
    }, 5000);
}

// Exportar funções
window.initAuth = initAuth;
window.showLoginModal = showLoginModal;
window.showRegisterModal = showRegisterModal;
window.currentUser = () => currentUser;
window.supabaseClient = supabaseClient;
