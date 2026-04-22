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
                        items: [
                            "Defesa é o momento mais importante da venda.",
                            "Não é vender.",
                            "É fazer o cliente parar e te ouvir."
                        ],
                        warning: "Se você não ganhou atenção, você já perdeu a venda."
                    },
                    { 
                        title: "🎯 Objetivo da Defesa", 
                        items: [
                            "Interromper o foco do cliente", 
                            "Fazer ele te dar atenção por alguns segundos", 
                            "Abrir espaço pra conversa"
                        ],
                        warning: "Sem isso, nada acontece."
                    },
                    { 
                        isError: true, 
                        title: "❌ O Erro que Mata Vendas", 
                        subtext: "Chegar vendendo direto (“quer vip?”, “quer comprar algo?”):",
                        items: [
                            "Isso é ignorado", 
                            "Isso parece spam", 
                            "Isso quebra o RP"
                        ] 
                    },
                    { 
                        title: "🧠 Quebre o Padrão", 
                        subtext: "Não chegue vendendo, chegue entendendo o cliente:", 
                        items: [
                            "“Tu já tá desenrolando bem na fac ou ainda tá travado?”", 
                            "“Já tá conseguindo farmar bem aí ou tá difícil evoluir?”", 
                            "“Tá conseguindo fazer dinheiro ou tá lento ainda?”", 
                            "“Já tá com estrutura boa ou ainda tá no básico?”"
                        ],
                        footer: "💡 Objetivo: fazer ele responder e expor a realidade dele"
                    },
                    { 
                        title: "👀 Crie Curiosidade", 
                        subtext: "Não venda, instigue:", 
                        items: [
                            "“Tem uma parada aqui que pouca gente usa”", 
                            "“Isso aqui muda totalmente teu desempenho na fac”", 
                            "“Tem um jeito mais rápido de evoluir aqui”"
                        ],
                        footer: "💡 Curiosidade puxa atenção"
                    },
                    { 
                        title: "⚡ Seja Rápido", 
                        subtext: "Você tem poucos segundos:", 
                        items: [
                            "Fala simples", 
                            "Fala direto", 
                            "Sem enrolação"
                        ],
                        warning: "Se demorar, ele ignora"
                    },
                    { 
                        title: "⏱️ Timing (Olheiro)", 
                        subtext: "Antes de tudo, observe:", 
                        items: [
                            "Tá em missão? Não aborda", 
                            "Tá conversando? Não entra", 
                            "Tá sozinho? Melhor momento"
                        ],
                        footer: "💡 Vendedor bom não interrompe errado"
                    },
                    { 
                        title: "💬 Frases Prontas", 
                        subtext: "Alta Conversão:",
                        items: [
                            "“Rapidão, posso te fazer uma pergunta?”", 
                            "“Tu já tá forte na fac ou ainda tá evoluindo?”", 
                            "“Se eu te mostrar um jeito de evoluir mais rápido, tu olha?”", 
                            "“10 segundos, se não fizer sentido eu saio”"
                        ] 
                    }
                ],
                videos: []
            },
            'meio': {
                id: 'meio',
                title: "Meio de Campo",
                menuTitle: "⚽ Meio de Campo",
                description: "Entender a necessidade do cliente ou fazer perguntas com intenções para criar a necessidade na cabeça dele.",
                image: "gemini.jpg",
                sections: [
                    { 
                        isQuote: true, 
                        title: "⭐ A Regra de Ouro", 
                        content: "“A necessidade não existe até que você a crie na mente do cliente.”" 
                    },
                    { 
                        title: "🎯 Objetivo", 
                        items: [
                            "Entender a necessidade real do cliente",
                            "Fazer perguntas com intenções específicas",
                            "Criar a necessidade na cabeça do jogador"
                        ] 
                    },
                    { 
                        title: "💡 Solução Focada", 
                        items: [
                            "Ter a solução exata para a necessidade que foi criada",
                            "Falar sobre os produtos de forma estratégica",
                            "Destacar sempre os benefícios, não apenas as características"
                        ],
                        footer: "💡 O cliente não compra o item, ele compra o que o item faz por ele."
                    }
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
                    { 
                        isQuote: true, 
                        title: "⭐ A Regra de Ouro", 
                        content: "“O desejo faz o cliente querer. A urgência faz o cliente agir agora.”" 
                    },
                    { 
                        title: "🎯 Posicionamento de Solução", 
                        items: [
                            "Apresentar a solução definitiva para a dor do cliente",
                            "Garantir que a solução encaixe perfeitamente no que foi discutido no Meio de Campo"
                        ] 
                    },
                    { 
                        title: "⚡ Geração de Desejo e Urgência", 
                        items: [
                            "Fazer a negociação destacando a exclusividade do produto",
                            "Utilizar gatilhos mentais para criar o desejo de posse",
                            "Gerar senso de urgência para fechamento rápido"
                        ],
                        warning: "Não demonstre desespero para vender, demonstre que a oportunidade é única."
                    }
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
                    { 
                        isQuote: true, 
                        title: "⭐ A Regra de Ouro", 
                        content: "“A venda só termina quando a transação é concluída com clareza.”" 
                    },
                    { 
                        title: "💳 Formas de Pagamento", 
                        subtext: "Apresente as opções disponíveis de forma direta:", 
                        items: [
                            "Cartão de Crédito",
                            "Pix (Transferência imediata)"
                        ] 
                    },
                    { 
                        title: "🎯 Finalização", 
                        items: [
                            "Garantir a concordância total do cliente com os valores e termos",
                            "Finalizar a transação no sistema de forma rápida e segura"
                        ],
                        footer: "💡 Facilite ao máximo o processo de pagamento para não perder a venda no último segundo."
                    }
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
                    { 
                        isQuote: true, 
                        title: "⭐ A Regra de Ouro", 
                        content: "“Um cliente bem atendido e sem dúvidas é a sua melhor propaganda.” 🤝" 
                    },
                    { 
                        title: "🤝 Tratar Bem", 
                        subtext: "Como manter o relacionamento:", 
                        items: [
                            "Seja cordial e agradeça a preferência pela compra.",
                            "Mostre que você se importa com a experiência dele na cidade.",
                            "Deixe claro que você está à disposição para o que ele precisar."
                        ] 
                    },
                    { 
                        title: "❓ Tirar Todas as Dúvidas", 
                        items: [
                            "Pergunte ativamente se ele entendeu como funciona o que comprou.",
                            "Explique as regras básicas para evitar punições (Anti-RP).",
                            "Confirme se não restou nenhuma pergunta pendente."
                        ],
                        warning: "Deixar o cliente com dúvidas gera frustração e cancelamento."
                    },
                    { 
                        title: "🗣️ Pedir Indicação", 
                        items: [
                            "Pergunte se ele tem amigos que também chegaram agora na cidade.",
                            "Peça para ele indicar o seu serviço se alguém precisar.",
                            "Ofereça uma vantagem (desconto/brinde) na próxima compra se ele trouxer alguém."
                        ],
                        footer: "💡 Indicação é a forma mais barata e fácil de conseguir novos clientes."
                    }
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
                        }).join('') : `<h2 style="color:var(--text-secondary); grid-column: 1/-1; text-align:center;">Conteúdo em desenvolvimento...</h2>`}
                    </div>

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