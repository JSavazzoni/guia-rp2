const UI = {
    render() {
        const root = document.getElementById('applicationRoot');
        if (!App.state.currentUser) {
            root.innerHTML = this.templates.auth();
            return;
        }
        if (App.state.currentView === 'admin' && App.state.currentUser.role === 'admin') {
            root.innerHTML = this.templates.admin();
        } else if (App.state.currentView === 'menu') {
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
        auth: () => `
            <div style="height:100vh; display:flex; align-items:center; justify-content:center; background: radial-gradient(circle at center, rgba(30,30,30,0.4) 0%, #000 100%);">
                <div style="background:rgba(15,15,15,0.95); backdrop-filter:blur(20px); padding:4rem; border-radius:24px; border:1px solid #d4af37; width:450px; text-align:center; box-shadow: 0 0 60px rgba(0,0,0,0.8);">
                    <h1 style="color:#d4af37; margin-bottom:0.5rem; font-weight:900; font-size:2.2rem; letter-spacing:2px; text-transform:uppercase;">SALES GUIA</h1>
                    <p style="color:#888; margin-bottom:2rem; font-weight:600; font-size:0.9rem; text-transform:uppercase; letter-spacing:4px;">Santa Group</p>
                    
                    <div id="authForms">
                        <p id="authMessage" style="display:none; margin-bottom:1.5rem; font-weight:900; font-size:0.85rem; padding:10px; border-radius:8px;"></p>
                        
                        <form id="loginForm" onsubmit="window.handleAuthSubmit(event, 'login')">
                            <input type="email" id="loginEmail" placeholder="E-MAIL" required style="width:100%; padding:16px; margin-bottom:15px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff; border-radius:12px; outline:none; font-weight:600;">
                            <input type="password" id="loginPassword" placeholder="SENHA" required style="width:100%; padding:16px; margin-bottom:30px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff; border-radius:12px; outline:none; font-weight:600;">
                            <button type="submit" style="width:100%; padding:18px; background:#d4af37; border:none; color:#000; font-weight:900; border-radius:12px; cursor:pointer; font-size:1.1rem; transition:0.3s; box-shadow: 0 4px 15px rgba(212,175,55,0.3);">ENTRAR</button>
                            <p style="margin-top:20px; font-size:0.85rem; color:#888; cursor:pointer;" onclick="window.toggleAuthView('register')">Não possui acesso? Solicitar cadastro.</p>
                        </form>

                        <form id="registerForm" onsubmit="window.handleAuthSubmit(event, 'register')" style="display:none;">
                            <input type="text" id="regName" placeholder="NOME COMPLETO" required style="width:100%; padding:16px; margin-bottom:15px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff; border-radius:12px; outline:none; font-weight:600;">
                            <input type="email" id="regEmail" placeholder="E-MAIL" required style="width:100%; padding:16px; margin-bottom:15px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff; border-radius:12px; outline:none; font-weight:600;">
                            <input type="password" id="regPassword" placeholder="SENHA" required style="width:100%; padding:16px; margin-bottom:30px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff; border-radius:12px; outline:none; font-weight:600;">
                            <button type="submit" style="width:100%; padding:18px; background:#22c55e; border:none; color:#000; font-weight:900; border-radius:12px; cursor:pointer; font-size:1.1rem; transition:0.3s;">SOLICITAR ACESSO</button>
                            <p style="margin-top:20px; font-size:0.85rem; color:#888; cursor:pointer;" onclick="window.toggleAuthView('login')">Já possui conta? Fazer login.</p>
                        </form>
                    </div>
                </div>
            </div>`,

        admin: () => `
            <div style="padding: 100px 5% 2rem; min-height: 100vh; background: #000;">
                <div class="top-bar" style="position:fixed; top:0; left:0; width:100%; padding:1.2rem 2.5rem; display:flex; justify-content:space-between; background:rgba(0,0,0,0.9); z-index:100; border-bottom:1px solid #d4af37;">
                    <div style="font-weight:900; color:#d4af37; letter-spacing:1px; font-size:1.2rem;">PAINEL ADMIN - SANTA GROUP</div>
                    <button onclick="App.navigateToMenu()" style="background:#d4af37; border:none; color:#000; padding:8px 16px; border-radius:6px; cursor:pointer; font-weight:900;">VOLTAR AO SISTEMA</button>
                </div>
                <h1 style="color: #fff; margin-bottom: 2rem;">Gerenciamento de Usuários</h1>
                <div style="display: flex; flex-direction: column; gap: 15px;">
                    ${App.state.adminUsers.map(u => `
                        <div style="background: #111; border: 1px solid #333; padding: 20px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <h3 style="color: #d4af37; margin: 0 0 5px 0;">${u.name}</h3>
                                <p style="color: #aaa; margin: 0;">${u.email}</p>
                            </div>
                            <div style="display: flex; gap: 15px; align-items: center;">
                                <select onchange="window.updateUserRole('${u.email}', this.value, '${u.status}')" style="padding: 8px; background: #222; color: #fff; border: 1px solid #444; border-radius: 6px; outline:none;">
                                    <option value="vendedor" ${u.role === 'vendedor' ? 'selected' : ''}>Vendedor</option>
                                    <option value="admin" ${u.role === 'admin' ? 'selected' : ''}>Admin</option>
                                </select>
                                <select onchange="window.updateUserRole('${u.email}', '${u.role}', this.value)" style="padding: 8px; background: #222; color: #fff; border: 1px solid #444; border-radius: 6px; outline:none;">
                                    <option value="pending" ${u.status === 'pending' ? 'selected' : ''}>Pendente</option>
                                    <option value="approved" ${u.status === 'approved' ? 'selected' : ''}>Aprovado</option>
                                    <option value="rejected" ${u.status === 'rejected' ? 'selected' : ''}>Reprovado</option>
                                </select>
                                <button onclick="window.deleteUser('${u.email}')" style="background: #ef4444; color: #fff; border: none; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-weight:bold;">Excluir</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>`,

        menu: () => `
            <div class="overlay"></div>
            <div style="position:fixed; top:0; width:100%; padding:1.2rem 2.5rem; display:flex; justify-content:space-between; background:rgba(0,0,0,0.85); backdrop-filter:blur(10px); z-index:100; border-bottom:1px solid #d4af37;">
                <div style="font-weight:900; color:#d4af37; letter-spacing:1px; font-size:1.2rem;">SALES GUIA - SANTA GROUP</div>
                <div style="display:flex; align-items:center; gap:20px;">
                    ${App.state.currentUser.role === 'admin' ? `<span onclick="App.navigateToAdmin()" style="cursor:pointer; font-size:1.5rem;" title="Painel Admin">⚙️</span>` : ''}
                    <span style="font-size:0.75rem; background:#d4af37; color:#000; padding:4px 12px; border-radius:6px; font-weight:900; text-transform:uppercase;">${App.state.currentUser.role}</span>
                    <button onclick="App.logout()" style="background:none; border:1px solid #ef4444; color:#ef4444; padding:5px 15px; border-radius:6px; cursor:pointer; font-weight:900; font-size:0.8rem; transition:0.3s;">SAIR</button>
                </div>
            </div>
            <div class="funnelContainer" style="padding-top: 100px;">
                ${[
                    {id: 'olheiro', title: '🕵️‍♂️ Olheiro', desc: 'Observe o player e entenda o melhor momento.'},
                    {id: 'defesa', title: '🛡️ Defesa', desc: 'Ganhe a atenção do cliente e inicie a conversa.'},
                    {id: 'meio', title: '⚽ Meio de Campo', desc: 'Entenda a necessidade através de perguntas-chave.'},
                    {id: 'ataque', title: '⚔️ Ataque', desc: 'Transforme a dor em solução e crie urgência.'},
                    {id: 'fechamento', title: '🤝 Fechamento', desc: 'Transforma interesse em decisão.'},
                    {id: 'posvenda', title: '📦 Pós Venda', desc: 'Transforma cliente em recorrência.'}
                ].map(cat => `
                    <div class="funnelStep step${cat.id.charAt(0).toUpperCase() + cat.id.slice(1)}" onclick="App.navigateToCategory('${cat.id}')">
                        <span class="funnelStepTitle">${cat.title}</span>
                        <span class="funnelStepDesc">${cat.desc}</span>
                    </div>
                `).join('')}
            </div>`,

        category: (data) => {
            if (!data) return '<div style="color:white; padding:100px; text-align:center;">Carregando conteúdo...</div>';
            
            const profiles = App.state.content.profiles;
            const sidebarCategories = [
                { id: 'olheiro', label: '🕵️‍♂️ OLHEIRO' },
                { id: 'defesa', label: '🛡️ DEFESA' },
                { id: 'meio', label: '⚽ MEIO DE CAMPO' },
                { id: 'ataque', label: '⚔️ ATAQUE' },
                { id: 'fechamento', label: '🤝 FECHAMENTO' },
                { id: 'posvenda', label: '📦 PÓS VENDA' }
            ];

            return `
                <div class="overlay"></div>
                <style>
                    html, body { margin: 0; padding: 0; overflow: hidden; height: 100vh; }
                    * { box-sizing: border-box; scrollbar-width: thin; scrollbar-color: rgba(255, 255, 255, 0.05) transparent; }
                    ::-webkit-scrollbar { width: 6px; height: 6px; }
                    ::-webkit-scrollbar-track { background: transparent; }
                    ::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.03); border-radius: 10px; }
                    ::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.1); }

                    .layoutContainer { max-width: 100% !important; display: flex; height: 100vh; overflow: hidden; }
                    
                    /* Borda branca removida e tamanho da barra aumentado para 340px */
                    .sidebarNavigation { width: 340px !important; flex-shrink: 0; display: flex; flex-direction: column; border-right: none; background: rgba(0,0,0,0.85); overflow-y: auto; }
                    .sidebarNavigation::-webkit-scrollbar { display: none; }
                    .mainWorkspace { padding: 2rem 5% !important; flex-grow: 1; max-width: calc(100vw - 340px); overflow-y: auto; text-align: left; }
                    
                    .headerContainer { display: flex; align-items: center; justify-content: space-between; gap: 2.5rem; margin-bottom: 3rem; }
                    .pageTitle { font-size: 2rem !important; margin-bottom: 0.6rem; text-align: left; font-weight: 800; color: #fff; }
                    .pageDescription { font-size: 1.05rem !important; line-height: 1.5; text-align: left; color: #ccc; }
                    
                    .headerImageContainer { width: 300px; height: 300px; border-radius: 16px; border: 2px solid #d4af37; overflow: hidden; display: flex; justify-content: center; align-items: center; background: #000; box-shadow: 0 10px 30px rgba(0,0,0,0.8); flex-shrink: 0; }
                    .headerImageContainer img { width: 100%; height: 100%; object-fit: cover; display: block; }

                    .contentGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.8rem; width: 100%; align-items: stretch; }
                    .cardSpanFull { grid-column: 1 / -1; }
                    
                    .dataList { display: flex; flex-direction: column; gap: 14px; width: 100%; list-style: none; padding: 0; margin: 0; }
                    .dataList div { font-size: 1rem !important; line-height: 1.6; text-align: left; color: #eee; }

                    .aligned-list-item { display: flex; align-items: flex-start; gap: 12px; width: 100%; font-size: 1.05rem; margin: 0; padding: 0; }
                    .aligned-list-item strong { flex-shrink: 0; color: #fff; }
                    .aligned-list-item span { flex-grow: 1; text-align: left; }

                    .navItem { font-size: 1.15rem !important; white-space: nowrap; padding: 1.2rem 1.6rem !important; font-weight: 700; border-bottom: 1px solid rgba(255,255,255,0.05); cursor: pointer; transition: all 0.3s; color: #888; }
                    .navItem:hover { background: rgba(255,255,255,0.05); color: #fff; }
                    .navItemActive { color: #fff !important; background: rgba(255,255,255,0.1) !important; border-left: 4px solid #fff; }
                    .navSubItemActive { color: #fff !important; background: rgba(255,255,255,0.1) !important; font-weight: 900 !important; border-left: 4px solid #fff; }
                </style>
                <div class="layoutContainer">
                    <aside class="sidebarNavigation">
                        <button class="backButton" onclick="App.navigateToMenu()" style="margin: 1.5rem 1rem; padding: 1rem; background: rgba(0,0,0,0.5); border: 1px solid #d4af37; color: #fff; font-weight: 800; border-radius: 8px; cursor: pointer; transition: 0.3s;">⬅ MENU INICIAL</button>
                        <nav class="navigationMenu">
                            ${sidebarCategories.map(cat => {
                                const isMeio = cat.id === 'meio';
                                const isActive = App.state.currentCategoryId === cat.id;
                                return `
                                    <div class="navItem ${isActive && !App.state.currentProfileId ? 'navItemActive' : ''}" onclick="${isMeio ? 'App.toggleMeio(event)' : `App.navigateToCategory('${cat.id}')`}">
                                        ${cat.label} ${isMeio ? (App.state.isMeioExpanded ? '▾' : '▸') : ''}
                                    </div>
                                    ${isMeio && App.state.isMeioExpanded ? `
                                        <div style="background:rgba(0,0,0,0.3); padding: 5px 0;">
                                            ${Object.values(profiles).map(p => `
                                                <div class="navItem ${App.state.currentProfileId === p.id ? 'navSubItemActive' : ''}" style="font-size:0.85rem !important; border:none; padding-left:3.5rem !important; color:#aaa;" onclick="App.navigateToProfile('${p.id}')">
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
        const borderColor = s.isError ? "border-color: #ef4444;" : "border-color: rgba(255,255,255,0.05);";
        
        return `
            <section class="infoCard ${extraClass} ${s.isError ? 'errorCard' : ''}" style="background:#111; border-radius:12px; border:1px solid; ${borderColor} padding:1.5rem; display:flex; flex-direction:column;">
                <h2 style="font-size: 1.3rem; color: #fff; margin-bottom: 1rem; font-weight: 800; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px;">${s.title}</h2>
                <div class="dataList" style="display:flex; flex-direction:column; gap:14px; flex-grow:1;">
                    ${s.items ? s.items.map(i => i === '---' ? '<div class="listDivider" style="border-bottom: 1px solid rgba(255,255,255,0.1); width: 100%; margin: 0;"></div>' : (i.trim().startsWith('<') ? i : `<div class="aligned-list-item">${i}</div>`)).join('') : ''}
                </div>
                ${s.footer ? `<div class="hintBox" style="margin-top:1.5rem; padding:14px 18px; background:linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(34, 197, 94, 0.05)); border-left:4px solid #22c55e; border-radius:0 8px 8px 0; color:#fff; font-weight:500;">${s.footer}</div>` : ''}
                ${s.warning ? `<div class="warningBox" style="margin-top:10px; color:#fff; font-size:0.9rem; background:rgba(239,68,68,0.1); border:1px solid #ef4444; padding:10px; border-radius:8px;">⚠️ ${s.warning}</div>` : ''}
            </section>`;
    }
};

window.toggleAuthView = function(view) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const msg = document.getElementById('authMessage');
    msg.style.display = 'none';

    if (view === 'register') {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    } else {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    }
};

window.handleAuthSubmit = async function(e, action) {
    e.preventDefault();
    const msg = document.getElementById('authMessage');
    const btn = e.target.querySelector('button');
    const originalText = btn.innerText;
    btn.innerText = "AGUARDE...";

    try {
        if (action === 'login') {
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const result = await App.login(email, password);
            if (!result.success) {
                msg.innerText = result.message;
                msg.style.color = '#ef4444';
                msg.style.background = 'rgba(239,68,68,0.1)';
                msg.style.display = 'block';
            }
        } else {
            const name = document.getElementById('regName').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            const result = await App.register(name, email, password);
            if (result.success) {
                msg.innerText = result.message;
                msg.style.color = '#22c55e';
                msg.style.background = 'rgba(34,197,94,0.1)';
                msg.style.display = 'block';
                e.target.reset();
                setTimeout(() => window.toggleAuthView('login'), 3000);
            } else {
                msg.innerText = result.message;
                msg.style.color = '#ef4444';
                msg.style.background = 'rgba(239,68,68,0.1)';
                msg.style.display = 'block';
            }
        }
    } catch (err) {
        msg.innerText = "Erro no servidor.";
        msg.style.display = 'block';
    } finally {
        btn.innerText = originalText;
    }
};

window.updateUserRole = function(email, role, status) {
    App.updateAdminUser(email, role, status);
};

window.deleteUser = function(email) {
    if (confirm(`Tem certeza que deseja excluir ${email}?`)) {
        App.deleteAdminUser(email);
    }
};