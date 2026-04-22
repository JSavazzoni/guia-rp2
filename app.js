const SalesManualData = {
    header: {
        title: "Manual de Vendas",
        description: "Olheiro é a primeira etapa da venda. Antes de abordar o player, observa ele, o que está fazendo, o assunto e se é o momento certo. 🕵️‍♂️",
        image: "gemini.jpg"
    },
    sections: {
        goldenRule: {
            title: "⭐ A Regra de Ouro",
            content: "“Se você não tem a atenção do cliente, você não tem venda.” 🚀"
        },
        objective: {
            title: "🎯 Objetivo do Olheiro",
            subtext: "Se faça essas perguntas e pense se é o momento de abordar:",
            items: [
                "🗣️ O cliente está disponível para conversar?",
                "🧠 Você vai conseguir a atenção dele?",
                "💰 Existe oportunidade de venda naquele momento?"
            ]
        },
        timing: {
            title: "⏱️ Tempo de Observação",
            items: [
                "⏳ Mínimo: 2 minutos",
                "⏰ Ideal: 3 a 5 minutos"
            ],
            warning: "Abordar no momento errado você vai perder tempo"
        },
        behavior: {
            title: "🚶‍♂️ Comportamento do Cliente",
            items: [
                "🗺️ Está perdido?",
                "👣 Está andando sem rumo?",
                "🛠️ Está testando coisas?",
                "🧍‍♂️ Está parado?"
            ],
            footer: "💡 Normalmente cliente em momento tranquilo tem chance de te dar atenção"
        },
        signals: {
            title: "✅ Sinais de Abertura",
            items: [
                "👤 Cliente sozinho",
                "🧭 Cliente perdido / sem direção",
                "👀 Cliente olhando ao redor",
                "🛋️ Cliente parado, em resenha, ou tranquilo"
            ]
        },
        errors: {
            title: "❌ Erros do Vendedor",
            items: [
                "🏃‍♂️💨 Abordar instantaneamente sem observar",
                "🛑 Interromper o cliente quando ele não quer",
                "👨‍👩‍👧‍👦 Tentar vender para cliente ou grupo fechado ou em ação."
            ]
        }
    },
    videos: {
        aula1: "https://drive.google.com/file/d/1lLK7Rl9aun4TBVSjbVVRYapQO4VOIZfc/preview",
        aula2: "https://drive.google.com/file/d/1nmAOR_S0mm8jWb5VchfBfp2Fo33kiRaq/preview"
    }
};

const Controller = {
    render: () => {
        const root = document.getElementById('applicationRoot');
        const d = SalesManualData;

        root.innerHTML = `
            <div class="layoutContainer">
                <aside class="sidebarNavigation">
                    <div class="sidebarHeader"><div class="brandLogo">Guia RP</div></div>
                    <nav class="navigationMenu">
                        <div class="navigationItem">🕵️‍♂️ Olheiro</div>
                    </nav>
                    <div class="developerSignature">DESENVOLVIDO &lt;/VZ&gt;</div>
                </aside>

                <main class="mainWorkspace">
                    <header class="headerContainer">
                        <div class="headerTextContent">
                            <h1 class="pageTitle">${d.header.title}</h1>
                            <p class="pageDescription">${d.header.description}</p>
                        </div>
                        <div class="headerImageContainer">
                            <img src="${d.header.image}" alt="Olheiro">
                        </div>
                    </header>

                    <div class="contentGrid">
                        <section class="infoCard cardSpanFull quoteCard">
                            <h2>${d.sections.goldenRule.title}</h2>
                            <p class="quoteText">${d.sections.goldenRule.content}</p>
                        </section>

                        <section class="infoCard">
                            <h2>${d.sections.objective.title}</h2>
                            <p style="margin-bottom:1.5rem; color:#888; font-weight:600;">${d.sections.objective.subtext}</p>
                            <ul class="dataList">
                                ${d.sections.objective.items.map(i => `<li>${i}</li>`).join('')}
                            </ul>
                        </section>

                        <section class="infoCard">
                            <h2>${d.sections.timing.title}</h2>
                            <ul class="dataList">
                                ${d.sections.timing.items.map(i => `<li>${i}</li>`).join('')}
                            </ul>
                            <div class="warningBox">${d.sections.timing.warning}</div>
                        </section>

                        <section class="infoCard">
                            <h2>${d.sections.behavior.title}</h2>
                            <ul class="dataList">
                                ${d.sections.behavior.items.map(i => `<li>${i}</li>`).join('')}
                            </ul>
                            <div class="hintBox">${d.sections.behavior.footer}</div>
                        </section>

                        <section class="infoCard">
                            <h2>${d.sections.signals.title}</h2>
                            <ul class="dataList">
                                ${d.sections.signals.items.map(i => `<li>${i}</li>`).join('')}
                            </ul>
                        </section>

                        <section class="infoCard cardSpanFull" style="border-color:#ef4444;">
                            <h2 style="color:#ef4444;">${d.sections.errors.title}</h2>
                            <ul class="dataList">
                                ${d.sections.errors.items.map(i => `<li>${i}</li>`).join('')}
                            </ul>
                        </section>
                    </div>

                    <section class="videoSection">
                        <h1 class="sectionTitle">Adicional em Vídeo 📺</h1>
                        <div class="videosGrid">
                            <div class="videoWrapper">
                                <h3 class="videoLabel" style="color:#ef4444;">Exemplo de pessoas para não atender</h3>
                                <div class="videoContainer">
                                    <iframe src="${d.videos.aula1}"></iframe>
                                </div>
                            </div>
                            <div class="videoWrapper">
                                <h3 class="videoLabel" style="color:#22c55e;">Exemplo de pessoas para atender</h3>
                                <div class="videoContainer">
                                    <iframe src="${d.videos.aula2}"></iframe>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        `;
    }
};

document.addEventListener('DOMContentLoaded', Controller.render);