const UI = {
    render() {
        const root = document.getElementById('applicationRoot');
        if (!App.state.currentUser) {
            root.innerHTML = this.templates.login();
            return;
        }

        if (App.state.currentView === 'menu') {
            root.innerHTML = this.templates.menu();
        } else {
            const data = this.getActiveData();
            root.innerHTML = this.templates.category(data);
        }
    },

    getActiveData() {
        const { currentCategoryId, currentProfileId, content } = App.state;
        if (!content) return null;
        if (currentProfileId) return content.profiles[currentProfileId];
        return content.categories[currentCategoryId];
    },

    templates: {
        login: () => `
            <div class="login-container" style="height:100vh; display:flex; align-items:center; justify-content:center;">
                <div class="login-box" style="background:rgba(10,10,10,0.9); padding:3rem; border-radius:12px; border:1px solid #d4af37; width:400px; text-align:center;">
                    <h2 style="color:#d4af37; margin-bottom:2rem; font-weight:900;">SISTEMA SG</h2>
                    <p id="loginError" style="color:#ef4444; display:none; margin-bottom:1rem; font-weight:bold;"></p>
                    <form onsubmit="handleLoginSubmit(event)">
                        <input type="email" id="email" placeholder="E-mail" required style="width:100%; padding:12px; margin-bottom:15px; background:#1a1a1a; border:1px solid #333; color:#fff; border-radius:8px;">
                        <input type="password" id="password" placeholder="Senha" required style="width:100%; padding:12px; margin-bottom:20px; background:#1a1a1a; border:1px solid #333; color:#fff; border-radius:8px;">
                        <button type="submit" style="width:100%; padding:16px; background:#d4af37; border:none; color:#000; font-weight:900; border-radius:8px; cursor:pointer;">ACESSAR</button>
                    </form>
                </div>
            </div>`,
        
        menu: () => {
            const categories = [
                { id: 'olheiro', title: '🕵️‍♂️ Olheiro', desc: 'Observe o player e entenda o melhor momento.' },
                { id: 'defesa', title: '🛡️ Defesa', desc: 'Ganhe a atenção do cliente e inicie a conversa.' },
                { id: 'meio', title: '⚽ Meio de Campo', desc: 'Entenda a necessidade através de perguntas-chave.' },
                { id: 'ataque', title: '⚔️ Ataque', desc: 'Transforme a dor em solução e crie urgência.' },
                { id: 'fechamento', title: '🤝 Fechamento', desc: 'Transforma interesse em decisão.' },
                { id: 'posvenda', title: '📦 Pós Venda', desc: 'Transforma cliente em recorrência.' }
            ];

            return `
                <div class="overlay"></div>
                <div class="top-bar" style="position:fixed; top:0; width:100%; padding:1rem 2rem; display:flex; justify-content:space-between; background:rgba(0,0,0,0.8); z-index:100; border-bottom:1px solid #d4af37;">
                    <div style="font-weight:900; color:#d4af37;">SISTEMA SG</div>
                    <div style="display:flex; align-items:center; gap:15px;">
                        <span style="font-size:0.7rem; background:#d4af37; color:#000; padding:2px 8px; border-radius:4px; font-weight:900;">${App.state.currentUser.role.toUpperCase()}</span>
                        <button onclick="App.logout()" style="background:none; border:1px solid #ef4444; color:#ef4444; padding:4px 10px; border-radius:4px; cursor:pointer;">Sair</button>
                    </div>
                </div>
                <div class="funnelContainer">
                    ${categories.map(cat => `
                        <div class="funnelStep step${cat.id.charAt(0).toUpperCase() + cat.id.slice(1)}" onclick="App.navigateToCategory('${cat.id}')">
                            <span class="funnelStepTitle">${cat.title}</span>
                            <span class="funnelStepDesc">${cat.desc}</span>
                        </div>
                    `).join('')}
                </div>`;
        },

        category: (data) => {
            if (!data) return '<div style="color:white; padding:50px;">Conteúdo não carregado. Verifique o console.</div>';
            return `
                <div class="overlay"></div>
                <div class="layoutContainer">
                    <aside class="sidebarNavigation">
                        <button class="backButton" onclick="App.navigateToMenu()">⬅ Menu Inicial</button>
                        <nav class="navigationMenu">
                            ${['olheiro', 'defesa', 'meio', 'ataque', 'fechamento', 'posvenda'].map(id => `
                                <div class="navItem ${App.state.currentCategoryId === id ? 'navItemActive' : ''}" onclick="App.navigateToCategory('${id}')">
                                    ${id.toUpperCase()}
                                </div>
                            `).join('')}
                        </nav>
                    </aside>
                    <main class="mainWorkspace">
                        <header class="headerContainer">
                            <div class="headerTextContent">
                                <h1 class="pageTitle">${data.title}</h1>
                                <p class="pageDescription">${data.description}</p>
                            </div>
                            <div class="headerImageContainer"><img src="${data.image}"></div>
                        </header>
                        <div class="contentGrid">
                            ${data.sections.map(s => UI.renderSection(s)).join('')}
                        </div>
                    </main>
                </div>`;
        }
    },

    renderSection(s) {
        if (s.isSectionTitle) return `<div class="topHeadingFree" style="grid-column:1/-1; text-align:center; color:#d4af37; font-size:1.8rem; font-weight:900; margin:2rem 0; text-transform:uppercase;">${s.title}</div>`;
        if (s.isPreparation) return `<div class="preparationGrid" style="grid-column: 1 / -1; display:grid; grid-template-columns: 1fr 1fr; gap:2rem; background:rgba(20,20,20,0.8); padding:2rem; border-radius:20px; border:1px solid rgba(255,255,255,0.05); align-items:center;"><div><h2 style="color:#d4af37; font-weight:900; margin-bottom:1.5rem;">${s.title}</h2><p><strong>🎯 OBJETIVO:</strong> ${s.goal}</p><div>${s.actions.map(a => `<div>• ${a}</div>`).join('')}</div><p><strong>🏆 RESULTADO:</strong> ${s.result}</p></div><div class="prepPhoto"><img src="${s.image}" style="border: 3px solid #fde047; box-shadow: 0 0 30px rgba(253, 224, 71, 0.4); max-width:100%;"></div></div>`;
        const extraClass = s.isFull ? "cardSpanFull" : "";
        return `<section class="infoCard ${extraClass}"><h2>${s.title}</h2><div class="dataList">${s.items ? s.items.map(i => i === '---' ? '<div class="listDivider"></div>' : `<div class="aligned-list-item">${i}</div>`).join('') : ''}</div>${s.footer ? `<div class="hintBox">${s.footer}</div>` : ''}${s.warning ? `<div class="warningBox" style="background:rgba(239,68,68,0.1); border:1px solid #ef4444; padding:1.5rem; border-radius:12px; color:#ef4444; font-weight:800; text-align:center; margin-top:1.5rem;">⚠️ ${s.warning}</div>` : ''}</section>`;
    }
};

// FUNÇÃO GLOBAL DE LOGIN
window.handleLoginSubmit = async function(e) {
    e.preventDefault();
    console.log("Botão apertado, iniciando login...");
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
        const result = await App.login(email, password);
        console.log("Resultado do Login:", result);
        
        if (!result.success) {
            const err = document.getElementById('loginError');
            err.innerText = result.message;
            err.style.display = 'block';
        }
    } catch (error) {
        console.error("Erro fatal no login:", error);
        alert("Erro ao conectar com o servidor. Você está rodando via Vercel?");
    }
};