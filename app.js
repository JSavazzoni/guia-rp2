const DataAccess = {
    getCategories: () => [
        { id: 'olheiro', title: '🕵️‍♂️ Olheiro', desc: 'Entender qual o melhor momento pra abordar o cliente.' },
        { id: 'defesa', title: '🛡️ Defesa', desc: 'Ter a atenção do cliente pra você.' },
        { id: 'meio', title: '⚽ Meio de Campo', desc: 'Terceiro passo, entender a necessidade do cliente através de perguntas chaves.' },
        { id: 'ataque', title: '⚔️ Ataque', desc: 'Ter a solução para a necessidade do cliente e fazer a negociação do produto gerando desejo e urgência.' },
        { id: 'fechamento', title: '🤝 Fechamento', desc: 'Apresentar as formas de pagamento: Cartão de Crédito/Pix.' },
        { id: 'posvenda', title: '📦 Pós Venda', desc: 'Ir até o cliente ver se os itens chegaram corretamente, tunar os carros.' }
    ],

    getCategoryContent: (categoryId) => {
        const database = {
            'olheiro': {
                id: 'olheiro',
                title: "Manual de Vendas",
                description: "Olheiro é a primeira etapa da venda. Antes de abordar o player, observa ele, o que está fazendo, o assunto e se é o momento certo.",
                image: "gemini.jpg",
                sections: [
                    { isQuote: true, title: "⭐ A Regra de Ouro", content: "“Quem tem visão enxerga a venda antes dela existir.”" },
                    { title: "🎯 Objetivo do Olheiro", items: ["🗣️ O cliente está disponível para conversar?", "🧠 Você vai conseguir a atenção dele?", "💰 Existe oportunidade de venda naquele momento?"] },
                    { title: "⏱️ Tempo de Observação", items: ["⏳ Mínimo: 2 minutos.", "⏰ Ideal: 3 a 5 minutos."], warning: "Abordar no momento errado você vai perder tempo." },
                    { title: "🚶‍♂️ Comportamento do Cliente", items: ["🗺️ Está perdido?", "👣 Está andando sem rumo?", "🛠️ Está testando coisas?", "🧍‍♂️ Está parado?"], footer: "💡 Normalmente cliente em momento tranquilo tem chance de te dar atenção." },
                    { title: "✅ Sinais de Abertura", items: ["👤 Cliente sozinho.", "🧭 Cliente perdido / sem direção.", "👀 Cliente olhando ao redor.", "🛋️ Cliente parado.", "🗣️ Cliente em resenha."] },
                    { isError: true, title: "❌ Erros do Vendedor", items: ["🏃‍♂️💨 Abordar instantaneamente sem observar.", "🛑 Interromper o cliente quando ele não quer.", "👨‍👩‍👧‍👦 Tentar vender para cliente ou grupo fechado ou em ação."] }
                ],
                videoCategories: [
                    { title: "Adicional em Vídeo", videos: [
                        { label: "EXEMPLO DE NÃO ATENDER", url: "https://drive.google.com/file/d/1lLK7Rl9aun4TBVSjbVVRYapQO4VOIZfc/preview", color: "#ef4444" },
                        { label: "EXEMPLO DE COMO ATENDER", url: "https://drive.google.com/file/d/1nmAOR_S0mm8jWb5VchfBfp2Fo33kiRaq/preview", color: "#22c55e" }
                    ]}
                ]
            },
            'defesa': {
                id: 'defesa',
                title: "Defesa na Venda",
                description: "A defesa é a segunda etapa da venda: quando você ganha a atenção do cliente e abre a conversa.",
                image: "defesa.jpg",
                sections: [
                    { isQuote: true, title: "⭐ A Regra de Ouro", content: "“Se você não tem a atenção do cliente, você não tem venda.” 🚀" },
                    { title: "🛡️ O Que é Defesa?", items: ["Defesa é criar conexão com o cliente pra ganhar atenção e iniciar a conversa."], warning: "Sem conexão ➔ sem atenção ➔ sem venda." },
                    { title: "🎯 Objetivo da Defesa", items: ["Fazer o cliente parar.", "Ganhar alguns segundos de atenção.", "Iniciar uma conversa natural."], footer: "💡 Aqui começa a venda de verdade." },
                    { title: "✅ O Que FAZER", items: ["Falar como pessoa, não como vendedor.", "Usar perguntas pra entender o cliente.", "Entrar na realidade dele (fac, dinheiro, evolução).", "Ser leve, direto e natural.", "Criar curiosidade antes de vender."], footer: "💡 Primeiro conecta, depois vende." },
                    { title: "💬 Como Entrar (Exemplos)", items: ["“Tu já tá desenrolando bem na fac ou ainda tá travado?”", "“Tá conseguindo farmar bem aí ou tá lento ainda?”", "“Já tá forte ou ainda tá começando a crescer?”"], footer: "💡 Pergunta certa = cliente fala." },
                    { isError: true, title: "❌ O Que NÃO Fazer", items: ["Chegar vendendo direto (“quer vip?”).", "Parecer robô ou script decorado.", "Interromper o cliente em momento errado.", "Falar demais e não ouvir.", "Ignorar o que o cliente respondeu.", "Forçar venda sem entender a necessidade."], warning: "Isso quebra atenção na hora." }
                ],
                videoCategories: [
                    { title: "Exemplos Certos", videos: [
                        { label: "EXEMPLO CERTO 01", url: "https://drive.google.com/file/d/1hUcdndUJgfJ-48VH3aJGXK4U5tQqujUk/preview", color: "#22c55e" },
                        { label: "EXEMPLO CERTO 02", url: "https://drive.google.com/file/d/1cxYETQv2DT2FHHBG8l9WX34cQVn46NCX/preview", color: "#22c55e" }
                    ]},
                    { title: "Exemplos Errados", videos: [
                        { label: "EXEMPLO ERRADO 01", url: "https://drive.google.com/file/d/1_wNaLwQWRViDm4-GBs-zs_8o2RaNVblm/preview", color: "#ef4444" },
                        { label: "EXEMPLO ERRADO 02", url: "https://drive.google.com/file/d/1JSk9M-WcYazSJhD6Jz_KZWe2jlxmB9tw/preview", color: "#ef4444" }
                    ]}
                ]
            },
            'meio': {
                id: 'meio',
                title: "Meio de Campo",
                description: "Terceiro passo, entender a necessidade do cliente através de perguntas chaves.",
                image: "meio-campo.jpg",
                sections: [
                    { isQuote: true, title: "⭐ Regra de Ouro — Meio de Campo", content: "“Quem conduz bem, vende fácil.”" },
                    { title: "🎯 Objetivo Meio de Campo", items: ["Terceiro passo, entender a necessidade do cliente através de perguntas chaves.", "Conduzir o cliente.", "Entender o que oferecer pro cliente.", "Conectar com a realidade dele.", "Preparar para oferecer."] },
                    { title: "🔍 Indícios de Interesse", items: ["✅ Responde rápido.", "🗣️ Fala mais que você.", "❓ Faz perguntas.", "📈 Engaja na conversa."] },
                    { title: "🎯 Foco da Conversa", items: ["Gerar interesse.", "Passar confiança.", "Dar direção ao cliente.", "---", "Não deixar o cliente desviar do assunto principal.", "Não ficar apenas conversando sem intenção de venda.", "Sempre conecte a conversa com a solução da venda."], warning: "Se o cliente dispersar ou você perder o foco, a venda esfria." },
                    { title: "⚠️ Ponto Mais Importante", items: ["Identificar a abertura.", "Puxar a dor do cliente.", "Mostrar o caminho."], warning: "O maior erro do vendedor é não perceber quando já pode vender (o tempo certo)." },
                    { title: "📢 Sinais de Abertura (Ataque!)", items: ["Pergunta preço.", "Pede detalhes sobre o produto.", "Pergunta o que você vende.", "Pergunta se você é vendedor."], footer: "🔥 Identificou isso? Pare de enrolar e comece o ATAQUE." },
                    { title: "🧠 Perguntas que Quebram o Padrão", items: ["“Tu já tá desenrolando bem na fac ou ainda tá travado?”", "“Já tá conseguindo farmar bem aí ou tá difícil evoluir?”", "“Já tá com estrutura boa ou ainda tá no básico?”"], footer: "💡 Objetivo: fazer ele expor a realidade dele." },
                    { isError: true, title: "❌ Erros de Direcionamento", items: ["Perder o foco da conversa.", "Deixar o cliente mudar totalmente o assunto.", "Responder tudo sem puxar de volta pro objetivo.", "Ficar só “batendo papo” sem avançar.", "Não conectar a dor com a solução."] }
                ],
                videoCategories: [
                    { title: "Exemplos Errados", videos: [
                        { label: "EXEMPLO ERRADO 01", url: "https://drive.google.com/file/d/1eW3zORlLH6M20KGBbKCQ1BSR1QWh5a10/preview", color: "#ef4444" }
                    ]}
                ]
            },
            'ataque': {
                id: 'ataque',
                title: "Ataque",
                description: "Ter a solução para a necessidade do cliente e fazer a negociação do produto gerando desejo e urgência.",
                image: "gemini.jpg",
                sections: [
                    { isQuote: true, title: "⭐ A Regra de Ouro", content: "“O desejo faz o cliente querer. A urgência faz o cliente agir agora.”" },
                    { title: "🎯 Posicionamento de Solução", items: ["Apresentar a solução definitiva para a dor do cliente.", "Garantir que a solução encaixe perfeitamente no que foi discutido no Meio de Campo."] },
                    { title: "⚡ Geração de Desejo e Urgência", items: ["Fazer a negociação destacando a exclusividade do produto.", "Utilizar gatilhos mentais para criar o desejo de posse.", "Gerar senso de urgência para fechamento rápido."], warning: "Não demonstre desespero para vender, demonstre que a oportunidade é única." }
                ]
            },
            'fechamento': {
                id: 'fechamento',
                title: "Fechamento",
                description: "Apresentar as formas de pagamento: Cartão de Crédito/Pix.",
                image: "gemini.jpg",
                sections: [
                    { isQuote: true, title: "⭐ A Regra de Ouro", content: "“A venda só termina quando a transação é concluída com clareza.”" },
                    { title: "💳 Formas de Pagamento", items: ["Cartão de Crédito.", "Pix (Transferência imediata)."], footer: "💡 Facilite ao máximo o processo de pagamento para não perder a venda no último segundo." },
                    { title: "🎯 Finalização", items: ["Garantir a concordância total do cliente com os valores e termos.", "Finalizar a transação no sistema de forma rápida e segura."] }
                ]
            },
            'posvenda': {
                id: 'posvenda',
                title: "Pós Venda",
                description: "Ir até o cliente ver se os itens chegaram corretamente, tunar os carros.",
                image: "gemini.jpg",
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
    state: { currentView: 'menu', currentCategoryId: null },
    navigateToMenu: () => { BusinessLogic.state.currentView = 'menu'; Controller.render(); },
    navigateToCategory: (id) => { BusinessLogic.state.currentView = 'category'; BusinessLogic.state.currentCategoryId = id; window.scrollTo(0,0); Controller.render(); }
};

const Controller = {
    render: () => {
        const root = document.getElementById('applicationRoot');
        if (BusinessLogic.state.currentView === 'menu') {
            root.innerHTML = Controller.templates.menu();
        } else {
            const data = DataAccess.getCategoryContent(BusinessLogic.state.currentCategoryId);
            root.innerHTML = data ? Controller.templates.category(data) : Controller.templates.fallback();
        }
    },

    templates: {
        menu: () => `
            <div class="overlay"></div>
            <div class="funnelContainer">
                ${DataAccess.getCategories().map(cat => `
                    <div class="funnelStep step${cat.id.charAt(0).toUpperCase() + cat.id.slice(1)}" onclick="BusinessLogic.navigateToCategory('${cat.id}')">
                        <span class="funnelStepTitle">${cat.title}</span>
                        <span class="funnelStepDesc">${cat.desc}</span>
                    </div>
                `).join('')}
            </div>`,

        category: (data) => `
            <div class="overlay"></div>
            <div class="layoutContainer">
                <aside class="sidebarNavigation">
                    <button class="backButton" onclick="BusinessLogic.navigateToMenu()">⬅ Menu Inicial</button>
                    <nav class="navigationMenu">
                        ${DataAccess.getCategories().map(cat => `
                            <div class="navItem ${data.id === cat.id ? 'navItemActive' : ''}" onclick="BusinessLogic.navigateToCategory('${cat.id}')">${cat.title}</div>
                        `).join('')}
                    </nav>
                </aside>
                <main class="mainWorkspace">
                    <header class="headerContainer">
                        <div class="headerTextContent">
                            <h1 class="pageTitle">${data.title}</h1>
                            <p class="pageDescription">${data.description}</p>
                        </div>
                        <div class="headerImageContainer">
                            <img src="${data.image}" alt="Header">
                        </div>
                    </header>
                    <div class="contentGrid">
                        ${data.sections.map(s => `
                            <section class="infoCard ${s.isQuote || s.isError ? 'cardSpanFull' : ''} ${s.isQuote ? 'quoteCard' : ''} ${s.isError ? 'errorCard' : ''}">
                                <h2>${s.title}</h2>
                                ${s.content ? `<p class="quoteText">${s.content}</p>` : ''}
                                ${s.subtext ? `<p style="margin-bottom: 1rem; color: #ccc; font-style: italic;">${s.subtext}</p>` : ''}
                                <ul class="dataList">
                                    ${s.items ? s.items.map(i => i === '---' ? `<li class="listDivider"></li>` : `<li>${i}</li>`).join('') : ''}
                                </ul>
                                ${s.warning ? `<div class="warningBox">${s.warning}</div>` : ''}
                                ${s.footer ? `<div class="hintBox">${s.footer}</div>` : ''}
                            </section>
                        `).join('')}
                    </div>
                    ${data.videoCategories ? data.videoCategories.map(cat => `
                        <section class="videoSection">
                            <h1 class="sectionTitle">${cat.title}</h1>
                            <div class="videosGrid">
                                ${cat.videos.map(v => `
                                    <div class="videoWrapper">
                                        <h3 class="videoLabel" style="color:${v.color}; border: 1px solid ${v.color};">${v.label}</h3>
                                        <div class="videoContainer"><iframe src="${v.url}" allow="autoplay"></iframe></div>
                                    </div>
                                `).join('')}
                            </div>
                        </section>
                    `).join('') : ''}
                </main>
            </div>`,
        fallback: () => `<div class="overlay"></div><div style="padding:5rem; text-align:center;"><h1>Conteúdo em construção...</h1><button class="backButton" onclick="BusinessLogic.navigateToMenu()">Voltar ao Funil</button></div>`
    }
};

document.addEventListener('DOMContentLoaded', Controller.render);