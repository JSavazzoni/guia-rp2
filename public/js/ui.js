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
            <div class="login-container" style="height:100vh; display:flex; align-items:center; justify-content:center; background: radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, #000 100%);">
                <div class="login-box" style="background:rgba(15,15,15,0.8); backdrop-filter:blur(15px); padding:4rem; border-radius:20px; border:1px solid #d4af37; width:450px; text-align:center; box-shadow: 0 0 50px rgba(212, 175, 55, 0.15);">
                    <h1 style="color:#d4af37; margin-bottom:0.5rem; font-weight:900; font-size:1.8rem; letter-spacing:2px;">SALES GUIA</h1>
                    <p style="color:#aaa; margin-bottom:3rem; font-weight:500; font-size:0.9rem; text-transform:uppercase; letter-spacing:3px;">Santa Group</p>
                    
                    <p id="loginError" style="color:#ef4444; display:none; margin-bottom:1.5rem; font-weight:bold;">Acesso Negado!</p>
                    
                    <form onsubmit="window.handleLoginSubmit(event)">
                        <input type="email" id="email" placeholder="Seu e-mail" required style="width:100%; padding:15px; margin-bottom:15px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff; border-radius:10px; font-size:1rem; outline:none;">
                        <input type="password" id="password" placeholder="Sua senha" required style="width:100%; padding:15px; margin-bottom:25px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff; border-radius:10px; font-size:1rem; outline:none;">
                        <button type="submit" style="width:100%; padding:16px; background:#d4af37; border:none; color:#000; font-weight:900; border-radius:10px; cursor:pointer; font-size:1.1rem; transition: 0.3s; letter-spacing:1px;">ENTRAR NO SISTEMA</button>
                    </form>
                </div>
            </div>`,

        menu: () => `
            <div class="overlay"></div>
            <div class="top-bar" style="position:fixed; top:0; width:100%; padding:1.2rem 2.5rem; display:flex; justify-content:space-between; background:rgba(0,0,0,0.85); backdrop-filter:blur(10px); z-index:100; border-bottom:1px solid #d4af37;">
                <div style="font-weight:900; color:#d4af37; letter-spacing:1px;">SALES GUIA - SANTA GROUP</div>
                <div style="display:flex; align-items:center; gap:20px;">
                    <span style="font-size:0.7rem; background:#d4af37; color:#000; padding:4px 10px; border-radius:4px; font-weight:900;">${App.state.currentUser.role.toUpperCase()}</span>
                    <button onclick="App.logout()" style="background:none; border:1px solid #ef4444; color:#ef4444; padding:5px 15px; border-radius:6px; cursor:pointer; font-weight:900; font-size:0.75rem;">SAIR</button>
                </div>
            </div>
            <div class="funnelContainer">
                <div class="funnelStep stepOlheiro" onclick="App.navigateToCategory('olheiro')"><span class="funnelStepTitle">🕵️‍♂️ Olheiro</span><span class="funnelStepDesc">Observe o player e entenda o melhor momento.</span></div>
                <div class="funnelStep stepDefesa" onclick="App.navigateToCategory('defesa')"><span class="funnelStepTitle">🛡️ Defesa</span><span class="funnelStepDesc">Ganhe a atenção do cliente e inicie a conversa.</span></div>
                <div class="funnelStep stepMeio" onclick="App.navigateToCategory('meio')"><span class="funnelStepTitle">⚽ Meio de Campo</span><span class="funnelStepDesc">Entenda a necessidade através de perguntas-chave.</span></div>
                <div class="funnelStep stepAtaque" onclick="App.navigateToCategory('ataque')"><span class="funnelStepTitle">⚔️ Ataque</span><span class="funnelStepDesc">Transforme a dor em solução e crie urgência.</span></div>
                <div class="funnelStep stepFechamento" onclick="App.navigateToCategory('fechamento')"><span class="funnelStepTitle">🤝 Fechamento</span><span class="funnelStepDesc">Transforma interesse em decisão.</span></div>
                <div class="funnelStep stepPosvenda" onclick="App.navigateToCategory('posvenda')"><span class="funnelStepTitle">📦 Pós Venda</span><span class="funnelStepDesc">Transforma cliente em recorrência.</span></div>
            </div>`,

        category: (data) => {
            if (!data) return '';
            const categories = [
                { id: 'olheiro', title: 'Olheiro' }, { id: 'defesa', title: 'Defesa' },
                { id: 'meio', title: 'Meio de Campo' }, { id: 'ataque', title: 'Ataque' },
                { id: 'fechamento', title: 'Fechamento' }, { id: 'posvenda', title: 'Pós Venda' }
            ];

            return `
                <div class="overlay"></div>
                <div class="layoutContainer">
                    <aside class="sidebarNavigation">
                        <button class="backButton" onclick="App.navigateToMenu()">⬅ Menu Inicial</button>
                        <nav class="navigationMenu">
                            ${categories.map(cat => {
                                const isMeio = cat.id === 'meio';
                                const isActive = App.state.currentCategoryId === cat.id;
                                return `
                                    <div class="navItem ${isActive ? 'navItemActive' : ''}" onclick="${isMeio ? 'App.toggleMeio(event)' : `App.navigateToCategory('${cat.id}')`}">
                                        ${cat.title.toUpperCase()} ${isMeio ? (App.state.isMeioExpanded ? '▾' : '▸') : ''}
                                    </div>
                                    ${isMeio && App.state.isMeioExpanded ? `
                                        <div style="background:rgba(0,0,0,0.3); padding:5px 0; margin-bottom:10px; border-radius:8px;">
                                            ${Object.values(App.state.content.profiles).map(p => `
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
            <div class="preparationGrid" style="grid-column: 1 / -1; display:grid; grid-template-columns: 1fr 1fr; gap:3rem; background:rgba(20,20,20,0.85); padding:3rem; border-radius:25px; border:1px solid rgba(212,175,55,0.2); align-items:center;">
                <div>
                    <h2 style="color:#d4af37; font-weight:900; margin-bottom:2rem; text-transform:uppercase;">${s.title}</h2>
                    <p style="margin-bottom:1.5rem; font-size:1.1rem;"><strong style="color:#d4af37;">🎯 OBJETIVO:</strong> ${s.goal}</p>
                    <div class="dataList" style="margin-bottom:1.5rem;">${s.actions.map(a => `<div class="aligned-list-item" style="margin-bottom:8px; font-size:1.1rem;">• ${a}</div>`).join('')}</div>
                    <p style="font-size:1.1rem;"><strong style="color:#d4af37;">🏆 RESULTADO:</strong> ${s.result}</p>
                </div>
                <div class="prepPhoto" style="display:flex; justify-content:center;">
                    <img src="${s.image}" style="max-width:100%; border-radius:15px; border:3px solid #fde047; box-shadow: 0 0 40px rgba(253, 224, 71, 0.3);">
                </div>
            </div>`;

        const extraClass = s.isFull ? "cardSpanFull" : "";
        return `
            <section class="infoCard ${extraClass}">
                <h2 style="display:flex; align-items:center; gap:12px;">${s.title}</h2>
                <div class="dataList" style="font-size:1.1rem;">
                    ${s.items ? s.items.map(i => i === '---' ? '<div class="listDivider"></div>' : (i.trim().startsWith('<') ? i : `<div class="aligned-list-item">${i}</div>`)).join('') : ''}
                </div>
                ${s.footer ? `<div class="hintBox" style="margin-top:2rem;">${s.footer}</div>` : ''}
                ${s.warning ? `<div class="warningBox" style="margin-top:2rem;">⚠️ ${s.warning}</div>` : ''}
            </section>`;
    }
};

window.handleLoginSubmit = async function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const result = await App.login(email, password);
    if (!result.success) {
        const err = document.getElementById('loginError');
        err.innerText = result.message;
        err.style.display = 'block';
    }
};