module.exports = async (req, res) => {
    const data = {
        profiles: {
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
                    { isError: true, title: '❌ ERROS DO VENDEDOR', items: [
                        '<div class="aligned-list-item"><strong>🚫 Falar só do item:</strong> <span>📦</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫 Ignorar a facção:</strong> <span>👤</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫 Não investigar a situação:</strong> <span>❓</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫 Não ativar ambição:</strong> <span>📉</span></div>', 
                        '<div class="aligned-list-item"><strong>🚫 Não gerar urgência:</strong> <span>⏳</span></div>'
                    ]},
                    { isComic: true, title: '⚽ ESTRATÉGIA DE ABORDAGEM', image: 'AssetStore/quadrinho_lider.jpg' }
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
                    { title: '🥇 VIP OURO', items: ['⚡ Foco principal de evolução acelerada.'] },
                    { title: '🎟️ SANTAPASS', items: ['🎒 Recompensas e itens únicos.'] },
                    { isComic: true, title: 'ESTRATÉGIA', image: 'AssetStore/quadrinho_novato.jpg' }
                ]
            },
            'policial': {
                id: 'policial',
                shortTitle: 'Policial (PVP / RP) 🚓',
                title: 'Cliente Policial (PVP / RP) 🚓',
                description: 'Essa etapa ensina como abordar um policial e fazer ele desejar crescer de patente, construir uma reputação e ser respeitado.',
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
                        '<div class="aligned-list-item"><strong>🛡️</strong> <span>“Com esse blindado, você não vai mais precisar se preocupar em perder as ações. 🚔”</span></div>'
                    ]},
                    { title: '👮‍♂️ PERFIL: POLICIAL RP', items: ['💎 VIP Polícia', '🏡 Voucher de Casa', '🆔 ID Exclusivo'], footer: '➡️ Ideal para crescer de patente 🎖️' },
                    { title: '🔫 PERFIL: POLICIAL PvP', items: ['⚡ VIP PvP', '👑 VIP Platinum', '👕 Roupa Exclusiva'], footer: '➡️ Ideal para dominar ações 💥' },
                    { isComic: true, title: 'ESTRATÉGIA', image: 'AssetStore/quadrinho_policial.jpg' }
                ]
            },
            'medico': {
                id: 'medico',
                shortTitle: 'Médico (RP) 👨‍⚕️',
                title: 'Cliente Médico (RP) 👨‍⚕️',
                description: 'Essa etapa ensina como abordar um médico e fazer ele desejar crescer na hierarquia do hospital e ter status social.',
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
                        '<div class="aligned-list-item"><strong>🌟</strong> <span>“Aqui dentro tu não precisa ser só mais um médico... 👨‍⚕️ Tu pode ser referência na cidade. 🏆”</span></div>'
                    ]},
                    { title: '🏡 MANSÃO', items: ['🛋️ Status máximo e espaço para a equipe.'] },
                    { title: '👑 VIP LANÇAMENTO', items: ['🌟 Benefícios gerais e respeito.'] },
                    { isComic: true, title: 'ESTRATÉGIA', image: 'AssetStore/quadrinho_medico.jpg' }
                ]
            },
            'staff': {
                id: 'staff',
                shortTitle: 'STAFF (400H+) 🛡️',
                title: 'Cliente STAFF ou (400H+) 🛡️',
                description: 'Essa etapa ensina como abordar um staff e fazer ele querer subir na hierarquia e ter voz dentro da equipe.',
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
                        '<div class="aligned-list-item"><strong>🆔</strong> <span>“Agora imagina você chegando nos lugares e a galera já saber quem é você só de olhar seu ID. 🤩”</span></div>'
                    ]},
                    { title: '🆔 ID EXCLUSIVO', items: ['🌟 Curto, marcante e respeitado.'] },
                    { title: '👕 ROUPA PERSONALIZADA', items: ['👁️ Visual único e reconhecimento.'] },
                    { isComic: true, title: 'ESTRATÉGIA', image: 'AssetStore/quadrinho_staff.jpg' }
                ]
            }
        },
        categories: {
            'olheiro': {
                id: 'olheiro', title: "Olheiro", description: "Observe o player, veja o que ele está fazendo, o assunto e se é o momento certo.", image: "AssetStore/gemini.jpg",
                sections: [
                    { isSectionTitle: true, title: "COMO ABORDAR (OLHEIRO)" },
                    { title: "🎯 Objetivo do Olheiro", items: ['🗣️ O cliente está disponível?', '🧠 Vai conseguir a atenção?', '💰 Existe oportunidade de venda?'] },
                    { title: "⏱️ Tempo de Observação", items: ['⏳ Mínimo: 2 minutos.', '⏰ Ideal: 3 a 5 minutos.'], warning: "Abordar no momento errado fará você perder tempo. 🛑" },
                    { title: "✅ Sinais de Abertura", items: ['👤 Cliente sozinho.', '---', '🧭 Cliente perdido.', '---', '👀 Olhando ao redor.', '---', '🛋️ Parado descansando.'] }
                ]
            },
            'defesa': {
                id: 'defesa', title: "Defesa na Venda", description: "Ganhe a atenção do cliente e inicie a conversa.", image: "AssetStore/defesa.jpg",
                sections: [
                    { isSectionTitle: true, title: "PREPARAÇÃO DA DEFESA" },
                    { isPreparation: true, title: '👤 PREPARAÇÃO DO PERSONAGEM', image: 'AssetStore/foto_2.jpg',
                      goal: 'É fazer você se destacar e parecer ser um cara experiente na cidade. ⭐',
                      actions: ['Personagem bem vestido 👔', 'Carros exclusivos 🏎️', 'Armas diferenciadas 🔫', 'Pets raros 🐅'],
                      result: 'O cliente percebe que você não é comum. 🤝'
                    },
                    { title: "🛡️ O Que é Defesa?", items: [
                        '<div class="aligned-list-item"><strong>🤝</strong> <span>Defesa é criar conexão para ganhar atenção.</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>👉</strong> <span>É o primeiro contato.</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>👉</strong> <span>É onde você conquista o direito de continuar falando.</span></div>'
                    ], warning: "Sem conexão ➔ Sem atenção ➔ Sem venda. 🛑" },
                    { title: "💬 Como Entrar (Exemplos)", items: [
                        '👋 “Fala irmão, tranquilo?”', '---', '❓ “Qual teu nome?”', '---', '👀 “Vi você agora… curti teu estilo.”', '---', '🏎️ “Esse carro é muito foda hein!”', '---', '🏙️ “O que você gosta de fazer na city?”'
                    ], footer: "<strong>💡 Dica:</strong> Apresentação com nome gera confiança. 🤝" }
                ]
            },
            'meio': {
                id: 'meio', title: "Meio de Campo", description: "Entender a necessidade através de perguntas-chave.", image: "AssetStore/meio-campo.jpg",
                sections: [
                    { title: "📢 Sinais de Abertura (Ataque!)", items: ['💲 Pergunta o preço 💵', '📦 Pede detalhes 🔍', '🛒 Pergunta o que você vende 🛍️', '👤 Pergunta se é vendedor 💼'], footer: "💡 Identificou isso? Comece o ATAQUE. ⚔️" },
                    { title: "🧠 Perguntas que Quebram o Padrão", items: ['🎓 “Tu já tá desenrolando bem na fac?”', '---', '⛏️ “Já tá farmando bem aí?”', '---', '💸 “Já tá conseguindo fazer dinheiro?”'] }
                ]
            },
            'ataque': {
                id: 'ataque', title: "Ataque na Venda", description: "Transforme a dor em solução e crie urgência para fechar.", image: "AssetStore/ataque.jpg",
                sections: [
                    { title: "🚀 Exemplo Forte", items: [
                        '<div class="aligned-list-item"><strong>🔥 Dor:</strong> <span>“Do jeito que você está, vai evoluir bem mais devagar.” 🐢</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>✨ Desejo:</strong> <span>“Com esse VIP, você entra em outro nível.” 🌟</span></div>', 
                        '---',
                        '<div class="aligned-list-item"><strong>⚡ Urgência:</strong> <span>“Pegando agora, você aproveita essa condição.” ⏳</span></div>'
                    ], footer: '<strong>💡 Dica:</strong> Sem dor não liga. Sem desejo não quer. Sem urgência deixa pra depois. 🎯' }
                ]
            },
            'fechamento': {
                id: 'fechamento', title: "Fechamento", description: "Conduz valor e transforma interesse em decisão.", image: "AssetStore/fechamento.jpg",
                sections: [
                    { title: '💸 ANCORAGEM DE VALOR', items: ['🗣️ “Se montasse separado, passaria de R$XXX…”', '---', '🚀 “Aqui você economiza e já sai na frente.”'], footer: '<strong>💡 Dica:</strong> Não fale de preço primeiro, foque no custo de não escolher. 🧠' },
                    { isFull: true, title: '🎯 FECHAMENTO DIRETO (MATADOR)', items: [
                        '<div class="aligned-list-item"><strong>👉</strong> <span>O ponto não é como você paga — é o nível que você decide entrar. 🏙️</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>👉</strong> <span>Forma de pagamento nunca travou ninguém. O que trava é pensar enquanto outros evoluem. 🚀</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>👉</strong> <span>Se faz sentido crescer mais rápido, então já está resolvido. ✅</span></div>',
                        '---',
                        '<div class="aligned-list-item"><strong>🔥</strong> <span>“Já posso te mandar o Pix ou link e deixamos ativo agora?”</span></div>'
                    ]}
                ]
            },
            'posvenda': {
                id: 'posvenda', title: "Pós Venda", description: "Pós-venda bem feito transforma cliente em recorrência.", image: "AssetStore/pos_venda.jpg",
                sections: [{ title: "🛡️ CONFIRMAÇÃO", items: ['✔️ “Já deixei tudo certo para você.”', '✔️ “Qualquer dúvida me chama.”'] }]
            }
        }
    };
    res.json({ data });
};