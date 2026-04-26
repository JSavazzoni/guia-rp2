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
                            { type: 'quote', content: 'Posicionar-se visualmente como um jogador veterano e de alto valor. A percepção de autoridade é imediata — todos prestam atenção na opinião de quem tem presença!' },
                            { type: 'divider' },
                            { type: 'subtitle', content: '⚔️ AÇÕES' },
                            { type: 'bullet', icon: '👔', content: 'Vestuário impecável e estilo marcante.' },
                            { type: 'bullet', icon: '🐅', content: 'Utilização de itens de alto impacto visual (carros exclusivos, armamento com skin diferenciada, pets raros como tigres).' },
                            { type: 'bullet', icon: '🦾', content: 'Demonstrar através da postura que você é um jogador relevante e consolidado na cidade.' },
                            { type: 'divider' },
                            { type: 'subtitle', content: '🏆 RESULTADO ESPERADO' },
                            { type: 'quote', content: 'Quebra imediata de objeções. O cliente percebe instantaneamente que não está lidando com um jogador comum, o que eleva o nível de respeito e interesse na sua abordagem.' }
                        ]
                    },
                    { title: "🛡️ O Fundamento da Defesa", warning: "Sem Conexão ➔ Sem Atenção ➔ Sem Venda.", items: [
                        { type: 'quote', content: "Defesa é a arte de camuflar a venda através de genuíno interesse. É desarmar o cliente criando familiaridade imediata." }
                    ]},
                    { title: "🎯 Objetivos da Defesa", footer: "💡 O funil de vendas começa oficialmente neste ponto.", items: [
                        { type: 'bullet', icon: '🛑', content: 'Interromper o trajeto físico ou mental do cliente.' },
                        { type: 'bullet', icon: '⏳', content: 'Garantir 30 segundos iniciais de atenção plena.' },
                        { type: 'bullet', icon: '🤝', content: 'Fazer a transição para um diálogo orgânico.' }
                    ]},
                    { title: "✅ Protocolos de Ação", footer: "💡 Conexão precede a transação.", items: [
                        { type: 'bullet', icon: '🎭', content: 'Desumanize o cargo: Fale como um parceiro de jogo, não como Suporte/Vendas.' },
                        { type: 'bullet', icon: '🧩', content: 'Engenharia de perguntas: Faça com que ele entregue o próprio perfil.' },
                        { type: 'bullet', icon: '🪞', content: 'Espelhamento: Adapte sua comunicação à realidade que ele vive no momento.' },
                        { type: 'bullet', icon: '🍃', content: 'Naturalidade: Mantenha o tom de voz calmo, direto e despretensioso.' },
                        { type: 'bullet', icon: '🤫', content: 'Gatilho da Curiosidade: Deixe subentendido que você tem uma informação de alto valor.' }
                    ]},
                    { title: "💬 Roteiros de Abertura", footer: "💡 Quem faz as perguntas detém o controle da negociação.", items: [
                        { type: 'quote', content: '💬 "Como está o fluxo na faculdade? O farm está rendendo ou ainda está meio travado?"' },
                        { type: 'quote', content: '💬 "Conseguindo bater as metas financeiras hoje ou a economia está pesando?"' },
                        { type: 'quote', content: '💬 "Como está a evolução do char? Já está dominando a rua ou ainda na fase de estruturação?"' }
                    ]},
                    { isError: true, title: "🚫 ERROS FATAIS (DEFESA)", warning: "Ativar qualquer um destes erros destrói a receptividade do cliente.", items: [
                        { type: 'error', highlight: '🏃', content: 'Ansiedade comercial: Disparar a oferta do VIP nos primeiros segundos de contato.' },
                        { type: 'error', highlight: '🤖', content: 'Tom robótico: Ler scripts como um atendente de telemarketing.' },
                        { type: 'error', highlight: '🔇', content: 'Falta de escuta tática: Falar 80% do tempo; na defesa, o cliente deve falar mais.' },
                        { type: 'error', highlight: '🗑️', content: 'Ignorar as respostas: Fazer perguntas vazias e não usar a resposta do cliente a seu favor.' },
                        { type: 'error', highlight: '🔨', content: 'Pressão prematura: Tentar empurrar a solução antes mesmo de mapear a real dor do usuário.' }
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
                        { type: 'bullet', icon: '🎛️', content: 'Manter a cadência da conversa sob seu controle através de perguntas guiadas.' },
                        { type: 'bullet', icon: '🧬', content: 'Diagnosticar o perfil exato do cliente para customizar a oferta.' },
                        { type: 'bullet', icon: '⚓', content: 'Estabelecer autoridade e conexão de confiança.' },
                        { type: 'bullet', icon: '♟️', content: 'Armar o cenário ideal para o ataque.' }
                    ]},
                    { title: "🔍 Termômetro de Engajamento", items: [
                        { type: 'bullet', icon: '⚡', content: 'Tempo de resposta rápido (indica foco total).' },
                        { type: 'bullet', icon: '📖', content: 'Expansão de respostas (cliente explica os detalhes do problema).' },
                        { type: 'bullet', icon: '🪃', content: 'Curiosidade reversa (ele começa a perguntar a sua opinião).' },
                        { type: 'bullet', icon: '🔗', content: 'Sincronia de ideias (concordância ativa com seus pontos).' }
                    ]},
                    { title: "🧭 Foco Direcional", warning: "A dispersão é o inimigo silencioso. Se a conversa virar um bate-papo sem propósito, a venda morre.", items: [
                        { type: 'bullet', icon: '💉', content: 'Injete valor a cada interação para manter o interesse elevado.' },
                        { type: 'bullet', icon: '🧙', content: 'Projete uma imagem de conselheiro experiente, não de vendedor desesperado.' },
                        { type: 'divider' },
                        { type: 'bullet', icon: '🧲', content: 'Técnica de Redirecionamento: Caso o cliente fuja do tema principal, puxe-o de volta sutilmente.' },
                        { type: 'bullet', icon: '⏱️', content: 'Não gaste tempo infinito em "RP puro" se não houver um gancho comercial planejado.' },
                        { type: 'bullet', icon: '🌉', content: 'A ponte entre a resenha e o produto deve ser lógica e invisível.' }
                    ]},
                    { title: "📢 Gatilhos de Abertura (O Sinal Verde)", footer: "🔥 Estes são convites explícitos para o Ataque. Não hesite.", items: [
                        { type: 'bullet', icon: '💰', content: '"Quanto custa isso aí?"' },
                        { type: 'bullet', icon: '📦', content: '"E o que vem nesse pacote que você falou?"' },
                        { type: 'bullet', icon: '📍', content: '"Mas onde eu arrumo isso?"' },
                        { type: 'bullet', icon: '🤔', content: '"Você vende essas coisas por aqui?"' }
                    ]},
                    { title: "⚠️ A Chave Mestra", warning: "O amador vende o produto. O profissional vende a resolução da dor mapeada.", items: [
                        { type: 'bullet', icon: '🦅', content: 'Agudeza tática: Perceber a fração de segundo em que o cliente baixa a guarda.' },
                        { type: 'bullet', icon: '🔪', content: 'Extração cirúrgica: Isolar a principal frustração do jogador.' },
                        { type: 'bullet', icon: '🌱', content: 'Visão de Futuro: Plantar a semente de como a vida dele será mais fácil com a solução.' }
                    ]},
                    { isError: true, title: "🚫 ERROS FATAIS (MEIO DE CAMPO)", footer: "💡 A dor é o combustível; o seu produto é o veículo.", items: [
                        { type: 'error', highlight: '💺', content: 'Síndrome do passageiro: Deixar o cliente conduzir 100% da conversa.' },
                        { type: 'error', highlight: '🥀', content: 'Abandono de objetivo: Esquecer que o propósito final do bate-papo é o fechamento comercial.' },
                        { type: 'error', highlight: '🧊', content: 'Respostas passivas: Apenas concordar e não inserir perguntas de qualificação.' },
                        { type: 'error', highlight: '🤡', content: 'Friendzone comercial: Tornar-se "parceiro" demais a ponto de ficar sem graça de cobrar depois.' },
                        { type: 'error', highlight: '🔌', content: 'Desconexão lógica: Apresentar uma solução que não resolve o problema que ele acabou de relatar.' }
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
                    { title: "🧠 A Tríade da Persuasão", items: [
                        { type: 'quote', content: "A engenharia de uma venda irrecusável se baseia na equação perfeita:" },
                        { type: 'subtitle', content: "DOR LATENTE + DESEJO INFLAMADO + URGÊNCIA REAL" },
                        { type: 'divider' },
                        { type: 'bullet', icon: '🧊', content: 'Falta de Dor = Sem Conexão Emocional.' },
                        { type: 'bullet', icon: '💤', content: 'Falta de Desejo = Sem Engajamento de Valor.' },
                        { type: 'bullet', icon: '🐢', content: 'Falta de Urgência = Procrastinação da Decisão.' }
                    ]},
                    { title: "⚙️ Mecânica Operacional", items: [
                        { type: 'quote', content: 'A fluidez do ataque obedece a uma sequência cronológica estrita:' },
                        { type: 'bullet', icon: '1️⃣', content: 'Escancare a ferida (Faça-o visualizar o peso do problema atual).' },
                        { type: 'bullet', icon: '2️⃣', content: 'Apresente o oásis (Mostre de forma vívida a transformação que o produto causa).' },
                        { type: 'bullet', icon: '3️⃣', content: 'Feche a janela de oportunidade (Entregue um motivo inegável para ele passar o cartão hoje).' }
                    ]},
                    { title: "🚀 Framework de Aplicação", items: [
                        { type: 'error', highlight: '🔥 Impacto (Dor):', content: '"Sendo muito franco, continuar nesse ritmo vai te custar muito tempo que você não tem."' },
                        { type: 'error', highlight: '✨ Visão (Desejo):', content: '"Adicionando esse pacote na sua conta, você queima etapas e muda o seu patamar de respeito aqui dentro."' },
                        { type: 'error', highlight: '⚡ Gatilho (Urgência):', content: '"Se a gente oficializar isso agora, eu consigo te encaixar nessa condição promocional que o sistema vai derrubar em breve."' }
                    ]},
                    { title: "🔥 Engenharia da Dor", items: [
                        { type: 'quote', content: "A dor legítima não precisa ser inventada, ela apenas precisa ser iluminada." },
                        { type: 'quote', content: "O papel do vendedor de alta performance é agir como um espelho de desconforto." },
                        { type: 'divider' },
                        { type: 'bullet', icon: '📉', content: 'Frustração com o ganho de capital ínfimo.' },
                        { type: 'bullet', icon: '👻', content: 'Sensação de invisibilidade e falta de respeito.' },
                        { type: 'bullet', icon: '☠️', content: 'Desvantagem clara e esmagadora no PVP contra players VIPS.' },
                        { type: 'bullet', icon: '⚙️', content: 'Desgaste mecânico (muito esforço para pouca recompensa).' }
                    ]},
                    { title: "✨ Construção do Desejo", items: [
                        { type: 'quote', content: "Recursos técnicos informam; a visualização do futuro vende." },
                        { type: 'quote', content: "Projete cenários mentais onde o cliente já está desfrutando da superioridade que o produto traz." },
                        { type: 'divider' },
                        { type: 'bullet', icon: '🏎️', content: 'Aceleração brutal na progressão de carreira/patrimônio.' },
                        { type: 'bullet', icon: '👑', content: 'Imposição de autoridade e status de VIP intocável.' },
                        { type: 'bullet', icon: '🦍', content: 'Vantagem assimétrica (ser mais forte, mais rápido e mais rico que a média).' }
                    ]},
                    { title: "⚡ A Arquitetura da Urgência", items: [
                        { type: 'quote', content: "A mente humana sempre buscará adiar um pagamento. A urgência quebra essa barreira cognitiva." },
                        { type: 'quote', content: "Crie parâmetros de escassez lógicos: tempo, quantidade ou exclusividade." },
                        { type: 'divider' },
                        { type: 'bullet', icon: '⌛', content: 'Condicionamento Temporal: "Esse valor promocional fecha nessa virada de ciclo."' },
                        { type: 'bullet', icon: '💸', content: 'Perda de Oportunidade: "Cada dia sem isso, é um dia que você está pagando mais caro pelo atraso."' },
                        { type: 'bullet', icon: '🎫', content: 'Escassez de Posição: "Os melhores setups estão esgotando rápido, quem chega primeiro consolida a base."' }
                    ]},
                    { isError: true, title: "🚫 ERROS FATAIS (ATAQUE)", items: [
                        { type: 'error', highlight: '👹', content: 'Terrorismo Emocional: Pressionar agressivamente o cliente na dor, gerando antipatia e repulsa.' },
                        { type: 'error', highlight: '📋', content: 'Venda Baseada em Catálogo: Despejar uma lista de features técnicas sem traduzi-las em emoções de ganho.' },
                        { type: 'error', highlight: '🤡', content: 'Falsa Urgência Amadora: Criar limites de tempo ridículos ou irreais ("compra em 5 minutos ou perco o emprego"), quebrando a credibilidade.' },
                        { type: 'error', highlight: '🥱', content: 'Pitch Monótono: Recitar o script sem colocar inflexão de voz ou energia nas palavras.' },
                        { type: 'error', highlight: '⚖️', content: 'Ausência de Calibragem: Aplicar a intensidade de venda de um pacote VIP Black para vender um item cosmético básico.' }
                    ]}
                ]
            },
            fechamento: {
                id: 'fechamento', title: "Fase 5: Fechamento", description: "A arte do xeque-mate. Protocolos precisos de ancoragem de preço, neutralização de objeções e comandos finais de ação.", image: "AssetStore/fechamento.jpg",
                sections: [
                    { isSectionTitle: true, title: "💰 PROTOCOLO DE FECHAMENTO — PADRÃO SG" },
                    { title: "🧠 ARQUITETURA DE DECISÃO", items: [
                        { type: 'bullet', icon: '💎', content: 'Pilar 1: Reafirmação sumária do alto valor percebido.' },
                        { type: 'bullet', icon: '⚓', content: 'Pilar 2: Ancoragem estratégica (contraste de preços).' },
                        { type: 'bullet', icon: '🛣️', content: 'Pilar 3: Facilitação logística e neutralização de fricção no pagamento.' },
                        { type: 'bullet', icon: '🎯', content: 'Pilar 4: Call-to-Action (CTA) direto e imperativo.' },
                        { type: 'divider' },
                        { type: 'subtitle', content: '💡 Insight: Ancoragem é a distorção da percepção de preço. Faça R$100 parecer pouco perto do valor absurdo que ele vai receber.' }
                    ]},
                    { title: '💸 ESTRATÉGIAS DE ANCORAGEM', items: [
                        { type: 'quote', content: '💬 "Se formos calcular cada item e benefício avulso aqui, a tabela ultrapassaria tranquilamente a margem de R$XXX..."' },
                        { type: 'quote', content: '💬 "Porém, estruturando isso num combo fechado para você agora, além de cortar o tempo de espera, o custo afunda drasticamente."' },
                        { type: 'divider' },
                        { type: 'subtitle', content: '📉 Objetivo: Construir o alívio psicológico do desconto invisível.' }
                    ]},
                    { title: '💳 ENGENHARIA DO PAGAMENTO', items: [
                        { type: 'quote', content: '💬 "E a logística é a parte mais simples. Não tem burocracia..."' },
                        { type: 'quote', content: '💬 "Conseguimos liquidar isso via Pix com aprovação na hora, ou podemos pulverizar o valor parcelando no cartão de crédito."' },
                        { type: 'quote', content: '💬 "Caso sua conta seja internacional, processamos de forma lisa via Revolut."' }
                    ]},
                    { title: '⏰ OVERDRIVE DE URGÊNCIA', items: [
                        { type: 'quote', content: '💬 "Jogando aberto com você, essa cotação específica que montei está amarrada a esta janela atual."' },
                        { type: 'quote', content: '💬 "Deixando a decisão para um ciclo posterior, a grade de valores é atualizada e você perde essa vantagem tática inicial."' }
                    ]},
                    { isFull: true, title: '🎯 O COMANDO DIRETO (MATADOR)', items: [
                        { type: 'quote', content: '💬 "Estando alinhado para você, eu já disparo o QR Code do Pix ou o link blindado do cartão, e a gente já starta a ativação no sistema ainda hoje."' }
                    ]},
                    { isFull: true, title: '⚔️ COMANDO AGRESSIVO (ALTA PRESSÃO)', items: [
                        { type: 'hint', content: '(Utilizar apenas quando o radar de intenção de compra estiver no máximo e o cliente precisar de um "empurrão")' },
                        { type: 'quote', content: '💬 "Falando de forma bem analítica: investir isso não é um passivo, é uma trava contra desperdício de tempo futuro."' },
                        { type: 'quote', content: '💬 "Aqueles que se posicionam agora dominam. Quem opta por esperar, sempre acaba pagando a taxa do atraso."' },
                        { type: 'quote', content: '💬 "Fechamos essa estrutura agora no Pix ou você prefere garantir isso fatiando no cartão?"' },
                        { type: 'divider' },
                        { type: 'subtitle', content: '🏆 Regra de Ouro: Jamais termine uma conversão dizendo "Obrigado". O cliente deve ser parabenizado pela excelente decisão de negócio. Diga "Parabéns".' }
                    ]},
                    { isError: true, title: '🚫 ERROS FATAIS (FECHAMENTO)', items: [
                        { type: 'error', highlight: '🔁', content: 'Loopings técnicos: Voltar a explicar características do produto após já ter dado o preço.' },
                        { type: 'error', highlight: '🤐', content: 'Timidez financeira: Hesitar ou abaixar o tom de voz na hora de cobrar o pagamento.' },
                        { type: 'error', highlight: '🧊', content: 'Inércia de urgência: Não criar uma justificativa palpável de por que o negócio precisa ser selado hoje.' },
                        { type: 'error', highlight: '❓', content: 'Perguntas passivas abertas: Jamais diga "O que você acha?", assuma a venda.' },
                        { type: 'divider' },
                        { type: 'subtitle', content: '🛤️ Conduza o final com a dicotomia ilusória (Ex: "Pix ou Cartão?"). Ambas as opções resultam no "Sim".' }
                    ]}
                ]
            },
            posvenda: {
                id: 'posvenda', title: "Fase 6: Pós-Venda", description: "O ciclo infinito de monetização. Técnicas para transformar compradores de primeira viagem em evangelizadores da marca e clientes recorrentes.", image: "AssetStore/pos_venda.jpg",
                sections: [
                    { isSectionTitle: true, title: "🧠 OPERAÇÃO DE PÓS-VENDA — PADRÃO SG" },
                    { title: "🛡️ 1. PROTOCOLO DE BLINDAGEM", items: [
                        { type: 'quote', content: '📌 Fundamento: Eliminar a dissonância cognitiva (o arrependimento silencioso pós-compra).' },
                        { type: 'quote', content: '💬 "Tudo operante no sistema. O pacote já está liberado na sua conta."' },
                        { type: 'quote', content: '💬 "Pode usufruir tranquilamente, o processo foi perfeito."' },
                        { type: 'quote', content: '💬 "Qualquer entrave técnico, meu direct está aberto para te dar suporte prioritário."' },
                        { type: 'divider' },
                        { type: 'quote', content: '🛡️ Resultado: Zera a chance de chargebacks (estornos) | 🔒 Consolida autoridade' }
                    ]},
                    { title: "💎 2. ENGENHARIA DE STATUS", items: [
                        { type: 'quote', content: '📌 Fundamento: Validar o ego do cliente confirmando a superioridade da escolha.' },
                        { type: 'quote', content: '💬 "Com essa ativação, você acabou de saltar para o Top 5% da cidade."' },
                        { type: 'quote', content: '💬 "São raras as pessoas com visão estratégica de entrar tão estruturadas assim."' },
                        { type: 'quote', content: '💬 "Movimento extremamente inteligente, parabéns pela aquisição."' },
                        { type: 'divider' },
                        { type: 'quote', content: '👑 Resultado: Ancoragem de auto-estima alta associada à sua marca | 🏅 Orgulho de pertencimento' }
                    ]},
                    { title: "🚀 3. SUCESSO DO CLIENTE (ATIVAÇÃO)", items: [
                        { type: 'quote', content: '📌 Fundamento: Garantir que ele saiba extrair o máximo de valor da ferramenta comprada.' },
                        { type: 'quote', content: '💬 "Já conseguiu testar o desempenho do [Item Principal]?"' },
                        { type: 'quote', content: '💬 "Um macete avançado: se você combar essa funcionalidade com X, a eficiência dobra."' },
                        { type: 'quote', content: '💬 "Quer que eu dê uma calibrada rápida com você para te mostrar atalhos?"' },
                        { type: 'divider' },
                        { type: 'quote', content: '📈 Resultado: Percepção de ROI altíssimo | ✨ Deslumbramento com o produto' }
                    ]},
                    { title: "🤝 4. MANUTENÇÃO DE NETWORKING", items: [
                        { type: 'quote', content: '📌 Fundamento: Não ser rotulado como o vendedor "vampiro" que some após o depósito.' },
                        { type: 'quote', content: '💬 "Deixei seu contato salvo aqui nos parceiros VIPs."' },
                        { type: 'quote', content: '💬 "O fluxo da cidade muda muito, quando sentir que chegou num teto, me dá um toque."' },
                        { type: 'quote', content: '💬 "Eu sempre separo uns lançamentos por baixo dos panos, te mantenho no radar."' },
                        { type: 'divider' },
                        { type: 'quote', content: '🌉 Resultado: Quebra a barreira do corporativo | 📞 Estrutura um relacionamento de longo prazo' }
                    ]},
                    { title: "💸 5. PREPARAÇÃO DO UPSELL (RECOMPRA)", items: [
                        { type: 'quote', content: '📌 Fundamento: Semear o próximo desejo enquanto o entusiasmo pela compra atual está alto.' },
                        { type: 'quote', content: '💬 "Mais para frente, o próximo degrau natural para você seria acoplar a melhoria [X]..."' },
                        { type: 'quote', content: '💬 "Tem um módulo avançado que encaixa perfeitamente nesse seu setup atual."' },
                        { type: 'quote', content: '💬 "Bate suas metas com isso agora e depois a gente desenha um upgrade para dominar de vez."' },
                        { type: 'divider' },
                        { type: 'quote', content: '🔄 Resultado: Previsibilidade de faturamento | 🛒 Venda orgânica, zero pressão' }
                    ]},
                    { title: "📢 6. MÁQUINA DE REFERÊNCIAS", items: [
                        { type: 'quote', content: '📌 Fundamento: Usar a influência do cliente feliz para atrair novos leads de graça.' },
                        { type: 'quote', content: '💬 "Mano, se alguém da sua tropa quiser colar na mesma pegada, manda o meu perfil."' },
                        { type: 'quote', content: '💬 "Você já viu como a diferença é absurda, indica a galera que eu agilizo o processo deles."' },
                        { type: 'quote', content: '💬 "Quem você trouxer chancelado com seu nome, recebe um tratamento diferenciado aqui na firma."' },
                        { type: 'divider' },
                        { type: 'quote', content: '👥 Resultado: Custo de Aquisição de Clientes (CAC) nulo | 🎟️ Indicações já vêm pré-vendidas' }
                    ]},
                    { isError: true, title: "🚫 ERROS FATAIS NO PÓS-VENDA", items: [
                        { type: 'error', highlight: '👻', content: 'Síndrome do Fantasma: Cortar completamente a comunicação ou ignorar mensagens após o dinheiro cair.' },
                        { type: 'error', highlight: '🥱', content: 'Desprezo Técnico: Ter preguiça de auxiliar um cliente com dificuldade de configuração do VIP/Veículo.' },
                        { type: 'error', highlight: '🔇', content: 'Silêncio Comportamental: Esquecer de enaltecer verbalmente a boa decisão tomada (não validar o ego).' },
                        { type: 'error', highlight: '🚪', content: 'Visão de Curto Prazo: Finalizar o atendimento como uma porta fechada, não deixando brecha orgânica para oferecer mais produtos futuros.' },
                        { type: 'error', highlight: '✂️', content: 'Perda de Networking: Esquecer de solicitar recomendações para a rede de contatos que o jogador possui.' }
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