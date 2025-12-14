-- ==================== FUNÇÃO: INSERIR MATERIAL ====================
CREATE OR REPLACE FUNCTION inserir_material(
    p_titulo VARCHAR(200),
    p_descricao TEXT,
    p_tipo VARCHAR(20),
    p_categoria VARCHAR(50),
    p_subcategoria VARCHAR(50),
    p_usuario_id UUID,
    p_caminho_arquivo VARCHAR(500) DEFAULT NULL,
    p_url_externa VARCHAR(500) DEFAULT NULL,
    p_nome_arquivo VARCHAR(255) DEFAULT NULL,
    p_tamanho_mb DECIMAL(10,2) DEFAULT NULL,
    p_tags TEXT[] DEFAULT NULL,
    p_nivel_dificuldade VARCHAR(20) DEFAULT 'intermediario',
    p_idioma VARCHAR(20) DEFAULT 'portugues'
)
RETURNS UUID AS $$
DECLARE
    v_material_id UUID;
    v_has_arquivo BOOLEAN;
    v_has_url BOOLEAN;
BEGIN
    -- Validar se tem arquivo ou URL
    v_has_arquivo := (p_caminho_arquivo IS NOT NULL);
    v_has_url := (p_url_externa IS NOT NULL);
    
    IF NOT (v_has_arquieu OR v_has_url) THEN
        RAISE EXCEPTION 'Material deve ter caminho_arquivo OU url_externa';
    END IF;
    
    -- Inserir material
    INSERT INTO materiais (
        titulo,
        descricao,
        tipo,
        categoria,
        subcategoria,
        usuario_id,
        caminho_arquivo,
        url_externa,
        nome_arquivo,
        tamanho_mb,
        tags,
        nivel_dificuldade,
        idioma,
        status,
        data_publicacao,
        visualizacoes,
        downloads,
        curtidas
    ) VALUES (
        p_titulo,
        p_descricao,
        p_tipo,
        p_categoria,
        p_subcategoria,
        p_usuario_id,
        p_caminho_arquivo,
        p_url_externa,
        p_nome_arquivo,
        p_tamanho_mb,
        COALESCE(p_tags, ARRAY[]::TEXT[]),
        p_nivel_dificuldade,
        p_idioma,
        'pendente', -- Status inicial
        CURRENT_TIMESTAMP,
        0, -- visualizacoes iniciais
        0, -- downloads iniciais
        0  -- curtidas iniciais
    ) RETURNING id INTO v_material_id;
    
    -- Criar notificação para moderadores (se houver)
    INSERT INTO notificacoes (usuario_id, tipo, titulo, mensagem, link)
    SELECT 
        id,
        'novo_material',
        'Novo material para moderação',
        'Material: ' || p_titulo || ' enviado por usuário.',
        '/admin/materiais/' || v_material_id
    FROM usuarios 
    WHERE id IN (
        -- Aqui você pode adicionar lógica para selecionar moderadores
        SELECT id FROM usuarios LIMIT 1
    );
    
    RETURN v_material_id;
EXCEPTION
    WHEN OTHERS THEN
        RAISE EXCEPTION 'Erro ao inserir material: %', SQLERRM;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ==================== FUNÇÃO: APROVAR MATERIAL ====================
CREATE OR REPLACE FUNCTION aprovar_material(
    p_material_id UUID,
    p_moderador_id UUID
)
RETURNS VOID AS $$
BEGIN
    UPDATE materiais
    SET 
        status = 'aprovado',
        motivo_rejeicao = NULL,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = p_material_id
    AND status = 'pendente';
    
    -- Notificar o autor
    INSERT INTO notificacoes (usuario_id, tipo, titulo, mensagem, link)
    SELECT 
        usuario_id,
        'material_aprovado',
        'Material aprovado',
        'Seu material foi aprovado e está disponível para todos.',
        '/materiais/' || p_material_id
    FROM materiais 
    WHERE id = p_material_id;
    
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Material não encontrado ou já processado';
    END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ==================== FUNÇÃO: REJEITAR MATERIAL ====================
CREATE OR REPLACE FUNCTION rejeitar_material(
    p_material_id UUID,
    p_moderador_id UUID,
    p_motivo TEXT
)
RETURNS VOID AS $$
BEGIN
    UPDATE materiais
    SET 
        status = 'rejeitado',
        motivo_rejeicao = p_motivo,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = p_material_id
    AND status = 'pendente';
    
    -- Notificar o autor
    INSERT INTO notificacoes (usuario_id, tipo, titulo, mensagem, link)
    SELECT 
        usuario_id,
        'material_rejeitado',
        'Material rejeitado',
        'Seu material foi rejeitado. Motivo: ' || p_motivo,
        '/meus-materiais'
    FROM materiais 
    WHERE id = p_material_id;
    
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Material não encontrado ou já processado';
    END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ==================== FUNÇÃO: BUSCAR MATERIAIS POR USUÁRIO ====================
CREATE OR REPLACE FUNCTION buscar_materiais_usuario(
    p_usuario_id UUID,
    p_status VARCHAR(20) DEFAULT NULL,
    p_limit INTEGER DEFAULT 10,
    p_offset INTEGER DEFAULT 0
)
RETURNS TABLE (
    id UUID,
    titulo VARCHAR(200),
    tipo VARCHAR(20),
    categoria VARCHAR(50),
    status VARCHAR(20),
    visualizacoes INTEGER,
    downloads INTEGER,
    curtidas INTEGER,
    data_publicacao TIMESTAMPTZ,
    motivo_rejeicao TEXT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        m.id,
        m.titulo,
        m.tipo,
        m.categoria,
        m.status,
        m.visualizacoes,
        m.downloads,
        m.curtidas,
        m.data_publicacao,
        m.motivo_rejeicao
    FROM materiais m
    WHERE m.usuario_id = p_usuario_id
    AND (p_status IS NULL OR m.status = p_status)
    ORDER BY m.created_at DESC
    LIMIT p_limit
    OFFSET p_offset;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ==================== TRIGGER: ATUALIZAR ESTATÍSTICAS APÓS DOWNLOAD ====================
CREATE OR REPLACE FUNCTION registrar_download_material()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE materiais
    SET downloads = downloads + 1
    WHERE id = NEW.material_id;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Criar tabela para registrar downloads (se não existir)
CREATE TABLE IF NOT EXISTS downloads_materiais (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    material_id UUID REFERENCES materiais(id) ON DELETE CASCADE,
    usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
    data_download TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    ip_address INET,
    user_agent TEXT
);

CREATE TRIGGER tr_registrar_download
    AFTER INSERT ON downloads_materiais
    FOR EACH ROW
    EXECUTE FUNCTION registrar_download_material();

-- ==================== CRIAR BUCKET DE STORAGE NO SUPABASE ====================
-- NOTA: Execute este comando no SQL Editor do Supabase:

/*
-- Criar bucket para materiais
INSERT INTO storage.buckets (id, name, public)
VALUES ('materiais', 'materiais', true);

-- Políticas de acesso ao storage
CREATE POLICY "Permitir upload de materiais para usuários autenticados"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'materiais');

CREATE POLICY "Permitir leitura de materiais para todos"
ON storage.objects FOR SELECT TO public
USING (bucket_id = 'materiais');

CREATE POLICY "Permitir exclusão de materiais para administradores"
ON storage.objects FOR DELETE TO authenticated
USING (
    bucket_id = 'materiais' 
    AND (EXISTS (
        SELECT 1 FROM usuarios 
        WHERE usuarios.id = auth.uid() 
        AND usuarios.status = 'admin'
    ))
);
*/
