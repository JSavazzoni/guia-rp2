module.exports = async (req, res) => {
    if (req.method !== 'GET') return res.status(405).end();

    const data = {
        profiles: {
            'lider': {
                id: 'lider',
                shortTitle: 'Líder (Facção)',
                title: 'Cliente Líder (Facção)',
                description: 'Essa etapa ensina como abordar um líder de facção e fazer ele desejar crescer, dominar e construir uma facção grande e respeitada.',
                image: 'AssetStore/dono de faccao.jpg',
                sections: [
                    { isSectionTitle: true, title: 'COMO ABORDAR (LÍDER DE FACÇÃO)' },
                    { isFull: true, title: '🎯 Abordagem Estratégica & Foco', items: [
                        '<strong style="color: #ef4444; display: block; margin-bottom: 4px;">🔥 GERAR DOR:</strong>',
                        '<div class="aligned-list-item"><strong>🗣️</strong> <span>“E aí mano, como que tá tua fac hoje? 🧐”</span></div>', 
                        '<div class="aligned-list-item"><strong>👥</strong> <span>“Quantos membros estão pegando ativos aí à noite? 🌃 Tu quer crescer mais ainda ou tá suave como tá? 📈”</span></div>', 
                        '<div class="aligned-list-item"><strong>💰</strong> <span>“O que mais tá pegando hoje? Fac tá com muito farm aí? Tem bastante grana? Tá ganhando os eventos? 🏆”</span></div>',
                        '<strong style="color: #22c55e; display: block; margin-top: 12px; margin-bottom: 4px;">✨ GERAR DESEJO:</strong>',
                        '<div class="aligned-list-item"><strong>🏗️</strong> <span>“Mano, facção grande não cresce só na bala... 🔫 Tem que ter estrutura aqui para as pessoas quererem ficar.”</span></div>', 
                        '<div class="aligned-list-item"><strong>🚀</strong> <span>“Quanto mais tu fortalece tua fac, mais gente cola, mais resultado vem. 🌟”</span></div>', 
                        '<div class="aligned-list-item"><strong>🤝</strong> <span>“Fac forte é fac organizada e com incentivo para os membros. 💎”</span></div>', 
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
                        '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Mais carros, baú extra e log de baú. 🚗</span></div>', 
                        '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Mais controle para o líder. 👑</span></div>', 
                        '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Facção muito mais estruturada. 🏗️</span></div>'
                    ]},
                    { title: '💸 FARM AFK', items: [
                        '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Farm Vaquinha / Pescaria: Dinheiro interno. 🐄</span></div>', 
                        '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Independência financeira total. 🏦</span></div>', 
                        '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Menos dependência de farmar na rua. 🛣️</span></div>'
                    ]},
                    { title: '⚙️ Farm Ativos', items: [
                        '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Produção de farm direto dentro do QG. 🏭</span></div>', 
                        '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Segurança total (não precisa sair). 🛡️</span></div>', 
                        '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Mais eficiência e produção constante. 📈</span></div>'
                    ]},
                    { title: '🎁 Incentivo Membros', items: [
                        '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Sorteios VIP: VIP PVP ou VIP Ouro. 🎟️</span></div>', 
                        '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Muito forte para motivar o grupo. 💪</span></div>', 
                        '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Aumenta o engajamento dos membros. 🔥</span></div>'
                    ]},
                    { isFull: true, title: '🎭 Identidade Visual', items: [
                        '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Personalização: Uniforme e nome da facção. 👕</span></div>', 
                        '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Reconhecimento imediato na cidade. 👁️</span></div>', 
                        '<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Respeito visual perante rivais. ⚔️</span></div>'
                    ]},
                    { isError: true, title: '❌ ERROS DO VENDEDOR (CLIENTE LÍDER)', items: [
                        '<div class="aligned-list-item"><strong>🚫 Falar só do item:</strong> <span>É só descrever o que o produto tem, sem explicar para que serve de verdade. 📦</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫 Ignorar a facção:</strong> <span>É falar com o líder como se ele fosse sozinho, sem considerar os membros. 👤</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫 Não investigar a situação:</strong> <span>É não fazer perguntas para entender como a facção dele está hoje. ❓</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫 Não ativar ambição:</strong> <span>É não fazer ele querer crescer, evoluir ou dominar mais. 📉</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫 Não gerar urgência:</strong> <span>É não dar motivo para ele comprar agora. ⏳</span></div>'
                    ]},
                    { isComic: true, title: '⚽ ESTRATÉGIA DE ABORDAGEM: CERTO vs ERRADO', image: 'AssetStore/quadrinho_lider.jpg' }
                ]
            },
            'novato': {
                id: 'novato',
                shortTitle: 'Novato (Iniciante)',
                title: 'Cliente Novato (Iniciante)',
                description: 'Essa etapa ensina como abordar um novato e fazer ele desejar ser reconhecido, crescer, dominar e construir uma reputação respeitada na cidade.',
                image: 'AssetStore/novato.jpg',
                sections: [
                    { isSectionTitle: true, title: 'COMO ABORDAR (NOVATO)' },
                    { isFull: true, title: '🎯 Abordagem Estratégica & Foco', items: [
                        '<strong style="color: #ef4444; display: block; margin-bottom: 4px;">🔥 GERAR DOR:</strong>',
                        '<div class="aligned-list-item"><strong>🗣️</strong> <span>“Qual teu nome mano? 🤔 Como é que tu conheceu a cidade? 🏙️”</span></div>', 
                        '<div class="aligned-list-item"><strong>🎮</strong> <span>“Já jogava RP antes ou é tua primeira vez? 🎲”</span></div>', 
                        '<div class="aligned-list-item"><strong>🐢</strong> <span>“Tu prefere ir evoluindo na raça ou curte já dar uma acelerada? ⚡”</span></div>', 
                        '<div class="aligned-list-item"><strong>🌟</strong> <span>“O que tu quer virar aqui na cidade? 🎯”</span></div>',
                        '<strong style="color: #22c55e; display: block; margin-top: 12px; margin-bottom: 4px;">✨ GERAR DESEJO:</strong>',
                        '<div class="aligned-list-item"><strong>🚀</strong> <span>“Mano, no começo da cidade quem começa já com vantagem cresce MUITO mais rápido...”</span></div>', 
                        '<div class="aligned-list-item"><strong>🏁</strong> <span>“Se tu já entra estruturado, tu sai na frente de geral. 🏆”</span></div>', 
                        '<div class="aligned-list-item"><strong>🌟</strong> <span>“Imagina você sendo um ponto de referência e respeitado na cidade. 🌟”</span></div>', 
                        '---', 
                        '<span style="font-size: 1.35rem; display: block; margin: 12px 0; color: #fff; font-weight: 800; text-align: left;">🛍️ O QUE VOCÊ ESTÁ VENDENDO DE VERDADE:</span>', 
                        '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>🚀 Evolução rápida.</span></div>', 
                        '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>⚡ Vantagem inicial.</span></div>', 
                        '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>😌 Facilidade (menos dor de cabeça).</span></div>'
                    ]},
                    { isFull: true, isRecommendationHeader: true, title: '🛒 Recomendações de Produtos', items: [] },
                    { title: '🥇 VIP OURO', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Foco principal de evolução acelerada. ⚡</span></div>']},
                    { title: '🚀 VIP LANÇAMENTO', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Exclusividade e benefícios iniciais. 🎁</span></div>']},
                    { title: '🚗 VEÍCULOS START', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Perfeito para a entrada com estilo. 😎</span></div>']},
                    { title: '🎟️ SANTAPASS', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Recompensas e itens únicos de temporada. 🎒</span></div>']},
                    { isFull: true, title: '🎵 SANTAFY', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Garante uma experiência melhor na cidade. 🎧</span></div>']},
                    { isError: true, title: '❌ ERROS DO VENDEDOR (CLIENTE INICIANTE)', items: [
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não entender que ele é iniciante. 🔰</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não criar conexão. 🤝</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não investigar o nível dele. 📊</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não ativar a dor (tá perdido/lento). 🐢</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Falar só de item. 📦</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não direcionar o próximo passo. 🧭</span></div>'
                    ]},
                    { isComic: true, title: '⚽ ESTRATÉGIA DE ABORDAGEM: CERTO vs ERRADO', image: 'AssetStore/quadrinho_novato.jpg' }
                ]
            },
            'policial': {
                id: 'policial',
                shortTitle: 'Policial (PVP / RP)',
                title: 'Cliente Policial (PVP / RP)',
                description: 'Essa etapa ensina como abordar um policial e fazer ele desejar crescer de patente na corporação, construir uma reputação e ser respeitado na cidade.',
                image: 'AssetStore/policial.jpg',
                sections: [
                    { isSectionTitle: true, title: 'COMO ABORDAR (POLICIAL)' },
                    { isFull: true, title: '🎯 Abordagem Estratégica & Foco', items: [
                        '<strong style="color: #ef4444; display: block; margin-bottom: 4px;">🔥 GERAR DOR:</strong>',
                        '<div class="aligned-list-item"><strong>👮‍♂️</strong> <span>“Tá há quanto tempo na polícia? 🚔 Tá curtindo a experiência aqui? 📝”</span></div>', 
                        '<div class="aligned-list-item"><strong>💥</strong> <span>“Você participa bastante de ação? Trocação com bandido? 🔫”</span></div>', 
                        '<div class="aligned-list-item"><strong>🎭</strong> <span>“Ou você é mais de RP? Fica mais na DP, treinamento? 📋”</span></div>',
                        '<strong style="color: #22c55e; display: block; margin-top: 12px; margin-bottom: 4px;">✨ GERAR DESEJO:</strong>',
                        '<div class="aligned-list-item"><strong>⭐</strong> <span>“Mano, tendo VIP tu acaba ganhando muita moral... A galera sempre pede carro emprestado. 🏎️”</span></div>', 
                        '<div class="aligned-list-item"><strong>📈</strong> <span>“Suas ações te deixam conhecido como gente boa, útil 🛠️ — e isso pesa MUITO para subir de cargo.”</span></div>', 
                        '<div class="aligned-list-item"><strong>🛡️</strong> <span>“Com esse blindado, você não vai mais precisar se preocupar em perder as ações. 🚔”</span></div>', 
                        '---', 
                        '<span style="font-size: 1.35rem; display: block; margin: 12px 0; color: #fff; font-weight: 800; text-align: left;">🛍️ O QUE VOCÊ ESTÁ VENDENDO DE VERDADE:</span>', 
                        '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>🛠️ Utilidade (ferramentas, economia de tempo).</span></div>', 
                        '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>🎖️ Reconhecimento (status na corporação, autoridade).</span></div>'
                    ]},
                    { isFull: true, isRecommendationHeader: true, title: '🛒 Recomendações de Produtos', items: [] },
                    { title: '👮‍♂️ PERFIL: POLICIAL RP', items: [
                        '<div style="margin-bottom: 12px; color: #ccc; font-size: 0.95rem;">Focado em evolução dentro da corporação, reconhecimento e presença na cidade. 🏙️</div>',
                        '<div class="aligned-list-item"><strong class="checkIcon">💎</strong> <span><strong>VIP Polícia:</strong> vantagens dentro do RP policial</span></div>',
                        '<div class="aligned-list-item"><strong class="checkIcon">🏡</strong> <span><strong>Voucher de Casa:</strong> estrutura e estabilidade</span></div>',
                        '<div class="aligned-list-item"><strong class="checkIcon">🆔</strong> <span><strong>ID:</strong> identidade e presença na cidade</span></div>'
                    ], footer: '<strong>💡 Dica:</strong> ➡️ Ideal para quem quer crescer de patente, construir reputação e ser respeitado no RP 🎖️' },
                    { title: '🔫 PERFIL: POLICIAL PvP', items: [
                        '<div style="margin-bottom: 12px; color: #ccc; font-size: 0.95rem;">Focado em combate, desempenho e superioridade nas ações. ⚔️</div>',
                        '<div class="aligned-list-item"><strong class="checkIcon">⚡</strong> <span><strong>VIP PvP:</strong> vantagem direta em combate</span></div>',
                        '<div class="aligned-list-item"><strong class="checkIcon">👑</strong> <span><strong>VIP Platinum:</strong> pacote mais completo e forte</span></div>',
                        '<div class="aligned-list-item"><strong class="checkIcon">👕</strong> <span><strong>Peça de Roupa Exclusiva:</strong> identidade visual e destaque</span></div>'
                    ], footer: '<strong>💡 Dica:</strong> ➡️ Ideal para dominar ações, ter desempenho alto e impor respeito no PvP 💥' },
                    { isError: true, title: '❌ ERROS DO VENDEDOR (CLIENTE POLICIAL)', items: [
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não entender se ele é focado em PVP ou RP. 🎭</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Ignorar o tempo de corporação e o cargo dele. ⏳</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não oferecer utilidade para a rotina dele. 🛠️</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não ativar o gatilho de status perante os colegas. 👥</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Focar só em preço e não em moral/destaque. 💰</span></div>'
                    ]},
                    { isComic: true, title: '⚽ ESTRATÉGIA DE ABORDAGEM: CERTO vs ERRADO', image: 'AssetStore/quadrinho_policial.jpg' }
                ]
            },
            'medico': {
                id: 'medico',
                shortTitle: 'Médico (RP)',
                title: 'Cliente Médico (RP)',
                description: 'Essa etapa ensina como abordar um médico e fazer ele desejar crescer na hierarquia do hospital, ter status social e respeito na cidade.',
                image: 'AssetStore/medico.jpg',
                sections: [
                    { isSectionTitle: true, title: 'COMO ABORDAR (MÉDICO)' },
                    { isFull: true, title: '🎯 Abordagem Estratégica & Foco', items: [
                        '<strong style="color: #ef4444; display: block; margin-bottom: 4px;">🔥 GERAR DOR:</strong>',
                        '<div class="aligned-list-item"><strong>🏃‍♂️</strong> <span>“Hoje tua equipe tá mais organizada 📋 ou ainda tá meio na correria? 🌪️”</span></div>', 
                        '<div class="aligned-list-item"><strong>📈</strong> <span>“Tu quer crescer mais agora ou tá mais focado em manter? ⚖️”</span></div>', 
                        '<div class="aligned-list-item"><strong>🤕</strong> <span>“O que mais tá te dando dor de cabeça hoje aí na clínica? 🏥”</span></div>',
                        '<strong style="color: #22c55e; display: block; margin-top: 12px; margin-bottom: 4px;">✨ GERAR DESEJO:</strong>',
                        '<div class="aligned-list-item"><strong>🏗️</strong> <span>“Resultados extraordinários vêm de estrutura, pessoas e processos. ⚙️”</span></div>', 
                        '<div class="aligned-list-item"><strong>🌟</strong> <span>“Aqui dentro tu não precisa ser só mais um médico... 👨‍⚕️ Tu pode ser referência na cidade. 🏆”</span></div>', 
                        '---', 
                        '<span style="font-size: 1.35rem; display: block; margin: 12px 0; color: #fff; font-weight: 800; text-align: left;">🛍️ O QUE VOCÊ ESTÁ VENDENDO DE VERDADE:</span>',
                        '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>⚡ Praticidade (menos tempo perdido, mais eficiência no dia a dia)</span></div>',
                        '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>🛋️ Conforto (descanso, qualidade de vida após plantão)</span></div>',
                        '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>🏆 Reconhecimento (status como médico referência na cidade)</span></div>'
                    ]},
                    { isFull: true, isRecommendationHeader: true, title: '🛒 Recomendações de Produtos', items: [] },
                    { title: '🏡 MANSÃO', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Status máximo e espaço para a equipe. 🛋️</span></div>']},
                    { title: '👑 VIP LANÇAMENTO', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Benefícios gerais e respeito na cidade. 🌟</span></div>']},
                    { title: '🏠 VOUCHER DE CASA', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Conforto, exclusividade e utilidade. 🔑</span></div>']},
                    { title: '🎟️ SANTAPASS', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Recompensas e itens únicos. 🎁</span></div>']},
                    { isError: true, title: '❌ ERROS DO VENDEDOR (CLIENTE MÉDICO)', items: [
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não respeitar o tempo de observação (médicos são ocupados). ⏰</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Ignorar as dores da equipe ou da clínica. 🏥</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não oferecer itens de alto padrão (mansão/luxo). 💎</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não lidar profissionalmente com objeções de valor. 💵</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Tratar como novato e não como um decisor. 👨‍⚖️</span></div>'
                    ]},
                    { isComic: true, title: '⚽ ESTRATÉGIA DE ABORDAGEM: CERTO vs ERRADO', image: 'AssetStore/quadrinho_medico.jpg' }
                ]
            },
            'staff': {
                id: 'staff',
                shortTitle: 'STAFF (400H+)',
                title: 'Cliente STAFF ou (400H+)',
                description: 'Essa etapa ensina como abordar um staff e fazer ele querer subir na hierarquia, ter voz dentro da equipe e ser reconhecido como referência na cidade.',
                image: 'AssetStore/staff.jpg',
                sections: [
                    { isSectionTitle: true, title: 'COMO ABORDAR (STAFF)' },
                    { isFull: true, title: '🎯 Abordagem Estratégica & Foco', items: [
                        '<strong style="color: #ef4444; display: block; margin-bottom: 4px;">🔥 GERAR DOR:</strong>',
                        '<div class="aligned-list-item"><strong>⏳</strong> <span>“E aí mano, tu já tá há mó cota aqui na cidade né? 🕰️”</span></div>', 
                        '<div class="aligned-list-item"><strong>👥</strong> <span>“Já tem tua galera aí? Já tá estruturado? 🏗️”</span></div>', 
                        '<div class="aligned-list-item"><strong>👀</strong> <span>“Mas a galera te reconhece fácil? 🤔 Tipo, só de bater o olho já sabem que é você?”</span></div>',
                        '<strong style="color: #22c55e; display: block; margin-top: 12px; margin-bottom: 4px;">✨ GERAR DESEJO:</strong>',
                        '<div class="aligned-list-item"><strong>📜</strong> <span>“Mano, tu já tem muita história na cidade... O certo era tu já ter uma identidade forte aqui dentro. 🎭”</span></div>', 
                        '<div class="aligned-list-item"><strong>👕</strong> <span>“O bom seria você ter uma camisa tua, pra quando você chegar no local o pessoal já saber que é você. 👕”</span></div>', 
                        '<div class="aligned-list-item"><strong>🆔</strong> <span>“Agora imagina você chegando nos lugares e a galera já saber quem é você só de olhar seu ID. 🤩”</span></div>', 
                        '---', 
                        '<span style="font-size: 1.35rem; display: block; margin: 12px 0; color: #fff; font-weight: 800; text-align: left;">🛍️ O QUE VOCÊ ESTÁ VENDENDO DE VERDADE:</span>', 
                        '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>🎭 Identidade e presença.</span></div>', 
                        '<div class="aligned-list-item"><strong class="bulletIcon">•</strong> <span>🏆 Reconhecimento marcado na cidade.</span></div>'
                    ]},
                    { isFull: true, isRecommendationHeader: true, title: '🛒 Recomendações de Produtos', items: [] },
                    { title: '🆔 ID EXCLUSIVO (< 1000)', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Curto, marcante e respeitado por todos. 🌟</span></div>']},
                    { title: '👕 ROUPA PERSONALIZADA', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Visual único e reconhecimento imediato. 👁️</span></div>']},
                    { title: '👑 VIP LANÇAMENTO', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Todos os benefícios exclusivos de ponta. 🎁</span></div>']},
                    { title: '🔫 SKIN DE ARMA', items: ['<div class="aligned-list-item"><strong class="checkIcon">✔</strong> <span>Destaque visual em qualquer ação. 💥</span></div>']},
                    { isError: true, title: '❌ ERROS DO VENDEDOR (CLIENTE STAFF)', items: [
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não respeitar a história dele no servidor. 📜</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Oferecer pacotes básicos para quem já é experiente. 📦</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Ignorar o desejo de exclusividade e identidade visual. 🎭</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Focar em farm/inicial para quem já tem tudo. 💰</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não valorizar o peso do ID dele na cidade. 🆔</span></div>'
                    ]},
                    { isComic: true, title: '⚽ ESTRATÉGIA DE ABORDAGEM: CERTO vs ERRADO', image: 'AssetStore/quadrinho_staff.jpg' }
                ]
            }
        },
        categories: {
            'olheiro': {
                id: 'olheiro', title: "Olheiro", description: "Observe o player, veja o que ele está fazendo, o assunto e se é o momento certo.", image: "AssetStore/gemini.jpg",
                sections: [
                    { isSectionTitle: true, title: "COMO ABORDAR (OLHEIRO)" },
                    { title: "🎯 Objetivo do Olheiro", items: ['<div class="aligned-list-item"><strong>🗣️</strong> <span>O cliente está disponível para conversar?</span></div>', '<div class="aligned-list-item"><strong>🧠</strong> <span>Você vai conseguir a atenção dele?</span></div>', '<div class="aligned-list-item"><strong>💰</strong> <span>Existe oportunidade de venda naquele momento?</span></div>'] },
                    { title: "⏱️ Tempo de Observação", items: [
                        '<div class="aligned-list-item"><strong>⏳</strong> <span>Mínimo: 2 minutos.</span></div>', 
                        '<div class="aligned-list-item"><strong>⏰</strong> <span>Ideal: 3 a 5 minutos.</span></div>'
                    ], warning: "Abordar no momento errado fará você perder tempo. 🛑" },
                    { title: "🚶‍♂️ Comportamento do Cliente", items: ['<div class="aligned-list-item"><strong>🗺️</strong> <span>Está perdido?</span></div>', '<div class="aligned-list-item"><strong>👣</strong> <span>Está andando sem rumo?</span></div>', '<div class="aligned-list-item"><strong>🛠️</strong> <span>Está testando mecânicas?</span></div>', '<div class="aligned-list-item"><strong>🧍‍♂️</strong> <span>Está parado?</span></div>', '<div class="aligned-list-item"><strong>🗣️</strong> <span>Está em resenha aberta.</span></div>'], footer: "<strong>💡 Dica:</strong> Normalmente, clientes em momento tranquilo têm mais chance de dar atenção. 🛋️" },
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
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não respeitar o tempo de observação (pular etapa). ⏳</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não identificar se o cliente tem potencial real. 💎</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não perceber que o cliente está testando mecânica / aprendendo. 🛠️</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Abordar sem ter um próximo passo pensado. 🧭</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Ficar “rodando” sem agir mesmo vendo oportunidade clara. 👁️</span></div>',
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Perder timing (chegar tarde demais). ⏰</span></div>'
                    ] }
                ],
                videoCategories: [{ title: "Adicional em Vídeo", videos: [{ label: "EXEMPLO ERRADO", url: "https://drive.google.com/file/d/1Nah9sTp9CfUqEUTqGg_6vm-dxyNFaSX5/preview", color: "#ef4444" }, { label: "EXEMPLO CERTO", url: "https://drive.google.com/file/d/1nmAOR_S0mm8jWb5VchfBfp2Fo33kiRaq/preview", color: "#22c55e" }]}]
            },
            'defesa': {
                id: 'defesa', title: "Defesa na Venda", description: "Ganhe a atenção do cliente e inicie a conversa.", image: "AssetStore/defesa.jpg",
                sections: [
                    { isSectionTitle: true, title: "PREPARAÇÃO DA DEFESA" },
                    { isPreparation: true, title: '👤 PREPARAÇÃO DO PERSONAGEM', image: 'AssetStore/foto_2.jpg',
                      goal: 'É fazer você se destacar entre os players ao redor e parecer ser um cara experiente na cidade. Todos se importam com a opinião de quem é foda! ⭐',
                      actions: ['Personagem bem vestido. 👔', 'Usar itens que chamem atenção: 💎', '• Carros exclusivos. 🏎️', '• Armas diferenciadas. 🔫', '• Pets raros (ex.: tigre). 🐅', 'Mostrar que é um jogador relevante na cidade. 👑'],
                      result: 'O cliente percebe que você não é um jogador comum, aumentando interesse e respeito. 🤝'
                    },
                    { isSectionTitle: true, title: "COMO ABORDAR (DEFESA)" },
                    { title: "🛡️ O Que é Defesa?", items: [
                        '<div class="aligned-list-item"><strong>🤝</strong> <span>Defesa é criar conexão com o cliente para ganhar atenção e iniciar a conversa.</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>👉</strong> <span>É o primeiro contato.</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>👉</strong> <span>É onde você conquista o direito de continuar falando.</span></div>'
                    ], warning: "Sem conexão ➔ Sem atenção ➔ Sem venda. 🛑" },
                    { title: "🎯 Objetivo da Defesa", items: [
                        '<div class="aligned-list-item"><strong>🛑</strong> <span>Fazer o cliente notar a presença do vendedor.</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>⏳</strong> <span>Ganhar alguns segundos de atenção.</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>🗣️</strong> <span>Iniciar uma conversa natural.</span></div>'
                    ], footer: "<strong>💡 Dica:</strong> Aqui começa a venda de verdade. 💸" },
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
                    ], footer: "<strong>💡 Dica:</strong> O efeito camaleão é a capacidade de você se adaptar ao ambiente e ao perfil do cliente, falando a mesma “língua” que ele fala. 🦎" },
                    { title: "💬 Como Entrar (Exemplos)", items: [
                        '<div class="aligned-list-item"><strong>👋</strong> <span>“Fala irmão, tranquilo? Sou o ...”</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>❓</strong> <span>“Qual teu nome?”</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>👀</strong> <span>“Vi você agora… curti teu estilo.”</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>🏎️</strong> <span>“Esse carro é muito foda hein!”</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>🏙️</strong> <span>“O que você gosta de fazer na city?”</span></div>'
                    ], footer: "<strong>💡 Dica:</strong> É importante a sua apresentação com nome, gera confiança. 🤝" },
                    { isError: true, title: "❌ ERROS DO VENDEDOR (CLIENTE DEFESA)", items: ['<div class="aligned-list-item"><strong>🏃‍♂️</strong> <span>Chegar vendendo direto (“Quer VIP?”).</span></div>', '<div class="aligned-list-item"><strong>🤖</strong> <span>Parecer robô ou script decorado.</span></div>', '<div class="aligned-list-item"><strong>🛑</strong> <span>Interromper o cliente em um momento errado.</span></div>', '<div class="aligned-list-item"><strong>🤐</strong> <span>Falar demais e não ouvir.</span></div>', '<div class="aligned-list-item"><strong>🙈</strong> <span>Ignorar o que o cliente respondeu.</span></div>', '<div class="aligned-list-item"><strong>🔨</strong> <span>Forçar a venda sem entender a necessidade.</span></div>'], warning: "Isso quebra a atenção na hora. 💥" }
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
                    { title: "🔍 Indícios de Interesse", items: ['<div class="aligned-list-item"><strong>✅</strong> <span>Responde rápido. ⚡</span></div>', '<div class="aligned-list-item"><strong>🗣️</strong> <span>Fala mais que você. 💬</span></div>', '<div class="aligned-list-item"><strong>❓</strong> <span>Faz perguntas. 🤔</span></div>', '<div class="aligned-list-item"><strong>📈</strong> <span>Engaja na conversa. 🤝</span></div>'] },
                    { title: "🎯 Foco da Conversa", items: ['<div class="aligned-list-item"><strong>🔥</strong> <span>Gerar interesse.</span></div>', '<div class="aligned-list-item"><strong>🛡️</strong> <span>Passar confiança.</span></div>', '<div class="aligned-list-item"><strong>🧭</strong> <span>Dar direção ao cliente.</span></div>', '---', '<div class="aligned-list-item"><strong>🚫</strong> <span>Não deixar o cliente desviar do assunto principal.</span></div>', '<div class="aligned-list-item"><strong>⏳</strong> <span>Não ficar apenas conversando sem intenção de venda.</span></div>', '<div class="aligned-list-item"><strong>🔗</strong> <span>Sempre conecte a conversa com a solução da venda.</span></div>'], warning: "Se o cliente dispersar ou você perder o foco, a venda esfria. 🧊" },
                    { title: "📢 Sinais de Abertura (Ataque!)", items: [
                        '<div class="aligned-list-item"><strong>💲</strong> <span>Pergunta o preço. 💵</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>📦</strong> <span>Pede detalhes sobre o produto. 🔍</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>🛒</strong> <span>Pergunta o que você vende. 🛍️</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>👤</strong> <span>Pergunta se você é vendedor. 💼</span></div>'
                    ], footer: "<strong>💡 Dica:</strong> 🔥 Identificou isso? Pare de enrolar e comece o ATAQUE. ⚔️" },
                    { title: "⚠️ Ponto Mais Importante", items: ['<div class="aligned-list-item"><strong>👀</strong> <span>Identificar a abertura. 🔓</span></div>', '<div class="aligned-list-item"><strong>🎣</strong> <span>Encontrar a dor do cliente. 🤕</span></div>', '<div class="aligned-list-item"><strong>🗺️</strong> <span>Mostrar o caminho, falando de algum produto. 🎯</span></div>'], warning: "O maior erro do vendedor é não perceber quando já pode vender (o tempo certo). ⏰" },
                    { title: "🧠 Perguntas que Quebram o Padrão", items: [
                        '<div class="aligned-list-item"><strong>🎓</strong> <span>“Tu já tá desenrolando bem na fac ou ainda tá travado?”</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>⛏️</strong> <span>“Já tá conseguindo farmar bem aí ou tá difícil evoluir?”</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>💸</strong> <span>“Já tá conseguindo fazer dinheiro ou tá lento ainda?”</span></div>'
                    ] },
                    { isError: true, title: "❌ ERROS DO VENDEDOR (CLIENTE MEIO)", items: ['<div class="aligned-list-item"><strong>🌪️</strong> <span>Perder o foco da conversa.</span></div>', '<div class="aligned-list-item"><strong>🔀</strong> <span>Deixar o cliente mudar totalmente o assunto.</span></div>', '<div class="aligned-list-item"><strong>🗣️</strong> <span>Responder tudo sem puxar de volta para o objetivo.</span></div>', '<div class="aligned-list-item"><strong>☕</strong> <span>Ficar só “batendo papo” sem avançar.</span></div>', '<div class="aligned-list-item"><strong>🔌</strong> <span>Não conectar a dor com a solução.</span></div>'], footer: "<strong>💡 Dica:</strong> Dor = O motivo emocional ou prático que faz o cliente querer comprar. ❤️‍🔥" }
                ],
                videoCategories: [{ title: "Exemplos na Prática", videos: [{ label: "EXEMPLO CERTO", url: "https://drive.google.com/file/d/1nmAOR_S0mm8jWb5VchfBfp2Fo33kiRaq/preview", color: "#22c55e" }, { label: "EXEMPLO ERRADO", url: "https://drive.google.com/file/d/1eW3zORlLH6M20KGBbKCQ1BSR1QWh5a10/preview", color: "#ef4444" }]}]
            },
            'ataque': {
                id: 'ataque', title: "Ataque na Venda", description: "Transforme a dor em solução e crie urgência para fechar.", image: "AssetStore/ataque.jpg",
                sections: [
                    { isSectionTitle: true, title: "COMO ABORDAR (ATAQUE)" },
                    { title: "🧠 Conceito: Dor, Desejo e Urgência", items: ["⚖️ Venda forte é o equilíbrio entre:", "<div style='text-align: left; font-weight: 800; color: #fff; margin: 5px 0;'>🎯 Dor + Desejo + Urgência</div>", "---", '<div class="aligned-list-item"><strong>🧊</strong> <span>Sem dor ➔ Não conecta.</span></div>', '<div class="aligned-list-item"><strong>😴</strong> <span>Sem desejo ➔ Não engaja.</span></div>', '<div class="aligned-list-item"><strong>🛑</strong> <span>Sem urgência ➔ Não fecha.</span></div>'] },
                    { title: "⚙️ Como Funciona na Prática", items: [
                        '<div class="aligned-list-item"><strong>🔗</strong> <span>A venda acontece quando você conecta os três pilares:</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>1️⃣</strong> <span>Faz ele sentir o problema (Dor). 🤕</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>2️⃣</strong> <span>Mostra o que ele pode ganhar (Desejo). ✨</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>3️⃣</strong> <span>Dá um motivo para agir agora (Urgência). ⚡</span></div>'
                    ]},
                    { title: "🚀 Exemplo Forte", items: [
                        '<div class="aligned-list-item"><strong>🔥 Dor:</strong> <span>“Do jeito que você está, vai evoluir bem mais devagar.” 🐢</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>✨ Desejo:</strong> <span>“Com esse VIP, você entra em outro nível na cidade.” 🌟</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>⚡ Urgência:</strong> <span>“Pegando agora, você aproveita essa condição antes que acabe.” ⏳</span></div>'
                    ], footer: '<strong>💡 Dica:</strong> “Sem dor, ele não liga. Sem desejo, ele não quer. Sem urgência, ele deixa para depois.” 🎯' },
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
                    ], footer: "<strong>💡 Dica:</strong> Essas condições se aplicam apenas a produtos exclusivos ou promoções do dia. 🏷️" },
                    { isError: true, title: "❌ ERROS DO VENDEDOR (CLIENTE ATAQUE)", items: ['<div class="aligned-list-item"><strong>🎯 Focar demais na dor:</strong> <span>Pode parecer pressão exagerada. 💥</span></div>', '<div class="aligned-list-item"><strong>🧩 Desejo genérico:</strong> <span>“Vantagem” sem contexto real. 🌫️</span></div>', '<div class="aligned-list-item"><strong>⏱️ Urgência forçada:</strong> <span>Mentir sobre prazo quebra a confiança. 🤥</span></div>', '<div class="aligned-list-item"><strong>🤖 Sequência robótica:</strong> <span>Ficar só no script sem ouvir o cliente. 🤐</span></div>', '<div class="aligned-list-item"><strong>👥 Não adaptar ao cliente:</strong> <span>Usar o mesmo discurso para todo mundo diminui a sua conversão. 📉</span></div>'] }
                ]
            },
            'fechamento': {
                id: 'fechamento', title: "Fechamento", description: "Fechamento conduz valor, quebra dúvida e transforma interesse em decisão.", image: "AssetStore/fechamento.jpg",
                sections: [
                    { isSectionTitle: true, title: "💰 ESTRATÉGIA DE FECHAMENTO" },
                    { isFull: true, title: "🧠 ESTRUTURA MENTAL DO FECHAMENTO", items: [
                        '<div class="aligned-list-item"><strong>💎</strong> <span>Primeiro você <strong>reforça valor</strong>.</span></div>',
                        '<div class="aligned-list-item"><strong>💸</strong> <span>Depois <strong>ancora preço</strong>.</span></div>',
                        '<div class="aligned-list-item"><strong>🛡️</strong> <span>Depois <strong>quebra objeção</strong> com pagamento.</span></div>',
                        '<div class="aligned-list-item"><strong>⚡</strong> <span>Finaliza com <strong>urgência imediata</strong>.</span></div>'
                    ], footer: "<strong>💡 Dica:</strong> Ancoragem = fazer o cliente sentir que o produto vale muito, antes de ver o preço! ⚓" },
                    { title: '💸 ANCORAGEM DE VALOR', items: [
                        '<div class="aligned-list-item"><strong>🗣️</strong> <span>“Se você fosse montar isso separado, passaria tranquilo de R$XXX… 💸 e ainda ia gastar mais tempo para chegar no mesmo nível. ⏳”</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>📦</strong> <span>“Aqui já vem tudo junto, mais barato e pronto para usar — você economiza dinheiro e já sai na frente. 🚀”</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>🎯</strong> <span>“No final, não é sobre gastar menos… 📉 é sobre gastar certo e não ter que pagar de novo depois. 🛡️”</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>🐢</strong> <span>“Quem monta aos poucos sempre acaba pagando mais caro para chegar no mesmo lugar.”</span></div>'
                    ], footer: '<strong>💡 Dica:</strong> Não fale de preço primeiro, faça o cliente entender o custo de não escolher aquilo. 🧠' },
                    { title: '⏰ GATILHO DE URGÊNCIA', items: [
                        '<div class="aligned-list-item"><strong>⚡</strong> <span>“E sendo bem direto contigo, essa condição que eu te passei é só agora.”</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>⚠️</strong> <span>“Se deixar para depois, você provavelmente vai pagar mais caro ou perder esse pacote.”</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>📋</strong> <span><strong>REGRAS DE USO:</strong><br>“Essa condição é válida para um produto exclusivo / promoção do dia.” 🏷️</span></div>',
                        '---',
                        '<strong style="color: #fff; display: block; margin-bottom: 8px;">Use urgência apenas quando:</strong>',
                        '<div class="aligned-list-item"><strong>•</strong> <span>Produto é limitado/exclusivo. 💎</span></div>',
                        '<div class="aligned-list-item"><strong>•</strong> <span>Promoção real. 📉</span></div>',
                        '<div class="aligned-list-item"><strong>•</strong> <span>Tem vantagem temporária clara. ⏳</span></div>'
                    ]},
                    { isFull: true, title: '🎯 FECHAMENTO DIRETO (MATADOR)', items: [
                        '<div class="aligned-list-item"><strong>👉</strong> <span>O ponto aqui não é como você paga — é o nível que você decide entrar na cidade. 🏙️</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>👉</strong> <span>Forma de pagamento nunca foi o que travou ninguém. O que trava é ficar pensando enquanto outros já estão evoluindo. 🚀</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>👉</strong> <span>Se faz sentido para você crescer mais rápido, ter mais structure e já começar na frente, então isso aqui já está resolvido. ✅</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>🔥</strong> <span>“Se fizer sentido para você, já posso te mandar o Pix ou o link do cartão agora e deixamos isso tudo ativo hoje mesmo.”</span></div>'
                    ]},
                    { isFull: true, title: '⚔️ VERSÃO MAIS AGRESSIVA', items: [
                        '<div style="color:#ccc; font-size:0.95rem; margin-bottom: 12px;">(Usar quando o cliente já demonstrou interesse real)</div>',
                        '<div class="aligned-list-item"><strong>💼</strong> <span>“Vou ser direto contigo — isso aqui não é gasto, é investimento.”</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>🏆</strong> <span>“Quem pega isso agora sai na frente. Quem deixa para depois sempre se arrepende.”</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>💳</strong> <span>“Prefere fazer no Pix ou no cartão à vista?”</span></div>'
                    ], footer: '<strong>💡 Dica:</strong> Nunca fale obrigado após uma venda, fale parabéns! 🎉' },
                    { isFull: true, isError: true, title: '❌ ERROS DO VENDEDOR (CLIENTE FECHAMENTO)', items: [
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Ficar explicando detalhes técnicos de novo. 🗣️</span></div>',
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não pedir o pagamento de forma direta. 💸</span></div>',
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Não criar senso de oportunidade única. ⏳</span></div>',
                        '<div class="aligned-list-item"><strong>🚫</strong> <span>Esperar o cliente decidir sozinho, sem ser guiado. 🧭</span></div>'
                    ], footer: '<strong>💡 Dica:</strong> Sempre termina com pergunta de decisão, nunca aberta. 🎯' }
                ]
            },
            'posvenda': {
                id: 'posvenda', title: "Pós Venda", description: "Pós-venda bem feito transforma cliente em recorrência e indicação.", image: "AssetStore/pos_venda.jpg",
                sections: [
                    { isSectionTitle: true, title: "🧠 ESTRATÉGIA DE PÓS-VENDA" },
                    { title: "🛡️ CONFIRMAÇÃO (SEGURANÇA)", items: [
                        '<div class="aligned-list-item"><strong>📌</strong> <span>Garanta que ele sinta que fez uma boa decisão. 😌</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>✔️</strong> <span>“Já deixei tudo certo para você.”</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>✔️</strong> <span>“Você já pode usar agora tranquilo.”</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>✔️</strong> <span>“Qualquer dúvida me chama que te ajudo.”</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>➡️</strong> <span>Remove arrependimento | 🔒 Aumenta confiança/span></div>'
                    ]},
                    { title: "💎 VALORIZAÇÃO (STATUS)", items: [
                        '<div class="aligned-list-item"><strong>📌</strong> <span>Faça ele sentir que subiu de nível. 📈</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>✔️</strong> <span>“Agora você já está na frente de muita gente.”</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>✔️</strong> <span>“Pouca gente entra já estruturado assim.”</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>✔️</strong> <span>“Você fez uma escolha inteligente, parabéns.” 🎉</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>🥇</strong> <span>Reforça decisão | 👑 Cria orgulho | 💎 Aumenta apego</span></div>'
                    ]},
                    { title: "🚀 ATIVAÇÃO (USO REAL)", items: [
                        '<div class="aligned-list-item"><strong>📌</strong> <span>Ensine ele a usar o que comprou. 🎮</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>✔️</strong> <span>“Já testou o benefício X?”</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>✔️</strong> <span>“Se fizer isso aqui, você aproveita melhor ainda.”</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>✔️</strong> <span>“Posso te mostrar como tirar mais vantagem disso.”</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>📈</strong> <span>Valor percebido sobe | ⚙️ Diminui desistência | 🚀 Aumenta satisfação</span></div>'
                    ]},
                    { title: "🤝 ABERTURA (CONEXÃO)", items: [
                        '<div class="aligned-list-item"><strong>📌</strong> <span>Deixe a porta aberta para continuidade. 🚪</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>✔️</strong> <span>“Qualquer dúvida real, me chama.”</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>✔️</strong> <span>“Se quiser evoluir mais depois, te mostro as opções.”</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>✔️</strong> <span>“Sempre que sair novidade exclusiva, te aviso em primeira mão.” ⭐</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>💬</strong> <span>Cria vínculo | 🤝 Mantém contato ativo | 📞 Prepara próxima venda</span></div>'
                    ]},
                    { title: "💸 RECOMPRA / UPSELL", items: [
                        '<div class="aligned-list-item"><strong>📌</strong> <span>Plante a próxima venda sem pressão. 🌱</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>✔️</strong> <span>“Depois você pode evoluir ainda mais com o pacote Y.”</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>✔️</strong> <span>“Tem um upgrade que encaixa perfeitamente com o que você pegou.”</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>✔️</strong> <span>“Quando quiser subir mais um degrau, já sei o que te indicar.” 🪜</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>🔄</strong> <span>Naturalidade | 💸 Sem pressão | 📈 Direcionamento</span></div>'
                    ]},
                    { title: "📢 INDICAÇÃO (ESCALA)", items: [
                        '<div class="aligned-list-item"><strong>📌</strong> <span>Transforme cliente em vendedor. 🗣️</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>✔️</strong> <span>“Se tiver algum amigo que quer começar bem, me indica.” 🤝</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>✔️</strong> <span>“Quem entra estruturado já sai na frente, igual você.”</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>✔️</strong> <span>“Se indicar alguém, depois te dou uma moral de fidelidade.” 🎁</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>✨</strong> <span>Novos clientes | 👥 Baixo custo de venda | 📢 Alta conversão</span></div>'
                    ]},
                    { isError: true, title: "❌ ERROS NO PÓS-VENDA", items: [
                        '<div class="aligned-list-item"><strong>❌</strong> <span>Sumir logo após receber o pagamento. 👻</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>❌</strong> <span>Não ensinar o cliente a extrair valor do produto. 📉</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>❌</strong> <span>Não reforçar a decisão dele. 🤔</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>❌</strong> <span>Não abrir espaço para vendas futuras (upsell). 🚪</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>❌</strong> <span>Esquecer de pedir indicação de amigos. 👥</span></div>'
                    ]}
                ]
            }
        }
    };
    return res.status(200).json({ success: true, data });
};