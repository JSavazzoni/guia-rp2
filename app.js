const DataAccess = {
    getProfiles: () => ({
        'lider': {
            id: 'lider',
            shortTitle: 'Líder (Facção) 👑',
            title: 'Cliente Líder (Facção) 👑',
            description: 'Essa etapa ensina como abordar um líder de facção e fazer ele desejar crescer, dominar e construir uma facção grande e respeitada.',
            image: 'AssetStore/dono de faccao.jpg',
            sections: [
                { isSectionTitle: true, title: 'COMO ABORDAR (LÍDER DE FACÇÃO)' },
                { isFull: true, title: '🎯 Abordagem Estratégica & Foco', items: [
                    '<strong style="color: #ef4444; display: block; margin-bottom: 4px;">🔥 GERAR DOR:</strong>',
                    '“E aí mano, como que tá tua fac hoje?”', 
                    '“Quantos membros estão pegando ativos aí à noite? Tu quer crescer mais ainda ou tá suave como tá?”', 
                    '“O que mais tá pegando hoje? Fac tá com muito farm aí? Tem bastante grana? Tá ganhando os eventos?”',
                    '---',
                    '<strong style="color: #22c55e; display: block; margin-bottom: 4px;">✨ GERAR DESEJO:</strong>',
                    '“Mano, facção grande não cresce só na bala... Tem que ter estrutura aqui para as pessoas quererem ficar.”', 
                    '“Quanto mais tu fortalece tua fac, mais gente cola, mais resultado vem.”', 
                    '“Fac forte é fac organizada e com incentivo para os membros.”', 
                    '---', 
                    '<span style="font-size: 1.35rem; display: block; margin: 12px 0; color: #fff; font-weight: 800; text-align: left;">🛍️ O QUE VOCÊ ESTÁ VENDENDO DE VERDADE:</span>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>📈 Crescimento real da facção.</span></div>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>💪 Poder, respeito e influência.</span></div>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>🔥 Motivação e retenção dos membros.</span></div>',
                    '---',
                    '<div style="text-align: left; color: #fff; font-weight: 800;">🏆 Ele não quer item — ele quer uma facção dominante.</div>'
                ], footer: '<strong>💡 Dica:</strong> Qual está sendo a dificuldade da fac hoje? A fac já está com os farms? Tem bastante grana no painel? Tá ganhando os eventos?' },
                { isFull: true, isRecommendationHeader: true, title: '🛒 Recomendações de Produtos', items: [] },
                { title: '🏰 VIP Facção Premium', items: [
                    '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Mais carros, baú extra e log de baú.</span></div>', 
                    '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Mais controle para o líder.</span></div>', 
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
                { isFull: true, title: '🎭 Identidade Visual', items: [
                    '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Personalização: Uniforme e nome da facção.</span></div>', 
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
                { isComic: true, title: '⚽ ESTRATÉGIA DE ABORDAGEM: CERTO vs ERRADO', image: 'AssetStore/quadrinho_lider.jpg' }
            ]
        },
        'novato': {
            id: 'novato',
            shortTitle: 'Novato (Iniciante) 🔰',
            title: 'Cliente Novato (Iniciante) 🔰',
            description: 'Essa etapa ensina como abordar um novato e fazer ele desejar ser reconhecido, crescer, dominar e construir uma reputação respeitada na cidade.',
            image: 'AssetStore/novato.jpg',
            sections: [
                { isSectionTitle: true, title: 'COMO ABORDAR (NOVATO)' },
                { isFull: true, title: '🎯 Abordagem Estratégica & Foco', items: [
                    '“Qual teu nome mano?”, “Como é que tu conheceu a cidade?”', 
                    '---',
                    '“Já jogava RP antes ou é tua primeira vez?”', 
                    '---',
                    '“Tu prefere ir evoluindo na raça ou curte já dar uma acelerada?”', 
                    '---',
                    '“O que tu quer virar aqui na cidade?”',
                    '---',
                    '“Mano, no começo da cidade quem começa já com vantagem cresce MUITO mais rápido...”', 
                    '---',
                    '“Se tu já entra estruturado, tu sai na frente de geral.”', 
                    '---', 
                    '<span style="font-size: 1.35rem; display: block; margin: 12px 0; color: #fff; font-weight: 800; text-align: left;">🛍️ O QUE VOCÊ ESTÁ VENDENDO DE VERDADE:</span>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>🚀 Evolução rápida.</span></div>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>⚡ Vantagem inicial.</span></div>', 
                    '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>😌 Facilidade (menos dor de cabeça).</span></div>'
                ]},
                { isFull: true, isRecommendationHeader: true, title: '🛒 Recomendações de Produtos', items: [] },
                { title: '🥇 VIP OURO', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Foco principal de evolução acelerada.</span></div>']},
                { title: '🚀 VIP LANÇAMENTO', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Exclusividade e benefícios iniciais.</span></div>']},
                { title: '🚗 VEÍCULOS START', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Perfeito para a entrada com estilo.</span></div>']},
                { title: '🎟️ SANTAPASS', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Recompensas e itens únicos de temporada.</span></div>']},
                { isFull: true, title: '🎵 SANTAFY', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Garante uma experiência melhor na cidade.</span></div>']},
                { isError: true, title: '❌ ERROS DO VENDEDOR (CLIENTE INICIANTE)', items: [
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Não entender que ele é iniciante.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Não criar conexão.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Não investigar o nível dele.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Não ativar a dor (tá perdido/lento).</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Falar só de item.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Não direcionar o próximo passo.</span></div>'
                ]},
                { isComic: true, title: '⚽ ESTRATÉGIA DE ABORDAGEM: CERTO vs ERRADO', image: 'AssetStore/quadrinho_novato.jpg' }
            ]
        },
        'policial': {
            id: 'policial',
            shortTitle: 'Policial (PVP / RP) 🚓',
            title: 'Cliente Policial (PVP / RP) 🚓',
            description: 'Essa etapa ensina como abordar um policial e fazer ele desejar crescer de patente na corporação, construir uma reputação e ser respeitado na cidade.',
            image: 'AssetStore/policial.jpg',
            sections: [
                { isSectionTitle: true, title: 'COMO ABORDAR (POLICIAL)' },
                { isFull: true, title: '🎯 Abordagem Estratégica & Foco', items: [
                    '“Tá há quanto tempo na polícia? Tá curtindo a experiência aqui?”', 
                    '---',
                    '“Você participa bastante de ação? Trocação com bandido?”', 
                    '---',
                    '“Ou você é mais de RP? Fica mais na DP, treinamento?”',
                    '---',
                    '“Mano, tendo VIP tu acaba ganhando muita moral... A galera sempre pede carro emprestado.”', 
                    '---',
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
                ], footer: '<strong>💡 Dica:</strong> ➡️ Ideal para quem quer crescer de patente, construir reputação e ser respeitado no RP' },
                { title: '🔫 PERFIL: POLICIAL PvP', items: [
                    '<div style="margin-bottom: 12px; color: #ccc; font-size: 0.95rem;">Focado em combate, desempenho e superioridade nas ações.</div>',
                    '<div class="aligned-list-item"><strong class="checkIcon">⚡</strong> <span><strong>VIP PvP:</strong> vantagem direta em combate</span></div>',
                    '<div class="aligned-list-item"><strong class="checkIcon">👑</strong> <span><strong>VIP Platinum:</strong> pacote mais completo e forte</span></div>',
                    '<div class="aligned-list-item"><strong class="checkIcon">👕</strong> <span><strong>Peça de Roupa Exclusiva:</strong> identidade visual e destaque</span></div>'
                ], footer: '<strong>💡 Dica:</strong> ➡️ Ideal para dominar ações, ter desempenho alto e impor respeito no PvP' },
                { isError: true, title: '❌ ERROS DO VENDEDOR (CLIENTE POLICIAL)', items: [
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Não entender se ele é focado em PVP ou RP.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Ignorar o tempo de corporação e o cargo dele.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Não oferecer utilidade para a rotina dele.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Não ativar o gatilho de status perante os colegas.</span></div>', 
                    '<div class="aligned-list-item"><strong>🚫</strong> <span>Focar só em preço e não em moral/destaque.</span></div>'
                ]},
                { isComic: true, title: '⚽ ESTRATÉGIA DE ABORDAGEM: CERTO vs ERRADO', image: 'AssetStore/quadrinho_policial.jpg' }
            ]
        },
        'medico': {
            id: 'medico',
            shortTitle: 'Médico (RP) 👨‍⚕️',
            title: 'Cliente Médico (RP) 👨‍⚕️',
            description: 'Essa etapa ensina como abordar um médico e fazer ele desejar crescer na hierarquia do hospital, ter status social e respeito na cidade.',
            image: 'AssetStore/medico.jpg',
            sections: [
                { isSectionTitle: true, title: 'COMO ABORDAR (MÉDICO)' },
                { isFull: true, title: '🎯 Abordagem Estratégica & Foco', items: [
                    '“Hoje tua equipe tá mais organizada ou ainda tá meio na correria?”', 
                    '---',
                    '“Tu quer crescer mais agora ou tá mais focado em manter?”', 
                    '---',
                    '“O que mais tá te dando dor de cabeça hoje aí na clínica?”',
                    '---',
                    '“Resultados extraordinários vêm de estrutura, pessoas e processos.”', 
                    '---',
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
                { isComic: true, title: '⚽ ESTRATÉGIA DE ABORDAGEM: CERTO vs ERRADO', image: 'AssetStore/quadrinho_medico.jpg' }
            ]
        },
        'staff': {
            id: 'staff',
            shortTitle: 'STAFF (400H+) 🛡️',
            title: 'Cliente STAFF ou (400H+) 🛡️',
            description: 'Essa etapa ensina como abordar um staff e fazer ele querer subir na hierarquia, ter voz dentro da equipe e ser reconhecido como referência na cidade.',
            image: 'AssetStore/staff.jpg',
            sections: [
                { isSectionTitle: true, title: 'COMO ABORDAR (STAFF)' },
                { isFull: true, title: '🎯 Abordagem Estratégica & Foco', items: [
                    '“E aí mano, tu já tá há mó cota aqui na cidade né?”', 
                    '---',
                    '“Já tem tua galera aí? Já tá estruturado?”', 
                    '---',
                    '“Mas a galera te reconhece fácil? Tipo, só de bater o olho já sabem que é você?”',
                    '---',
                    '“Mano, tu já tem muita história na cidade... O certo era tu já ter uma identidade forte aqui dentro.”', 
                    '---',
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
                { isComic: true, title: '⚽ ESTRATÉGIA DE ABORDAGEM: CERTO vs ERRADO', image: 'AssetStore/quadrinho_staff.jpg' }
            ]
        }
    }),

    getCategories: () => [
        { id: 'olheiro', title: '🕵️‍♂️ Olheiro', desc: 'Observe o player e entenda o melhor momento.' },
        { id: 'defesa', title: '🛡️ Defesa', desc: 'Ganhe a atenção do cliente e inicie a conversa.' },
        { id: 'meio', title: '⚽ Meio de Campo', desc: 'Entenda a necessidade através de perguntas-chave.' },
        { id: 'ataque', title: '⚔️ Ataque', desc: 'Transforme a dor em solução e crie urgência.' },
        { id: 'fechamento', title: '🤝 Fechamento', desc: 'Fechamento conduz valor, quebra dúvida e transforma interesse em decisão.' },
        { id: 'posvenda', title: '📦 Pós Venda', desc: 'Pós-venda bem feito transforma cliente em recorrência e indicação.' }
    ],

    getCategoryContent: (categoryId) => {
        const database = {
            'olheiro': {
                id: 'olheiro', title: "Olheiro", description: "Observe o player, veja o que ele está fazendo, o assunto e se é o momento certo.", image: "AssetStore/gemini.jpg",
                sections: [
                    { isSectionTitle: true, title: "COMO ABORDAR (OLHEIRO)" },
                    { title: "🎯 Objetivo do Olheiro", items: ['<div class="aligned-list-item"><strong>🗣️</strong> <span>O cliente está disponível para conversar?</span></div>', '<div class="aligned-list-item"><strong>🧠</strong> <span>Você vai conseguir a atenção dele?</span></div>', '<div class="aligned-list-item"><strong>💰</strong> <span>Existe oportunidade de venda naquele momento?</span></div>'] },
                    { title: "⏱️ Tempo de Observação", items: ["⏳ Mínimo: 2 minutos.", "⏰ Ideal: 3 a 5 minutos."], warning: "Abordar no momento errado fará você perder tempo." },
                    { title: "🚶‍♂️ Comportamento do Cliente", items: ['<div class="aligned-list-item"><strong>🗺️</strong> <span>Está perdido?</span></div>', '<div class="aligned-list-item"><strong>👣</strong> <span>Está andando sem rumo?</span></div>', '<div class="aligned-list-item"><strong>🛠️</strong> <span>Está testando mecânicas?</span></div>', '<div class="aligned-list-item"><strong>🧍‍♂️</strong> <span>Está parado?</span></div>', '<div class="aligned-list-item"><strong>🗣️</strong> <span>Está em resenha aberta.</span></div>'], footer: "<strong>💡 Dica:</strong> Normalmente, clientes em momento tranquilo têm mais chance de dar atenção." },
                    { title: "✅ Sinais de Abertura", items: [
                        '<div class="aligned-list-item"><strong>👤</strong> <span>Cliente sozinho.</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>🧭</strong> <span>Cliente perdido / sem direção.</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>👀</strong> <span>Cliente olhando ao redor.</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>🛋️</strong> <span>Cliente parado descansando.</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>🗣️</strong> <span>Cliente em resenha tranquila.</span></div>'
                    ] },
                    { isError: true, title: "❌ ERROS DO VENDEDOR (CLIENTE OLHEIRO)", items: [
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não respeitar o tempo de observação (pular etapa).</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não identificar se o cliente tem potencial real.</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não perceber que o cliente está testando mecânica / aprendendo.</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Abordar sem ter um próximo passo pensado.</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Ficar “rodando” sem agir mesmo vendo oportunidade clara.</span></div>',
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Perder timing (chegar tarde demais).</span></div>'
                    ] }
                ],
                videoCategories: [{ title: "Adicional em Vídeo", videos: [{ label: "EXEMPLO ERRADO", url: "https://drive.google.com/file/d/1Nah9sTp9CfUqEUTqGg_6vm-dxyNFaSX5/preview", color: "#ef4444" }, { label: "EXEMPLO CERTO", url: "https://drive.google.com/file/d/1nmAOR_S0mm8jWb5VchfBfp2Fo33kiRaq/preview", color: "#22c55e" }]}]
            },
            'defesa': {
                id: 'defesa', title: "Defesa na Venda", description: "Ganhe a atenção do cliente e inicie a conversa.", image: "AssetStore/defesa.jpg",
                sections: [
                    { isSectionTitle: true, title: "PREPARAÇÃO DA DEFESA" },
                    { isPreparation: true, title: '👤 PREPARAÇÃO DO PERSONAGEM', image: 'AssetStore/foto_2.jpg',
                      goal: 'É fazer você se destacar entre os players ao redor e parecer ser um cara experiente na cidade. Todos se importam com a opinião de quem é foda!',
                      actions: ['Personagem bem vestido / estiloso.', 'Usar itens que chamem atenção:', '• Carros exclusivos.', '• Armas diferenciadas.', '• Pets raros (ex.: tigre).', 'Mostrar que é um jogador relevante na cidade.'],
                      result: 'O cliente percebe que você não é um jogador comum, aumentando interesse e respeito.'
                    },
                    { isSectionTitle: true, title: "COMO ABORDAR (DEFESA)" },
                    { title: "🛡️ O Que é Defesa?", items: [
                        "🤝 Defesa é criar conexão com o cliente para ganhar atenção e iniciar a conversa.",
                        "---"
                    ], warning: "Sem conexão ➔ Sem atenção ➔ Sem venda." },
                    { title: "🎯 Objetivo da Defesa", items: [
                        "🛑 Fazer o cliente parar através de alguma ação ou fala.", 
                        "---",
                        "⏳ Ganhar alguns segundos de atenção.", 
                        "---",
                        "🗣️ Iniciar uma conversa natural."
                    ], footer: "<strong>💡 Dica:</strong> Aqui começa a venda de verdade." },
                    { title: "✅ O Que FAZER", items: [
                        '<div class="aligned-list-item"><strong>👤</strong> <span>Falar como pessoa, não como vendedor.</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>❓</strong> <span>Usar perguntas para entender o cliente.</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>🦎</strong> <span>Usar efeito camaleão (polícia, médico, facção).</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>🍃</strong> <span>Ser leve, direto e natural.</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>🤔</strong> <span>Criar curiosidade antes de vender.</span></div>'
                    ], footer: "<strong>💡 Dica:</strong> O efeito camaleão é a capacidade de você se adaptar ao ambiente e ao perfil do cliente, falando a mesma “língua” que ele fala." },
                    { title: "💬 Como Entrar (Exemplos)", items: [
                        '<div class="aligned-list-item"><strong>👋</strong> <span>“Fala irmão, tranquilo? Sou o ...”</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>❓</strong> <span>“Qual teu nome?”</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>👀</strong> <span>“Vi você agora… curti teu estilo.”</span></div>'
                    ] },
                    { isError: true, title: "❌ ERROS DO VENDEDOR (CLIENTE DEFESA)", items: ['<div class="aligned-list-item"><strong>🏃‍♂️</strong> <span>Chegar vendendo direto (“Quer VIP?”).</span></div>', '<div class="aligned-list-item"><strong>🤖</strong> <span>Parecer robô ou script decorado.</span></div>', '<div class="aligned-list-item"><strong>🛑</strong> <span>Interromper o cliente em um momento errado.</span></div>', '<div class="aligned-list-item"><strong>🤐</strong> <span>Falar demais e não ouvir.</span></div>', '<div class="aligned-list-item"><strong>🙈</strong> <span>Ignorar o que o cliente respondeu.</span></div>', '<div class="aligned-list-item"><strong>🔨</strong> <span>Forçar a venda sem entender a necessidade.</span></div>'], warning: "Isso quebra a atenção na hora." }
                ],
                videoCategories: [
                    { title: "Exemplos Certos", videos: [{ label: "EXEMPLO CERTO 01", url: "https://drive.google.com/file/d/16DNLlk8XN2rmbYNOw5TqA2keAOmd4gT1/preview", color: "#22c55e" }, { label: "EXEMPLO CERTO 02", url: "https://drive.google.com/file/d/1d41ADDiFX5ECsdtdTFsVyTsc25E8FAzC/preview", color: "#22c55e" }]},
                    { title: "Exemplos Errados", videos: [{ label: "EXEMPLO ERRADO 01", url: "https://drive.google.com/file/d/1_wNaLwQWRViDm4-GBs-zs_8o2RaNVblm/preview", color: "#ef4444" }, { label: "EXEMPLO ERRADO 02", url: "https://drive.google.com/file/d/1JSk9M-WcYazSJhD6Jz_KZWe2jlxmB9tw/preview", color: "#ef4444" }]}
                ]
            },
            'meio': {
                id: 'meio', title: "Meio de Campo", description: "Entender a necessidade do cliente através de perguntas-chave.", image: "AssetStore/meio-campo.jpg",
                sections: [
                    { isSectionTitle: true, title: "COMO ABORDAR (MEIO DE CAMPO)" },
                    { title: "🎯 Objetivo Meio de Campo", items: ['<div class="aligned-list-item"><strong>🗣️</strong> <span>Conduzir o cliente fazendo perguntas-chave.</span></div>', '<div class="aligned-list-item"><strong>🧠</strong> <span>Entender o que oferecer para o cliente.</span></div>', '<div class="aligned-list-item"><strong>🤝</strong> <span>Conectar com a realidade dele.</span></div>', '<div class="aligned-list-item"><strong>📦</strong> <span>Preparar para oferecer.</span></div>'] },
                    { title: "🔍 Indícios de Interesse", items: ['<div class="aligned-list-item"><strong>✅</strong> <span>Responde rápido.</span></div>', '<div class="aligned-list-item"><strong>🗣️</strong> <span>Fala mais que você.</span></div>', '<div class="aligned-list-item"><strong>❓</strong> <span>Faz perguntas.</span></div>', '<div class="aligned-list-item"><strong>📈</strong> <span>Engaja na conversa.</span></div>'] },
                    { title: "🎯 Foco da Conversa", items: ['<div class="aligned-list-item"><strong>🔥</strong> <span>Gerar interesse.</span></div>', '<div class="aligned-list-item"><strong>🛡️</strong> <span>Passar confiança.</span></div>', '<div class="aligned-list-item"><strong>🧭</strong> <span>Dar direção ao cliente.</span></div>', '---', '<div class="aligned-list-item"><strong>🚫</strong> <span>Não deixar o cliente desviar do assunto principal.</span></div>', '<div class="aligned-list-item"><strong>⏳</strong> <span>Não ficar apenas conversando sem intenção de venda.</span></div>', '<div class="aligned-list-item"><strong>🔗</strong> <span>Sempre conecte a conversa com a solução da venda.</span></div>'], warning: "Se o cliente dispersar ou você perder o foco, a venda esfria." },
                    { title: "📢 Sinais de Abertura (Ataque!)", items: [
                        '<div class="aligned-list-item"><strong>💲</strong> <span>Pergunta o preço.</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>📦</strong> <span>Pede detalhes sobre o produto.</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>🛒</strong> <span>Pergunta o que você vende.</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>👤</strong> <span>Pergunta se você é vendedor.</span></div>'
                    ], footer: "<strong>💡 Dica:</strong> 🔥 Identificou isso? Pare de enrolar e comece o ATAQUE." },
                    { title: "⚠️ Ponto Mais Importante", items: ['<div class="aligned-list-item"><strong>👀</strong> <span>Identificar a abertura.</span></div>', '<div class="aligned-list-item"><strong>🎣</strong> <span>Encontrar a dor do cliente.</span></div>', '<div class="aligned-list-item"><strong>🗺️</strong> <span>Mostrar o caminho, falando de algum produto.</span></div>'], warning: "O maior erro do vendedor é não perceber quando já pode vender (o tempo certo)." },
                    { title: "🧠 Perguntas que Quebram o Padrão", items: [
                        '<div class="aligned-list-item"><strong>🎓</strong> <span>“Tu já tá desenrolando bem na fac ou ainda tá travado?”</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>⛏️</strong> <span>“Já tá conseguindo farmar bem aí ou tá difícil evoluir?”</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>💸</strong> <span>“Já tá conseguindo fazer dinheiro ou tá lento ainda?”</span></div>'
                    ] },
                    { isError: true, title: "❌ ERROS DO VENDEDOR (CLIENTE MEIO)", items: ['<div class="aligned-list-item"><strong>🌪️</strong> <span>Perder o foco da conversa.</span></div>', '<div class="aligned-list-item"><strong>🔀</strong> <span>Deixar o cliente mudar totalmente o assunto.</span></div>', '<div class="aligned-list-item"><strong>🗣️</strong> <span>Responder tudo sem puxar de volta para o objetivo.</span></div>', '<div class="aligned-list-item"><strong>☕</strong> <span>Ficar só “batendo papo” sem avançar.</span></div>', '<div class="aligned-list-item"><strong>🔌</strong> <span>Não conectar a dor com a solução.</span></div>'], footer: "<strong>💡 Dica:</strong> Dor = O motivo emocional ou prático que faz o cliente querer comprar." }
                ],
                videoCategories: [{ title: "Exemplos na Prática", videos: [{ label: "EXEMPLO CERTO", url: "https://drive.google.com/file/d/1nmAOR_S0mm8jWb5VchfBfp2Fo33kiRaq/preview", color: "#22c55e" }, { label: "EXEMPLO ERRADO", url: "https://drive.google.com/file/d/1eW3zORlLH6M20KGBbKCQ1BSR1QWh5a10/preview", color: "#ef4444" }]}]
            },
            'ataque': {
                id: 'ataque', title: "Ataque na Venda", description: "Transforme a dor em solução e crie urgência para fechar.", image: "AssetStore/ataque.jpg",
                sections: [
                    { isSectionTitle: true, title: "COMO ABORDAR (ATAQUE)" },
                    { title: "🧠 Conceito: Dor, Desejo e Urgência", items: ["⚖️ Venda forte é o equilíbrio entre:", "<div style='text-align: left; font-weight: 800; color: #fff; margin: 5px 0;'>🎯 Dor + Desejo + Urgência</div>", "---", '<div class="aligned-list-item"><strong>🧊</strong> <span>Sem dor ➔ Não conecta.</span></div>', '<div class="aligned-list-item"><strong>😴</strong> <span>Sem desejo ➔ Não engaja.</span></div>', '<div class="aligned-list-item"><strong>🛑</strong> <span>Sem urgência ➔ Não fecha.</span></div>'] },
                    { title: "⚙️ Como Funciona na Prática", items: [
                        '🔗 A venda acontece quando você conecta os três pilares:', 
                        '---',
                        '<div class="aligned-list-item"><strong>1️⃣</strong> <span>Faz ele sentir o problema (Dor).</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>2️⃣</strong> <span>Mostra o que ele pode ganhar (Desejo).</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>3️⃣</strong> <span>Dá um motivo para agir agora (Urgência).</span></div>'
                    ]},
                    { title: "🚀 Exemplo Forte", items: [
                        '<div class="aligned-list-item"><strong>🔥 Dor:</strong> <span>“Do jeito que você está, vai evoluir bem mais devagar.”</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>✨ Desejo:</strong> <span>“Com esse VIP, você entra em outro nível na cidade.”</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>⚡ Urgência:</strong> <span>“Pegando agora, você aproveita essa condição antes que acabe.”</span></div>'
                    ]},
                    { title: "🔥 Dor (O Problema)", items: ["🤔 A dor não é inventar necessidade.", "---", "🔍 Identificar ou despertar algo que já faz sentido para o cliente.", "---", "🚫 Você não cria mentira. Você evidencia um incômodo, uma falta ou uma dificuldade.", "---", "🐢 Está evoluindo devagar.", "---", "👻 Está sem destaque na cidade.", "---", "🐌 Está ficando para trás.", "---", "💸 Está gastando mais do que deveria."] },
                    { title: "✨ Desejo (O que ele quer conquistar)", items: ["🏆 Aqui é onde você ganha o cliente. Não basta mostrar o problema — você precisa mostrar o benefício.", "---", "💭 Você faz ele imaginar o nível que ele pode alcançar e a vantagem sobre outros players.", "---", "🚀 Evoluir mais rápido.", "---", "👑 Ter mais presença e respeito.", "---", "🥇 Ter vantagem sobre outros players.", "---", "🏰 Entrar já estruturado."] },
                    { title: "⚡ Urgência (O Gatilho)", items: [
                        "⏳ Sem urgência, não tem fechamento. O cliente até quer… mas deixa para depois.", 
                        "---",
                        "⏰ Você cria um motivo para agir agora (condição limitada ou oportunidade).", 
                        "---", 
                        "🏃‍♂️ “Essa condição é só agora.”", 
                        "---",
                        "📈 “Depois você vai pagar mais caro.”", 
                        "---",
                        "🏁 “Quem pega agora sai na frente.”"
                    ], footer: "<strong>💡 Dica:</strong> Essas condições se aplicam apenas a produtos exclusivos ou promoções do dia." },
                    { isError: true, title: "❌ ERROS DO VENDEDOR (CLIENTE ATAQUE)", items: ['<div class="aligned-list-item"><strong>🎯 Focar demais na dor:</strong> <span>Pode parecer pressão exagerada.</span></div>', '<div class="aligned-list-item"><strong>🧩 Desejo genérico:</strong> <span>“Vantagem” sem contexto real.</span></div>', '<div class="aligned-list-item"><strong>⏱️ Urgência forçada:</strong> <span>Mentir sobre prazo quebra a confiança.</span></div>', '<div class="aligned-list-item"><strong>🤖 Sequência robótica:</strong> <span>Ficar só no script sem ouvir o cliente.</span></div>', '<div class="aligned-list-item"><strong>👥 Não adaptar ao cliente:</strong> <span>Usar o mesmo discurso para todo mundo diminui a sua conversão.</span></div>'] }
                ]
            },
            'fechamento': {
                id: 'fechamento', title: "Fechamento", description: "Fechamento conduz valor, quebra dúvida e transforma interesse em decisão.", image: "AssetStore/fechamento.jpg",
                sections: [
                    { isSectionTitle: true, title: "💰 ESTRATÉGIA DE FECHAMENTO — PADRÃO SG" },
                    { isFull: true, title: "🧠 ESTRUTURA MENTAL DO FECHAMENTO", items: [
                        '<div class="aligned-list-item"><strong>💎</strong> <span>Primeiro você <strong>reforça valor</strong>.</span></div>',
                        '<div class="aligned-list-item"><strong>💸</strong> <span>Depois <strong>ancora preço</strong>.</span></div>',
                        '<div class="aligned-list-item"><strong>🛡️</strong> <span>Depois <strong>quebra objeção</strong> com pagamento.</span></div>',
                        '<div class="aligned-list-item"><strong>⚡</strong> <span>Finaliza com <strong>urgência imediata</strong>.</span></div>'
                    ], footer: "<strong>💡 Dica:</strong> Ancoragem = fazer o cliente sentir que o produto vale muito, antes de ver o preço!" },
                    { title: '💸 ANCORAGEM DE VALOR', items: [
                        '“Se você fosse montar isso separado, passaria tranquilo de R$XXX… e ainda ia gastar mais tempo para chegar no mesmo nível.”',
                        '---',
                        '“Aqui já vem tudo junto, mais barato e pronto para usar — você economiza dinheiro e já sai na frente.”',
                        '---',
                        '“No final, não é sobre gastar menos… é sobre gastar certo e não ter que pagar de novo depois.”',
                        '---',
                        '“Quem monta aos poucos sempre acaba pagando mais caro para chegar no mesmo lugar.”'
                    ]},
                    { title: '⏰ GATILHO DE URGÊNCIA', items: [
                        '“E sendo bem direto contigo, essa condição que eu te passei é só agora.”',
                        '---',
                        '“Se deixar para depois, você provavelmente vai pagar mais caro ou perder esse pacote.”',
                        '---',
                        '⚠️ <strong>REGRAS DE USO:</strong>',
                        '---',
                        '“Essa condição é válida para um produto exclusivo / promoção do dia.”',
                        '---',
                        '<strong>Use urgência apenas quando:</strong>',
                        '<div class="aligned-list-item"><strong>•</strong> <span>Produto é limitado/exclusivo.</span></div>',
                        '<div class="aligned-list-item"><strong>•</strong> <span>Promoção real.</span></div>',
                        '<div class="aligned-list-item"><strong>•</strong> <span>Tem vantagem temporária clara.</span></div>'
                    ]},
                    { title: '💳 PAGAMENTO & OBJEÇÃO', items: [
                        '“Você pode fazer via Pix ou no cartão de crédito, da forma que for mais confortável para você.”',
                        '---',
                        '“Se estiver fora, também trabalhamos com Revolut, então isso não é um problema.”'
                    ]},
                    { title: '🎯 FECHAMENTO DIRETO (MATADOR)', items: [
                        '<div class="aligned-list-item"><strong>•</strong> <span>O ponto aqui não é como você paga — é o nível que você decide entrar na cidade.</span></div>',
                        '<div class="aligned-list-item"><strong>•</strong> <span>Forma de pagamento nunca foi o que travou ninguém. O que trava é ficar pensando enquanto outros já estão evoluindo.</span></div>',
                        '<div class="aligned-list-item"><strong>•</strong> <span>Se faz sentido para você crescer mais rápido, ter mais estrutura e já começar na frente, então isso aqui já está resolvido.</span></div>',
                        '---',
                        '“Se fizer sentido para você, já posso te mandar o Pix ou o link do cartão agora e deixamos isso tudo ativo hoje mesmo.”'
                    ]},
                    { isFull: true, title: '⚔️ VERSÃO MAIS AGRESSIVA', items: [
                        '<div style="color:#ccc; font-size:0.95rem; margin-bottom: 12px;">(Usar quando o cliente já demonstrou interesse real)</div>',
                        '“Vou ser direto contigo — isso aqui não é gasto, é investimento.”',
                        '---',
                        '“Quem pega isso agora sai na frente. Quem deixa para depois sempre se arrepende.”',
                        '---',
                        '“Prefere fazer no Pix ou no cartão à vista?”'
                    ], footer: '<strong>💡 Dica:</strong> Nunca fale obrigado após uma venda, fale parabéns!' },
                    { isFull: true, isError: true, title: '❌ ERROS DO VENDEDOR (CLIENTE FECHAMENTO)', items: [
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Ficar explicando detalhes técnicos de novo.</span></div>',
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não pedir o pagamento de forma direta.</span></div>',
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não criar senso de oportunidade única.</span></div>',
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Esperar o cliente decidir sozinho, sem ser guiado.</span></div>'
                    ], footer: '<strong>💡 Dica:</strong> Sempre termina com pergunta de decisão, nunca aberta.' }
                ]
            },
            'posvenda': {
                id: 'posvenda', title: "Pós Venda", description: "Pós-venda bem feito transforma cliente em recorrência e indicação.", image: "AssetStore/pos_venda.jpg",
                sections: [
                    { isSectionTitle: true, title: "🧠 ESTRATÉGIA DE PÓS-VENDA — PADRÃO SG" },
                    { title: "🛡️ CONFIRMAÇÃO (SEGURANÇA)", items: [
                        '📌 Garanta que ele sinta que fez uma boa decisão.',
                        '---',
                        '✔️ “Já deixei tudo certo para você.”',
                        '---',
                        '✔️ “Você já pode usar agora tranquilo.”',
                        '---',
                        '✔️ “Qualquer dúvida me chama que te ajudo.”',
                        '---',
                        '➡️ Remove arrependimento | 🔒 Aumenta confiança | 🛡️ Evita chargeback'
                    ]},
                    { title: "💎 VALORIZAÇÃO (STATUS)", items: [
                        '📌 Faça ele sentir que subiu de nível.',
                        '---',
                        '✔️ “Agora você já está na frente de muita gente.”',
                        '---',
                        '✔️ “Pouca gente entra já estruturado assim.”',
                        '---',
                        '✔️ “Você fez uma escolha inteligente, parabéns.”',
                        '---',
                        '🥇 Reforça decisão | 👑 Cria orgulho | 💎 Aumenta apego'
                    ]},
                    { title: "🚀 ATIVAÇÃO (USO REAL)", items: [
                        '📌 Ensine ele a usar o que comprou.',
                        '---',
                        '✔️ “Já testou o benefício X?”',
                        '---',
                        '✔️ “Se fizer isso aqui, você aproveita melhor ainda.”',
                        '---',
                        '✔️ “Posso te mostrar como tirar mais vantagem disso.”',
                        '---',
                        '📈 Valor percebido sobe | ⚙️ Diminui desistência | 🚀 Aumenta satisfação'
                    ]},
                    { title: "🤝 ABERTURA (CONEXÃO)", items: [
                        '📌 Deixe a porta aberta para continuidade.',
                        '---',
                        '✔️ “Qualquer dúvida real, me chama.”',
                        '---',
                        '✔️ “Se quiser evoluir mais depois, te mostro as opções.”',
                        '---',
                        '✔️ “Sempre que sair novidade exclusiva, te aviso em primeira mão.”',
                        '---',
                        '💬 Cria vínculo | 🤝 Mantém contato ativo | 📞 Prepara próxima venda'
                    ]},
                    { title: "💸 RECOMPRA / UPSELL", items: [
                        '📌 Plante a próxima venda sem pressão.',
                        '---',
                        '✔️ “Depois você pode evoluir ainda mais com o pacote Y.”',
                        '---',
                        '✔️ “Tem um upgrade que encaixa perfeitamente com o que você pegou.”',
                        '---',
                        '✔️ “Quando quiser subir mais um degrau, já sei o que te indicar.”',
                        '---',
                        '🔄 Naturalidade | 💸 Sem pressão | 📈 Direcionamento'
                    ]},
                    { title: "📢 INDICAÇÃO (ESCALA)", items: [
                        '📌 Transforme cliente em vendedor.',
                        '---',
                        '✔️ “Se tiver algum amigo que quer começar bem, me indica.”',
                        '---',
                        '✔️ “Quem entra estruturado já sai na frente, igual você.”',
                        '---',
                        '✔️ “Se indicar alguém, depois te dou uma moral de fidelidade.”',
                        '---',
                        '✨ Novos clientes | 👥 Baixo custo de venda | 📢 Alta conversão'
                    ]},
                    { isError: true, title: "❌ ERROS NO PÓS-VENDA", items: [
                        '❌ Sumir logo após receber o pagamento.',
                        '---',
                        '❌ Não ensinar o cliente a extrair valor do produto.',
                        '---',
                        '❌ Não reforçar a decisão dele.',
                        '---',
                        '❌ Não abrir espaço para vendas futuras (upsell).',
                        '---',
                        '❌ Esquecer de pedir indicação de amigos.'
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
        window.scrollTo(0,0); 
        Controller.render(); 
    },
    navigateToProfile: (id) => { 
        BusinessLogic.state.currentProfileId = id; 
        BusinessLogic.state.currentView = 'category'; 
        BusinessLogic.state.currentCategoryId = 'meio'; 
        BusinessLogic.state.isMeioExpanded = true; 
        window.scrollTo(0,0); 
        Controller.render(); 
    }
};

const Controller = {
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
                    * { scrollbar-width: thin; scrollbar-color: rgba(255, 255, 255, 0.05) transparent; }
                    ::-webkit-scrollbar { width: 6px; height: 6px; }
                    ::-webkit-scrollbar-track { background: transparent; }
                    ::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.03); border-radius: 10px; }
                    ::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.1); }

                    .layoutContainer { max-width: 100% !important; display: flex; height: 100vh; overflow: hidden; }
                    .sidebarNavigation { width: 280px !important; flex-shrink: 0; display: flex; flex-direction: column; border-right: 1px solid rgba(255,255,255,0.05); background: #000; overflow-y: auto; }
                    .sidebarNavigation::-webkit-scrollbar { display: none; }
                    .mainWorkspace { padding: 2rem 5% !important; flex-grow: 1; max-width: calc(100vw - 280px); overflow-y: auto; text-align: left; }
                    
                    .headerContainer { display: flex; align-items: center; justify-content: space-between; gap: 2.5rem; margin-bottom: 3rem; }
                    .pageTitle { font-size: 2rem !important; margin-bottom: 0.6rem; text-align: left; font-weight: 800; color: #fff; }
                    .pageDescription { font-size: 1.05rem !important; line-height: 1.5; text-align: left; color: #ccc; }
                    
                    .headerImageContainer { flex-shrink: 0; border: 1px solid rgba(255,255,255,0.2); padding: 6px; border-radius: 12px; background: rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; }
                    .headerImageContainer img { max-width: 320px; height: auto; border-radius: 8px; border: 2px solid rgba(255, 255, 255, 0.15); display: block; box-shadow: 0 4px 15px rgba(0,0,0,0.5); }

                    .preparationGrid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 2rem; background: #111; padding: 2.5rem; border: 2px solid rgba(255,255,255,0.1); box-shadow: 0 15px 35px rgba(0,0,0,0.7); margin-top: 1.5rem; margin-bottom: 2.5rem; grid-column: 1 / -1; align-items: center; border-radius: 12px; }
                    .prepPhoto { display: flex; justify-content: center; align-items: center; }
                    .prepPhoto img { max-width: 480px; width: 100%; border-radius: 8px; border: 2px solid rgba(255,255,255,0.15); display: block; box-shadow: 0 4px 15px rgba(0,0,0,0.5); }

                    .contentGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.8rem; width: 100%; align-items: stretch; }
                    .cardSpanFull { grid-column: 1 / -1; }
                    
                    .infoCard { background: #111; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); padding: 1.5rem; }
                    .infoCard h2 { font-size: 1.3rem !important; color: #fff; margin-bottom: 1rem; font-weight: 800; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px; }
                    
                    .topHeadingFree { grid-column: 1 / -1; text-align: center; font-size: 1.5rem; color: #fff; font-weight: 900; margin: 2rem 0; text-transform: uppercase; letter-spacing: 1px; }
                    
                    .dataList { display: block; width: 100%; list-style: none; padding: 0; }
                    .dataList div { font-size: 1rem !important; line-height: 1.6; text-align: left; color: #eee; margin-bottom: 6px; }

                    .aligned-list-item { display: flex; align-items: flex-start; gap: 12px; width: 100%; margin-bottom: 8px; font-size: 1.05rem; }
                    .aligned-list-item strong { flex-shrink: 0; color: #fff; }
                    .aligned-list-item span { flex-grow: 1; text-align: left; }

                    .navItem { font-size: 1.05rem !important; white-space: nowrap; padding: 1.1rem 1.4rem !important; font-weight: 700; border-bottom: 1px solid rgba(255,255,255,0.05); cursor: pointer; transition: all 0.3s; color: #888; }
                    .navItem:hover { background: rgba(255,255,255,0.05); color: #fff; }
                    .navItemActive { color: #fff !important; background: rgba(255,255,255,0.1) !important; border-left: 4px solid #fff; }
                    .navSubItemActive { color: #fff !important; background: rgba(255,255,255,0.1) !important; font-weight: 900 !important; border-left: 4px solid #fff; }

                    .listDivider { margin: 15px 0; border-bottom: 1px solid rgba(255,255,255,0.1); width: 100%; }
                    .comicContainer { margin-top: 2rem; border-radius: 12px; overflow: hidden; border: 2px solid rgba(255,255,255,0.15); }
                    .comicContainer img { width: 100%; height: auto; display: block; }

                    .warningBox { margin-top:10px; color:#fff !important; font-size:0.9rem; }
                    .hintBox { 
                        margin-top: 1.5rem; 
                        padding: 14px 18px; 
                        background: linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(34, 197, 94, 0.05)); 
                        border-left: 4px solid #22c55e; 
                        border-radius: 0 8px 8px 0; 
                        font-size: 0.95rem; 
                        color: #fff !important; 
                        font-weight: 500;
                        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                    }
                    .hintBox strong { color: #22c55e; }
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
                                            <div class="profileSubMenu" style="background: #080808;">
                                                ${Object.values(profiles).map(p => `
                                                    <div class="navItem ${BusinessLogic.state.currentProfileId === p.id ? 'navSubItemActive' : ''}" 
                                                         style="padding-left: 2.5rem !important; border-bottom: none;" 
                                                         onclick="BusinessLogic.navigateToProfile('${p.id}')">${p.shortTitle}</div>
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
                                
                                if (s.isPreparation) {
                                    return `
                                        <div class="preparationGrid">
                                            <div>
                                                <h2 style="color: #fff; font-weight: 800; font-size: 1.4rem; margin-bottom: 1rem;">${s.title}</h2>
                                                <div style="margin-bottom: 1rem;">
                                                    <strong style="color: #fff; display: block; margin-bottom: 5px;">🎯 OBJETIVO</strong>
                                                    <span style="color: #eee;">${s.goal}</span>
                                                </div>
                                                <div style="margin-bottom: 1rem;">
                                                    <strong style="color: #fff; display: block; margin-bottom: 8px;">🚀 AÇÕES</strong>
                                                    <div class="dataList">${s.actions.map(a => `<div class="aligned-list-item"><strong>•</strong> <span>${a}</span></div>`).join('')}</div>
                                                </div>
                                                <div>
                                                    <strong style="color: #fff; display: block; margin-bottom: 5px;">🏆 RESULTADO ESPERADO</strong>
                                                    <span style="color: #eee;">${s.result}</span>
                                                </div>
                                            </div>
                                            <div class="prepPhoto"><img src="${s.image}" alt="Preparação"></div>
                                        </div>
                                    `;
                                }

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
                                        ${s.items ? s.items.map(i => i === '---' ? '<div class="listDivider"></div>' : (i.trim().startsWith('<') ? i : `<div class="aligned-list-item">${i}</div>`)).join('') : ''}
                                    </div>
                                    ${s.footer ? `<div class="hintBox">${s.footer}</div>` : ''}
                                    ${s.warning ? `<div class="warningBox">⚠️ ${s.warning}</div>` : ''}
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