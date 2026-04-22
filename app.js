const DataAccess = {
    getCategoryContent: (categoryId) => {
        const database = {
            'olheiro': {
                id: 'olheiro',
                title: "Manual de Vendas",
                menuTitle: "🕵️‍♂️ Olheiro",
                description: "Olheiro é a primeira etapa da venda. Antes de abordar o player, observa ele, o que está fazendo, o assunto e se é o momento certo.",
                image: "gemini.jpg",
                sections: [
                    { isQuote: true, title: "⭐ A Regra de Ouro", content: "“Quem tem visao enxerga a venda antes dela existir.”" },
                    { 
                        title: "🎯 Objetivo do Olheiro", 
                        subtext: "Se faça essas perguntas e pense se é o momento de abordar:", 
                        items: ["🗣️ O cliente está disponível para conversar?", "🧠 Você vai conseguir a atenção dele?", "💰 Existe oportunidade de venda naquele momento?"] 
                    },
                    { 
                        title: "⏱️ Tempo de Observação", 
                        items: ["⏳ Mínimo: 2 minutos", "⏰ Ideal: 3 a 5 minutos"], 
                        warning: "Abordar no momento errado você vai perder tempo" 
                    },
                    { 
                        title: "🚶‍♂️ Comportamento do Cliente", 
                        items: ["🗺️ Está perdido?", "👣 Está andando sem rumo?", "🛠️ Está testando coisas?", "🧍‍♂️ Está parado?"], 
                        footer: "💡 Normalmente cliente em momento tranquilo tem chance de te dar atenção" 
                    },
                    { 
                        title: "✅ Sinais de Abertura", 
                        items: ["👤 Cliente sozinho", "🧭 Cliente perdido / sem direção", "👀 Cliente olhando ao redor", "🛋️ Cliente parado", "🗣️ Cliente em resenha"] 
                    },
                    { 
                        isError: true, 
                        title: "❌ Erros do Vendedor", 
                        items: ["🏃‍♂️💨 Abordar instantaneamente sem observar", "🛑 Interromper o cliente quando ele não quer", "👨‍👩‍👧‍👦 Tentar vender para cliente ou grupo fechado ou em ação."] 
                    }
                ],
                videos: [
                    { label: "EXEMPLO DE NÃO ATENDER", url: "https://drive.google.com/file/d/1lLK7Rl9aun4TBVSjbVVRYapQO4VOIZfc/preview", color: "#ef4444" },
                    { label: "EXEMPLO DE COMO ATENDER", url: "https://drive.google.com/file/d/1nmAOR_S0mm8jWb5VchfBfp2Fo33kiRaq/preview", color: "#22c55e" }
                ]
            },
            'defesa': {
                id: 'defesa',
                title: "Defesa na Venda",
                menuTitle: "🛡️ Defesa",
                description: "A defesa é a segunda etapa da venda: quando você ganha a atenção do cliente e abre a conversa.",
                image: "defesa.jpg",
                sections: [
                    { 
                        isQuote: true, 
                        title: "⭐ A Regra de Ouro", 
                        content: "“Se você não tem a atenção do cliente, você não tem venda.” 🚀" 
                    },
                    { 
                        title: "🛡️ O Que é Defesa?", 
                        items: ["Defesa é criar conexão com o cliente pra ganhar atenção e iniciar a conversa."],
                        warning: "Sem conexão → sem atenção → sem venda"
                    },
                    { 
                        title: "🎯 Objetivo da Defesa", 
                        items: ["Fazer o cliente parar", "Ganhar alguns segundos de atenção", "Iniciar uma conversa natural"],
                        footer: "💡 Aqui começa a venda de verdade"
                    },
                    { 
                        title: "✅ O Que FAZER", 
                        items: ["Falar como pessoa, não como vendedor", "Usar perguntas pra entender o cliente", "Entrar na realidade dele (fac, dinheiro, evolução)", "Ser leve, direto e natural", "Criar curiosidade antes de vender"],
                        footer: "💡 Primeiro conecta, depois vende"
                    },
                    { 
                        title: "💬 Como Entrar (Exemplos)", 
                        items: ["“Tu já tá desenrolando bem na fac ou ainda tá travado?”", "“tá conseguindo farmar bem aí ou tá lento ainda?”", "“já tá forte ou ainda tá começando a crescer?”"],
                        footer: "💡 Pergunta certa = cliente fala"
                    },
                    { 
                        isError: true, 
                        title: "❌ O Que NÃO Fazer", 
                        items: ["Chegar vendendo direto (“quer vip?”)", "Parecer robô ou script decorado", "Interromper o cliente em momento errado", "Falar demais e não ouvir", "Ignorar o que o cliente respondeu", "Forçar venda sem entender a necessidade"],
                        warning: "Isso quebra atenção na hora"
                    }
                ],
                videoCategories: [
                    {
                        title: "Exemplo Errado",
                        videos: [
                            { label: "EXEMPLO ERRADO 01", url: "https://drive.google.com/file/d/1_wNaLwQWRViDm4-GBs-zs_8o2RaNVblm/preview", color: "#ef4444" },
                            { label: "EXEMPLO ERRADO 02", url: "https://drive.google.com/file/d/1JSk9M-WcYazSJhD6Jz_KZWe2jlxmB9tw/preview", color: "#ef4444" }
                        ]
                    },
                    {
                        title: "Exemplo Certo",
                        videos: [
                            { label: "EXEMPLO CERTO 01", url: "https://drive.google.com/file/d/1Aa0MMvkyzXFeUT-ww-5pNzYZei_D1Wt_/preview", color: "#22c55e" },
                            { label: "EXEMPLO CERTO 02", url: "https://drive.google.com/file/d/1cxYETQv2DT2FHHBG8l9WX34cQVn46NCX/preview", color: "#22c55e" }
                        ]
                    }
                ]
            },
            'meio': {
                id: 'meio',
                title: "Meio de Campo",
                menuTitle: "⚽ Meio de Campo",
                description: "Entender a necessidade do cliente ou fazer perguntas com intenções para criar a necessidade na cabeça dele.",
                image: "gemini.jpg",
                sections: [
                    { isQuote: true, title: "⭐ A Regra de Ouro", content: "“A necessidade não existe até que você a crie na mente do cliente.”" }
                ],
                videos: []
            },
            'ataque': {
                id: 'ataque',
                title: "Ataque",
                menuTitle: "⚔️ Ataque",
                description: "Ter a solução para a necessidade do cliente e fazer a negociação do produto gerando desejo e urgência.",
                image: "gemini.jpg",
                sections: [
                    { isQuote: true, title: "⭐ A Regra de Ouro", content: "“O desejo faz o cliente querer. A urgência faz o cliente agir agora.”" }
                ],
                videos: []
            },
            'fechamento': {
                id: 'fechamento',
                title: "Fechamento",
                menuTitle: "🤝 Fechamento",
                description: "Apresentar as formar de pagamentos, Cartão de crédito/Pix.",
                image: "gemini.jpg",
                sections: [
                    { isQuote: true, title: "⭐ A Regra de Ouro", content: "“A venda só termina quando a transação é concluída com clareza.”" }
                ],
                videos: []
            },
            'posvenda': {
                id: 'posvenda',
                title: "Pós Venda",
                menuTitle: "📦 Pós Venda",
                description: "Ir até o cliente ver se os itens chegou corretamente, tunar os carros",
                image: "gemini.jpg", 
                sections: [
                    { isQuote: true, title: "⭐ A Regra de Ouro", content: "“Um cliente bem atendido e sem dúvidas é a sua melhor propaganda.” 🤝" }
                ],
                videos: []
            }
        };
        return database[categoryId] || null;
    }
};

const BusinessLogic = {
    state: {
        currentView: 'menu',
        currentCategoryId: null
    },

    navigateToMenu: () => {
        BusinessLogic.state.currentView = 'menu';
        BusinessLogic.state.currentCategoryId = null;
        Controller.render();
    },

    navigateToCategory: (categoryId) => {
        BusinessLogic.state.currentView = 'category';
        BusinessLogic.state.currentCategoryId = categoryId;
        window.scrollTo(0, 0);
        Controller.render();
    }
};

const Controller = {
    render: () => {
        const rootElement = document.getElementById('applicationRoot');
        
        if (BusinessLogic.state.currentView === 'menu') {
            rootElement.innerHTML = Controller.templates.menu();
        } else {
            const data = DataAccess.getCategoryContent(BusinessLogic.state.currentCategoryId);
            rootElement.innerHTML = data ? Controller.templates.category(data) : Controller.templates.fallback();
        }
    },

    templates: {
        menu: () => `
            <div class="overlay"></div>
            <div class="funnelContainer">
                <div class="funnelStep stepOlheiro" onclick="BusinessLogic.navigateToCategory('olheiro')">
                    <span class="funnelStepTitle">🕵️‍♂️ Olheiro</span>
                    <span class="funnelStepDesc">Entender qual o melhor momento pra abordar o cliente</span>
                </div>
                <div class="funnelStep stepDefesa" onclick="BusinessLogic.navigateToCategory('defesa')">
                    <span class="funnelStepTitle">🛡️ Defesa</span>
                    <span class="funnelStepDesc">Ter a atenção do cliente pra você</span>
                </div>
                <div class="funnelStep stepMeio" onclick="BusinessLogic.navigateToCategory('meio')">
                    <span class="funnelStepTitle">⚽ Meio de Campo</span>
                    <span class="funnelStepDesc">Entender a necessidade do cliente ou fazer perguntas com intenções para criar a necessidade na cabeça dele</span>
                </div>
                <div class="funnelStep stepAtaque" onclick="BusinessLogic.navigateToCategory('ataque')">
                    <span class="funnelStepTitle">⚔️ Ataque</span>
                    <span class="funnelStepDesc">Ter a solução para a necessidade do cliente e fazer a negociação do produto gerando desejo e urgência</span>
                </div>
                <div class="funnelStep stepFechamento" onclick="BusinessLogic.navigateToCategory('fechamento')">
                    <span class="funnelStepTitle">🤝 Fechamento</span>
                    <span class="funnelStepDesc">Apresentar as formar de pagamentos, Cartão de crédito/Pix</span>
                </div>
                <div class="funnelStep stepPosVenda" onclick="BusinessLogic.navigateToCategory('posvenda')">
                    <span class="funnelStepTitle">📦 Pós Venda</span>
                    <span class="funnelStepDesc">Ir até o cliente ver se os itens chegou corretamente, tunar os carros</span>
                </div>
            </div>
        `,

        fallback: () => `
            <div class="overlay"></div>
            <div style="min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <h1 class="fallbackMessage">Conteúdo da categoria em construção...</h1>
                <button onclick="BusinessLogic.navigateToMenu()" class="backButton" style="margin-top: 2rem;">Voltar ao Menu</button>
            </div>
        `,

        category: (data) => `
            <div class="overlay"></div>
            <div class="layoutContainer">
                <aside class="sidebarNavigation">
                    <button class="backButton" onclick="BusinessLogic.navigateToMenu()">⬅ Voltar ao Funil</button>
                    <div class="sidebarHeader">
                        <div class="brandLogo">Santa Group</div>
                    </div>
                    <nav class="navigationMenu">
                        <div class="navigationItem">${data.menuTitle}</div>
                    </nav>
                    <div class="developerSignature">DESENVOLVIDO &lt;/VZ&gt;</div>
                </aside>

                <main class="mainWorkspace">
                    <header class="headerContainer">
                        <div class="headerTextContent">
                            <h1 class="pageTitle">${data.title}</h1>
                            <p class="pageDescription">${data.description}</p>
                        </div>
                        <div class="headerImageContainer">
                            <img src="${data.image}" alt="Header Image">
                        </div>
                    </header>

                    <div class="contentGrid">
                        ${data.sections && data.sections.length > 0 ? data.sections.map(section => {
                            if (section.isQuote) {
                                return `
                                <section class="infoCard cardSpanFull quoteCard">
                                    <h2>${section.title}</h2>
                                    <p class="quoteText">${section.content}</p>
                                </section>`;
                            }
                            return `
                            <section class="infoCard ${section.isError ? 'cardSpanFull errorCard' : ''}">
                                <h2>${section.title}</h2>
                                ${section.subtext ? `<p class="listSubtitle">${section.subtext}</p>` : ''}
                                <ul class="dataList">
                                    ${section.items.map(item => `<li>${item}</li>`).join('')}
                                </ul>
                                ${section.warning ? `<div class="warningBox">${section.warning}</div>` : ''}
                                ${section.footer ? `<div class="hintBox">${section.footer}</div>` : ''}
                            </section>`;
                        }).join('') : ''}
                    </div>

                    ${data.videoCategories ? data.videoCategories.map(cat => `
                        <section class="videoSection">
                            <h1 class="sectionTitle">${cat.title} 📺</h1>
                            <div class="videosGrid">
                                ${cat.videos.map(video => `
                                    <div class="videoWrapper">
                                        <h3 class="videoLabel" style="color:${video.color}; border: 1px solid ${video.color};">${video.label}</h3>
                                        <div class="videoContainer">
                                            <iframe src="${video.url}" allow="autoplay"></iframe>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </section>
                    `).join('') : ''}

                    ${data.videos && data.videos.length > 0 ? `
                        <section class="videoSection">
                            <h1 class="sectionTitle">Adicional em Video 📺</h1>
                            <div class="videosGrid">
                                ${data.videos.map(video => `
                                    <div class="videoWrapper">
                                        <h3 class="videoLabel" style="color:${video.color}; border: 1px solid ${video.color};">${video.label}</h3>
                                        <div class="videoContainer">
                                            <iframe src="${video.url}" allow="autoplay"></iframe>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </section>` : ''}
                </main>
            </div>
        `
    }
};

window.BusinessLogic = BusinessLogic;
document.addEventListener('DOMContentLoaded', Controller.render);