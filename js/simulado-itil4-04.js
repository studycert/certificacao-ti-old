        // Array com as 40 questões CORRIGIDAS conforme as correções solicitadas
        const questions = [
            {
                number: 1,
                text: `Qual é o um conceito importante relacionado ao princípio orientador "pensar e trabalhar holisticamente"?`,
                options: [
                    "Em um processo ou procedimento, usar o número mínimo de etapas necessárias para realizar o objetivo",
                    "Nenhum serviço ou elemento de um serviço, trabalha de forma isolada",
                    "Eliminar qualquer coisa que represente um real desperdício",
                    "O trabalho e as consequências devem ser visíveis, sem agendas ocultas, com informações compartilhadas"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B (Nenhum serviço ou elemento de um serviço, trabalha de forma isolada)\n\nO princípio "pensar e trabalhar holisticamente" enfatiza que todos os componentes de um serviço estão interconectados e não funcionam isoladamente.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Refere-se ao princípio "manter de forma simples e prática"\n• C: Relaciona-se ao princípio "foco no valor"\n• D: Refere-se ao princípio "colaborar e promover visibilidade"`
            },
            {
                number: 2,
                text: `"Resistir à tentação de fazer tudo de uma vez" está relacionado a qual dos princípios orientadores?`,
                options: [
                    "Foco no valor",
                    "Colaborar e promover visibilidade",
                    "Começar de onde você está",
                    "Progredir iterativamente com feedback"
                ],
                correct: 3,
                explanation: `✅ RESPOSTA CORRETA: D (Progredir iterativamente com feedback)\n\nEste princípio orientador enfatiza a importância de dividir o trabalho em partes menores e gerenciáveis, progredindo por meio de iterações com feedback contínuo.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Foco no valor enfatiza a importância de entender e entregar valor\n• B: Colaborar e promover visibilidade trata da comunicação e transparência\n• C: Começar de onde você está enfatiza o aproveitamento do que já existe`
            },
            {
                number: 3,
                text: `"Objetividade na análise da situação atual" é um dos aspectos de aplicação de qual princípio orientador?`,
                options: [
                    "Foco no valor",
                    "Colaborar e promover visibilidade",
                    "Começar de onde você está",
                    "Pensar e trabalhar holisticamente"
                ],
                correct: 2,
                explanation: `✅ RESPOSTA CORRETA: C (Começar de onde você está)\n\nA objetividade na análise da situação atual é fundamental para o princípio "começar de onde você está", que enfatiza a importância de avaliar realisticamente o estado atual antes de iniciar melhorias.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Foco no valor trata da entrega de valor aos stakeholders\n• B: Colaborar e promover visibilidade enfatiza a comunicação transparente\n• D: Pensar e trabalhar holisticamente trata da visão sistêmica`
            },
            {
                number: 4,
                text: `Identifique as palavras que faltam na seguinte frase: O propósito da prática Gerenciamento de Incidente é [...] dos incidentes pela restauração do serviço à operação normal o mais breve possível`,
                options: [
                    "eliminar a causa",
                    "minimizar o impacto negativo",
                    "melhorar os tempos de solução",
                    "maximizar a quantidade de resolução"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B (minimizar o impacto negativo)\n\nO propósito do Gerenciamento de Incidentes é minimizar o impacto negativo dos incidentes restaurando a operação normal o mais rápido possível.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Eliminar a causa é objetivo do Gerenciamento de Problemas\n• C: Melhorar tempos de solução é um objetivo secundário\n• D: Maximizar quantidade não é um propósito do Gerenciamento de Incidentes`
            },
            {
                number: 5,
                text: `Qual alternativa apresenta algumas práticas que possuem interfaces relevantes com a prática de gerenciamento de problema?\n\n1. Melhoria Contínua\n2. Gerenciamento de Requisição de Serviço\n3. Habilitação de Mudança\n4. Gerenciamento de Incidente`,
                options: [
                    "1, 2 e 3",
                    "1, 2 e 4",
                    "2, 3 e 4",
                    "1, 3 e 4"
                ],
                correct: 3,
                explanation: `✅ RESPOSTA CORRETA: D (1, 3 e 4)\n\nO Gerenciamento de Problemas tem interfaces importantes com:\n• 1: Melhoria Contínua (para melhorar processos)\n• 3: Habilitação de Mudança (para implementar soluções)\n• 4: Gerenciamento de Incidente (para identificar problemas recorrentes)\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A, B, C: Não incluem todas as práticas com interfaces relevantes`
            },
            {
                number: 6,
                text: `Qual das alternativas NÃO apresenta o conceito corretamente?`,
                options: [
                    "Valor pode ser definido como os benefícios, a utilidade e a importância percebidos de algo que é produzido ou fornecido",
                    "Uma característica dos produtos é que eles normalmente são itens simples, e sempre deixam visíveis todos os seus componentes e o suporte para sua entrega de forma completa",
                    "Produto pode ser definido como uma configuração dos recursos de uma organização projetados para oferecer valor para um consumidor",
                    "O valor deve ser uma criação conjunta, fruto da colaboração entre provedores e consumidores, e outras organizações relevantes nas relações de serviço"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B\n\nEsta afirmação está incorreta porque produtos podem ser complexos e nem sempre deixam visíveis todos os seus componentes e suporte.\n\n🚫 POR QUE AS OUTRAS ESTÃO CORRETAS:\n• A: Definição correta de valor\n• C: Definição correta de produto\n• D: Conceito correto de cocriação de valor`
            },
            {
                number: 7,
                text: `Um desafio para o princípio "manter de forma simples e prática" é o tratamento de exceções. Qual é a melhor alternativa para lidar com as exceções?`,
                options: [
                    "Tentar resolver todo tipo de exceção",
                    "Criar critérios que possam ser usados para lidar com as exceções em geral",
                    "Analisar todas as práticas, processos, serviços e métricas para mapear todas as exceções",
                    "Eliminar objetivos conflitantes"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B (Criar critérios que possam ser usados para lidar com as exceções em geral)\n\nA melhor abordagem para lidar com exceções é criar critérios claros que possam ser aplicados de forma consistente, mantendo a simplicidade.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Tentar resolver todas as exceções vai contra o princípio da simplicidade\n• C: Mapear todas as exceções pode ser excessivamente complexo\n• D: Eliminar objetivos conflitantes é importante, mas não resolve especificamente o tratamento de exceções`
            },
            {
                number: 8,
                text: `Qual atividade da cadeia de valor deve garantir o constante aperfeiçoamento de produtos, serviços e práticas ao longo de todas as atividades da cadeia de valor?`,
                options: [
                    "Planejar",
                    "Engajar",
                    "Melhorar",
                    "Desenho e transição"
                ],
                correct: 2,
                explanation: `✅ RESPOSTA CORRETA: C (Melhorar)\n\nA atividade "Melhorar" é responsável por garantir o aperfeiçoamento contínuo de produtos, serviços e práticas em toda a cadeia de valor.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Planejar define direção e estratégia\n• B: Engajar foca no relacionamento com stakeholders\n• D: Desenho e transição trata do desenvolvimento e implementação`
            },
            {
                number: 9,
                text: `Qual alternativa descreve as práticas de gerenciamento "geral"?`,
                options: [
                    "Práticas de gerenciamento de serviço, desenvolvidas nas indústrias de gerenciamento de serviço e de gerenciamento de serviço de TI",
                    "Adotadas e adaptadas para o gerenciamento de serviços, a partir de domínios da administração geral de negócio",
                    "Práticas de gerenciamento técnico, adaptadas do domínio do gerenciamento de tecnologia",
                    "Práticas de gerenciamento de serviço adaptadas das normas ISO"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B (Adotadas e adaptadas para o gerenciamento de serviços, a partir de domínios da administração geral de negócio)\n\nAs práticas de gerenciamento geral são aquelas adotadas e adaptadas de domínios de administração geral de negócios.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Descreve práticas de gerenciamento de serviço\n• C: Descreve práticas de gerenciamento técnico\n• D: Descreve práticas baseadas em normas ISO`
            },
            {
                number: 10,
                text: `Analisando o instrumento conhecido como "mapa de calor", qual afirmativa representa algumas das atividades da cadeia de valor que recebem maior participação da prática central de serviço?\n\n1. Engajar\n2. Planejar\n3. Melhorar\n4. Entrega e suporte`,
                options: [
                    "1, 2 e 3",
                    "1, 2 e 4",
                    "2, 3 e 4",
                    "1, 3 e 4"
                ],
                correct: 3,
                explanation: `✅ RESPOSTA CORRETA: D (1, 3 e 4)\n\nCORREÇÃO: A Central de Serviço tem maior participação nas atividades:\n• 1: Engajar (comunicação com usuários)\n• 3: Melhorar (coleta de feedback para melhorias)\n• 4: Entrega e suporte (resolução de incidentes e requisições)\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A, B, C: Não incluem todas as atividades com maior participação`
            },
            {
                number: 11,
                text: `Qual é o nome do papel envolvido na avaliação e autorização de mudanças?`,
                options: [
                    "Grupo de habilitação de mudança",
                    "Autoridade de mudança",
                    "Comitê Diretivo",
                    "Gerência sênior"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B (Autoridade de mudança)\n\nA Autoridade de Mudança é o papel responsável por avaliar e autorizar mudanças.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Grupo de habilitação de mudança é um termo incorreto\n• C: Comitê Diretivo tem responsabilidades mais amplas\n• D: Gerência sênior pode fazer parte da autoridade de mudança, mas não é o nome específico`
            },
            {
                number: 12,
                text: `Qual alternativa representa as características de uma mudança emergencial?\n\n1. precisa ser implementada o mais breve possível\n2. dispensa documentação e avaliação de risco\n3. normalmente, não é inserida no calendário de mudança\n4. dentro do possível, passa pelos mesmos testes, avaliação e autorização das mudanças normais`,
                options: [
                    "1, 2 e 3",
                    "1, 2 e 4",
                    "1, 3 e 4",
                    "2, 3 e 4"
                ],
                correct: 2,
                explanation: `✅ RESPOSTA CORRETA: C (1, 3 e 4)\n\nCaracterísticas de uma mudança emergencial:\n• 1: Precisa ser implementada o mais breve possível\n• 3: Normalmente não é inserida no calendário de mudança\n• 4: Dentro do possível, passa pelos mesmos testes, avaliação e autorização\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A, B: Incluem o item 2 que está incorreto (NÃO dispensa avaliação de risco)\n• D: Não inclui a necessidade de implementação rápida`
            },
            {
                number: 13,
                text: `Qual alternativa apresenta grupos que podem ser envolvidos no diagnóstico e resolução de incidentes?\n\n1. Usuários\n2. Grupos temporários\n3. Envolvidos na recuperação de desastres`,
                options: [
                    "1 e 2",
                    "1 e 3",
                    "2 e 3",
                    "1, 2 e 3"
                ],
                correct: 3,
                explanation: `✅ RESPOSTA CORRETA: D (1, 2 e 3)\n\nTodos esses grupos podem estar envolvidos no diagnóstico e resolução de incidentes:\n• 1: Usuários (podem fornecer informações importantes)\n• 2: Grupos temporários (formados para incidentes específicos)\n• 3: Envolvidos na recuperação de desastres (para incidentes graves)\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A, B, C: Não incluem todos os grupos relevantes`
            },
            {
                number: 14,
                text: `Disponibilidade de sistema, reação a incidentes e tempos de resolução representam qual tipo de métrica?`,
                options: [
                    "Métricas operacionais",
                    "Métricas de negócio",
                    "Medições baseadas em negócio",
                    "Pesquisa"
                ],
                correct: 0,
                explanation: `✅ RESPOSTA CORRETA: A (Métricas operacionais)\n\nDisponibilidade, tempo de reação e tempos de resolução são exemplos de métricas operacionais que medem o desempenho dos serviços.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• B: Métricas de negócio medem impacto no negócio\n• C: Termo genérico, não específico\n• D: Pesquisa é um método de coleta, não um tipo de métrica`
            },
            {
                number: 15,
                text: `Analisando o instrumento chamado "mapa de calor", qual afirmativa representa algumas das atividades da cadeia de valor que recebem maior participação da prática de gerenciamento de incidente?\n\n1. Engajar\n2. Melhorar\n3. Entrega e suporte`,
                options: [
                    "1 e 2",
                    "1 e 3",
                    "2 e 3",
                    "1, 2 e 3"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B (1 e 3)\n\nO Gerenciamento de Incidentes tem maior participação em:\n• 1: Engajar (comunicação sobre incidentes)\n• 3: Entrega e suporte (resolução de incidentes)\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A, C, D: Incluem "Melhorar" que tem participação moderada, não alta`
            },
            {
                number: 16,
                text: `Quais afirmativas estão corretas?\n\n1. Os princípios norteadores incorporam as mensagens essenciais da ITIL e do gerenciamento de serviço em geral\n2. Os princípios norteadores são universalmente aplicáveis a praticamente qualquer iniciativa\n3. Os princípios norteadores permitem que as organizações integrem vários métodos em uma abordagem mais global de gerenciamento de serviço\n4. Os princípios norteadores somente serão úteis se usados todos ao mesmo tempo`,
                options: [
                    "1, 2 e 3",
                    "1, 2 e 4",
                    "2, 3 e 4",
                    "1, 3 e 4"
                ],
                correct: 0,
                explanation: `✅ RESPOSTA CORRETA: A (1, 2 e 3)\n\nAfirmações corretas sobre os princípios orientadores:\n• 1: Incorporam mensagens essenciais do ITIL\n• 2: São universalmente aplicáveis\n• 3: Permitem integração de métodos\n\n🚫 POR QUE A OUTRA ESTÁ ERRADA:\n• 4: Os princípios podem ser usados seletivamente, não necessariamente todos ao mesmo tempo`
            },
            {
                number: 17,
                text: `Qual alternativa está relacionada ao conceito de valor?`,
                options: [
                    "O conceito de valor está sujeito à percepção das partes interessadas",
                    "O conceito de valor é sempre avaliado em termos objetivos",
                    "A geração de valor reside, essencialmente, nas mãos dos provedores de serviço",
                    "As partes interessadas contribuem na definição de valor exclusivamente na especificação dos requisitos dos serviços"
                ],
                correct: 0,
                explanation: `✅ RESPOSTA CORRETA: A (O conceito de valor está sujeito à percepção das partes interessadas)\n\nO valor é subjetivo e depende da percepção das partes interessadas.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• B: O valor não é sempre objetivo\n• C: O valor é cocriado, não apenas gerado pelo provedor\n• D: As partes interessadas contribuem continuamente, não apenas na especificação inicial`
            },
            {
                number: 18,
                text: `Qual é o propósito da prática de Gerenciamento de Problema?`,
                options: [
                    "Maximizar o número de mudanças em TI bem-sucedidas, pela garantia de que os riscos sejam adequadamente avaliados, com autorização apropriada para prosseguimento da mudança",
                    "Reduzir a probabilidade e o impacto de incidentes, pela identificação das causas reais e potenciais de incidentes e pelo gerenciamento dos erros conhecidos",
                    "Minimizar o impacto negativo dos incidentes pela restauração do serviço à operação normal o mais breve possível",
                    "Observar, sistematicamente, serviços e componentes de serviço, e registrar e reportar mudanças de status específicos"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B\n\nO propósito do Gerenciamento de Problemas é reduzir a probabilidade e impacto de incidentes identificando causas e gerenciando erros conhecidos.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Propósito do Gerenciamento de Mudanças\n• C: Propósito do Gerenciamento de Incidentes\n• D: Propósito do Gerenciamento de Eventos`
            },
            {
                number: 19,
                text: `Qual etapa do modelo de melhoria contínua tem como principal foco "executar as ações de melhoria planejadas"?`,
                options: [
                    "Nós chegamos lá?",
                    "Agir",
                    "Como mantemos o impulso?",
                    "Onde estamos?"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B (Agir)\n\nA etapa "Agir" do modelo de melhoria contínua foca na execução das ações de melhoria planejadas.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Avaliação dos resultados\n• C: Consolidação das melhorias\n• D: Análise da situação atual`
            },
            {
                number: 20,
                text: `Qual termo ITIL corresponde à definição "qualquer componente com valor financeiro que pode contribuir para a entrega de um produto ou serviço de TI"?`,
                options: [
                    "Problema",
                    "Mudança",
                    "Ativo de TI",
                    "Item de configuração"
                ],
                correct: 2,
                explanation: `✅ RESPOSTA CORRETA: C (Ativo de TI)\n\nAtivo de TI é qualquer componente com valor financeiro que contribui para a entrega de produtos ou serviços de TI.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Problema é causa de um ou mais incidentes\n• B: Mudança é adição, modificação ou remoção\n• D: Item de configuração é qualquer componente que precisa ser gerenciado`
            },
            {
                number: 21,
                text: `Qual alternativa melhor descreve a contribuição da prática gerenciamento de nível de serviço na atividade "obtenção/construção" da cadeia de valor de serviço?`,
                options: [
                    "Suporte ao planejamento do portfólio de produto e serviço e às ofertas de serviço com informação sobre o desempenho real do serviço e tendências",
                    "O feedback dos usuários, e os requisitos dos clientes, representam orientações importantes para melhoria do serviço",
                    "Informação proveniente da interação do gerenciamento de nível de serviço com os clientes durante a transição",
                    "Fornecimento de objetivos de desempenho de componentes e serviço"
                ],
                correct: 3,
                explanation: `✅ RESPOSTA CORRETA: D (Fornecimento de objetivos de desempenho de componentes e serviço)\n\nNa atividade "Obtenção/construção", o Gerenciamento de Nível de Serviço contribui fornecendo objetivos de desempenho para componentes e serviços.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Contribuição para "Planejar"\n• B: Contribuição para "Melhorar"\n• C: Contribuição para "Desenho e transição"`
            },
            {
                number: 22,
                text: `Quais afirmações sobre as atividades da prática de melhoria contínua são verdadeiras?\n\n1. Prever procedimentos para identificar e registrar as oportunidades de melhoria, para avaliação e priorização\n2. Quando necessário, construir casos de negócio para auxiliar na tomada de decisão das ações de melhoria\n3. Como qualquer iniciativa ou "projeto", proceder ao planejamento e devida implementação`,
                options: [
                    "1 e 2",
                    "1 e 3",
                    "2 e 3",
                    "1, 2 e 3"
                ],
                correct: 3,
                explanation: `✅ RESPOSTA CORRETA: D (1, 2 e 3)\n\nTodas as afirmações são verdadeiras sobre as atividades da prática de melhoria contínua.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A, B, C: Excluem afirmações que estão corretas`
            },
            {
                number: 23,
                text: `Identifique as palavras que faltam na frase: "Considerar a criação de fluxos de trabalho para documentar e redirecionar qualquer solicitação considerada como requisição de serviço, mas que na verdade deveria ser tratada como [?]".`,
                options: [
                    "incidente ou mudança",
                    "problema",
                    "reclamação ou elogio",
                    "alteração de catálogo"
                ],
                correct: 0,
                explanation: `✅ RESPOSTA CORRETA: A (incidente ou mudança)\n\nSolicitações classificadas incorretamente como requisições de serviço podem ser incidentes ou mudanças que precisam ser redirecionadas.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• B: Problemas têm fluxo próprio\n• C: Reclamações ou elogios são tipos de feedback\n• D: Alterações de catálogo são mudanças específicas`
            },
            {
                number: 24,
                text: `O que é definido como: "Um modelo operacional que descreve as principais atividades necessárias para responder à demanda e facilitar a realização de valor e a criação e gerenciamento de produtos e serviços"?`,
                options: [
                    "Governança",
                    "Cadeia de valor de serviço",
                    "Sistema de valor de serviço",
                    "Princípios orientadores"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B (Cadeia de valor de serviço)\n\nA Cadeia de Valor de Serviço é o modelo operacional que descreve as atividades para responder à demanda e facilitar a realização de valor.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Governança é o sistema de direção e controle\n• C: Sistema de Valor de Serviço é mais amplo, incluindo a cadeia de valor\n• D: Princípios orientadores são diretrizes para decisões`
            },
            {
                number: 25,
                text: `Qual alternativa está correta com relação ao conceito de "oferta de serviço"?`,
                options: [
                    "Na concessão de acesso aos recursos, a propriedade desses recursos é transferida para o consumidor",
                    "Ações de serviço são atividades executadas para atender às necessidades de um consumidor de acordo com o contrato celebrado entre as partes",
                    "Quando bens são fornecidos a um consumidor, eles permanecem sob o controle do provedor, e só podem ser acessados pelo consumidor durante o período acordado",
                    "Ofertas diferentes somente podem ser criadas com base em produtos diferentes"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B\n\nAções de serviço são atividades executadas para atender às necessidades do consumidor conforme acordado.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: A propriedade não é transferida no acesso a recursos\n• C: Bens fornecidos podem ser transferidos ao consumidor\n• D: Ofertas diferentes podem ser baseadas no mesmo produto com diferentes níveis de serviço`
            },
            {
                number: 26,
                text: `Qual alternativa representa as palavras que faltam na afirmação: "A efetividade de uma organização não pode ser assegurada apenas por uma estrutura ou sistema de autoridade [?]"?`,
                options: [
                    "estabelecidos pela liderança natural",
                    "formalmente estabelecidos",
                    "descritos pelas melhores práticas",
                    "proveniente dos altos escalões"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B (formalmente estabelecidos)\n\nA efetividade organizacional não depende apenas de estruturas formalmente estabelecidas, mas também de cultura, liderança e outros fatores.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A, C, D: Não completam corretamente a afirmação sobre autoridade formal`
            },
            {
                number: 27,
                text: `Não abordar as quatro dimensões, da forma correta, pode resultar em falha na entrega dos serviços e não atendimento das expectativas de qualidade ou eficiência. Por exemplo, não considerar a dimensão de fluxos de valor e processos pode levar a...?`,
                options: [
                    "falta de alinhamento dos serviços terceirizados com as necessidades da organização",
                    "um desperdício de trabalho e duplicação de esforços",
                    "liberação das empresas do investimento em estrutura e ativos de serviço caros pelo uso de recursos 'as a service'",
                    "ocorrência de algum problema regulatório ou de conformidade"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B (um desperdício de trabalho e duplicação de esforços)\n\nNão considerar fluxos de valor e processos pode levar a ineficiências, desperdício e duplicação de esforços.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Relaciona-se à dimensão Parceiros e Fornecedores\n• C: Relaciona-se à dimensão Informação e Tecnologia\n• D: Relaciona-se à dimensão Organização e Pessoas`
            },
            {
                number: 28,
                text: `Qual alternativa apresenta as habilidades que a central de serviço precisa desenvolver?\n\n1. Empatia\n2. Atendimento ao cliente\n3. Inteligência emocional`,
                options: [
                    "1, 2 e 3",
                    "1 e 2",
                    "2 e 3",
                    "1 e 3"
                ],
                correct: 0,
                explanation: `✅ RESPOSTA CORRETA: A (1, 2 e 3)\n\nA Central de Serviço precisa desenvolver:\n• 1: Empatia (entender as necessidades dos usuários)\n• 2: Atendimento ao cliente (habilidades de comunicação)\n• 3: Inteligência emocional (autogerenciamento e relacionamento)\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• B, C, D: Não incluem todas as habilidades necessárias`
            },
            {
                number: 29,
                text: `Qual alternativa sobre a prática de Gerenciamento de Incidente NÃO é verdadeira?`,
                options: [
                    "O propósito do gerenciamento de incidente é minimizar o impacto negativo dos incidentes",
                    "O gerenciamento de incidente geralmente inclui procedimentos detalhados sobre como diagnosticar, investigar e resolver incidentes",
                    "O gerenciamento de incidente pode ter um enorme impacto na forma como o cliente e o usuário percebem o provedor de serviço",
                    "Em casos extremos, podem ser invocados planos de recuperação de desastre para restabelecer o serviço após um incidente"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B\n\nO Gerenciamento de Incidentes NÃO inclui procedimentos detalhados de diagnóstico e investigação - isso é responsabilidade do Gerenciamento de Problemas.\n\n🚫 POR QUE AS OUTRAS ESTÃO CORRETAS:\n• A: Propósito correto do Gerenciamento de Incidentes\n• C: Impacto correto na percepção do cliente\n• D: Uso correto de planos de recuperação`
            },
            {
                number: 30,
                text: `Qual alternativa melhor descreve a contribuição da prática de habilitação de mudança na atividade "Planejar" da cadeia de valor de serviço?`,
                options: [
                    "Mudanças em portfólio de produto e serviço exigem certo nível de controle",
                    "Dependendo da natureza da mudança pode ser necessário consultar ou informar clientes e usuários",
                    "Mudanças em componentes, construídos internamente ou adquiridos de fornecedores, devem ser controladas",
                    "Muitas mudanças são iniciadas como resultado de serviços novos ou modificados"
                ],
                correct: 0,
                explanation: `✅ RESPOSTA CORRETA: A (Mudanças em portfólio de produto e serviço exigem certo nível de controle)\n\nNa atividade "Planejar", a Habilitação de Mudança contribui garantindo controle sobre mudanças no portfólio de produtos e serviços.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• B: Contribuição para "Engajar"\n• C: Contribuição para "Obtenção/construção"\n• D: Contribuição para "Desenho e transição"`
            },
            {
                number: 31,
                text: `Qual alternativa melhor caracteriza uma mudança emergencial?`,
                options: [
                    "Mudança que precisa ser agendada, avaliada e autorizada, seguindo um processo definido",
                    "Mudança que, normalmente, precisa ser implementada o mais breve possível",
                    "Mudança de baixo risco, muito conhecida e totalmente documentada",
                    "Mudança que segue o processo padrão, mas com prazos mais curtos"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B (Mudança que, normalmente, precisa ser implementada o mais breve possível)\n\nMudanças emergenciais são aquelas que precisam ser implementadas o mais breve possível para resolver situações críticas.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Descreve mudança padrão\n• C: Descreve mudança padrão pré-aprovada\n• D: Descreve mudança acelerada, não emergencial`
            },
            {
                number: 32,
                text: `Qual é o propósito da prática de gerenciamento de implantação?`,
                options: [
                    "Garantir que a disponibilidade e o desempenho de um serviço sejam mantidos em nível suficiente, em caso de desastre",
                    "Suportar a qualidade acordada de um serviço, pelo tratamento de todas as requisições, predefinidas e iniciadas pelo usuário, de forma eficaz, facilitada e amigável",
                    "Movimentar hardware, software, documentação, processos, e qualquer outro componente, novo ou modificado, para ambientes de produção",
                    "Minimizar o impacto negativo das interrupções pela restauração do serviço à operação normal o mais breve possível"
                ],
                correct: 2,
                explanation: `✅ RESPOSTA CORRETA: C\n\nO propósito do Gerenciamento de Implantação é movimentar componentes novos ou modificados para ambientes de produção.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Propósito do Gerenciamento de Continuidade de Serviço\n• B: Propósito do Gerenciamento de Requisição de Serviço\n• D: Propósito do Gerenciamento de Incidentes`
            },
            {
                number: 33,
                text: `Qual atividade da cadeia de valor tem como seu objetivo envolver todas as partes interessadas, em uma rede colaborativa?`,
                options: [
                    "Desenho e transição",
                    "Obtenção/construção",
                    "Engajar",
                    "Entrega e suporte"
                ],
                correct: 2,
                explanation: `✅ RESPOSTA CORRETA: C (Engajar)\n\nA atividade "Engajar" tem como objetivo envolver todas as partes interessadas em uma rede colaborativa.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Foca no design e implementação de serviços\n• B: Foca no desenvolvimento e aquisição de componentes\n• D: Foca na operação e suporte dos serviços`
            },
            {
                number: 34,
                text: `Qual dos elementos descritos no Sistema de Valor do Serviço (SVS) é definido como: "Conjunto de atividades interconectadas que uma organização executa para entregar um produto ou serviço para seus consumidores, e facilitar a realização de valor"?`,
                options: [
                    "Princípios norteadores",
                    "Práticas",
                    "Cadeia de valor de serviço",
                    "Melhoria contínua"
                ],
                correct: 2,
                explanation: `✅ RESPOSTA CORRETA: C (Cadeia de valor de serviço)\n\nA Cadeia de Valor de Serviço é o conjunto de atividades interconectadas para entregar produtos/serviços e facilitar a realização de valor.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Princípios orientadores são diretrizes\n• B: Práticas são conjuntos de recursos organizacionais\n• D: Melhoria contínua é uma prática`
            },
            {
                number: 35,
                text: `Que modelo ou abordagem ilustra como os serviços entregues pelo provedor modificam ou criam novos recursos para os seus consumidores?`,
                options: [
                    "Modelo de melhoria contínua",
                    "Modelo de relacionamento de serviço",
                    "Sistema de valor de serviço",
                    "Cadeia de valor de serviço"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B (Modelo de relacionamento de serviço)\n\nO Modelo de Relacionamento de Serviço ilustra como os serviços modificam ou criam recursos para os consumidores.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Modelo para melhorar serviços\n• C: Sistema completo para gerenciamento de serviços\n• D: Conjunto de atividades para entrega de valor`
            },
            {
                number: 36,
                text: `As ações de criação, modificação, entrega, manutenção e suporte de componentes, produtos e serviços são executadas, de forma integrada e coordenada, por quais atividades da cadeia de valor?\n\n1. Planejar\n2. Desenho e transição\n3. Obter e construir\n4. Entrega e suporte`,
                options: [
                    "1, 2 e 3",
                    "1, 2 e 4",
                    "2, 3 e 4",
                    "1, 3 e 4"
                ],
                correct: 2,
                explanation: `✅ RESPOSTA CORRETA: C (2, 3 e 4)\n\nAs ações são executadas por:\n• 2: Desenho e transição (design e implementação)\n• 3: Obter e construir (desenvolvimento e aquisição)\n• 4: Entrega e suporte (operação e suporte)\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A, B, D: Incluem "Planejar" que é atividade estratégica, não de execução`
            },
            {
                number: 37,
                text: `Os relatórios de métricas do provedor do serviço estão "verdes", dando a impressão de um bom trabalho. Mas, na verdade os clientes estão insatisfeitos com o serviço recebido. Qual é o nome desse efeito?`,
                options: [
                    "Goiaba",
                    "Abacate",
                    "Melancia",
                    "Abacaxi"
                ],
                correct: 2,
                explanation: `✅ RESPOSTA CORRETA: C (Melancia)\n\nO "efeito melancia" ocorre quando as métricas mostram verde (bom desempenho), mas internamente estão vermelhas (problemas), assim como uma melancia é verde por fora e vermelha por dentro.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A, B, D: Não são os nomes corretos para este efeito`
            },
            {
                number: 38,
                text: `Identifique as palavras que faltam na seguinte frase: O propósito da prática de gerenciamento de monitoração e evento é observar, sistematicamente, serviços e componentes de serviço, e registrar e reportar mudanças de status específicos, identificados [?].`,
                options: [
                    "como incidentes",
                    "como problemas",
                    "como eventos",
                    "como requisitos dos clientes"
                ],
                correct: 2,
                explanation: `✅ RESPOSTA CORRETA: C (como eventos)\n\nO Gerenciamento de Monitoração e Evento identifica mudanças de status como eventos.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Incidentes são eventos que causam interrupção\n• B: Problemas são causas de incidentes\n• D: Requisitos são necessidades dos clientes`
            },
            {
                number: 39,
                text: `Qual das alternativas representa os tipos de custos a serem considerados por um consumidor?\n\n1. Custos de criação do serviço\n2. Custos removidos pelo serviço\n3. Custos impostos pelo serviço\n4. Preço cobrado pelo serviço`,
                options: [
                    "1 e 2",
                    "1 e 3",
                    "2 e 3",
                    "2, 3 e 4"
                ],
                correct: 2,
                explanation: `✅ RESPOSTA CORRETA: C (2 e 3)\n\nCORREÇÃO: Os custos considerados pelo consumidor são:\n• 2: Custos removidos pelo serviço (economias)\n• 3: Custos impostos pelo serviço (custos adicionais)\n\nO preço cobrado pelo serviço (item 4) não é considerado um custo do ponto de vista do consumidor, mas sim um valor a ser pago.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A, B, D: Incluem itens que não são custos do consumidor`
            },
            {
                number: 40,
                text: `Qual alternativa melhor descreve a contribuição da prática de gerenciamento de requisição de serviço na atividade "Entrega e suporte" da cadeia de valor de serviço?`,
                options: [
                    "O gerenciamento de requisição contribui para o aperfeiçoamento pela provisão de informações de tendência, qualidade e feedback",
                    "O gerenciamento de requisição de serviço inclui comunicação regular com usuários para receber requisitos, estabelecer expectativas e fornecer atualização de status",
                    "Mudanças padrão podem ser iniciadas e atendidas como requisições de serviço",
                    "O gerenciamento de requisição de serviço contribui de forma significativa para a entrega normal do serviço"
                ],
                correct: 3,
                explanation: `✅ RESPOSTA CORRETA: D (O gerenciamento de requisição de serviço contribui de forma significativa para a entrega normal do serviço)\n\nNa atividade "Entrega e suporte", o Gerenciamento de Requisição de Serviço contribui significativamente para a entrega normal do serviço.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Contribuição para "Melhorar"\n• B: Contribuição para "Engajar"\n• C: Exemplo específico, não a contribuição geral`
            }
        ];

        // Variáveis de estado
        let currentQuestion = 0;
        let userAnswers = Array(questions.length).fill(null);
        let markedQuestions = Array(questions.length).fill(false);
        let timeLeft = 60 * 60;
        let timerInterval;
        let examFinished = false;

        // Elementos DOM
        const elements = {
            startScreen: document.getElementById('start-screen'),
            examArea: document.getElementById('exam-area'),
            resultsScreen: document.getElementById('results-screen'),
            answersScreen: document.getElementById('answers-screen'),
            questionNumber: document.getElementById('question-number'),
            questionText: document.getElementById('question-text'),
            optionsContainer: document.getElementById('options-container'),
            currentQuestion: document.getElementById('current-question'),
            totalQuestions: document.getElementById('total-questions'),
            timer: document.getElementById('timer'),
            questionGrid: document.getElementById('question-grid'),
            feedback: document.getElementById('feedback'),
            finishBtnRow: document.getElementById('finish-btn-row')
        };

        // Inicialização
        function init() {
            document.getElementById('start-btn').addEventListener('click', startExam);
            document.getElementById('prev-btn').addEventListener('click', () => navigate(-1));
            document.getElementById('next-btn').addEventListener('click', () => navigate(1));
            document.getElementById('finish-btn').addEventListener('click', finishExam);
            document.getElementById('reset-btn').addEventListener('click', resetExam);
            document.getElementById('mark-btn').addEventListener('click', toggleMark);
            document.getElementById('explanation-btn').addEventListener('click', showExplanation);
            document.getElementById('review-btn').addEventListener('click', showAnsweredQuestions);
            document.getElementById('restart-btn').addEventListener('click', resetExam);
            document.getElementById('back-to-results').addEventListener('click', () => {
                elements.answersScreen.style.display = 'none';
                elements.resultsScreen.style.display = 'block';
            });
            document.getElementById('full-report-btn').addEventListener('click', showFullReport);

            elements.totalQuestions.textContent = questions.length;
            createQuestionGrid();
        }

        function startExam() {
            elements.startScreen.style.display = 'none';
            elements.examArea.style.display = 'block';
            loadQuestion(0);
            startTimer();
        }

        function createQuestionGrid() {
            elements.questionGrid.innerHTML = '';
            questions.forEach((_, index) => {
                const item = document.createElement('div');
                item.className = 'grid-item';
                item.textContent = index + 1;
                item.addEventListener('click', () => loadQuestion(index));
                elements.questionGrid.appendChild(item);
            });
            updateNavigation();
        }

        function loadQuestion(index) {
            if (examFinished) return;
            
            currentQuestion = index;
            const question = questions[index];
            
            elements.questionNumber.textContent = `Questão ${question.number}`;
            elements.questionText.textContent = question.text;
            elements.currentQuestion.textContent = question.number;
            
            elements.optionsContainer.innerHTML = '';
            question.options.forEach((option, i) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                
                const label = document.createElement('div');
                label.className = 'option-label';
                label.textContent = String.fromCharCode(65 + i);
                
                const text = document.createElement('div');
                text.className = 'option-text';
                text.textContent = option;
                
                optionElement.appendChild(label);
                optionElement.appendChild(text);
                
                if (userAnswers[index] === i) {
                    optionElement.classList.add('selected');
                }
                
                if (userAnswers[index] !== null) {
                    optionElement.style.pointerEvents = 'none';
                    if (i === question.correct) {
                        optionElement.classList.add('correct');
                    } else if (i === userAnswers[index] && userAnswers[index] !== question.correct) {
                        optionElement.classList.add('incorrect');
                    }
                } else {
                    optionElement.addEventListener('click', () => selectOption(i));
                }
                
                elements.optionsContainer.appendChild(optionElement);
            });
            
            updateNavigation();
            updateMarkButton();
            updateFinishButton();
            
            if (userAnswers[index] !== null) {
                showFeedback(index);
            } else {
                elements.feedback.style.display = 'none';
            }
        }

        function updateFinishButton() {
            if (currentQuestion === questions.length - 1) {
                elements.finishBtnRow.style.display = 'flex';
            } else {
                elements.finishBtnRow.style.display = 'none';
            }
        }

        function selectOption(optionIndex) {
            userAnswers[currentQuestion] = optionIndex;
            showFeedback(currentQuestion);
            updateNavigation();
            updateFinishButton();
            
            const options = elements.optionsContainer.querySelectorAll('.option');
            options.forEach(option => {
                option.style.pointerEvents = 'none';
            });

            updateQuestionGrid();
        }

        function showFeedback(index) {
            const question = questions[index];
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === question.correct;
            
            const options = elements.optionsContainer.querySelectorAll('.option');
            options.forEach((option, i) => {
                option.classList.remove('correct', 'incorrect', 'selected');
                if (i === userAnswer) {
                    option.classList.add('selected');
                }
                if (i === question.correct) {
                    option.classList.add('correct');
                } else if (i === userAnswer && !isCorrect) {
                    option.classList.add('incorrect');
                }
            });
            
            elements.feedback.textContent = isCorrect ? '✅ CORRETO' : '❌ INCORRETO';
            elements.feedback.className = `feedback-container ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`;
            elements.feedback.style.display = 'block';
        }

        function showExplanation() {
            const question = questions[currentQuestion];
            const userAnswer = userAnswers[currentQuestion];
            
            if (userAnswer === null) {
                alert('⚠️ Selecione uma resposta antes de ver a explicação.');
                return;
            }
            
            const isCorrect = userAnswer === question.correct;
            let explanationMessage = `📝 EXPLICAÇÃO DA QUESTÃO ${question.number}\n\n`;
            
            if (isCorrect) {
                explanationMessage += `🎉 Parabéns! Você acertou!\n\n`;
            } else {
                explanationMessage += `💡 Resposta correta: ${String.fromCharCode(65 + question.correct)}\n\n`;
            }
            
            explanationMessage += `${question.explanation}`;
            
            alert(explanationMessage);
        }

        function showAnsweredQuestions() {
            elements.resultsScreen.style.display = 'none';
            elements.answersScreen.style.display = 'block';
            
            const container = document.getElementById('answers-container');
            container.innerHTML = '';
            
            let answeredCount = 0;
            
            questions.forEach((question, index) => {
                const userAnswer = userAnswers[index];
                
                if (userAnswer !== null) {
                    answeredCount++;
                    const isCorrect = userAnswer === question.correct;
                    
                    const item = document.createElement('div');
                    item.className = 'answer-item';
                    item.innerHTML = `
                        <div class="answer-question"><strong>🔍 Questão ${question.number}:</strong><br>${question.text}</div>
                        <div class="${isCorrect ? 'correct-answer' : 'incorrect-answer'}">
                            📝 Sua resposta: ${String.fromCharCode(65 + userAnswer)} - ${question.options[userAnswer]}
                        </div>
                        <div class="correct-answer">
                            ✅ Correta: ${String.fromCharCode(65 + question.correct)} - ${question.options[question.correct]}
                        </div>
                        <button class="explanation-btn" onclick="toggleExplanation(${index})">
                            💡 Ver Explicação
                        </button>
                        <div class="answer-explanation" id="explanation-${index}">
                            <strong>🎯 Explicação:</strong><br>${question.explanation}
                        </div>
                    `;
                    container.appendChild(item);
                }
            });
            
            if (answeredCount === 0) {
                container.innerHTML = '<p style="text-align: center; color: #7f8c8d;">Nenhuma questão foi respondida.</p>';
            }
        }

        function showFullReport() {
            let report = "📊 RELATÓRIO COMPLETO DO SIMULADO ITIL 4 - PMG ACADEMY\n\n";
            report += "=".repeat(60) + "\n\n";
            
            const score = userAnswers.reduce((acc, answer, index) => 
                answer === questions[index].correct ? acc + 1 : acc, 0);
            const percentage = (score / questions.length) * 100;
            
            report += `RESULTADO FINAL: ${score}/${questions.length} (${percentage.toFixed(1)}%)\n\n`;
            report += "=".repeat(60) + "\n\n";
            
            questions.forEach((question, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === question.correct;
                
                report += `🔍 QUESTÃO ${question.number}\n`;
                report += `${question.text}\n\n`;
                report += `SUA RESPOSTA: ${userAnswer !== null ? 
                    `${String.fromCharCode(65 + userAnswer)} - ${question.options[userAnswer]}` : 
                    '❌ NÃO RESPONDIDA'}\n`;
                report += `RESPOSTA CORRETA: ${String.fromCharCode(65 + question.correct)} - ${question.options[question.correct]}\n`;
                report += `STATUS: ${isCorrect ? '✅ CORRETO' : '❌ INCORRETO'}\n\n`;
                report += `💡 EXPLICAÇÃO:\n${question.explanation}\n\n`;
                report += "=".repeat(60) + "\n\n";
            });
            
            // CORREÇÃO: Usar Blob com charset UTF-8 para preservar acentos
            const blob = new Blob([report], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `relatorio-simulado-itil4-pmg-academy-${new Date().toLocaleDateString('pt-BR')}.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        function toggleMark() {
            markedQuestions[currentQuestion] = !markedQuestions[currentQuestion];
            updateQuestionGrid();
            updateMarkButton();
        }

        function updateMarkButton() {
            const btn = document.getElementById('mark-btn');
            if (markedQuestions[currentQuestion]) {
                btn.innerHTML = '📌 Marcada';
                btn.classList.remove('btn-warning');
                btn.classList.add('btn-orange');
            } else {
                btn.innerHTML = '📌 Marcar';
                btn.classList.remove('btn-orange');
                btn.classList.add('btn-warning');
            }
        }

        function updateQuestionGrid() {
            const items = elements.questionGrid.querySelectorAll('.grid-item');
            items.forEach((item, index) => {
                item.classList.remove('current', 'answered', 'marked');
                if (index === currentQuestion) item.classList.add('current');
                if (userAnswers[index] !== null) item.classList.add('answered');
                if (markedQuestions[index]) item.classList.add('marked');
            });
        }

        function updateNavigation() {
            updateQuestionGrid();
            
            document.getElementById('prev-btn').disabled = currentQuestion === 0;
            document.getElementById('next-btn').disabled = currentQuestion === questions.length - 1;
            
            const nextBtn = document.getElementById('next-btn');
            if (currentQuestion === questions.length - 1) {
                nextBtn.innerHTML = 'Última ➡️';
            } else {
                nextBtn.innerHTML = 'Próxima ➡️';
            }
        }

        function navigate(direction) {
            const newIndex = currentQuestion + direction;
            if (newIndex >= 0 && newIndex < questions.length) {
                loadQuestion(newIndex);
            }
        }

        function startTimer() {
            updateTimer();
            timerInterval = setInterval(() => {
                timeLeft--;
                updateTimer();
                if (timeLeft <= 0) finishExam();
            }, 1000);
        }

        function updateTimer() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            elements.timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (timeLeft < 300) {
                elements.timer.style.color = '#e74c3c';
                elements.timer.style.animation = 'pulse 1s infinite';
            }
        }

        function finishExam() {
            const unanswered = userAnswers.filter(answer => answer === null).length;
            
            if (unanswered > 0) {
                if (!confirm(`⚠️ Você tem ${unanswered} questão(ões) não respondida(s). Deseja finalizar mesmo assim?`)) {
                    return;
                }
            }
            
            examFinished = true;
            clearInterval(timerInterval);
            
            const score = userAnswers.reduce((acc, answer, index) => 
                answer === questions[index].correct ? acc + 1 : acc, 0);
            const percentage = (score / questions.length) * 100;
            
            showResults(score, percentage);
        }

        function showResults(score, percentage) {
            elements.examArea.style.display = 'none';
            elements.resultsScreen.style.display = 'block';
            
            document.getElementById('score-display').textContent = `${score}/${questions.length}`;
            
            let message = '';
            let color = '#3498db';
            let emoji = '😊';
            
            if (percentage >= 85) {
                message = 'Excelente! Domínio completo dos conceitos ITIL! 🎉';
                color = '#27ae60';
                emoji = '🏆';
            } else if (percentage >= 70) {
                message = 'Bom trabalho! No caminho certo para certificação! 👍';
                emoji = '⭐';
            } else if (percentage >= 65) {
                message = 'Pontuação mínima atingida. Recomendamos mais estudo. 📚';
                color = '#f39c12';
                emoji = '📖';
            } else {
                message = 'Continue estudando! Reveja os conceitos ITIL. 💪';
                color = '#e74c3c';
                emoji = '🎯';
            }
            
            document.getElementById('score-display').style.color = color;
            document.getElementById('score-text').textContent = `${percentage.toFixed(1)}% de acertos. ${emoji} ${message}`;
        }

        function resetExam() {
            if (confirm('🔄 Reiniciar simulado? Todo o progresso atual será perdido.')) {
                currentQuestion = 0;
                userAnswers = Array(questions.length).fill(null);
                markedQuestions = Array(questions.length).fill(false);
                timeLeft = 60 * 60;
                examFinished = false;
                
                elements.resultsScreen.style.display = 'none';
                elements.answersScreen.style.display = 'none';
                elements.examArea.style.display = 'none';
                elements.startScreen.style.display = 'block';
                
                clearInterval(timerInterval);
                elements.timer.textContent = '60:00';
                elements.timer.style.color = '#e74c3c';
                elements.timer.style.animation = 'none';
                
                createQuestionGrid();
            }
        }

        document.addEventListener('DOMContentLoaded', init);

        window.toggleExplanation = function(index) {
            const explanation = document.getElementById(`explanation-${index}`);
            explanation.classList.toggle('explanation-show');
        };

        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0% { opacity: 1; }
                50% { opacity: 0.5; }
                100% { opacity: 1; }
            }
        `;
        document.head.appendChild(style);