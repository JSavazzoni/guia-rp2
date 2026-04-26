const DataAccess = {
    getProfiles: () => ({
        lider: {
            id: 'lider',
            shortTitle: 'Líder (Facção) 👑',
            title: 'Cliente Líder (Facção) 👑',
            description: 'Estratégia avançada para abordar líderes. O objetivo é despertar a ambição de expansão, domínio territorial e construção de uma organização respeitada no servidor.',
            image: 'AssetStore/dono_de_faccao.jpg',
            sections: [
                { isSectionTitle: true, title: 'COMO ABORDAR (LÍDER DE FACÇÃO)' },
                { isFull: true, title: '🎯 Abordagem Estratégica & Foco', items: [
                    { type: 'quote', content: '💬 "Fala, irmão. Como está o fluxo da sua facção hoje?"' },
                    { type: 'quote', content: '💬 "Sua equipe está focada em pegar ativos à noite? Você prefere um pacote para tornar sua facção a top 1 da cidade agora, ou prefere ir evoluindo devagar farmando na rua?"' },
                    { type: 'quote', content: '💬 "Como está o caixa da fac? Estão dominando os eventos e acumulando grana?"' },
                    { type: 'divider' },
                    { type: 'quote', content: '💡 "Irmão, facção grande não se sustenta só na bala. É preciso estrutura e benefícios para reter os melhores atiradores."' },
                    { type: 'quote', content: '💡 "Quanto mais você investe no conforto da sua base, mais membros leais você atrai e maior é o seu retorno."' },
                    { type: 'divider' },
                    { type: 'subtitle', content: '🛍️ O QUE VOCÊ ESTÁ VENDENDO DE VERDADE:' },
                    { type: 'bullet', icon: '📈', content: 'Crescimento real e escalável da organização.' },
                    { type: 'bullet', icon: '💪', content: 'Poder, respeito e influência sobre facções rivais.' },
                    { type: 'bullet', icon: '🔥', content: 'Alto índice de motivação e retenção de membros ativos.' }
                ]},
                { isFull: true, isRecommendationHeader: true, title: '🛒 Recomendações de Produtos', items: [] },
                { title: '🏰 VIP Facção Premium', items: [
                    { type: 'check', icon: '🚘', content: 'Frota expandida, baú extra e log administrativo.' },
                    { type: 'check', icon: '👑', content: 'Gestão simplificada e controle absoluto para o líder.' },
                    { type: 'check', icon: '🏗️', content: 'Estruturação profissional da base.' }
                ]},
                { title: '💸 FARM AFK', items: [
                    { type: 'check', icon: '🎣', content: 'Sistemas de Vaquinha e Pescaria para economia interna.' },
                    { type: 'check', icon: '🏦', content: 'Independência financeira total da organização.' },
                    { type: 'check', icon: '🛡️', content: 'Redução drástica da necessidade de farm em área de risco.' }
                ]},
                { title: '⚙️ Farm Ativos', items: [
                    { type: 'check', icon: '🏭', content: 'Produção contínua diretamente no QG.' },
                    { type: 'check', icon: '🔒', content: 'Segurança máxima (sem exposição externa).' },
                    { type: 'check', icon: '⚡', content: 'Eficiência e constância no fluxo de caixa.' }
                ]},
                { title: '🎁 Incentivo para Membros', items: [
                    { type: 'check', icon: '🎟️', content: 'Sorteios internos de VIP PVP ou VIP Ouro.' },
                    { type: 'check', icon: '🤝', content: 'Ferramenta poderosa de motivação para a equipe.' },
                    { type: 'check', icon: '⚔️', content: 'Engajamento imediato nas ações.' }
                ]},
                { isFull: true, title: '🎭 Identidade Visual', items: [
                    { type: 'check', icon: '👕', content: 'Personalização exclusiva de uniformes e nomenclatura.' },
                    { type: 'check', icon: '👀', content: 'Reconhecimento instantâneo nas ruas da cidade.' },
                    { type: 'check', icon: '🦅', content: 'Imposição visual e moral perante os rivais.' }
                ]},
                { isError: true, title: '🚫 ERROS FATAIS (CLIENTE LÍDER)', items: [
                    { type: 'error', highlight: '🚩', content: 'Focar apenas nas features: Listar itens sem conectá-los ao crescimento da facção.' },
                    { type: 'error', highlight: '🚩', content: 'Ignorar o coletivo: Tratar a venda como se fosse apenas para o uso pessoal dele.' },
                    { type: 'error', highlight: '🚩', content: 'Falta de sondagem: Oferecer pacotes sem antes entender as dores atuais da base.' },
                    { type: 'error', highlight: '🚩', content: 'Não despertar ambição: Falhar em criar a visão de que a facção dele pode dominar o servidor.' },
                    { type: 'error', highlight: '🚩', content: 'Ausência de escassez: Não fornecer um motivo lógico e urgente para o fechamento imediato.' }
                ]},
                { isComic: true, title: '⚽ ANÁLISE DE ABORDAGEM', image: 'AssetStore/quadrinho_lider.jpg' }
            ]
        },
        novato: {
            id: 'novato',
            shortTitle: 'Novato (Iniciante) 🔰',
            title: 'Cliente Novato (Iniciante) 🔰',
            description: 'Diretrizes para guiar novos jogadores. O foco é vender facilidade, evolução acelerada e a oportunidade de construir uma reputação de forma rápida e sem frustrações.',
            image: 'AssetStore/novato.jpg',
            sections: [
                { isSectionTitle: true, title: 'COMO ABORDAR (NOVATO)' },
                { isFull: true, title: '🎯 Abordagem Estratégica & Foco', items: [
                    { type: 'quote', content: '💬 "Qual seu nome, irmão? Chegou na cidade há pouco tempo?"' },
                    { type: 'quote', content: '💬 "Já tem experiência com RP ou essa é sua primeira cidade?"' },
                    { type: 'quote', content: '💬 "Você prefere ralar do zero e ir subindo aos poucos, ou gosta de pular etapas e já começar estruturado?"' },
                    { type: 'divider' },
                    { type: 'quote', content: '💡 "O início na cidade define muita coisa. Quem entra com vantagem, evolui e faz contatos muito mais rápido."' },
                    { type: 'quote', content: '💡 "Com uma estrutura inicial, você pula a fase de passar dificuldade e foca direto no RP."' },
                    { type: 'divider' },
                    { type: 'subtitle', content: '🛍️ O QUE VOCÊ ESTÁ VENDENDO DE VERDADE:' },
                    { type: 'bullet', icon: '🚀', content: 'Salto temporal na evolução (economia de horas de farm).' },
                    { type: 'bullet', icon: '⚔️', content: 'Vantagem competitiva contra outros iniciantes.' },
                    { type: 'bullet', icon: '😌', content: 'Conforto e eliminação da frustração inicial.' }
                ]},
                { isFull: true, isRecommendationHeader: true, title: '🛒 Recomendações de Produtos', items: [] },
                { title: '🥇 VIP OURO', items: [{ type: 'check', icon: '⭐', content: 'O pacote definitivo para arranque inicial.' }]},
                { title: '🚀 VIP LANÇAMENTO', items: [{ type: 'check', icon: '💎', content: 'Status de exclusividade e benefícios limitados.' }]},
                { title: '🚗 VEÍCULOS START', items: [{ type: 'check', icon: '🔑', content: 'Mobilidade essencial para não depender de caronas.' }]},
                { title: '🎟️ SANTAPASS', items: [{ type: 'check', icon: '🎁', content: 'Progressão contínua com recompensas garantidas.' }]},
                { isFull: true, title: '🎵 SANTAFY', items: [{ type: 'check', icon: '🎧', content: 'Qualidade de vida e imersão sonora premium durante o gameplay.' }]},
                { isError: true, title: '🚫 ERROS FATAIS (CLIENTE INICIANTE)', items: [
                    { type: 'error', highlight: '🛑', content: 'Não adaptar a linguagem (usar termos técnicos que ele ainda não entende).' },
                    { type: 'error', highlight: '🛑', content: 'Apresentar os produtos sem antes criar vínculo e confiança.' },
                    { type: 'error', highlight: '🛑', content: 'Não validar o orçamento ou a disposição dele para investir.' },
                    { type: 'error', highlight: '🛑', content: 'Focar em itens cosméticos ao invés de itens que resolvem a dificuldade inicial.' },
                    { type: 'error', highlight: '🛑', content: 'Deixá-lo confuso com muitas opções; o novato precisa de direcionamento claro.' }
                ]},
                { isComic: true, title: '⚽ ANÁLISE DE ABORDAGEM', image: 'AssetStore/quadrinho_novato.jpg' }
            ]
        },
        policial: {
            id: 'policial',
            shortTitle: 'Policial (PVP / RP) 🚓',
            title: 'Cliente Policial (PVP / RP) 🚓',
            description: 'Táticas de conversão para a corporação militar. O gatilho principal é a superioridade tática em ações, utilidade para os colegas e a construção de autoridade (patente).',
            image: 'AssetStore/policial.jpg',
            sections: [
                { isSectionTitle: true, title: 'COMO ABORDAR (POLICIAL)' },
                { isFull: true, title: '🎯 Abordagem Estratégica & Foco', items: [
                    { type: 'quote', content: '💬 "Quanto tempo de corporação? O fluxo de ocorrências está pesado hoje?"' },
                    { type: 'quote', content: '💬 "Seu perfil é mais linha de frente em trocação ou você foca mais na estratégia e RP interno?"' },
                    { type: 'divider' },
                    { type: 'quote', content: '💡 "Ter um VIP na corporação te transforma na referência do seu pelotão. A galera sempre precisa de suporte logístico e veículos rápidos."' },
                    { type: 'quote', content: '💡 "Alto desempenho em ações e utilidade para a equipe são os fatores que os coronéis mais olham para promover alguém."' },
                    { type: 'divider' },
                    { type: 'subtitle', content: '🛍️ O QUE VOCÊ ESTÁ VENDENDO DE VERDADE:' },
                    { type: 'bullet', icon: '🛠️', content: 'Utilidade tática (redução de tempo de resposta).' },
                    { type: 'bullet', icon: '🎖️', content: 'Reconhecimento, status e autoridade perante o alto comando.' }
                ]},
                { isFull: true, isRecommendationHeader: true, title: '🛒 Recomendações de Produtos', items: [] },
                { title: '👮‍♂️ PERFIL: POLICIAL RP', footer: '🎯 Ideal para: Promoção de patente, estabilidade e respeito institucional.', items: [
                    { type: 'hint', content: 'Prioriza a evolução hierárquica, treinamentos e presença marcante na cidade.' },
                    { type: 'check', icon: '🚓', content: 'VIP Polícia: Vantagens sistêmicas exclusivas para o RP policial.' },
                    { type: 'check', icon: '☕', content: 'Voucher de Casa: Base operacional pessoal para descanso e organização.' },
                    { type: 'check', icon: '📋', content: 'ID Baixo: Credibilidade e senioridade na corporação.' }
                ]},
                { title: '🔫 PERFIL: POLICIAL PvP', footer: '🎯 Ideal para: Imposição de respeito, letalidade e dominância territorial.', items: [
                    { type: 'hint', content: 'Prioriza a vitória em ações, perseguições de alto risco e combate direto.' },
                    { type: 'check', icon: '⚡', content: 'VIP PvP: Vantagem balística e regenerativa direta no front.' },
                    { type: 'check', icon: '🛡️', content: 'VIP Platinum: O arsenal completo para superioridade técnica.' },
                    { type: 'check', icon: '🦅', content: 'Fardamento Tático Exclusivo: Identidade visual de tropas de elite.' }
                ]},
                { isError: true, title: '🚫 ERROS FATAIS (CLIENTE POLICIAL)', items: [
                    { type: 'error', highlight: '⚠️', content: 'Oferecer vantagens de RP para um policial focado exclusivamente em PvP (e vice-versa).' },
                    { type: 'error', highlight: '⚠️', content: 'Ignorar a patente atual dele na abordagem.' },
                    { type: 'error', highlight: '⚠️', content: 'Vender apenas o item, sem contextualizar como aquilo ajuda a salvar a vida dele na rua.' },
                    { type: 'error', highlight: '⚠️', content: 'Esquecer de utilizar o gatilho de validação social perante os colegas de farda.' }
                ]},
                { isComic: true, title: '⚽ ANÁLISE DE ABORDAGEM', image: 'AssetStore/quadrinho_policial.jpg' }
            ]
        },
        medico: {
            id: 'medico',
            shortTitle: 'Médico (RP) 👨‍⚕️',
            title: 'Cliente Médico (RP) 👨‍⚕️',
            description: 'Estratégia voltada para o departamento médico. Foco total em vender praticidade, otimização de tempo pós-plantão e status na alta sociedade da cidade.',
            image: 'AssetStore/medico.jpg',
            sections: [
                { isSectionTitle: true, title: 'COMO ABORDAR (MÉDICO)' },
                { isFull: true, title: '🎯 Abordagem Estratégica & Foco', items: [
                    { type: 'quote', content: '💬 "O plantão está organizado hoje ou a demanda de feridos está sobrecarregando a equipe?"' },
                    { type: 'quote', content: '💬 "Qual seu objetivo principal? Se estruturar rápido com mansões e carros de luxo, ou ir farmando capital devagar?"' },
                    { type: 'divider' },
                    { type: 'quote', content: '💡 "A rotina do hospital exige muito. Fora do expediente, você precisa de conforto e praticidade, não de mais trabalho."' },
                    { type: 'quote', content: '💡 "Com um patrimônio sólido, você deixa de ser apenas um funcionário do hospital e passa a ser uma referência de sucesso na cidade."' },
                    { type: 'divider' },
                    { type: 'subtitle', content: '🛍️ O QUE VOCÊ ESTÁ VENDENDO DE VERDADE:' },
                    { type: 'bullet', icon: '⏱️', content: 'Eficiência e valorização do tempo escasso.' },
                    { type: 'bullet', icon: '🛋️', content: 'Qualidade de vida, conforto e status de alto padrão.' },
                    { type: 'bullet', icon: '🏆', content: 'Posicionamento como autoridade médica e social.' }
                ]},
                { isFull: true, isRecommendationHeader: true, title: '🛒 Recomendações de Produtos', items: [] },
                { title: '🏡 MANSÃO', items: [{ type: 'check', icon: '🏛️', content: 'O auge do status social e infraestrutura para a diretoria médica.' }]},
                { title: '👑 VIP LANÇAMENTO', items: [{ type: 'check', icon: '🚁', content: 'Facilidades logísticas que otimizam a locomoção até emergências.' }]},
                { title: '🏠 VOUCHER DE CASA', items: [{ type: 'check', icon: '🔑', content: 'Estabilidade e um ponto de recuo seguro e confortável.' }]},
                { title: '🎟️ SANTAPASS', items: [{ type: 'check', icon: '⭐', content: 'Recompensas passivas para quem tem pouco tempo livre.' }]},
                { isError: true, title: '🚫 ERROS FATAIS (CLIENTE MÉDICO)', items: [
                    { type: 'error', highlight: '❌', content: 'Desrespeitar o tempo de operação (abordar durante uma reanimação ou chamado).' },
                    { type: 'error', highlight: '❌', content: 'Oferecer pacotes focados em PvP ilegal para quem opera 100% no RP lícito.' },
                    { type: 'error', highlight: '❌', content: 'Hesitar ao oferecer itens de ticket alto (mansões/luxo) presumindo que ele não pode pagar.' },
                    { type: 'error', highlight: '❌', content: 'Tratar médicos diretores como se fossem residentes novatos.' }
                ]},
                { isComic: true, title: '⚽ ANÁLISE DE ABORDAGEM', image: 'AssetStore/quadrinho_medico.jpg' }
            ]
        },
        staff: {
            id: 'staff',
            shortTitle: 'Veterano / Staff (400H+) 🛡️',
            title: 'Cliente Veterano (400H+) 🛡️',
            description: 'Abordagem cirúrgica para jogadores muito experientes ou da administração. O argumento de venda baseia-se puramente em exclusividade, legado e imposição de respeito.',
            image: 'AssetStore/staff.jpg',
            sections: [
                { isSectionTitle: true, title: 'COMO ABORDAR (VETERANO)' },
                { isFull: true, title: '🎯 Abordagem Estratégica & Foco', items: [
                    { type: 'quote', content: '💬 "Irmão, você já tem muita bagagem na cidade. Como está o posicionamento da sua base atual?"' },
                    { type: 'quote', content: '💬 "A cidade inteira já sabe quem você é apenas pela sua aparência ou pelo seu ID?"' },
                    { type: 'divider' },
                    { type: 'quote', content: '💡 "Alguém com o seu nível de influência não pode ter um ID aleatório. ID baixo é atestado de hierarquia."' },
                    { type: 'quote', content: '💡 "Você precisa de uma identidade visual única. Algo que, quando os rivais virem na rua, já pensem duas vezes antes de atirar."' },
                    { type: 'divider' },
                    { type: 'subtitle', content: '🛍️ O QUE VOCÊ ESTÁ VENDENDO DE VERDADE:' },
                    { type: 'bullet', icon: '🏛️', content: 'Construção de lenda urbana e exclusividade máxima.' },
                    { type: 'bullet', icon: '👁️', content: 'Reconhecimento incontestável por parte dos players mais novos.' }
                ]},
                { isFull: true, isRecommendationHeader: true, title: '🛒 Recomendações de Produtos', items: [] },
                { title: '🆔 ID EXCLUSIVO (< 1000)', items: [{ type: 'check', icon: '🏅', content: 'A maior demonstração de senioridade do servidor. IDs curtos impõem respeito imediato.' }]},
                { title: '👕 ROUPA PERSONALIZADA', items: [{ type: 'check', icon: '🧵', content: 'Sua marca registrada na cidade, inalcançável para players comuns.' }]},
                { title: '👑 VIP LANÇAMENTO', items: [{ type: 'check', icon: '💎', content: 'O pacote mais completo, condizente com a experiência do jogador.' }]},
                { title: '🔫 SKIN DE ARMA', items: [{ type: 'check', icon: '🔥', content: 'Estética de alto padrão e intimidação durante as ações.' }]},
                { isError: true, title: '🚫 ERROS FATAIS (CLIENTE VETERANO)', items: [
                    { type: 'error', highlight: '⚠️', content: 'Tratar o jogador como iniciante ou explicar mecânicas básicas do servidor.' },
                    { type: 'error', highlight: '⚠️', content: 'Oferecer pacotes de "farm inicial" para alguém que já possui economia consolidada.' },
                    { type: 'error', highlight: '⚠️', content: 'Subestimar a necessidade de ego e personalização desse perfil.' },
                    { type: 'error', highlight: '⚠️', content: 'Falhar em reconhecer a história e a influência dele no ecossistema da cidade.' }
                ]},
                { isComic: true, title: '⚽ ANÁLISE DE ABORDAGEM', image: 'AssetStore/quadrinho_staff.jpg' }
            ]
        }
    }),

    getCategories: () => [
        { id: 'olheiro', title: '🕵️‍♂️ Olheiro', desc: 'Análise comportamental do player e identificação de oportunidade.' },
        { id: 'defesa', title: '🛡️ Defesa', desc: 'Quebra de gelo, conexão inicial e retenção da atenção.' },
        { id: 'meio', title: '⚽ Meio de Campo', desc: 'Sondagem tática e identificação das reais necessidades.' },
        { id: 'ataque', title: '⚔️ Ataque', desc: 'Ancoragem de dor e desejo para criação de urgência.' },
        { id: 'fechamento', title: '🤝 Fechamento', desc: 'Eliminação de objeções e condução clara para o pagamento.' },
        { id: 'posvenda', title: '📦 Pós-Venda', desc: 'Validação da compra, fidelização e esteira de indicações.' }
    ],

    getCategoryContent: (categoryId) => {
        const database = {
            olheiro: {
                id: 'olheiro', title: "Fase 1: Olheiro", description: "O mapeamento silencioso. Avalie a postura do jogador, seu nível de engajamento atual e o *timing* perfeito para a abordagem.", image: "AssetStore/gemini.jpg",
                sections: [
                    { isSectionTitle: true, title: "EXECUÇÃO TÁTICA (OLHEIRO)" },
                    { title: "🎯 Objetivos da Observação", items: [
                        { type: 'bullet', icon: '📡', content: 'Validar a disponibilidade real do cliente para um diálogo.' },
                        { type: 'bullet', icon: '🧠', content: 'Garantir que a abordagem inicial não será ignorada.' },
                        { type: 'bullet', icon: '🎯', content: 'Identificar micro-sinais de insatisfação ou necessidade.' }
                    ]},
                    { title: "⏱️ Janela de Observação", warning: "Queimar a largada abordando no momento errado resulta em perda sumária do lead.", items: [
                        { type: 'quote', content: "⏳ Tempo mínimo recomendado: 2 minutos." },
                        { type: 'quote', content: "⏰ Tempo ideal para leitura de cenário: 3 a 5 minutos." }
                    ]},
                    { title: "🚶‍♂️ Leitura Corporal do Avatar", footer: "💡 Ociosidade é a sua principal métrica de conversão nesta fase.", items: [
                        { type: 'bullet', icon: '🧭', content: 'Movimentação errática (demonstra desorientação).' },
                        { type: 'bullet', icon: '🚶', content: 'Caminhada sem destino aparente (tédio).' },
                        { type: 'bullet', icon: '⚙️', content: 'Testando mecânicas básicas repetidamente (novato aprendendo).' },
                        { type: 'bullet', icon: '🛑', content: 'Completamente estático em zona segura (disponibilidade total).' }
                    ]},
                    { title: "✅ Green Flags (Sinais Verdes)", items: [
                        { type: 'bullet', icon: '👤', content: 'Jogador isolado da sua facção/grupo.' },
                        { type: 'bullet', icon: '🗺️', content: 'Perdido no mapa ou buscando informações no rádio/chat.' },
                        { type: 'bullet', icon: '👀', content: 'Observando os arredores sem foco em farm.' },
                        { type: 'bullet', icon: '🗣️', content: 'Em momentos de "resenha" leve e descontraída.' }
                    ]},
                    { isError: true, title: "🚫 ERROS FATAIS (OLHEIRO)", items: [
                        { type: 'error', highlight: '🚨', content: 'Abordagem kamikaze: Iniciar o contato instantaneamente sem leitura prévia.' },
                        { type: 'error', highlight: '🚨', content: 'Interrupção de RP: Quebrar a imersão de um jogador que está no meio de uma cena focada.' },
                        { type: 'error', highlight: '🚨', content: 'Cegueira de contexto: Tentar vender para participantes no meio de uma ação hostil ou perseguição.' }
                    ]}
                ],
                videoCategories: [{ title: "Laboratório Prático", videos: [
                    { label: "✅ ANÁLISE CORRETA", url: "https://drive.google.com/file/d/1nmAOR_S0mm8jWb5VchfBfp2Fo33kiRaq/preview", color: "#22c55e" }, 
                    { label: "❌ ABORDAGEM PRECIPITADA", url: "https://drive.google.com/file/d/1lLK7Rl9aun4TBVSjbVVRYapQO4VOIZfc/preview", color: "#ef4444" }
                ]}]
            },
            defesa: {
                id: 'defesa', title: "Fase 2: Defesa", description: "O controle do perímetro. Estratégias para prender a atenção do jogador sem ativar o alerta de 'vendedor chato'.", image: "AssetStore/defesa.jpg",
                sections: [
                    { isSectionTitle: true, title: "EXECUÇÃO TÁTICA (DEFESA)" },
                    { 
                        isFull: true,
                        hasSideImage: 'AssetStore/foto_2.jpg',
                        title: '🧥 PREPARAÇÃO DO PERSONAGEM', 
                        items: [
                            { type: 'subtitle', content: '🎯 Objetivo' },
                            { type: 'quote', content: 'Fazer você se destacar entre os players ao redor e parecer ser um jogador experiente e de alto valor. A percepção de autoridade é imediata — todos se importam com a opinião de quem é foda na cidade!' },
                            { type: 'divider' },
                            { type: 'subtitle', content: '⚔️ AÇÕES' },
                            { type: 'bullet', icon: '👔', content: 'Mantenha o seu personagem sempre bem vestido e muito estiloso.' },
                            { type: 'bullet', icon: '🐅', content: 'Use itens visuais que chamem a atenção de longe: carros exclusivos, armamentos com skins diferenciadas e pets raros (ex.: tigre).' },
                            { type: 'bullet', icon: '🦾', content: 'Mostre de forma clara através da sua presença que você é um jogador relevante na cidade.' },
                            { type: 'divider' },
                            { type: 'subtitle', content: '🏆 RESULTADO ESPERADO' },
                            { type: 'quote', content: 'O cliente percebe instantaneamente que você não é um jogador comum, aumentando automaticamente o interesse e o respeito pelo que você tem a dizer.' }
                        ]
                    },
                    { title: "🛡️ O Fundamento da Defesa", warning: "Sem Conexão ➔ Sem Atenção ➔ Sem Venda.", items: [
                        { type: 'quote', content: "Defesa é a arte de criar conexão com o cliente para ganhar atenção e iniciar a conversa." }
                    ]},
                    { title: "🎯 Objetivo da Defesa", footer: "💡 Aqui começa a venda de verdade.", items: [
                        { type: 'bullet', icon: '🛑', content: 'Fazer o cliente parar.' },
                        { type: 'bullet', icon: '⏳', content: 'Ganhar alguns segundos de atenção plena.' },
                        { type: 'bullet', icon: '🤝', content: 'Iniciar uma conversa o mais natural possível.' }
                    ]},
                    { title: "✅ O Que FAZER", footer: "💡 Primeiro conecta, depois vende.", items: [
                        { type: 'bullet', icon: '🎭', content: 'Falar como uma pessoa normal, não como um vendedor.' },
                        { type: 'bullet', icon: '🧩', content: 'Usar perguntas chave para entender a mente do cliente.' },
                        { type: 'bullet', icon: '🪞', content: 'Entrar na realidade que ele vive (faculdade, farm, dinheiro, evolução).' },
                        { type: 'bullet', icon: '🍃', content: 'Ser uma pessoa leve, direta e natural.' },
                        { type: 'bullet', icon: '🤫', content: 'Criar forte curiosidade antes de oferecer qualquer coisa.' }
                    ]},
                    { title: "💬 Como Entrar (Exemplos)", footer: "💡 Pergunta certa = Cliente fala.", items: [
                        { type: 'quote', content: '💬 "Tu já tá desenrolando bem na fac ou ainda tá travado?"' },
                        { type: 'quote', content: '💬 "Tá conseguindo farmar bem aí ou tá lento ainda?"' },
                        { type: 'quote', content: '💬 "Já tá forte na cidade ou ainda tá começando a crescer?"' }
                    ]},
                    { isError: true, title: "❌ ERROS DO VENDEDOR (DEFESA)", warning: "Isso quebra a atenção na hora e te faz perder a venda.", items: [
                        { type: 'error', highlight: '🏃', content: 'Chegar vendendo de forma direta (Ex: "Quer VIP?").' },
                        { type: 'error', highlight: '🤖', content: 'Parecer um robô ou alguém lendo um script decorado.' },
                        { type: 'error', highlight: '🔇', content: 'Interromper o cliente em um momento em que ele não quer papo.' },
                        { type: 'error', highlight: '🗑️', content: 'Falar demais e esquecer de ouvir as dores dele.' },
                        { type: 'error', highlight: '🙈', content: 'Ignorar o que o cliente acabou de responder.' },
                        { type: 'error', highlight: '🔨', content: 'Forçar a venda goela abaixo sem entender a necessidade real.' }
                    ]}
                ],
                videoCategories: [
                    { title: "Laboratório Prático", videos: [
                        { label: "✅ RETENÇÃO DE ATENÇÃO 01", url: "https://drive.google.com/file/d/16DNLlk8XN2rmbYNOw5TqA2keAOmd4gT1/preview", color: "#22c55e" }, 
                        { label: "✅ RETENÇÃO DE ATENÇÃO 02", url: "https://drive.google.com/file/d/1d41ADDiFX5ECsdtdTFsVyTsc25E8FAzC/preview", color: "#22c55e" }
                    ]},
                    { title: "Anti-Exemplos", videos: [
                        { label: "❌ ABORDAGEM ROBÓTICA 01", url: "https://drive.google.com/file/d/1_wNaLwQWRViDm4-GBs-zs_8o2RaNVblm/preview", color: "#ef4444" }, 
                        { label: "❌ PRESSÃO PREMATURA 02", url: "https://drive.google.com/file/d/1JSk9M-WcYazSJhD6Jz_KZWe2jlxmB9tw/preview", color: "#ef4444" }
                    ]}
                ]
            },
            meio: {
                id: 'meio', title: "Fase 3: Meio de Campo", description: "O controle da narrativa. Como utilizar a técnica investigativa para mapear dores e preparar o terreno para a oferta irresistível.", image: "AssetStore/meio-campo.jpg",
                sections: [
                    { isSectionTitle: true, title: "EXECUÇÃO TÁTICA (MEIO DE CAMPO)" },
                    { title: "🎯 Objetivos do Meio de Campo", items: [
                        { type: 'bullet', icon: '🎛️', content: 'Conduzir o cliente através de perguntas-chave cirúrgicas.' },
                        { type: 'bullet', icon: '🧬', content: 'Entender perfeitamente o que oferecer para esse perfil específico.' },
                        { type: 'bullet', icon: '⚓', content: 'Conectar emocionalmente com a realidade dele no servidor.' },
                        { type: 'bullet', icon: '♟️', content: 'Preparar todo o terreno para realizar a oferta.' }
                    ]},
                    { title: "🔍 Indícios de Interesse", items: [
                        { type: 'bullet', icon: '⚡', content: 'O cliente te responde rápido.' },
                        { type: 'bullet', icon: '📖', content: 'Ele fala muito mais do que você.' },
                        { type: 'bullet', icon: '🪃', content: 'Ele começa a te fazer perguntas também.' },
                        { type: 'bullet', icon: '🔗', content: 'Demonstra forte engajamento na conversa.' }
                    ]},
                    { title: "🧭 Foco da Conversa", warning: "Se o cliente dispersar ou você perder o foco, a venda esfria e morre.", items: [
                        { type: 'bullet', icon: '🔥', content: 'Sua meta é gerar interesse.' },
                        { type: 'bullet', icon: '🛡️', content: 'Passar extrema confiança e autoridade.' },
                        { type: 'bullet', icon: '🧭', content: 'Dar a direção certa para onde o cliente deve ir.' },
                        { type: 'divider' },
                        { type: 'bullet', icon: '🚧', content: 'Jamais deixe o cliente mudar totalmente o assunto.' },
                        { type: 'bullet', icon: '⏱️', content: 'Não fique "batendo papo" à toa sem intenção clara de venda.' },
                        { type: 'bullet', icon: '🌉', content: 'Conecte cada pedaço da conversa com o produto que resolve a dor dele.' }
                    ]},
                    { title: "📢 Sinais de Abertura (O Sinal Verde)", footer: "🔥 Identificou isso? Pare de enrolar e inicie o ATAQUE imediatamente.", items: [
                        { type: 'bullet', icon: '💰', content: 'Ele pergunta o preço de algo.' },
                        { type: 'bullet', icon: '📦', content: 'Pede detalhes mais técnicos sobre algum produto.' },
                        { type: 'bullet', icon: '🛒', content: 'Pergunta diretamente o que você vende.' },
                        { type: 'bullet', icon: '🤔', content: 'Pergunta se você é um vendedor da cidade.' }
                    ]},
                    { title: "⚠️ O Ponto Mais Importante", warning: "O maior erro de um vendedor é não perceber o momento em que a venda já está ganha (o *timing* certo).", items: [
                        { type: 'bullet', icon: '🦅', content: 'Identificar rápido a abertura.' },
                        { type: 'bullet', icon: '🔪', content: 'Encontrar com precisão a dor do cliente.' },
                        { type: 'bullet', icon: '🌱', content: 'Mostrar a luz no fim do túnel falando da solução.' }
                    ]},
                    { title: "🧠 Perguntas que Quebram Padrões", items: [
                        { type: 'quote', content: '💬 "Tu já tá desenrolando bem na faculdade ou ainda se sente travado?"' },
                        { type: 'quote', content: '💬 "Já tá conseguindo farmar forte aí ou tá muito difícil de evoluir?"' },
                        { type: 'quote', content: '💬 "Já tá fazendo bastante grana ou a economia ainda tá muito lenta pra você?"' }
                    ]},
                    { isError: true, title: "❌ ERROS DO VENDEDOR (MEIO DE CAMPO)", footer: "💡 Dor = O real motivo emocional ou prático que faz ele abrir a carteira.", items: [
                        { type: 'error', highlight: '💺', content: 'Perder totalmente o foco do objetivo da conversa.' },
                        { type: 'error', highlight: '🥀', content: 'Deixar o cliente puxar assuntos nada a ver com o jogo ou a venda.' },
                        { type: 'error', highlight: '🧊', content: 'Ficar apenas respondendo sem puxar um gancho de volta para a venda.' },
                        { type: 'error', highlight: '🤡', content: 'Virar o "melhor amigo" e esquecer que você está ali para vender.' },
                        { type: 'error', highlight: '🔌', content: 'Não conseguir conectar a frustração dele com os produtos da loja.' }
                    ]}
                ],
                videoCategories: [{ title: "Laboratório Prático", videos: [
                    { label: "✅ CONDUÇÃO IMPECÁVEL", url: "https://drive.google.com/file/d/1XkFB2k2B9SfmVVZMYzBXF3dotWcL8xeo/preview", color: "#22c55e" }, 
                    { label: "❌ PERDA DE CONTROLE", url: "https://drive.google.com/file/d/1eW3zORlLH6M20KGBbKCQ1BSR1QWh5a10/preview", color: "#ef4444" }
                ]}]
            },
            ataque: {
                id: 'ataque', title: "Fase 4: Ataque", description: "O clímax estratégico. A arquitetura de persuasão que funde a dor do cliente à sua solução exclusiva, finalizando com um forte senso de escassez.", image: "AssetStore/ataque.jpg",
                sections: [
                    { isSectionTitle: true, title: "EXECUÇÃO TÁTICA (ATAQUE)" },
                    { title: "🧠 Conceito: Dor, Desejo e Urgência", items: [
                        { type: 'quote', content: "A engenharia de uma venda irrecusável se baseia na equação perfeita:" },
                        { type: 'subtitle', content: "DOR + DESEJO + URGÊNCIA" },
                        { type: 'divider' },
                        { type: 'bullet', icon: '🧊', content: 'Sem dor ➔ A conversa não conecta.' },
                        { type: 'bullet', icon: '💤', content: 'Sem desejo ➔ O cliente não se engaja.' },
                        { type: 'bullet', icon: '🐢', content: 'Sem urgência ➔ O cliente diz "depois eu compro" e você não fecha.' }
                    ]},
                    { title: "⚙️ Como Funciona na Prática", items: [
                        { type: 'quote', content: 'A mágica da venda só acontece quando você une os três pilares:' },
                        { type: 'bullet', icon: '1️⃣', content: 'Dor: Faz ele sentir o peso do problema que ele tem hoje.' },
                        { type: 'bullet', icon: '2️⃣', content: 'Desejo: Mostra as vantagens brilhantes do que ele pode conquistar.' },
                        { type: 'bullet', icon: '3️⃣', content: 'Urgência: Dá a ele um motivo de força maior para agir AGORA.' }
                    ]},
                    { title: "🚀 Exemplo de Aplicação Forte", items: [
                        { type: 'error', highlight: '🔥 Dor:', content: '"Do jeito que as coisas estão hoje, você vai evoluir bem mais devagar que os outros."' },
                        { type: 'error', highlight: '✨ Desejo:', content: '"Porém, entrando com esse VIP, você sobe o seu nível na cidade pra outra prateleira."' },
                        { type: 'error', highlight: '⚡ Urgência:', content: '"Se você pegar agora, ainda consegue aproveitar essa condição especial antes que a grade mude."' }
                    ]},
                    { title: "🔥 Dor (O Problema do Cliente)", items: [
                        { type: 'quote', content: "A dor nunca é inventada. Você apenas evidencia uma frustração que ele já tem." },
                        { type: 'quote', content: "Você não cria mentiras, você ilumina uma dificuldade real da rotina dele." },
                        { type: 'divider' },
                        { type: 'bullet', icon: '📉', content: 'Evolução extremamente demorada.' },
                        { type: 'bullet', icon: '👻', content: 'Falta de destaque, status e moral na cidade.' },
                        { type: 'bullet', icon: '☠️', content: 'Ser amassado e ficar para trás em ações de tiro.' },
                        { type: 'bullet', icon: '⚙️', content: 'Gastar horas do dia farmando sem ver o saldo do banco crescer.' }
                    ]},
                    { title: "✨ Desejo (O Que Ele Quer Conquistar)", items: [
                        { type: 'quote', content: "É aqui que você fisga o coração dele. Não venda o item, venda a solução." },
                        { type: 'quote', content: "Faça ele imaginar como vai ser superior e ter mais moral que os rivais." },
                        { type: 'divider' },
                        { type: 'bullet', icon: '🏎️', content: 'Evolução brutal e economia de tempo.' },
                        { type: 'bullet', icon: '👑', content: 'Ter muita presença, moral e respeito por onde passa.' },
                        { type: 'bullet', icon: '🦍', content: 'Superioridade total em ações contra os outros players.' },
                        { type: 'bullet', icon: '🏰', content: 'Entrar na cidade já com base e estrutura montada.' }
                    ]},
                    { title: "⚡ Urgência (O Gatilho da Decisão)", items: [
                        { type: 'quote', content: "Se você não colocar urgência, ele vai enrolar. Todo cliente adora dizer 'vou ver e te aviso'." },
                        { type: 'quote', content: "Você precisa criar a necessidade dele passar o cartão naquele momento exato." },
                        { type: 'divider' },
                        { type: 'bullet', icon: '⌛', content: 'Escassez de tempo: "Essa condição que montei pra ti é só agora." ' },
                        { type: 'bullet', icon: '💸', content: 'Aumento de preço: "Depois que virar, a grade atualiza e fica mais caro." ' },
                        { type: 'bullet', icon: '🎫', content: 'Escassez de oportunidade: "Quem é inteligente pega isso logo e sai na frente geral." ' }
                    ]},
                    { isError: true, title: "❌ ERROS DO VENDEDOR (ATAQUE)", items: [
                        { type: 'error', highlight: '👹', content: 'Focar excessivamente na dor: O cliente acha que você tá colocando pressão demais.' },
                        { type: 'error', highlight: '📋', content: 'Desejo superficial: Falar "tem essa vantagem" sem explicar no RP como isso ajuda.' },
                        { type: 'error', highlight: '🤡', content: 'Urgência muito forçada: Mentir que a loja vai fechar em 10 minutos (quebra de confiança).' },
                        { type: 'error', highlight: '🥱', content: 'Apresentação robótica: Falar igual um robô gravado, não dar pausas e não ouvir o cara.' },
                        { type: 'error', highlight: '⚖️', content: 'Falta de adaptação: Usar o exato mesmo texto para todo mundo vai destruir sua taxa de conversão.' }
                    ]}
                ]
            },
            fechamento: {
                id: 'fechamento', title: "Fase 5: Fechamento", description: "A arte do xeque-mate. Protocolos precisos de ancoragem de preço, neutralização de objeções e comandos finais de ação.", image: "AssetStore/fechamento.jpg",
                sections: [
                    { isSectionTitle: true, title: "💰 ESTRATÉGIA DE FECHAMENTO — PADRÃO SG" },
                    { title: "🧠 ARQUITETURA DE DECISÃO", items: [
                        { type: 'bullet', icon: '💎', content: 'Primeiro você sempre reforça o imenso valor do produto.' },
                        { type: 'bullet', icon: '⚓', content: 'Depois usa a Ancoragem antes de dar o preço real.' },
                        { type: 'bullet', icon: '🛣️', content: 'Apresenta os meios de pagamento fáceis para quebrar objeções.' },
                        { type: 'bullet', icon: '🎯', content: 'Finaliza a frase gerando uma urgência forte de tempo.' },
                        { type: 'divider' },
                        { type: 'subtitle', content: '💡 Dica de Ouro: Ancoragem é fazer o cliente visualizar que aquilo custaria os "olhos da cara" antes dele ver que na verdade tá barato!' }
                    ]},
                    { title: '💸 ANCORAGEM DE VALOR (O SEGREDO)', items: [
                        { type: 'quote', content: '💬 "Se tu fosse pegar cada um desses benefícios da lista separado, iria passar tranquilamente de R$XXX..."' },
                        { type: 'quote', content: '💬 "Mas montando nesse formato focado pra ti, tu resolve tudo numa tacada só e economiza muita grana."' },
                        { type: 'divider' },
                        { type: 'subtitle', content: '📉 Objetivo: Fazer o cérebro dele processar que ele está tirando uma enorme vantagem financeira.' }
                    ]},
                    { title: '💳 PAGAMENTO E QUEBRA DE ATRITOS', items: [
                        { type: 'quote', content: '💬 "E o mais tranquilo é que tu não precisa esquentar a cabeça com isso hoje..."' },
                        { type: 'quote', content: '💬 "Pode agilizar no Pix pra cair na hora, ou se preferir a gente divide no cartão de crédito pra ficar leve."' },
                        { type: 'quote', content: '💬 "Se tua conta for gringa, aceito Revolut e Wise também, bem de boa."' }
                    ]},
                    { title: '⏰ OVERDRIVE DE URGÊNCIA (A HORA DA VERDADE)', items: [
                        { type: 'quote', content: '💬 "Sendo bem transparente contigo, essa condição com esses itens extras eu só consigo segurar agora."' },
                        { type: 'quote', content: '💬 "Se a gente deixar pra depois, vai acabar atualizando e muito provavelmente tu vai pagar mais caro."' }
                    ]},
                    { isFull: true, title: '🎯 O FECHAMENTO DIRETO (Padrão)', items: [
                        { type: 'quote', content: '💬 "Se fez sentido pra ti, já posso mandar minha chave Pix ou o link seguro do cartão e a gente já deixa isso tudo voando na tua conta hoje mesmo."' }
                    ]},
                    { isFull: true, title: '⚔️ VERSÃO AGRESSIVA (Para os difíceis)', items: [
                        { type: 'hint', content: '(Utilizar apenas quando o cliente demonstrou muito interesse, mas tá travado querendo dar "desculpas" de tempo)' },
                        { type: 'quote', content: '💬 "Mano, sendo bem sincero — esse investimento aqui não é um gasto, é literalmente tu evitar gastar mais dinheiro e paciência depois."' },
                        { type: 'quote', content: '💬 "A regra é clara: quem estrutura a conta agora, larga na frente de geral. Quem deixa pra depois, joga sempre na desvantagem."' },
                        { type: 'quote', content: '💬 "Bora fazer no Pix rápido ou prefere fatiar isso no cartão de crédito?"' },
                        { type: 'divider' },
                        { type: 'subtitle', content: '🏆 Regra Vital: Vendedor amador diz "Obrigado" depois da venda. Profissional diz "Parabéns pela excelente escolha". O cliente tem que sentir orgulho.' }
                    ]},
                    { isError: true, title: '🚫 ERROS FATAIS (FECHAMENTO)', items: [
                        { type: 'error', highlight: '🔁', content: 'Voltar a explicar detalhes e features técnicas depois que já deu o preço.' },
                        { type: 'error', highlight: '🤐', content: 'Ter "vergonha" ou timidez de ser direto na hora de pedir o Pix ou Cartão.' },
                        { type: 'error', highlight: '🧊', content: 'Mandar o preço puro, solto, sem colocar um limite de urgência para a oferta.' },
                        { type: 'error', highlight: '❓', content: 'Esperar que o cliente tome a decisão sozinho (Ex: "E aí, o que achou?"). Assuma o controle!' },
                        { type: 'divider' },
                        { type: 'subtitle', content: '🛤️ Nunca deixe perguntas abertas. Feche sempre guiando: "Fica melhor Pix ou Cartão para você?".' }
                    ]}
                ]
            },
            posvenda: {
                id: 'posvenda', title: "Fase 6: Pós-Venda", description: "O ciclo infinito de monetização. Técnicas para transformar compradores de primeira viagem em evangelizadores da marca e clientes recorrentes.", image: "AssetStore/pos_venda.jpg",
                sections: [
                    { isSectionTitle: true, title: "🧠 OPERAÇÃO DE PÓS-VENDA — PADRÃO SG" },
                    { title: "🛡️ CONFIRMAÇÃO E SEGURANÇA", items: [
                        { type: 'quote', content: '📌 Fundamento: Fazer o cliente ter certeza de que tomou a decisão certa.' },
                        { type: 'quote', content: '💬 "Tudo certo no sistema, mano. Teu pacote já tá todo liberado e ativo."' },
                        { type: 'quote', content: '💬 "Pode usar e abusar aí agora, bem tranquilo."' },
                        { type: 'quote', content: '💬 "Qualquer parada ou dificuldade, só me gritar aqui que eu te dou um suporte VIP."' },
                        { type: 'divider' },
                        { type: 'quote', content: '🛡️ Elimina o arrependimento pós-compra | 🔒 Evita dores de cabeça com estornos' }
                    ]},
                    { title: "💎 VALORIZAÇÃO E STATUS", items: [
                        { type: 'quote', content: '📌 Fundamento: Inflar o ego dele e confirmar que ele tá acima da média agora.' },
                        { type: 'quote', content: '💬 "Só com essa ativação aí, tu já deixou 90% da cidade comendo poeira."' },
                        { type: 'quote', content: '💬 "É muito pouca gente que tem a inteligência de entrar já se estruturando desse jeito."' },
                        { type: 'quote', content: '💬 "Movimento brabo demais, parabéns de verdade."' },
                        { type: 'divider' },
                        { type: 'quote', content: '👑 Gera um orgulho gigante dele fazer parte da sua base de clientes' }
                    ]},
                    { title: "🚀 SUCESSO DE ATIVAÇÃO", items: [
                        { type: 'quote', content: '📌 Fundamento: Garantir que ele não seja "burro" com o produto e saiba usar.' },
                        { type: 'quote', content: '💬 "E aí, já puxou aquele [Carro/Item] pra dar um teste? Tá rendendo bem?"' },
                        { type: 'quote', content: '💬 "Dica de ouro: se tu usar aquilo junto com [Outra Coisa], o teu farm vai bugar de tanto render."' },
                        { type: 'quote', content: '💬 "Quer que eu cole contigo rapidão pra te mostrar uns macetes?"' },
                        { type: 'divider' },
                        { type: 'quote', content: '📈 Faz o cliente sentir que o produto valeu cada centavo investido' }
                    ]},
                    { title: "🤝 MANTER PORTA ABERTA", items: [
                        { type: 'quote', content: '📌 Fundamento: Não ser aquele vendedor sem caráter que some no segundo que o Pix cai.' },
                        { type: 'quote', content: '💬 "Já salvei teu contato aqui na minha base de clientes preferenciais."' },
                        { type: 'quote', content: '💬 "Quando tu sentir que estagnou e precisar de uma ajuda pra subir de novo, me chama."' },
                        { type: 'quote', content: '💬 "Eu sempre libero umas paradas exclusivas na calada, vou te manter avisado, fechou?"' },
                        { type: 'divider' },
                        { type: 'quote', content: '🌉 Cria uma conexão monstra de fidelidade para compras futuras' }
                    ]},
                    { title: "💸 PREPARAR A RECOMPRA", items: [
                        { type: 'quote', content: '📌 Fundamento: Plantar a ideia do próximo passo para ele já ir desejando.' },
                        { type: 'quote', content: '💬 "Mais pra frente, o caminho natural pra tua conta seria colocar um [Produto X]..."' },
                        { type: 'quote', content: '💬 "Lançou um item novo que comba perfeitamente com esse setup que tu tem."' },
                        { type: 'quote', content: '💬 "Foca em fazer tuas correrias com isso agora, depois a gente dá um upgrade pra fechar o caixão."' },
                        { type: 'divider' },
                        { type: 'quote', content: '🛒 Venda orgânica e natural, sem precisar empurrar nada' }
                    ]},
                    { title: "📢 MÁQUINA DE INDICAÇÕES", items: [
                        { type: 'quote', content: '📌 Fundamento: Transformar o cliente satisfeito em um vendedor gratuito pra você.' },
                        { type: 'quote', content: '💬 "Mano, se tiver algum parceiro teu querendo crescer rápido que nem você, passa meu perfil."' },
                        { type: 'quote', content: '💬 "Tu viu na prática a diferença, né? Indica teus amigos que eu agilizo o lado deles também."' },
                        { type: 'quote', content: '💬 "Qualquer player que vier fechado no teu nome, eu já dou um tratamento diferenciado aqui."' },
                        { type: 'divider' },
                        { type: 'quote', content: '👥 Você ganha leads novos sem fazer esforço e já super confiantes' }
                    ]},
                    { isError: true, title: "❌ ERROS FATAIS NO PÓS-VENDA", items: [
                        { type: 'error', highlight: '👻', content: 'Sumir: Parar de responder rápido ou cortar assunto depois que o dinheiro entra.' },
                        { type: 'error', highlight: '🥱', content: 'Falta de Suporte: Não querer ajudar o cliente que comprou a configurar o VIP ou resgatar as coisas.' },
                        { type: 'error', highlight: '🔇', content: 'Zero Elogio: Esquecer de parabenizar e reforçar que ele fez a melhor escolha possível.' },
                        { type: 'error', highlight: '🚪', content: 'Esquecer o Futuro: Finalizar a conversa sem dar um gancho de "quando quiser subir de nível me chama".' },
                        { type: 'error', highlight: '✂️', content: 'Deixar Dinheiro na Mesa: Não pedir pra ele te indicar pros amigos da facção dele.' }
                    ]}
                ]
            }
        };
        return database[categoryId] || null;
    }
};

const BusinessLogic = {
    state: {
        currentView: 'menu',
        currentCategoryId: null,
        currentProfileId: null,
        isExpanded: false
    },
    
    init: () => {
        Controller.render();
        Controller.setupEventListeners();
    },

    navigateToMenu: () => {
        BusinessLogic.state.currentView = 'menu';
        BusinessLogic.state.isExpanded = false;
        BusinessLogic.state.currentProfileId = null;
        BusinessLogic.state.currentCategoryId = null;
        Controller.render();
    },

    toggleExpansion: () => {
        BusinessLogic.state.isExpanded = !BusinessLogic.state.isExpanded;
        BusinessLogic.state.currentView = 'category';
        BusinessLogic.state.currentCategoryId = 'meio';
        BusinessLogic.state.currentProfileId = null;
        Controller.render();
    },

    navigateToCategory: (id) => {
        BusinessLogic.state.currentView = 'category';
        BusinessLogic.state.currentCategoryId = id;
        BusinessLogic.state.currentProfileId = null;
        BusinessLogic.state.isExpanded = (id === 'meio');
        window.scrollTo(0, 0);
        Controller.render();
    },

    navigateToProfile: (id) => {
        BusinessLogic.state.currentProfileId = id;
        BusinessLogic.state.currentView = 'category';
        BusinessLogic.state.currentCategoryId = 'meio';
        BusinessLogic.state.isExpanded = true;
        window.scrollTo(0, 0);
        Controller.render();
    }
};

const Controller = {
    setupEventListeners: () => {
        document.body.addEventListener('click', (e) => {
            const actionTarget = e.target.closest('[data-action]');
            if (!actionTarget) return;

            const action = actionTarget.getAttribute('data-action');
            const payload = actionTarget.getAttribute('data-payload');

            switch (action) {
                case 'navigate-menu':
                    BusinessLogic.navigateToMenu();
                    break;
                case 'navigate-category':
                    BusinessLogic.navigateToCategory(payload);
                    break;
                case 'navigate-profile':
                    BusinessLogic.navigateToProfile(payload);
                    break;
                case 'toggle-expansion':
                    e.stopPropagation();
                    BusinessLogic.toggleExpansion();
                    break;
            }
        });
    },

    utils: {
        renderListItem: (item) => {
            if (!item) return '';
            
            switch (item.type) {
                case 'divider':
                    return `<div class="listDivider"></div>`;
                case 'subtitle':
                    return `<span style="font-size: 1.25rem; display: block; margin: 16px 0 8px 0; color: #fff; font-weight: 900;">${item.content}</span>`;
                case 'quote':
                    return `<li>${item.content}</li>`;
                case 'hint':
                    return `<div style="margin-bottom: 16px; color: #ccc; font-size: 0.95rem;">${item.content}</div>`;
                case 'bullet':
                case 'check':
                    return `
                        <li>
                            <strong style="color: var(--accent-gold); flex-shrink: 0;">${item.icon}</strong> 
                            <span>${item.content}</span>
                        </li>
                    `;
                case 'error':
                    return `
                        <li>
                            <strong style="flex-shrink: 0; color: var(--accent-red);">${item.highlight}</strong> 
                            <span>${item.content}</span>
                        </li>
                    `;
                default:
                    return `<li>${item.content || item}</li>`;
            }
        }
    },

    templates: {
        menu: () => `
            <div class="overlay"></div>
            <div class="funnelContainer">
                ${DataAccess.getCategories().map(cat => `
                    <div class="funnelStep step${cat.id.charAt(0).toUpperCase() + cat.id.slice(1)}" 
                         data-action="navigate-category" 
                         data-payload="${cat.id}">
                        <span class="funnelStepTitle">${cat.title}</span>
                        <span class="funnelStepDesc">${cat.desc}</span>
                    </div>
                `).join('')}
            </div>
        `,

        category: (data) => {
            const profiles = DataAccess.getProfiles();
            
            return `
                <div class="overlay"></div>
                <div class="layoutContainer">
                    <aside class="sidebarNavigation">
                        <div>
                            <button class="backButton" data-action="navigate-menu">⬅ Menu Inicial</button>
                            <nav class="navigationMenu">
                                ${DataAccess.getCategories().map(cat => {
                                    const isMeio = cat.id === 'meio';
                                    const isActive = BusinessLogic.state.currentCategoryId === cat.id;
                                    const isProfileSelected = BusinessLogic.state.currentProfileId !== null;
                                    const action = isMeio ? 'toggle-expansion' : 'navigate-category';
                                    
                                    let html = `
                                        <div class="navItem ${isActive && !isProfileSelected ? 'navItemActive' : ''}" 
                                             data-action="${action}" 
                                             data-payload="${cat.id}">
                                            ${cat.title} ${isMeio ? (BusinessLogic.state.isExpanded ? '▾' : '▸') : ''}
                                        </div>
                                    `;

                                    if (isMeio && BusinessLogic.state.isExpanded) {
                                        html += `<div style="background: rgba(0,0,0,0.3); border-radius: 4px; margin-top: 4px;">`;
                                        html += Object.values(profiles).map(p => `
                                            <div class="navItem ${BusinessLogic.state.currentProfileId === p.id ? 'navItemActive' : ''}" 
                                                 style="padding-left: 2rem; font-size: 0.8rem;" 
                                                 data-action="navigate-profile" 
                                                 data-payload="${p.id}">
                                                ${p.shortTitle}
                                            </div>
                                        `).join('');
                                        html += `</div>`;
                                    }
                                    return html;
                                }).join('')}
                            </nav>
                        </div>
                    </aside>
                    
                    <main class="mainWorkspace">
                        <header class="headerContainer">
                            <div style="flex: 1;">
                                <h1 class="pageTitle">${data.title}</h1>
                                <p class="pageDescription">${data.description}</p>
                            </div>
                            <div class="headerImageContainer">
                                <img src="${data.image}" alt="Header Visual">
                            </div>
                        </header>
                        
                        <div class="contentGrid">
                            ${data.sections.map(s => {
                                if (s.isSectionTitle) {
                                    return `<div class="cardSpanFull" style="text-align: center; font-size: 1.5rem; color: #fff; font-weight: 900; margin: 2rem 0; text-transform: uppercase; letter-spacing: 1px;">${s.title}</div>`;
                                }
                                if (s.isRecommendationHeader) {
                                    return `<div class="cardSpanFull" style="margin-top: 1rem;"><h2 style="font-size: 1.4rem; color: #fff; text-align: left; width: 100%; font-weight: 800;">${s.title}</h2></div>`;
                                }
                                if (s.isComic) {
                                    return `
                                        <div class="cardSpanFull" style="margin-top: 2rem; border-radius: 16px; overflow: hidden; border: 1px solid var(--border-color);">
                                            <img src="${s.image}" alt="Estratégia Tática Visual" style="width: 100%; height: auto; display: block;">
                                        </div>
                                    `;
                                }

                                const extraClass = (s.isFull || s.isError) ? "cardSpanFull" : "";
                                const errorClass = s.isError ? "errorCard" : "";

                                if (s.hasSideImage) {
                                    return `
                                        <section class="infoCard ${extraClass} ${errorClass}">
                                            <div style="display: flex; flex-wrap: wrap; gap: 2.5rem; align-items: stretch;">
                                                <div style="flex: 1; min-width: 300px;">
                                                    <h2>${s.title}</h2>
                                                    <ul class="dataList">
                                                        ${s.items ? s.items.map(Controller.utils.renderListItem).join('') : ''}
                                                    </ul>
                                                    ${s.warning ? `<div class="warningBox">⚠️ ${s.warning}</div>` : ''}
                                                    ${s.footer ? `<div class="hintBox">${s.footer}</div>` : ''}
                                                </div>
                                                <div style="flex: 1; min-width: 300px; max-width: 450px; display: flex; align-items: center; justify-content: center;">
                                                    <img src="${s.hasSideImage}" alt="Estratégia Visual" style="width: 100%; height: auto; border-radius: 12px; border: 2px solid var(--border-color); box-shadow: 0 10px 30px rgba(0,0,0,0.5); object-fit: cover;">
                                                </div>
                                            </div>
                                        </section>
                                    `;
                                }

                                return `
                                    <section class="infoCard ${extraClass} ${errorClass}">
                                        <h2>${s.title}</h2>
                                        <ul class="dataList">
                                            ${s.items ? s.items.map(Controller.utils.renderListItem).join('') : ''}
                                        </ul>
                                        ${s.warning ? `<div class="warningBox">⚠️ ${s.warning}</div>` : ''}
                                        ${s.footer ? `<div class="hintBox">${s.footer}</div>` : ''}
                                    </section>
                                `;
                            }).join('')}
                        </div>
                        
                        ${data.videoCategories ? data.videoCategories.map(cat => `
                            <section class="videoSection">
                                <h1 class="sectionTitle">${cat.title}</h1>
                                <div class="videosGrid">
                                    ${cat.videos.map(v => `
                                        <div class="videoWrapper">
                                            <div class="videoLabel" style="color: ${v.color};">${v.label}</div>
                                            <div class="videoContainer">
                                                <iframe src="${v.url}" allow="autoplay"></iframe>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </section>
                        `).join('') : ''}
                    </main>
                </div>
            `;
        }
    },

    render: () => {
        const root = document.getElementById('applicationRoot');
        if (!root) return;

        if (BusinessLogic.state.currentView === 'menu') {
            root.innerHTML = Controller.templates.menu();
        } else {
            const categoryData = DataAccess.getCategoryContent(BusinessLogic.state.currentCategoryId);
            const profiles = DataAccess.getProfiles();
            const data = BusinessLogic.state.currentProfileId ? profiles[BusinessLogic.state.currentProfileId] : categoryData;
            
            root.innerHTML = Controller.templates.category(data);
        }
    }
};

document.addEventListener('DOMContentLoaded', BusinessLogic.init);