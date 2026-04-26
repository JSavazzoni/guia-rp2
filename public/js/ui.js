const UI = {
    render() {
        const root = document.getElementById('applicationRoot');
        if (!App.state.currentUser) {
            root.innerHTML = this.templates.auth();
            return;
        }

        // BLOQUEIO: Se o status não for aprovado, trava aqui.
        if (App.state.currentUser.status !== 'approved') {
            root.innerHTML = `
                <div style="height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; background:#000; color:#fff; text-align:center; font-family:Inter,sans-serif; background-image: url('AssetStore/image_1e6304.jpg'); background-size:cover; background-position:center;">
                    <div style="background:rgba(0,0,0,0.85); padding:3rem; border-radius:24px; border:1px solid #d4af37; backdrop-filter: blur(10px);">
                        <h1 style="color:#d4af37; margin-bottom:1rem; font-size:2rem; font-weight:900;">ACESSO PENDENTE ⏳</h1>
                        <p style="color:#ccc; max-width:400px; line-height:1.6; font-weight:600;">Olá <strong>${App.state.currentUser.name}</strong>, sua conta está em análise.</p>
                        <button onclick="App.logout()" style="margin-top:2rem; background:#d4af37; border:none; color:#000; padding:14px 30px; border-radius:12px; cursor:pointer; font-weight:900; text-transform:uppercase;">SAIR</button>
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
                root.innerHTML = '<div style="color:#d4af37; padding:100px; text-align:center; font-size:1.5rem; font-weight:900;">CARREGANDO...</div>';
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
                .overlayContainer { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: radial-gradient(circle at center, rgba(10,10,10,0.6) 0%, rgba(0,0,0,0.9) 100%); backdrop-filter: blur(4px); z-index: 2; pointer-events: none; }
            </style>
            <div class="bgContainer"></div><div class="overlayContainer"></div>`,

        auth: () => `
            ${UI.templates.background()}
            <style>
                body { margin: 0; font-family: 'Inter', sans-serif; background-color: #000; overflow: hidden; }
                .authWrapper { height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; z-index: 10; padding: 20px; }
                .authBox { background: rgba(15, 15, 15, 0.7); backdrop-filter: blur(25px); border: 1px solid rgba(212, 175, 55, 0.2); padding: 3.5rem; border-radius: 24px; width: 100%; max-width: 440px; text-align: center; box-shadow: 0 30px 60px rgba(0,0,0,0.9); }
                .authHeader h1 { color: #d4af37; margin: 0 0 5px 0; font-weight: 900; font-size: 2.2rem; letter-spacing: 3px; text-transform: uppercase; }
                .authHeader p { color: #aaa; font-weight: 800; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 5px; margin-bottom: 2.5rem; }
                .authInput { width: 100%; padding: 16px; background: rgba(0,0,0,0.6); border: 1px solid rgba(255,255,255,0.1); color: #fff; border-radius: 12px; margin-bottom: 1.2rem; outline: none; }
                .authBtn { width: 100%; padding: 18px; background: linear-gradient(135deg, #d4af37 0%, #b5952f 100%); border: none; color: #000; font-weight: 900; border-radius: 12px; cursor: pointer; text-transform: uppercase; }
            </style>
            <div class="authWrapper">
                <div class="authBox">
                    <div class="authHeader"><h1>SALES GUIA</h1><p>Santa Group</p></div>
                    <form id="loginForm" onsubmit="window.handleAuthSubmit(event, 'login')">
                        <input type="email" id="loginEmail" class="authInput" placeholder="E-mail corporativo" required>
                        <input type="password" id="loginPassword" class="authInput" placeholder="Senha de acesso" required>
                        <button type="submit" class="authBtn">Acessar Sistema</button>
                        <p style="color:#aaa; cursor:pointer; margin-top:2rem;" onclick="document.getElementById('loginForm').style.display='none'; document.getElementById('registerForm').style.display='block';">Não possui acesso? <strong>Solicitar agora</strong></p>
                    </form>
                    <form id="registerForm" onsubmit="window.handleAuthSubmit(event, 'register')" style="display:none;">
                        <input type="text" id="regName" class="authInput" placeholder="Nome Completo" required>
                        <input type="email" id="regEmail" class="authInput" placeholder="E-mail" required>
                        <input type="password" id="regPassword" class="authInput" placeholder="Criar Senha" required>
                        <button type="submit" class="authBtn" style="background:linear-gradient(135deg, #22c55e 0%, #16a34a 100%)">Solicitar Registro</button>
                        <p style="color:#aaa; cursor:pointer; margin-top:2rem;" onclick="document.getElementById('registerForm').style.display='none'; document.getElementById('loginForm').style.display='block';">Já possui conta? <strong>Fazer login</strong></p>
                    </form>
                </div>
            </div>`,

        admin: () => `
            ${UI.templates.background()}
            <style>
                body { margin: 0; background-color: #000; color: #fff; font-family: 'Inter', sans-serif; overflow-y: auto; }
                .adminTopbar { position: fixed; top: 0; left: 0; right: 0; height: 80px; background: rgba(10,10,10,0.9); border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: space-between; padding: 0 4rem; z-index: 100; box-shadow: 0 10px 30px rgba(0,0,0,0.6); }
                .adminBrand { font-weight: 900; color: #d4af37; font-size: 1.4rem; letter-spacing: 2px; }
                .adminBackBtn { background: rgba(255,255,255,0.05); color: #fff; border: 1px solid rgba(255,255,255,0.15); padding: 10px 20px; border-radius: 8px; font-weight: 800; cursor: pointer; transition: 0.3s; font-size: 0.85rem; letter-spacing: 1px; }
                .adminBackBtn:hover { background: rgba(212,175,55,0.1); border-color: #d4af37; color: #d4af37; }
                .adminLayout { padding: 140px 4rem 4rem; max-width: 1400px; margin: 0 auto; position: relative; z-index: 10; }
                .userCard { background: rgba(15,15,15,0.7); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid #333; padding: 25px 30px; border-radius: 16px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; transition: 0.3s; }
                .selectPill { background: rgba(0,0,0,0.6); border: 1px solid rgba(255,255,255,0.15); color: #fff; padding: 10px; border-radius: 8px; cursor: pointer; }
            </style>
            <div class="adminTopbar">
                <div class="adminBrand">PAINEL DE GESTÃO</div>
                <button onclick="App.navigateToMenu()" class="adminBackBtn">VOLTAR AO SISTEMA</button>
            </div>
            <div class="adminLayout">
                ${App.state.adminUsers.map(u => `
                    <div class="userCard">
                        <div>
                            <h3 style="margin:0;">${u.name}</h3>
                            <span style="color:#aaa;">${u.email}</span>
                        </div>
                        <div style="display:flex; gap:10px;">
                            <select onchange="App.updateAdminUser('${u.email}', this.value, '${u.status}')" class="selectPill">
                                <option value="vendedor" ${u.role === 'vendedor' ? 'selected' : ''}>Vendedor</option>
                                <option value="admin" ${u.role === 'admin' ? 'selected' : ''}>Admin</option>
                            </select>
                            <select onchange="App.updateAdminUser('${u.email}', '${u.role}', this.value)" class="selectPill">
                                <option value="pending" ${u.status === 'pending' ? 'selected' : ''}>Pendente</option>
                                <option value="approved" ${u.status === 'approved' ? 'selected' : ''}>Aprovado</option>
                            </select>
                            <button onclick="App.deleteAdminUser('${u.email}')" style="background:#ef4444; border:none; padding:10px; border-radius:8px; color:#fff; cursor:pointer;">EXCLUIR</button>
                        </div>
                    </div>
                `).join('')}
            </div>`,

        menu: () => `
            ${UI.templates.background()}
            <style>
                body { margin: 0; background-color: #000; font-family: 'Inter', sans-serif; overflow-y: auto; }
                .menuTopbar { position: fixed; top: 0; left: 0; right: 0; height: 80px; background: rgba(10,10,10,0.9); border-bottom: 1px solid rgba(212,175,55,0.3); display: flex; align-items: center; justify-content: space-between; padding: 0 4rem; z-index: 100; box-shadow: 0 10px 30px rgba(0,0,0,0.8); }
                .menuBrand { font-weight: 900; color: #d4af37; font-size: 1.4rem; letter-spacing: 2px; }
                .roleTag { background: rgba(212,175,55,0.15); border: 1px solid rgba(212,175,55,0.4); color: #d4af37; padding: 8px 16px; border-radius: 8px; font-size: 0.85rem; font-weight: 900; text-transform: uppercase; }
                .btnLogout { background: rgba(239,68,68,0.15); border: 1px solid rgba(239,68,68,0.4); color: #ef4444; padding: 8px 20px; border-radius: 8px; font-weight: 900; cursor: pointer; }
                .funnelWrapper { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; padding: 120px 20px 60px; gap: 14px; position: relative; z-index: 10;}
                .funnelCard { width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; background: rgba(15,15,15,0.8); backdrop-filter: blur(10px); border: 1px solid rgba(212,175,55,0.4); border-radius: 12px; min-height: 100px; padding: 1.5rem; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 15px 35px rgba(0,0,0,0.6); }
                .funnelCard:hover { background: #d4af37; transform: scale(1.03); border-color: #fff; box-shadow: 0 20px 40px rgba(212, 175, 55, 0.5); }
                .funnelCard h3 { margin: 0; font-size: 1.3rem; font-weight: 900; text-transform: uppercase; color: #fff; }
                .funnelCard p { margin: 0; font-size: 0.95rem; color: #aaa; text-align: center; }
                .funnelCard:hover h3, .funnelCard:hover p { color: #000; }
                .f-1 { max-width: 900px; } .f-2 { max-width: 800px; } .f-3 { max-width: 700px; } .f-4 { max-width: 600px; } .f-5 { max-width: 500px; } .f-6 { max-width: 400px; }
            </style>
            <div class="menuTopbar">
                <div class="menuBrand">SALES GUIA - SANTA GROUP</div>
                <div style="display:flex; align-items:center; gap:25px;">
                    ${App.state.currentUser.role === 'admin' ? `<button onclick="App.navigateToAdmin()" style="background:none; border:1px solid #d4af37; color:#fff; padding:8px; border-radius:8px; cursor:pointer;">⚙️</button>` : ''}
                    <span class="roleTag">${App.state.currentUser.role}</span>
                    <button onclick="App.logout()" class="btnLogout">SAIR</button>
                </div>
            </div>
            <div class="funnelWrapper">
                ${[
                    {id: 'olheiro', title: '🕵️‍♂️ Olheiro', desc: 'Observe o player e entenda o melhor momento.', cls: 'f-1'},
                    {id: 'defesa', title: '🛡️ Defesa', desc: 'Ganhe a atenção do cliente e inicie a conversa.', cls: 'f-2'},
                    {id: 'meio', title: '⚽ Meio de Campo', desc: 'Entenda a necessidade através de perguntas-chave.', cls: 'f-3'},
                    {id: 'ataque', title: '⚔️ Ataque', desc: 'Transforme a dor em solução e crie urgência.', cls: 'f-4'},
                    {id: 'fechamento', title: '🤝 Fechamento', desc: 'Transforma interesse em decisão.', cls: 'f-5'},
                    {id: 'posvenda', title: '📦 Pós Venda', desc: 'Fidelização e recorrência do cliente.', cls: 'f-6'}
                ].map(cat => `
                    <div class="funnelCard ${cat.cls}" onclick="App.navigateToCategory('${cat.id}')">
                        <h3>${cat.title}</h3>
                        <p>${cat.desc}</p>
                    </div>`).join('')}
            </div>`,

        category: (data) => `
            ${UI.templates.background()}
            <style>
                body { margin: 0; padding: 0; background-color: #000; font-family: 'Inter', sans-serif; color: #fff; overflow-x: hidden; overflow-y: auto; }
                * { box-sizing: border-box; }
                .sidebar { width: 340px; position: fixed; top: 0; left: 0; height: 100vh; background: rgba(10,10,10,0.9); z-index: 50; display: flex; flex-direction: column; box-shadow: 5px 0 25px rgba(0,0,0,0.6); }
                .workspace { margin-left: 340px; padding: 4rem 5rem 6rem; min-height: 100vh; max-width: 1500px; position: relative; z-index: 10; }
                .backBtnSide { margin: 2rem 1.5rem; padding: 1.2rem; background: rgba(212, 175, 55, 0.15); border: 1px solid rgba(212, 175, 55, 0.4); color: #d4af37; font-weight: 900; font-size: 0.9rem; border-radius: 12px; cursor: pointer; transition: 0.3s; letter-spacing: 1px; }
                .backBtnSide:hover { background: #d4af37; color: #000; }
                .navItem { padding: 1.2rem 1.5rem; font-weight: 800; font-size: 1.05rem; color: #888; cursor: pointer; transition: 0.2s; display: flex; justify-content: space-between; border-radius: 8px; margin: 0 1rem 8px; }
                .navItem:hover { background: rgba(255,255,255,0.05); color: #fff; }
                .navItem.active { background: rgba(212, 175, 55, 0.15); color: #d4af37; border-left: 4px solid #d4af37; }
                .subNavItem { padding: 0.8rem 1.5rem 0.8rem 3rem; font-size: 0.9rem; font-weight: 600; color: #666; cursor: pointer; transition: 0.2s; border-radius: 6px; margin: 0 1rem 2px; }
                .subNavItem.active { color: #fff; background: rgba(255,255,255,0.1); font-weight: 900; }
                .contentHeader { display: flex; align-items: center; justify-content: space-between; gap: 4rem; margin-bottom: 4rem; }
                .headerTexts h1 { font-size: 3.2rem; font-weight: 900; margin: 0; text-transform: uppercase; color: #fff; line-height: 1.1; letter-spacing: -1px; }
                .headerTexts p { font-size: 1.1rem; color: #ccc; margin-top: 10px; line-height: 1.6; max-width: 800px; }
                .headerImgBox { width: 420px; height: 240px; flex-shrink: 0; border: 2px solid rgba(212, 175, 55, 0.5); border-radius: 12px; overflow: hidden; box-shadow: 0 15px 30px rgba(0,0,0,0.8); background: #000; }
                .headerImgBox img { width: 100%; height: 100%; object-fit: cover; display: block; }
                .gridLayout { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; width: 100%; }
                .cardFull { grid-column: 1 / -1; }
                .infoCard { background: rgba(15,15,15,0.8); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.08); border-top: 1px solid rgba(212, 175, 55, 0.3); border-radius: 20px; padding: 2.5rem; display: flex; flex-direction: column; box-shadow: 0 15px 35px rgba(0,0,0,0.6); }
                .infoCard h2 { font-size: 1.35rem; color: #d4af37; font-weight: 900; margin: 0 0 1.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 1rem; text-transform: uppercase; }
                .itemRow { display: flex; align-items: flex-start; gap: 14px; font-size: 1.05rem; color: #ddd; margin-bottom: 16px; line-height: 1.5; }
                .dividerLine { height: 1px; background: rgba(255,255,255,0.08); margin: 20px 0; width: 100%; }
            </style>
            <aside class="sidebar">
                <button class="backBtnSide" onclick="App.navigateToMenu()">⬅ MENU INICIAL</button>
                <nav>
                    ${['olheiro', 'defesa', 'meio', 'ataque', 'fechamento', 'posvenda'].map(id => {
                        const isMeio = id === 'meio';
                        const isActive = App.state.currentCategoryId === id;
                        return `
                            <div class="navItem ${isActive && !App.state.currentProfileId ? 'active' : ''}" onclick="${isMeio ? 'App.toggleMeio(event)' : `App.navigateToCategory('${id}')`}">
                                <span>${id.toUpperCase()}</span>
                                ${isMeio ? `<span>${App.state.isMeioExpanded ? '▾' : '▸'}</span>` : ''}
                            </div>
                            ${isMeio && App.state.isMeioExpanded ? `
                                <div style="background:transparent; padding-bottom:10px;">
                                    ${Object.values(App.state.content.profiles).map(p => `
                                        <div class="subNavItem ${App.state.currentProfileId === p.id ? 'active' : ''}" onclick="App.navigateToProfile('${p.id}')">
                                            • ${p.shortTitle}
                                        </div>`).join('')}
                                </div>` : ''}`;
                    }).join('')}
                </nav>
            </aside>
            <main class="workspace">
                <header class="contentHeader">
                    <div class="headerTexts"><h1>${data.title}</h1><p>${data.description}</p></div>
                    <div class="headerImgBox"><img src="${data.image}"></div>
                </header>
                <div class="gridLayout">
                    ${data.sections.map(s => UI.renderSection(s)).join('')}
                </div>
                ${data.videoCategories ? data.videoCategories.map(cat => `
                    <div style="margin-top: 6rem; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 4rem;">
                        <h2 style="text-align:center; font-size:2rem; font-weight:900; color:#fff; text-transform:uppercase; margin-bottom:3rem;">${cat.title}</h2>
                        <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap: 3rem;">
                            ${cat.videos.map(v => `
                                <div style="background:rgba(15,15,15,0.8); border:1px solid rgba(255,255,255,0.08); padding:1.5rem; border-radius:20px;">
                                    <h3 style="color:${v.color}; font-size:1.1rem; font-weight:900; text-align:center; margin: 0 0 1.5rem 0; text-transform:uppercase;">${v.label}</h3>
                                    <div style="position:relative; padding-bottom:56.25%; border-radius:12px; overflow:hidden; border:2px solid rgba(255,255,255,0.1);">
                                        <iframe src="${v.url}" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;" allow="autoplay"></iframe>
                                    </div>
                                </div>`).join('')}
                        </div>
                    </div>`).join('') : ''}
            </main>`
    },

    renderSection(s) {
        if (s.isSectionTitle) return `<div style="grid-column: 1/-1; color:#d4af37; font-size:1.8rem; font-weight:900; border-bottom:1px solid #d4af37; padding:10px 0; margin-top:2rem; text-transform:uppercase;">${s.title}</div>`;
        
        if (s.isPreparation) return `
            <div style="grid-column:1/-1; display:grid; grid-template-columns: 1.5fr 1fr; background:rgba(15,15,15,0.8); padding:3rem; border-radius:24px; border-left:4px solid #d4af37; align-items:center; gap:3rem; box-shadow: 0 20px 50px rgba(0,0,0,0.7);">
                <div>
                    <h2 style="color:#fff; font-size:1.8rem; font-weight:900; margin-bottom:2rem; text-transform:uppercase;">${s.title}</h2>
                    <p style="color:#eee; font-size:1.1rem; margin-bottom:2rem;"><strong style="color:#d4af37;">🎯 OBJETIVO:</strong> ${s.goal}</p>
                    <div style="margin-bottom:2rem;">${s.actions.map(a => `<div class="itemRow"><span>• ${a}</span></div>`).join('')}</div>
                    <p style="color:#eee; font-size:1.1rem;"><strong style="color:#d4af37;">🏆 RESULTADO:</strong> ${s.result}</p>
                </div>
                <img src="${s.image}" style="width:100%; border:4px solid #d4af37; border-radius:16px;">
            </div>`;

        if (s.isComic) return `<div style="grid-column: 1/-1; border: 2px solid #d4af37; border-radius:15px; overflow:hidden;"><img src="${s.image}" style="width:100%;"></div>`;

        const isFull = s.isFull || s.isError ? "cardFull" : "";
        return `
            <div class="infoCard ${isFull} ${s.isError ? 'error' : ''}" style="${s.isError ? 'border-top-color:#ef4444;' : ''}">
                <h2 style="${s.isError ? 'color:#ef4444;' : ''}">${s.title}</h2>
                <div style="color:#eee;">${s.items ? s.items.map(i => i === '---' ? '<div class="dividerLine"></div>' : (i.trim().startsWith('<') ? i : `<div class="itemRow"><span>• ${i}</span></div>`)).join('') : ''}</div>
                ${s.footer ? `<div style="margin-top:2rem; background:rgba(34, 197, 94, 0.1); padding:1.2rem; border-radius:12px; border-left:4px solid #22c55e; color:#fff;">${s.footer}</div>` : ''}
                ${s.warning ? `<div style="background:rgba(239, 68, 68, 0.1); border:1px solid #ef4444; padding:1rem; margin-top:1.5rem; border-radius:12px; color:#ef4444; font-weight:800; text-align:center;">⚠️ ${s.warning}</div>` : ''}
            </div>`;
    }
};