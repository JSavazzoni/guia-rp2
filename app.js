const DataAccess = {
    getProfiles: () => ({
        'lider': {
            id: 'lider',
            shortTitle: 'Líder (Facção) 👑',
            title: 'Cliente Líder (Facção) 👑',
            description: 'Essa etapa ensina como abordar um líder de facção e fazer ele desejar crescer, dominar e construir uma facção grande e respeitada.',
            image: 'dono de faccao.jpg',
            sections: [
                { isSectionTitle: true, title: 'COMO ABORDAR LIDER DE FACÇÃO' },
                { isFull: true, title: '🎯 Abordagem Estratégica & Foco', items: [
                    '“E aí mano, como que tá tua fac hoje?”', 
                    '“Quantos membros estão pegando ativos aí a noite? Tu quer crescer mais ainda ou tá suave como tá?”', 
                    '“O que mais tá pegando hoje? Fac tá com muito farm aí? Tem bastante grana? Tá ganhando os eventos?”',
                    '---',
                    '“Mano, facção grande não cresce só na bala... Tem que ter estrutura aqui para as pessoas quererem ficar.”', 
                    '“Quanto mais tu fortalece tua fac, mais gente cola, mais resultado vem.”', 
                    '“Fac forte é fac organizada e com incentivo pros membros.”', 
                    '---', 
                    '<span style="font-size: 1.35rem; display: block; margin: 12px 0; color: var(--accent-gold); font-weight: 800; text-align: left;">🛍️ O QUE VOCÊ ESTÁ VENDENDO DE VERDADE:</span>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>📈 Crescimento real da facção.</span></div>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>💪 Poder, respeito e influência.</span></div>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>🔥 Motivação e retenção dos membros.</span></div>', 
                    '---', 
                    '<div style="text-align: left;">🏆 <strong>Ele não quer item — ele quer uma facção dominante.</strong></div>'
                ]},
                { isFull: true, isRecommendationHeader: true, title: '🛒 3. Recomendações de Produtos', items: [] },
                { title: '🏰 VIP Facção Premium', items: [
                    '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Mais carros, baú extra e log de baú.</span></div>', 
                    '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Mais controle para o Líder.</span></div>', 
                    '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Facção muito mais estruturada.</span></div>'
                ]},
                { title: '💸 FARM AFK', items: [
                    '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Farm Vaquinha / Pescaria: Dinheiro interno.</span></div>', 
                    '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Independência financeira total.</span></div>', 
                    '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Menos dependência de farmar na rua.</span></div>'
                ]},
                { title: '⚙️ Farm Ativos', items: [
                    '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Produção de farm direto dentro do QG.</span></div>', 
                    '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Segurança total (não precisa sair).</span></div>', 
                    '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Mais eficiência e produção constante.</span></div>'
                ]},
                { title: '🎁 Incentivo Membros', items: [
                    '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Sorteios VIP: VIP PVP ou VIP Ouro.</span></div>', 
                    '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Muito forte para motivar o grupo.</span></div>', 
                    '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Aumenta o engajamento dos membros.</span></div>'
                ]},
                { isCenteredCard: true, title: '🎭 Identidade Visual', items: [
                    '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Personalização: Uniforme e nome da fac.</span></div>', 
                    '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Reconhecimento imediato na cidade.</span></div>', 
                    '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Respeito visual perante rivais.</span></div>'
                ]},
                { isError: true, title: '❌ ERROS DO VENDEDOR (LÍDER)', items: [
                    '<div class="aligned-list-item"><strong>🚫 Falar só do item:</strong> <span>É só descrever o que o produto tem, sem explicar para que serve de verdade.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫 Ignorar a facção:</strong> <span>É falar com o líder como se ele fosse sozinho, sem considerar os membros.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫 Não investigar a situação:</strong> <span>É não fazer perguntas para entender como a facção dele está hoje.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫 Não ativar ambição:</strong> <span>É não fazer ele querer crescer, evoluir ou dominar mais.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫 Não gerar urgência:</strong> <span>É não dar motivo para ele comprar agora.</span></div>'
                ]}
            ]
        },
        'novato': {
            id: 'novato',
            shortTitle: 'Novato (Iniciante) 🔰',
            title: 'Cliente Novato (Iniciante) 🔰',
            description: 'Você está começando agora. A gente te ajuda a evoluir e ficar forte na cidade!',
            image: 'novato.jpg',
            sections: [
                { isQuote: true, title: '⭐ Regra de Ouro — Novato', content: '“Tu prefere ir evoluindo na raça ou curte já dar uma acelerada no começo?” 🚀', footer: '💡 Perfeita para puxar venda sem tocar em dinheiro direto.' },
                { title: '🧩 1. Leitura do Cliente', items: [
                    '<div class="aligned-list-item"><strong>🆕 Iniciante:</strong> <span>Pouco tempo de cidade; Ainda não tem muitos itens; Sem vínculo forte.</span></div>', 
                    '<div class="aligned-list-item"><strong>💳 Poder de Compra:</strong> <span>Crucial. Pode variar muito conforme a vida real do cliente.</span></div>', 
                    '---', 
                    '<div style="text-align: left;">⚠️ <strong>Observação:</strong> Esse cliente ainda não valoriza a cidade — você precisa criar esse valor nele.</div>'
                ]},
                { title: '🎯 2. Abordagem Estratégica', items: [
                    '<div class="aligned-list-item"><strong>🧊 1. Quebra de Gelo:</strong> <span>"Qual teu nome mano?", "Como é que tu conheceu a cidade?" ➔ <em style="color:#aaa">Objetivo: Criar conexão real.</em></span></div>', 
                    '<div class="aligned-list-item"><strong>🎮 2. Contexto:</strong> <span>"Já jogava RP antes ou é tua primeira vez?"</span></div>', 
                    '<div class="aligned-list-item"><strong>💼 3. Forma de Ganho:</strong> <span>"Tu prefere ir evoluindo na raça ou curte já dar uma acelerada?" ➔ <em style="color:#aaa">Entender o perfil de compra.</em></span></div>', 
                    '<div class="aligned-list-item"><strong>📍 4. Objetivo:</strong> <span>"O que tu quer virar aqui na cidade?"</span></div>'
                ]},
                { isFull: true, title: '🧠 3. Gatilho Mental & Foco', items: [
                    '“Mano, no começo da cidade quem começa já com vantagem cresce MUITO mais rápido...”', 
                    '“Se tu já entra estruturado, tu sai na frente de geral.”', 
                    '---', 
                    '<span style="font-size: 1.35rem; display: block; margin: 12px 0; color: var(--accent-gold); font-weight: 800; text-align: left;">🛍️ O QUE VOCÊ ESTÁ VENDENDO DE VERDADE:</span>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>🚀 Evolução rápida.</span></div>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>⚡ Vantagem inicial.</span></div>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>😌 Facilidade (menos dor de cabeça).</span></div>', 
                    '---', 
                    '<div style="text-align: left;">🏁 <strong>Ele não quer ficar perdido — quer começar forte!</strong></div>'
                ]}
            ]
        },
        'policial': {
            id: 'policial',
            shortTitle: 'Policial (PVP / RP) 🚓',
            title: 'Cliente Policial (PVP / RP) 🚓',
            description: 'Entenda o jogador, conecte o produto com o que ele valoriza: UTILIDADE E RECONHECIMENTO.',
            image: 'policial.jpg',
            sections: [
                { isFull: true, title: '👁️‍🗨️ 1. Leitura do Cliente', items: [
                    '<div class="aligned-list-item"><strong>🔫 Estilo PVP:</strong> <span>Gosta de ação, combate e destaque. Busca status em confronto. Valoriza desempenho e vantagem.</span></div>', 
                    '<div class="aligned-list-item"><strong>🎭 Estilo RP:</strong> <span>Gosta de imersão e rotina. Foco em interação e história. Valoriza utilidade e experiência.</span></div>'
                ]},
                { title: '🎯 2. Abordagem Estratégica', items: [
                    '<div class="aligned-list-item"><strong>⏳ 1. Engajamento:</strong> <span>"Tá há quanto tempo na polícia? Tá curtindo a experiência aqui?"</span></div>', 
                    '<div class="aligned-list-item"><strong>🔥 2. Estilo (PVP):</strong> <span>"Você participa bastante de ação? Trocação com bandido?"</span></div>', 
                    '<div class="aligned-list-item"><strong>🚔 3. Estilo (RP):</strong> <span>"Ou você é mais de RP? Fica mais na DP, treinamento?"</span></div>'
                ]},
                { title: '🧠 3. Gatilhos & Foco', items: [
                    '“Mano, tendo VIP tu acaba ganhando muita moral... A galera sempre pede carro emprestado.”', 
                    '“Suas ações te deixam conhecido como gente boa, útil — e isso pesa MUITO para subir de cargo.”', 
                    '---', 
                    '<span style="font-size: 1.35rem; display: block; margin: 12px 0; color: var(--accent-gold); font-weight: 800; text-align: left;">🛍️ VENDENDO DE VERDADE:</span>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>🛠️ Utilidade (ferramentas, economia de tempo).</span></div>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>🎖️ Reconhecimento (status na corporação, autoridade).</span></div>'
                ]}
            ]
        },
        'medico': {
            id: 'medico',
            shortTitle: 'Médico (RP) 👨‍⚕️',
            title: 'Cliente Médico (RP) 👨‍⚕️',
            description: 'Vender para um médico não é falar do produto. É ENTENDER, CONECTAR E GERAR VALOR REAL.',
            image: 'medico.jpg',
            sections: [
                { title: '🧩 1. Entenda o Perfil', items: [
                    '<div class="aligned-list-item"><strong>🏥 Decisor e Líder:</strong> <span>Responsável por decisões importantes; Lidera equipes.</span></div>', 
                    '<div class="aligned-list-item"><strong>💳 Poder de Compra:</strong> <span>Investe quando vê valor e resultado; Não compra por impulso.</span></div>'
                ]},
                { title: '🎯 2. Perguntas Inteligentes', items: [
                    '<div class="aligned-list-item"><strong>🏢 1. Estrutura atual:</strong> <span>"Hoje tua equipe tá mais organizada ou ainda tá meio na correria?"</span></div>', 
                    '<div class="aligned-list-item"><strong>📈 2. Objetivos:</strong> <span>"Tu quer crescer mais agora ou tá mais focado em manter?"</span></div>', 
                    '<div class="aligned-list-item"><strong>🤕 3. Dores e Desafios:</strong> <span>"O que mais tá te dando dor de cabeça hoje aí na clínica?"</span></div>'
                ]},
                { title: '🧠 3. Foco Real (O que ele busca)', items: [
                    '“Resultados extraordinários vêm de estrutura, pessoas e processos.”', 
                    '“Aqui dentro tu não precisa ser só mais um médico... Tu pode ser referência na cidade.”', 
                    '---', 
                    '👑 <strong>STATUS + IMAGEM:</strong> Mansão top, carros de luxo e estilo marcante.'
                ]},
                { isFull: true, title: '🛡️ 4. Lidando com Objeções', items: [
                    '<div class="aligned-list-item"><strong>💸 "Está caro."</strong> <span>➔ "Entendo. Mas compara isso com o valor que isso vai gerar na tua vida e no teu nome."</span></div>', 
                    '<div class="aligned-list-item"><strong>❓ "Será que isso vale a pena?"</strong> <span>➔ "Se tu tá se perguntando isso... É porque já viu valor. A diferença é até onde tu quer chegar."</span></div>', 
                    '<div class="aligned-list-item"><strong>🤔 "Vou pensar."</strong> <span>➔ "Perfeito! Posso te mostrar alguns resultados rápidos que já podemos alcançar juntos?"</span></div>'
                ]}
            ]
        },
        'staff': {
            id: 'staff',
            shortTitle: 'STAFF (400H+) 🛡️',
            title: 'Cliente STAFF ou (400H+) 🛡️',
            description: 'Esse cliente já tem história. Ele não compra por precisar — ele compra para MARCAR O NOME DELE.',
            image: 'staff.jpg',
            sections: [
                { title: '👁️‍🗨️ 1. Leitura do Cliente', items: [
                    '<div class="aligned-list-item"><strong>🎖️ Experiente:</strong> <span>400+ horas de cidade; Já conhece o servidor e as mecânicas.</span></div>', 
                    '<div class="aligned-list-item"><strong>🤝 Consolidado:</strong> <span>Já tem amigos, rotina dentro da cidade.</span></div>', 
                    '---', 
                    '⚠️ <strong>Observação:</strong> Se for Staff, RP não faz diferença para ele, então vender itens de destaque visual é melhor.'
                ]},
                { title: '🎯 2. Abordagem Estratégica', items: [
                    '<div class="aligned-list-item"><strong>⏳ 1. Tempo:</strong> <span>"E aí mano, tu já tá há mó cota aqui na cidade né?"</span></div>', 
                    '<div class="aligned-list-item"><strong>🏢 2. Situação:</strong> <span>"Já tem tua galera aí? Já tá estruturado?"</span></div>', 
                    '<div class="aligned-list-item"><strong>📍 3. Posicionamento:</strong> <span>"Mas a galera te reconhece fácil? Tipo, só de bater o olho já sabem que é você?"</span></div>'
                ]},
                { title: '🧠 3. Gatilhos & Foco', items: [
                    '“Mano, tu já tem muita história na cidade... O certo era tu já ter uma identidade forte aqui dentro.”', 
                    '“ID muito alto acaba passando despercebido... Ninguém grava.”', 
                    '---', 
                    '<span style="font-size: 1.35rem; display: block; margin: 12px 0; color: var(--accent-gold); font-weight: 800; text-align: left;">🛍️ O QUE VOCÊ ESTÁ VENDENDO DE VERDADE:</span>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>🎭 Identidade e presença.</span></div>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>🏆 Reconhecimento marcado na cidade.</span></div>'
                ]},
                { isFull: true, title: '🛒 4. Recomendações de Produto', items: [
                    '⚠️ <strong>Foco Total em Identidade:</strong> "Tu já fez tudo... Agora falta ser reconhecido."', 
                    '---', 
                    '<div class="aligned-list-item"><strong>🆔 ID Exclusivo (< 1000):</strong> <span>Curto, marcante e respeitado.</span></div>', 
                    '<div class="aligned-list-item"><strong>👕 Roupa Personalizada:</strong> <span>Visual único e reconhecimento imediato.</span></div>', 
                    '<div class="aligned-list-item"><strong>👑 VIP Lançamento:</strong> <span>Benefícios gerais.</span></div>', 
                    '<div class="aligned-list-item"><strong>🔫 Skin de Arma:</strong> <span>Destaque visual.</span></div>'
                ]}
            ]
        }
    }),

    getCategories: () => [
        { id: 'olheiro', title: '🕵️‍♂️ Olheiro', desc: 'Olheiro é a primeira etapa da venda. Antes de abordar o player, observe-o para entender o melhor momento.' },
        { id: 'defesa', title: '🛡️ Defesa', desc: 'A defesa é a segunda etapa da venda: quando você ganha a atenção do cliente e abre a conversa.' },
        { id: 'meio', title: '⚽ Meio de Campo', desc: 'O meio de campo é a terceira etapa da venda: entender a necessidade do cliente através de perguntas chaves.' },
        { id: 'ataque', title: '⚔️ Ataque', desc: 'O ataque é a quarta etapa da venda: é o momento de transformar a dor em solução, gerar desejo e criar urgência para fechar.' },
        { id: 'fechamento', title: '🤝 Fechamento', desc: 'Apresentar as formas de pagamento: Cartão de Crédito/Pix.' },
        { id: 'posvenda', title: '📦 Pós Venda', desc: 'Ir até o cliente ver se os itens chegaram corretamente e realizar serviços de tunagem.' }
    ],

    getCategoryContent: (categoryId) => {
        const database = {
            'olheiro': {
                id: 'olheiro', title: "Olheiro", description: "Olheiro é a primeira etapa da venda. Antes de abordar o player, observe-o, veja o que está fazendo, o assunto e se é o momento certo.", image: "gemini.jpg",
                sections: [
                    { isQuote: true, title: "⭐ Regra de Ouro — Olheiro", content: "“Quem tem visão enxerga a venda antes dela existir.”" },
                    { title: "🎯 Objetivo do Olheiro", items: [
                        '<div class="aligned-list-item"><strong>🗣️</strong> <span>O cliente está disponível para conversar?</span></div>', 
                        '<div class="aligned-list-item"><strong>🧠</strong> <span>Você vai conseguir a atenção dele?</span></div>', 
                        '<div class="aligned-list-item"><strong>💰</strong> <span>Existe oportunidade de venda naquele momento?</span></div>'
                    ]},
                    { title: "⏱️ Tempo de Observação", items: ["⏳ Mínimo: 2 minutos.", "⏰ Ideal: 3 a 5 minutos."], warning: "Abordar no momento errado fará você perder tempo." },
                    { title: "🚶‍♂️ Comportamento do Cliente", items: [
                        '<div class="aligned-list-item"><strong>🗺️</strong> <span>Está perdido?</span></div>', 
                        '<div class="aligned-list-item"><strong>👣</strong> <span>Está andando sem rumo?</span></div>', 
                        '<div class="aligned-list-item"><strong>🛠️</strong> <span>Está testando mecânicas?</span></div>', 
                        '<div class="aligned-list-item"><strong>🧍‍♂️</strong> <span>Está parado?</span></div>', 
                        '<div class="aligned-list-item"><strong>🗣️</strong> <span>Cliente em resenha.</span></div>'
                    ], footer: "💡 Normalmente, clientes em momento tranquilo têm mais chance de dar atenção." },
                    { title: "✅ Sinais de Abertura", items: [
                        '<div class="aligned-list-item"><strong>👤</strong> <span>Cliente sozinho.</span></div>', 
                        '<div class="aligned-list-item"><strong>🧭</strong> <span>Cliente perdido / sem direção.</span></div>', 
                        '<div class="aligned-list-item"><strong>👀</strong> <span>Cliente olhando ao redor.</span></div>', 
                        '<div class="aligned-list-item"><strong>🛋️</strong> <span>Cliente parado.</span></div>', 
                        '<div class="aligned-list-item"><strong>🗣️</strong> <span>Cliente em resenha.</span></div>'
                    ]},
                    { isError: true, title: "❌ Erros do Vendedor", items: [
                        '<div class="aligned-list-item"><strong>🏃‍♂️💨</strong> <span>Abordar instantaneamente sem observar.</span></div>', 
                        '<div class="aligned-list-item"><strong>🛑</strong> <span>Interromper o cliente quando ele não quer.</span></div>', 
                        '<div class="aligned-list-item"><strong>👨‍👩‍👧‍👦</strong> <span>Tentar vender para cliente ou grupo fechado em ação.</span></div>'
                    ]}
                ],
                videoCategories: [{ title: "Adicional em Vídeo", videos: [{ label: "EXEMPLO DE COMO ATENDER", url: "https://drive.google.com/file/d/1nmAOR_S0mm8jWb5VchfBfp2Fo33kiRaq/preview", color: "#22c55e" }, { label: "EXEMPLO DE NÃO ATENDER", url: "https://drive.google.com/file/d/1lLK7Rl9aun4TBVSjbVVRYapQO4VOIZfc/preview", color: "#ef4444" }]}]
            },
            'defesa': {
                id: 'defesa', title: "Defesa na Venda", description: "A defesa é a segunda etapa da venda: quando você ganha a atenção do cliente e abre a conversa.", image: "defesa.jpg",
                sections: [
                    { isQuote: true, title: "⭐ Regra de Ouro — Defesa", content: "“Se você não tem a atenção do cliente, você não tem venda.” 🚀" },
                    { title: "🛡️ O Que é Defesa?", items: ["🤝 Defesa é criar conexão com o cliente para ganhar atenção e iniciar a conversa."], warning: "Sem conexão ➔ Sem atenção ➔ Sem venda." },
                    { title: "🎯 Objetivo da Defesa", items: ["🛑 Fazer o cliente parar.", "⏳ Ganhar alguns segundos de atenção.", "🗣️ Iniciar uma conversa natural."], footer: "💡 Aqui começa a venda de verdade." },
                    { title: "✅ O Que FAZER", items: [
                        '<div class="aligned-list-item"><strong>👤</strong> <span>Falar como pessoa, não como vendedor.</span></div>', 
                        '<div class="aligned-list-item"><strong>❓</strong> <span>Usar perguntas para entender o cliente.</span></div>', 
                        '<div class="aligned-list-item"><strong>🌍</strong> <span>Entrar na realidade dele (faculdade, dinheiro, evolução).</span></div>', 
                        '<div class="aligned-list-item"><strong>🍃</strong> <span>Ser leve, direto e natural.</span></div>', 
                        '<div class="aligned-list-item"><strong>🤔</strong> <span>Criar curiosidade antes de vender.</span></div>'
                    ], footer: "💡 Primeiro conecta, depois vende." },
                    { title: "💬 Como Entrar (Exemplos)", items: [
                        '<div class="aligned-list-item"><strong>🎓</strong> <span>“Tu já tá desenrolando bem na fac ou ainda tá travado?”</span></div>', 
                        '<div class="aligned-list-item"><strong>💰</strong> <span>“Tá conseguindo farmar bem aí ou tá lento ainda?”</span></div>', 
                        '<div class="aligned-list-item"><strong>💪</strong> <span>“Já tá forte ou ainda tá começando a crescer?”</span></div>'
                    ], footer: "💡 Pergunta certa = Cliente fala." },
                    { isError: true, title: "❌ O Que NÃO Fazer", items: [
                        '<div class="aligned-list-item"><strong>🏃‍♂️</strong> <span>Chegar vendendo direto (“Quer VIP?”).</span></div>', 
                        '<div class="aligned-list-item"><strong>🤖</strong> <span>Parecer robô ou script decorado.</span></div>', 
                        '<div class="aligned-list-item"><strong>🛑</strong> <span>Interromper o cliente em um momento errado.</span></div>', 
                        '<div class="aligned-list-item"><strong>🤐</strong> <span>Falar demais e não ouvir.</span></div>', 
                        '<div class="aligned-list-item"><strong>🙈</strong> <span>Ignorar o que o cliente respondeu.</span></div>', 
                        '<div class="aligned-list-item"><strong>🔨</strong> <span>Forçar a venda sem entender a necessidade.</span></div>'
                    ], warning: "Isso quebra a atenção na hora." }
                ],
                videoCategories: [
                    { title: "Exemplos Certos", videos: [{ label: "EXEMPLO CERTO 01", url: "https://drive.google.com/file/d/16DNLlk8XN2rmbYNOw5TqA2keAOmd4gT1/preview", color: "#22c55e" }, { label: "EXEMPLO CERTO 02", url: "https://drive.google.com/file/d/1d41ADDiFX5ECsdtdTFsVyTsc25E8FAzC/preview", color: "#22c55e" }]},
                    { title: "Exemplos Errados", videos: [{ label: "EXEMPLO ERRADO 01", url: "https://drive.google.com/file/d/1_wNaLwQWRViDm4-GBs-zs_8o2RaNVblm/preview", color: "#ef4444" }, { label: "EXEMPLO ERRADO 02", url: "https://drive.google.com/file/d/1JSk9M-WcYazSJhD6Jz_KZWe2jlxmB9tw/preview", color: "#ef4444" }]}
                ]
            },
            'meio': {
                id: 'meio', title: "Meio de Campo", description: "O meio de campo é a terceira etapa da venda: entender a necessidade do cliente através de perguntas chaves.", image: "meio-campo.jpg",
                sections: [
                    { isQuote: true, title: "⭐ Regra de Ouro — Meio de Campo", content: "“Quem conduz bem, vende fácil.”" },
                    { title: "🎯 Objetivo Meio de Campo", items: [
                        '<div class="aligned-list-item"><strong>🗣️</strong> <span>Conduzir o cliente fazendo perguntas chaves.</span></div>', 
                        '<div class="aligned-list-item"><strong>🧠</strong> <span>Entender o que oferecer para o cliente.</span></div>', 
                        '<div class="aligned-list-item"><strong>🤝</strong> <span>Conectar com a realidade dele.</span></div>', 
                        '<div class="aligned-list-item"><strong>📦</strong> <span>Preparar para oferecer.</span></div>'
                    ]},
                    { title: "🔍 Indícios de Interesse", items: [
                        '<div class="aligned-list-item"><strong>✅</strong> <span>Responde rápido.</span></div>', 
                        '<div class="aligned-list-item"><strong>🗣️</strong> <span>Fala mais que você.</span></div>', 
                        '<div class="aligned-list-item"><strong>❓</strong> <span>Faz perguntas.</span></div>', 
                        '<div class="aligned-list-item"><strong>📈</strong> <span>Engaja na conversa.</span></div>'
                    ]},
                    { title: "🎯 Foco da Conversa", items: [
                        '<div class="aligned-list-item"><strong>🔥</strong> <span>Gerar interesse.</span></div>', 
                        '<div class="aligned-list-item"><strong>🛡️</strong> <span>Passar confiança.</span></div>', 
                        '<div class="aligned-list-item"><strong>🧭</strong> <span>Dar direção ao cliente.</span></div>', 
                        '---', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não deixar o cliente desviar do assunto principal.</span></div>', 
                        '<div class="aligned-list-item"><strong>⏳</strong> <span>Não ficar apenas conversando sem intenção de venda.</span></div>', 
                        '<div class="aligned-list-item"><strong>🔗</strong> <span>Sempre conecte a conversa com a solução da venda.</span></div>'
                    ], warning: "Se o cliente dispersar ou você perder o foco, a venda esfria." },
                    { title: "📢 Sinais de Abertura (Ataque!)", items: [
                        '<div class="aligned-list-item"><strong>💲</strong> <span>Pergunta o preço.</span></div>', 
                        '<div class="aligned-list-item"><strong>📦</strong> <span>Pede detalhes sobre o produto.</span></div>', 
                        '<div class="aligned-list-item"><strong>🛒</strong> <span>Pergunta o que você vende.</span></div>', 
                        '<div class="aligned-list-item"><strong>👤</strong> <span>Pergunta se você é vendedor.</span></div>'
                    ], footer: "🔥 Identificou isso? Pare de enrolar e comece o ATAQUE." },
                    { title: "⚠️ Ponto Mais Importante", items: [
                        '<div class="aligned-list-item"><strong>👀</strong> <span>Identificar a abertura.</span></div>', 
                        '<div class="aligned-list-item"><strong>🎣</strong> <span>Encontrar a dor do cliente.</span></div>', 
                        '<div class="aligned-list-item"><strong>🗺️</strong> <span>Mostrar o caminho, falando de algum produto.</span></div>'
                    ], warning: "O maior erro do vendedor é não perceber quando já pode vender (o tempo certo)." },
                    { title: "🧠 Perguntas que Quebram o Padrão", items: [
                        '<div class="aligned-list-item"><strong>🎓</strong> <span>“Tu já tá desenrolando bem na fac ou ainda tá travado?”</span></div>', 
                        '<div class="aligned-list-item"><strong>⛏️</strong> <span>“Já tá conseguindo farmar bem aí ou tá difícil evoluir?”</span></div>', 
                        '<div class="aligned-list-item"><strong>💸</strong> <span>“Já tá conseguindo fazer dinheiro ou tá lento ainda?”</span></div>'
                    ]},
                    { isError: true, title: "❌ Erros de Direcionamento", items: [
                        '<div class="aligned-list-item"><strong>🌪️</strong> <span>Perder o foco da conversa.</span></div>', 
                        '<div class="aligned-list-item"><strong>🔀</strong> <span>Deixar o cliente mudar totalmente o assunto.</span></div>', 
                        '<div class="aligned-list-item"><strong>🗣️</strong> <span>Responder tudo sem puxar de volta para o objetivo.</span></div>', 
                        '<div class="aligned-list-item"><strong>☕</strong> <span>Ficar só “batendo papo” sem avançar.</span></div>', 
                        '<div class="aligned-list-item"><strong>🔌</strong> <span>Não conectar a dor com a solução.</span></div>'
                    ], footer: "💡 <strong>Dor</strong> = O motivo emocional ou prático que faz o cliente querer comprar.<br>💡 <strong>Gerar dor</strong> = Fazer ele perceber que precisa daquilo ou que vale muito a pena ter aquilo." }
                ],
                videoCategories: [{ title: "Exemplos na Prática", videos: [{ label: "EXEMPLO CERTO", url: "https://drive.google.com/file/d/1XkFB2k2B9SfmVVZMYzBXF3dotWcL8xeo/preview", color: "#22c55e" }, { label: "EXEMPLO ERRADO", url: "https://drive.google.com/file/d/1eW3zORlLH6M20KGBbKCQ1BSR1QWh5a10/preview", color: "#ef4444" }]}]
            },
            'ataque': {
                id: 'ataque', title: "Ataque na Venda", description: "O ataque é a quarta etapa da venda: é o momento de transformar a dor em solução, gerar desejo e criar urgência para fechar.", image: "ataque.jpg",
                sections: [
                    { isQuote: true, title: "⭐ Regra de Ouro — Ataque", content: "“Um bom ataque é aquele que não empurra produto, resolve o problema do cliente.”" },
                    { title: "🧠 Conceito: Dor, Desejo e Urgência", items: [
                        "⚖️ Venda forte é o equilíbrio entre:", 
                        "<div style='text-align: left; font-weight: 800; color: var(--accent-gold); margin: 5px 0;'>🎯 Dor + Desejo + Urgência</div>", 
                        "---", 
                        '<div class="aligned-list-item"><strong>🧊</strong> <span>Sem dor ➔ Não conecta.</span></div>', 
                        '<div class="aligned-list-item"><strong>😴</strong> <span>Sem desejo ➔ Não engaja.</span></div>', 
                        '<div class="aligned-list-item"><strong>🛑</strong> <span>Sem urgência ➔ Não fecha.</span></div>'
                    ] },
                    { title: "⚙️ Como Funciona na Prática", items: [
                        '🔗 A venda acontece quando você conecta os três pilares:', 
                        '<div class="aligned-list-item"><strong>1️⃣</strong> <span>Faz ele sentir o problema (Dor).</span></div>', 
                        '<div class="aligned-list-item"><strong>2️⃣</strong> <span>Mostra o que ele pode ganhar (Desejo).</span></div>', 
                        '<div class="aligned-list-item"><strong>3️⃣</strong> <span>Dá um motivo para agir agora (Urgência).</span></div>'
                    ]},
                    { title: "🚀 Exemplo Forte (Pronto para Uso)", items: [
                        '<div class="aligned-list-item"><strong>🔥 Dor:</strong> <span>“Do jeito que você está, você vai evoluir bem mais devagar.”</span></div>', 
                        '<div class="aligned-list-item"><strong>✨ Desejo:</strong> <span>“Com esse VIP, você já entra em outro nível dentro da cidade.”</span></div>', 
                        '<div class="aligned-list-item"><strong>⚡ Urgência:</strong> <span>“E pegando agora, você aproveita essa condição antes que acabe.”</span></div>'
                    ]},
                    { title: "🔥 Dor (O Problema)", items: ["🤔 A dor não é inventar necessidade.", "🔍 Identificar ou despertar algo que já faz sentido para o cliente.", "🚫 Você não cria mentira. Você evidencia um incômodo, uma falta ou uma dificuldade.", "---", "🐢 Está evoluindo devagar.", "👻 Está sem destaque na cidade.", "🐌 Está ficando para trás.", "💸 Está gastando mais do que deveria."] },
                    { title: "✨ Desejo (O que ele quer conquistar)", items: ["🏆 Aqui é onde você ganha o cliente. Não basta mostrar o problema — você precisa mostrar o benefício.", "💭 Você faz ele imaginar o nível que ele pode alcançar e a vantagem sobre outros players.", "---", "🚀 Evoluir mais rápido.", "👑 Ter mais presença e respeito.", "🥇 Ter vantagem sobre outros players.", "🏰 Entrar já estruturado."] },
                    { title: "⚡ Urgência (O Gatilho)", items: ["⏳ Sem urgência, não tem fechamento. O cliente até quer… mas deixa para depois.", "⏰ Você cria um motivo para ele agir agora (condição limitada ou oportunidade).", "---", "🏃‍♂️ “Essa condição é só agora.”", "📈 “Depois você vai pagar mais caro.”", "🏁 “Quem pega agora sai na frente.”"] },
                    { isError: true, title: "❌ Erros no Ataque", items: [
                        '<div class="aligned-list-item"><strong>🎯 Focar demais na dor:</strong> <span>Pode parecer pressão ou até manipulação se exagerar.</span></div>', 
                        '<div class="aligned-list-item"><strong>🧩 Desejo genérico:</strong> <span>“Vantagem” e “presença” sem contexto perdem força.</span></div>', 
                        '<div class="aligned-list-item"><strong>⏱️ Urgência forçada:</strong> <span>Se não for real, o cliente sente e você perde a confiança.</span></div>', 
                        '<div class="aligned-list-item"><strong>🤖 Sequência robótica:</strong> <span>Ficar sempre no automático soa mecânico.</span></div>', 
                        '<div class="aligned-list-item"><strong>👥 Não adaptar ao cliente:</strong> <span>Usar o mesmo discurso para todo mundo diminui a sua conversão.</span></div>'
                    ]}
                ]
            },
            'fechamento': {
                id: 'fechamento', title: "Fechamento", description: "Apresentar as formas de pagamento: Cartão de Crédito/Pix.", image: "gemini.jpg",
                sections: [
                    { isQuote: true, title: "⭐ Regra de Ouro — Fechamento", content: "“A venda só termina quando a transação é concluída com clareza.”" },
                    { title: "💳 Formas de Pagamento", items: ["Cartão de Crédito.", "Pix (Transferência imediata)."], footer: "💡 Facilite ao máximo o processo de pagamento para não perder a venda no último segundo." },
                    { title: "🎯 Finalização", items: ["Garantir a concordância total do cliente com os valores e termos.", "Finalizar a transação no sistema de forma rápida e segura."] }
                ]
            },
            'posvenda': {
                id: 'posvenda', title: "Pós Venda", description: "Ir até o cliente ver se os itens chegaram corretamente, tunar os carros.", image: "gemini.jpg",
                sections: [
                    { isQuote: true, title: "⭐ Regra de Ouro — Pós Venda", content: "“Um cliente bem atendido e sem dúvidas é a sua melhor propaganda.” 🤝" },
                    { title: "📦 Verificação", items: ["Ir até o cliente ver se os itens chegaram corretamente.", "Confirmar se ele sabe usar o que comprou."], warning: "Não abandone o cliente após o pagamento." },
                    { title: "🛠️ Serviços Extras", items: ["Tunar os carros (se houver).", "Acompanhar o cliente nos primeiros passos após a compra."], footer: "💡 Isso fideliza o cliente para compras futuras." }
                ]
            }
        };
        return database[categoryId] || null;
    }
};

const BusinessLogic = {
    state: { currentView: 'menu', currentCategoryId: null, currentProfileId: null, isMeioExpanded: false },
    navigateToMenu: () => { BusinessLogic.state.currentView = 'menu'; BusinessLogic.state.isMeioExpanded = false; Controller.render(); },
    toggleMeio: (e) => {
        e.stopPropagation();
        BusinessLogic.state.isMeioExpanded = !BusinessLogic.state.isMeioExpanded;
        BusinessLogic.state.currentView = 'category';
        BusinessLogic.state.currentCategoryId = 'meio';
        BusinessLogic.state.currentProfileId = null;
        Controller.render();
    },
    navigateToCategory: (id) => { 
        BusinessLogic.state.currentView = 'category'; 
        BusinessLogic.state.currentCategoryId = id; 
        BusinessLogic.state.currentProfileId = null;
        BusinessLogic.state.isMeioExpanded = (id === 'meio');
        window.scrollTo(0,0); Controller.render(); 
    },
    navigateToProfile: (id) => { 
        BusinessLogic.state.currentProfileId = id; 
        BusinessLogic.state.currentView = 'category';
        BusinessLogic.state.currentCategoryId = 'meio';
        BusinessLogic.state.isMeioExpanded = true;
        window.scrollTo(0,0); Controller.render(); 
    }
};

const Controller = {
    render: () => {
        const root = document.getElementById('applicationRoot');
        if (BusinessLogic.state.currentView === 'menu') root.innerHTML = Controller.templates.menu();
        else {
            const baseData = DataAccess.getCategoryContent(BusinessLogic.state.currentCategoryId);
            root.innerHTML = baseData ? Controller.templates.category(baseData) : Controller.templates.fallback();
        }
    },

    templates: {
        menu: () => `
            <div class="overlay"></div>
            <style>
                .funnelStepTitle { font-size: 1.15rem !important; }
                .funnelStepDesc { font-size: 0.95rem !important; line-height: 1.45; text-wrap: balance; }
            </style>
            <div class="funnelContainer">
                ${DataAccess.getCategories().map(cat => `
                    <div class="funnelStep step${cat.id.charAt(0).toUpperCase() + cat.id.slice(1)}" onclick="BusinessLogic.navigateToCategory('${cat.id}')">
                        <span class="funnelStepTitle">${cat.title}</span>
                        <span class="funnelStepDesc">${cat.desc}</span>
                    </div>
                `).join('')}
            </div>`,

        category: (baseData) => {
            const profiles = DataAccess.getProfiles();
            const data = BusinessLogic.state.currentProfileId ? profiles[BusinessLogic.state.currentProfileId] : baseData;

            return `
                <div class="overlay"></div>
                <style>
                    .layoutContainer { max-width: 100% !important; padding: 0 !important; display: flex; }
                    .sidebarNavigation { width: 280px !important; flex-shrink: 0; display: flex; flex-direction: column; justify-content: space-between; border-right: 1px solid rgba(255,255,255,0.05); background: #000; }
                    .mainWorkspace { padding: 2rem 8% !important; flex-grow: 1; max-width: calc(100vw - 280px); overflow-x: hidden; text-align: left; }
                    
                    .headerContainer { display: flex; align-items: center; justify-content: space-between; gap: 2.5rem; margin-bottom: 3rem; }
                    .headerTextContent { text-align: left; flex: 1; }
                    .pageTitle { font-size: 2rem !important; margin-bottom: 0.6rem; text-align: left; font-weight: 800; }
                    .pageDescription { font-size: 1.05rem !important; line-height: 1.5; text-align: left; color: #ccc; }
                    
                    /* QUADRADO DO TAMANHO DA IMAGEM */
                    .headerImageContainer { flex-shrink: 0; border: 1px solid var(--accent-gold); padding: 6px; border-radius: 12px; background: rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; }
                    .headerImageContainer img { max-width: 320px; height: auto; border-radius: 8px; display: block; }

                    .contentGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; width: 100%; }
                    .cardSpanFull { grid-column: 1 / -1; }
                    
                    .infoCard { width: 100%; box-sizing: border-box; text-align: left; overflow: visible; background: #111; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); padding: 1.5rem; }
                    .infoCard h2 { font-size: 1.3rem !important; text-align: left; margin-bottom: 1rem; color: var(--accent-gold); font-weight: 800; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px; }
                    
                    .dataList { display: block; width: 100%; list-style: none; padding: 0; }
                    .dataList li { font-size: 1rem !important; line-height: 1.6; margin-bottom: 10px; text-align: left; white-space: normal; }

                    .aligned-list-item { display: flex; align-items: flex-start; gap: 12px; width: 100%; margin-bottom: 8px; }
                    .aligned-list-item strong { flex-shrink: 0; color: var(--accent-gold); }
                    .aligned-list-item span { flex-grow: 1; text-align: left; }

                    .quoteCard { text-align: center !important; border: 1px solid rgba(212, 175, 55, 0.3) !important; background: rgba(212, 175, 55, 0.05) !important; padding: 2rem !important; }
                    .quoteCard h2 { text-align: center !important; border: none; padding: 0; }
                    .quoteText { font-size: 1.2rem !important; font-style: italic; display: block; text-align: center !important; width: 100%; margin-top: 10px; }
                    
                    .navItem { font-size: 1.05rem !important; white-space: nowrap; padding: 1.1rem 1.4rem !important; font-weight: 700; border-bottom: 1px solid rgba(255,255,255,0.05); }
                    .topHeadingFree { grid-column: 1 / -1; text-align: center; font-size: 1.5rem; color: var(--accent-gold); font-weight: 900; margin: 2rem 0; text-transform: uppercase; letter-spacing: 1px; }
                    
                    .centeredRecommendationCard { grid-column: 1 / -1 !important; justify-self: center !important; width: 100% !important; max-width: 600px !important; }
                    .liderRecCard { grid-column: span 1 !important; }
                    .listDivider { margin: 15px 0; border-bottom: 1px solid rgba(255,255,255,0.1); width: 100%; }

                    /* RODAPÉ DESENVOLVIDO MELHORADO */
                    .sidebarFooter { padding: 1.8rem 1rem; text-align: center; border-top: 1px solid rgba(255,255,255,0.1); background: linear-gradient(to bottom, transparent, rgba(212,175,55,0.03)); margin-top: auto; }
                    .sidebarFooter span { font-size: 0.85rem; color: #888; text-transform: uppercase; letter-spacing: 1px; font-weight: 500; }
                    .sidebarFooter strong { color: var(--accent-gold); font-size: 1.15rem; display: block; margin-top: 6px; font-weight: 900; text-shadow: 0 0 10px rgba(212,175,55,0.2); }
                </style>
                <div class="layoutContainer">
                    <aside class="sidebarNavigation">
                        <div>
                            <button class="backButton" onclick="BusinessLogic.navigateToMenu()">⬅ Menu Inicial</button>
                            <nav class="navigationMenu">
                                ${DataAccess.getCategories().map(cat => {
                                    const isMeio = cat.id === 'meio';
                                    const isCatActive = BusinessLogic.state.currentCategoryId === cat.id;
                                    const isProfileActive = BusinessLogic.state.currentProfileId !== null;
                                    return `
                                        <div class="navItem ${isCatActive && !isProfileActive ? 'navItemActive' : ''}" onclick="${isMeio ? 'BusinessLogic.toggleMeio(event)' : `BusinessLogic.navigateToCategory('${cat.id}')`}">
                                            ${cat.title} ${isMeio ? (BusinessLogic.state.isMeioExpanded ? '▾' : '▸') : ''}
                                        </div>
                                        ${isMeio && BusinessLogic.state.isMeioExpanded ? `
                                            <div class="profileSubMenu" style="margin-left: 1rem; border-left: 1px solid rgba(212,175,55,0.3); margin-bottom: 10px;">
                                                ${Object.values(profiles).map(p => `
                                                    <div class="navItem ${BusinessLogic.state.currentProfileId === p.id ? 'navSubItemActive' : ''}" 
                                                         style="font-size: 0.95rem !important; padding: 0.8rem 1.2rem !important; text-transform: none; border-bottom: none;" 
                                                         onclick="BusinessLogic.navigateToProfile('${p.id}')">👤 ${p.shortTitle}</div>
                                                `).join('')}
                                            </div>` : ''}
                                    `;
                                }).join('')}
                            </nav>
                        </div>
                        <div class="sidebarFooter">
                            <span>Desenvolvido por</span>
                            <strong>Vz & Surfista</strong>
                        </div>
                    </aside>
                    <main class="mainWorkspace">
                        <header class="headerContainer">
                            <div class="headerTextContent">
                                <h1 class="pageTitle">${data.title}</h1>
                                <p class="pageDescription">${data.description}</p>
                            </div>
                            <div class="headerImageContainer"><img src="${data.image}" alt="Header"></div>
                        </header>
                        <div class="contentGrid">
                            ${data.sections.map(s => {
                                if (s.isSectionTitle) return `<div class="topHeadingFree">${s.title}</div>`;
                                if (s.isRecommendationHeader) return `<div class="cardSpanFull" style="margin-top: 1rem;"><h2 style="font-size: 1.4rem; color: var(--accent-gold); text-align: left; width: 100%; font-weight: 800;">${s.title}</h2></div>`;
                                
                                let extraClass = "";
                                if (s.isCenteredCard) extraClass = "centeredRecommendationCard";
                                else if (!s.isFull && !s.isQuote && !s.isError && BusinessLogic.state.currentProfileId === 'lider') extraClass = "liderRecCard";
                                else if (s.isQuote || s.isError || s.isFull) extraClass = "cardSpanFull";

                                return `
                                <section class="infoCard ${extraClass} ${s.isQuote ? 'quoteCard' : ''} ${s.isError ? 'errorCard' : ''}">
                                    <h2>${s.title}</h2>
                                    ${s.content ? `<p class="quoteText">${s.content}</p>` : ''}
                                    <ul class="dataList">
                                        ${s.items ? s.items.map(i => i === '---' ? `<li class="listDivider"></li>` : `<li>${i}</li>`).join('') : ''}
                                    </ul>
                                    ${s.warning ? `<div class="warningBox">${s.warning}</div>` : ''}
                                    ${s.footer ? `<div class="hintBox">${s.footer}</div>` : ''}
                                </section>
                                `;
                            }).join('')}
                        </div>
                        ${data.videoCategories ? data.videoCategories.map(cat => `
                            <section class="videoSection" style="margin-top: 3rem;">
                                <h1 class="sectionTitle" style="font-size: 1.4rem; font-weight: 800;">${cat.title}</h1>
                                <div class="videosGrid">${cat.videos.map(v => `<div class="videoWrapper"><h3 class="videoLabel" style="color:${v.color}; border: 2px solid ${v.color}; font-size: 0.9rem; font-weight: 800;">${v.label}</h3><div class="videoContainer"><iframe src="${v.url}" allow="autoplay"></iframe></div></div>`).join('')}</div>
                            </section>`).join('') : ''}
                    </main>
                </div>
                <style>
                    .navSubItemActive { color: var(--accent-gold) !important; background: rgba(212,175,55,0.1) !important; font-weight: 900 !important; }
                    .profileSubMenu .navItem:hover { background: rgba(255,255,255,0.05); }
                </style>`;
        },
        fallback: () => `<div class="overlay"></div><div style="padding:5rem; text-align:center;"><h1>Conteúdo em construção...</h1><button class="backButton" onclick="BusinessLogic.navigateToMenu()">Voltar ao Funil</button></div>`
    }
};

document.addEventListener('DOMContentLoaded', Controller.render);