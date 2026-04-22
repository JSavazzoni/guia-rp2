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
                { isFull: true, title: '🎯 1. Abordagem Estratégica', items: ['<strong>🏗️ 1. Estrutura da Facção:</strong> "E aí mano, como que tá tua fac hoje?" ➔ <em style="color:var(--accent-gold); font-weight:700;">🎯 Objetivo: Mapear o terreno e entender o nível de poder atual!</em>', '<strong>🚀 2. Objetivo da Facção:</strong> "Quantos membros estão pegando ativos aí a noite? Tu quer crescer mais ainda ou tá suave como tá?" ➔ <em style="color:var(--accent-gold); font-weight:700;">🔥 Objetivo: Ativar a sede de dominância e ambição!</em>', '<strong>🚧 3. Dificuldades Atuais:</strong> "O que mais tá pegando hoje? Fac tá com muito farm aí? Tem bastante grana? Tá ganhando os eventos?" ➔ <em style="color:var(--accent-gold); font-weight:700;">🔍 Objetivo: Encontrar a dor exata onde o crescimento está travado!</em>'] },
                { isFull: true, title: '🧠 2. Gatilho Mental & Foco', items: ['“Mano, facção grande não cresce só na bala... Tem que ter estrutura aqui para as pessoas quererem ficar.”', '“Quanto mais tu fortalece tua fac, mais gente cola, mais resultado vem.”', '“Fac forte é fac organizada e com incentivo pros membros.”', '---', '🛍️ <strong>O QUE VOCÊ ESTÁ VENDENDO DE VERDADE:</strong>', '• 📈 Crescimento real da facção.', '• 💪 Poder, respeito e influência.', '• 🔥 Motivação e retenção dos membros.', '---', '🏆 <strong>Ele não quer item — ele quer uma facção dominante.</strong>'] },
                { isFull: true, isRecommendationHeader: true, title: '🛒 3. Recomendações (Foco na Facção)', items: [] },
                { title: '🏰 Estrutura Principal', items: ['<strong>VIP Facção Premium:</strong> Mais carros, baú extra e log de baú.', '✔ Mais controle para o Líder.', '✔ Facção muito mais estruturada.'] },
                { title: '💸 Economia Interna', items: ['<strong>Farm Vaquinha / Pescaria:</strong> Gera dinheiro dentro da facção.', '✔ Independência financeira total.', '✔ Menos dependência de farmar na rua.'] },
                { title: '⚙️ Farm Ativos', items: ['<strong>Produção Interna:</strong> Produção de farm direto dentro do QG.', '✔ Segurança total (não precisa sair).', '✔ Mais eficiência e produção constante.'] },
                { title: '🎁 Incentivo Membros', items: ['<strong>Sorteios VIP:</strong> Compra de VIP PVP ou VIP Ouro para a equipe.', '✔ Muito forte para motivar o grupo.', '✔ Aumenta o engajamento dos membros.'] },
                { isCenteredCard: true, title: '🎭 Identidade Visual', items: ['<strong>Personalização:</strong> Uniforme, nome e itens do QG.', '✔ Reconhecimento imediato na cidade.', '✔ Respeito visual perante rivais.'] },
                { isError: true, title: '❌ ERROS DO VENDEDOR (LÍDER)', items: ['<strong>🚫 Falar só do item:</strong> É só descrever o que o produto tem, sem explicar para que serve de verdade.', '<strong>🚫 Ignorar a facção:</strong> É falar com o líder como se ele fosse sozinho, sem considerar os membros.', '<strong>🚫 Não investigar a situação:</strong> É não fazer perguntas para entender como a facção dele está hoje.', '<strong>🚫 Não ativar ambição:</strong> É não fazer ele querer crescer, evoluir ou dominar mais.', '<strong>🚫 Não gerar urgência:</strong> É não dar motivo para ele comprar agora.'] }
            ]
        },
        'novato': {
            id: 'novato',
            shortTitle: 'Novato (Iniciante) 🔰',
            title: 'Cliente Novato (Iniciante) 🔰',
            description: 'Você está começando agora. A gente te ajuda a evoluir e ficar forte na cidade!',
            image: 'novato.jpg',
            sections: [
                { isQuote: true, title: '⭐ A Pergunta de Ouro', content: '“Tu prefere ir evoluindo na raça ou curte já dar uma acelerada no começo?” 🚀', footer: '💡 Perfeita para puxar venda sem tocar em dinheiro direto.' },
                { title: '🧩 1. Leitura do Cliente', items: ['<strong>🆕 Iniciante:</strong> Pouco tempo de cidade; Ainda não tem muitos itens; Sem vínculo forte.', '<strong>💳 Poder de Compra:</strong> Crucial. Pode variar muito conforme a vida real do cliente.', '---', '⚠️ <strong>Observação:</strong> Esse cliente ainda não valoriza a cidade — você precisa criar esse valor nele.'] },
                { title: '🎯 2. Abordagem Estratégica', items: ['<strong>🧊 1. Quebra de Gelo:</strong> "Qual teu nome mano?", "Como é que tu conheceu a cidade?" ➔ <em style="color:#aaa">Objetivo: Criar conexão real.</em>', '<strong>🎮 2. Contexto:</strong> "Já jogava RP antes ou é tua primeira vez?"', '<strong>💼 3. Forma de Ganho:</strong> Usa a pergunta de ouro ➔ <em style="color:#aaa">Entender o perfil de compra.</em>', '<strong>📍 4. Objetivo:</strong> "O que tu quer virar aqui na cidade?"'] },
                { isFull: true, title: '🧠 3. Gatilho Mental & Foco', items: ['“Mano, no começo da cidade quem começa já com vantagem cresce MUITO mais rápido...”', '“Se tu já entra estruturado, tu sai na frente de geral.”', '---', '🛍️ <strong>O QUE VOCÊ ESTÁ VENDENDO DE VERDADE:</strong>', '• 🚀 Evolução rápida.', '• ⚡ Vantagem inicial.', '• 😌 Facilidade (menos dor de cabeça).', '---', '🏁 <strong>Ele não quer ficar perdido — quer começar forte!</strong>'] }
            ]
        },
        'policial': {
            id: 'policial',
            shortTitle: 'Policial (PVP / RP) 🚓',
            title: 'Cliente Policial (PVP / RP) 🚓',
            description: 'Entenda o jogador, conecte o produto com o que ele valoriza: UTILIDADE E RECONHECIMENTO.',
            image: 'policial.jpg',
            sections: [
                { isFull: true, title: '👁️‍🗨️ 1. Leitura do Cliente', items: ['<strong>🔫 Estilo PVP:</strong> Gosta de ação, combate e destaque. Busca status em confronto. Valoriza desempenho e vantagem.', '<strong>🎭 Estilo RP:</strong> Gosta de imersão e rotina. Foco em interação e história.', '---', '⚠️ Conecte o produto com a realidade da corporação dele.'] },
                { title: '🎯 2. Abordagem Estratégica', items: ['<strong>⏳ 1. Engajamento:</strong> "Tá há quanto tempo na polícia? Tá curtindo a experiência aqui?"', '<strong>🔥 2. Estilo (PVP):</strong> "Você participa bastante de ação? Trocação com bandido?"', '<strong>🚔 3. Estilo (RP):</strong> "Ou você é mais de RP? Fica mais na DP, treinamento?"'] },
                { title: '🧠 3. Gatilhos & Foco', items: ['“Mano, tendo VIP tu acaba ganhando muita moral... A galera sempre pede carro emprestado.”', '“Suas ações te deixam conhecido como gente boa, útil — e isso pesa MUITO para subir de cargo.”', '---', '🛍️ <strong>VENDENDO DE VERDADE:</strong>', '• 🛠️ Utilidade (ferramentas, economia de tempo).', '• 🎖️ Reconhecimento (status na corporação, autoridade).'] }
            ]
        },
        'medico': {
            id: 'medico',
            shortTitle: 'Médico (RP) 👨‍⚕️',
            title: 'Cliente Médico (RP) 👨‍⚕️',
            description: 'Vender para um médico não é falar do produto. É ENTENDER, CONECTAR E GERAR VALOR REAL.',
            image: 'medico.jpg',
            sections: [
                { title: '🧩 1. Entenda o Perfil', items: ['<strong>🏥 Decisor e Líder:</strong> Responsável por decisões importantes; Lidera equipes.', '<strong>💳 Poder de Compra:</strong> Investe quando vê valor e resultado; Não compra por impulso.'] },
                { title: '🎯 2. Perguntas Inteligentes', items: ['<strong>🏢 1. Estrutura atual:</strong> "Hoje tua equipe tá mais organizada ou ainda tá meio na correria?"', '<strong>📈 2. Objetivos:</strong> "Tu quer crescer mais agora ou tá mais focado em focar focar manter?"', '<strong>🤕 3. Dores e Desafios:</strong> "O que mais tá te dando dor de cabeça hoje aí na clínica?"'] },
                { title: '🧠 3. Foco Real (O que ele busca)', items: ['“Resultados extraordinários vêm de estrutura, pessoas e processos.”', '“Aqui dentro tu não precisa ser só mais um médico... Tu pode ser referência na cidade.”', '---', '👑 <strong>STATUS + IMAGEM:</strong> Mansão top, carros de luxo e estilo marcante.'] },
                { isFull: true, title: '🛡️ 4. Lidando com Objeções', items: ['<strong>💸 "Está caro."</strong> ➔ "Entendo. Mas compara isso com o valor que isso vai gerar na tua vida e no teu nome."', '<strong>❓ "Será que isso vale a pena?"</strong> ➔ "Se tu tá se perguntando isso... É porque já viu valor. A diferença é até onde tu quer chegar."', '<strong>🤔 "Vou pensar."</strong> ➔ "Perfeito! Posso te mostrar alguns resultados rápidos que já podemos alcançar juntos?"'] }
            ]
        },
        'staff': {
            id: 'staff',
            shortTitle: 'STAFF (400H+) 🛡️',
            title: 'Cliente STAFF ou (400H+) 🛡️',
            description: 'Esse cliente já tem história. Ele não compra por precisar — ele compra para MARCAR O NOME DELE.',
            image: 'staff.jpg',
            sections: [
                { title: '👁️‍🗨️ 1. Leitura do Cliente', items: ['<strong>🎖️ Experiente:</strong> 400+ horas de cidade; Já conhece o servidor e as mecânicas.', '<strong>🤝 Consolidado:</strong> Já tem amigos, rotina dentro da cidade.', '---', '⚠️ <strong>Observação:</strong> Se for Staff, RP não faz diferença para ele, então vender itens de destaque visual é melhor.'] },
                { title: '🎯 2. Abordagem Estratégica', items: ['<strong>⏳ 1. Tempo:</strong> "E aí mano, tu já tá há mó cota aqui na cidade né?"', '<strong>🏢 2. Situação:</strong> "Já tem tua galera aí? Já tá estruturado?"', '<strong>📍 3. Posicionamento:</strong> "Mas a galera te reconhece fácil? Tipo, só de bater o olho já sabem que é você?"'] },
                { title: '🧠 3. Gatilhos & Foco', items: ['“Mano, tu já tem muita história na cidade... O certo era tu já ter uma identidade forte aqui dentro.”', '“ID muito alto acaba passando despercebido... Ninguém grava.”', '---', '🛍️ <strong>O QUE VOCÊ ESTÁ VENDENDO DE VERDADE:</strong>', '• 🎭 Identidade e presença.', '• 🏆 Reconhecimento marcado na cidade.'] },
                { isFull: true, title: '🛒 4. Recomendações de Produto', items: ['⚠️ <strong>Foco Total em Identidade:</strong> "Tu já fez tudo... Agora falta ser reconhecido."', '---', '<strong>🆔 ID Exclusivo (< 1000):</strong> Curto, marcante e respeitado.', '<strong>👕 Roupa Personalizada:</strong> Visual único e reconhecimento imediato.', '<strong>👑 VIP Lançamento:</strong> Benefícios gerais.', '<strong>🔫 Skin de Arma:</strong> Destaque visual.'] }
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
                id: 'olheiro', title: "Manual de Vendas", description: "Olheiro é a primeira etapa da venda. Antes de abordar o player, observe-o, veja o que está fazendo, o assunto e se é o momento certo.", image: "gemini.jpg",
                sections: [
                    { isQuote: true, title: "⭐ A Regra de Ouro", content: "“Quem tem visão enxerga a venda antes dela existir.”" },
                    { title: "🎯 Objetivo do Olheiro", items: ["🗣️ O cliente está disponível para conversar?", "🧠 Você vai conseguir a atenção dele?", "💰 Existe oportunidade de venda naquele momento?"] },
                    { title: "⏱️ Tempo de Observação", items: ["⏳ Mínimo: 2 minutos.", "⏰ Ideal: 3 a 5 minutos."], warning: "Abordar no momento errado fará você perder tempo." },
                    { title: "🚶‍♂️ Comportamento do Cliente", items: ["🗺️ Está perdido?", "👣 Está andando sem rumo?", "🛠️ Está testando mecânicas?", "🧍‍♂️ Está parado?", "🗣️ Cliente em resenha."], footer: "💡 Normalmente, clientes em momento tranquilo têm mais chance de dar atenção." },
                    { title: "✅ Sinais de Abertura", items: ["👤 Cliente sozinho.", "🧭 Cliente perdido / sem direção.", "👀 Cliente olhando ao redor.", "🛋️ Cliente parado.", "🗣️ Cliente em resenha."] },
                    { isError: true, title: "❌ Erros do Vendedor", items: ["🏃‍♂️💨 Abordar instantaneamente sem observar.", "🛑 Interromper o cliente quando ele não quer.", "👨‍👩‍👧‍👦 Tentar vender para cliente ou grupo fechado em ação."] }
                ],
                videoCategories: [{ title: "Adicional em Vídeo", videos: [{ label: "EXEMPLO DE COMO ATENDER", url: "https://drive.google.com/file/d/1nmAOR_S0mm8jWb5VchfBfp2Fo33kiRaq/preview", color: "#22c55e" }, { label: "EXEMPLO DE NÃO ATENDER", url: "https://drive.google.com/file/d/1lLK7Rl9aun4TBVSjbVVRYapQO4VOIZfc/preview", color: "#ef4444" }]}]
            },
            'defesa': {
                id: 'defesa', title: "Defesa na Venda", description: "A defesa é a segunda etapa da venda: quando você ganha a atenção do cliente e abre a conversa.", image: "defesa.jpg",
                sections: [
                    { isQuote: true, title: "⭐ A Regra de Ouro", content: "“Se você não tem a atenção do cliente, você não tem venda.” 🚀" },
                    { title: "🛡️ O Que é Defesa?", items: ["🤝 Defesa é criar conexão com o cliente para ganhar atenção e iniciar a conversa."], warning: "Sem conexão ➔ Sem atenção ➔ Sem venda." },
                    { title: "🎯 Objetivo da Defesa", items: ["🛑 Fazer o cliente parar.", "⏳ Ganhar alguns segundos de atenção.", "🗣️ Iniciar uma conversa natural."], footer: "💡 Aqui começa a venda de verdade." },
                    { title: "✅ O Que FAZER", items: ["👤 Falar como pessoa, não como vendedor.", "❓ Usar perguntas para entender o cliente.", "🌍 Entrar na realidade dele (faculdade, dinheiro, evolução).", "🍃 Ser leve, direto e natural.", "🤔 Criar curiosidade antes de vender."], footer: "💡 Primeiro conecta, depois vende." },
                    { title: "💬 Como Entrar (Exemplos)", items: ["🎓 “Tu já tá desenrolando bem na fac ou ainda tá travado?”", "💰 “Tá conseguindo farmar bem aí ou tá lento ainda?”", "💪 “Já tá forte ou ainda tá começando a crescer?”"], footer: "💡 Pergunta certa = Cliente fala." },
                    { isError: true, title: "❌ O Que NÃO Fazer", items: ["🏃‍♂️ Chegar vendendo direto (“Quer VIP?”).", "🤖 Parecer robô ou script decorado.", "🛑 Interromper o cliente em um momento errado.", "🤐 Falar demais e não ouvir.", "🙈 Ignorar o que o cliente respondeu.", "🔨 Forçar a venda sem entender a necessidade."], warning: "Isso quebra a atenção na hora." }
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
                    { title: "🎯 Objetivo Meio de Campo", items: ["🗣️ Conduzir o cliente fazendo perguntas chaves.", "🧠 Entender o que oferecer para o cliente.", "🤝 Conectar com a realidade dele.", "📦 Preparar para oferecer."] },
                    { title: "🔍 Indícios de Interesse", items: ["✅ Responde rápido.", "🗣️ Fala mais que você.", "❓ Faz perguntas.", "📈 Engaja na conversa."] },
                    { title: "🎯 Foco da Conversa", items: ["🔥 Gerar interesse.", "🛡️ Passar confiança.", "🧭 Dar direção ao cliente.", "---", "🚫 Não deixar o cliente desviar do assunto principal.", "⏳ Não ficar apenas conversando sem intenção de venda.", "🔗 Sempre conecte a conversa com a solução da venda."], warning: "Se o cliente dispersar ou você perder o foco, a venda esfria." },
                    { title: "📢 Sinais de Abertura (Ataque!)", items: ["💲 Pergunta o preço.", "📦 Pede detalhes sobre o produto.", "🛒 Pergunta o que você vende.", "👤 Pergunta se você é vendedor."], footer: "🔥 Identificou isso? Pare de enrolar e comece o ATAQUE." },
                    { title: "⚠️ Ponto Mais Importante", items: ["👀 Identificar a abertura.", "🎣 Encontrar a dor do cliente.", "🗺️ Mostrar o caminho, falando de algum produto."], warning: "O maior erro do vendedor é não perceber quando já pode vender (o tempo certo)." },
                    { title: "🧠 Perguntas que Quebram o Padrão", items: ["🎓 “Tu já tá desenrolando bem na fac ou ainda tá travado?”", "⛏️ “Já tá conseguindo farmar bem aí ou tá difícil evoluir?”", "💸 “Já tá conseguindo fazer dinheiro ou tá lento ainda?”"] },
                    { isError: true, title: "❌ Erros de Direcionamento", items: ["🌪️ Perder o foco da conversa.", "🔀 Deixar o cliente mudar totalmente o assunto.", "🗣️ Responder tudo sem puxar de volta para o objetivo.", "☕ Ficar só “batendo papo” sem avançar.", "🔌 Não conectar a dor com a solução."], footer: "💡 <strong>Dor</strong> = O motivo emocional ou prático que faz o cliente querer comprar.<br>💡 <strong>Gerar dor</strong> = Fazer ele perceber que precisa daquilo ou que vale muito a pena ter aquilo." }
                ],
                videoCategories: [{ title: "Exemplos na Prática", videos: [{ label: "EXEMPLO CERTO", url: "https://drive.google.com/file/d/1XkFB2k2B9SfmVVZMYzBXF3dotWcL8xeo/preview", color: "#22c55e" }, { label: "EXEMPLO ERRADO", url: "https://drive.google.com/file/d/1eW3zORlLH6M20KGBbKCQ1BSR1QWh5a10/preview", color: "#ef4444" }]}]
            },
            'ataque': {
                id: 'ataque', title: "Ataque na Venda", description: "O ataque é a quarta etapa da venda: é o momento de transformar a dor em solução, gerar desejo e criar urgência para fechar.", image: "ataque.jpg",
                sections: [
                    { isQuote: true, title: "⭐ Regra de Ouro", content: "“Um bom ataque é aquele que não empurra produto, resolve o problema do cliente.”" },
                    { title: "🧠 Conceito: Dor, Desejo e Urgência", items: ["⚖️ Venda forte é o equilíbrio entre:", "<div style='width: 100%; text-align: center;'>🎯 <strong>Dor + Desejo + Urgência</strong></div>", "---", "🧊 Sem dor ➔ Não conecta.", "😴 Sem desejo ➔ Não engaja.", "🛑 Sem urgência ➔ Não fecha."] },
                    { title: "⚙️ Como Funciona na Prática", items: ["🔗 A venda acontece quando você conecta os três pilares:", "1️⃣ Faz ele sentir o problema (Dor).", "2️⃣ Mostra o que ele pode ganhar (Desejo).", "3️⃣ Dá um motivo para agir agora (Urgência)."] },
                    { title: "🚀 Exemplo Forte (Pronto para Uso)", items: ["🔥 <strong>Dor:</strong> “Do jeito que você está, você vai evoluir bem mais devagar.”", "✨ <strong>Desejo:</strong> “Com esse VIP, você já entra em outro nível dentro da cidade.”", "⚡ <strong>Urgência:</strong> “E pegando agora, você aproveita essa condição antes que acabe.”"] },
                    { title: "🔥 Dor (O Problema)", items: ["🤔 A dor não é inventar necessidade.", "🔍 Identificar ou despertar algo que já faz sentido para o cliente.", "🚫 Você não cria mentira. Você evidencia um incômodo, uma falta ou uma dificuldade.", "---", "🐢 Está evoluindo devagar.", "👻 Está sem destaque na cidade.", "🐌 Está ficando para trás.", "💸 Está gastando mais do que deveria."] },
                    { title: "✨ Desejo (O que ele quer conquistar)", items: ["🏆 Aqui é onde você ganha o cliente. Não basta mostrar o problema — você precisa mostrar o benefício.", "💭 Você faz ele imaginar o nível que ele pode alcançar e a vantagem sobre outros players.", "---", "🚀 Evoluir mais rápido.", "👑 Ter mais presença e respeito.", "🥇 Ter vantagem sobre outros players.", "🏰 Entrar já estruturado."] },
                    { title: "⚡ Urgência (O Gatilho)", items: ["⏳ Sem urgência, não tem fechamento. O cliente até quer… mas deixa para depois.", "⏰ Você cria um motivo para ele agir agora (condição limitada ou oportunidade).", "---", "🏃‍♂️ “Essa condição é só agora.”", "📈 “Depois você vai pagar mais caro.”", "🏁 “Quem pega agora sai na frente.”"] },
                    { isError: true, title: "❌ Erros no Ataque", items: ["🎯 <strong>Focar demais na dor:</strong> Pode parecer pressão ou até manipulação se exagerar.", "🧩 <strong>Desejo genérico:</strong> “Vantagem” and “presença” sem contexto perdem força.", "⏱️ <strong>Urgência forçada:</strong> Se não for real, o cliente sente e você perde a confiança.", "🤖 <strong>Sequência robótica:</strong> Ficar sempre no automático soa mecânico.", "👥 <strong>Não adaptar ao cliente:</strong> Usar o mesmo discurso para todo mundo diminui a sua conversão."] }
                ]
            },
            'fechamento': {
                id: 'fechamento', title: "Fechamento", description: "Apresentar as formas de pagamento: Cartão de Crédito/Pix.", image: "gemini.jpg",
                sections: [
                    { isQuote: true, title: "⭐ A Regra de Ouro", content: "“A venda só termina quando a transação é concluída com clareza.”" },
                    { title: "💳 Formas de Pagamento", items: ["Cartão de Crédito.", "Pix (Transferência imediata)."], footer: "💡 Facilite ao máximo o processo de pagamento para não perder a venda no último segundo." },
                    { title: "🎯 Finalização", items: ["Garantir a concordância total do cliente com os valores e termos.", "Finalizar a transação no sistema de forma rápida e segura."] }
                ]
            },
            'posvenda': {
                id: 'posvenda', title: "Pós Venda", description: "Ir até o cliente ver se os itens chegaram corretamente, tunar os carros.", image: "gemini.jpg",
                sections: [
                    { isQuote: true, title: "⭐ A Regra de Ouro", content: "“Um cliente bem atendido e sem dúvidas é a sua melhor propaganda.” 🤝" },
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
                .funnelStepTitle { font-size: 1.15rem !important; font-weight: 800; }
                .funnelStepDesc { font-size: 0.9rem !important; line-height: 1.4; text-wrap: balance; }
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
                    .sidebarNavigation { width: 320px !important; flex-shrink: 0; }
                    .mainWorkspace { padding: 2rem 12% !important; flex-grow: 1; max-width: calc(100vw - 320px); }
                    .pageTitle { font-size: 1.7rem !important; }
                    .pageDescription { font-size: 0.95rem !important; line-height: 1.5; }
                    .infoCard h2 { font-size: 1.15rem !important; }
                    .dataList { display: block; width: 100%; position: relative; }
                    .dataList li { font-size: 0.86rem !important; line-height: 1.5; margin-bottom: 6px; white-space: nowrap; width: fit-content; position: relative; padding-right: 45px !important; }
                    .infoCard { overflow-x: auto; scrollbar-width: thin; scrollbar-color: rgba(212,175,55,0.3) transparent; }
                    .navItem { font-size: 1rem !important; white-space: nowrap; padding: 1rem 1.4rem !important; font-weight: 700; border-bottom: 1px solid rgba(255,255,255,0.05); }
                    .hintBox, .warningBox { font-size: 0.82rem !important; padding: 0.8rem !important; }
                    .quoteText { font-size: 1rem !important; font-style: italic; }
                    .videoLabel { font-size: 0.8rem !important; padding: 0.35rem !important; }
                    .topHeadingFree { grid-column: 1 / -1; text-align: center; font-size: 1.45rem; color: var(--accent-gold); font-weight: 800; margin: 1.2rem 0 1rem 0; text-transform: uppercase; letter-spacing: 1px; }
                    .listDivider { margin: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1); list-style: none; width: 100%; }
                    .centeredRecommendationCard { grid-column: 1 / -1 !important; justify-self: center !important; width: 100% !important; max-width: 500px !important; margin: 0 auto !important; }
                </style>
                <div class="layoutContainer">
                    <aside class="sidebarNavigation">
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
                                                     style="font-size: 0.9rem !important; padding: 0.7rem 1.2rem !important; text-transform: none; border-bottom: none;" 
                                                     onclick="BusinessLogic.navigateToProfile('${p.id}')">👤 ${p.shortTitle}</div>
                                            `).join('')}
                                        </div>` : ''}
                                `;
                            }).join('')}
                        </nav>
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
                                if (s.isSectionTitle) {
                                    return `<div class="topHeadingFree">${s.title}</div>`;
                                }
                                if (s.isRecommendationHeader) {
                                    return `<div class="cardSpanFull" style="margin-top: 1rem;"><h2 style="font-size: 1.3rem; color: var(--accent-gold); text-align: center; width: 100%;">${s.title}</h2></div>`;
                                }
                                return `
                                <section class="infoCard ${s.isQuote || s.isError || s.isFull ? 'cardSpanFull' : ''} ${s.isQuote ? 'quoteCard' : ''} ${s.isError ? 'errorCard' : ''} ${s.isCenteredCard ? 'centeredRecommendationCard' : ''}">
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
                            <section class="videoSection">
                                <h1 class="sectionTitle" style="font-size: 1.25rem;">${cat.title}</h1>
                                <div class="videosGrid">${cat.videos.map(v => `<div class="videoWrapper"><h3 class="videoLabel" style="color:${v.color}; border: 1px solid ${v.color};">${v.label}</h3><div class="videoContainer"><iframe src="${v.url}" allow="autoplay"></iframe></div></div>`).join('')}</div>
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