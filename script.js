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

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        const isActive = hamburger.classList.toggle('active');
        navMenu.classList.toggle('active', isActive);
        document.body.classList.toggle('menu-open', isActive);
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}

// Navbar scroll effect com suporte fluido dark theme
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 40) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
}, { passive: true });

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
                <h2>PuffsZone — Sistema de Gestão Comercial e PDV (Concluído)</h2>
                <div class="demo-container">
                    <div class="project-showcase">
                        <div class="showcase-header">
                            <div class="showcase-icon"><i class="fas fa-cash-register"></i></div>
                            <div>
                                <div class="showcase-title">PuffsZone — Sistema de Gestão Comercial & PDV</div>
                                <div class="showcase-subtitle">Concluído &amp; Operacional em Produção · Java 21 + Spring Boot 3 + React 19 + Docker + VPS Linux</div>
                            </div>
                        </div>
                        <div class="showcase-content">
                            <div class="showcase-description" style="text-align: left;">
                                <p>A <strong>PuffsZone</strong> é uma solução completa para gestão comercial, operações de frente de caixa (PDV), controle de estoque e gerenciamento financeiro empresarial. <strong>100% concluída e operacional em ambiente real de produção</strong>, foi desenvolvida para ir muito além de um CRUD convencional: implementa regras de negócio complexas, fechamento cego de turno, segurança com Spring Security e JWT, persistência com PostgreSQL 16 e Flyway, e implantação estável em VPS Linux sob proxy reverso Nginx com HTTPS Let's Encrypt.</p>

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
                <div class="demo-container">
                    <div class="project-showcase">
                        <div class="showcase-header">
                            <div class="showcase-icon"><i class="fas fa-shield-halved"></i></div>
                            <div>
                                <div class="showcase-title">AegisCore — Cloud Asset &amp; Audit Platform</div>
                                <div class="showcase-subtitle">Java 25 • Spring Boot 4 • PostgreSQL 18 • Testcontainers • RBAC &amp; BCrypt • AWS Architecture</div>
                            </div>
                        </div>

                        <div class="showcase-content">
                            <!-- Action Bar -->
                            <div style="display: flex; gap: 1rem; margin: 0 0 1.5rem 0; flex-wrap: wrap; align-items: center;">
                                <a href="https://github.com/davifeels/aegis-core" target="_blank" rel="noopener" class="btn btn-primary" style="text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.65rem 1.35rem; border-radius: 8px; font-weight: 600;">
                                    <i class="fab fa-github"></i> Ver Código no GitHub
                                </a>
                                <span class="badge-status-cloud">
                                    <i class="fab fa-aws"></i> Blueprint AWS Cloud Homologado
                                </span>
                            </div>

                            <!-- Interactive Modal Tabs -->
                            <div class="modal-tabs-header">
                                <button class="modal-tab-btn active" onclick="switchModalTab(event, 'aegis-tab-overview')">
                                    <i class="fas fa-info-circle"></i> Visão Geral &amp; Negócio
                                </button>
                                <button class="modal-tab-btn" onclick="switchModalTab(event, 'aegis-tab-arch')">
                                    <i class="fas fa-sitemap"></i> Arquitetura &amp; Código Java
                                </button>
                                <button class="modal-tab-btn" onclick="switchModalTab(event, 'aegis-tab-tests')">
                                    <i class="fas fa-vial"></i> Testcontainers &amp; Testes
                                </button>
                                <button class="modal-tab-btn" onclick="switchModalTab(event, 'aegis-tab-cloud')">
                                    <i class="fab fa-aws"></i> Blueprint AWS &amp; Custos
                                </button>
                            </div>

                            <!-- Tab 1: Visão Geral -->
                            <div class="modal-tab-content active" id="aegis-tab-overview">
                                <div class="showcase-description" style="text-align: left;">
                                    <p>O <strong>AegisCore</strong> é uma plataforma backend corporativa desenvolvida para solucionar a <strong>dispersão de ativos e a falta de rastreabilidade forense</strong> em infraestruturas multinuvem (AWS, Azure e GCP). Construída com <strong>Java 25</strong> e <strong>Spring Boot 4</strong>, a aplicação unifica inventário, controle de acesso estrito e trilha de auditoria transacional imutável.</p>

                                    <h4 style="color: #38bdf8; margin-top: 1.5rem;">🎯 Problemas Reais de Produção Resolvidos</h4>
                                    <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1; line-height: 1.7;">
                                        <li><strong>Fim do Shadow IT &amp; Inventário Fragmentado:</strong> Centralização de instâncias, bancos de dados e buckets em um catálogo padronizado com validação de formato e integridade.</li>
                                        <li><strong>Conformidade Regulatória (LGPD/GDPR):</strong> Trilha de auditoria obrigatória que registra quem executou a ação, data/hora em UTC, IP de origem e identificador do recurso.</li>
                                        <li><strong>Isolamento de Falhas em Logs:</strong> Desacoplamento entre a persistência do ativo e a gravação do log de auditoria, garantindo que oscilações no subsistema de log nunca causem rollback desnecessário na operação de negócio já concluída.</li>
                                    </ul>

                                    <h4 style="color: #38bdf8; margin-top: 1.5rem;">💻 Funcionalidades Principais</h4>
                                    <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1; line-height: 1.7;">
                                        <li><strong>CRUD de Ativos de Nuvem (<code>/api/v1/assets</code>):</strong> Cadastro atômico, listagem unificada, busca por ID, atualização com detecção de conflitos e exclusão lógica/física.</li>
                                        <li><strong>Pesquisa Dinâmica de Auditoria (<code>/api/v1/audit-logs</code>):</strong> Busca paginada (PageRequest) com filtros combinados de período (<code>fromDate</code>, <code>toDate</code>), tipo de ação (CREATE, UPDATE, DELETE) e ativo.</li>
                                        <li><strong>Documentação Interativa OpenAPI 3 / Swagger:</strong> Interface viva em <code>/swagger-ui.html</code> com schemas de dados, validações e exemplos de payloads.</li>
                                    </ul>

                                    <div class="showcase-stats" style="margin-top: 1.5rem;">
                                        <div class="stat-item"><span class="stat-number">Java 25</span><span class="stat-label">Spring Boot 4.1.1</span></div>
                                        <div class="stat-item"><span class="stat-number">Postgres 18</span><span class="stat-label">Flyway Migrations</span></div>
                                        <div class="stat-item"><span class="stat-number">0 Mocks</span><span class="stat-label">Testcontainers em CI</span></div>
                                        <div class="stat-item"><span class="stat-number">P99 &lt; 25ms</span><span class="stat-label">Latência Medida</span></div>
                                    </div>
                                </div>
                            </div>

                            <!-- Tab 2: Arquitetura & Código -->
                            <div class="modal-tab-content" id="aegis-tab-arch">
                                <div class="showcase-description" style="text-align: left;">
                                    <h4 style="color: #38bdf8;">🏛️ Decisões Críticas de Arquitetura Transacional</h4>
                                    <p>Ao invés de gravar o log de auditoria na mesma transação do ativo (o que poderia gerar logs falsos em caso de rollback ou reverter o ativo por falha de log), o AegisCore adota o padrão de eventos Spring pós-commit:</p>

                                    <div class="code-box-preview">
<span style="color:#64748b">// 1. Emissão Desacoplada no CloudAssetService</span>
<span style="color:#f472b6">public</span> CloudAsset <span style="color:#38bdf8">register</span>(CloudAsset asset) {
    CloudAssetEntity saved = assetRepository.saveAndFlush(entity);
    eventPublisher.publishEvent(<span style="color:#f472b6">new</span> AssetAuditEvent(<span style="color:#34d399">"CREATE"</span>, currentActor(), saved.getId()));
    <span style="color:#f472b6">return</span> toDto(saved);
}

<span style="color:#64748b">// 2. Listener Pós-Commit no AssetAuditListener (Executa APENAS após commit bem-sucedido)</span>
<span style="color:#fbbf24">@TransactionalEventListener</span>(phase = TransactionPhase.AFTER_COMMIT)
<span style="color:#f472b6">public void</span> <span style="color:#38bdf8">handle</span>(AssetAuditEvent event) {
    String sanitizedAction = safeField(event.action(), 20); <span style="color:#64748b">// Previne CRLF / Log Injection</span>
    persistenceService.record(sanitizedAction, event.actor(), event.assetId());
}

<span style="color:#64748b">// 3. Transação Física Independente no AssetAuditPersistenceService</span>
<span style="color:#fbbf24">@Transactional</span>(propagation = Propagation.REQUIRES_NEW)
<span style="color:#f472b6">public void</span> <span style="color:#38bdf8">record</span>(String action, String actor, String assetId) {
    auditRepository.saveAndFlush(<span style="color:#f472b6">new</span> AssetAuditRecordEntity(action, actor, assetId));
}
                                    </div>

                                    <h4 style="color: #38bdf8; margin-top: 1.5rem;">🛡️ Segurança Defensiva &amp; Matriz RBAC</h4>
                                    <ul style="margin-left: 1.5rem; color: #cbd5e1; line-height: 1.7;">
                                        <li><strong>HTTP Basic Stateless:</strong> Sem acúmulo de sessões em memória no servidor, pronto para escalabilidade horizontal.</li>
                                        <li><strong>Hashing BCrypt:</strong> Salteamento criptográfico individual por senha via <code>BCryptPasswordEncoder</code>.</li>
                                        <li><strong>Princípio do Menor Privilégio:</strong> Perfil <code>ROLE_USER</code> tem acesso somente de leitura (GET); mutações e consulta de logs forenses exigem <code>ROLE_ADMIN</code>.</li>
                                        <li><strong>Prevenção de Log Injection (CRLF):</strong> Sanitização rigorosa via regex <code>[\\p{Cntrl}]</code> em todos os campos antes da gravação.</li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Tab 3: Testcontainers & Testes -->
                            <div class="modal-tab-content" id="aegis-tab-tests">
                                <div class="showcase-description" style="text-align: left;">
                                    <h4 style="color: #38bdf8;">🧪 Testes de Integração com Banco Real (Zero H2)</h4>
                                    <p>O AegisCore elimina a discrepância clássica entre ambientes ("funcionou no H2 em memória, quebrou no PostgreSQL de produção") adotando <strong>Testcontainers</strong> com o driver <code>jdbc:tc:postgresql:18-alpine</code>:</p>

                                    <div class="code-box-preview">
<span style="color:#64748b">// AssetAuditIntegrationTests.java - Comprovação de Commit Timing</span>
<span style="color:#fbbf24">@Test</span>
<span style="color:#f472b6">void</span> <span style="color:#38bdf8">shouldPersistAuditOnlyAfterAssetRegistrationCommits</span>() {
    TransactionTemplate transaction = <span style="color:#f472b6">new</span> TransactionTemplate(transactionManager);

    transaction.executeWithoutResult(status -> {
        cloudAssetService.register(asset);
        assertTrue(assetRepository.existsById(assetId)); <span style="color:#64748b">// Ativo existe dentro da transação</span>
        assertFalse(auditExistsFor(assetId)); <span style="color:#64748b">// Auditoria NÃO DEVE existir antes do commit!</span>
    });

    assertTrue(auditExistsFor(assetId)); <span style="color:#64748b">// Auditoria existe IMEDIATAMENTE após o commit!</span>
}
                                    </div>

                                    <div class="testing-highlight-box" style="margin-top: 1.25rem;">
                                        <div class="testing-highlight-title"><i class="fas fa-check-circle"></i> Cobertura Completa da Suíte de Testes</div>
                                        <ul class="testing-highlight-list">
                                            <li><strong>SecurityTests (MockMvc):</strong> Validação de 401 Unauthorized para acessos anônimos e 403 Forbidden para ROLE_USER em rotas de mutação.</li>
                                            <li><strong>AssetAuditListenerTests:</strong> Validação de limites estruturais de caracteres e sanitização de quebras de linha (anti-CRLF).</li>
                                            <li><strong>GitHub Actions CI:</strong> Execução automática de <code>./mvnw -B clean verify</code> com Testcontainers a cada push e PR.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <!-- Tab 4: Blueprint AWS & Custos -->
                            <div class="modal-tab-content" id="aegis-tab-cloud">
                                <div class="showcase-description" style="text-align: left;">
                                    <h4 style="color: #38bdf8;"><i class="fab fa-aws"></i> Topologia de Infraestrutura em Nuvem (AWS Blueprint)</h4>
                                    <p>Arquitetura projetada e homologada para operação elástica e segura em nuvem pública:</p>

                                    <ul style="margin-left: 1.5rem; color: #cbd5e1; line-height: 1.7;">
                                        <li><strong>Compute (AWS ECS Fargate):</strong> Contêineres serverless com auto-scaling automático, executando com usuário não-root (<code>appuser</code> / UID 10001).</li>
                                        <li><strong>Database (Amazon RDS PostgreSQL 18 Multi-AZ):</strong> Cluster gerenciado de alta disponibilidade, backups automáticos diários e criptografia em repouso via AWS KMS.</li>
                                        <li><strong>Rede &amp; Segurança (VPC):</strong> Subnets públicas restritas ao Application Load Balancer (ALB) e subnets privadas sem IP público para banco e contêineres.</li>
                                        <li><strong>Segredos &amp; Observabilidade:</strong> AWS Secrets Manager para injeção em tempo de execução e Amazon CloudWatch para métricas de JVM e logs centralizados.</li>
                                    </ul>

                                    <h4 style="color: #38bdf8; margin-top: 1.5rem;">💰 Estimativa de Custos &amp; Otimização Free Tier</h4>
                                    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 8px; padding: 1rem; margin-top: 0.75rem;">
                                        <p style="margin: 0; font-size: 0.9rem; color: #cbd5e1;">
                                            <strong>Custo de Operação para Demonstração:</strong> <strong>$0.00 / mês</strong> com RDS <code>db.t4g.micro</code> no AWS Free Tier e provisionamento sob demanda com Terraform (destruição automatizada pós-demonstração).
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <!-- Badges Footer -->
                            <div style="display: flex; gap: 0.65rem; justify-content: center; flex-wrap: wrap; margin-top: 2rem;">
                                <span class="tech-tag">Java 25</span>
                                <span class="tech-tag">Spring Boot 4</span>
                                <span class="tech-tag">PostgreSQL 18</span>
                                <span class="tech-tag">Flyway</span>
                                <span class="tech-tag">Spring Security</span>
                                <span class="tech-tag">BCrypt</span>
                                <span class="tech-tag">Testcontainers</span>
                                <span class="tech-tag">JUnit 5</span>
                                <span class="tech-tag">Docker Multi-Stage</span>
                                <span class="tech-tag">GitHub Actions</span>
                                <span class="tech-tag">OpenAPI 3</span>
                                <span class="tech-tag">AWS Cloud</span>
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
                <h2>RiskCore AI — Plataforma de Inteligência & Defesa Reputacional</h2>
                <div class="demo-container">
                    <div class="project-showcase">
                        <div class="showcase-header">
                            <div class="showcase-icon"><i class="fas fa-shield-virus"></i></div>
                            <div>
                                <div class="showcase-title">RiskCore AI — Defesa Reputacional & Inteligência Cibernética</div>
                                <div class="showcase-subtitle">Monitoramento 24/7 (9+ Canais) • Motor NLP • Cofre SHA-256 • Faster-Whisper • Arsenal de Contramedidas</div>
                            </div>
                        </div>
                        <div class="showcase-content">
                            <div class="showcase-description" style="text-align: left;">
                                <p>O <strong>RiskCore AI</strong> (identificado na camada de infraestrutura como <strong>SentinelGov</strong>) é uma solução corporativa de inteligência de dados, cibersegurança informacional e monitoramento estratégico contínuo voltada para proteção de marcas, figuras públicas, lideranças e grandes organizações contra ataques de desinformação coordenada, deepfakes e ilícitos digitais.</p>

                                <div style="display: flex; gap: 1rem; margin: 1.5rem 0; flex-wrap: wrap;">
                                    <a href="https://github.com/davifeels/RiskCore-AI" target="_blank" rel="noopener" class="btn btn-secondary" style="text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 600;">
                                        <i class="fab fa-github"></i> Ver Código no GitHub
                                    </a>
                                    <span style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.25rem; border-radius: 8px; font-weight: 600; font-size: 0.85rem; background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.3); color: #4ade80;">
                                        <i class="fas fa-lock"></i> Conformidade ABNT NBR ISO/IEC 27037 &amp; Marco Civil Art. 19
                                    </span>
                                </div>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">🎯 Atuação Tríplice da Solução</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>1. Vigilância Informacional Ativa:</strong> Ingestão ininterrupta (ciclos de 5 minutos) monitorando 9+ plataformas: Instagram (API móvel privada), TikTok, Twitter/X (API v2), YouTube Data v3, Telegram (35+ canais), Reddit, Google News via Custom Search, Meta Ads Library e Diários Oficiais.</li>
                                    <li><strong>2. Avaliação de Ameaça por IA (NLP &amp; Audio):</strong> Normalização semântica, detecção de ofensas/ironias, cálculo contínuo de <code>RiskScore</code> dinâmico, identificação de redes coordenadas de desinformação (<em>astroturfing</em>) e mídias forjadas.</li>
                                    <li><strong>3. Neutralização &amp; Resposta Imediata:</strong> Congelamento de provas probatórias no cofre pericial (Playwright com espelho HTML e hash SHA-256) e acionamento de contramedidas automatizadas (notificações, DMCA, desindexação e flagging no VirusTotal).</li>
                                </ul>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">🏗️ Arquitetura de Microsserviços &amp; Stack Tecnológica</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>Backend Principal (NestJS 10 / Node.js 20+):</strong> Arquitetura modular orientada a domínios em TypeScript, controladores REST documentados via OpenAPI/Swagger e gateways WebSockets.</li>
                                    <li><strong>Banco de Dados &amp; Persistência (PostgreSQL 16 + Prisma ORM):</strong> Modelagem relacional estruturada com índices B-Tree temporais para consultas instantâneas e campos JSONB para metadados ricos de mídia e conexões de rede.</li>
                                    <li><strong>Mensageria &amp; Cache (Redis 7 + BullMQ 5):</strong> Filas de processamento assíncrono com controle de concorrência, retentativas com backoff exponencial e Dead Letter Queues (DLQ) para isolamento de falhas.</li>
                                    <li><strong>Inteligência Acústica (Python 3.11 + Faster-Whisper):</strong> Worker dedicado executando modelo quantizado int8 via motor CTranslate2, processando streams de rádio ao vivo com buffer circular de áudio pré-roll de 10s.</li>
                                    <li><strong>Frontend Command Center (Next.js 14 App Router + React 18):</strong> Interface analítica reativa de alto impacto com Tailwind CSS, animações Framer Motion, gráficos Recharts e atualizações em tempo real via Socket.IO.</li>
                                    <li><strong>Cofre Pericial &amp; Scrapers:</strong> Playwright com Puppeteer-Stealth para renderização de páginas dinâmicas, rotação de proxies e geração de hashes imutáveis SHA-256.</li>
                                </ul>

                                <h4 style="color: #60a5fa; margin-top: 1.5rem;">🛡️ Módulos e Capacidades Centrais</h4>
                                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; color: #cbd5e1;">
                                    <li><strong>Cofre Pericial de Evidências (Chain of Custody):</strong> Preservação pericial em conformidade com o CPP (Art. 158-A a 158-F) e a norma ABNT NBR ISO/IEC 27037. Cada captura gera screenshot 4K, espelho do código-fonte original, carimbo de tempo irrefutável e laudo em PDF assinado com hash SHA-256.</li>
                                    <li><strong>Arsenal de Contramedidas Automatizadas (10+ Ações):</strong> Geração de notificações extrajudiciais fundadas no Marco Civil da Internet (Art. 19), notificações de takedown DMCA para provedores de hospedagem internacional, sinalização de URLs maliciosas na API VirusTotal e Google Web Risk, e pedidos de desindexação no Google Search.</li>
                                    <li><strong>Crisis Radar &amp; Matriz de Risco:</strong> Algoritmo de risco ponderado combinando polaridade de sentimento NLP, autoridade do emissor, velocidade de compartilhamento viral e alcance estimado.</li>
                                    <li><strong>Escuta de Rádios com Faster-Whisper:</strong> Monitoramento contínuo de emissoras AM/FM via internet. Transcrição contínua em tempo real com identificação de palavras-chave sensíveis e disparo automático de alertas no Telegram.</li>
                                    <li><strong>Inteligência Geográfica &amp; Competitiva:</strong> Mapeamento vetorial de sentimento regionalizado, monitoramento de menções parlamentares e biblioteca de anúncios pagos via Meta Ad Library.</li>
                                </ul>

                                <div class="testing-highlight-box">
                                    <div class="testing-highlight-title">
                                        <i class="fas fa-vial"></i> Estratégia de Testes Automatizados & Qualidade de Software
                                    </div>
                                    <ul class="testing-highlight-list">
                                        <li>
                                            <span class="testing-tag">Jest</span><span class="testing-tag">TypeScript</span>
                                            <strong>Testes Unitários do Motor de Risco Reputacional:</strong> Testes matemáticos isolados do algoritmo de scoring (<code>RiskScoringEngine</code>): validação da matriz ponderada de severidade, polaridade de sentimento (-1.0 a +1.0) e detecção de anomalias em picos de volume.
                                        </li>
                                        <li>
                                            <span class="testing-tag">Supertest</span><span class="testing-tag">Zod</span>
                                            <strong>Testes de Integração de Endpoints &amp; Contratos:</strong> Cobertura de rotas REST com <code>Supertest</code>, validação estrita de schemas de entrada/saída com Zod e autenticação JWT por perfil de acesso.
                                        </li>
                                        <li>
                                            <span class="testing-tag">BullMQ</span><span class="testing-tag">Redis DLQ</span>
                                            <strong>Testes de Concorrência &amp; Dead Letter Queue:</strong> Simulação de sobrecarga em ingestão de dados em tempo real, validando que filas assíncronas do BullMQ absorvam picos sem perda de eventos e com descarte seguro para DLQ.
                                        </li>
                                        <li>
                                            <span class="testing-tag">Playwright</span><span class="testing-tag">SHA-256</span>
                                            <strong>Testes de Integridade da Cadeia de Custódia:</strong> Validação automatizada do pipeline de preservação: constatação de que qualquer byte alterado no snapshot HTML corrompe a correspondência do hash SHA-256, garantindo inviolabilidade forense.
                                        </li>
                                        <li>
                                            <span class="testing-tag">React Testing Library</span><span class="testing-tag">Socket.IO</span>
                                            <strong>Testes de UI Reativa &amp; WebSockets:</strong> Testes de renderização em tempo real das 50+ visões do painel, garantindo renderização assíncrona fluida de métricas de crise e filtros dinâmicos.
                                        </li>
                                    </ul>
                                </div>

                                <div class="showcase-stats" style="margin-top: 1.5rem;">
                                    <div class="stat-item"><span class="stat-number">50+</span><span class="stat-label">Visões no Command Center</span></div>
                                    <div class="stat-item"><span class="stat-number">9+</span><span class="stat-label">Canais Monitorados 24/7</span></div>
                                    <div class="stat-item"><span class="stat-number">SHA-256</span><span class="stat-label">Cadeia de Custódia Forense</span></div>
                                    <div class="stat-item"><span class="stat-number">10+</span><span class="stat-label">Armas de Contramedidas</span></div>
                                </div>

                                <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; margin: 2rem 0;">
                                    <span class="tech-tag">NestJS 10</span>
                                    <span class="tech-tag">Next.js 14</span>
                                    <span class="tech-tag">TypeScript</span>
                                    <span class="tech-tag">PostgreSQL 16</span>
                                    <span class="tech-tag">Prisma ORM</span>
                                    <span class="tech-tag">Redis 7</span>
                                    <span class="tech-tag">BullMQ 5</span>
                                    <span class="tech-tag">Python 3.11</span>
                                    <span class="tech-tag">Faster-Whisper</span>
                                    <span class="tech-tag">Playwright</span>
                                    <span class="tech-tag">Socket.IO</span>
                                    <span class="tech-tag">Docker Compose</span>
                                </div>
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
        repoUrl = 'https://github.com/davifeels/RiskCore-AI';
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

// Typing effect utility (kept for optional dynamic components)
function typeWriter(element, text, speed = 50) {
    if (!element) return;
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


/* ================================================================== */
/* WORLD-CLASS INTERACTIVE CONTROLS: TERMINAL & MODAL TABS
/* ================================================================== */

window.switchTerminalTab = function(tabId) {
    document.querySelectorAll('.terminal-tab').forEach(tab => {
        tab.classList.toggle('active', tab.getAttribute('data-tab') === tabId);
    });
    document.querySelectorAll('.terminal-pane').forEach(pane => {
        pane.classList.toggle('active', pane.id === tabId);
    });
};

window.copyTerminalCode = function() {
    const activePane = document.querySelector('.terminal-pane.active');
    if (activePane) {
        // Obter apenas o texto visível sem o cursor
        const text = activePane.innerText.replace('█', '').trim();
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                const btn = document.querySelector('.terminal-copy-btn');
                if (btn) {
                    btn.innerHTML = '<i class="fas fa-check" style="color:#10b981"></i>';
                    setTimeout(() => { btn.innerHTML = '<i class="fas fa-copy"></i>'; }, 1800);
                }
                if (typeof showToast === 'function') {
                    showToast('Saída do terminal copiada para a área de transferência! 📋');
                }
            }).catch(() => {});
        }
    }
};

window.switchModalTab = function(event, tabId) {
    if (event) event.preventDefault();
    const parent = event ? event.target.closest('.project-demo') : document.querySelector('.project-demo');
    if (!parent) return;
    
    parent.querySelectorAll('.modal-tab-btn').forEach(btn => btn.classList.remove('active'));
    parent.querySelectorAll('.modal-tab-content').forEach(pane => pane.classList.remove('active'));
    
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
    const target = parent.querySelector('#' + tabId);
    if (target) {
        target.classList.add('active');
    }
};

/* ================================================================== */
