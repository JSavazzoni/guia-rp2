const SalesManualDataAccess = {
    fetchContent: () => ({
        header: {
            title: "Manual de Vendas",
            description: "Olheiro é a primeira etapa da venda. Antes de abordar o player, observa ele, o que está fazendo, o assunto e se é o momento certo. 🕵️‍♂️",
            imagePath: "gemini.jpg"
        },
        sections: {
            goldenRule: {
                title: "⭐ A Regra de Ouro",
                content: "“Quem tem visão, enxerga a venda antes dela existir” 🚀"
            },
            objective: {
                title: "🎯 Objetivo do Olheiro",
                subtext: "Se faça essas perguntas e pense se é o momento de abordar:",
                items: [
                    "O cliente está disponível para conversar? 🗣️",
                    "Você vai conseguir a atenção dele? 🧠",
                    "Existe oportunidade de venda naquele momento? 💰"
                ]
            },
            timing: {
                title: "⏱️ Tempo de Observação",
                items: [
                    "Mínimo: 2 minutos ⏳",
                    "Ideal: 3 a 5 minutos ⏰"
                ],
                warning: "Abordar no momento errado você vai perder tempo"
            },
            behavior: {
                title: "🚶‍♂️ Comportamento do Cliente",
                items: [
                    "Está perdido? 🗺️",
                    "Está andando sem rumo? 👣",
                    "Está testando coisas? 🛠️",
                    "Está parado? 🧍‍♂️"
                ],
                footer: "💡 Normalmente cliente em momento tranquilo tem chance de te dar atenção"
            },
            signals: {
                title: "✅ Sinais de Abertura",
                items: [
                    "Cliente sozinho 👤",
                    "Cliente perdido / sem direção 🧭",
                    "Cliente olhando ao redor 👀",
                    "Cliente parado, em resenha, ou tranquilo 🛋️"
                ]
            },
            errors: {
                title: "❌ Erros do Vendedor",
                items: [
                    "Abordar instantaneamente sem observar 🏃‍♂️💨",
                    "Interromper o cliente quando ele não quer 🛑",
                    "Tentar vender para cliente ou grupo fechado ou em ação. 👨‍👩‍👧‍👦"
                ]
            }
        }
    })
};

const SalesManualBusinessLogic = {
    getProcessedData: () => {
        return SalesManualDataAccess.fetchContent();
    }
};

const SalesManualController = {
    renderView: () => {
        const data = SalesManualBusinessLogic.getProcessedData();
        const rootElement = document.getElementById('applicationRoot');

        if (!rootElement) return;

        rootElement.innerHTML = `
            <div class="layoutContainer">
                <aside class="sidebarNavigation">
                    <div class="sidebarHeader">
                        <div class="brandLogo">Guia RP</div>
                    </div>
                    <nav class="navigationMenu">
                        <div class="navigationItem">🕵️‍♂️ Olheiro</div>
                    </nav>
                    <div class="developerSignature">DESENVOLVIDO &lt;/VZ&gt;</div>
                </aside>

                <main class="mainWorkspace">
                    <header class="headerContainer">
                        <div class="headerTextContent">
                            <h1 class="pageTitle">${data.header.title}</h1>
                            <p class="pageDescription">${data.header.description}</p>
                        </div>
                        <div class="headerImageContainer">
                            <img src="${data.header.imagePath}" alt="Olheiro">
                        </div>
                    </header>

                    <div class="contentGrid">
                        <section class="infoCard cardSpanFull quoteCard">
                            <h2>${data.sections.goldenRule.title}</h2>
                            <p class="quoteText">${data.sections.goldenRule.content}</p>
                        </section>

                        <section class="infoCard">
                            <h2>${data.sections.objective.title}</h2>
                            <p class="listSubtitle">${data.sections.objective.subtext}</p>
                            <ul class="dataList">
                                ${data.sections.objective.items.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </section>

                        <section class="infoCard">
                            <h2>${data.sections.timing.title}</h2>
                            <ul class="dataList">
                                ${data.sections.timing.items.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                            <div class="warningBox">
                                ${data.sections.timing.warning}
                            </div>
                        </section>

                        <section class="infoCard">
                            <h2>${data.sections.behavior.title}</h2>
                            <ul class="dataList">
                                ${data.sections.behavior.items.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                            <div class="hintBox">${data.sections.behavior.footer}</div>
                        </section>

                        <section class="infoCard">
                            <h2>${data.sections.signals.title}</h2>
                            <ul class="dataList">
                                ${data.sections.signals.items.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </section>

                        <section class="infoCard cardSpanFull errorCard">
                            <h2>${data.sections.errors.title}</h2>
                            <ul class="dataList">
                                ${data.sections.errors.items.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </section>
                    </div>

                    <section class="videoSection">
                        <h1 class="sectionTitle">Adicional em Vídeo 📺</h1>
                        <div class="videosGrid">
                            <div class="videoWrapper">
                                <h3 class="videoLabel" style="color: #ef4444;">Exemplo de pessoas para não atender</h3>
                                <div class="videoContainer">
                                    <video controls>
                                        <source src="video-aula-1.mp4" type="video/mp4">
                                    </video>
                                </div>
                            </div>
                            <div class="videoWrapper">
                                <h3 class="videoLabel" style="color: #4ade80;">Exemplo de pessoas para atender</h3>
                                <div class="videoContainer">
                                    <video controls>
                                        <source src="video-aula-2.mp4" type="video/mp4">
                                    </video>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        `;
    },

    initialize: () => {
        document.addEventListener('DOMContentLoaded', SalesManualController.renderView);
    }
};

SalesManualController.initialize();