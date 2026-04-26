const UI = {
    render() {
        const root = document.getElementById('applicationRoot');
        
        if (!App.state.currentUser) {
            root.innerHTML = this.templates.auth();
            return;
        }

        if (App.state.currentUser.status !== 'approved') {
            root.innerHTML = `
                <div style="height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; background:#000; color:#fff; text-align:center; font-family:Inter,sans-serif; background-image: url('AssetStore/image_1e6304.jpg'); background-size:cover; background-position:center;">
                    <div style="background:rgba(0,0,0,0.85); padding:3rem; border-radius:24px; border:1px solid #d4af37; backdrop-filter: blur(10px);">
                        <h1 style="color:#d4af37; margin-bottom:1rem; font-size:2rem; font-weight:900;">ACESSO EM ANÁLISE ⏳</h1>
                        <p style="color:#ccc; max-width:400px; line-height:1.6; font-weight:600;">Olá <strong>${App.state.currentUser.name}</strong>, seu cadastro foi recebido.<br>Aguarde a aprovação do administrador para acessar o sistema.</p>
                        <button onclick="App.logout()" style="margin-top:2rem; background:#d4af37; border:none; color:#000; padding:14px 30px; border-radius:12px; cursor:pointer; font-weight:900; text-transform:uppercase;">SAIR DO SISTEMA</button>
                    </div>
                </div>`;
            return;
        }

        if (App.state.currentView === 'admin' && App.state.currentUser.role === 'admin') {
            root.innerHTML = this.templates.admin();
        } else if (App.state.currentView === 'menu') {
            root.innerHTML = this.templates.menu();
        } else {
            const data = this.getActiveData();
            if (!data) {
                root.innerHTML = '<div style="color:#d4af37; padding:100px; text-align:center; font-size:1.5rem; font-weight:900;">CARREGANDO DADOS...</div>';
                return;
            }
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
        background: () => `
            <style>
                .bgContainer { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-image: url('AssetStore/image_1e6304.jpg'); background-size: cover; background-position: center; z-index: 1; opacity: 0.35; }
                .overlayContainer { 
                    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; 
                    background: radial-gradient(circle at center, rgba(10,10,10,0.6) 0%, rgba(0,0,0,0.9) 100%); 
                    backdrop-filter: blur(4px); z-index: 2; 
                    pointer-events: none; /* PERMITE O CLIQUE ATRAVÉS DO DESFOQUE */
                }
            </style>
            <div class="bgContainer"></div>
            <div class="overlayContainer"></div>
        `,

        auth: () => `
            ${UI.templates.background()}
            <style>
                body { margin: 0; font-family: 'Inter', sans-serif; background-color: #000; overflow: hidden; }
                .authWrapper { height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; z-index: 10; padding: 20px; }
                .authBox { background: rgba(15, 15, 15, 0.7); backdrop-filter: blur(25px); border: 1px solid rgba(212, 175, 55, 0.2); padding: 3.5rem; border-radius: 24px; width: 100%; max-width: 440px; text-align: center; }
                .authHeader h1 { color: #d4af37; font-weight: 900; font-size: 2.2rem; text-transform: uppercase; margin: 0; }
                .authInput { width: 100%; padding: 16px; background: rgba(0,0,0,0.6); border: 1px solid rgba(255,255,255,0.1); color: #fff; border-radius: 12px; margin-bottom: 1rem; }
                .authBtn { width: 100%; padding: 18px; background: #d4af37; border: none; color: #000; font-weight: 900; border-radius: 12px; cursor: pointer; text-transform: uppercase; }
            </style>
            <div class="authWrapper">
                <div class="authBox">
                    <div class="authHeader"><h1>SALES GUIA</h1><p style="color:#aaa;">Santa Group</p></div>
                    <div id="authMessage" style="display:none; margin-bottom:1rem; padding:10px; border-radius:8px;"></div>
                    <form onsubmit="window.handleAuthSubmit(event, 'login')" id="loginForm">
                        <input type="email" id="loginEmail" class="authInput" placeholder="E-mail" required>
                        <input type="password" id="loginPassword" class="authInput" placeholder="Senha" required>
                        <button type="submit" class="authBtn">Acessar Sistema</button>
                        <p style="color:#aaa; cursor:pointer; margin-top:1rem;" onclick="window.toggleAuthView('register')">Solicitar acesso</p>
                    </form>
                    <form onsubmit="window.handleAuthSubmit(event, 'register')" id="registerForm" style="display:none;">
                        <input type="text" id="regName" class="authInput" placeholder="Nome Completo" required>
                        <input type="email" id="regEmail" class="authInput" placeholder="E-mail" required>
                        <input type="password" id="regPassword" class="authInput" placeholder="Sua Senha" required>
                        <button type="submit" class="authBtn" style="background:#22c55e;">Registrar</button>
                        <p style="color:#aaa; cursor:pointer; margin-top:1rem;" onclick="window.toggleAuthView('login')">Voltar ao Login</p>
                    </form>
                </div>
            </div>`,

        menu: () => `
            ${UI.templates.background()}
            <style>
                .menuTopbar { position: fixed; top: 0; left: 0; right: 0; height: 80px; background: rgba(10,10,10,0.9); border-bottom: 1px solid #d4af37; display: flex; align-items: center; justify-content: space-between; padding: 0 4rem; z-index: 100; }
                .funnelWrapper { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; padding-top: 100px; gap: 14px; position: relative; z-index: 10;}
                .funnelCard { width: 100%; max-width: 800px; background: rgba(15,15,15,0.8); border: 1px solid #d4af37; border-radius: 12px; padding: 1.5rem; cursor: pointer; transition: 0.3s; text-align: center; }
                .funnelCard:hover { background: #d4af37; transform: scale(1.02); }
                .funnelCard:hover h3, .funnelCard:hover p { color: #000; }
                .btnIcon { background: rgba(255,255,255,0.1); border: 1px solid #d4af37; color:#fff; padding: 10px; border-radius: 8px; cursor: pointer; }
            </style>
            <div class="menuTopbar">
                <div style="color:#d4af37; font-weight:900; font-size:1.4rem;">SALES GUIA</div>
                <div style="display:flex; gap:15px; align-items:center;">
                    ${App.state.currentUser.role === 'admin' ? `<button onclick="App.navigateToAdmin()" class="btnIcon">⚙️</button>` : ''}
                    <button onclick="App.logout()" style="background:#ef4444; border:none; color:#fff; padding:10px 20px; border-radius:8px; font-weight:900; cursor:pointer;">SAIR</button>
                </div>
            </div>
            <div class="funnelWrapper">
                ${['olheiro', 'defesa', 'meio', 'ataque', 'fechamento', 'posvenda'].map(id => `
                    <div class="funnelCard" onclick="App.navigateToCategory('${id}')">
                        <h3 style="color:#fff; margin:0; text-transform:uppercase;">${id}</h3>
                    </div>`).join('')}
            </div>`,

        category: (data) => `
            ${UI.templates.background()}
            <style>
                .sidebar { width: 340px; position: fixed; top: 0; left: 0; height: 100vh; background: rgba(10,10,10,0.95); z-index: 50; display: flex; flex-direction: column; box-shadow: 5px 0 20px rgba(0,0,0,0.5); }
                .workspace { margin-left: 340px; padding: 4rem; position: relative; z-index: 10; }
                .navItem { padding: 1.2rem; margin: 0 1rem 5px; color: #888; cursor: pointer; font-weight: 800; border-radius: 8px; transition: 0.2s; }
                .navItem:hover { background: rgba(255,255,255,0.05); color:#fff; }
                .navItem.active { background: rgba(212,175,55,0.15); color: #d4af37; border-left: 4px solid #d4af37; }
                .headerImgBox { width: 420px; height: 240px; border: 2px solid #d4af37; border-radius: 12px; overflow: hidden; }
                .headerImgBox img { width: 100%; height: 100%; object-fit: cover; }
            </style>
            <div class="sidebar">
                <button onclick="App.navigateToMenu()" style="margin:2rem 1rem; padding:1rem; background:rgba(212,175,55,0.1); border:1px solid #d4af37; color:#d4af37; font-weight:900; border-radius:8px; cursor:pointer;">⬅ MENU INICIAL</button>
                <nav>
                    ${['olheiro', 'defesa', 'meio', 'ataque', 'fechamento', 'posvenda'].map(id => `
                        <div class="navItem ${App.state.currentCategoryId === id ? 'active' : ''}" onclick="${id === 'meio' ? 'App.toggleMeio(event)' : `App.navigateToCategory('${id}')`}">
                            ${id.toUpperCase()}
                        </div>
                        ${id === 'meio' && App.state.isMeioExpanded ? `
                            <div style="margin-left: 1rem;">
                                ${Object.values(App.state.content.profiles).map(p => `
                                    <div onclick="App.navigateToProfile('${p.id}')" style="padding:10px 20px; color:${App.state.currentProfileId === p.id ? '#fff' : '#666'}; cursor:pointer; font-weight:600;">
                                        • ${p.shortTitle}
                                    </div>
                                `).join('')}
                            </div>` : ''}
                    `).join('')}
                </nav>
            </div>
            <main class="workspace">
                <header style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4rem;">
                    <div><h1 style="font-size:3rem; margin:0;">${data.title}</h1><p style="color:#aaa;">${data.description}</p></div>
                    <div class="headerImgBox"><img src="${data.image}"></div>
                </header>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:2rem;">
                    ${data.sections.map(s => UI.renderSection(s)).join('')}
                </div>
            </main>`
    },

    renderSection(s) {
        if (s.isSectionTitle) return `<div style="grid-column: 1/-1; color:#d4af37; font-size:1.8rem; font-weight:900; border-bottom:1px solid #d4af37; padding:10px 0; margin-top:2rem;">${s.title}</div>`;
        return `
            <div style="background:rgba(15,15,15,0.8); padding:2rem; border-radius:16px; border:1px solid rgba(255,255,255,0.1);">
                <h3 style="color:#d4af37; margin: 0 0 1rem 0;">${s.title}</h3>
                <div style="color:#eee;">${s.items ? s.items.map(i => `<div style="margin-bottom:8px;">${i}</div>`).join('') : ''}</div>
            </div>`;
    }
};

// Funções globais obrigatórias
window.toggleAuthView = (view) => {
    document.getElementById('loginForm').style.display = view === 'login' ? 'block' : 'none';
    document.getElementById('registerForm').style.display = view === 'register' ? 'block' : 'none';
};

window.handleAuthSubmit = async (e, action) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.innerText = 'PROCESSANDO...';
    
    if (action === 'login') {
        const res = await App.login(document.getElementById('loginEmail').value, document.getElementById('loginPassword').value);
        if (!res.success) alert(res.message);
    } else {
        const res = await App.register(document.getElementById('regName').value, document.getElementById('regEmail').value, document.getElementById('regPassword').value);
        if (res.success) { alert('Solicitação enviada!'); window.toggleAuthView('login'); }
    }
    btn.innerText = action === 'login' ? 'Acessar Sistema' : 'Registrar';
};

window.updateUserRole = (email, role, status) => App.updateAdminUser(email, role, status);
window.deleteUser = (email) => { if(confirm('Excluir usuário?')) App.deleteAdminUser(email); };