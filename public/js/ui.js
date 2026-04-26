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
            <style>
                body { margin: 0; padding: 0; background: #000; font-family: 'Inter', sans-serif; overflow: hidden; }
                .auth-wrapper { height: 100vh; display: flex; align-items: center; justify-content: center; background: radial-gradient(circle at top right, rgba(212, 175, 55, 0.15) 0%, transparent 40%), radial-gradient(circle at bottom left, rgba(212, 175, 55, 0.1) 0%, transparent 40%), #030303; }
                .auth-box { background: #0a0a0a; border: 1px solid rgba(255,255,255,0.05); border-top: 2px solid #d4af37; padding: 3.5rem; border-radius: 16px; width: 100%; max-width: 440px; text-align: center; box-shadow: 0 20px 50px rgba(0,0,0,0.8); }
                .auth-header h1 { color: #d4af37; margin: 0 0 5px 0; font-weight: 900; font-size: 2rem; letter-spacing: 2px; text-transform: uppercase; }
                .auth-header p { color: #666; margin: 0 0 2.5rem 0; font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 4px; }
                .auth-input-group { text-align: left; margin-bottom: 1.2rem; }
                .auth-label { display: block; color: #888; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; margin-left: 4px; }
                .auth-input { width: 100%; padding: 14px 16px; background: #111; border: 1px solid #222; color: #fff; border-radius: 8px; font-size: 1rem; outline: none; font-weight: 500; transition: all 0.3s ease; }
                .auth-input:focus { border-color: #d4af37; background: #151515; box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1); }
                .auth-btn { width: 100%; padding: 16px; background: #d4af37; border: none; color: #000; font-weight: 900; border-radius: 8px; cursor: pointer; font-size: 1rem; letter-spacing: 1px; text-transform: uppercase; transition: 0.3s; margin-top: 1rem; }
                .auth-btn:hover { background: #fde047; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(212, 175, 55, 0.2); }
                .auth-btn.register { background: #22c55e; color: #000; }
                .auth-btn.register:hover { background: #4ade80; box-shadow: 0 8px 20px rgba(34, 197, 94, 0.2); }
                .auth-link { margin-top: 1.5rem; font-size: 0.9rem; color: #888; cursor: pointer; transition: 0.3s; display: inline-block; }
                .auth-link:hover { color: #fff; }
                .auth-alert { display: none; padding: 12px; border-radius: 8px; font-size: 0.9rem; font-weight: 700; margin-bottom: 1.5rem; text-align: left; }
            </style>
            <div class="auth-wrapper">
                <div class="auth-box">
                    <div class="auth-header">
                        <h1>SALES GUIA</h1>
                        <p>Santa Group</p>
                    </div>
                    <div id="authMessage" class="auth-alert"></div>
                    
                    <form id="loginForm" onsubmit="window.handleAuthSubmit(event, 'login')">
                        <div class="auth-input-group">
                            <label class="auth-label">E-mail corporativo</label>
                            <input type="email" id="loginEmail" class="auth-input" placeholder="exemplo@santagroup.com" required>
                        </div>
                        <div class="auth-input-group">
                            <label class="auth-label">Senha de acesso</label>
                            <input type="password" id="loginPassword" class="auth-input" placeholder="••••••••" required>
                        </div>
                        <button type="submit" class="auth-btn">Acessar Sistema</button>
                        <span class="auth-link" onclick="window.toggleAuthView('register')">Não possui acesso? <strong>Solicitar agora</strong></span>
                    </form>

                    <form id="registerForm" onsubmit="window.handleAuthSubmit(event, 'register')" style="display:none;">
                        <div class="auth-input-group">
                            <label class="auth-label">Nome Completo</label>
                            <input type="text" id="regName" class="auth-input" placeholder="Seu nome" required>
                        </div>
                        <div class="auth-input-group">
                            <label class="auth-label">E-mail corporativo</label>
                            <input type="email" id="regEmail" class="auth-input" placeholder="exemplo@santagroup.com" required>
                        </div>
                        <div class="auth-input-group">
                            <label class="auth-label">Criar Senha</label>
                            <input type="password" id="regPassword" class="auth-input" placeholder="••••••••" required>
                        </div>
                        <button type="submit" class="auth-btn register">Solicitar Registro</button>
                        <span class="auth-link" onclick="window.toggleAuthView('login')">Já possui conta? <strong>Fazer login</strong></span>
                    </form>
                </div>
            </div>`,

        admin: () => `
            <style>
                body { margin: 0; background: #050505; color: #fff; font-family: 'Inter', sans-serif; overflow-y: auto; }
                .admin-topbar { position: fixed; top: 0; left: 0; right: 0; height: 70px; background: rgba(10,10,10,0.9); backdrop-filter: blur(10px); border-bottom: 1px solid #222; display: flex; align-items: center; justify-content: space-between; padding: 0 3rem; z-index: 100; }
                .admin-brand { font-weight: 900; color: #d4af37; font-size: 1.2rem; letter-spacing: 1px; }
                .admin-back-btn { background: #111; color: #fff; border: 1px solid #333; padding: 8px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; transition: 0.2s; }
                .admin-back-btn:hover { background: #222; border-color: #d4af37; }
                .admin-layout { padding: 120px 3rem 4rem; max-width: 1400px; margin: 0 auto; }
                .admin-header { margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid #222; }
                .admin-header h1 { margin: 0 0 8px 0; font-size: 2.2rem; font-weight: 900; }
                .admin-header p { margin: 0; color: #888; font-size: 1rem; }
                
                .user-table-wrapper { background: #0a0a0a; border: 1px solid #222; border-radius: 12px; overflow: hidden; }
                .user-grid-header { display: grid; grid-template-columns: 2fr 1.5fr 1.5fr 1fr; background: #111; padding: 1rem 1.5rem; border-bottom: 1px solid #222; font-size: 0.8rem; font-weight: 800; color: #888; text-transform: uppercase; letter-spacing: 1px; }
                .user-grid-row { display: grid; grid-template-columns: 2fr 1.5fr 1.5fr 1fr; padding: 1.2rem 1.5rem; border-bottom: 1px solid #1a1a1a; align-items: center; transition: 0.2s; }
                .user-grid-row:hover { background: #111; }
                .user-grid-row:last-child { border-bottom: none; }
                
                .user-info-col strong { display: block; font-size: 1.05rem; color: #fff; margin-bottom: 4px; }
                .user-info-col span { color: #666; font-size: 0.85rem; }
                
                .select-pill { appearance: none; background: #111; border: 1px solid #333; color: #fff; padding: 8px 12px; border-radius: 6px; font-size: 0.9rem; font-weight: 600; cursor: pointer; outline: none; width: 140px; transition: 0.2s; }
                .select-pill:hover, .select-pill:focus { border-color: #d4af37; }
                
                .status-pending { color: #eab308; border-color: rgba(234, 179, 8, 0.3); background: rgba(234, 179, 8, 0.05); }
                .status-approved { color: #22c55e; border-color: rgba(34, 197, 94, 0.3); background: rgba(34, 197, 94, 0.05); }
                .status-rejected { color: #ef4444; border-color: rgba(239, 68, 68, 0.3); background: rgba(239, 68, 68, 0.05); }
                
                .del-btn { background: transparent; color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3); padding: 8px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; transition: 0.2s; }
                .del-btn:hover { background: rgba(239, 68, 68, 0.1); border-color: #ef4444; }
                
                .empty-state { text-align: center; padding: 4rem; color: #666; font-size: 1.1rem; }
            </style>
            
            <div class="admin-topbar">
                <div class="admin-brand">PAINEL ADMIN</div>
                <button onclick="App.navigateToMenu()" class="admin-back-btn">VOLTAR AO GUIA</button>
            </div>

            <div class="admin-layout">
                <div class="admin-header">
                    <h1>Gestão de Equipe</h1>
                    <p>Gerencie os acessos, cargos e permissões dos usuários do sistema.</p>
                </div>

                <div class="user-table-wrapper">
                    ${App.state.adminUsers.length === 0 ? '<div class="empty-state">Nenhum usuário cadastrado no sistema.</div>' : `
                        <div class="user-grid-header">
                            <div>Usuário</div>
                            <div>Cargo</div>
                            <div>Status do Acesso</div>
                            <div>Ações</div>
                        </div>
                        ${App.state.adminUsers.map(u => {
                            const statusClass = u.status === 'pending' ? 'status-pending' : (u.status === 'approved' ? 'status-approved' : 'status-rejected');
                            return `
                            <div class="user-grid-row">
                                <div class="user-info-col">
                                    <strong>${u.name}</strong>
                                    <span>${u.email}</span>
                                </div>
                                <div>
                                    <select onchange="window.updateUserRole('${u.email}', this.value, '${u.status}')" class="select-pill">
                                        <option value="vendedor" ${u.role === 'vendedor' ? 'selected' : ''}>Vendedor</option>
                                        <option value="admin" ${u.role === 'admin' ? 'selected' : ''}>Administrador</option>
                                    </select>
                                </div>
                                <div>
                                    <select onchange="window.updateUserRole('${u.email}', '${u.role}', this.value)" class="select-pill ${statusClass}">
                                        <option value="pending" ${u.status === 'pending' ? 'selected' : ''}>⏳ Pendente</option>
                                        <option value="approved" ${u.status === 'approved' ? 'selected' : ''}>✅ Aprovado</option>
                                        <option value="rejected" ${u.status === 'rejected' ? 'selected' : ''}>🚫 Bloqueado</option>
                                    </select>
                                </div>
                                <div>
                                    <button onclick="window.deleteUser('${u.email}')" class="del-btn">Excluir</button>
                                </div>
                            </div>
                        `}).join('')}
                    `}
                </div>
            </div>`,

        menu: () => `
            <style>
                body { margin: 0; background: #000; font-family: 'Inter', sans-serif; overflow-y: auto; }
                .menu-topbar { position: fixed; top: 0; left: 0; right: 0; height: 70px; background: rgba(5,5,5,0.9); backdrop-filter: blur(10px); border-bottom: 1px solid #d4af37; display: flex; align-items: center; justify-content: space-between; padding: 0 3rem; z-index: 100; }
                .menu-brand { font-weight: 900; color: #d4af37; font-size: 1.2rem; letter-spacing: 1px; }
                .menu-controls { display: flex; align-items: center; gap: 20px; }
                .role-tag { background: #d4af37; color: #000; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 900; text-transform: uppercase; }
                .btn-icon { background: none; border: none; cursor: pointer; font-size: 1.5rem; transition: transform 0.2s; }
                .btn-icon:hover { transform: scale(1.1); }
                .btn-logout { background: transparent; border: 1px solid #ef4444; color: #ef4444; padding: 6px 16px; border-radius: 6px; font-weight: 800; cursor: pointer; transition: 0.2s; font-size: 0.85rem; }
                .btn-logout:hover { background: rgba(239,68,68,0.1); }
                .funnel-wrapper { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; padding: 100px 20px 50px; gap: 10px; }
                .funnel-card { width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; background: linear-gradient(180deg, #151515 0%, #0a0a0a 100%); border: 1px solid #d4af37; min-height: 90px; padding: 1.5rem; cursor: pointer; transition: 0.3s; box-shadow: 0 10px 25px rgba(0,0,0,0.8); }
                .funnel-card:hover { background: #d4af37; transform: scale(1.02); }
                .funnel-card h3 { margin: 0; font-size: 1.2rem; font-weight: 900; text-transform: uppercase; letter-spacing: 1px; color: #fff; }
                .funnel-card p { margin: 0; font-size: 0.85rem; color: #888; text-align: center; }
                .funnel-card:hover h3, .funnel-card:hover p { color: #000; }
                .f-1 { max-width: 800px; } .f-2 { max-width: 700px; } .f-3 { max-width: 600px; } .f-4 { max-width: 500px; } .f-5 { max-width: 400px; } .f-6 { max-width: 300px; }
            </style>
            <div class="menu-topbar">
                <div class="menu-brand">SALES GUIA - SANTA GROUP</div>
                <div class="menu-controls">
                    ${App.state.currentUser.role === 'admin' ? `<button onclick="App.navigateToAdmin()" class="btn-icon" title="Painel de Controle">⚙️</button>` : ''}
                    <span class="role-tag">${App.state.currentUser.role}</span>
                    <button onclick="App.logout()" class="btn-logout">SAIR</button>
                </div>
            </div>
            <div class="funnel-wrapper">
                ${[
                    {id: 'olheiro', title: '🕵️‍♂️ Olheiro', desc: 'Observe o player e entenda o melhor momento.', cls: 'f-1'},
                    {id: 'defesa', title: '🛡️ Defesa', desc: 'Ganhe a atenção do cliente e inicie a conversa.', cls: 'f-2'},
                    {id: 'meio', title: '⚽ Meio de Campo', desc: 'Entenda a necessidade através de perguntas.', cls: 'f-3'},
                    {id: 'ataque', title: '⚔️ Ataque', desc: 'Transforme a dor em solução e crie urgência.', cls: 'f-4'},
                    {id: 'fechamento', title: '🤝 Fechamento', desc: 'Transforma interesse em decisão.', cls: 'f-5'},
                    {id: 'posvenda', title: '📦 Pós Venda', desc: 'Fidelização e recorrência do cliente.', cls: 'f-6'}
                ].map(cat => `
                    <div class="funnel-card ${cat.cls}" onclick="App.navigateToCategory('${cat.id}')">
                        <h3>${cat.title}</h3>
                        <p>${cat.desc}</p>
                    </div>
                `).join('')}
            </div>`,

        category: (data) => {
            if (!data) return '<div style="color:#fff; padding:100px; text-align:center; font-family:Inter,sans-serif;">Carregando...</div>';
            
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
                <style>
                    body { margin: 0; padding: 0; background: #000; font-family: 'Inter', sans-serif; color: #fff; overflow-x: hidden; overflow-y: auto; }
                    * { box-sizing: border-box; scrollbar-width: thin; scrollbar-color: rgba(255, 255, 255, 0.15) transparent; }
                    ::-webkit-scrollbar { width: 8px; height: 8px; }
                    ::-webkit-scrollbar-track { background: transparent; }
                    ::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 10px; }
                    ::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.3); }

                    /* SIDEBAR FIXA - Scroll do lado de fora arrumado */
                    .sidebar { width: 340px; position: fixed; top: 0; left: 0; height: 100vh; background: #0a0a0a; border-right: 1px solid #1a1a1a; overflow-y: auto; display: flex; flex-direction: column; z-index: 50; }
                    .sidebar::-webkit-scrollbar { display: none; }
                    
                    /* MAIN WORKSPACE COM MARGIN */
                    .workspace { margin-left: 340px; padding: 4rem 4rem 6rem; min-height: 100vh; }

                    .back-btn-side { margin: 2rem 1.5rem; padding: 1rem; background: #111; border: 1px solid #333; color: #fff; font-weight: 800; font-size: 0.9rem; border-radius: 8px; cursor: pointer; transition: 0.2s; letter-spacing: 1px; }
                    .back-btn-side:hover { border-color: #d4af37; background: #1a1a1a; }

                    .nav-item { padding: 1.2rem 1.5rem; font-weight: 800; font-size: 1.05rem; color: #888; cursor: pointer; transition: 0.2s; border-bottom: 1px solid #111; display: flex; justify-content: space-between; }
                    .nav-item:hover { background: #111; color: #fff; }
                    .nav-item.active { background: rgba(212, 175, 55, 0.05); color: #d4af37; border-left: 4px solid #d4af37; }
                    
                    .sub-nav { background: #050505; border-bottom: 1px solid #111; }
                    .sub-nav-item { padding: 1rem 1.5rem 1rem 3.5rem; font-size: 0.9rem; font-weight: 600; color: #666; cursor: pointer; transition: 0.2s; }
                    .sub-nav-item:hover { color: #fff; background: #111; }
                    .sub-nav-item.active { color: #fff; font-weight: 800; background: #111; }

                    .content-header { display: flex; align-items: center; justify-content: space-between; gap: 3rem; margin-bottom: 4rem; }
                    .header-texts h1 { font-size: 2.8rem; font-weight: 900; margin: 0 0 1rem 0; text-transform: uppercase; color: #fff; line-height: 1.1; }
                    .header-texts p { font-size: 1.1rem; color: #aaa; margin: 0; line-height: 1.6; max-width: 800px; }
                    
                    /* IMAGENS MENORES NO CABEÇALHO */
                    .header-img-box { width: 260px; height: 180px; flex-shrink: 0; background: #000; border: 2px solid #d4af37; border-radius: 12px; padding: 6px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; }
                    .header-img-box img { width: 100%; height: 100%; object-fit: cover; border-radius: 6px; }

                    .grid-layout { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; }
                    .full-width { grid-column: 1 / -1; }

                    .info-card { background: #111; border: 1px solid #222; border-radius: 16px; padding: 2rem; display: flex; flex-direction: column; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
                    .info-card h2 { font-size: 1.3rem; color: #fff; font-weight: 900; margin: 0 0 1.5rem 0; border-bottom: 1px solid #222; padding-bottom: 1rem; }
                    .info-card.error { border-color: #ef4444; }
                    
                    .item-row { display: flex; align-items: flex-start; gap: 12px; font-size: 1.05rem; color: #ddd; margin-bottom: 14px; line-height: 1.5; }
                    .item-row:last-child { margin-bottom: 0; }
                    .item-row strong { color: #fff; flex-shrink: 0; }
                    .divider-line { height: 1px; background: #222; margin: 15px 0; width: 100%; }

                    .hint-box { background: rgba(34, 197, 94, 0.1); border-left: 4px solid #22c55e; padding: 1rem 1.5rem; margin-top: auto; border-radius: 0 8px 8px 0; color: #fff; font-weight: 600; font-size: 0.95rem; }
                    .warning-box { background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 1rem; margin-top: 1.5rem; border-radius: 8px; color: #ef4444; font-weight: 800; text-align: center; }

                    .section-title-divider { grid-column: 1/-1; text-align: center; color: #fff; font-size: 1.6rem; font-weight: 900; margin: 2rem 0; text-transform: uppercase; letter-spacing: 2px; }
                    
                    .prep-card { grid-column: 1/-1; display: grid; grid-template-columns: 1.5fr 1fr; gap: 3rem; background: #111; padding: 3rem; border-radius: 16px; border: 1px solid #222; align-items: center; box-shadow: 0 15px 40px rgba(0,0,0,0.5); }
                    .prep-img { width: 100%; max-width: 400px; border: 3px solid #fde047; border-radius: 12px; box-shadow: 0 0 30px rgba(253, 224, 71, 0.3); display: block; margin: 0 auto; }
                    
                    .comic-frame { grid-column: 1/-1; border-radius: 16px; border: 1px solid #333; overflow: hidden; margin-top: 1rem; }
                    .comic-frame img { width: 100%; display: block; }
                </style>

                <aside class="sidebar">
                    <button class="back-btn-side" onclick="App.navigateToMenu()">⬅ MENU INICIAL</button>
                    <nav>
                        ${sidebarCategories.map(cat => {
                            const isMeio = cat.id === 'meio';
                            const isActive = App.state.currentCategoryId === cat.id;
                            return `
                                <div class="nav-item ${isActive && !App.state.currentProfileId ? 'active' : ''}" onclick="${isMeio ? 'App.toggleMeio(event)' : `App.navigateToCategory('${cat.id}')`}">
                                    <span>${cat.label}</span>
                                    ${isMeio ? `<span>${App.state.isMeioExpanded ? '▾' : '▸'}</span>` : ''}
                                </div>
                                ${isMeio && App.state.isMeioExpanded ? `
                                    <div class="sub-nav">
                                        ${Object.values(profiles).map(p => `
                                            <div class="sub-nav-item ${App.state.currentProfileId === p.id ? 'active' : ''}" onclick="App.navigateToProfile('${p.id}')">
                                                ${p.shortTitle}
                                            </div>
                                        `).join('')}
                                    </div>` : ''}
                            `;
                        }).join('')}
                    </nav>
                </aside>

                <main class="workspace">
                    <header class="content-header">
                        <div class="header-texts">
                            <h1>${data.title}</h1>
                            <p>${data.description}</p>
                        </div>
                        <div class="header-img-box"><img src="${data.image}"></div>
                    </header>

                    <div class="grid-layout">
                        ${data.sections.map(s => UI.renderSection(s)).join('')}
                    </div>

                    ${data.videoCategories ? data.videoCategories.map(cat => `
                        <div style="margin-top: 5rem; border-top: 1px solid #222; padding-top: 3rem;">
                            <h2 style="text-align:center; font-size:1.8rem; font-weight:900; color:#fff; text-transform:uppercase; margin-bottom:3rem;">${cat.title}</h2>
                            <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap: 2.5rem;">
                                ${cat.videos.map(v => `
                                    <div style="background:#0a0a0a; border:1px solid #222; padding:1.5rem; border-radius:16px;">
                                        <h3 style="color:${v.color}; font-size:1rem; font-weight:900; text-align:center; margin: 0 0 1rem 0; text-transform:uppercase;">${v.label}</h3>
                                        <div style="position:relative; padding-bottom:56.25%; border-radius:8px; overflow:hidden; border:1px solid #333;">
                                            <iframe src="${v.url}" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;" allow="autoplay"></iframe>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('') : ''}
                </main>
            `;
        }
    },

    renderSection(s) {
        if (s.isSectionTitle) return `<div class="section-title-divider">${s.title}</div>`;
        if (s.isRecommendationHeader) return `<div class="full-width"><h2 style="font-size:1.6rem; color:#fff; font-weight:900; margin-top:1rem;">${s.title}</h2></div>`;
        
        if (s.isPreparation) return `
            <div class="prep-card">
                <div>
                    <h2 style="color:#d4af37; font-size:1.6rem; font-weight:900; margin:0 0 1.5rem 0;">${s.title}</h2>
                    <p style="font-size:1.1rem; color:#eee; margin-bottom:1.5rem;"><strong style="color:#d4af37; display:block; font-size:0.9rem; margin-bottom:4px;">🎯 OBJETIVO:</strong> ${s.goal}</p>
                    <div style="margin-bottom:1.5rem;">
                        <strong style="color:#d4af37; display:block; font-size:0.9rem; margin-bottom:8px;">🚀 AÇÕES:</strong>
                        ${s.actions.map(a => `<div class="item-row"><strong>•</strong> <span>${a}</span></div>`).join('')}
                    </div>
                    <p style="font-size:1.1rem; color:#eee; margin:0;"><strong style="color:#d4af37; display:block; font-size:0.9rem; margin-bottom:4px;">🏆 RESULTADO ESPERADO:</strong> ${s.result}</p>
                </div>
                <div><img src="${s.image}" class="prep-img"></div>
            </div>`;

        if (s.isComic) return `<div class="comic-frame"><img src="${s.image}"></div>`;

        const wrapperClass = s.isFull || s.isError ? "full-width info-card" : "info-card";
        const errClass = s.isError ? "error" : "";
        
        return `
            <div class="${wrapperClass} ${errClass}">
                <h2>${s.title}</h2>
                <div style="flex-grow:1;">
                    ${s.items ? s.items.map(i => i === '---' ? '<div class="divider-line"></div>' : (i.trim().startsWith('<') ? i : `<div class="item-row"><strong>•</strong> <span>${i}</span></div>`)).join('') : ''}
                </div>
                ${s.footer ? `<div style="margin-top:1.5rem;"><div class="hint-box">${s.footer}</div></div>` : ''}
                ${s.warning ? `<div class="warning-box">⚠️ ${s.warning}</div>` : ''}
            </div>`;
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
    btn.innerText = "PROCESSANDO...";

    try {
        if (action === 'login') {
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const result = await App.login(email, password);
            if (!result.success) {
                msg.innerText = result.message;
                msg.style.color = '#ef4444';
                msg.style.background = 'rgba(239,68,68,0.1)';
                msg.style.border = '1px solid rgba(239,68,68,0.3)';
                msg.style.display = 'block';
            }
        } else {
            const name = document.getElementById('regName').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            const result = await App.register(name, email, password);
            
            msg.innerText = result.message;
            msg.style.display = 'block';
            
            if (result.success) {
                msg.style.color = '#22c55e';
                msg.style.background = 'rgba(34,197,94,0.1)';
                msg.style.border = '1px solid rgba(34,197,94,0.3)';
                e.target.reset();
                setTimeout(() => window.toggleAuthView('login'), 3000);
            } else {
                msg.style.color = '#ef4444';
                msg.style.background = 'rgba(239,68,68,0.1)';
                msg.style.border = '1px solid rgba(239,68,68,0.3)';
            }
        }
    } catch (err) {
        msg.innerText = "Erro de conexão com o servidor.";
        msg.style.display = 'block';
    } finally {
        btn.innerText = originalText;
    }
};

window.updateUserRole = function(email, role, status) {
    App.updateAdminUser(email, role, status);
};

window.deleteUser = function(email) {
    if (confirm(`ATENÇÃO: Deseja excluir permanentemente o usuário ${email}?`)) {
        App.deleteAdminUser(email);
    }
};