        // Array com as 40 questões do Simulado 5
        const questions = [
            {
                number: 1,
                text: `Qual alternativa representa recomendações válidas para o gerenciamento de requisição de serviço?\n\n1. Automatizar, no maior nível possível, as requisições de serviço e seus procedimentos para atendimento\n2. Estabelecer políticas sobre quais requisições podem ser atendidas com pouco ou nenhum tipo de aprovação\n3. Considerar a criação de fluxos de trabalho para redirecionar as solicitações que não configuram requisições de serviço`,
                options: [
                    "1 e 2",
                    "1 e 3",
                    "2 e 3",
                    "1, 2 e 3"
                ],
                correct: 3,
                explanation: `✅ RESPOSTA CORRETA: D (1, 2 e 3)\n\nTodas as recomendações são válidas para o gerenciamento de requisição de serviço:\n• 1: Automação para eficiência\n• 2: Políticas claras de aprovação\n• 3: Fluxos para solicitações não relacionadas\n\nEstas práticas melhoram a eficiência e a experiência do usuário.`
            },
            {
                number: 2,
                text: "Qual alternativa NÃO é verdadeira com relação à central de serviço?",
                options: [
                    "Um propósito da central de serviço é funcionar como canal de entrada e ponto único de contato",
                    "A central de serviço oferece uma forma clara para que os usuários possam reportar problemas, encaminhar perguntas e requisições",
                    "O foco da central de serviço é oferecer suporte a questões técnicas, em vez de tratar de pessoas e negócios",
                    "A central de serviço captura as demandas por resolução e incidentes e atendimento de requisições de serviço"
                ],
                correct: 2,
                explanation: `✅ RESPOSTA CORRETA: C\n\nA afirmação incorreta é que a central de serviço foca apenas em questões técnicas. Na verdade, ela trata tanto de aspectos técnicos quanto de relacionamento com pessoas e negócios.\n\n🚫 POR QUE AS OUTRAS ESTÃO CORRETAS:\n• A: Definição correta do propósito\n• B: Descrição adequada das funções\n• D: Captura correta das demandas`
            },
            {
                number: 3,
                text: "Uma empresa que organiza pacotes de viagens especiais para 3º idade, usualmente desempenha quais papéis?",
                options: [
                    "Cliente e usuário",
                    "Patrocinador e cliente",
                    "Provedor e consumidor",
                    "Usuário e patrocinador"
                ],
                correct: 2,
                explanation: `✅ RESPOSTA CORRETA: C (Provedor e consumidor)\n\nA empresa atua como:\n• Provedor: Oferece serviços de organização de viagens\n• Consumidor: Utiliza serviços de terceiros (hotéis, transportes, etc.)\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A, B, D: Não representam adequadamente os papéis principais`
            },
            {
                number: 4,
                text: "Qual alternativa sobre incidentes está correta?",
                options: [
                    "Incidentes mais simples e de menor impacto podem ser resolvidos antes, para liberar tempo e recursos para tratar os mais complexos",
                    "Incidentes com menor impacto exigem mais recursos e mais coordenação",
                    "Os incidentes são priorizados com base em uma classificação acordada",
                    "Não se espera qualquer participação de usuários na resolução de incidentes"
                ],
                correct: 2,
                explanation: `✅ RESPOSTA CORRETA: C\n\nOs incidentes são priorizados com base em classificação acordada, considerando urgência e impacto.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Incidentes críticos têm prioridade, não os mais simples\n• B: Incidentes de maior impacto exigem mais recursos\n• D: Usuários podem participar fornecendo informações`
            },
            {
                number: 5,
                text: "Qual alternativa inclui elementos do Sistema de Valor de Serviço (SVS)?",
                options: [
                    "Governança, práticas e melhoria contínua",
                    "Competências e habilidades",
                    "Papéis e responsabilidades",
                    "Fluxos de valor e processos"
                ],
                correct: 0,
                explanation: `✅ RESPOSTA CORRETA: A (Governança, práticas e melhoria contínua)\n\nEstes são elementos do SVS no ITIL 4.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• B, C, D: São componentes de outras partes do framework`
            },
            {
                number: 6,
                text: "Qual alternativa apresenta as fases da prática de gerenciamento de problema? 1. Identificação de problema\n2. Controle de problema\n3. Diagnóstico de causa\n4. Controle de erro",
                options: [
                    "1, 2 e 3",
                    "1, 2 e 4",
                    "2, 3 e 4",
                    "1, 3 e 4"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B (1, 2 e 4)\n\nFases do gerenciamento de problema:\n• 1: Identificação do problema\n• 2: Controle do problema\n• 4: Controle de erro\n\n🚫 POR QUE A OUTRA ESTÁ ERRADA:\n• 3: Diagnóstico de causa é uma atividade dentro do controle do problema`
            },
            {
                number: 7,
                text: "Qual atividade da cadeia de valor deve garantir um entendimento compartilhado da visão e da situação atual?",
                options: [
                    "Planejar",
                    "Engajar",
                    "Melhorar",
                    "Entrega e suporte"
                ],
                correct: 0,
                explanation: `✅ RESPOSTA CORRETA: A (Planejar)\n\nA atividade "Planejar" garante entendimento compartilhado da visão e situação atual.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• B: Foca no relacionamento com partes interessadas\n• C: Foca na melhoria contínua\n• D: Foca na operação dos serviços`
            },
            {
                number: 8,
                text: "Qual é o propósito da prática de gerenciamento de disponibilidade?",
                options: [
                    "Alinhar as práticas e serviços da organização com as necessidades do negócio, em constante mutação, através da identificação e aperfeiçoamento contínuos de serviços",
                    "Estabelecer e estimular as relações entre a organização e suas partes interessadas em nível estratégico e tático",
                    "Garantir que os fornecedores, e seus desempenhos, sejam gerenciados de forma apropriada para dar suporte à provisão continuada de produtos e serviços de qualidade",
                    "Garantir que os serviços entreguem os níveis acordados de disponibilidade para atender às necessidades de clientes e usuários"
                ],
                correct: 3,
                explanation: `✅ RESPOSTA CORRETA: D\n\nPropósito: garantir níveis acordados de disponibilidade para atender necessidades de clientes e usuários.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Propósito da Melhoria Contínua\n• B: Propósito do Gerenciamento de Relacionamento\n• C: Propósito do Gerenciamento de Fornecedor`
            },
            {
                number: 9,
                text: `Quais afirmações sobre as atividades da prática de melhoria contínua são verdadeiras?\n\n1. Normalmente, todas as melhorias são mais bem-sucedidas quando organizadas em um projeto com um esforço único e rápido\n2. Diferentes tipos de melhoria podem pedir diferentes métodos para sua consecução\n3. A intenção de uso de um modelo de melhoria contínua comprovado é aumentar a probabilidade de êxito em qualquer iniciativa dentro do gerenciamento de serviço`,
                options: [
                    "1 e 2",
                    "1 e 3",
                    "2 e 3",
                    "1, 2 e 3"
                ],
                correct: 2,
                explanation: `✅ RESPOSTA CORRETA: C (2 e 3)\n\nAfirmações corretas:\n• 2: Diferentes melhorias exigem diferentes métodos\n• 3: Modelos comprovados aumentam probabilidade de sucesso\n\n🚫 POR QUE A OUTRA ESTÁ ERRADA:\n• 1: Melhorias podem ser incrementais, não necessariamente únicas e rápidas`
            },
            {
                number: 10,
                text: "Qual etapa do modelo de melhoria contínua tem como principal foco 'traduzir os objetivos e metas organizacionais para o nível específico a ser tratado pela melhoria'?",
                options: [
                    "Qual é a visão?",
                    "Onde estamos?",
                    "Como chegamos lá?",
                    "Onde desejamos estar?"
                ],
                correct: 0,
                explanation: `✅ RESPOSTA CORRETA: A (Qual é a visão?)\n\n"Qual é a visão?" traduz objetivos organizacionais para o nível específico da melhoria.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• B: Foca na situação atual\n• C: Foca no planejamento\n• D: Foca na definição de metas`
            },
            {
                number: 11,
                text: "Qual alternativa apresenta as quatro primeiras etapas do modelo de melhoria contínua?",
                options: [
                    "Qual é a visão? Onde desejamos estar? Como chegamos lá? Agir",
                    "Qual é a visão? Onde estamos agora? Onde desejamos estar? Como chegamos lá?",
                    "Onde estamos agora? Onde desejamos estar? Como chegamos lá? Agir",
                    "Qual é a visão? Onde estamos agora? Como chegamos lá? Agir"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B\n\nEtapas corretas do modelo de melhoria contínua:\n• Qual é a visão?\n• Onde estamos agora?\n• Onde desejamos estar?\n• Como chegamos lá?\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A, C, D: Sequência incorreta das etapas`
            },
            {
                number: 12,
                text: "'Garantia' pode ser definida como:",
                options: [
                    "Produto tangível ou intangível gerado pela realização de uma atividade",
                    "Um possível evento que poderia causar danos ou perdas ou tornar mais difícil atingir os objetivos",
                    "Garantia de que um produto ou serviço atenderá aos requisitos acordados",
                    "Funcionalidade oferecida por um produto ou serviço para atender a uma necessidade específica"
                ],
                correct: 2,
                explanation: `✅ RESPOSTA CORRETA: C\n\nGarantia é a confiança de que um produto ou serviço atenderá aos requisitos acordados.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Definição de saída\n• B: Definição de risco\n• D: Definição de utilidade`
            },
            {
                number: 13,
                text: "Qual atividade da cadeia de valor deve prover uma boa compreensão das necessidades e bom relacionamento com todas as partes interessadas?",
                options: [
                    "Planejar",
                    "Melhorar",
                    "Entrega e suporte",
                    "Engajar"
                ],
                correct: 3,
                explanation: `✅ RESPOSTA CORRETA: D (Engajar)\n\n"Engajar" provê compreensão das necessidades e relacionamento com partes interessadas.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Foca no planejamento estratégico\n• B: Foca na melhoria contínua\n• C: Foca na operação dos serviços`
            },
            {
                number: 14,
                text: "Qual método tem foco na entrega de software para ambientes de produção, centrada na unificação e colaboração intensa entre as equipes de desenvolvimento, operações técnicas e de entrega de serviço?",
                options: [
                    "Agile",
                    "ITIL",
                    "Lean IT",
                    "DevOps"
                ],
                correct: 3,
                explanation: `✅ RESPOSTA CORRETA: D (DevOps)\n\nDevOps foca na colaboração entre desenvolvimento e operações para entrega contínua.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Agile foca em desenvolvimento iterativo\n• B: ITIL é framework de gerenciamento de serviços\n• C: Lean IT foca em eliminação de desperdícios`
            },
            {
                number: 15,
                text: "Complete a frase com as palavras que faltam: 'Valor pode ser definido como os benefícios, a utilidade e [?] percebidos de algo que é produzido ou fornecido'.",
                options: [
                    "a importância",
                    "a garantia",
                    "a prioridade",
                    "a urgência"
                ],
                correct: 0,
                explanation: `✅ RESPOSTA CORRETA: A (a importância)\n\nValor = Benefícios + Utilidade + Importância percebidos.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• B, C, D: Não são componentes da definição de valor`
            },
            {
                number: 16,
                text: "Qual é o um conceito importante relacionado ao princípio orientador 'manter de forma simples e prática'?",
                options: [
                    "Nenhum serviço ou elemento de um serviço, trabalha de forma isolada",
                    "Eliminar qualquer coisa que represente um real desperdício",
                    "Em um processo ou procedimento, usar o número mínimo de etapas necessárias para realizar o objetivo",
                    "O trabalho e as consequências devem ser visíveis, sem agendas ocultas, com informações compartilhadas"
                ],
                correct: 2,
                explanation: `✅ RESPOSTA CORRETA: C\n\nUsar número mínimo de etapas necessárias é parte de manter as coisas simples e práticas.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Relacionado a pensar holisticamente\n• B: Relacionado a foco no valor\n• D: Relacionado a colaborar e promover visibilidade`
            },
            {
                number: 17,
                text: "Qual alternativa representa os dois aspectos a serem balanceados pela prática de Habilitação de Mudança? \n\n1. necessidade de fazer mudanças benéficas\n2. quantidade de mudanças em TI\n3. proteger clientes e usuários do efeito adverso das mudanças\n4. custos envolvidos nas mudanças",
                options: [
                    "1 e 2",
                    "1 e 3",
                    "2 e 4",
                    "3 e 4"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B (1 e 3)\n\nAspectos a balancear:\n• 1: Necessidade de fazer mudanças benéficas\n• 3: Proteger clientes e usuários de efeitos adversos\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A, C, D: Combinações incorretas dos aspectos`
            },
            {
                number: 18,
                text: "Qual é uma consideração importante na aplicação do princípio orientador 'progredir iterativamente com feedback'?",
                options: [
                    "Descarte do que não pode ser utilizado",
                    "Rápido não significa incompleto",
                    "Incluir o foco no valor em cada etapa de qualquer iniciativa de melhoria",
                    "Reconhecer os diferentes níveis de complexidade dos sistemas"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B (Rápido não significa incompleto)\n\nProgresso iterativo deve ser rápido mas não incompleto.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Relacionado a começar de onde você está\n• C: Relacionado a foco no valor\n• D: Relacionado a pensar holisticamente`
            },
            {
                number: 19,
                text: "Identifique as palavras que faltam na seguinte frase: O propósito da prática de gerenciamento de ativo de TI é planejar e gerenciar o ciclo de vida completo de todos os ativos de TI, auxiliando a organização, entre outros, a maximizar valor, controlar custos e atender [?].",
                options: [
                    "aos requisitos regulatórios e contratuais",
                    "aos requisitos dos fornecedores",
                    "aos níveis de serviço",
                    "aos requisitos dos clientes"
                ],
                correct: 0,
                explanation: `✅ RESPOSTA CORRETA: A (aos requisitos regulatórios e contratuais)\n\nO gerenciamento de ativos de TI auxilia a atender requisitos regulatórios e contratuais.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• B, C, D: São objetivos secundários, não o foco principal`
            },
            {
                number: 20,
                text: "Qual alternativa apresenta o que pode ser incluído como requisição de serviço? 1. provisão de um relatório\n2. informação de como como criar um documento\n3. solicitação de acesso a um recurso ou serviço\n4. elogios e reclamações",
                options: [
                    "1, 2 e 3",
                    "1, 2 e 4",
                    "2, 3 e 4",
                    "1, 2, 3 e 4"
                ],
                correct: 3,
                explanation: `✅ RESPOSTA CORRETA: D (1, 2, 3 e 4)\n\nTodas as opções podem ser incluídas como requisições de serviço:\n• 1: Provisão de relatório\n• 2: Informações e orientações\n• 3: Solicitação de acesso\n• 4: Feedback (elogios e reclamações)\n\nNo ITIL 4, elogios e reclamações são tratados como requisições de serviço quando não configuram incidentes.`
            },
            {
                number: 21,
                text: "Qual afirmativa é verdadeira sobre a cadeia de valor de serviço?",
                options: [
                    "Para converter entradas em saídas, as atividades da cadeia de valor usam um conjunto reduzido de práticas ITIL",
                    "O elemento central da cadeia de valor de serviço é o sistema de valor de serviço",
                    "Cada atividade pode recorrer a recursos, processos, habilidades e competências, internos ou externos, mas nunca de ambos",
                    "Produtos e serviços, demanda e valor não são atividades da cadeia de valor, e sim componentes do sistema de valor de serviço"
                ],
                correct: 3,
                explanation: `✅ RESPOSTA CORRETA: D\n\nProdutos, serviços, demanda e valor são componentes do SVS, não atividades da cadeia de valor.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Usa todas as práticas necessárias, não um conjunto reduzido\n• B: A cadeia de valor é parte do SVS, não o contrário\n• C: Pode usar recursos internos e externos simultaneamente`
            },
            {
                number: 22,
                text: "Como podemos descrever o conceito de mudança padrão?",
                options: [
                    "Mudança que precisa ser agendada, avaliada e autorizada, seguindo um processo padronizado",
                    "Mudança que, normalmente, precisa ser implementada o mais breve possível",
                    "Mudança de baixo risco, muito conhecida e totalmente documentada",
                    "Mudança que precisa ser avaliada quanto ao risco e impacto"
                ],
                correct: 2,
                explanation: `✅ RESPOSTA CORRETA: C\n\nMudança padrão é de baixo risco, conhecida e documentada.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Descreve mudança normal\n• B: Descreve mudança emergencial\n• D: Descreve mudança normal`
            },
            {
                number: 23,
                text: "Identifique as palavras que faltam na seguinte frase: O propósito da prática de Gerenciamento de Liberação é tornar serviços e funcionalidades, novos ou modificados, [?].",
                options: [
                    "disponíveis para testes pelo usuário",
                    "adequados para os níveis acordados",
                    "disponíveis para uso",
                    "implementados com sucesso"
                ],
                correct: 2,
                explanation: `✅ RESPOSTA CORRETA: C (disponíveis para uso)\n\nO propósito é tornar serviços disponíveis para uso.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Parte do processo de teste\n• B: Relacionado ao gerenciamento de nível de serviço\n• D: Muito genérico`
            },
            {
                number: 24,
                text: "Identifique os dois grupos de palavras que faltam na sentença: O DevOps surgiu do crescente sucesso dos projetos de software [?] que levaram as organizações a liberar serviços e componentes com [?].",
                options: [
                    "'ágil' e 'menos frequência'",
                    "'ágil' e 'mais frequência'",
                    "'em cascata' e 'menos frequência'",
                    "'convencional' e 'mais frequência'"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B ('ágil' e 'mais frequência')\n\nDevOps surgiu de projetos ágeis que permitiram liberações mais frequentes.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A, C, D: Combinações incorretas que não refletem a origem do DevOps`
            },
            {
                number: 25,
                text: "Quais alternativas estão corretas?\n\n1. Computação em nuvem (cloud computing), infraestrutura como serviço (Infrastructure As A Service – IAAS), aprendizagem de máquina (machine learning), e cadeia de blocos (blockchain) oferecem oportunidades de criação de valor, aumentando a importância da TI para a vantagem competitiva e negócios em geral\n2. Mesmo oferecendo produtos, toda empresa é uma organização de serviços\n3. Sejam produtos manufaturados ou produtos financeiros, todos eles sempre vão possuir diferenciais evidentes a qualquer consumidor",
                options: [
                    "1 e 2",
                    "1 e 3",
                    "2 e 3",
                    "1, 2 e 3"
                ],
                correct: 0,
                explanation: `✅ RESPOSTA CORRETA: A (1 e 2)\n\nAfirmações corretas:\n• 1: Tecnologias modernas aumentam importância da TI\n• 2: Toda empresa é uma organização de serviços\n\n🚫 POR QUE A OUTRA ESTÁ ERRADA:\n• 3: Nem todos produtos possuem diferenciais evidentes`
            },
            {
                number: 26,
                text: "Qual alternativa é verdadeira com relação à Central de Serviço?",
                options: [
                    "Como esta prática é gerenciada e entregue não varia muito; ou é uma equipe de pessoas trabalhando em turnos ou é um grupo conectado virtualmente",
                    "Independentemente da eficiência da central de serviço e seus entes, sempre haverá problemas que precisam de escalada e apoio de outras equipes",
                    "O foco da central de serviço é, basicamente, oferecer uma forma clara para que os usuários possam reportar seus problemas",
                    "A central de serviço precisa ser altamente técnica, salvo algumas exceções"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B\n\nSempre haverá problemas que exigem escalada, independente da eficiência da central.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Pode ser gerenciada de várias formas diferentes\n• C: Vai além de apenas reportar problemas\n• D: Não precisa ser altamente técnica em todos os casos`
            },
            {
                number: 27,
                text: "As quatro dimensões sofrem restrições e influências de fatores externos que, frequentemente, estão além do controle do sistema de valor do serviço. Quais são esses fatores?",
                options: [
                    "políticos, econômicos, governamentais, tecnológicos, legais, ambientais",
                    "políticos, econômicos, sociais, tecnológicos, legais, humanos",
                    "políticos, econômicos, sociais, tecnológicos, legais, ambientais",
                    "políticos, econômicos, sociais, tecnológicos, pessoais, ambientais"
                ],
                correct: 2,
                explanation: `✅ RESPOSTA CORRETA: C (políticos, econômicos, sociais, tecnológicos, legais, ambientais)\n\nFatores PESTLE: Políticos, Econômicos, Sociais, Tecnológicos, Legais, Ambientais.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A, B, D: Combinações incorretas dos fatores PESTLE`
            },
            {
                number: 28,
                text: "Identifique as palavras que faltam na seguinte frase: O propósito da prática de Habilitação de Mudança é [?] bem-sucedidas, pela garantia de que os riscos sejam adequadamente avaliados, ocorra a autorização apropriada para prosseguimento da mudança, e o calendário de mudança seja gerenciado.",
                options: [
                    "minimizar a quantidade de alterações",
                    "aumentar a quantidade de implantações",
                    "aumentar as atividades de liberação",
                    "maximizar o número de mudanças"
                ],
                correct: 3,
                explanation: `✅ RESPOSTA CORRETA: D (maximizar o número de mudanças)\n\nPropósito é maximizar o número de mudanças bem-sucedidas.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A, B, C: Não representam o propósito da prática`
            },
            {
                number: 29,
                text: "Qual alternativa sobre a prática de gerenciamento de problema NÃO está correta?",
                options: [
                    "As pessoas responsáveis pelo diagnóstico de problemas precisam desenvolver uma combinação de habilidade analítica e criatividade",
                    "Muitas atividades de gerenciamento de problema dependem seguir procedimentos detalhados mais do que de conhecimento e experiência das pessoas",
                    "Os problemas exigem investigação e análise para identificação da causa, desenvolvimento de soluções de contorno e recomendação para solução completa",
                    "O propósito do gerenciamento de problema é reduzir a probabilidade e o impacto dos incidentes"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B\n\nA afirmação incorreta é que depende mais de procedimentos do que de conhecimento. Na verdade, conhecimento e experiência são fundamentais.\n\n🚫 POR QUE AS OUTRAS ESTÃO CORRETAS:\n• A: Habilidade analítica e criatividade são necessárias\n• C: Descrição correta das atividades\n• D: Propósito correto da prática`
            },
            {
                number: 30,
                text: "Qual atividade da cadeia de valor tem como principais saídas as informações e dados captados das demandas e oportunidades identificadas na relação com as partes interessadas?",
                options: [
                    "Planejar",
                    "Melhorar",
                    "Engajar",
                    "Obtenção/construção"
                ],
                correct: 2,
                explanation: `✅ RESPOSTA CORRETA: C (Engajar)\n\n"Engajar" capta informações das demandas e oportunidades com partes interessadas.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Usa essas informações para planejamento\n• B: Foca na melhoria contínua\n• D: Foca no desenvolvimento de componentes`
            },
            {
                number: 31,
                text: "Qual afirmação corresponde à definição de gerenciamento de serviço?",
                options: [
                    "Práticas para tratar os novos desafios da era digital e para utilizar todo o potencial da tecnologia moderna",
                    "Conjunto de capacidades organizacionais especializadas que permitem entregar valor aos clientes na forma de serviços",
                    "Práticas exercidas por uma pessoa ou um grupo de pessoas com suas próprias funções com responsabilidades, autoridades e relacionamentos",
                    "Define como todos os componentes e atividades da organização funcionam juntos, como um sistema, para permitir a criação de valor"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B\n\nDefinição correta de gerenciamento de serviço como capacidades organizacionais especializadas.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Descreve transformação digital\n• C: Descreve papéis e responsabilidades\n• D: Descreve governança`
            },
            {
                number: 32,
                text: "Qual é o propósito da prática de gerenciamento de capacidade e desempenho?",
                options: [
                    "Garantir que os serviços atinjam o desempenho acordado e esperado, atendendo à demanda atual e futura, de forma efetiva em custo",
                    "Estabelecer e estimular as relações entre a organização e suas partes interessadas em nível estratégico e tático",
                    "Garantir que os fornecedores, e seus desempenhos, sejam gerenciados de forma apropriada para dar suporte à provisão continuada de produtos e serviços de qualidade",
                    "Garantir que os serviços entreguem os níveis acordados de disponibilidade para atender às necessidades de clientes e usuários"
                ],
                correct: 0,
                explanation: `✅ RESPOSTA CORRETA: A\n\nPropósito: garantir desempenho acordado atendendo demanda atual e futura de forma custo-efetiva.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• B: Propósito do Gerenciamento de Relacionamento\n• C: Propósito do Gerenciamento de Fornecedor\n• D: Propósito do Gerenciamento de Disponibilidade`
            },
            {
                number: 33,
                text: "Qual alternativa é correta com relação aos princípios orientadores?",
                options: [
                    "Cada princípio orientador relaciona-se a ações e decisões específicas",
                    "Uma organização deve eleger um dos princípios para adotar",
                    "Um princípio orientador pode orientar uma organização em todas as circunstâncias",
                    "Um princípio orientador descreve as práticas de gerenciamento de serviço que organizações devem adotar"
                ],
                correct: 2,
                explanation: `✅ RESPOSTA CORRETA: C\n\nUm princípio orientador pode orientar em todas as circunstâncias.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: São gerais, não específicos\n• B: Devem ser usados em conjunto, não eleger um\n• D: Descrevem orientações, não práticas específicas`
            },
            {
                number: 34,
                text: "Qual alternativa melhor descreve a contribuição da prática gerenciamento de nível de serviço na atividade 'planejar' da cadeia de valor de serviço?",
                options: [
                    "Suporte ao planejamento do portfólio de produto e serviço e ofertas de serviço com informação sobre o desempenho real do serviço e tendências",
                    "O feedback dos usuários, e os requisitos dos clientes, representam orientações importantes para melhoria do serviço",
                    "Garantia de engajamento continuado com os clientes e usuários, através do processamento do feedback e revisão contínua do serviço",
                    "Comunicação dos objetivos de desempenho de serviço para as equipes de suporte e operações"
                ],
                correct: 0,
                explanation: `✅ RESPOSTA CORRETA: A\n\nContribui com informações sobre desempenho real para planejamento do portfólio.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• B: Contribuição para "Melhorar"\n• C: Contribuição para "Engajar"\n• D: Contribuição para "Entrega e suporte"`
            },
            {
                number: 35,
                text: "Qual dimensão tem como uma preocupação principal os papéis e responsabilidades?",
                options: [
                    "Organizações e pessoas",
                    "Informação e tecnologia",
                    "Parceiros e fornecedores",
                    "Fluxos de valor e processos"
                ],
                correct: 0,
                explanation: `✅ RESPOSTA CORRETA: A (Organizações e pessoas)\n\nPapéis e responsabilidades são preocupação principal da dimensão "Organizações e pessoas".\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• B: Foca em dados, conhecimento e tecnologia\n• C: Foca em parcerias e contratos\n• D: Foca em fluxos de trabalho e processos`
            },
            {
                number: 36,
                text: "Qual etapa do modelo de melhoria contínua tem como principal foco 'avaliar métricas e indicadores e garantir que o andamento e a relevância da iniciativa sejam checados e confirmados'?",
                options: [
                    "Nós chegamos lá?",
                    "Como chegamos lá?",
                    "Como mantemos o impulso?",
                    "Onde estamos?"
                ],
                correct: 2,
                explanation: `✅ RESPOSTA CORRETA: C (Como mantemos o impulso?)\n\n"Como mantemos o impulso?" foca na avaliação de métricas e confirmação do andamento.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Foca na verificação final\n• B: Foca no planejamento\n• D: Foca na análise da situação atual`
            },
            {
                number: 37,
                text: "Qual é o principal conceito relacionado ao princípio orientador 'foco no valor'?",
                options: [
                    "Não começar de zero, sem considerar o que já está disponível para ser aproveitado",
                    "Toda atividade deve remeter, diretamente ou indiretamente, ao valor para as partes interessadas",
                    "Organizar o trabalho em porções menores e gerenciáveis",
                    "Trabalho em conjunto através das fronteiras das áreas e práticas"
                ],
                correct: 1,
                explanation: `✅ RESPOSTA CORRETA: B\n\nToda atividade deve remeter ao valor para as partes interessadas.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A: Relacionado a começar de onde você está\n• C: Relacionado a progredir iterativamente\n• D: Relacionado a colaborar e promover visibilidade`
            },
            {
                number: 38,
                text: "Qual é o propósito da prática de melhoria contínua?",
                options: [
                    "Alinhar as práticas e serviços da organização com as necessidades do negócio, em constante mutação, através da identificação e aperfeiçoamento contínuos de serviços",
                    "Estabelecer e estimular as ligações entre a organização e suas partes interessadas em nível estratégico e tático",
                    "Garantir que os serviços entreguem os níveis acordados de disponibilidade para atender às necessidades de clientes e usuários",
                    "Garantir que os serviços atinjam o desempenho acordado e esperado, atendendo à demanda atual e futura, de forma efetiva em custo"
                ],
                correct: 0,
                explanation: `✅ RESPOSTA CORRETA: A\n\nPropósito: alinhar práticas e serviços com necessidades do negócio em constante mutação.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• B: Propósito do Gerenciamento de Relacionamento\n• C: Propósito do Gerenciamento de Disponibilidade\n• D: Propósito do Gerenciamento de Capacidade`
            },
            {
                number: 39,
                text: "Identificar as palavras que faltam na sentença: Depois de proceder ao planejamento e devida implementação das oportunidades de aperfeiçoamento é preciso acompanhar, medir e avaliar os resultados [?].",
                options: [
                    "para validar a efetividade da melhoria",
                    "para priorizar a implantação em outras áreas da organização",
                    "para comunicar o sucesso da implementação",
                    "para treinar a equipe nos novos procedimentos melhorados"
                ],
                correct: 0,
                explanation: `✅ RESPOSTA CORRETA: A (para validar a efetividade da melhoria)\n\nAcompanhar, medir e avaliar para validar a efetividade da melhoria.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• B, C, D: São objetivos secundários, não o principal`
            },
            {
                number: 40,
                text: "Identifique as palavras que faltam na seguinte frase: O propósito da prática de gerenciamento de segurança da informação é [?] necessária para a organização conduzir seus negócios.",
                options: [
                    "obter a informação",
                    "traduzir requisitos em informação",
                    "desenvolver a competência",
                    "proteger a informação"
                ],
                correct: 3,
                explanation: `✅ RESPOSTA CORRETA: D (proteger a informação)\n\nPropósito: proteger a informação necessária para a organização conduzir seus negócios.\n\n🚫 POR QUE AS OUTRAS ESTÃO ERRADAS:\n• A, B, C: Não representam o propósito da prática`
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
            // CORREÇÃO: Usar BOM (Byte Order Mark) para UTF-8
            const BOM = '\uFEFF';
            let report = BOM + "📊 RELATÓRIO COMPLETO DO SIMULADO ITIL 4 - PMG ACADEMY\n\n";
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
            
            // CORREÇÃO: Especificar explicitamente UTF-8 no Blob
            const blob = new Blob([report], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `relatorio-simulado-itil-pmg-academy-${new Date().toLocaleDateString('pt-BR')}.txt`;
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