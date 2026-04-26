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
                body { margin: 0; font-family: 'Inter', sans-serif; background: #000; overflow: hidden; }
                
                /* CORREÇÃO DO FUNDO: z-index positivo empurra a imagem pra frente do fundo preto do body */
                .bgContainer { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-image: url('AssetStore/image_1e6304.jpg'); background-size: cover; background-position: center; z-index: 1; opacity: 0.45; }
                .overlayContainer { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: radial-gradient(circle at center, rgba(10,10,10,0.6) 0%, rgba(0,0,0,0.9) 100%); backdrop-filter: blur(8px); z-index: 2; }
                
                /* z-index 10 garante que o formulário fique acima da imagem e do overlay */
                .authWrapper { height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; z-index: 10; }
                
                .authBox { background: rgba(15, 15, 15, 0.7); backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px); border: 1px solid rgba(212, 175, 55, 0.3); border-top: 1px solid rgba(255, 255, 255, 0.15); padding: 3.5rem; border-radius: 24px; width: 100%; max-width: 460px; text-align: center; box-shadow: 0 30px 60px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.1); }
                .authHeader h1 { color: #d4af37; margin: 0 0 5px 0; font-weight: 900; font-size: 2.2rem; letter-spacing: 3px; text-transform: uppercase; text-shadow: 0 0 20px rgba(212,175,55,0.4); }
                .authHeader p { color: #fff; margin: 0 0 2.5rem 0; font-weight: 800; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 5px; }
                
                .authInputGroup { text-align: left; margin-bottom: 1.2rem; position: relative; }
                .authLabel { display: block; color: #aaa; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; padding-left: 5px; }
                .authInput { width: 100%; padding: 16px; background: rgba(0,0,0,0.6); border: 1px solid rgba(255,255,255,0.15); color: #fff; border-radius: 12px; font-size: 0.95rem; outline: none; font-weight: 600; transition: all 0.3s ease; }
                .authInput:focus { border-color: #d4af37; background: rgba(0,0,0,0.8); box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.15); }
                
                .authBtn { width: 100%; padding: 18px; background: linear-gradient(135deg, #d4af37 0%, #b5952f 100%); border: none; color: #000; font-weight: 900; border-radius: 12px; cursor: pointer; font-size: 1.05rem; letter-spacing: 1px; text-transform: uppercase; transition: 0.3s; margin-top: 1rem; box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3); }
                .authBtn:hover { transform: translateY(-3px); box-shadow: 0 15px 25px rgba(212, 175, 55, 0.4); }
                .authBtn:active { transform: translateY(0); }
                
                .authBtnRegister { background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); color: #000; box-shadow: 0 10px 20px rgba(34, 197, 94, 0.3); }
                .authBtnRegister:hover { box-shadow: 0 15px 25px rgba(34, 197, 94, 0.4); }
                
                .authLink { margin-top: 2rem; font-size: 0.95rem; color: #aaa; cursor: pointer; transition: 0.3s; display: inline-block; font-weight: 600; }
                .authLink:hover { color: #fff; }
                .authLink strong { color: #d4af37; font-weight: 800; }
                
                .authAlert { display: none; padding: 14px; border-radius: 12px; font-size: 0.9rem; font-weight: 800; margin-bottom: 1.5rem; text-align: center; border: 1px solid transparent; }
            </style>
            
            <div class="bgContainer"></div>
            <div class="overlayContainer"></div>
            
            <div class="authWrapper">
                <div class="authBox">
                    <div class="authHeader">
                        <h1>SALES GUIA</h1>
                        <p>Santa Group</p>
                    </div>
                    <div id="authMessage" class="authAlert"></div>
                    
                    <form id="loginForm" onsubmit="window.handleAuthSubmit(event, 'login')">
                        <div class="authInputGroup">
                            <label class="authLabel">E-mail corporativo</label>
                            <input type="email" id="loginEmail" class="authInput" required>
                        </div>
                        <div class="authInputGroup">
                            <label class="authLabel">Senha de acesso</label>
                            <input type="password" id="loginPassword" class="authInput" required>
                        </div>
                        <button type="submit" class="authBtn">Acessar Sistema</button>
                        <span class="authLink" onclick="window.toggleAuthView('register')">Não possui acesso? <strong>Solicitar agora</strong></span>
                    </form>

                    <form id="registerForm" onsubmit="window.handleAuthSubmit(event, 'register')" style="display:none;">
                        <div class="authInputGroup">
                            <label class="authLabel">Nome Completo</label>
                            <input type="text" id="regName" class="authInput" required>
                        </div>
                        <div class="authInputGroup">
                            <label class="authLabel">E-mail corporativo</label>
                            <input type="email" id="regEmail" class="authInput" required>
                        </div>
                        <div class="authInputGroup">
                            <label class="authLabel">Criar Senha</label>
                            <input type="password" id="regPassword" class="authInput" required>
                        </div>
                        <button type="submit" class="authBtn authBtnRegister">Solicitar Registro</button>
                        <span class="authLink" onclick="window.toggleAuthView('login')">Já possui conta? <strong>Fazer login</strong></span>
                    </form>
                </div>
            </div>`,

        admin: () => `
            <style>
                body { margin: 0; background: #000; color: #fff; font-family: 'Inter', sans-serif; overflow-y: auto; }
                
                /* Fundo Premium */
                .bgContainer { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-image: url('AssetStore/image_1e6304.jpg'); background-size: cover; background-position: center; z-index: 1; opacity: 0.35; }
                .overlayContainer { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.8); backdrop-filter: blur(15px); z-index: 2; }
                
                .adminTopbar { position: fixed; top: 0; left: 0; right: 0; height: 80px; background: rgba(10,10,10,0.8); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: space-between; padding: 0 4rem; z-index: 100; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
                .adminBrand { font-weight: 900; color: #d4af37; font-size: 1.4rem; letter-spacing: 2px; }
                .adminBackBtn { background: rgba(255,255,255,0.05); color: #fff; border: 1px solid rgba(255,255,255,0.15); padding: 10px 20px; border-radius: 8px; font-weight: 800; cursor: pointer; transition: 0.3s; font-size: 0.85rem; letter-spacing: 1px; }
                .adminBackBtn:hover { background: rgba(212,175,55,0.1); border-color: #d4af37; color: #d4af37; }
                
                .adminLayout { padding: 140px 4rem 4rem; max-width: 1400px; margin: 0 auto; position: relative; z-index: 10; }
                .adminHeader { margin-bottom: 3rem; }
                .adminHeader h1 { margin: 0 0 10px 0; font-size: 2.8rem; font-weight: 900; letter-spacing: -1px; }
                .adminHeader p { margin: 0; color: #aaa; font-size: 1.1rem; }
                
                .userCard { background: rgba(15,15,15,0.7); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid #333; padding: 25px 30px; border-radius: 16px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; transition: 0.3s; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
                .userCard:hover { transform: translateY(-3px); border-left-color: #d4af37; background: rgba(25,25,25,0.9); box-shadow: 0 15px 35px rgba(0,0,0,0.7); border-color: rgba(212,175,55,0.3); }
                
                .userInfoCol h3 { color: #fff; font-size: 1.3rem; font-weight: 900; margin: 0 0 8px 0; text-transform: uppercase; }
                .userInfoCol span { color: #aaa; font-size: 0.95rem; font-weight: 600; }
                
                .adminControls { display: flex; gap: 15px; align-items: center; }
                .selectPill { appearance: none; background: rgba(0,0,0,0.6); border: 1px solid rgba(255,255,255,0.15); color: #fff; padding: 12px 18px; border-radius: 10px; font-size: 0.9rem; font-weight: 700; cursor: pointer; outline: none; transition: 0.3s; min-width: 150px; }
                .selectPill:hover, .selectPill:focus { border-color: #d4af37; background: rgba(0,0,0,0.9); }
                
                .statusPending { color: #eab308; border-color: rgba(234, 179, 8, 0.4); background: rgba(234, 179, 8, 0.1); }
                .statusApproved { color: #22c55e; border-color: rgba(34, 197, 94, 0.4); background: rgba(34, 197, 94, 0.1); }
                .statusRejected { color: #ef4444; border-color: rgba(239, 68, 68, 0.4); background: rgba(239, 68, 68, 0.1); }
                
                .delBtn { background: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px 20px; border-radius: 10px; font-weight: 800; cursor: pointer; transition: 0.3s; font-size: 0.9rem; text-transform: uppercase; }
                .delBtn:hover { background: #ef4444; color: #fff; box-shadow: 0 5px 15px rgba(239, 68, 68, 0.4); }
            </style>
            
            <div class="bgContainer"></div>
            <div class="overlayContainer"></div>

            <div class="adminTopbar">
                <div class="adminBrand">PAINEL DE GESTÃO</div>
                <button onclick="App.navigateToMenu()" class="adminBackBtn">VOLTAR AO SISTEMA</button>
            </div>

            <div class="adminLayout">
                <div class="adminHeader">
                    <h1>Controle de Acessos</h1>
                    <p>Aprove, gerencie cargos ou revogue permissões dos membros da equipe.</p>
                </div>

                <div>
                    ${App.state.adminUsers.length === 0 ? '<div style="text-align:center; padding:4rem; color:#888; font-size:1.2rem; font-weight:700;">Nenhum usuário cadastrado.</div>' : ''}
                    ${App.state.adminUsers.map(u => {
                        const statusClass = u.status === 'pending' ? 'statusPending' : (u.status === 'approved' ? 'statusApproved' : 'statusRejected');
                        return `
                        <div class="userCard">
                            <div class="userInfoCol">
                                <h3>${u.name}</h3>
                                <span>✉️ ${u.email}</span>
                            </div>
                            <div class="adminControls">
                                <select onchange="window.updateUserRole('${u.email}', this.value, '${u.status}')" class="selectPill">
                                    <option value="vendedor" ${u.role === 'vendedor' ? 'selected' : ''}>👤 Vendedor</option>
                                    <option value="admin" ${u.role === 'admin' ? 'selected' : ''}>👑 Administrador</option>
                                </select>
                                
                                <select onchange="window.updateUserRole('${u.email}', '${u.role}', this.value)" class="selectPill ${statusClass}">
                                    <option value="pending" ${u.status === 'pending' ? 'selected' : ''}>⏳ Pendente</option>
                                    <option value="approved" ${u.status === 'approved' ? 'selected' : ''}>✅ Aprovado</option>
                                    <option value="rejected" ${u.status === 'rejected' ? 'selected' : ''}>🚫 Bloqueado</option>
                                </select>
                                
                                <button onclick="window.deleteUser('${u.email}')" class="delBtn">Excluir</button>
                            </div>
                        </div>
                    `}).join('')}
                </div>
            </div>`,

        menu: () => `
            <style>
                body { margin: 0; background: #000; font-family: 'Inter', sans-serif; overflow-y: auto; }
                
                /* Fundo Premium */
                .bgContainer { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-image: url('AssetStore/image_1e6304.jpg'); background-size: cover; background-position: center; z-index: 1; opacity: 0.35; }
                .overlayContainer { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.85); backdrop-filter: blur(10px); z-index: 2; }
                
                .menuTopbar { position: fixed; top: 0; left: 0; right: 0; height: 80px; background: rgba(5,5,5,0.8); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(212,175,55,0.3); display: flex; align-items: center; justify-content: space-between; padding: 0 4rem; z-index: 100; box-shadow: 0 10px 30px rgba(0,0,0,0.8); }
                .menuBrand { font-weight: 900; color: #d4af37; font-size: 1.4rem; letter-spacing: 2px; text-shadow: 0 0 10px rgba(212,175,55,0.2); }
                .menuControls { display: flex; align-items: center; gap: 25px; }
                
                .roleTag { background: rgba(212,175,55,0.15); border: 1px solid rgba(212,175,55,0.4); color: #d4af37; padding: 8px 16px; border-radius: 8px; font-size: 0.85rem; font-weight: 900; text-transform: uppercase; letter-spacing: 1px; }
                .btnIcon { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.15); color:#fff; border-radius: 8px; cursor: pointer; font-size: 1.2rem; padding: 8px 12px; transition: 0.3s; display: flex; align-items: center; justify-content: center; }
                .btnIcon:hover { background: rgba(212,175,55,0.15); border-color: #d4af37; }
                .btnLogout { background: rgba(239,68,68,0.15); border: 1px solid rgba(239,68,68,0.4); color: #ef4444; padding: 8px 20px; border-radius: 8px; font-weight: 900; cursor: pointer; transition: 0.3s; font-size: 0.85rem; letter-spacing: 1px;}
                .btnLogout:hover { background: #ef4444; color: #fff; box-shadow: 0 5px 15px rgba(239,68,68,0.4); }
                
                .funnelWrapper { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; padding: 120px 20px 60px; gap: 14px; position: relative; z-index: 10;}
                .funnelCard { width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; background: rgba(15,15,15,0.8); backdrop-filter: blur(10px); border: 1px solid rgba(212,175,55,0.4); border-radius: 12px; min-height: 100px; padding: 1.5rem; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 15px 35px rgba(0,0,0,0.6); }
                .funnelCard:hover { background: #d4af37; transform: scale(1.03); border-color: #fff; box-shadow: 0 20px 40px rgba(212,175,55,0.5); }
                .funnelCard h3 { margin: 0; font-size: 1.3rem; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; color: #fff; transition: 0.3s; }
                .funnelCard p { margin: 0; font-size: 0.95rem; color: #aaa; text-align: center; font-weight: 600; transition: 0.3s; }
                .funnelCard:hover h3 { color: #000; text-shadow: none; }
                .funnelCard:hover p { color: #222; }
                
                .f-1 { max-width: 900px; } .f-2 { max-width: 800px; } .f-3 { max-width: 700px; } .f-4 { max-width: 600px; } .f-5 { max-width: 500px; } .f-6 { max-width: 400px; }
            </style>
            
            <div class="bgContainer"></div>
            <div class="overlayContainer"></div>

            <div class="menuTopbar">
                <div class="menuBrand">SALES GUIA - SANTA GROUP</div>
                <div class="menuControls">
                    ${App.state.currentUser.role === 'admin' ? `<button onclick="App.navigateToAdmin()" class="btnIcon" title="Painel de Controle">⚙️</button>` : ''}
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
                    </div>
                `).join('')}
            </div>`,

        category: (data) => {
            if (!data) return '<div style="color:#fff; padding:100px; text-align:center; font-family:Inter,sans-serif;">Carregando dados...</div>';
            
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
                    * { box-sizing: border-box; scrollbar-width: thin; scrollbar-color: rgba(212, 175, 55, 0.3) transparent; }
                    ::-webkit-scrollbar { width: 8px; height: 8px; }
                    ::-webkit-scrollbar-track { background: transparent; }
                    ::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); border-radius: 10px; }
                    ::-webkit-scrollbar-thumb:hover { background: rgba(212, 175, 55, 0.5); }
                    
                    /* Fundo Premium Funcional */
                    .bgContainer { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-image: url('AssetStore/image_1e6304.jpg'); background-size: cover; background-position: center; z-index: 1; opacity: 0.3; }
                    .overlayContainer { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.85); backdrop-filter: blur(12px); z-index: 2; }
                    
                    .sidebar { width: 340px; position: fixed; top: 0; left: 0; height: 100vh; background: rgba(10,10,10,0.9); border-right: 1px solid rgba(255,255,255,0.05); overflow-y: auto; display: flex; flex-direction: column; z-index: 50; box-shadow: 5px 0 25px rgba(0,0,0,0.6); }
                    .sidebar::-webkit-scrollbar { display: none; }
                    
                    .workspace { margin-left: 340px; padding: 4rem 5rem 6rem; min-height: 100vh; max-width: 1500px; position: relative; z-index: 10; }
                    
                    .backBtnSide { margin: 2rem 1.5rem; padding: 1.2rem; background: rgba(212, 175, 55, 0.15); border: 1px solid rgba(212, 175, 55, 0.4); color: #d4af37; font-weight: 900; font-size: 0.9rem; border-radius: 12px; cursor: pointer; transition: 0.3s; letter-spacing: 1px; }
                    .backBtnSide:hover { background: #d4af37; color: #000; box-shadow: 0 5px 20px rgba(212, 175, 55, 0.3); }
                    
                    .navItem { padding: 1.2rem 1.5rem; font-weight: 800; font-size: 1.05rem; color: #888; cursor: pointer; transition: 0.2s; display: flex; justify-content: space-between; border-radius: 8px; margin: 0 1rem 8px; }
                    .navItem:hover { background: rgba(255,255,255,0.05); color: #fff; }
                    .navItem.active { background: rgba(212, 175, 55, 0.15); color: #d4af37; border-left: 4px solid #d4af37; border-radius: 0 8px 8px 0; }
                    
                    .subNav { background: transparent; padding-bottom: 10px; margin-top: -5px; }
                    .subNavItem { padding: 0.8rem 1.5rem 0.8rem 3rem; font-size: 0.9rem; font-weight: 600; color: #777; cursor: pointer; transition: 0.2s; margin: 0 1rem 2px; border-radius: 6px; }
                    .subNavItem:hover { color: #fff; background: rgba(255,255,255,0.05); }
                    .subNavItem.active { color: #fff; font-weight: 900; background: rgba(255,255,255,0.1); }
                    
                    .contentHeader { display: flex; align-items: center; justify-content: space-between; gap: 4rem; margin-bottom: 4rem; }
                    .headerTexts h1 { font-size: 3.2rem; font-weight: 900; margin: 0 0 1rem 0; text-transform: uppercase; color: #fff; line-height: 1.1; letter-spacing: -1px; text-shadow: 0 5px 15px rgba(0,0,0,0.5); }
                    .headerTexts p { font-size: 1.1rem; color: #ccc; margin: 0; line-height: 1.6; max-width: 800px; }
                    
                    /* CAIXA DE IMAGEM REDUZIDA E AJUSTADA */
                    .headerImgBox { width: 380px; height: 240px; flex-shrink: 0; border: 2px solid rgba(212, 175, 55, 0.5); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.8), 0 0 20px rgba(212, 175, 55, 0.2); background: #000; padding: 0; }
                    .headerImgBox img { width: 100%; height: 100%; object-fit: contain; display: block; }

                    .gridLayout { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; }
                    .fullWidth { grid-column: 1 / -1; }
                    
                    .infoCard { background: rgba(15,15,15,0.8); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.08); border-top: 1px solid rgba(212, 175, 55, 0.3); border-radius: 20px; padding: 2.5rem; display: flex; flex-direction: column; box-shadow: 0 15px 35px rgba(0,0,0,0.6); transition: 0.3s; }
                    .infoCard:hover { border-top-color: #d4af37; box-shadow: 0 20px 45px rgba(0,0,0,0.8); transform: translateY(-3px); }
                    .infoCard h2 { font-size: 1.35rem; color: #d4af37; font-weight: 900; margin: 0 0 1.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px; }
                    
                    .infoCard.error { border-top-color: #ef4444; }
                    .infoCard.error h2 { color: #ef4444; }
                    .infoCard.error:hover { border-top-color: #ff5555; }
                    
                    .itemRow { display: flex; align-items: flex-start; gap: 14px; font-size: 1.05rem; color: #ddd; margin-bottom: 16px; line-height: 1.5; }
                    .itemRow:last-child { margin-bottom: 0; }
                    .itemRow strong { color: #fff; flex-shrink: 0; }
                    
                    .dividerLine { height: 1px; background: rgba(255,255,255,0.08); margin: 20px 0; width: 100%; }

                    .hintBox { background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.2); padding: 1.2rem 1.5rem; margin-top: auto; border-radius: 12px; color: #fff; font-weight: 600; font-size: 0.95rem; box-shadow: inset 4px 0 0 #22c55e; }
                    .warningBox { background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 1.2rem; margin-top: 1.5rem; border-radius: 12px; color: #ef4444; font-weight: 800; text-align: center; }

                    .sectionTitleDivider { grid-column: 1/-1; text-align: center; color: #fff; font-size: 1.8rem; font-weight: 900; margin: 3rem 0 1rem; text-transform: uppercase; letter-spacing: 3px; border-bottom: 1px solid rgba(212,175,55,0.2); padding-bottom: 1.5rem; }
                    
                    .prepCard { grid-column: 1/-1; display: grid; grid-template-columns: 1.5fr 1fr; gap: 4rem; background: rgba(15,15,15,0.8); backdrop-filter: blur(10px); padding: 4rem; border-radius: 24px; border: 1px solid rgba(255,255,255,0.08); border-left: 4px solid #d4af37; align-items: center; box-shadow: 0 20px 50px rgba(0,0,0,0.7); margin-bottom: 2rem;}
                    .prepImg { width: 100%; max-width: 360px; border: 4px solid #d4af37; border-radius: 16px; box-shadow: 0 0 40px rgba(212, 175, 55, 0.3); display: block; margin: 0 auto; object-fit: contain; }
                    
                    .comicFrame { grid-column: 1/-1; border-radius: 20px; border: 2px solid rgba(212,175,55,0.4); overflow: hidden; margin-top: 2rem; box-shadow: 0 20px 40px rgba(0,0,0,0.7); }
                    .comicFrame img { width: 100%; display: block; }
                </style>

                <div class="bgContainer"></div>
                <div class="overlayContainer"></div>
                
                <aside class="sidebar">
                    <button class="backBtnSide" onclick="App.navigateToMenu()">⬅ MENU INICIAL</button>
                    <nav>
                        ${sidebarCategories.map(cat => {
                            const isMeio = cat.id === 'meio';
                            const isActive = App.state.currentCategoryId === cat.id;
                            return `
                                <div class="navItem ${isActive && !App.state.currentProfileId ? 'active' : ''}" onclick="${isMeio ? 'App.toggleMeio(event)' : `App.navigateToCategory('${cat.id}')`}">
                                    <span>${cat.label}</span>
                                    ${isMeio ? `<span>${App.state.isMeioExpanded ? '▾' : '▸'}</span>` : ''}
                                </div>
                                ${isMeio && App.state.isMeioExpanded ? `
                                    <div class="subNav">
                                        ${Object.values(profiles).map(p => `
                                            <div class="subNavItem ${App.state.currentProfileId === p.id ? 'active' : ''}" onclick="App.navigateToProfile('${p.id}')">
                                                ${p.shortTitle}
                                            </div>
                                        `).join('')}
                                    </div>` : ''}
                            `;
                        }).join('')}
                    </nav>
                </aside>

                <main class="workspace">
                    <header class="contentHeader">
                        <div class="headerTexts">
                            <h1>${data.title}</h1>
                            <p>${data.description}</p>
                        </div>
                        <div class="headerImgBox"><img src="${data.image}"></div>
                    </header>

                    <div class="gridLayout">
                        ${data.sections.map(s => UI.renderSection(s)).join('')}
                    </div>

                    ${data.videoCategories ? data.videoCategories.map(cat => `
                        <div style="margin-top: 6rem; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 4rem;">
                            <h2 style="text-align:center; font-size:2rem; font-weight:900; color:#fff; text-transform:uppercase; margin-bottom:3rem; letter-spacing: 2px;">${cat.title}</h2>
                            <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap: 3rem;">
                                ${cat.videos.map(v => `
                                    <div style="background:rgba(15,15,15,0.8); border:1px solid rgba(255,255,255,0.08); padding:1.5rem; border-radius:20px; box-shadow: 0 15px 35px rgba(0,0,0,0.6);">
                                        <h3 style="color:${v.color}; font-size:1.1rem; font-weight:900; text-align:center; margin: 0 0 1.5rem 0; text-transform:uppercase; letter-spacing:1px;">${v.label}</h3>
                                        <div style="position:relative; padding-bottom:56.25%; border-radius:12px; overflow:hidden; border:2px solid rgba(255,255,255,0.1);">
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
        if (s.isSectionTitle) return `<div class="sectionTitleDivider">${s.title}</div>`;
        if (s.isRecommendationHeader) return `<div class="fullWidth"><h2 style="font-size:1.8rem; color:#fff; font-weight:900; margin-top:2rem; letter-spacing:1px;">${s.title}</h2></div>`;
        
        if (s.isPreparation) return `
            <div class="prepCard">
                <div>
                    <h2 style="color:#d4af37; font-size:1.8rem; font-weight:900; margin:0 0 2rem 0; text-transform:uppercase; letter-spacing:1px;">${s.title}</h2>
                    <p style="font-size:1.1rem; color:#eee; margin-bottom:2rem;"><strong style="color:#d4af37; display:block; font-size:0.85rem; margin-bottom:6px; letter-spacing:2px; text-transform:uppercase;">🎯 OBJETIVO PRINCIPAL</strong> ${s.goal}</p>
                    <div style="margin-bottom:2rem;">
                        <strong style="color:#d4af37; display:block; font-size:0.85rem; margin-bottom:12px; letter-spacing:2px; text-transform:uppercase;">🚀 PLANO DE AÇÃO</strong>
                        ${s.actions.map(a => `<div class="itemRow" style="margin-bottom:10px;"><strong>•</strong> <span>${a}</span></div>`).join('')}
                    </div>
                    <p style="font-size:1.1rem; color:#eee; margin:0;"><strong style="color:#d4af37; display:block; font-size:0.85rem; margin-bottom:6px; letter-spacing:2px; text-transform:uppercase;">🏆 RESULTADO ESPERADO</strong> ${s.result}</p>
                </div>
                <div><img src="${s.image}" class="prepImg"></div>
            </div>`;

        if (s.isComic) return `<div class="comicFrame"><img src="${s.image}"></div>`;

        const wrapperClass = s.isFull || s.isError ? "fullWidth infoCard" : "infoCard";
        const errClass = s.isError ? "error" : "";
        
        return `
            <div class="${wrapperClass} ${errClass}">
                <h2>${s.title}</h2>
                <div style="flex-grow:1; display:flex; flex-direction:column;">
                    ${s.items ? s.items.map(i => i === '---' ? '<div class="dividerLine"></div>' : (i.trim().startsWith('<') ? i : `<div class="itemRow"><strong>•</strong> <span>${i}</span></div>`)).join('') : ''}
                </div>
                ${s.footer ? `<div style="margin-top:2rem;"><div class="hintBox">${s.footer}</div></div>` : ''}
                ${s.warning ? `<div class="warningBox">⚠️ ${s.warning}</div>` : ''}
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
                msg.style.background = 'rgba(239,68,68,0.15)';
                msg.style.border = '1px solid rgba(239,68,68,0.4)';
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
                msg.style.background = 'rgba(34,197,94,0.15)';
                msg.style.border = '1px solid rgba(34,197,94,0.4)';
                e.target.reset();
                setTimeout(() => window.toggleAuthView('login'), 3500);
            } else {
                msg.style.color = '#ef4444';
                msg.style.background = 'rgba(239,68,68,0.15)';
                msg.style.border = '1px solid rgba(239,68,68,0.4)';
            }
        }
    } catch (err) {
        msg.innerText = "Erro de conexão com o banco de dados.";
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