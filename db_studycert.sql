-- ============================================
-- BACKUP COMPLETO - STUDY CERT
-- Exportado: 15/12/2025 11:05:16
-- Host: db.blnnwbrhrckqegaiparr.supabase.co
-- Banco: postgres
-- ============================================


--
-- TABELA: certificacoes
--

-- Estrutura:
                                Table "public.certificacoes"
        Column        |           Type           | Collation | Nullable |      Default       
----------------------+--------------------------+-----------+----------+--------------------
 id                   | uuid                     |           | not null | uuid_generate_v4()
 nome                 | character varying(150)   |           | not null | 
 fornecedor           | character varying(100)   |           | not null | 
 codigo_certificacao  | character varying(50)    |           |          | 
 nivel                | character varying(50)    |           |          | 
 categoria            | character varying(50)    |           |          | 
 descricao            | text                     |           |          | 
 link_oficial         | character varying(500)   |           |          | 
 duracao_estudo_horas | integer                  |           |          | 
 preco_medio          | numeric(10,2)            |           |          | 
 dificuldade          | character varying(20)    |           |          | 
 popularidade         | integer                  |           |          | 0
 ativo                | boolean                  |           |          | true
 icon_name            | character varying(50)    |           |          | 
 created_at           | timestamp with time zone |           |          | now()
 updated_at           | timestamp with time zone |           |          | now()
Indexes:
    "certificacoes_pkey" PRIMARY KEY, btree (id)
    "idx_certificacoes_ativo" btree (ativo)
    "idx_certificacoes_categoria" btree (categoria)
    "idx_certificacoes_fornecedor" btree (fornecedor)
    "idx_certificacoes_nome" btree (nome)
    "idx_certificacoes_popularidade" btree (popularidade DESC)
Check constraints:
    "certificacoes_dificuldade_check" CHECK (dificuldade::text = ANY (ARRAY['facil'::character varying, 'intermediario'::character varying, 'dificil'::character varying, 'avancado'::character varying]::text[]))
Referenced by:
    TABLE "progresso_usuario" CONSTRAINT "progresso_usuario_certificacao_id_fkey" FOREIGN KEY (certificacao_id) REFERENCES certificacoes(id) ON DELETE SET NULL
    TABLE "simulados" CONSTRAINT "simulados_certificacao_id_fkey" FOREIGN KEY (certificacao_id) REFERENCES certificacoes(id) ON DELETE SET NULL
Policies (row security enabled): (none)


-- Total de registros: 10
-- Dados:


--
-- TABELA: comentarios_materiais
--

-- Estrutura:
                              Table "public.comentarios_materiais"
      Column      |           Type           | Collation | Nullable |          Default           
------------------+--------------------------+-----------+----------+----------------------------
 id               | uuid                     |           | not null | uuid_generate_v4()
 material_id      | uuid                     |           |          | 
 usuario_id       | uuid                     |           |          | 
 conteudo         | text                     |           | not null | 
 nota_utilidade   | integer                  |           |          | 
 curtidas         | integer                  |           |          | 0
 resposta_para_id | uuid                     |           |          | 
 status           | character varying(20)    |           |          | 'ativo'::character varying
 created_at       | timestamp with time zone |           |          | now()
 updated_at       | timestamp with time zone |           |          | now()
Indexes:
    "comentarios_materiais_pkey" PRIMARY KEY, btree (id)
Check constraints:
    "comentarios_materiais_nota_utilidade_check" CHECK (nota_utilidade >= 1 AND nota_utilidade <= 5)
Foreign-key constraints:
    "comentarios_materiais_material_id_fkey" FOREIGN KEY (material_id) REFERENCES materiais(id) ON DELETE CASCADE
    "comentarios_materiais_resposta_para_id_fkey" FOREIGN KEY (resposta_para_id) REFERENCES comentarios_materiais(id) ON DELETE CASCADE
    "comentarios_materiais_usuario_id_fkey" FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL
Referenced by:
    TABLE "comentarios_materiais" CONSTRAINT "comentarios_materiais_resposta_para_id_fkey" FOREIGN KEY (resposta_para_id) REFERENCES comentarios_materiais(id) ON DELETE CASCADE
    TABLE "denuncias" CONSTRAINT "denuncias_comentario_id_fkey" FOREIGN KEY (comentario_id) REFERENCES comentarios_materiais(id) ON DELETE CASCADE
Policies (row security enabled): (none)


-- Total de registros: 0
-- (Tabela vazia)


--
-- TABELA: configuracoes
--

-- Estrutura:
                           Table "public.configuracoes"
   Column   |           Type           | Collation | Nullable |      Default       
------------+--------------------------+-----------+----------+--------------------
 id         | uuid                     |           | not null | uuid_generate_v4()
 chave      | character varying(100)   |           | not null | 
 valor      | text                     |           |          | 
 tipo       | character varying(50)    |           |          | 
 descricao  | text                     |           |          | 
 created_at | timestamp with time zone |           |          | now()
 updated_at | timestamp with time zone |           |          | now()
Indexes:
    "configuracoes_pkey" PRIMARY KEY, btree (id)
    "configuracoes_chave_key" UNIQUE CONSTRAINT, btree (chave)
Policies (row security enabled): (none)


-- Total de registros: 10
-- Dados:


--
-- TABELA: curtidas
--

-- Estrutura:
                              Table "public.curtidas"
   Column    |           Type           | Collation | Nullable |      Default       
-------------+--------------------------+-----------+----------+--------------------
 id          | uuid                     |           | not null | uuid_generate_v4()
 usuario_id  | uuid                     |           |          | 
 material_id | uuid                     |           |          | 
 post_id     | uuid                     |           |          | 
 resposta_id | uuid                     |           |          | 
 tipo        | character varying(20)    |           |          | 
 created_at  | timestamp with time zone |           |          | now()
Indexes:
    "curtidas_pkey" PRIMARY KEY, btree (id)
    "curtidas_usuario_id_material_id_tipo_key" UNIQUE CONSTRAINT, btree (usuario_id, material_id, tipo)
    "curtidas_usuario_id_post_id_tipo_key" UNIQUE CONSTRAINT, btree (usuario_id, post_id, tipo)
    "curtidas_usuario_id_resposta_id_tipo_key" UNIQUE CONSTRAINT, btree (usuario_id, resposta_id, tipo)
Check constraints:
    "check_apenas_um_id" CHECK (((material_id IS NOT NULL)::integer + (post_id IS NOT NULL)::integer + (resposta_id IS NOT NULL)::integer) = 1)
    "curtidas_tipo_check" CHECK (tipo::text = ANY (ARRAY['material'::character varying, 'post'::character varying, 'resposta'::character varying]::text[]))
Foreign-key constraints:
    "curtidas_material_id_fkey" FOREIGN KEY (material_id) REFERENCES materiais(id) ON DELETE CASCADE
    "curtidas_post_id_fkey" FOREIGN KEY (post_id) REFERENCES forum_posts(id) ON DELETE CASCADE
    "curtidas_resposta_id_fkey" FOREIGN KEY (resposta_id) REFERENCES forum_respostas(id) ON DELETE CASCADE
    "curtidas_usuario_id_fkey" FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
Policies (row security enabled): (none)
Triggers:
    tr_atualizar_curtidas_material AFTER INSERT OR DELETE ON curtidas FOR EACH ROW EXECUTE FUNCTION atualizar_curtidas_material()


-- Total de registros: 0
-- (Tabela vazia)


--
-- TABELA: denuncias
--

-- Estrutura:
                                     Table "public.denuncias"
     Column     |           Type           | Collation | Nullable |            Default            
----------------+--------------------------+-----------+----------+-------------------------------
 id             | uuid                     |           | not null | uuid_generate_v4()
 usuario_id     | uuid                     |           |          | 
 material_id    | uuid                     |           |          | 
 post_id        | uuid                     |           |          | 
 resposta_id    | uuid                     |           |          | 
 comentario_id  | uuid                     |           |          | 
 motivo         | character varying(100)   |           | not null | 
 descricao      | text                     |           |          | 
 status         | character varying(20)    |           |          | 'pendente'::character varying
 moderador_id   | uuid                     |           |          | 
 data_resolucao | timestamp with time zone |           |          | 
 created_at     | timestamp with time zone |           |          | now()
 updated_at     | timestamp with time zone |           |          | now()
Indexes:
    "denuncias_pkey" PRIMARY KEY, btree (id)
Check constraints:
    "check_apenas_um_conteudo" CHECK (((material_id IS NOT NULL)::integer + (post_id IS NOT NULL)::integer + (resposta_id IS NOT NULL)::integer + (comentario_id IS NOT NULL)::integer) = 1)
    "denuncias_status_check" CHECK (status::text = ANY (ARRAY['pendente'::character varying, 'analise'::character varying, 'resolvida'::character varying, 'descartada'::character varying]::text[]))
Foreign-key constraints:
    "denuncias_comentario_id_fkey" FOREIGN KEY (comentario_id) REFERENCES comentarios_materiais(id) ON DELETE CASCADE
    "denuncias_material_id_fkey" FOREIGN KEY (material_id) REFERENCES materiais(id) ON DELETE CASCADE
    "denuncias_moderador_id_fkey" FOREIGN KEY (moderador_id) REFERENCES usuarios(id) ON DELETE SET NULL
    "denuncias_post_id_fkey" FOREIGN KEY (post_id) REFERENCES forum_posts(id) ON DELETE CASCADE
    "denuncias_resposta_id_fkey" FOREIGN KEY (resposta_id) REFERENCES forum_respostas(id) ON DELETE CASCADE
    "denuncias_usuario_id_fkey" FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL
Policies (row security enabled): (none)


-- Total de registros: 0
-- (Tabela vazia)


--
-- TABELA: downloads_materiais
--

-- Estrutura:
                          Table "public.downloads_materiais"
    Column     |           Type           | Collation | Nullable |      Default       
---------------+--------------------------+-----------+----------+--------------------
 id            | uuid                     |           | not null | uuid_generate_v4()
 material_id   | uuid                     |           |          | 
 usuario_id    | uuid                     |           |          | 
 data_download | timestamp with time zone |           |          | now()
 ip_address    | inet                     |           |          | 
 user_agent    | text                     |           |          | 
Indexes:
    "downloads_materiais_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "downloads_materiais_material_id_fkey" FOREIGN KEY (material_id) REFERENCES materiais(id) ON DELETE CASCADE
    "downloads_materiais_usuario_id_fkey" FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL
Triggers:
    tr_registrar_download AFTER INSERT ON downloads_materiais FOR EACH ROW EXECUTE FUNCTION registrar_download_material()


-- Total de registros: 0
-- (Tabela vazia)


--
-- TABELA: forum_categorias
--

-- Estrutura:
                            Table "public.forum_categorias"
     Column      |           Type           | Collation | Nullable |      Default       
-----------------+--------------------------+-----------+----------+--------------------
 id              | uuid                     |           | not null | uuid_generate_v4()
 nome            | character varying(100)   |           | not null | 
 descricao       | text                     |           |          | 
 icone           | character varying(50)    |           |          | 
 ordem           | integer                  |           |          | 0
 total_posts     | integer                  |           |          | 0
 total_respostas | integer                  |           |          | 0
 ativo           | boolean                  |           |          | true
 created_at      | timestamp with time zone |           |          | now()
Indexes:
    "forum_categorias_pkey" PRIMARY KEY, btree (id)
Referenced by:
    TABLE "forum_posts" CONSTRAINT "forum_posts_categoria_id_fkey" FOREIGN KEY (categoria_id) REFERENCES forum_categorias(id) ON DELETE SET NULL
Policies (row security enabled): (none)


-- Total de registros: 10
-- Dados:


--
-- TABELA: forum_posts
--

-- Estrutura:
                               Table "public.forum_posts"
     Column      |           Type           | Collation | Nullable |      Default       
-----------------+--------------------------+-----------+----------+--------------------
 id              | uuid                     |           | not null | uuid_generate_v4()
 titulo          | character varying(200)   |           | not null | 
 conteudo        | text                     |           | not null | 
 categoria_id    | uuid                     |           |          | 
 usuario_id      | uuid                     |           |          | 
 visualizacoes   | integer                  |           |          | 0
 respostas       | integer                  |           |          | 0
 ultima_resposta | timestamp with time zone |           |          | 
 fixado          | boolean                  |           |          | false
 fechado         | boolean                  |           |          | false
 tags            | text[]                   |           |          | '{}'::text[]
 created_at      | timestamp with time zone |           |          | now()
 updated_at      | timestamp with time zone |           |          | now()
Indexes:
    "forum_posts_pkey" PRIMARY KEY, btree (id)
    "idx_forum_posts_categoria_id" btree (categoria_id)
    "idx_forum_posts_created_at" btree (created_at DESC)
    "idx_forum_posts_fixado" btree (fixado)
    "idx_forum_posts_tags" gin (tags)
    "idx_forum_posts_usuario_id" btree (usuario_id)
Foreign-key constraints:
    "forum_posts_categoria_id_fkey" FOREIGN KEY (categoria_id) REFERENCES forum_categorias(id) ON DELETE SET NULL
    "forum_posts_usuario_id_fkey" FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL
Referenced by:
    TABLE "curtidas" CONSTRAINT "curtidas_post_id_fkey" FOREIGN KEY (post_id) REFERENCES forum_posts(id) ON DELETE CASCADE
    TABLE "denuncias" CONSTRAINT "denuncias_post_id_fkey" FOREIGN KEY (post_id) REFERENCES forum_posts(id) ON DELETE CASCADE
    TABLE "forum_respostas" CONSTRAINT "forum_respostas_post_id_fkey" FOREIGN KEY (post_id) REFERENCES forum_posts(id) ON DELETE CASCADE
Policies:
    POLICY "Todos podem ver posts do fórum" FOR SELECT
      USING (true)


-- Total de registros: 0
-- (Tabela vazia)


--
-- TABELA: forum_respostas
--

-- Estrutura:
                             Table "public.forum_respostas"
     Column      |           Type           | Collation | Nullable |      Default       
-----------------+--------------------------+-----------+----------+--------------------
 id              | uuid                     |           | not null | uuid_generate_v4()
 post_id         | uuid                     |           |          | 
 usuario_id      | uuid                     |           |          | 
 conteudo        | text                     |           | not null | 
 resposta_pai_id | uuid                     |           |          | 
 curtidas        | integer                  |           |          | 0
 melhor_resposta | boolean                  |           |          | false
 created_at      | timestamp with time zone |           |          | now()
 updated_at      | timestamp with time zone |           |          | now()
Indexes:
    "forum_respostas_pkey" PRIMARY KEY, btree (id)
    "idx_forum_respostas_melhor_resposta" btree (melhor_resposta)
    "idx_forum_respostas_post_id" btree (post_id)
    "idx_forum_respostas_usuario_id" btree (usuario_id)
Foreign-key constraints:
    "forum_respostas_post_id_fkey" FOREIGN KEY (post_id) REFERENCES forum_posts(id) ON DELETE CASCADE
    "forum_respostas_resposta_pai_id_fkey" FOREIGN KEY (resposta_pai_id) REFERENCES forum_respostas(id) ON DELETE CASCADE
    "forum_respostas_usuario_id_fkey" FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL
Referenced by:
    TABLE "curtidas" CONSTRAINT "curtidas_resposta_id_fkey" FOREIGN KEY (resposta_id) REFERENCES forum_respostas(id) ON DELETE CASCADE
    TABLE "denuncias" CONSTRAINT "denuncias_resposta_id_fkey" FOREIGN KEY (resposta_id) REFERENCES forum_respostas(id) ON DELETE CASCADE
    TABLE "forum_respostas" CONSTRAINT "forum_respostas_resposta_pai_id_fkey" FOREIGN KEY (resposta_pai_id) REFERENCES forum_respostas(id) ON DELETE CASCADE
Policies:
    POLICY "Todos podem ver respostas do fórum" FOR SELECT
      USING (true)
Triggers:
    tr_atualizar_respostas AFTER INSERT OR DELETE ON forum_respostas FOR EACH ROW EXECUTE FUNCTION atualizar_contador_respostas()


-- Total de registros: 0
-- (Tabela vazia)


--
-- TABELA: materiais
--

-- Estrutura:
                                         Table "public.materiais"
      Column       |           Type           | Collation | Nullable |              Default               
-------------------+--------------------------+-----------+----------+------------------------------------
 id                | uuid                     |           | not null | uuid_generate_v4()
 titulo            | character varying(200)   |           | not null | 
 descricao         | text                     |           |          | 
 tipo              | character varying(20)    |           | not null | 
 tamanho_mb        | numeric(10,2)            |           |          | 
 nome_arquivo      | character varying(255)   |           |          | 
 caminho_arquivo   | character varying(500)   |           |          | 
 url_externa       | character varying(500)   |           |          | 
 visualizacoes     | integer                  |           |          | 0
 downloads         | integer                  |           |          | 0
 curtidas          | integer                  |           |          | 0
 usuario_id        | uuid                     |           |          | 
 categoria         | character varying(50)    |           | not null | 
 subcategoria      | character varying(50)    |           |          | 
 tags              | text[]                   |           |          | '{}'::text[]
 nivel_dificuldade | character varying(20)    |           |          | 'intermediario'::character varying
 idioma            | character varying(20)    |           |          | 'portugues'::character varying
 status            | character varying(20)    |           |          | 'pendente'::character varying
 motivo_rejeicao   | text                     |           |          | 
 data_publicacao   | timestamp with time zone |           |          | 
 data_atualizacao  | timestamp with time zone |           |          | now()
 created_at        | timestamp with time zone |           |          | now()
 updated_at        | timestamp with time zone |           |          | now()
Indexes:
    "materiais_pkey" PRIMARY KEY, btree (id)
    "idx_materiais_categoria" btree (categoria)
    "idx_materiais_created_at" btree (created_at DESC)
    "idx_materiais_curtidas" btree (curtidas DESC)
    "idx_materiais_data_publicacao" btree (data_publicacao DESC) WHERE status::text = 'aprovado'::text
    "idx_materiais_status" btree (status)
    "idx_materiais_tags" gin (tags)
    "idx_materiais_tipo" btree (tipo)
    "idx_materiais_usuario_id" btree (usuario_id)
    "idx_materiais_visualizacoes" btree (visualizacoes DESC)
Check constraints:
    "check_caminho_ou_url" CHECK (caminho_arquivo IS NOT NULL OR url_externa IS NOT NULL)
    "materiais_status_check" CHECK (status::text = ANY (ARRAY['pendente'::character varying, 'aprovado'::character varying, 'rejeitado'::character varying, 'ativo'::character varying]::text[]))
    "materiais_tipo_check" CHECK (tipo::text = ANY (ARRAY['pdf'::character varying, 'ppt'::character varying, 'doc'::character varying, 'video'::character varying, 'zip'::character varying, 'link'::character varying]::text[]))
Foreign-key constraints:
    "materiais_usuario_id_fkey" FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL
Referenced by:
    TABLE "comentarios_materiais" CONSTRAINT "comentarios_materiais_material_id_fkey" FOREIGN KEY (material_id) REFERENCES materiais(id) ON DELETE CASCADE
    TABLE "curtidas" CONSTRAINT "curtidas_material_id_fkey" FOREIGN KEY (material_id) REFERENCES materiais(id) ON DELETE CASCADE
    TABLE "denuncias" CONSTRAINT "denuncias_material_id_fkey" FOREIGN KEY (material_id) REFERENCES materiais(id) ON DELETE CASCADE
    TABLE "downloads_materiais" CONSTRAINT "downloads_materiais_material_id_fkey" FOREIGN KEY (material_id) REFERENCES materiais(id) ON DELETE CASCADE
Policies:
    POLICY "Permitir DELETE para todos" FOR DELETE
      USING (true)
    POLICY "Permitir INSERT para todos" FOR INSERT
      WITH CHECK (true)
    POLICY "Permitir SELECT para todos" FOR SELECT
      USING (true)
    POLICY "Todos podem ver materiais aprovados" FOR SELECT
      USING (((status)::text = ANY ((ARRAY['aprovado'::character varying, 'ativo'::character varying])::text[])))
Triggers:
    update_materiais_updated_at BEFORE UPDATE ON materiais FOR EACH ROW EXECUTE FUNCTION update_updated_at_column()


-- Total de registros: 1
-- Dados:


--
-- TABELA: notificacoes
--

-- Estrutura:
                            Table "public.notificacoes"
   Column   |           Type           | Collation | Nullable |      Default       
------------+--------------------------+-----------+----------+--------------------
 id         | uuid                     |           | not null | uuid_generate_v4()
 usuario_id | uuid                     |           |          | 
 tipo       | character varying(50)    |           | not null | 
 titulo     | character varying(200)   |           | not null | 
 mensagem   | text                     |           |          | 
 link       | character varying(500)   |           |          | 
 lida       | boolean                  |           |          | false
 created_at | timestamp with time zone |           |          | now()
Indexes:
    "notificacoes_pkey" PRIMARY KEY, btree (id)
    "idx_notificacoes_created_at" btree (created_at DESC)
    "idx_notificacoes_lida" btree (lida)
    "idx_notificacoes_usuario_id" btree (usuario_id)
Foreign-key constraints:
    "notificacoes_usuario_id_fkey" FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
Policies (row security enabled): (none)


-- Total de registros: 0
-- (Tabela vazia)


--
-- TABELA: progresso_usuario
--

-- Estrutura:
                                       Table "public.progresso_usuario"
         Column          |           Type           | Collation | Nullable |              Default              
-------------------------+--------------------------+-----------+----------+-----------------------------------
 id                      | uuid                     |           | not null | uuid_generate_v4()
 usuario_id              | uuid                     |           |          | 
 certificacao_id         | uuid                     |           |          | 
 status                  | character varying(20)    |           |          | 'nao_iniciado'::character varying
 progresso_percentual    | integer                  |           |          | 0
 horas_estudadas         | integer                  |           |          | 0
 data_inicio             | date                     |           |          | 
 data_previsao_conclusao | date                     |           |          | 
 data_conclusao          | date                     |           |          | 
 nota_final              | numeric(5,2)             |           |          | 
 simulado_realizados     | integer                  |           |          | 0
 materiais_estudados     | integer                  |           |          | 0
 created_at              | timestamp with time zone |           |          | now()
 updated_at              | timestamp with time zone |           |          | now()
Indexes:
    "progresso_usuario_pkey" PRIMARY KEY, btree (id)
    "idx_progresso_certificacao_id" btree (certificacao_id)
    "idx_progresso_data_conclusao" btree (data_conclusao) WHERE status::text = 'concluido'::text
    "idx_progresso_status" btree (status)
    "idx_progresso_usuario_id" btree (usuario_id)
    "progresso_usuario_usuario_id_certificacao_id_key" UNIQUE CONSTRAINT, btree (usuario_id, certificacao_id)
Check constraints:
    "progresso_usuario_progresso_percentual_check" CHECK (progresso_percentual >= 0 AND progresso_percentual <= 100)
    "progresso_usuario_status_check" CHECK (status::text = ANY (ARRAY['nao_iniciado'::character varying, 'em_andamento'::character varying, 'pausado'::character varying, 'concluido'::character varying, 'certificado'::character varying]::text[]))
Foreign-key constraints:
    "progresso_usuario_certificacao_id_fkey" FOREIGN KEY (certificacao_id) REFERENCES certificacoes(id) ON DELETE SET NULL
    "progresso_usuario_usuario_id_fkey" FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
Policies (row security enabled): (none)


-- Total de registros: 0
-- (Tabela vazia)


--
-- TABELA: simulados
--

-- Estrutura:
                                           Table "public.simulados"
         Column         |           Type           | Collation | Nullable |              Default               
------------------------+--------------------------+-----------+----------+------------------------------------
 id                     | uuid                     |           | not null | uuid_generate_v4()
 nome                   | character varying(200)   |           | not null | 
 descricao              | text                     |           |          | 
 certificacao_id        | uuid                     |           |          | 
 total_questoes         | integer                  |           | not null | 
 tempo_estimado_minutos | integer                  |           |          | 
 nivel_dificuldade      | character varying(20)    |           |          | 'intermediario'::character varying
 arquivo_url            | character varying(500)   |           |          | 
 visualizacoes          | integer                  |           |          | 0
 realizacoes            | integer                  |           |          | 0
 media_pontuacao        | numeric(5,2)             |           |          | 
 usuario_id             | uuid                     |           |          | 
 tags                   | text[]                   |           |          | '{}'::text[]
 status                 | character varying(20)    |           |          | 'pendente'::character varying
 data_publicacao        | timestamp with time zone |           |          | 
 created_at             | timestamp with time zone |           |          | now()
 updated_at             | timestamp with time zone |           |          | now()
Indexes:
    "simulados_pkey" PRIMARY KEY, btree (id)
    "idx_simulados_certificacao_id" btree (certificacao_id)
    "idx_simulados_certificacao_status" btree (certificacao_id, status)
    "idx_simulados_created_at" btree (created_at DESC)
    "idx_simulados_nivel_dificuldade" btree (nivel_dificuldade)
    "idx_simulados_status" btree (status)
    "idx_simulados_usuario_id" btree (usuario_id)
Check constraints:
    "simulados_status_check" CHECK (status::text = ANY (ARRAY['pendente'::character varying, 'aprovado'::character varying, 'rejeitado'::character varying, 'ativo'::character varying]::text[]))
Foreign-key constraints:
    "simulados_certificacao_id_fkey" FOREIGN KEY (certificacao_id) REFERENCES certificacoes(id) ON DELETE SET NULL
    "simulados_usuario_id_fkey" FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL
Policies:
    POLICY "Enable insert for all authenticated users" FOR INSERT
      TO authenticated
      WITH CHECK (true)
    POLICY "Enable insert for authenticated users only" FOR INSERT
      TO authenticated
      WITH CHECK (true)
    POLICY "Enable select for all users" FOR SELECT
      USING (true)
    POLICY "Everyone can view approved simulados" FOR SELECT
      USING (((status)::text = 'aprovado'::text))
    POLICY "Todos podem ver simulados aprovados" FOR SELECT
      USING (((status)::text = ANY ((ARRAY['aprovado'::character varying, 'ativo'::character varying])::text[])))
    POLICY "Users can view their own simulados" FOR SELECT
      TO authenticated
      USING ((auth.uid() = usuario_id))


-- Total de registros: 3
-- Dados:


--
-- TABELA: usuarios
--

-- Estrutura:
                                       Table "public.usuarios"
      Column       |           Type           | Collation | Nullable |            Default             
-------------------+--------------------------+-----------+----------+--------------------------------
 id                | uuid                     |           | not null | uuid_generate_v4()
 email             | character varying(255)   |           | not null | 
 nome              | character varying(100)   |           | not null | 
 data_nascimento   | date                     |           |          | 
 foto_url          | character varying(500)   |           |          | 
 telefone          | character varying(20)    |           |          | 
 pais              | character varying(50)    |           |          | 
 cidade            | character varying(50)    |           |          | 
 nivel_experiencia | character varying(20)    |           |          | 'iniciante'::character varying
 bio               | text                     |           |          | 
 created_at        | timestamp with time zone |           |          | now()
 updated_at        | timestamp with time zone |           |          | now()
 last_login        | timestamp with time zone |           |          | 
 status            | character varying(20)    |           |          | 'ativo'::character varying
 auth_uid          | uuid                     |           |          | 
Indexes:
    "usuarios_pkey" PRIMARY KEY, btree (id)
    "idx_usuarios_created_at" btree (created_at DESC)
    "idx_usuarios_email" btree (email)
    "idx_usuarios_status" btree (status)
    "usuarios_email_key" UNIQUE CONSTRAINT, btree (email)
Referenced by:
    TABLE "comentarios_materiais" CONSTRAINT "comentarios_materiais_usuario_id_fkey" FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL
    TABLE "curtidas" CONSTRAINT "curtidas_usuario_id_fkey" FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
    TABLE "denuncias" CONSTRAINT "denuncias_moderador_id_fkey" FOREIGN KEY (moderador_id) REFERENCES usuarios(id) ON DELETE SET NULL
    TABLE "denuncias" CONSTRAINT "denuncias_usuario_id_fkey" FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL
    TABLE "downloads_materiais" CONSTRAINT "downloads_materiais_usuario_id_fkey" FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL
    TABLE "forum_posts" CONSTRAINT "forum_posts_usuario_id_fkey" FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL
    TABLE "forum_respostas" CONSTRAINT "forum_respostas_usuario_id_fkey" FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL
    TABLE "materiais" CONSTRAINT "materiais_usuario_id_fkey" FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL
    TABLE "notificacoes" CONSTRAINT "notificacoes_usuario_id_fkey" FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
    TABLE "progresso_usuario" CONSTRAINT "progresso_usuario_usuario_id_fkey" FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
    TABLE "simulados" CONSTRAINT "simulados_usuario_id_fkey" FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL
Policies:
    POLICY "Usuários podem editar próprio perfil" FOR UPDATE
      USING (((auth.uid())::text = (id)::text))
    POLICY "Usuários podem ver perfis públicos" FOR SELECT
      USING (((status)::text = 'ativo'::text))
Triggers:
    update_usuarios_updated_at BEFORE UPDATE ON usuarios FOR EACH ROW EXECUTE FUNCTION update_updated_at_column()


-- Total de registros: 2
-- Dados:


--
-- TABELA: view_estatisticas_forum
--

-- Estrutura:
                    View "public.view_estatisticas_forum"
     Column      |           Type           | Collation | Nullable | Default 
-----------------+--------------------------+-----------+----------+---------
 categoria       | character varying(100)   |           |          | 
 total_posts     | bigint                   |           |          | 
 total_respostas | bigint                   |           |          | 
 ultimo_post     | timestamp with time zone |           |          | 
 usuarios_ativos | bigint                   |           |          | 


-- Total de registros: 10
-- Dados:


--
-- TABELA: view_materiais_populares
--

-- Estrutura:
                    View "public.view_materiais_populares"
      Column       |           Type           | Collation | Nullable | Default 
-------------------+--------------------------+-----------+----------+---------
 id                | uuid                     |           |          | 
 titulo            | character varying(200)   |           |          | 
 tipo              | character varying(20)    |           |          | 
 categoria         | character varying(50)    |           |          | 
 visualizacoes     | integer                  |           |          | 
 downloads         | integer                  |           |          | 
 curtidas          | integer                  |           |          | 
 autor             | character varying(100)   |           |          | 
 created_at        | timestamp with time zone |           |          | 
 ranking_categoria | bigint                   |           |          | 


-- Total de registros: 1
-- Dados:


--
-- TABELA: view_progresso_usuarios
--

-- Estrutura:
                       View "public.view_progresso_usuarios"
         Column          |          Type          | Collation | Nullable | Default 
-------------------------+------------------------+-----------+----------+---------
 nome                    | character varying(100) |           |          | 
 email                   | character varying(255) |           |          | 
 certificacao            | character varying(150) |           |          | 
 progresso_percentual    | integer                |           |          | 
 status_progresso        | character varying(20)  |           |          | 
 horas_estudadas         | integer                |           |          | 
 data_inicio             | date                   |           |          | 
 data_previsao_conclusao | date                   |           |          | 


-- Total de registros: 0
-- (Tabela vazia)


-- ============================================
-- RESUMO DO BACKUP
-- Tabelas exportadas: 17
-- Total de registros: 47
-- Tamanho aproximado: 40K
-- ============================================
