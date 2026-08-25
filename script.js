// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    const navContainer = document.querySelector('.nav-container');
    const navLogo = document.querySelector('.nav-logo');
    const hamburger = document.querySelector('.hamburger');
    
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.color = '#333';
        // Fechar/ocultar menu mobile totalmente ao descer
        navMenu.classList.remove('active');
        navMenu.style.opacity = '0';
        navMenu.style.visibility = 'hidden';
        navMenu.style.display = 'none';
        if (hamburger) hamburger.classList.remove('active');
        // Esconder botão hambúrguer em mobile durante scroll para baixo
        if (window.innerWidth <= 768 && hamburger) {
            hamburger.style.opacity = '0';
            hamburger.style.pointerEvents = 'none';
        }
        // Centralizar logo quando desce
        navContainer.style.justifyContent = 'center';
        navContainer.style.transition = 'justify-content 0.3s ease';
        // Forçar centralização absoluta
        navLogo.style.position = 'absolute';
        navLogo.style.left = '50%';
        navLogo.style.transform = 'translateX(-50%)';
        navLogo.style.transition = 'all 0.3s ease';
        // Alterar cor dos links para escuro quando navbar fica branco
        document.querySelectorAll('.nav-link').forEach(link => {
            link.style.color = '#333';
        });
        navLogo.style.color = '#333';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = 'none';
        navbar.style.color = '#e2e8f0';
        // Reexibir menu/hambúrguer quando volta ao topo
        navMenu.style.opacity = '1';
        navMenu.style.visibility = 'visible';
        navMenu.style.display = '';
        if (window.innerWidth <= 768 && hamburger) {
            hamburger.style.opacity = '';
            hamburger.style.pointerEvents = '';
        }
        // Voltar logo para posição original (esquerda)
        navContainer.style.justifyContent = 'space-between';
        navContainer.style.transition = 'justify-content 0.3s ease';
        // Resetar posicionamento absoluto
        navLogo.style.position = 'static';
        navLogo.style.left = 'auto';
        navLogo.style.transform = 'none';
        navLogo.style.transition = 'all 0.3s ease';
        // Voltar cor original dos links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.style.color = '#e2e8f0';
        });
        navLogo.style.color = '#60a5fa';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .skill-item, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Modal functionality
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
});

// Project demo functions
function openProject(projectType) {
    let content = '';
    
    if (projectType === 'vigilancia') {
        content = `
            <div class="project-demo">
                <h2>Sistema de Vigilância</h2>
                <div class="demo-container">
                    <div class="project-showcase">
                        <div class="showcase-header">
                            <div class="showcase-icon"><i class="fas fa-video"></i></div>
                            <div>
                                <div class="showcase-title">Sistema de Vigilância Inteligente</div>
                                <div class="showcase-subtitle">Detecção de Movimento e Monitoramento</div>
                            </div>
                        </div>
                        <div class="showcase-content">
                            <div class="showcase-description">
                                <p>Sistema de vigilância com detecção de movimento e captura de vídeo via webcam. Interface desenvolvida com Python e OpenCV para monitoramento em tempo real.</p>
                                <p style="color:#f59e0b; margin-top:1rem; text-align:center; background-color:rgba(245,158,11,0.1); padding: 0.5rem; border-radius: 8px;">
                                    <i class="fas fa-wrench"></i> Projeto em desenvolvimento...
                                </p>
                            </div>
                            <div style="margin-top: 1.5rem;">
                                <h4 style="color: #60a5fa; margin-bottom: 0.75rem;">⚙️ Como foi desenvolvido</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>Captura de vídeo:</strong> OpenCV lendo frames da webcam em loop contínuo e aplicando subtração de fundo para detectar pixels de movimento.</li>
                                    <li><strong>Threshold adaptativo:</strong> Algoritmo de contorno para filtrar pequenas variações de luz e só acionar alerta em movimentos significativos.</li>
                                    <li><strong>Persistência de eventos:</strong> Cada detecção grava timestamp, frame e metadados em SQLite para histórico consultável.</li>
                                    <li><strong>Interface web:</strong> Flask servindo stream de vídeo em MJPEG via rota /video_feed para visualização em qualquer navegador da rede local.</li>
                                    <li><strong>Aprendizado:</strong> Projeto foco em explorar visão computacional — conceitos de kernel, erosão/dilatação e bounding boxes na prática.</li>
                                </ul>
                                <p style="color:#f59e0b; margin-top:1rem; text-align:center; background-color:rgba(245,158,11,0.1); padding: 0.5rem; border-radius: 8px;">
                                    <i class="fas fa-wrench"></i> Projeto em desenvolvimento contínuo
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } 
    
    else if (projectType === 'mdm') {
        content = `
            <div class="project-demo">
                <h2>Rekkon — MDM & Controle Parental</h2>
                <div class="demo-container">
                    <div class="project-showcase">
                        <div class="showcase-header">
                            <div class="showcase-icon"><i class="fas fa-fingerprint"></i></div>
                            <div>
                                <div class="showcase-title">Gerenciamento Remoto de Dispositivos Android</div>
                                <div class="showcase-subtitle">App Kotlin Nativo + Backend Node.js + Biometria Facial</div>
                            </div>
                        </div>
                        <div class="showcase-content">
                            <div class="showcase-description" style="text-align: left;">
                                <p>Sistema completo de MDM (Mobile Device Management) com foco em controle parental. O <strong>Rekkon</strong> é o app Android nativo em Kotlin que roda no dispositivo controlado, comunicando-se com um backend Node.js para execução de políticas remotas e autenticação biométrica facial.</p>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">📱 App Android — Rekkon (Kotlin)</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>CameraX + ML Kit Face Detection:</strong> Identificação facial on-device com 96 landmarks, sem dependência de rede para a inferência.</li>
                                    <li><strong>Arquitetura MVVM:</strong> ViewModel + LiveData + Jetpack Compose para UI declarativa e reativa.</li>
                                    <li><strong>Retrofit:</strong> Comunicação com backend para autenticação, sincronização de políticas e envio de logs.</li>
                                    <li><strong>Android DevicePolicyManager:</strong> Aplicação de restrições no dispositivo — bloqueio de apps, horários e categorias de conteúdo.</li>
                                    <li><strong>WebSocket:</strong> Canal persistente para recebimento de comandos remotos em tempo real (bloqueio imediato, limpeza de dados).</li>
                                </ul>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">🖥️ Backend & Infraestrutura</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>Node.js + Express + WebSocket:</strong> Server gerenciando múltiplos dispositivos conectados simultaneamente com autenticação por token.</li>
                                    <li><strong>Dashboard web:</strong> Interface em tempo real com localização GPS, apps ativos e histórico de logs por dispositivo.</li>
                                    <li><strong>Docker Compose:</strong> Infraestrutura completa containerizada para deploy em qualquer VPS.</li>
                                </ul>

                                <div class="showcase-stats" style="margin-top: 1.5rem;">
                                    <div class="stat-item"><span class="stat-number">Kotlin</span><span class="stat-label">App Nativo</span></div>
                                    <div class="stat-item"><span class="stat-number">On-device</span><span class="stat-label">Biometria ML</span></div>
                                    <div class="stat-item"><span class="stat-number">Real-time</span><span class="stat-label">Comandos</span></div>
                                    <div class="stat-item"><span class="stat-number">Docker</span><span class="stat-label">Deploy</span></div>
                                </div>

                                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin: 2rem 0;">
                                    <span class="tech-tag">Kotlin</span>
                                    <span class="tech-tag">Android Studio</span>
                                    <span class="tech-tag">ML Kit</span>
                                    <span class="tech-tag">CameraX</span>
                                    <span class="tech-tag">Jetpack Compose</span>
                                    <span class="tech-tag">Node.js</span>
                                    <span class="tech-tag">Docker</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    else if (projectType === 'dataprotection') {
        content = `
            <div class="project-demo">
                <h2>DataProtection — Inventário de Dados LGPD</h2>
                <div class="demo-container">
                    <div class="project-showcase">
                        <div class="showcase-header">
                            <div class="showcase-icon"><i class="fas fa-shield-alt"></i></div>
                            <div>
                                <div class="showcase-title">Sistema de Conformidade com a LGPD</div>
                                <div class="showcase-subtitle">Desenvolvido para o Instituto de Tecnologia da Informação</div>
                            </div>
                        </div>
                        <div class="showcase-content">
                            <div class="showcase-description" style="text-align: left;">
                                <p>Sistema de gestão de conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD) desenvolvido internamente para o <strong>Instituto de Tecnologia da Informação (ITI)</strong>. Implementa o Inventário de Dados exigido pelo <strong>Art. 37 da LGPD</strong>, catalogando todas as operações de tratamento de dados pessoais da organização.</p>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">📋 O que o sistema registra</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>O que é coletado:</strong> Categorias de dados tratados (nome, CPF, e-mail, dados sensíveis) com classificação automática entre dados comuns e sensíveis.</li>
                                    <li><strong>Finalidade:</strong> Registro da justificativa para cada operação de tratamento.</li>
                                    <li><strong>Base Legal:</strong> Mapeamento da autorização legal aplicável (consentimento, obrigação legal, execução de contrato, legítimo interesse, etc.).</li>
                                    <li><strong>Agentes:</strong> Identificação do controlador, operadores e terceiros com quem os dados são compartilhados.</li>
                                    <li><strong>Armazenamento & Retenção:</strong> Localização dos dados e tempo de retenção por política.</li>
                                    <li><strong>Medidas de segurança:</strong> Controles técnicos e administrativos por categoria de dado.</li>
                                </ul>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">⚙️ Como foi desenvolvido</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>Backend Java/Spring Boot:</strong> APIs RESTful para CRUD das operações de tratamento, autenticação JWT e controle de acesso por perfil (DPO, operador, gestor).</li>
                                    <li><strong>Frontend Angular:</strong> Formulários guiados pelas exigências legais da LGPD para preenchimento e consulta do inventário.</li>
                                    <li><strong>PostgreSQL:</strong> Auditoria completa — histórico de quem alterou o quê e quando em cada registro do inventário.</li>
                                    <li><strong>Exportação para RIPD:</strong> Geração de relatório estruturado como base para o Relatório de Impacto à Proteção de Dados Pessoais.</li>
                                    <li><strong>Resposta a titulares:</strong> Módulo de consulta para o DPO responder rapidamente quando um titular exerce o direito de acesso.</li>
                                    <li><strong>Privacy by Design:</strong> Conformidade como requisito de arquitetura, não como correção posterior.</li>
                                </ul>

                                <div class="showcase-stats" style="margin-top: 1.5rem;">
                                    <div class="stat-item"><span class="stat-number">Art. 37</span><span class="stat-label">LGPD</span></div>
                                    <div class="stat-item"><span class="stat-number">RIPD</span><span class="stat-label">Exportação</span></div>
                                    <div class="stat-item"><span class="stat-number">ANPD</span><span class="stat-label">Compliance</span></div>
                                    <div class="stat-item"><span class="stat-number">ITI</span><span class="stat-label">Cliente Real</span></div>
                                </div>

                                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin: 2rem 0;">
                                    <span class="tech-tag">Java</span>
                                    <span class="tech-tag">Spring Boot</span>
                                    <span class="tech-tag">PostgreSQL</span>
                                    <span class="tech-tag">Angular</span>
                                    <span class="tech-tag">JWT</span>
                                    <span class="tech-tag">LGPD</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    else if (projectType === 'rekkon') {
        content = `
            <div class="project-demo">
                <h2>Rekkon — App Android de Reconhecimento Facial</h2>
                <div class="demo-container">
                    <div class="project-showcase">
                        <div class="showcase-header">
                            <div class="showcase-icon"><i class="fas fa-fingerprint"></i></div>
                            <div>
                                <div class="showcase-title">Autenticação Biométrica Mobile</div>
                                <div class="showcase-subtitle">Kotlin Nativo + ML Kit para Identificação Facial em Tempo Real</div>
                            </div>
                        </div>
                        <div class="showcase-content">
                            <div class="showcase-description" style="text-align: left;">
                                <p>Aplicativo Android nativo em <strong>Kotlin</strong> que realiza detecção e identificação facial em tempo real via câmera do dispositivo. Integra o <strong>ML Kit Face Detection</strong> da Google e comunica com um backend para autenticação biométrica mobile.</p>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">⚙️ Como foi desenvolvido</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>CameraX:</strong> API moderna do Jetpack para acesso à câmera com lifecycle-aware, análise de frames sem bloquear a thread principal.</li>
                                    <li><strong>ML Kit Face Detection:</strong> Pipeline de detecção de landmarks faciais (96 pontos) rodando on-device, sem dependência de rede.</li>
                                    <li><strong>Arquitetura MVVM:</strong> ViewModel + LiveData separando lógica de negócio da UI, com Flow para estados reativos.</li>
                                    <li><strong>Comunicação Backend:</strong> Retrofit para envio do embedding ao servidor Python, retornando o perfil identificado.</li>
                                    <li><strong>Jetpack Compose:</strong> Interface declarativa com overlay de bounding box desenhado em Canvas sobre o preview.</li>
                                </ul>

                                <div class="showcase-stats" style="margin-top: 1.5rem;">
                                    <div class="stat-item"><span class="stat-number">Kotlin</span><span class="stat-label">Linguagem</span></div>
                                    <div class="stat-item"><span class="stat-number">On-device</span><span class="stat-label">Inferência ML</span></div>
                                    <div class="stat-item"><span class="stat-number">96</span><span class="stat-label">Landmarks</span></div>
                                    <div class="stat-item"><span class="stat-number">MVVM</span><span class="stat-label">Arquitetura</span></div>
                                </div>

                                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin: 2rem 0;">
                                    <span class="tech-tag">Kotlin</span>
                                    <span class="tech-tag">Android Studio</span>
                                    <span class="tech-tag">ML Kit</span>
                                    <span class="tech-tag">CameraX</span>
                                    <span class="tech-tag">Jetpack Compose</span>
                                    <span class="tech-tag">Retrofit</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    else if (projectType === 'riskcore') {
        content = `
            <div class="project-demo">
                <h2>RiskCore AI — Centro de Comando Reputacional</h2>
                <div class="demo-container">
                    <div class="project-showcase">
                        <div class="showcase-header">
                            <div class="showcase-icon"><i class="fas fa-satellite-dish"></i></div>
                            <div>
                                <div class="showcase-title">Monitoramento de Reputação Digital & Gestão de Crises</div>
                                <div class="showcase-subtitle">Command Center com IA para Inteligência Reputacional</div>
                            </div>
                        </div>
                        <div class="showcase-content">
                            <div class="showcase-description" style="text-align: left;">
                                <p>O RiskCore AI nasceu da necessidade de um sistema capaz de operar não apenas como radar, mas como <strong>ferramenta de defesa ativa</strong>. A plataforma monitora menções digitais em tempo real, detecta desinformação via IA e preserva evidências automaticamente antes que conteúdos possam ser apagados.</p>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">🏗️ Arquitetura & Stack</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>Frontend:</strong> React + Next.js + TypeScript com estética de Command Center — paleta dark com acentos em ciano/laranja para leitura rápida de alertas.</li>
                                    <li><strong>Backend:</strong> Node.js/Express gerenciando múltiplas requisições assíncronas e integração de APIs externas.</li>
                                    <li><strong>Banco de Dados:</strong> PostgreSQL para persistência estruturada + Redis para cache e filas de processamento rápido.</li>
                                    <li><strong>Notificações:</strong> Integração com Telegram para alertas críticos em tempo real.</li>
                                </ul>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">🛡️ Módulos Principais</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>Detector de Desinformação:</strong> Analisa menções de alto risco a cada 30 min via IA, classificando em LIKELY_FALSE / MISLEADING / UNVERIFIABLE / VERIFIED_TRUE com confidence score e contra-narrativas sugeridas.</li>
                                    <li><strong>Crisis Radar:</strong> Dashboard de alertas com score de risco ponderado, escalonamento por severidade e checklists de resposta.</li>
                                    <li><strong>Preservação de Evidências:</strong> Mecanismo que salva capturas de tela, metadados e conteúdo original automaticamente antes de possíveis remoções.</li>
                                    <li><strong>Monitoramento Parlamentar:</strong> Rastreamento de posicionamentos e menções de figuras públicas.</li>
                                    <li><strong>Mapa Eleitoral:</strong> Visualização georreferenciada de sentimento por região.</li>
                                    <li><strong>Análise de Sentimento:</strong> NLP em tempo real sobre o volume de menções por plataforma.</li>
                                    <li><strong>Meta Ads Monitor:</strong> Acompanhamento de campanhas pagas ligadas ao monitorado.</li>
                                    <li><strong>SentinelChat:</strong> IA conversacional integrada ao contexto do cliente para consultas sobre crises ativas.</li>
                                </ul>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">⚙️ Desafios Técnicos</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>Scrapers Resilientes:</strong> Algoritmos de extração preparados para contornar bloqueios e variações de layout.</li>
                                    <li><strong>Pipeline de Análise IA:</strong> Cada menção de risco elevado é submetida a análise LLM com scoring de confiança e geração de contra-narrativa.</li>
                                    <li><strong>Performance:</strong> Redis para filas garante que picos de volume não travam a interface.</li>
                                    <li><strong>Multiview:</strong> 20+ views especializadas (FakeNews, Judicial, Archive, Polls, Radio, Reports...) construídas como componentes independentes em React.</li>
                                </ul>

                                <div class="showcase-stats" style="margin-top: 1.5rem;">
                                    <div class="stat-item"><span class="stat-number">20+</span><span class="stat-label">Views no Dashboard</span></div>
                                    <div class="stat-item"><span class="stat-number">4</span><span class="stat-label">Tecnologias de BD</span></div>
                                    <div class="stat-item"><span class="stat-number">30min</span><span class="stat-label">Ciclo de Análise IA</span></div>
                                    <div class="stat-item"><span class="stat-number">Real-time</span><span class="stat-label">Alertas Telegram</span></div>
                                </div>

                                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin: 2rem 0;">
                                    <span class="tech-tag">React</span>
                                    <span class="tech-tag">Next.js</span>
                                    <span class="tech-tag">TypeScript</span>
                                    <span class="tech-tag">Node.js</span>
                                    <span class="tech-tag">PostgreSQL</span>
                                    <span class="tech-tag">Redis</span>
                                    <span class="tech-tag">Tailwind CSS</span>
                                </div>

                                <div class="project-gallery" style="margin-top: 1.5rem;">
                                    <h4 style="color: #f1f5f9; margin-bottom: 1rem;">Screenshots do Sistema</h4>
                                    <div class="gallery-grid">
                                        <div class="gallery-item" onclick="openLightboxRiskCore('image.png')">
                                            <img src="assets/imgsistema/image.png" alt="RiskCore AI — Dashboard">
                                            <div class="gallery-overlay"><i class="fas fa-expand"></i></div>
                                        </div>
                                        <div class="gallery-item" onclick="openLightboxRiskCore('image copy.png')">
                                            <img src="assets/imgsistema/image copy.png" alt="RiskCore AI — Command Center">
                                            <div class="gallery-overlay"><i class="fas fa-expand"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    else if (projectType === 'jurimetria') {
        content = `
            <div class="project-demo">
                <h2>Jurimetria Preditiva — Análise Judicial com IA</h2>
                <div class="demo-container">
                    <div class="project-showcase">
                        <div class="showcase-header">
                            <div class="showcase-icon"><i class="fas fa-balance-scale"></i></div>
                            <div>
                                <div class="showcase-title">Plataforma LegalTech de Inteligência Judicial</div>
                                <div class="showcase-subtitle">RAG + GPT-4o Vision para Análise de Sentenças do TJBA</div>
                            </div>
                        </div>
                        <div class="showcase-content">
                            <div class="showcase-description" style="text-align: left;">
                                <p>Plataforma full-stack que coleta automaticamente sentenças judiciais do TJBA, indexa via embeddings vetoriais e entrega insights preditivos por meio de RAG + GPT-4o. Advogados consultam padrões decisórios por magistrado, valor médio de condenações e teses jurídicas dominantes — tudo em uma interface Streamlit de 9 abas.</p>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">🕷️ Coleta de Dados</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>Dual pipeline:</strong> Selenium para sentenças PROJUDI + Playwright assíncrono para captação de processos em escala.</li>
                                    <li><strong>Anti-detecção:</strong> JavaScript stealth inline spoofando navigator properties, plugins e permissões do Chrome.</li>
                                    <li><strong>CAPTCHA adaptativo:</strong> Fallback automático CapSolver → 2Captcha → manual para CAPTCHAs GeeTest.</li>
                                    <li><strong>Agendador:</strong> Coleta autônoma em background com logs transmitidos em tempo real.</li>
                                </ul>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">🧠 Pipeline de IA — 5 Camadas de Análise</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>Camada 1 — Estatística:</strong> Segmento da empresa, valores pleiteados e concedidos.</li>
                                    <li><strong>Camada 2 — Jurídica:</strong> Categoria da ação, pedidos, danos morais e materiais.</li>
                                    <li><strong>Camada 3 — Probatória:</strong> Tipos e qualidade das provas apresentadas.</li>
                                    <li><strong>Camada 4 — Estratégica:</strong> Score de sucesso 0–100 com justificativa detalhada.</li>
                                    <li><strong>Camada 5 — Mercado:</strong> Classificação da tese (consolidada / emergente / promissora).</li>
                                </ul>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">🔍 Sistema RAG com pgvector</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>pgvector:</strong> Embeddings semânticos armazenados no PostgreSQL com indexação incremental automática via listener.</li>
                                    <li><strong>Pipeline:</strong> 60 candidatos semânticos → reranking GPT-4o → top 15 chunks → resposta contextual.</li>
                                    <li><strong>9 prompts especializados</strong> cobrindo padrões de magistrado, análise por empresa, clustering de teses e mais.</li>
                                </ul>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">📊 Dashboard (9 Abas Streamlit)</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>Consulta Jurídica:</strong> Chat multi-turn com upload de PDF e pré-preenchimento por número de processo.</li>
                                    <li><strong>Padrão Decisório:</strong> Perfil completo de magistrados — taxa de sucesso, valor médio, áreas de expertise.</li>
                                    <li><strong>DataJud/CNJ:</strong> Consulta em tempo real na rede judicial nacional.</li>
                                    <li><strong>Sentencas:</strong> Busca full-text + download/conversão de PDFs.</li>
                                    <li><strong>Estatísticas:</strong> Analytics comparativos e segmentação por tipo de pedido.</li>
                                </ul>

                                <div class="showcase-stats" style="margin-top: 1.5rem;">
                                    <div class="stat-item"><span class="stat-number">32K+</span><span class="stat-label">Linhas de Python</span></div>
                                    <div class="stat-item"><span class="stat-number">257+</span><span class="stat-label">Commits</span></div>
                                    <div class="stat-item"><span class="stat-number">9</span><span class="stat-label">Abas no Dashboard</span></div>
                                    <div class="stat-item"><span class="stat-number">5</span><span class="stat-label">Camadas IA</span></div>
                                </div>

                                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin: 2rem 0;">
                                    <span class="tech-tag">Python</span>
                                    <span class="tech-tag">Streamlit</span>
                                    <span class="tech-tag">PostgreSQL</span>
                                    <span class="tech-tag">pgvector</span>
                                    <span class="tech-tag">Playwright</span>
                                    <span class="tech-tag">Selenium</span>
                                    <span class="tech-tag">OpenAI GPT-4o</span>
                                    <span class="tech-tag">Docker</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    else if (projectType === 'nexus') {
        content = `
            <div class="project-demo">
                <h2>Nexus AI OS — Sistema Operacional Cognitivo</h2>
                <div class="demo-container">
                    <div class="project-showcase">
                        <div class="showcase-header">
                            <div class="showcase-icon"><i class="fas fa-brain"></i></div>
                            <div>
                                <div class="showcase-title">Assistente Pessoal e Empresarial com Memória Permanente</div>
                                <div class="showcase-subtitle">34 Agentes de IA + Modo Autônomo + RAG via pgvector</div>
                            </div>
                        </div>
                        <div class="showcase-content">
                            <div class="showcase-description" style="text-align: left;">
                                <p>Sistema operacional cognitivo pessoal e empresarial: um assistente com memória permanente, agentes especializados, modo autônomo com aprovações e módulos de Finanças, Carreira e Estudos — multiusuário/multiempresa, com transparência total sobre os próprios dados (LGPD).</p>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">🧠 Nexus Brain</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>Roteamento inteligente:</strong> cada mensagem é roteada para 1 de 34 agentes especializados (carreira, finanças, estudos, negócios, técnico, vida, conteúdo...).</li>
                                    <li><strong>Contexto injetado:</strong> memórias de longo prazo, Digital Twin (perfil evolutivo em 12 facetas) e documentos via RAG.</li>
                                    <li><strong>Feedback explícito:</strong> 👍/👎 do usuário vira memória episódica ("evite repetir") ou procedural ("bom padrão a repetir").</li>
                                </ul>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">💾 Memória de Longo e Curto Prazo</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>Extração automática:</strong> fatos das conversas com deduplicação vetorial via pgvector.</li>
                                    <li><strong>Curto prazo real:</strong> uma conversa nova enxerga o que rolou em outras conversas das últimas 6h.</li>
                                    <li><strong>Transparência LGPD:</strong> o usuário vê, edita e apaga qualquer memória na tela "Memórias".</li>
                                </ul>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">🤖 Modo Autônomo</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>Planner → fila → executor → reflexão:</strong> o Brain planeja, pede aprovação quando sensível, executa em background e aprende com o resultado.</li>
                                    <li><strong>Fila priorizada (1-10):</strong> vários workers concorrentes com <code>FOR UPDATE SKIP LOCKED</code> no Postgres.</li>
                                    <li><strong>Ferramentas:</strong> <code>execute_code</code> (sandbox Python isolado) e <code>browse_page</code> (browser real com JS renderizado).</li>
                                </ul>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">🔐 Segurança</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>JWT</strong> + refresh token rotativo, rate limit em <code>/auth</code>.</li>
                                    <li><strong>MFA</strong> (TOTP + códigos de backup) opcional por usuário, login social com Google (OAuth2).</li>
                                    <li><strong>Auditoria</strong> de ações sensíveis e exportação/exclusão completa de dados sob demanda.</li>
                                </ul>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">📦 Módulos</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>Finanças:</strong> categorização automática por IA, assinaturas recorrentes, compras parceladas e fluxo de caixa projetado.</li>
                                    <li><strong>Carreira:</strong> análise de currículo, busca de vagas reais, simulador de entrevistas, pipeline de candidaturas.</li>
                                    <li><strong>Estudos:</strong> trilhas e flashcards com repetição espaçada (SM-2), simulados corrigidos na hora.</li>
                                    <li><strong>Negócios:</strong> CRM, cobranças, propostas e contratos.</li>
                                </ul>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">🌐 Canais</h4>
                                <p>Web (SPA instalável como PWA), Telegram, WhatsApp (Meta Cloud API) e Discord — mesma memória e cérebro em todos.</p>

                                <div class="showcase-stats" style="margin-top: 1.5rem;">
                                    <div class="stat-item"><span class="stat-number">34</span><span class="stat-label">Agentes de IA</span></div>
                                    <div class="stat-item"><span class="stat-number">78</span><span class="stat-label">Testes Automatizados</span></div>
                                    <div class="stat-item"><span class="stat-number">4</span><span class="stat-label">Canais Integrados</span></div>
                                    <div class="stat-item"><span class="stat-number">12</span><span class="stat-label">Facetas do Digital Twin</span></div>
                                </div>

                                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin: 2rem 0;">
                                    <span class="tech-tag">Python</span>
                                    <span class="tech-tag">FastAPI</span>
                                    <span class="tech-tag">PostgreSQL</span>
                                    <span class="tech-tag">pgvector</span>
                                    <span class="tech-tag">Alembic</span>
                                    <span class="tech-tag">Ollama</span>
                                    <span class="tech-tag">Docker</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    modalBody.innerHTML = content;
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
}

function viewCode(projectType) {
    let repoUrl = '';
    if (projectType === 'vigilancia') { repoUrl = 'https://github.com/davifeels/Sistema-De-Vigilancia'; }
    else if (projectType === 'mdm') { repoUrl = 'https://github.com/davifeels'; }
    else if (projectType === 'riskcore') { repoUrl = 'https://github.com/davifeels/riskcore-ai-frontend'; }
    else if (projectType === 'jurimetria') { repoUrl = 'https://github.com/davifeels'; }
    else if (projectType === 'rekkon') { repoUrl = 'https://github.com/davifeels'; }
    else if (projectType === 'dataprotection') { repoUrl = 'https://github.com/davifeels'; }
    else if (projectType === 'nexus') { repoUrl = 'https://github.com/davifeels/nexus-ai-core'; }
    window.open(repoUrl, '_blank');
}

// Contact form submission (somente se existir)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        setTimeout(() => {
            submitBtn.textContent = 'Mensagem Enviada!';
            submitBtn.style.background = '#10b981';
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                e.target.reset();
            }, 2000);
        }, 1500);
    });
}

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        typeWriter(heroTitle, text, 50);
    }
});

// Parallax effect for floating cards - responsivo e otimizado
let parallaxEnabled = null;
let isScrolling = false;

// LIMPAR ESTILOS INLINE DOS CARDS
function clearInlineStyles() {
    const cards = document.querySelectorAll('.floating-card');
    cards.forEach(card => {
        card.style.removeProperty('--parallaxY');
        card.style.removeProperty('opacity');
        card.style.removeProperty('transition');
        card.style.removeProperty('transform');
    });
}

function applyParallax() {
    // Parallax desabilitado para focar na animação
    return;
}

function forceCardsVisible() {
    const cards = document.querySelectorAll('.floating-card');
    cards.forEach(card => {
        card.style.removeProperty('--parallaxY');
        card.style.removeProperty('transform');
        card.style.removeProperty('opacity');
        card.style.removeProperty('transition');
        card.style.visibility = 'visible';
        card.style.display = 'flex';
    });
}

function setParallaxMode() {
    const isDesktop = window.innerWidth >= 769;
    const isLandscape = window.innerWidth > window.innerHeight;
    
    // Habilita parallax apenas em desktop ou tablets em landscape
    const shouldEnableParallax = isDesktop || (window.innerWidth >= 768 && isLandscape);
    
    if (parallaxEnabled === shouldEnableParallax) return;
    
    parallaxEnabled = shouldEnableParallax;
    const cards = document.querySelectorAll('.floating-card');
    
    if (!parallaxEnabled) {
        // Reset para mobile/portrait - zera apenas a contribuição do parallax
        cards.forEach((card) => {
            card.style.setProperty('--parallaxY', '0px');
        });
    } else {
        applyParallax();
    }
}

// Event listeners otimizados
window.addEventListener('scroll', forceCardsVisible, { passive: true });
window.addEventListener('resize', () => {
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(setParallaxMode, 100);
});
window.addEventListener('orientationchange', () => {
    setTimeout(setParallaxMode, 200); // Aguarda orientação estabilizar
});
window.addEventListener('load', () => {
    clearInlineStyles();
});

document.addEventListener('DOMContentLoaded', () => {
    clearInlineStyles();
});

// Lightbox functionality
let galleryImages = [];

const vigilanciaGalleryImages = [
    { src: 'inicialcamera.jpg', caption: 'Tela Inicial da Câmera' },
    { src: 'dadossalvo.jpg', caption: 'Confirmação de Dados Salvos' }
];

const mdmGalleryImages = [
    { src: 'mdm-dashboard.jpg', caption: 'Dashboard MDM' },
    { src: 'mdm-mapa.jpg', caption: 'Rastreamento em Mapa' },
    { src: 'mdm-bloqueio.jpg', caption: 'Tela de Bloqueio' }
];

function updateLightbox() {
    const image = galleryImages[currentImageIndex];
    if (!image) return;

    let folder = 'vigilancia';
    if (galleryImages === mdmGalleryImages) folder = 'mdm';
    else if (typeof riskCoreGalleryImages !== 'undefined' && galleryImages === riskCoreGalleryImages) folder = 'imgsistema';

    document.getElementById('lightboxImage').src = `assets/${folder}/${image.src}`;
    document.getElementById('lightboxCaption').textContent = image.caption;
}

function openLightboxVigilancia(imageSrc) {
    galleryImages = vigilanciaGalleryImages;
    currentImageIndex = galleryImages.findIndex(img => img.src === imageSrc);
    document.getElementById('lightbox').style.display = 'block';
    updateLightbox();
}

function openLightboxMDM(imageSrc) {
    galleryImages = mdmGalleryImages;
    currentImageIndex = galleryImages.findIndex(img => img.src === imageSrc);
    document.getElementById('lightbox').style.display = 'block';
    updateLightbox();
}

const riskCoreGalleryImages = [
    { src: 'image.png',      caption: 'RiskCore AI — Dashboard' },
    { src: 'image copy.png', caption: 'RiskCore AI — Command Center' },
];

function openLightboxRiskCore(imageSrc) {
    galleryImages = riskCoreGalleryImages;
    currentImageIndex = galleryImages.findIndex(img => img.src === imageSrc);
    document.getElementById('lightbox').style.display = 'block';
    updateLightbox();
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightbox();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightbox();
}

// Video player functionality
function playVideo(button) {
    // Suporta novo layout (.demo-video-block) e mantém compatibilidade
    const block = button.closest('.demo-video-block') || button.closest('.video-container');
    if (!block) return;
    const video = block.querySelector('video');
    if (!video) return;
    if (video.paused) {
        video.play();
        button.textContent = '⏸ Pause';
    } else {
        video.pause();
        button.textContent = '▶ Play';
    }
}

// Close lightbox when clicking outside
document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') {
        closeLightbox();
    }
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.style.display === 'block') {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        }
    }
});
