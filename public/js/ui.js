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
            <div style="height:100vh; display:flex; align-items:center; justify-content:center; background: radial-gradient(circle at center, rgba(30,30,30,0.4) 0%, #000 100%);">
                <div style="background:rgba(15,15,15,0.95); backdrop-filter:blur(20px); padding:4rem; border-radius:24px; border:1px solid #d4af37; width:450px; text-align:center; box-shadow: 0 0 60px rgba(0,0,0,0.8);">
                    <h1 style="color:#d4af37; margin-bottom:0.5rem; font-weight:900; font-size:2.2rem; letter-spacing:2px; text-transform:uppercase;">SALES GUIA</h1>
                    <p style="color:#888; margin-bottom:3rem; font-weight:600; font-size:0.9rem; text-transform:uppercase; letter-spacing:4px;">Santa Group</p>
                    
                    <p id="loginError" style="color:#ef4444; display:none; margin-bottom:1.5rem; font-weight:900; font-size:0.85rem; background:rgba(239,68,68,0.1); padding:10px; border-radius:8px;"></p>
                    
                    <form onsubmit="window.handleLoginSubmit(event)">
                        <div style="text-align: left; margin-bottom: 5px;">
                            <label style="color: #ccc; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; margin-left: 5px;">Seu E-mail</label>
                        </div>
                        <input type="email" id="email" required style="width:100%; padding:16px; margin-bottom:15px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff; border-radius:12px; font-size:0.9rem; outline:none; font-weight:600;">
                        
                        <div style="text-align: left; margin-bottom: 5px;">
                            <label style="color: #ccc; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; margin-left: 5px;">Senha</label>
                        </div>
                        <input type="password" id="password" required style="width:100%; padding:16px; margin-bottom:30px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff; border-radius:12px; font-size:0.9rem; outline:none; font-weight:600;">
                        
                        <button type="submit" style="width:100%; padding:18px; background:#d4af37; border:none; color:#000; font-weight:900; border-radius:12px; cursor:pointer; font-size:1.1rem; transition:0.3s; letter-spacing:1px; box-shadow: 0 4px 15px rgba(212,175,55,0.3);">ENTRAR NO SISTEMA</button>
                    </form>
                </div>
            </div>`,

        menu: () => `
            <div class="overlay"></div>
            <div style="position:fixed; top:0; width:100%; padding:1.2rem 2.5rem; display:flex; justify-content:space-between; background:rgba(0,0,0,0.85); backdrop-filter:blur(10px); z-index:100; border-bottom:1px solid #d4af37;">
                <div style="font-weight:900; color:#d4af37; letter-spacing:1px; font-size:1.2rem;">SALES GUIA - SANTA GROUP</div>
                <div style="display:flex; align-items:center; gap:20px;">
                    <span style="font-size:0.75rem; background:#d4af37; color:#000; padding:4px 12px; border-radius:6px; font-weight:900; text-transform:uppercase;">${App.state.currentUser.role}</span>
                    <button onclick="App.logout()" style="background:none; border:1px solid #ef4444; color:#ef4444; padding:5px 15px; border-radius:6px; cursor:pointer; font-weight:900; font-size:0.8rem; transition:0.3s;">SAIR</button>
                </div>
            </div>
            <div class="funnelContainer" style="padding-top: 100px;">
                ${['olheiro', 'defesa', 'meio', 'ataque', 'fechamento', 'posvenda'].map(id => {
                    const titles = {olheiro: '🕵️‍♂️ Olheiro', defesa: '🛡️ Defesa', meio: '⚽ Meio de Campo', ataque: '⚔️ Ataque', fechamento: '🤝 Fechamento', posvenda: '📦 Pós Venda'};
                    const descs = {olheiro: 'Observe o player e entenda o melhor momento.', defesa: 'Ganhe a atenção do cliente e inicie a conversa.', meio: 'Entenda a necessidade através de perguntas-chave.', ataque: 'Transforme a dor em solução e crie urgência.', fechamento: 'Transforma interesse em decisão.', posvenda: 'Transforma cliente em recorrência.'};
                    return `<div class="funnelStep step${id.charAt(0).toUpperCase() + id.slice(1)}" onclick="App.navigateToCategory('${id}')"><span class="funnelStepTitle">${titles[id]}</span><span class="funnelStepDesc">${descs[id]}</span></div>`;
                }).join('')}
            </div>`,

        category: (data) => {
            if (!data) return '<div style="color:white; padding:100px; text-align:center;">Carregando conteúdo... Verifique a aba Console no F12 se demorar.</div>';
            
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
                                        <div style="background:rgba(0,0,0,0.3); margin-bottom:10px; border-radius:8px; padding: 5px 0;">
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
                        ${data.videoCategories ? data.videoCategories.map(cat => `
                            <section class="videoSection" style="margin-top: 4rem;">
                                <h1 class="sectionTitle" style="font-size: 1.5rem; font-weight: 900; text-align: center; margin-bottom: 2rem; color: #fff; text-transform: uppercase;">${cat.title}</h1>
                                <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
                                    ${cat.videos.map(v => `
                                        <div style="background:#111; padding:1rem; border-radius:12px; border:1px solid rgba(255,255,255,0.05);">
                                            <h3 style="color:${v.color}; font-size:0.9rem; margin-bottom:10px; font-weight:800; text-align:center;">${v.label}</h3>
                                            <div style="position:relative; padding-bottom:56.25%; height:0; border-radius:8px; overflow:hidden;">
                                                <iframe src="${v.url}" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;" allow="autoplay"></iframe>
                                            </div>
                                        </div>`).join('')}
                                </div>
                            </section>`).join('') : ''}
                    </main>
                </div>`;
        }
    },

    renderSection(s) {
        if (s.isSectionTitle) return `<div class="topHeadingFree" style="grid-column:1/-1; text-align:center; color:#fff; font-size:1.5rem; font-weight:900; margin:2rem 0; text-transform:uppercase; letter-spacing:1px;">${s.title}</div>`;
        if (s.isRecommendationHeader) return `<div class="cardSpanFull" style="margin-top: 1rem;"><h2 style="font-size: 1.4rem; color: #fff; text-align: left; width: 100%; font-weight: 800;">${s.title}</h2></div>`;
        
        if (s.isPreparation) return `
            <div class="preparationGrid" style="grid-column: 1 / -1; display:grid; grid-template-columns: 1.5fr 1fr; gap:2rem; background:#111; padding:2.5rem; border-radius:12px; border:2px solid rgba(255,255,255,0.1); align-items:center; box-shadow: 0 15px 35px rgba(0,0,0,0.7); margin-top: 1.5rem; margin-bottom: 2.5rem;">
                <div>
                    <h2 style="color:#fff; font-weight:800; margin-bottom:1rem; font-size:1.4rem;">${s.title}</h2>
                    <p style="margin-bottom:1rem;"><strong style="color:#fff; display:block; margin-bottom:5px;">🎯 OBJETIVO:</strong> <span style="color:#eee;">${s.goal}</span></p>
                    <div style="margin-bottom:1rem;">
                        <strong style="color:#fff; display:block; margin-bottom:8px;">🚀 AÇÕES</strong>
                        <div class="dataList">${s.actions.map(a => `<div class="aligned-list-item"><strong>•</strong> <span>${a}</span></div>`).join('')}</div>
                    </div>
                    <p><strong style="color:#fff; display:block; margin-bottom:5px;">🏆 RESULTADO ESPERADO:</strong> <span style="color:#eee;">${s.result}</span></p>
                </div>
                <div class="prepPhoto" style="display:flex; justify-content:center; align-items:center; position:relative; padding:0;">
                    <img src="${s.image}" style="max-width:480px; width:100%; border-radius:8px; border: 3px solid #fde047; box-shadow: 0 0 25px rgba(253, 224, 71, 0.6); position:relative; z-index:1;">
                </div>
            </div>`;

        if (s.isComic) return `<div class="cardSpanFull comicContainer" style="margin-top:2rem; border-radius:12px; overflow:hidden; border:2px solid rgba(255,255,255,0.15);"><img src="${s.image}" style="width:100%; height:auto; display:block;"></div>`;

        const extraClass = (s.isFull || s.isError) ? "cardSpanFull" : "";
        
        return `
            <section class="infoCard ${extraClass} ${s.isError ? 'errorCard' : ''}" style="background:#111; border-radius:12px; border:1px solid rgba(255,255,255,0.05); padding:1.5rem;">
                <h2 style="font-size: 1.3rem; color: #fff; margin-bottom: 1rem; font-weight: 800; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px;">${s.title}</h2>
                <div class="dataList" style="display:flex; flex-direction:column; gap:14px;">
                    ${s.items ? s.items.map(i => i === '---' ? '<div class="listDivider" style="border-bottom: 1px solid rgba(255,255,255,0.1); width: 100%; margin: 0;"></div>' : (i.trim().startsWith('<') ? i : `<div class="aligned-list-item">${i}</div>`)).join('') : ''}
                </div>
                ${s.footer ? `<div class="hintBox" style="margin-top:1.5rem; padding:14px 18px; background:linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(34, 197, 94, 0.05)); border-left:4px solid #22c55e; border-radius:0 8px 8px 0; color:#fff; font-weight:500;">${s.footer}</div>` : ''}
                ${s.warning ? `<div class="warningBox" style="margin-top:10px; color:#fff; font-size:0.9rem;">⚠️ ${s.warning}</div>` : ''}
            </section>`;
    }
};

window.handleLoginSubmit = async function(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.innerText = "VERIFICANDO...";
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const result = await App.login(email, password);
    
    if (!result.success) {
        const err = document.getElementById('loginError');
        err.innerText = result.message;
        err.style.display = 'block';
        btn.innerText = "ENTRAR NO SISTEMA";
    }
};