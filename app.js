const DataAccess = {
    getProfiles: () => ({
        'lider': {
            id: 'lider',
            shortTitle: 'Líder (Facção) 👑',
            title: 'Cliente Líder (Facção) 👑',
            description: 'Essa etapa ensina como abordar um líder de facção e fazer ele desejar crescer, dominar e construir uma facção grande e respeitada.',
            image: 'dono de faccao.jpg',
            sections: [
                { isSectionTitle: true, title: 'COMO ABORDAR (LÍDER DE FACÇÃO)' },
                { isFull: true, title: '🎯 Abordagem Estratégica & Foco', items: [
                    '“E aí mano, como que tá tua fac hoje?”', 
                    '“Quantos membros estão pegando ativos aí à noite? Tu quer crescer mais ainda ou tá suave como tá?”', 
                    '“O que mais tá pegando hoje? Fac tá com muito farm aí? Tem bastante grana? Tá ganhando os eventos?”',
                    '---',
                    '“Mano, facção grande não cresce só na bala... Tem que ter estrutura aqui para as pessoas quererem ficar.”', 
                    '“Quanto mais tu fortalece tua fac, mais gente cola, mais resultado vem.”', 
                    '“Fac forte é fac organizada e com incentivo pros membros.”', 
                    '---', 
                    '<span style="font-size: 1.35rem; display: block; margin: 12px 0; color: #fff; font-weight: 800; text-align: left;">🛍️ O QUE VOCÊ ESTÁ VENDENDO DE VERDADE:</span>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>📈 Crescimento real da facção.</span></div>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>💪 Poder, respeito e influência.</span></div>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>🔥 Motivação e retenção dos membros.</span></div>'
                ]},
                { isFull: true, isRecommendationHeader: true, title: '🛒 Recomendações de Produtos', items: [] },
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
                { isError: true, title: '❌ ERROS DO VENDEDOR (CLIENTE LÍDER)', items: [
                    '<div class="aligned-list-item"><strong>🚫 Falar só do item:</strong> <span>É só descrever o que o produto tem, sem explicar para que serve de verdade.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫 Ignorar a facção:</strong> <span>É falar com o líder como se ele fosse sozinho, sem considerar os membros.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫 Não investigar a situação:</strong> <span>É não fazer perguntas para entender como a facção dele está hoje.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫 Não ativar ambição:</strong> <span>É não fazer ele querer crescer, evoluir ou dominar mais.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫 Não gerar urgência:</strong> <span>É não dar motivo para ele comprar agora.</span></div>'
                ]},
                { isComic: true, title: '⚽ ESTRATÉGIA DE ABORDAGEM: CERTO vs ERRADO', image: 'quadrinho_lider.jpg' }
            ]
        },
        'novato': {
            id: 'novato',
            shortTitle: 'Novato (Iniciante) 🔰',
            title: 'Cliente Novato (Iniciante) 🔰',
            description: 'Essa etapa ensina como abordar um novato e fazer ele desejar ser reconhecido, crescer, dominar e construir uma reputação respeitada na cidade.',
            image: 'novato.jpg',
            sections: [
                { isSectionTitle: true, title: 'COMO ABORDAR (NOVATO)' },
                { isFull: true, title: '🎯 Abordagem Estratégica & Foco', items: [
                    '“Qual teu nome mano?”, “Como é que tu conheceu a cidade?”', 
                    '“Já jogava RP antes ou é tua primeira vez?”', 
                    '“Tu prefere ir evoluindo na raça ou curte já dar uma acelerada?”', 
                    '“O que tu quer virar aqui na cidade?”',
                    '---',
                    '“Mano, no começo da cidade quem começa já com vantagem cresce MUITO mais rápido...”', 
                    '“Se tu já entra estruturado, tu sai na frente de geral.”', 
                    '---', 
                    '<span style="font-size: 1.35rem; display: block; margin: 12px 0; color: #fff; font-weight: 800; text-align: left;">🛍️ O QUE VOCÊ ESTÁ VENDENDO DE VERDADE:</span>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>🚀 Evolução rápida.</span></div>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>⚡ Vantagem inicial.</span></div>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>😌 Facilidade (menos dor de cabeça).</span></div>'
                ]},
                { isFull: true, isRecommendationHeader: true, title: '🛒 Recomendações de Produtos', items: [] },
                { title: '🥇 VIP OURO', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Foco principal de evolução.</span></div>']},
                { title: '🚀 VIP LANÇAMENTO', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Exclusividade e benefícios.</span></div>']},
                { title: '🚗 VEÍCULOS START', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Perfeito para a entrada.</span></div>']},
                { title: '🎟️ SANTAPASS', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Recompensas e itens únicos.</span></div>']},
                { isCenteredCard: true, title: '🎵 SANTAFY', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Garante uma experiência melhor na cidade.</span></div>']},
                { isError: true, title: '❌ ERROS DO VENDEDOR (CLIENTE INICIANTE)', items: [
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Não entender que ele é iniciante.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Não criar conexão.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Não investigar o nível dele.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Não ativar dor (tá perdido/lento).</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Falar só de item.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Não direcionar o próximo passo.</span></div>'
                ]},
                { isComic: true, title: '⚽ ESTRATÉGIA DE ABORDAGEM: CERTO vs ERRADO', image: 'quadrinho_novato.jpg' }
            ]
        },
        'policial': {
            id: 'policial',
            shortTitle: 'Policial (PVP / RP) 🚓',
            title: 'Cliente Policial (PVP / RP) 🚓',
            description: 'Essa etapa ensina como abordar um policial e fazer ele desejar crescer de patente na corporação, construir uma reputação e ser respeitado na cidade.',
            image: 'policial.jpg',
            sections: [
                { isSectionTitle: true, title: 'COMO ABORDAR (POLICIAL)' },
                { isFull: true, title: '🎯 Abordagem Estratégica & Foco', items: [
                    '“Tá há quanto tempo na polícia? Tá curtindo a experiência aqui?”', 
                    '“Você participa bastante de ação? Trocação com bandido?”', 
                    '“Ou você é mais de RP? Fica mais na DP, treinamento?”',
                    '---',
                    '“Mano, tendo VIP tu acaba ganhando muita moral... A galera sempre pede carro emprestado.”', 
                    '“Suas ações te deixam conhecido como gente boa, útil — e isso pesa MUITO para subir de cargo.”', 
                    '---', 
                    '<span style="font-size: 1.35rem; display: block; margin: 12px 0; color: #fff; font-weight: 800; text-align: left;">🛍️ O QUE VOCÊ ESTÁ VENDENDO DE VERDADE:</span>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>🛠️ Utilidade (ferramentas, economia de tempo).</span></div>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>🎖️ Reconhecimento (status na corporação, autoridade).</span></div>'
                ]},
                { isFull: true, isRecommendationHeader: true, title: '🛒 Recomendações de Produtos', items: [] },
                { title: '👮‍♂️ PERFIL: POLICIAL RP', items: [
                    '<div style="margin-bottom: 12px; color: #ccc; font-size: 0.95rem;">Focado em evolução dentro da corporação, reconhecimento e presença na cidade.</div>',
                    '<div class="aligned-list-item"><strong class="checkIcon">💎</strong> <span><strong>VIP Polícia:</strong> vantagens dentro do RP policial</span></div>',
                    '<div class="aligned-list-item"><strong class="checkIcon">🏡</strong> <span><strong>Voucher de Casa:</strong> estrutura e estabilidade</span></div>',
                    '<div class="aligned-list-item"><strong class="checkIcon">🆔</strong> <span><strong>ID:</strong> identidade e presença na cidade</span></div>'
                ], footer: '➡️ Ideal para quem quer crescer de patente, construir reputação e ser respeitado no RP' },
                { title: '🔫 PERFIL: POLICIAL PvP', items: [
                    '<div style="margin-bottom: 12px; color: #ccc; font-size: 0.95rem;">Focado em combate, desempenho e superioridade nas ações.</div>',
                    '<div class="aligned-list-item"><strong class="checkIcon">⚡</strong> <span><strong>VIP PvP:</strong> vantagem direta em combate</span></div>',
                    '<div class="aligned-list-item"><strong class="checkIcon">👑</strong> <span><strong>VIP Platinum:</strong> pacote mais completo e forte</span></div>',
                    '<div class="aligned-list-item"><strong class="checkIcon">👕</strong> <span><strong>Peça de Roupa Exclusiva:</strong> identidade visual e destaque</span></div>'
                ], footer: '➡️ Ideal para quem quer dominar ações, ter desempenho alto e impor respeito no PvP' },
                { isError: true, title: '❌ ERROS DO VENDEDOR (CLIENTE POLICIAL)', items: [
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Não entender se ele é focado em PVP ou RP.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Ignorar o tempo de corporação e o cargo dele.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Não oferecer utilidade para a rotina dele.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Não ativar o gatilho de status perante os colegas.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Focar só em preço e não em moral/destaque.</span></div>'
                ]},
                { isComic: true, title: '⚽ ESTRATÉGIA DE ABORDAGEM: CERTO vs ERRADO', image: 'quadrinho_policial.jpg' }
            ]
        },
        'medico': {
            id: 'medico',
            shortTitle: 'Médico (RP) 👨‍⚕️',
            title: 'Cliente Médico (RP) 👨‍⚕️',
            description: 'Essa etapa ensina como abordar um médico e fazer ele desejar crescer na hierarquia do hospital, ter status social e respeito na cidade.',
            image: 'medico.jpg',
            sections: [
                { isSectionTitle: true, title: 'COMO ABORDAR (MÉDICO)' },
                { isFull: true, title: '🎯 Abordagem Estratégica & Foco', items: [
                    '“Hoje tua equipe tá mais organizada ou ainda tá meio na correria?”', 
                    '“Tu quer crescer mais agora ou tá mais focado em manter?”', 
                    '“O que mais tá te dando dor de cabeça hoje aí na clínica?”',
                    '---',
                    '“Resultados extraordinários vêm de estrutura, pessoas e processos.”', 
                    '“Aqui dentro tu não precisa ser só mais um médico... Tu pode ser referência na cidade.”', 
                    '---', 
                    '<span style="font-size: 1.35rem; display: block; margin: 12px 0; color: #fff; font-weight: 800; text-align: left;">🛍️ O QUE VOCÊ ESTÁ VENDENDO DE VERDADE:</span>',
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>⚡ Praticidade (menos tempo perdido, mais eficiência no dia a dia)</span></div>',
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>🛋️ Conforto (descanso, qualidade de vida após plantão)</span></div>',
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>🏆 Reconhecimento (status como médico referência na cidade)</span></div>'
                ]},
                { isFull: true, isRecommendationHeader: true, title: '🛒 Recomendações de Produtos', items: [] },
                { title: '🏡 MANSÃO', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Status máximo e espaço para a equipe.</span></div>']},
                { title: '👑 VIP LANÇAMENTO', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Benefícios gerais e respeito na cidade.</span></div>']},
                { title: '🏠 VOUCHER DE CASA', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Conforto, exclusividade e utilidade.</span></div>']},
                { title: '🎟️ SANTAPASS', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Recompensas e itens únicos.</span></div>']},
                { isError: true, title: '❌ ERROS DO VENDEDOR (CLIENTE MÉDICO)', items: [
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Não respeitar o tempo dele (médicos são ocupados).</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Ignorar as dores da equipe ou da clínica.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Não oferecer itens de alto padrão (mansão/luxo).</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Não lidar profissionalmente com objeções de valor.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Tratar como novato e não como um decisor.</span></div>'
                ]},
                { isComic: true, title: '⚽ ESTRATÉGIA DE ABORDAGEM: CERTO vs ERRADO', image: 'quadrinho_medico.jpg' }
            ]
        },
        'staff': {
            id: 'staff',
            shortTitle: 'STAFF (400H+) 🛡️',
            title: 'Cliente STAFF ou (400H+) 🛡️',
            description: 'Essa etapa ensina como abordar um staff e fazer ele querer subir na hierarquia, ter voz dentro da equipe e ser reconhecido como referência na cidade.',
            image: 'staff.jpg',
            sections: [
                { isSectionTitle: true, title: 'COMO ABORDAR (STAFF)' },
                { isFull: true, title: '🎯 Abordagem Estratégica & Foco', items: [
                    '“E aí mano, tu já tá há mó cota aqui na cidade né?”', 
                    '“Já tem tua galera aí? Já tá estruturado?”', 
                    '“Mas a galera te reconhece fácil? Tipo, só de bater o olho já sabem que é você?”',
                    '---',
                    '“Mano, tu já tem muita história na cidade... O certo era tu já ter uma identidade forte aqui dentro.”', 
                    '“ID muito alto acaba passando despercebido... Ninguém grava.”', 
                    '---', 
                    '<span style="font-size: 1.35rem; display: block; margin: 12px 0; color: #fff; font-weight: 800; text-align: left;">🛍️ O QUE VOCÊ ESTÁ VENDENDO DE VERDADE:</span>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>🎭 Identidade e presença.</span></div>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>🏆 Reconhecimento marcado na cidade.</span></div>'
                ]},
                { isFull: true, isRecommendationHeader: true, title: '🛒 Recomendações de Produtos', items: [] },
                { title: '🆔 ID EXCLUSIVO (< 1000)', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Curto, marcante e respeitado por todos.</span></div>']},
                { title: '👕 ROUPA PERSONALIZADA', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Visual único e reconhecimento imediato.</span></div>']},
                { title: '👑 VIP LANÇAMENTO', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Todos os benefícios exclusivos de ponta.</span></div>']},
                { title: '🔫 SKIN DE ARMA', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Destaque visual em qualquer ação.</span></div>']},
                { isError: true, title: '❌ ERROS DO VENDEDOR (CLIENTE STAFF)', items: [
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Não respeitar a história dele no servidor.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Oferecer pacotes básicos para quem já é experiente.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Ignorar o desejo de exclusividade e identidade visual.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Focar em farm/inicial para quem já tem tudo.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Não valorizar o peso do ID dele na cidade.</span></div>'
                ]},
                { isComic: true, title: '⚽ ESTRATÉGIA DE ABORDAGEM: CERTO vs ERRADO', image: 'quadrinho_staff.jpg' }
            ]
        }
    }),

    getCategories: () => [
        { id: 'olheiro', title: '🕵️‍♂️ Olheiro', desc: 'Olheiro é a primeira etapa da venda. Antes de abordar o player, observe-o para entender o melhor momento.' },
        { id: 'defesa', title: '🛡️ Defesa', desc: 'A defesa é a segunda etapa da venda: quando você ganha a atenção do cliente e abre a conversa.' },
        { id: 'meio', title: '⚽ Meio de Campo', desc: 'O meio de campo é a terceira etapa da venda: entender a necessidade do cliente através de perguntas-chave.' },
        { id: 'ataque', title: '⚔️ Ataque', desc: 'O ataque é a quarta etapa da venda: é o momento de transformar a dor em solução, gerar desejo e criar urgência para fechar.' },
        { id: 'fechamento', title: '🤝 Fechamento', desc: 'Fechamento conduz valor, quebra dúvida e transforma interesse em decisão.' },
        { id: 'posvenda', title: '📦 Pós Venda', desc: 'Ir até o cliente ver se os itens chegaram corretamente e realizar serviços de tunagem.' }
    ],

    getCategoryContent: (categoryId) => {
        const database = {
            'olheiro': {
                id: 'olheiro', title: "Olheiro", description: "Observe o player, veja o que está fazendo, o assunto e se é o momento certo.", image: "gemini.jpg",
                sections: [
                    { isSectionTitle: true, title: "COMO ABORDAR (OLHEIRO)" },
                    { title: "🎯 Objetivo do Olheiro", items: ['<div class="aligned-list-item"><strong>🗣️</strong> <span>O cliente está disponível para conversar?</span></div>', '<div class="aligned-list-item"><strong>🧠</strong> <span>Você vai conseguir a atenção dele?</span></div>', '<div class="aligned-list-item"><strong>💰</strong> <span>Existe oportunidade de venda naquele momento?</span></div>'] },
                    { title: "⏱️ Tempo de Observação", items: ["⏳ Mínimo: 2 minutos.", "⏰ Ideal: 3 a 5 minutos."], warning: "Abordar no momento errado fará você perder tempo." },
                    { title: "🚶‍♂️ Comportamento do Cliente", items: ['<div class="aligned-list-item"><strong>🗺️</strong> <span>Está perdido?</span></div>', '<div class="aligned-list-item"><strong>👣</strong> <span>Está andando sem rumo?</span></div>', '<div class="aligned-list-item"><strong>🛠️</strong> <span>Está testando mecânicas?</span></div>', '<div class="aligned-list-item"><strong>🧍‍♂️</strong> <span>Está parado?</span></div>'], footer: "💡 Normalmente, clientes em momento tranquilo têm mais chance de dar atenção." },
                    { title: "✅ Sinais de Abertura", items: ['<div class="aligned-list-item"><strong>👤</strong> <span>Cliente sozinho.</span></div>', '<div class="aligned-list-item"><strong>🧭</strong> <span>Cliente perdido / sem direção.</span></div>', '<div class="aligned-list-item"><strong>👀</strong> <span>Cliente olhando ao redor.</span></div>', '<div class="aligned-list-item"><strong>🛋️</strong> <span>Cliente parado.</span></div>', '<div class="aligned-list-item"><strong>🗣️</strong> <span>Cliente em resenha.</span></div>'] },
                    { isError: true, title: "❌ ERROS DO VENDEDOR (CLIENTE OLHEIRO)", items: ['<div class="aligned-list-item"><strong>🚫</strong> <span>Abordar instantaneamente sem observar.</span></div>', '<div class="aligned-list-item"><strong>🚫</strong> <span>Interromper o cliente quando ele não quer.</span></div>', '<div class="aligned-list-item"><strong>👨‍👩‍👧‍👦</strong> <span>Tentar vender para cliente ou grupo fechado em ação.</span></div>'] }
                ],
                videoCategories: [{ title: "Adicional em Vídeo", videos: [{ label: "EXEMPLO DE COMO ATENDER", url: "https://drive.google.com/file/d/1nmAOR_S0mm8jWb5VchfBfp2Fo33kiRaq/preview", color: "#22c55e" }, { label: "EXEMPLO DE NÃO ATENDER", url: "https://drive.google.com/file/d/1lLK7Rl9aun4TBVSjbVVRYapQO4VOIZfc/preview", color: "#ef4444" }]}]
            },
            'defesa': {
                id: 'defesa', title: "Defesa na Venda", description: "Ganhe a atenção do cliente e inicie a conversa.", image: "defesa.jpg",
                sections: [
                    { isSectionTitle: true, title: "COMO ABORDAR (DEFESA)" },
                    { title: "🛡️ O Que é Defesa?", items: ["🤝 Defesa é criar conexão com o cliente para ganhar atenção e iniciar a conversa."], warning: "Sem conexão ➔ Sem atenção ➔ Sem venda." },
                    { title: "🎯 Objetivo da Defesa", items: ["🛑 Fazer o cliente parar.", "⏳ Ganhar alguns segundos de atenção.", "🗣️ Iniciar uma conversa natural."], footer: "💡 Aqui começa a venda de verdade." },
                    { title: "✅ O Que FAZER", items: ['<div class="aligned-list-item"><strong>👤</strong> <span>Falar como pessoa, não como vendedor.</span></div>', '<div class="aligned-list-item"><strong>❓</strong> <span>Usar perguntas para entender o cliente.</span></div>', '<div class="aligned-list-item"><strong>🌍</strong> <span>Entrar na realidade dele (faculdade, dinheiro, evolução).</span></div>', '<div class="aligned-list-item"><strong>🍃</strong> <span>Ser leve, direto e natural.</span></div>', '<div class="aligned-list-item"><strong>🤔</strong> <span>Criar curiosidade antes de vender.</span></div>'], footer: "💡 Primeiro conecta, depois vende." },
                    { title: "💬 Como Entrar (Exemplos)", items: ['<div class="aligned-list-item"><strong>🎓</strong> <span>“Tu já tá desenrolando bem na fac ou ainda tá travado?”</span></div>', '<div class="aligned-list-item"><strong>💰</strong> <span>“Tá conseguindo farmar bem aí ou tá lento ainda?”</span></div>', '<div class="aligned-list-item"><strong>💪</strong> <span>“Já tá forte ou ainda tá começando a crescer?”</span></div>'], footer: "💡 Pergunta certa = Cliente fala." },
                    { isError: true, title: "❌ ERROS DO VENDEDOR (CLIENTE DEFESA)", items: ['<div class="aligned-list-item"><strong>🏃‍♂️</strong> <span>Chegar vendendo direto (“Quer VIP?”).</span></div>', '<div class="aligned-list-item"><strong>🤖</strong> <span>Parecer robô ou script decorado.</span></div>', '<div class="aligned-list-item"><strong>🛑</strong> <span>Interromper o cliente em um momento errado.</span></div>', '<div class="aligned-list-item"><strong>🤐</strong> <span>Falar demais e não ouvir.</span></div>', '<div class="aligned-list-item"><strong>🙈</strong> <span>Ignorar o que o cliente respondeu.</span></div>', '<div class="aligned-list-item"><strong>🔨</strong> <span>Forçar a venda sem entender a necessidade.</span></div>'], warning: "Isso quebra a atenção na hora." }
                ],
                videoCategories: [
                    { title: "Exemplos Certos", videos: [{ label: "EXEMPLO CERTO 01", url: "https://drive.google.com/file/d/16DNLlk8XN2rmbYNOw5TqA2keAOmd4gT1/preview", color: "#22c55e" }, { label: "EXEMPLO CERTO 02", url: "https://drive.google.com/file/d/1d41ADDiFX5ECsdtdTFsVyTsc25E8FAzC/preview", color: "#22c55e" }]},
                    { title: "Exemplos Errados", videos: [{ label: "EXEMPLO ERRADO 01", url: "https://drive.google.com/file/d/1_wNaLwQWRViDm4-GBs-zs_8o2RaNVblm/preview", color: "#ef4444" }, { label: "EXEMPLO ERRADO 02", url: "https://drive.google.com/file/d/1JSk9M-WcYazSJhD6Jz_KZWe2jlxmB9tw/preview", color: "#ef4444" }]}
                ]
            },
            'meio': {
                id: 'meio', title: "Meio de Campo", description: "Entender a necessidade do cliente através de perguntas chaves.", image: "meio-campo.jpg",
                sections: [
                    { isSectionTitle: true, title: "COMO ABORDAR (MEIO DE CAMPO)" },
                    { title: "🎯 Objetivo Meio de Campo", items: ['<div class="aligned-list-item"><strong>🗣️</strong> <span>Conduzir o cliente fazendo perguntas chaves.</span></div>', '<div class="aligned-list-item"><strong>🧠</strong> <span>Entender o que oferecer para o cliente.</span></div>', '<div class="aligned-list-item"><strong>🤝</strong> <span>Conectar com a realidade dele.</span></div>', '<div class="aligned-list-item"><strong>📦</strong> <span>Preparar para oferecer.</span></div>'] },
                    { title: "🔍 Indícios de Interesse", items: ['<div class="aligned-list-item"><strong>✅</strong> <span>Responde rápido.</span></div>', '<div class="aligned-list-item"><strong>🗣️</strong> <span>Fala mais que você.</span></div>', '<div class="aligned-list-item"><strong>❓</strong> <span>Faz perguntas.</span></div>', '<div class="aligned-list-item"><strong>📈</strong> <span>Engaja na conversa.</span></div>'] },
                    { title: "🎯 Foco da Conversa", items: ['<div class="aligned-list-item"><strong>🔥</strong> <span>Gerar interesse.</span></div>', '<div class="aligned-list-item"><strong>🛡️</strong> <span>Passar confiança.</span></div>', '<div class="aligned-list-item"><strong>🧭</strong> <span>Dar direção ao cliente.</span></div>', '---', '<div class="aligned-list-item"><strong>🚫</strong> <span>Não deixar o cliente desviar do assunto principal.</span></div>', '<div class="aligned-list-item"><strong>⏳</strong> <span>Não ficar apenas conversando sem intenção de venda.</span></div>', '<div class="aligned-list-item"><strong>🔗</strong> <span>Sempre conecte a conversa com a solução da venda.</span></div>'], warning: "Se o cliente dispersar ou você perder o foco, a venda esfria." },
                    { title: "📢 Sinais de Abertura (Ataque!)", items: ['<div class="aligned-list-item"><strong>💲</strong> <span>Pergunta o preço.</span></div>', '<div class="aligned-list-item"><strong>📦</strong> <span>Pede detalhes sobre o produto.</span></div>', '<div class="aligned-list-item"><strong>🛒</strong> <span>Pergunta o que você vende.</span></div>', '<div class="aligned-list-item"><strong>👤</strong> <span>Pergunta se você é vendedor.</span></div>'], footer: "🔥 Identificou isso? Pare de enrolar e comece o ATAQUE." },
                    { title: "⚠️ Ponto Mais Importante", items: ['<div class="aligned-list-item"><strong>👀</strong> <span>Identificar a abertura.</span></div>', '<div class="aligned-list-item"><strong>🎣</strong> <span>Encontrar a dor do cliente.</span></div>', '<div class="aligned-list-item"><strong>🗺️</strong> <span>Mostrar o caminho, falando de algum produto.</span></div>'], warning: "O maior erro do vendedor é não perceber quando já pode vender (o tempo certo)." },
                    { title: "🧠 Perguntas que Quebram o Padrão", items: ['<div class="aligned-list-item"><strong>🎓</strong> <span>“Tu já tá desenrolando bem na fac ou ainda tá travado?”</span></div>', '<div class="aligned-list-item"><strong>⛏️</strong> <span>“Já tá conseguindo farmar bem aí ou tá difícil evoluir?”</span></div>', '<div class="aligned-list-item"><strong>💸</strong> <span>“Já tá conseguindo fazer dinheiro ou tá lento ainda?”</span></div>'] },
                    { isError: true, title: "❌ ERROS DO VENDEDOR (CLIENTE MEIO)", items: ['<div class="aligned-list-item"><strong>🌪️</strong> <span>Perder o foco da conversa.</span></div>', '<div class="aligned-list-item"><strong>🔀</strong> <span>Deixar o cliente mudar totalmente o assunto.</span></div>', '<div class="aligned-list-item"><strong>🗣️</strong> <span>Responder tudo sem puxar de volta para o objetivo.</span></div>', '<div class="aligned-list-item"><strong>☕</strong> <span>Ficar só “batendo papo” sem avançar.</span></div>', '<div class="aligned-list-item"><strong>🔌</strong> <span>Não conectar a dor con a solução.</span></div>'], footer: "💡 <strong>Dor</strong> = O motivo emocional ou prático que faz o cliente querer comprar." }
                ],
                videoCategories: [{ title: "Exemplos na Prática", videos: [{ label: "EXEMPLO CERTO", url: "https://drive.google.com/file/d/1XkFB2k2B9SfmVVZMYzBXF3dotWcL8xeo/preview", color: "#22c55e" }, { label: "EXEMPLO ERRADO", url: "https://drive.google.com/file/d/1eW3zORlLH6M20KGBbKCQ1BSR1QWh5a10/preview", color: "#ef4444" }]}]
            },
            'ataque': {
                id: 'ataque', title: "Ataque na Venda", description: "Transforme a dor em solução e crie urgência para fechar.", image: "ataque.jpg",
                sections: [
                    { isSectionTitle: true, title: "COMO ABORDAR (ATAQUE)" },
                    { title: "🧠 Conceito: Dor, Desejo e Urgência", items: ["⚖️ Venda forte é o equilíbrio entre:", "<div style='text-align: left; font-weight: 800; color: #fff; margin: 5px 0;'>🎯 Dor + Desejo + Urgência</div>", "---", '<div class="aligned-list-item"><strong>🧊</strong> <span>Sem dor ➔ Não conecta.</span></div>', '<div class="aligned-list-item"><strong>😴</strong> <span>Sem desejo ➔ Não engaja.</span></div>', '<div class="aligned-list-item"><strong>🛑</strong> <span>Sem urgência ➔ Não fecha.</span></div>'] },
                    { title: "⚙️ Como Funciona na Prática", items: ['🔗 A venda acontece quando você conecta os três pilares:', '<div class="aligned-list-item"><strong>1️⃣</strong> <span>Faz ele sentir o problema (Dor).</span></div>', '<div class="aligned-list-item"><strong>2️⃣</strong> <span>Mostra o que ele pode ganhar (Desejo).</span></div>', '<div class="aligned-list-item"><strong>3️⃣</strong> <span>Dá um motivo para agir agora (Urgência).</span></div>']},
                    { title: "🚀 Exemplo Forte", items: ['<div class="aligned-list-item"><strong>🔥 Dor:</strong> <span>“Do jeito que você está, vai evoluir bem mais devagar.”</span></div>', '<div class="aligned-list-item"><strong>✨ Desejo:</strong> <span>“Com esse VIP, você entra em outro nível na cidade.”</span></div>', '<div class="aligned-list-item"><strong>⚡ Urgência:</strong> <span>“Pegando agora, você aproveita essa condição antes que acabe.”</span></div>']},
                    { title: "🔥 Dor (O Problema)", items: ["🤔 A dor não é inventar necessidade.", "🔍 Identificar ou despertar algo que já faz sentido para o cliente.", "🚫 Você não cria mentira. Você evidencia um incômodo, uma falta ou uma dificuldade.", "---", "🐢 Está evoluindo devagar.", "👻 Está sem destaque na cidade.", "🐌 Está ficando para trás.", "💸 Está gastando mais do que deveria."] },
                    { title: "✨ Desejo (O que ele quer conquistar)", items: ["🏆 Aqui é onde você ganha o cliente. Não basta mostrar o problema — você precisa mostrar o benefício.", "💭 Você faz ele imaginar o nível que ele pode alcançar e a vantagem sobre outros players.", "---", "🚀 Evoluir mais rápido.", "👑 Ter mais presença e respeito.", "🥇 Ter vantagem sobre outros players.", "🏰 Entrar já estruturado."] },
                    { title: "⚡ Urgência (O Gatilho)", items: ["⏳ Sem urgência, não tem fechamento. O cliente até quer… mas deixa para depois.", "⏰ Você cria um motivo para ele agir agora (condição limitada ou oportunidade).", "---", "🏃‍♂️ “Essa condição é só agora.”", "📈 “Depois você vai pagar mais caro.”", "🏁 “Quem pega agora sai na frente.”"] },
                    { isError: true, title: "❌ ERROS DO VENDEDOR (CLIENTE ATAQUE)", items: ['<div class="aligned-list-item"><strong>🎯 Focar demais na dor:</strong> <span>Pode parecer pressão exagerada.</span></div>', '<div class="aligned-list-item"><strong>🧩 Desejo genérico:</strong> <span>“Vantagem” sem contexto real.</span></div>', '<div class="aligned-list-item"><strong>⏱️ Urgência forçada:</strong> <span>Mentir sobre prazo quebra a confiança.</span></div>', '<div class="aligned-list-item"><strong>🤖 Sequência robótica:</strong> <span>Ficar só no script sem ouvir o cliente.</span></div>', '<div class="aligned-list-item"><strong>👥 Não adaptar ao cliente:</strong> <span>Usar o mesmo discurso para todo mundo diminui a sua conversão.</span></div>'] }
                ]
            },
            'fechamento': {
                id: 'fechamento', title: "Fechamento", description: "Fechamento conduz valor, quebra dúvida e transforma interesse em decisão.", image: "fechamento.jpg",
                sections: [
                    { isSectionTitle: true, title: "💰 FECHAMENTO DE VENDA — FORTE" },
                    { title: "🧠 Estrutura Mental do Fechamento", items: [
                        '<div class="aligned-list-item"><strong>👉</strong> <span>Primeiro você <strong>reforça valor</strong></span></div>',
                        '<div class="aligned-list-item"><strong>👉</strong> <span>Depois <strong>ancora preço</strong></span></div>',
                        '<div class="aligned-list-item"><strong>👉</strong> <span>Depois <strong>quebra objeção</strong> com pagamento</span></div>',
                        '<div class="aligned-list-item"><strong>👉</strong> <span>Finaliza com <strong>urgência</strong></span></div>',
                        '---',
                        '<div style="color: #fff; font-weight: 800;">💡 Dica: Ancoragem = fazer o cliente sentir que o produto vale muito, antes de ver o preço!</div>'
                    ]},
                    { title: '💸 Ancoragem', items: [
                        '“Se você fosse pegar tudo separado, passaria fácil de R$XXX…”',
                        '“Mas nesse formato aqui, você já resolve tudo de uma vez e economiza.”',
                        '---',
                        '<div style="color: #fff; font-weight: 800;">👉 Aqui você cria percepção de vantagem</div>'
                    ]},
                    { title: '💳 Quebra de Objeção (Pagamento)', items: [
                        '“E o melhor, nem precisa <strong>pensar</strong> agora…”',
                        '“Você pode fazer no <strong>Pix</strong>, ou dividir no <strong>cartão de crédito</strong>.”',
                        '“Se for internacional, dá pra pagar tranquilo pelo <strong>Revolut</strong> ou <strong>Wise</strong> também.”'
                    ]},
                    { title: '⏰ Urgência (Fechamento Final)', items: [
                        '“E sendo bem direto contigo, essa condição que eu te passei é só agora.”',
                        '“Se deixar pra depois, você provavelmente vai pagar mais caro ou perder esse pacote.”'
                    ]},
                    { isFull: true, title: '🎯 Fechamento Direto (Matador)', items: [
                        '“Se fizer sentido pra você, já posso te mandar o Pix ou o link do cartão agora e deixar isso tudo ativo pra você hoje mesmo.”'
                    ]},
                    { isFull: true, title: '⚔️ Versão Mais Agressiva', items: [
                        '<div style="color:#ccc; font-size:0.95rem; margin-bottom: 12px;">(Usar quando o cliente já quer)</div>',
                        '“Sendo sincero contigo — isso aqui não é gasto, é você evitar gastar depois.”',
                        '“Quem pega isso agora já sai na frente, quem deixa pra depois sempre paga mais.”',
                        '“Quer fazer no Pix ou prefere parcelar no cartão?”',
                        '---',
                        '<div style="color: #fff; font-weight: 800;">💡 Dica: Nunca fale obrigado após uma venda, fale parabéns!</div>'
                    ]},
                    { isError: true, title: '❌ ERROS DO VENDEDOR (CLIENTE FECHAMENTO)', items: [
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Ficar explicando demais.</span></div>',
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não pedir o pagamento.</span></div>',
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não criar urgência.</span></div>',
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Esperar o cliente decidir sozinho.</span></div>',
                        '---',
                        '<div style="color: #fff; font-weight: 800;">👉 Sempre termina com pergunta de decisão, nunca aberta.</div>'
                    ]}
                ]
            },
            'posvenda': {
                id: 'posvenda', title: "Pós Venda", description: "Pós venda bem feito transforma cliente em recorrência e indicação.", image: "pos_venda.jpg",
                sections: [
                    { isSectionTitle: true, title: "🧠 PÓS-VENDA — PADRÃO SG" },
                    { title: "1. CONFIRMAÇÃO (SEGURANÇA)", items: [
                        '📌 Garanta que ele sinta que fez uma boa decisão',
                        '✔️ “Já deixei tudo certo pra você.”',
                        '✔️ “Você já pode usar agora tranquilo.”',
                        '✔️ “Qualquer coisa me chama que te ajudo.”',
                        '---',
                        '➡️ Remove arrependimento | ➡️ Aumenta confiança | ➡️ Evita chargeback'
                    ]},
                    { title: "2. VALORIZAÇÃO (STATUS)", items: [
                        '📌 Faça ele sentir que subiu de nível',
                        '✔️ “Agora você já tá na frente de muita gente.”',
                        '✔️ “Pouca gente entra já assim estruturado.”',
                        '✔️ “Você fez uma escolha inteligente.”',
                        '---',
                        '➡️ Reforça decisão | ➡️ Cria orgulho | ➡️ Aumenta apego'
                    ]},
                    { title: "3. ATIVAÇÃO (USO)", items: [
                        '📌 Ensine ele a usar o que comprou',
                        '✔️ “Já usou o [benefício]?”',
                        '✔️ “Se fizer isso aqui, você aproveita melhor ainda.”',
                        '✔️ “Posso te mostrar como tirar mais vantagem.”',
                        '---',
                        '➡️ Valor percebido sobe | ➡️ Diminui desistência | ➡️ Aumenta satisfação'
                    ]},
                    { title: "4. ABERTURA (RELACIONAMENTO)", items: [
                        '📌 Deixe porta aberta pra continuidade',
                        '✔️ “Qualquer dúvida me chama.”',
                        '✔️ “Se quiser evoluir mais depois, te mostro opções.”',
                        '✔️ “Sempre solto coisa nova, te aviso.”',
                        '---',
                        '➡️ Cria vínculo | ➡️ Mantém contato ativo | ➡️ Prepara próxima venda'
                    ]},
                    { title: "5. RECOMPRA / UPSELL", items: [
                        '📌 Plante a próxima venda sem forçar',
                        '✔️ “Depois você pode evoluir ainda mais com…”',
                        '✔️ “Tem um upgrade que encaixa muito com isso que você pegou.”',
                        '✔️ “Quando quiser subir mais, já sei o que te indicar.”',
                        '---',
                        '➡️ Natural | ➡️ Sem pressão | ➡️ Direcionado'
                    ]},
                    { title: "6. INDICAÇÃO (ESCALA)", items: [
                        '📌 Transforme cliente em vendedor',
                        '✔️ “Se tiver algum amigo que quer começar bem, me chama.”',
                        '✔️ “Quem entra assim já sai na frente, igual você.”',
                        '✔️ “Se indicar alguém, depois te dou uma moral.”',
                        '---',
                        '➡️ Novos clientes | ➡️ Baixo custo | ➡️ Alta conversão'
                    ]},
                    { isError: true, title: "❌ ERROS NO PÓS-VENDA", items: [
                        '❌ Sumir depois da venda',
                        '❌ Não ensinar a usar',
                        '❌ Não reforçar decisão',
                        '❌ Não abrir espaço pra próxima venda',
                        '❌ Não pedir indicação'
                    ]}
                ]
            }
        };
        return database[categoryId] || null;
    }
};

const BusinessLogic = {
    state: { currentView: 'menu', currentCategoryId: null, currentProfileId: null, isMeioExpanded: false },
    navigateToMenu: () => { 
        BusinessLogic.state.currentView = 'menu'; 
        BusinessLogic.state.isMeioExpanded = false; 
        BusinessLogic.state.currentProfileId = null;
        BusinessLogic.state.currentCategoryId = null;
        Controller.render(); 
    },
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
            const categoryData = DataAccess.getCategoryContent(BusinessLogic.state.currentCategoryId);
            const profiles = DataAccess.getProfiles();
            const data = BusinessLogic.state.currentProfileId ? profiles[BusinessLogic.state.currentProfileId] : categoryData;
            root.innerHTML = Controller.templates.category(data);
        }
    },

    templates: {
        menu: () => `
            <div class="overlay"></div>
            <style>
                body { overflow: hidden; }
                .funnelContainer { height: 100vh; display: flex; flex-direction: column; justify-content: center; padding: 2vh 0; gap: 8px; }
                .funnelStep { flex: 1; max-height: 15vh; cursor: pointer; transition: 0.3s; }
                .funnelStep:hover { transform: scale(1.01); filter: brightness(1.2); }
                .funnelStepTitle { font-size: 1.15rem !important; }
                .funnelStepDesc { font-size: 0.95rem !important; line-height: 1.45; }
            </style>
            <div class="funnelContainer">
                ${DataAccess.getCategories().map(cat => `
                    <div class="funnelStep step${cat.id.charAt(0).toUpperCase() + cat.id.slice(1)}" onclick="BusinessLogic.navigateToCategory('${cat.id}')">
                        <span class="funnelStepTitle">${cat.title}</span>
                        <span class="funnelStepDesc">${cat.desc}</span>
                    </div>
                `).join('')}
            </div>`,

        category: (data) => {
            const profiles = DataAccess.getProfiles();
            return `
                <div class="overlay"></div>
                <style>
                    .layoutContainer { max-width: 100% !important; display: flex; height: 100vh; overflow: hidden; }
                    .sidebarNavigation { width: 280px !important; flex-shrink: 0; display: flex; flex-direction: column; border-right: 1px solid rgba(255,255,255,0.05); background: #000; overflow-y: auto; }
                    .mainWorkspace { padding: 2rem 5% !important; flex-grow: 1; max-width: calc(100vw - 280px); overflow-y: auto; text-align: left; }
                    
                    .headerContainer { display: flex; align-items: center; justify-content: space-between; gap: 2.5rem; margin-bottom: 3rem; }
                    .headerTextContent { text-align: left; flex: 1; }
                    .pageTitle { font-size: 2rem !important; margin-bottom: 0.6rem; text-align: left; font-weight: 800; color: #fff; }
                    .pageDescription { font-size: 1.05rem !important; line-height: 1.5; text-align: left; color: #ccc; }
                    
                    .headerImageContainer { flex-shrink: 0; border: 1px solid var(--accent-gold); padding: 6px; border-radius: 12px; background: rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; }
                    .headerImageContainer img { max-width: 320px; height: auto; border-radius: 8px; display: block; }

                    .contentGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.8rem; width: 100%; align-items: stretch; }
                    .infoCard { background: #111; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); padding: 1.5rem; }
                    .infoCard h2 { font-size: 1.3rem !important; color: #fff; margin-bottom: 1rem; font-weight: 800; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px; }
                    
                    .cardSpanFull { grid-column: 1 / -1; }
                    .topHeadingFree { grid-column: 1 / -1; text-align: center; font-size: 1.5rem; color: #fff; font-weight: 900; margin: 2rem 0; text-transform: uppercase; letter-spacing: 1px; }
                    
                    .dataList { display: block; width: 100%; list-style: none; padding: 0; }
                    .dataList div { font-size: 1rem !important; line-height: 1.6; text-align: left; }

                    .aligned-list-item { display: flex; align-items: flex-start; gap: 12px; width: 100%; margin-bottom: 8px; font-size: 1.05rem; }
                    .aligned-list-item strong { flex-shrink: 0; color: var(--accent-gold); }
                    .aligned-list-item span { flex-grow: 1; text-align: left; }

                    .navItem { font-size: 1.05rem !important; white-space: nowrap; padding: 1.1rem 1.4rem !important; font-weight: 700; border-bottom: 1px solid rgba(255,255,255,0.05); cursor: pointer; transition: all 0.3s; color: #888; }
                    .navItem:hover { background: rgba(212,175,55,0.05); color: #fff; }
                    .navItemActive { color: var(--accent-gold) !important; background: rgba(212,175,55,0.1) !important; border-left: 4px solid var(--accent-gold); }
                    .navSubItemActive { color: var(--accent-gold) !important; background: rgba(212,175,55,0.1) !important; font-weight: 900 !important; border-left: 4px solid var(--accent-gold); }

                    .listDivider { margin: 15px 0; border-bottom: 1px solid rgba(255,255,255,0.1); width: 100%; }
                    .sectionTitle { text-align: center; color: #fff; text-transform: uppercase; margin-bottom: 2rem; font-weight: 900; }
                    .comicContainer { margin-top: 2rem; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); }
                    .comicContainer img { width: 100%; height: auto; display: block; }
                </style>
                <div class="layoutContainer">
                    <aside class="sidebarNavigation">
                        <div>
                            <button class="backButton" onclick="BusinessLogic.navigateToMenu()" style="margin: 1.5rem 1rem;">⬅ Menu Inicial</button>
                            <nav class="navigationMenu">
                                ${DataAccess.getCategories().map(cat => {
                                    const isMeio = cat.id === 'meio';
                                    const isActive = BusinessLogic.state.currentCategoryId === cat.id;
                                    const isProfileSelected = BusinessLogic.state.currentProfileId !== null;
                                    return `
                                        <div class="navItem ${isActive && !isProfileSelected ? 'navItemActive' : ''}" onclick="${isMeio ? 'BusinessLogic.toggleMeio(event)' : `BusinessLogic.navigateToCategory('${cat.id}')`}">
                                            ${cat.title} ${isMeio ? (BusinessLogic.state.isMeioExpanded ? '▾' : '▸') : ''}
                                        </div>
                                        ${isMeio && BusinessLogic.state.isMeioExpanded ? `
                                            <div style="background: #080808;">
                                                ${Object.values(profiles).map(p => `
                                                    <div class="navItem ${BusinessLogic.state.currentProfileId === p.id ? 'navSubItemActive' : ''}" 
                                                         style="padding-left: 2.5rem !important; border-bottom: none;" 
                                                         onclick="BusinessLogic.navigateToProfile('${p.id}')">👤 ${p.shortTitle}</div>
                                                `).join('')}
                                            </div>` : ''}
                                    `;
                                }).join('')}
                            </nav>
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
                                if (s.isRecommendationHeader) return `<div class="cardSpanFull" style="margin-top: 1rem;"><h2 style="font-size: 1.4rem; color: #fff; text-align: left; width: 100%; font-weight: 800;">${s.title}</h2></div>`;
                                
                                if (s.isComic) {
                                    return `
                                        <div class="cardSpanFull comicContainer">
                                            <img src="${s.image}" alt="Comic Strategy">
                                        </div>
                                    `;
                                }

                                let extraClass = s.isFull || s.isError ? "cardSpanFull" : "";

                                return `
                                <section class="infoCard ${extraClass} ${s.isError ? 'errorCard' : ''}">
                                    <h2>${s.title}</h2>
                                    <div class="dataList">
                                        ${s.items ? s.items.map(i => i === '---' ? `<div class="listDivider"></div>` : `<div class="aligned-list-item">${i}</div>`).join('') : ''}
                                    </div>
                                    ${s.warning ? `<div class="warningBox" style="margin-top:10px; color:#ff4444; font-size:0.9rem;">⚠️ ${s.warning}</div>` : ''}
                                    ${s.footer ? `<div class="hintBox" style="margin-top:15px; padding:10px; background:rgba(212,175,55,0.1); border-radius:6px; font-size:0.95rem;">${s.footer}</div>` : ''}
                                </section>
                                `;
                            }).join('')}
                        </div>
                        ${data.videoCategories ? data.videoCategories.map(cat => `
                            <section class="videoSection" style="margin-top: 4rem;">
                                <h1 class="sectionTitle" style="font-size: 1.5rem; font-weight: 900; text-align: center; margin-bottom: 2rem; color: #fff; text-transform: uppercase;">${cat.title}</h1>
                                <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
                                    ${cat.videos.map(v => `<div style="background:#111; padding:1rem; border-radius:12px; border:1px solid rgba(255,255,255,0.05);"><h3 style="color:${v.color}; font-size:0.9rem; margin-bottom:10px; font-weight:800; text-align:center;">${v.label}</h3><div style="position:relative; padding-bottom:56.25%; height:0; border-radius:8px; overflow:hidden;"><iframe src="${v.url}" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;" allow="autoplay"></iframe></div></div>`).join('')}
                                </div>
                            </section>`).join('') : ''}
                    </main>
                </div>`;
        },
        fallback: () => `<div class="overlay"></div><div style="padding:5rem; text-align:center;"><h1>Conteúdo em construção...</h1><button class="backButton" onclick="BusinessLogic.navigateToMenu()">Voltar ao Funil</button></div>`
    }
};

document.addEventListener('DOMContentLoaded', Controller.render);