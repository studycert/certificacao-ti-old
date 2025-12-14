// Configuração centralizada do Supabase
const SUPABASE_CONFIG = {
    URL: 'https://blnnwbrhrckqegaiparr.supabase.co',
    KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsbm53YnJocmNrcWVnYWlwYXJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NDgzMzMsImV4cCI6MjA1ODAyNDMzM30.K0VcgeJp7g9K4k5g6y5WdpHNYnWArIaeNkM86WchbPw',
    BUCKET: 'materiais'
};

// Inicializar cliente Supabase
const supabase = window.supabase.createClient(
    SUPABASE_CONFIG.URL, 
    SUPABASE_CONFIG.KEY
);

// Funções de utilitário para materiais
const MaterialService = {
    // Buscar materiais por categoria
    async getMateriaisByCategory(categoria, limit = 10, offset = 0) {
        const { data, error } = await supabase
            .from('materiais')
            .select('*')
            .eq('categoria', categoria)
            .eq('status', 'aprovado')
            .order('created_at', { ascending: false })
            .range(offset, offset + limit - 1);
        
        if (error) throw error;
        return data;
    },

    // Buscar materiais do usuário
    async getMyMateriais(userId, status = null) {
        let query = supabase
            .from('materiais')
            .select('*')
            .eq('usuario_id', userId)
            .order('created_at', { ascending: false });
        
        if (status) {
            query = query.eq('status', status);
        }
        
        const { data, error } = await query;
        if (error) throw error;
        return data;
    },

    // Inserir novo material
    async insertMaterial(materialData) {
        const { data, error } = await supabase
            .from('materiais')
            .insert([materialData])
            .select();
        
        if (error) throw error;
        return data[0];
    },

    // Upload de arquivo
    async uploadFile(file, userId) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `${userId}/${fileName}`;

        const { data, error } = await supabase.storage
            .from(SUPABASE_CONFIG.BUCKET)
            .upload(filePath, file, {
                cacheControl: '3600',
                upsert: false
            });

        if (error) throw error;

        // Obter URL pública
        const { data: { publicUrl } } = supabase.storage
            .from(SUPABASE_CONFIG.BUCKET)
            .getPublicUrl(filePath);

        return {
            url: publicUrl,
            path: filePath,
            name: fileName,
            size: file.size
        };
    },

    // Incrementar visualizações
    async incrementViews(materialId) {
        const { data, error } = await supabase.rpc('increment_views', {
            material_id: materialId
        });
        
        if (error) throw error;
        return data;
    },

    // Curtir material
    async likeMaterial(materialId, userId) {
        const { data, error } = await supabase
            .from('curtidas')
            .insert([
                {
                    material_id: materialId,
                    usuario_id: userId,
                    tipo: 'material'
                }
            ]);
        
        if (error) {
            // Se já curtido, remover curtida
            if (error.code === '23505') {
                await supabase
                    .from('curtidas')
                    .delete()
                    .eq('material_id', materialId)
                    .eq('usuario_id', userId)
                    .eq('tipo', 'material');
                return { liked: false };
            }
            throw error;
        }
        
        return { liked: true };
    }
};

// Funções de autenticação
const AuthService = {
    // Login
    async login(email, password) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });
        
        if (error) throw error;
        return data;
    },

    // Cadastro
    async register(email, password, userData) {
        // Registrar no auth
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: userData
            }
        });
        
        if (authError) throw authError;

        // Criar usuário na tabela usuarios
        const { error: dbError } = await supabase
            .from('usuarios')
            .insert([
                {
                    id: authData.user.id,
                    email: email,
                    nome: userData.name || email.split('@')[0],
                    status: 'ativo',
                    nivel_experiencia: 'iniciante'
                }
            ]);
        
        if (dbError) {
            console.error('Erro ao criar usuário:', dbError);
            throw new Error('Erro ao criar conta. Tente novamente.');
        }

        return authData;
    },

    // Logout
    async logout() {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
    },

    // Verificar sessão
    async getSession() {
        const { data: { session } } = await supabase.auth.getSession();
        return session;
    },

    // Obter usuário atual
    async getCurrentUser() {
        const { data: { user } } = await supabase.auth.getUser();
        return user;
    }
};

// Exportar para uso global
window.supabase = supabase;
window.MaterialService = MaterialService;
window.AuthService = AuthService;
window.SUPABASE_CONFIG = SUPABASE_CONFIG;
