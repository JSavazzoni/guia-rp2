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
            <div class="login-container" style="height:100vh; display:flex; align-items:center; justify-content:center; background: radial-gradient(circle at center, rgba(30,30,30,0.4) 0%, #000 100%);">
                <div class="login-box" style="background:rgba(15,15,15,0.85); backdrop-filter:blur(20px); padding:4rem; border-radius:24px; border:1px solid #d4af37; width:450px; text-align:center; box-shadow: 0 0 60px rgba(0,0,0,1);">
                    <h1 style="color:#d4af37; margin-bottom:0.5rem; font-weight:900; font-size:2rem; letter-spacing:2px; text-transform:uppercase;">SALES GUIA</h1>
                    <p style="color:#888; margin-bottom:3rem; font-weight:600; font-size:0.9rem; text-transform:uppercase; letter-spacing:4px;">Santa Group</p>
                    
                    <p id="loginError" style="color:#ef4444; display:none; margin-bottom:1.5rem; font-weight:900; font-size:0.85rem; background:rgba(239,68,68,0.1); padding:10px; border-radius:8px;">ACESSO NEGADO!</p>
                    
                    <form onsubmit="window.handleLoginSubmit(event)">
                        <input type="email" id="email" placeholder="E-MAIL DE ACESSO" required style="width:100%; padding:16px; margin-bottom:15px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff; border-radius:12px; font-size:0.9rem; outline:none; font-weight:600;">
                        <input type="password" id="password" placeholder="SENHA" required style="width:100%; padding:16px; margin-bottom:30px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff; border-radius:12px; font-size:0.9rem; outline:none; font-weight:600;">
                        <button type="submit" style="width:100%; padding:18px; background:#d4af37; border:none; color:#000; font-weight:900; border-radius:12px; cursor:pointer; font-size:1.1rem; transition:0.3s; letter-spacing:1px; box-shadow: 0 4px 15px rgba(212,175,55,0.3);">ENTRAR NO SISTEMA</button>
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
                <div class="top-bar" style="position:fixed; top:0; width:100%; padding:1.2rem 2.5rem; display:flex; justify-content:space-between; background:rgba(0,0,0,0.8); z-index:100; border-bottom:1px solid #d4af37; backdrop-filter:blur(10px);">
                    <div style="font-weight:900; color:#d4af37; letter-spacing:1px; font-size:1.2rem;">SALES GUIA - SANTA GROUP</div>
                    <div style="display:flex; align-items:center; gap:20px;">
                        <span style="font-size:0.75rem; background:#d4af37; color:#000; padding:4px 12px; border-radius:6px; font-weight:900; text-transform:uppercase;">${App.state.currentUser.role}</span>
                        <button onclick="App.logout()" style="background:none; border:1px solid #ef4444; color:#ef4444; padding:5px 15px; border-radius:6px; cursor:pointer; font-weight:900; font-size:0.8rem; transition:0.3s;">SAIR</button>
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
            if (!data) return '';
            const profiles = App.state.content.profiles;
            const catIds = ['olheiro', 'defesa', 'meio', 'ataque', 'fechamento', 'posvenda'];

            return `
                <div class="overlay"></div>
                <div class="layoutContainer">
                    <aside class="sidebarNavigation">
                        <button class="backButton" onclick="App.navigateToMenu()">⬅ Menu Inicial</button>
                        <nav class="navigationMenu">
                            ${catIds.map(id => {
                                const isMeio = id === 'meio';
                                const isActive = App.state.currentCategoryId === id;
                                return `
                                    <div class="navItem ${isActive ? 'navItemActive' : ''}" onclick="${isMeio ? 'App.toggleMeio(event)' : `App.navigateToCategory('${id}')`}">
                                        ${id.toUpperCase()} ${isMeio ? (App.state.isMeioExpanded ? '▾' : '▸') : ''}
                                    </div>
                                    ${isMeio && App.state.isMeioExpanded ? `
                                        <div style="background:rgba(0,0,0,0.3); margin-bottom:10px; border-radius:8px;">
                                            ${Object.values(profiles).map(p => `
                                                <div class="navItem" style="font-size:0.75rem; border:none; padding-left:2.5rem; color:#aaa;" onclick="App.navigateToProfile('${p.id}')">
                                                    ${p.shortTitle}
                                                </div>
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
        if (s.isSectionTitle) return `<div class="topHeadingFree" style="grid-column:1/-1; text-align:center; color:#d4af37; font-size:1.8rem; font-weight:900; margin:3rem 0; text-transform:uppercase; letter-spacing:2px;">${s.title}</div>`;
        
        if (s.isPreparation) return `
            <div class="preparationGrid" style="grid-column: 1 / -1; display:grid; grid-template-columns: 1.2fr 1fr; gap:3rem; background:rgba(20,20,20,0.85); padding:3.5rem; border-radius:24px; border:1px solid rgba(212,175,55,0.2); align-items:center;">
                <div>
                    <h2 style="color:#d4af37; font-weight:900; margin-bottom:2rem; text-transform:uppercase; font-size:1.6rem;">${s.title}</h2>
                    <p style="margin-bottom:1.5rem; font-size:1.1rem;"><strong style="color:#d4af37;">🎯 OBJETIVO:</strong> ${s.goal}</p>
                    <div class="dataList" style="margin-bottom:1.5rem; display:flex; flex-direction:column; gap:10px;">${s.actions.map(a => `<div class="aligned-list-item" style="font-size:1.1rem;">• ${a}</div>`).join('')}</div>
                    <p style="font-size:1.1rem;"><strong style="color:#d4af37;">🏆 RESULTADO:</strong> ${s.result}</p>
                </div>
                <div class="prepPhoto" style="display:flex; justify-content:center;">
                    <img src="${s.image}" style="max-width:100%; border-radius:12px; border: 3px solid #fde047; box-shadow: 0 0 45px rgba(253, 224, 71, 0.4);">
                </div>
            </div>`;

        const extraClass = (s.isFull || s.isError) ? "cardSpanFull" : "";
        const isError = s.isError || s.title.includes('ERROS');

        return `
            <section class="infoCard ${extraClass} ${isError ? 'errorCard' : ''}">
                <h2 style="display:flex; align-items:center; gap:12px;">${s.title}</h2>
                <div class="dataList" style="font-size:1.1rem; display:flex; flex-direction:column; gap:12px;">
                    ${s.items ? s.items.map(i => i === '---' ? '<div class="listDivider"></div>' : (i.trim().startsWith('<') ? i : `<div class="aligned-list-item">${i}</div>`)).join('') : ''}
                </div>
                ${s.footer ? `<div class="hintBox" style="margin-top:2rem;">${s.footer}</div>` : ''}
                ${s.warning ? `<div class="warningBox" style="margin-top:2rem; background:rgba(239,68,68,0.1); border:1px solid #ef4444; padding:1.5rem; border-radius:12px; color:#ef4444; font-weight:800; text-align:center;">⚠️ ${s.warning}</div>` : ''}
            </section>`;
    }
};

window.handleLoginSubmit = async function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errBox = document.getElementById('loginError');
    
    try {
        const result = await App.login(email, password);
        if (!result.success) {
            errBox.innerText = result.message;
            errBox.style.display = 'block';
        }
    } catch (e) {
        errBox.innerText = "ERRO DE CONEXÃO COM A API";
        errBox.style.display = 'block';
    }
};