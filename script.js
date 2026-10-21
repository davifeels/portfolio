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
    
    if (projectType === 'puffszone' || projectType === 'vigilancia') {
        content = `
            <div class="project-demo">
                <h2>PuffsZone — Sistema de Gestão Comercial e PDV</h2>
                <div class="demo-container">
                    <div class="project-showcase">
                        <div class="showcase-header">
                            <div class="showcase-icon"><i class="fas fa-cash-register"></i></div>
                            <div>
                                <div class="showcase-title">PuffsZone — Sistema de Gestão Comercial & PDV</div>
                                <div class="showcase-subtitle">Java 21 + Spring Boot 3 + React 19 + TypeScript + Docker em Produção</div>
                            </div>
                        </div>
                        <div class="showcase-content">
                            <div class="showcase-description" style="text-align: left;">
                                <p>A <strong>PuffsZone</strong> é uma solução completa para gestão comercial, operações de frente de caixa (PDV), controle de estoque e gerenciamento financeiro empresarial. Desenvolvida para ir muito além de um CRUD convencional, implementa regras de negócio complexas, segurança com Spring Security e JWT, persistência com PostgreSQL 16 e Flyway, e implantação real em ambiente de produção (VPS Linux) com Docker, Nginx e HTTPS.</p>

                                <div style="display: flex; gap: 1rem; margin: 1.5rem 0; flex-wrap: wrap;">
                                    <a href="https://puffszone.tech" target="_blank" rel="noopener" class="btn btn-primary" style="text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 0.75rem 1.5rem; border-radius: 8px; color: white; font-weight: 600;">
                                        <i class="fas fa-globe"></i> Acessar Aplicação em Produção (puffszone.tech)
                                    </a>
                                    <a href="https://github.com/davifeels/PuffsZone" target="_blank" rel="noopener" class="btn btn-secondary" style="text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 600;">
                                        <i class="fab fa-github"></i> Ver Código no GitHub
                                    </a>
                                </div>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">💻 Principais Funcionalidades</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>Ponto de Venda (PDV):</strong> Interface ágil de frente de caixa com registro instantâneo de vendas, suporte a múltiplos métodos de pagamento e histórico em tempo real.</li>
                                    <li><strong>Catálogo e Controle de Estoque:</strong> Cadastro de produtos, categorias, precificação, controle rigoroso de saldo e alertas de reposição.</li>
                                    <li><strong>Gestão de Caixa & Movimentações:</strong> Abertura e fechamento de turno de caixa, sangrias, suprimentos e conferência detalhada.</li>
                                    <li><strong>Gestão Financeira & Contas:</strong> Módulos completos de Contas a Pagar e Contas a Receber com acompanhamento de prazos, juros e status.</li>
                                    <li><strong>Relatórios Gerenciais:</strong> Relatórios financeiros analíticos e sintéticos, lucratividade, métricas de vendas e controle de descontos.</li>
                                    <li><strong>Políticas de Desconto & Cupons:</strong> Regras promocionais flexíveis com cupons de desconto e limites parametrizáveis.</li>
                                    <li><strong>Controle de Acesso (RBAC):</strong> Permissões granulares baseadas em papéis de usuário (Administrador, Gerente, Operador de Caixa).</li>
                                    <li><strong>Auditoria Completa:</strong> Rastreamento e log de auditoria detalhado para todas as mutações e operações comerciais sensíveis.</li>
                                </ul>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">🛠️ Tecnologias & Arquitetura</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>Backend Java 21 / Spring Boot 3:</strong> Arquitetura robusta em camadas (Controller, Service, Repository, DTOs e Mappers) com Jakarta Bean Validation.</li>
                                    <li><strong>Segurança:</strong> Spring Security 6 com autenticação stateless via tokens JWT e criptografia de senhas com BCrypt.</li>
                                    <li><strong>Banco de Dados & Persistência:</strong> PostgreSQL 16 com Spring Data JPA/Hibernate e versionamento contínuo de schema via migrações com Flyway.</li>
                                    <li><strong>Frontend:</strong> React 19 com TypeScript, empacotador Vite e estilização responsiva moderna com Tailwind CSS.</li>
                                    <li><strong>DevOps & Infraestrutura:</strong> Docker e Docker Compose isolando backend, frontend e banco de dados; Nginx atuando como proxy reverso e gerenciador de SSL (Let's Encrypt); hospedagem em VPS Linux com rotinas de backup criptografado e testes periódicos de restauração.</li>
                                </ul>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">🔐 Desafios Técnicos Superados</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>Consistência Transacional:</strong> Garantia de atomicidade e integridade nas operações de vendas, estornos de estoque e conciliação de caixa com transações controladas (@Transactional).</li>
                                    <li><strong>Pipeline de Deploy em Produção:</strong> Configuração completa de VPS Linux do zero, orquestração com Docker Compose, automação de certificado SSL com Let's Encrypt e proxy reverso Nginx para tráfego seguro no domínio customizado (puffszone.tech).</li>
                                    <li><strong>Resiliência de Dados & Backups:</strong> Implementação de rotinas automatizadas de backup do PostgreSQL com criptografia e validação por rotinas de teste de restauração.</li>
                                </ul>

                                <div class="testing-highlight-box">
                                    <div class="testing-highlight-title">
                                        <i class="fas fa-check-circle"></i> Estratégia de Testes Automatizados & Qualidade (Java & React)
                                    </div>
                                    <ul class="testing-highlight-list">
                                        <li>
                                            <span class="testing-tag">JUnit 5</span><span class="testing-tag">Mockito</span>
                                            <strong>Testes Unitários de Regras de Negócio:</strong> Cobertura isolada de serviços críticos (<code>VendaService</code>, <code>CaixaService</code>, <code>DescontoService</code>). Testes com <code>@Mock</code> e <code>@InjectMocks</code> validando regras de desconto progressivo por cupom, limites percentuais máximos, sangria e conciliação de turno sem permitir valores negativos.
                                        </li>
                                        <li>
                                            <span class="testing-tag">MockMvc</span><span class="testing-tag">SpringBootTest</span>
                                            <strong>Testes de Integração & Camada Web:</strong> Validação de endpoints REST simulando requisições HTTP reais com <code>MockMvc</code>. Verificação rigorosa do Jakarta Bean Validation (<code>@Valid</code>, <code>@NotNull</code>, <code>@PositiveOrZero</code>) com rejeição e tratamento de payloads malformados via HTTP 400.
                                        </li>
                                        <li>
                                            <span class="testing-tag">Spring Security</span><span class="testing-tag">RBAC</span>
                                            <strong>Testes de Autorização & Segurança:</strong> Testes com <code>@WithMockUser</code> garantindo que apenas administradores acessem rotas financeiras e de auditoria, enquanto operadores de caixa possuem acesso estritamente restrito às operações de PDV.
                                        </li>
                                        <li>
                                            <span class="testing-tag">@Transactional</span><span class="testing-tag">PostgreSQL</span>
                                            <strong>Integridade Transacional & Rollback:</strong> Testes que forçam falha em cascata (ex: persistência de item corrompido) para certificar que movimentações financeiras e decrementos de estoque sofrem rollback automático, mantendo integridade zero de dados órfãos.
                                        </li>
                                        <li>
                                            <span class="testing-tag">Vitest</span><span class="testing-tag">Testing Library</span>
                                            <strong>Testes de Frontend (React 19):</strong> Testes de unidade e renderização dos componentes do PDV, hooks de carrinho de compras, cálculo de troco dinâmico e bloqueio de finalização de venda com carrinho vazio.
                                        </li>
                                    </ul>
                                </div>

                                <div class="showcase-stats" style="margin-top: 1.5rem;">
                                    <div class="stat-item"><span class="stat-number">Java 21</span><span class="stat-label">Spring Boot 3</span></div>
                                    <div class="stat-item"><span class="stat-number">React 19</span><span class="stat-label">TypeScript + Vite</span></div>
                                    <div class="stat-item"><span class="stat-number">Postgres</span><span class="stat-label">Flyway Migrations</span></div>
                                    <div class="stat-item"><span class="stat-number">Produção</span><span class="stat-label">VPS + Docker + SSL</span></div>
                                </div>

                                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin: 2rem 0;">
                                    <span class="tech-tag">Java 21</span>
                                    <span class="tech-tag">Spring Boot</span>
                                    <span class="tech-tag">Spring Security</span>
                                    <span class="tech-tag">JWT</span>
                                    <span class="tech-tag">React 19</span>
                                    <span class="tech-tag">TypeScript</span>
                                    <span class="tech-tag">Vite</span>
                                    <span class="tech-tag">Tailwind CSS</span>
                                    <span class="tech-tag">PostgreSQL 16</span>
                                    <span class="tech-tag">Flyway</span>
                                    <span class="tech-tag">Docker</span>
                                    <span class="tech-tag">Docker Compose</span>
                                    <span class="tech-tag">Nginx</span>
                                    <span class="tech-tag">VPS Linux</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } 
    
    else if (projectType === 'aegiscore') {
        content = `
            <div class="project-demo">
                <h2>AegisCore — Cloud Security & Asset Management Platform</h2>
                <div class="demo-container">
                    <div class="project-showcase">
                        <div class="showcase-header">
                            <div class="showcase-icon"><i class="fas fa-shield-halved"></i></div>
                            <div>
                                <div class="showcase-title">AegisCore — Gestão de Ativos & Auditoria Cloud</div>
                                <div class="showcase-subtitle">Java 25 + Spring Boot 4 + PostgreSQL 18 + Testcontainers + Docker + AWS Architecture</div>
                            </div>
                        </div>
                        <div class="showcase-content">
                            <div class="showcase-description" style="text-align: left;">
                                <p>O <strong>AegisCore</strong> é uma plataforma corporativa backend de alta confiabilidade desenvolvida para centralizar a governança, o ciclo de vida (CRUD) e a conformidade de segurança de ativos de infraestrutura em nuvem multicloud (AWS, Azure e GCP). Projetada seguindo as melhores práticas de engenharia de software moderno, a aplicação combina <strong>Java 25</strong> e <strong>Spring Boot 4</strong>, segurança robusta com <strong>Spring Security (RBAC)</strong>, trilha de auditoria desacoplada via <strong>Spring Events</strong>, versionamento de banco com <strong>Flyway</strong> e testes de integração de ponta a ponta com <strong>Testcontainers</strong>.</p>

                                <div style="display: flex; gap: 1rem; margin: 1.5rem 0; flex-wrap: wrap;">
                                    <a href="https://github.com/davifeels/aegis-core" target="_blank" rel="noopener" class="btn btn-primary" style="text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); padding: 0.75rem 1.5rem; border-radius: 8px; color: white; font-weight: 600;">
                                        <i class="fab fa-github"></i> Acessar Repositório no GitHub
                                    </a>
                                    <span class="badge-status-cloud">
                                        <i class="fab fa-aws"></i> Arquitetura AWS Homologada &amp; Pronta para Deploy
                                    </span>
                                </div>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">🎯 Problema Resolvido &amp; Decisões Técnicas</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>Visibilidade Centralizada de Recursos:</strong> Eliminação de silos de inventário entre múltiplos provedores cloud (AWS EC2/RDS/S3, Azure VMs e GCP Compute), mantendo um registro padronizado e auditável.</li>
                                    <li><strong>Arquitetura Desacoplada Orientada a Eventos:</strong> Cada mutação de ativo (criação, atualização, exclusão) dispara um <code>AssetAuditEvent</code> processado de forma assíncrona por um listener dedicado (<code>AssetAuditListener</code>), garantindo que a persistência de logs de auditoria não degrade a latência do cliente HTTP.</li>
                                    <li><strong>Controle Granular por Perfis (RBAC):</strong> Separação estrita de privilégios onde o perfil <code>ADMIN</code> gerencia ativos e investiga logs forenses, enquanto o perfil <code>USER</code> possui permissão somente-leitura restrita ao catálogo de ativos.</li>
                                    <li><strong>Tratamento Semântico de Erros (RFC 7807):</strong> Tratamento centralizado via <code>@RestControllerAdvice</code>, retornando payloads estruturados para validações de campo (HTTP 400), conflitos de identificador (HTTP 409) e recursos inexistentes (HTTP 404).</li>
                                </ul>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">💻 Funcionalidades Principais</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>Gestão de Ativos Cloud (CRUD):</strong> Endpoints RESTful completos (<code>/api/v1/assets</code>) para cadastro com validação de formato, consulta unificada, busca por ID, atualização atômica e exclusão.</li>
                                    <li><strong>Trilha de Auditoria Forense com Paginação:</strong> Endpoint <code>GET /api/v1/audit-logs</code> com suporte a paginação (<code>page</code>, <code>size</code>) e filtros combinados por ação (CREATE, UPDATE, DELETE), identificador do ativo e intervalo de datas ISO-8601 (<code>fromDate</code>, <code>toDate</code>).</li>
                                    <li><strong>Segurança HTTP Basic &amp; BCrypt:</strong> Proteção de endpoints contra acessos não autorizados, com credenciais injetadas exclusivamente via variáveis de ambiente e hashes BCrypt.</li>
                                    <li><strong>Documentação Viva OpenAPI 3.0 / Swagger UI:</strong> Interface interativa disponível em <code>/swagger-ui.html</code> contendo schemas de requisição, respostas e códigos de status.</li>
                                </ul>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">🛠️ Tecnologias &amp; Engenharia de Software</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>Java 25 &amp; Spring Boot 4:</strong> Utilização da versão mais recente do ecossistema Java, usufruindo de melhorias de desempenho em tempo de execução e novos padrões de API.</li>
                                    <li><strong>PostgreSQL 18 &amp; Flyway:</strong> Persistência com Spring Data JPA e versionamento automatizado de banco com scripts de migração (<code>V1__create_cloud_assets.sql</code>, <code>V2__create_asset_audit_logs.sql</code>).</li>
                                    <li><strong>Isolamento com Docker &amp; Compose:</strong> Arquivo <code>compose.yaml</code> com healthchecks automáticos (<code>pg_isready</code>) e volumes persistentes nomeados.</li>
                                    <li><strong>CI/CD com GitHub Actions:</strong> Pipeline automatizado (<code>.github/workflows/ci.yml</code>) compilando em JDK 25 e executando a suíte de testes com Testcontainers em cada push/PR.</li>
                                </ul>

                                <div class="testing-highlight-box">
                                    <div class="testing-highlight-title">
                                        <i class="fas fa-check-circle"></i> Estratégia de Testes Automatizados com Testcontainers &amp; JUnit 5
                                    </div>
                                    <ul class="testing-highlight-list">
                                        <li>
                                            <span class="testing-tag">Testcontainers</span><span class="testing-tag">PostgreSQL 18</span>
                                            <strong>Testes de Integração com Banco Real em Contêiner:</strong> Em vez de simulações com bancos em memória (H2) que divergem de produção, o AegisCore utiliza <code>@Testcontainers</code> para instanciar contêineres reais do PostgreSQL 18 durante a execução de <code>AssetAuditIntegrationTests</code>, garantindo 100% de paridade com o ambiente real.
                                        </li>
                                        <li>
                                            <span class="testing-tag">JUnit 5</span><span class="testing-tag">Mockito</span>
                                            <strong>Testes Unitários de Serviços &amp; Eventos:</strong> Cobertura isolada de <code>AssetAuditListenerTests</code> e <code>AssetAuditPersistenceServiceTests</code>, validando o desacoplamento da mensageria de auditoria.
                                        </li>
                                        <li>
                                            <span class="testing-tag">Spring Security Test</span><span class="testing-tag">RBAC</span>
                                            <strong>Testes de Autorização &amp; Barramento:</strong> Bateria de testes em <code>SecurityTests</code> comprovando que requisições anônimas recebem HTTP 401 e que o perfil USER é barrado com HTTP 403 em rotas administrativas e de auditoria.
                                        </li>
                                        <li>
                                            <span class="testing-tag">GitHub Actions</span><span class="testing-tag">CI/CD</span>
                                            <strong>Automação Contínua:</strong> Execução automática de <code>./mvnw clean verify</code> no runner Ubuntu do GitHub Actions, assegurando zero quebras no repositório.
                                        </li>
                                    </ul>
                                </div>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;"><i class="fab fa-aws"></i> Arquitetura de Nuvem AWS &amp; Implantação</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>Rede &amp; Isolamento (AWS VPC):</strong> Subnets públicas para o Application Load Balancer (ALB) e subnets privadas restritas para os contêineres e banco de dados, sem exposição de portas à internet.</li>
                                    <li><strong>Execução de Contêineres (Amazon ECS Fargate):</strong> Orquestração serverless da imagem Docker da aplicação, com auto scaling horizontal baseado em consumo de CPU e memória.</li>
                                    <li><strong>Banco Gerenciado (Amazon RDS PostgreSQL 18 Multi-AZ):</strong> Alta disponibilidade com replicação síncrona entre Availability Zones, backups diários automatizados e criptografia em repouso via AWS KMS.</li>
                                    <li><strong>Segurança de Borda &amp; TLS:</strong> Application Load Balancer com certificado SSL/TLS emitido pelo AWS Certificate Manager (ACM) e terminação HTTPS segura.</li>
                                    <li><strong>Gestão de Segredos &amp; Observabilidade:</strong> AWS Secrets Manager / SSM Parameter Store para injeção de credenciais de produção e Amazon CloudWatch para métricas de integridade e retenção centralizada de logs.</li>
                                    <li><strong>Status de Implantação:</strong> Aplicação 100% preparada e containerizada para nuvem. O repositório documenta a infraestrutura homologada e pronta para receber o domínio público tão logo os recursos sejam provisionados.</li>
                                </ul>

                                <div class="showcase-stats" style="margin-top: 1.5rem;">
                                    <div class="stat-item"><span class="stat-number">Java 25</span><span class="stat-label">Spring Boot 4</span></div>
                                    <div class="stat-item"><span class="stat-number">Postgres 18</span><span class="stat-label">Flyway Migrations</span></div>
                                    <div class="stat-item"><span class="stat-number">Containers</span><span class="stat-label">Testcontainers &amp; Docker</span></div>
                                    <div class="stat-item"><span class="stat-number">AWS Cloud</span><span class="stat-label">Production Ready</span></div>
                                </div>

                                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin: 2rem 0;">
                                    <span class="tech-tag">Java 25</span>
                                    <span class="tech-tag">Spring Boot 4</span>
                                    <span class="tech-tag">PostgreSQL 18</span>
                                    <span class="tech-tag">Flyway</span>
                                    <span class="tech-tag">Spring Security</span>
                                    <span class="tech-tag">BCrypt</span>
                                    <span class="tech-tag">Testcontainers</span>
                                    <span class="tech-tag">JUnit 5</span>
                                    <span class="tech-tag">Docker</span>
                                    <span class="tech-tag">Docker Compose</span>
                                    <span class="tech-tag">GitHub Actions</span>
                                    <span class="tech-tag">OpenAPI 3.0</span>
                                    <span class="tech-tag">AWS Cloud</span>
                                </div>
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
                                <div style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6; border-radius: 6px; padding: 0.75rem 1rem; margin-bottom: 1.25rem; color: #c4b5fd; font-size: 0.95rem;">
                                    <i class="fas fa-lock" style="margin-right: 0.5rem;"></i>
                                    <strong>Repositório Privado:</strong> Projeto em ciclo contínuo de testes e validação biométrica on-device. Arquitetura completa detalhada a seguir.
                                </div>
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

                                <div class="testing-highlight-box">
                                    <div class="testing-highlight-title">
                                        <i class="fas fa-mobile-alt"></i> Estratégia de Testes Automatizados Mobile & Backend (Kotlin & Node.js)
                                    </div>
                                    <ul class="testing-highlight-list">
                                        <li>
                                            <span class="testing-tag">JUnit 5</span><span class="testing-tag">Mockk</span>
                                            <strong>Testes Unitários Android (Kotlin MVVM):</strong> Testes cobrindo ViewModels (<code>DevicePolicyViewModel</code>, <code>BiometricAuthViewModel</code>) e UseCases. Validação de transições de estado via <code>StateFlow</code> garantindo que a análise de frames não provoque vazamento de memória (memory leaks).
                                        </li>
                                        <li>
                                            <span class="testing-tag">Robolectric</span><span class="testing-tag">DevicePolicyManager</span>
                                            <strong>Testes de Integração Android sem Emulador:</strong> Execução de testes locais de componentes com Robolectric, simulando o framework Android para validação de aplicação de políticas de bloqueio de apps, restrição de câmera e limites de horário.
                                        </li>
                                        <li>
                                            <span class="testing-tag">ML Kit Mocking</span><span class="testing-tag">CameraX</span>
                                            <strong>Mocking do Pipeline Biométrico:</strong> Simulação de detecção facial com dados mockados de 96 landmarks faciais (FaceMesh), cobrindo cenários de oclusão parcial, baixa luminosidade e fallback de segurança.
                                        </li>
                                        <li>
                                            <span class="testing-tag">Jest</span><span class="testing-tag">WebSockets</span>
                                            <strong>Testes de Comunicação em Tempo Real no Backend:</strong> Testes do servidor Node.js validando recepção de heartbeats dos dispositivos, envio de comandos remotos de bloqueio instantâneo e reconexão com backoff exponencial.
                                        </li>
                                    </ul>
                                </div>

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
                                <div style="background: rgba(59, 130, 246, 0.1); border-left: 4px solid #3b82f6; border-radius: 6px; padding: 0.75rem 1rem; margin-bottom: 1.25rem; color: #93c5fd; font-size: 0.95rem;">
                                    <i class="fas fa-building" style="margin-right: 0.5rem;"></i>
                                    <strong>Projeto Corporativo Interno:</strong> Desenvolvido internamente para o <strong>Instituto de Tecnologia da Informação (ITI)</strong>. Código restrito sob diretrizes de segurança governamental.
                                </div>
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

                                <div class="testing-highlight-box">
                                    <div class="testing-highlight-title">
                                        <i class="fas fa-shield-alt"></i> Estratégia de Testes Automatizados & Segurança Corporativa (ITI)
                                    </div>
                                    <ul class="testing-highlight-list">
                                        <li>
                                            <span class="testing-tag">JUnit 5</span><span class="testing-tag">Mockito</span>
                                            <strong>Testes Unitários de Conformidade com a LGPD:</strong> Validação automatizada dos critérios do <strong>Art. 37 da LGPD</strong>. Testes unitários para regras de preenchimento obrigatório de base legal (consentimento, dever legal, execução de contrato) antes de permitir a persistência de operações de tratamento.
                                        </li>
                                        <li>
                                            <span class="testing-tag">Spring Security Test</span><span class="testing-tag">RBAC</span>
                                            <strong>Testes Automatizados de Controle de Acesso:</strong> Suíte de testes com <code>MockMvc</code> validando isolamento estrito de papéis (DPO, Gestor, Operador). Verificação de que apenas o DPO tem permissão de homologar ou expurgar relatórios RIPD, barrando mutações não autorizadas.
                                        </li>
                                        <li>
                                            <span class="testing-tag">Trilha de Auditoria</span><span class="testing-tag">PostgreSQL</span>
                                            <strong>Testes de Auditoria & Não-Repúdio:</strong> Testes de integração assegurando que toda operação (CREATE, UPDATE, DELETE) gera logs imutáveis com carimbo de data/hora (timestamp UTC), IP de origem e hash do operador para conformidade fiscalizatória ANPD.
                                        </li>
                                        <li>
                                            <span class="testing-tag">Sanitização</span><span class="testing-tag">OWASP</span>
                                            <strong>Testes de Prevenção contra Vulnerabilidades:</strong> Validação de filtros contra SQL Injection, XSS e manipulação indevida de identificadores corporativos.
                                        </li>
                                    </ul>
                                </div>

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

                                <div class="testing-highlight-box">
                                    <div class="testing-highlight-title">
                                        <i class="fas fa-mobile-alt"></i> Estratégia de Testes Automatizados Mobile (Kotlin MVVM)
                                    </div>
                                    <ul class="testing-highlight-list">
                                        <li>
                                            <span class="testing-tag">JUnit 5</span><span class="testing-tag">Mockk</span>
                                            <strong>Testes Unitários de ViewModels & UseCases:</strong> Testes de transição de estado no <code>StateFlow</code> e <code>LiveData</code> garantindo isolamento entre processamento de imagem e interface de usuário.
                                        </li>
                                        <li>
                                            <span class="testing-tag">Robolectric</span><span class="testing-tag">Android Tests</span>
                                            <strong>Testes Locais de Componentes:</strong> Validação de lifecycle da Activity e permissões da câmera sem dependência de dispositivo físico conectado.
                                        </li>
                                        <li>
                                            <span class="testing-tag">ML Kit Mocking</span><span class="testing-tag">CameraX</span>
                                            <strong>Mocks de Landmarks Faciais:</strong> Mocks sintéticos para validação de tolerância a variações de ângulo, oclusão e tempo de resposta de inferência.
                                        </li>
                                    </ul>
                                </div>

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

                                <div class="testing-highlight-box">
                                    <div class="testing-highlight-title">
                                        <i class="fas fa-vial"></i> Estratégia de Testes Automatizados & Resiliência (Jest & Vitest)
                                    </div>
                                    <ul class="testing-highlight-list">
                                        <li>
                                            <span class="testing-tag">Jest</span><span class="testing-tag">TypeScript</span>
                                            <strong>Testes Unitários do Motor de Risco Reputacional:</strong> Testes unitários do algoritmo ponderado de risco (<code>RiskScoringEngine</code>): validação matemática dos scores de severidade com base em sentimento NLP (-1.0 a +1.0), autoridade do canal e velocidade de propagação viral.
                                        </li>
                                        <li>
                                            <span class="testing-tag">Supertest</span><span class="testing-tag">API REST</span>
                                            <strong>Testes de Integração de Endpoints:</strong> Testes de rotas da API com <code>Supertest</code> cobrindo autenticação JWT, filtragem de alertas críticos e validação de contratos com schemas Zod.
                                        </li>
                                        <li>
                                            <span class="testing-tag">Nock</span><span class="testing-tag">Mocking</span>
                                            <strong>Mocking de Serviços Externos & Resiliência:</strong> Mocking de APIs de mensageria (Telegram Bot API) e LLM APIs. Simulação de cenários de queda de rede, rate limit (HTTP 429) e retentativas com backoff exponencial.
                                        </li>
                                        <li>
                                            <span class="testing-tag">Redis Mock</span><span class="testing-tag">Dead Letter Queue</span>
                                            <strong>Testes de Fila & Concorrência Assíncrona:</strong> Testes garantindo que picos repentinos de menções sejam enfileirados no Redis sem perda de pacotes, com tratamento automático para mensagens corrompidas na DLQ.
                                        </li>
                                        <li>
                                            <span class="testing-tag">React Testing Library</span><span class="testing-tag">Next.js</span>
                                            <strong>Testes de Componentes do Command Center:</strong> Testes de UI validando renderização de gráficos em tempo real, alternância de filtros de crise e preservação de evidências digitais.
                                        </li>
                                    </ul>
                                </div>

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
                                <div style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #f59e0b; border-radius: 6px; padding: 0.75rem 1rem; margin-bottom: 1.25rem; color: #fcd34d; font-size: 0.95rem;">
                                    <i class="fas fa-balance-scale" style="margin-right: 0.5rem;"></i>
                                    <strong>LegalTech Proprietária:</strong> Plataforma de inteligência jurídica com pipelines de scraping e RAG sob termos de propriedade intelectual.
                                </div>
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

                                <div class="testing-highlight-box">
                                    <div class="testing-highlight-title">
                                        <i class="fas fa-balance-scale"></i> Estratégia de Testes Automatizados & Validação Analítica (PyTest & Pandas)
                                    </div>
                                    <ul class="testing-highlight-list">
                                        <li>
                                            <span class="testing-tag">PyTest</span><span class="testing-tag">Regex</span>
                                            <strong>Testes Unitários de Sanitização Textual:</strong> Testes unitários para pipelines de parsing de sentenças jurídicas do TJBA, garantindo limpeza precisa de carimbos eletrônicos, cabeçalhos forenses e anonimização de dados sensíveis (LGPD).
                                        </li>
                                        <li>
                                            <span class="testing-tag">Pandas Testing</span><span class="testing-tag">Estatística</span>
                                            <strong>Testes de Consistência Analítica com Pandas:</strong> Validação de agregação de dados via <code>pandas.testing.assert_frame_equal</code>, certificando que cálculos de valores médios de condenação, medianas por magistrado e taxas de deferimento sejam 100% exatos.
                                        </li>
                                        <li>
                                            <span class="testing-tag">pgvector</span><span class="testing-tag">RAG Pipeline</span>
                                            <strong>Testes de Recuperação Semântica & Reranking:</strong> Testes do pipeline RAG validando a divisão em chunks (com overlap semântico) e a ordenação dos 15 fragmentos mais relevantes antes do envio ao GPT-4o.
                                        </li>
                                        <li>
                                            <span class="testing-tag">Responses</span><span class="testing-tag">VCR Mock</span>
                                            <strong>Mocking de Scraping & Resiliência a Mudanças:</strong> Testes de parsers HTML com payloads reais gravados de PROJUDI e PJe, assegurando que o coletor autônomo continue operando mesmo com pequenas variações de layout nos portais dos tribunais.
                                        </li>
                                    </ul>
                                </div>

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

                                <div class="testing-highlight-box">
                                    <div class="testing-highlight-title">
                                        <i class="fas fa-microchip"></i> 78+ Testes Automatizados & Arquitetura Cognitiva (PyTest & FastAPI)
                                    </div>
                                    <ul class="testing-highlight-list">
                                        <li>
                                            <span class="testing-tag">PyTest</span><span class="testing-tag">PyTest-AsyncIO</span>
                                            <strong>78+ Testes Automatizados Assíncronos:</strong> Suíte completa de testes executada com <code>pytest -v --asyncio-mode=auto</code> cobrindo orquestração assíncrona com latência mínima e isolamento total sem flakiness.
                                        </li>
                                        <li>
                                            <span class="testing-tag">FastAPI TestClient</span><span class="testing-tag">HTTPX</span>
                                            <strong>Testes de Integração da API & WebSockets:</strong> Testes com <code>httpx.AsyncClient</code> validando endpoints de chat, ciclo de vida de conexões WebSocket persistentes e autenticação via refresh token rotativo.
                                        </li>
                                        <li>
                                            <span class="testing-tag">pgvector</span><span class="testing-tag">RAG Testing</span>
                                            <strong>Testes de Deduplicação & Recuperação Semântica:</strong> Testes de cálculo de similaridade de cosseno com embeddings sintéticos: validação de que memórias repetidas são fundidas e fatos de curto prazo expiram após 6 horas.
                                        </li>
                                        <li>
                                            <span class="testing-tag">Sandbox Isolation</span><span class="testing-tag">Segurança</span>
                                            <strong>Testes de Contenção de Execução de Código:</strong> Testes unitários do módulo <code>execute_code</code> assegurando que comandos maliciosos ou chamadas de sistema (<code>os.system</code>, <code>subprocess</code>) sejam barrados antes da execução.
                                        </li>
                                        <li>
                                            <span class="testing-tag">Mock LLM Fixtures</span><span class="testing-tag">Zero Custo</span>
                                            <strong>Fixtures Determinísticas de IA:</strong> Mock de respostas de modelos Ollama e OpenAI com fixtures de PyTest, permitindo execução de toda a suíte de 78 testes em menos de 8 segundos.
                                        </li>
                                    </ul>
                                </div>

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
    if (projectType === 'puffszone' || projectType === 'vigilancia') {
        repoUrl = 'https://github.com/davifeels/PuffsZone';
        window.open(repoUrl, '_blank');
    } else if (projectType === 'riskcore') {
        repoUrl = 'https://github.com/davifeels/riskcore-ai-frontend';
        window.open(repoUrl, '_blank');
    } else if (projectType === 'nexus') {
        repoUrl = 'https://github.com/davifeels/nexus-ai-core';
        window.open(repoUrl, '_blank');
    } else if (projectType === 'aegiscore') {
        repoUrl = 'https://github.com/davifeels/aegis-core';
        window.open(repoUrl, '_blank');
    } else if (projectType === 'dataprotection') {
        openProject('dataprotection');
    } else if (projectType === 'mdm' || projectType === 'rekkon') {
        openProject('mdm');
    } else if (projectType === 'jurimetria') {
        openProject('jurimetria');
    } else {
        repoUrl = 'https://github.com/davifeels';
        window.open(repoUrl, '_blank');
    }
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
let currentImageIndex = 0;

function updateLightbox() {
    const image = galleryImages[currentImageIndex];
    if (!image) return;

    let folder = 'imgsistema';
    const lightboxImg = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    if (lightboxImg) lightboxImg.src = `assets/${folder}/${image.src}`;
    if (lightboxCaption) lightboxCaption.textContent = image.caption;
}

const riskCoreGalleryImages = [
    { src: 'image.png',      caption: 'RiskCore AI — Dashboard' },
    { src: 'image copy.png', caption: 'RiskCore AI — Command Center' },
];

function openLightboxRiskCore(imageSrc) {
    galleryImages = riskCoreGalleryImages;
    currentImageIndex = galleryImages.findIndex(img => img.src === imageSrc);
    if (currentImageIndex === -1) currentImageIndex = 0;
    const lb = document.getElementById('lightbox');
    if (lb) lb.style.display = 'block';
    updateLightbox();
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (lb) lb.style.display = 'none';
}

function nextImage() {
    if (!galleryImages.length) return;
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightbox();
}

function prevImage() {
    if (!galleryImages.length) return;
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightbox();
}

// Global keyboard navigation: ESC para fechar modal/lightbox e setas para navegar fotos
document.addEventListener('keydown', (e) => {
    const lb = document.getElementById('lightbox');
    if (lb && lb.style.display === 'block') {
        if (e.key === 'Escape') closeLightbox();
        else if (e.key === 'ArrowRight') nextImage();
        else if (e.key === 'ArrowLeft') prevImage();
        return;
    }
    const modal = document.getElementById('projectModal');
    if (modal && modal.style.display === 'block') {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    }
});
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

/* ═══════════════════════════════════════════════════
   PREMIUM FEATURES: Filtering & Clipboard Toast
   ═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    // Project Category Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const categories = (card.getAttribute('data-category') || '').split(' ');
                if (filter === 'all' || categories.includes(filter)) {
                    card.classList.remove('filter-hidden');
                } else {
                    card.classList.add('filter-hidden');
                }
            });
        });
    });

    // Copy to clipboard with toast notification on contact items
    const contactLinks = document.querySelectorAll('.contact-item');
    contactLinks.forEach(link => {
        const href = link.getAttribute('href') || '';
        if (href.startsWith('mailto:') || href.startsWith('tel:')) {
            link.addEventListener('click', () => {
                const textToCopy = href.startsWith('mailto:') 
                    ? href.replace('mailto:', '') 
                    : href.replace('tel:', '');
                
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(textToCopy).then(() => {
                        showToast(`Copiado: ${textToCopy} 📋`);
                    }).catch(() => {});
                }
            });
        }
    });
});

function showToast(message) {
    const toast = document.getElementById('toastNotification');
    const msgEl = document.getElementById('toastMsg');
    if (!toast || !msgEl) return;
    msgEl.textContent = message;
    toast.classList.add('show');
    clearTimeout(window.__toastTimeout);
    window.__toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}
