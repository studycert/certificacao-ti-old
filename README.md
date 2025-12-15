# StudyCert - Plataforma de Certificação

## Configuração do Projeto

### 1. Estrutura do Banco de Dados
O Supabase já está configurado com as seguintes tabelas:
- certificacoes
- materiais
- usuarios
- simulados
- forum_posts
- progresso_usuario
- etc.

### 2. Configuração do Storage
No Supabase, crie um bucket chamado "materiais":
1. Acesse Storage → Create new bucket
2. Nome: `materiais`
3. Habilitar: Public access
4. File size limit: 100MB
5. Click "Create bucket"

### 3. Políticas de Segurança
Adicione estas políticas no SQL Editor do Supabase:

```sql
-- Habilitar RLS na tabela materiais
ALTER TABLE materiais ENABLE ROW LEVEL SECURITY;

-- Permitir inserção para usuários autenticados
CREATE POLICY "Usuários autenticados podem inserir materiais" ON materiais
    FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- Permitir leitura para todos (aprovados)
CREATE POLICY "Todos podem ver materiais aprovados" ON materiais
    FOR SELECT USING (status IN ('aprovado', 'ativo'));

-- Permitir update para donos do material
CREATE POLICY "Donos podem editar seus materiais" ON materiais
    FOR UPDATE USING (auth.uid() = usuario_id);

-- Políticas para downloads_materiais
ALTER TABLE downloads_materiais ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuários podem inserir downloads" ON downloads_materiais
    FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- Políticas para usuarios
ALTER TABLE usuarios ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuários podem ver perfis públicos" ON usuarios
    FOR SELECT USING (status = 'ativo');

CREATE POLICY "Usuários podem editar próprio perfil" ON usuarios
    FOR UPDATE USING (auth.uid() = auth_uid);
