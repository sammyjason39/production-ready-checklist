export const phases = [
  { id: 'profile', number: '00', title: 'Classify', subtitle: 'Pahami konteks sebelum membuat apa pun.', color: '#8b6be8' },
  { id: 'discovery', number: '01', title: 'Business discovery', subtitle: 'Pastikan masalahnya nyata dan layak diselesaikan.', color: '#f59e0b' },
  { id: 'planning', number: '02', title: 'Product planning', subtitle: 'Tentukan outcome, ownership, dan arah produk.', color: '#ef7d49' },
  { id: 'design', number: '03', title: 'Solution design', subtitle: 'Terjemahkan masalah menjadi rancangan yang bisa dibangun.', color: '#3c9d91' },
  { id: 'foundation', number: '04', title: 'Engineering foundation', subtitle: 'Bangun pagar pengaman sebelum kecepatan.', color: '#4684e7' },
  { id: 'build', number: '05', title: 'Build & integrate', subtitle: 'Kembangkan kecil, terukur, dan dapat direview.', color: '#5c67c9' },
  { id: 'verify', number: '06', title: 'Verify & secure', subtitle: 'Buktikan kualitas, keamanan, dan kemampuan pulih.', color: '#d95f72' },
  { id: 'launch', number: '07', title: 'Launch & GTM', subtitle: 'Siapkan produk, pasar, dan orang yang akan memakainya.', color: '#b27a15' },
  { id: 'operate', number: '08', title: 'Deploy & operate', subtitle: 'Jalankan seperti produk nyata, bukan demo.', color: '#189785' },
  { id: 'optimize', number: '09', title: 'Optimize & scale', subtitle: 'Belajar dari data, perbaiki, tumbuhkan, atau hentikan.', color: '#5672ca' }
];

export const templates = [
  { group: 'Business', phase: 'discovery', title: 'Application Profile', code: 'BIZ-000', description: 'Klasifikasi produk, user, data, integrasi, tier risiko, dan blast radius.', sections: ['Tujuan & target user', 'Jenis produk dan business model', 'Data serta integrasi', 'Tier risiko & owner'], tools: ['Notion', 'Google Docs'], prompt: 'Buat Application Profile satu halaman untuk [NAMA PROYEK]. Tanyakan data yang belum diketahui. Hasil harus mencakup target user, keputusan internal/commercial, data sensitif, integrasi, AI, tier risiko, blast radius, dan owner.' },
  { group: 'Business', phase: 'discovery', title: 'Problem Brief', code: 'BIZ-001', description: 'Problem statement, bukti masalah, target user, dampak, asumsi, dan cara validasi.', sections: ['Problem statement', 'Target user & konteks', 'Evidence', 'Asumsi paling berisiko', 'Validation plan'], tools: ['Dovetail', 'Google Forms', 'Notion'], prompt: 'Berperan sebagai product researcher. Bantu susun Problem Brief untuk [NAMA PROYEK]. Pisahkan fakta dari asumsi, sarankan 5 pertanyaan interview, dan buat rencana validasi yang dapat selesai dalam 7 hari.' },
  { group: 'Business', phase: 'discovery', title: 'Market Research & ICP', code: 'BIZ-002', description: 'Peta pasar, alternatif, ICP, willingness-to-pay, dan positioning awal.', sections: ['ICP', 'Alternatif & kompetitor', 'Jobs/pains/gains', 'Pricing signal', 'Positioning hypothesis'], tools: ['Google Sheets', 'Similarweb', 'Notion'], prompt: 'Buat kerangka market research untuk [NAMA PROYEK] dengan ICP, alternatif yang dipakai user, pertanyaan willingness-to-pay, tabel kompetitor, dan hipotesis positioning. Jangan mengarang data; beri kolom untuk evidence dan sumber.' },
  { group: 'Business', phase: 'discovery', title: 'Business Case & ROI Model', code: 'BIZ-003', description: 'Opsi, biaya build/run, manfaat, risiko, owner budget, dan keputusan go/no-go.', sections: ['Problem & opsi', 'Cost model', 'Benefit hypothesis', 'Risk & mitigation', 'Go/no-go'], tools: ['Google Sheets', 'Causal', 'Notion'], prompt: 'Susun Business Case untuk [NAMA PROYEK]. Buat tabel biaya one-off dan bulanan, benefit yang dapat diukur, risiko, sensitivity analysis, dan keputusan go/no-go. Tulis semua asumsi eksplisit.' },
  { group: 'Commercial', phase: 'design', title: 'Value Proposition Canvas', code: 'GTM-001', description: 'Jobs, pains, gains, pain relievers, gain creators, dan bukti validasinya.', sections: ['Customer jobs', 'Pains & gains', 'Product fit', 'Evidence', 'Open questions'], tools: ['Miro', 'FigJam', 'Notion'], prompt: 'Fasilitasi Value Proposition Canvas untuk [NAMA PROYEK] dan [ICP]. Berikan draft yang jelas menandai hipotesis, lalu 5 eksperimen untuk menguji pain dan gain paling penting.' },
  { group: 'Commercial', phase: 'design', title: 'Business Model Canvas', code: 'GTM-002', description: 'Segmen, channel, revenue, cost structure, key partners, dan key activities.', sections: ['Segments & value', 'Channel & relationship', 'Revenue & costs', 'Partners & activities', 'Risks'], tools: ['Miro', 'Canvanizer', 'Notion'], prompt: 'Buat Business Model Canvas untuk [NAMA PROYEK]. Sertakan asumsi yang perlu divalidasi, unit economics awal, dan risiko model bisnis. Gunakan bahasa ringkas dan tabel.' },
  { group: 'Product', phase: 'planning', title: 'Product Vision Board', code: 'PRO-001', description: 'Target group, needs, vision, business goal, product, dan success metric.', sections: ['Target group', 'Needs', 'Vision', 'Business goals', 'Success metrics'], tools: ['Productboard', 'Miro', 'Notion'], prompt: 'Buat Product Vision Board 90 hari untuk [NAMA PROYEK]. Fokus pada outcome, bukan daftar fitur. Sertakan target user, kebutuhan, visi, goal bisnis, metrik outcome, dan 3 guardrail metric.' },
  { group: 'Product', phase: 'planning', title: 'Metrics Tree & Analytics Plan', code: 'PRO-002', description: 'Outcome metric, leading indicator, guardrail, event taxonomy, dan dashboard owner.', sections: ['North-star outcome', 'Leading indicators', 'Guardrails', 'Event dictionary', 'Review cadence'], tools: ['PostHog', 'Amplitude', 'Google Sheets'], prompt: 'Rancang metrics tree untuk [NAMA PROYEK]. Turunkan satu business outcome menjadi leading indicators, guardrail, event yang diperlukan, definisi tiap event, dan cara meninjau metrik tiap minggu.' },
  { group: 'Product', phase: 'planning', title: 'Outcome Roadmap', code: 'PRO-003', description: 'Now/Next/Later, milestone, dependency, risk, dan review cadence.', sections: ['Now', 'Next', 'Later', 'Dependencies', 'Risks & decisions'], tools: ['Linear', 'Jira', 'Notion'], prompt: 'Ubah tujuan [NAMA PROYEK] menjadi roadmap Now/Next/Later berbasis outcome. Pecah menjadi milestone yang bisa didemokan, catat dependency dan risiko, serta usulkan apa yang tidak dikerjakan dulu.' },
  { group: 'Product', phase: 'planning', title: 'PRD / BRD', code: 'PRO-004', description: 'Scope, non-scope, user story, acceptance criteria, dependency, metric, dan risk.', sections: ['Context & goal', 'Scope / non-scope', 'User stories', 'Acceptance criteria', 'Metrics & risk'], tools: ['Notion', 'Linear', 'Google Docs'], prompt: 'Tulis PRD yang implementable untuk [FITUR] di [NAMA PROYEK]. Sertakan context, scope/non-scope, persona, user story, acceptance criteria terukur, failure state, analytics event, dependency, risk, dan rollout plan. Tanyakan asumsi yang belum tersedia.' },
  { group: 'Product', phase: 'planning', title: 'RACI & Stakeholder Map', code: 'PRO-005', description: 'Siapa responsible, accountable, consulted, informed, dan jalur eskalasi.', sections: ['Decision areas', 'RACI matrix', 'Escalation path', 'Cadence', 'Gaps'], tools: ['Notion', 'Google Sheets', 'Miro'], prompt: 'Buat matriks RACI untuk [NAMA PROYEK] yang mencakup product, engineering, security, data, release, support, dan GTM. Tandai role yang belum punya owner dan buat escalation path.' },
  { group: 'Design', phase: 'design', title: 'User Flow & Service Blueprint', code: 'DES-001', description: 'Happy path, error path, actor, system, handoff, dan fallback manual.', sections: ['Trigger', 'Happy path', 'Failure path', 'Backstage process', 'Fallback & owner'], tools: ['Figma', 'FigJam', 'Mermaid'], prompt: 'Rancang user flow untuk [USE CASE] pada [NAMA PROYEK]. Tampilkan happy path, empty/loading/error state, permission issue, system dependency, dan fallback manual. Keluarkan dalam Mermaid flowchart dan acceptance scenarios.' },
  { group: 'Design', phase: 'design', title: 'UX Quality Checklist', code: 'DES-002', description: 'Responsive states, accessibility, content, loading, empty, error, dan recovery.', sections: ['Accessibility', 'Responsive', 'Content', 'States', 'Usability test'], tools: ['Figma', 'Stark', 'Playwright'], prompt: 'Audit UX untuk [FITUR] di [NAMA PROYEK]. Buat checklist untuk mobile, keyboard, contrast, loading/empty/error state, microcopy, validation, dan recovery. Prioritaskan temuan berdasarkan impact.' },
  { group: 'Design', phase: 'design', title: 'NFR Sheet', code: 'DES-003', description: 'Target performance, availability, security, privacy, accessibility, recovery, dan cost.', sections: ['Performance', 'Reliability', 'Security & privacy', 'Accessibility', 'Recovery & cost'], tools: ['Notion', 'Google Sheets', 'Sentry'], prompt: 'Tulis non-functional requirements untuk [NAMA PROYEK] dengan target yang bisa diuji. Cakup latency, uptime, RPO/RTO, concurrency, security, privacy, accessibility, observability, dan budget. Jelaskan cara verifikasinya.' },
  { group: 'Engineering', phase: 'foundation', title: 'Architecture Decision Record', code: 'ENG-001', description: 'Konteks, opsi, trade-off, keputusan, konsekuensi, dan tanggal review.', sections: ['Context', 'Options', 'Decision', 'Trade-offs', 'Consequences & review'], tools: ['GitHub', 'Structurizr', 'Mermaid'], prompt: 'Buat ADR untuk keputusan [KEPUTUSAN] pada [NAMA PROYEK]. Bandingkan minimal 3 opsi menurut delivery speed, operating cost, security, maintainability, lock-in, dan scale. Beri rekomendasi beserta konsekuensinya.' },
  { group: 'Engineering', phase: 'foundation', title: 'Architecture & Data Flow', code: 'ENG-002', description: 'System boundary, service, data flow, trust boundary, dependency, dan owner.', sections: ['Context diagram', 'Containers', 'Data flow', 'Trust boundary', 'Failure modes'], tools: ['Structurizr', 'Mermaid', 'Lucidchart'], prompt: 'Buat diagram arsitektur C4 level container untuk [NAMA PROYEK] dalam Mermaid. Sertakan browser/app/API/database/storage/vendor/AI, trust boundary, data classification, failure modes, dan owner tiap komponen.' },
  { group: 'Engineering', phase: 'foundation', title: 'ERD & Data Dictionary', code: 'ENG-003', description: 'Entity, relation, source of truth, PII, retention, ownership, dan migration.', sections: ['Entities & relations', 'Field dictionary', 'PII labels', 'Retention', 'Migration strategy'], tools: ['dbdiagram.io', 'Supabase', 'PostgreSQL'], prompt: 'Rancang ERD dan data dictionary untuk [NAMA PROYEK]. Tandai source of truth, PII, role akses, retention, audit trail, index penting, dan migration/backfill strategy. Hasilkan DBML jika memungkinkan.' },
  { group: 'Engineering', phase: 'foundation', title: 'Environment & Access Matrix', code: 'ENG-004', description: 'Dev/staging/prod, secret, permission, approval, rotation, dan audit.', sections: ['Environment matrix', 'Secrets', 'Access roles', 'Approval', 'Rotation & audit'], tools: ['1Password', 'Doppler', 'GitHub Actions'], prompt: 'Buat Environment & Access Matrix untuk [NAMA PROYEK]. Bedakan dev, staging, production; daftar secret tanpa nilainya, principle of least privilege, owner, rotation, audit, dan akses emergency.' },
  { group: 'Engineering', phase: 'build', title: 'API Contract', code: 'ENG-005', description: 'Endpoint, auth, request/response, error schema, idempotency, versioning, dan rate limit.', sections: ['Endpoints', 'Auth & permissions', 'Schemas', 'Errors', 'Versioning & limits'], tools: ['OpenAPI', 'Postman', 'Bruno'], prompt: 'Tulis API contract OpenAPI untuk [FITUR] di [NAMA PROYEK]. Definisikan authentication, role, request/response schema, validation errors, idempotency, pagination, rate limit, dan contoh request.' },
  { group: 'Quality', phase: 'verify', title: 'Test Strategy & UAT Script', code: 'QA-001', description: 'Risk-based test, unit/integration/E2E, UAT scenario, owner, data, dan exit criteria.', sections: ['Risk matrix', 'Test layers', 'UAT scenarios', 'Test data', 'Exit criteria'], tools: ['Playwright', 'Vitest', 'Postman'], prompt: 'Buat test strategy berbasis risiko untuk [NAMA PROYEK]. Susun test matrix unit/integration/E2E/UAT, test data, happy and failure paths, accessibility, security checks, owner, dan release exit criteria.' },
  { group: 'Security', phase: 'verify', title: 'Threat Model', code: 'SEC-001', description: 'Asset, actor, threat, attack path, control, residual risk, dan owner.', sections: ['Assets & trust boundary', 'Threats', 'Attack paths', 'Controls', 'Residual risk'], tools: ['OWASP Threat Dragon', 'OWASP ASVS', 'Semgrep'], prompt: 'Threat-model [NAMA PROYEK] memakai STRIDE. Daftarkan asset, actor, trust boundary, attack path, control prevent/detect/respond, residual risk, severity, owner, dan test verifikasi. Perhatikan auth, secrets, PII, API, vendor, dan AI jika ada.' },
  { group: 'AI', phase: 'foundation', title: 'AI / Agent Design Doc', code: 'AI-001', description: 'Goal, model, prompt policy, tool permission, data boundary, eval, cost cap, dan kill switch.', sections: ['Task & boundaries', 'Model/prompt/tool', 'Data & permissions', 'Evaluation', 'Fallback & cost'], tools: ['LangChain', 'LangSmith', 'n8n'], prompt: 'Buat AI Agent Design Doc untuk [NAMA PROYEK]. Jelaskan tugas agent, model, system prompt policy, tool permission, data boundary, human approval, eval set, prompt injection defense, observability, cost cap, fallback, dan kill switch.' },
  { group: 'Operations', phase: 'operate', title: 'Production Readiness Review', code: 'OPS-001', description: 'Release gate untuk monitoring, rollback, security, backup, support, dan owner.', sections: ['Release scope', 'Quality & security', 'Operations', 'Rollback', 'Sign-off'], tools: ['GitHub Actions', 'Vercel', 'Sentry'], prompt: 'Fasilitasi Production Readiness Review untuk [NAMA PROYEK]. Buat gate go/no-go yang memeriksa test, security, backup restore, observability, SLO/alerts, rollback, runbook, support, cost, owner, dan known risk.' },
  { group: 'Operations', phase: 'operate', title: 'Observability & SLO Plan', code: 'OPS-002', description: 'SLI/SLO, alert, dashboard, trace/log, product analytics, owner, dan escalation.', sections: ['User journeys', 'SLI/SLO', 'Telemetry', 'Alerts', 'Response & review'], tools: ['Sentry', 'PostHog', 'Grafana'], prompt: 'Buat observability plan untuk [NAMA PROYEK]. Tentukan golden signals, SLI/SLO, log/trace/error event, dashboard, alert threshold, alert owner, escalation, runbook link, dan weekly review.' },
  { group: 'Operations', phase: 'operate', title: 'Incident & Backup Runbook', code: 'OPS-003', description: 'Severity, triage, communication, rollback, restore, postmortem, dan owner.', sections: ['Severity', 'Triage', 'Mitigation', 'Communication', 'Postmortem'], tools: ['PagerDuty', 'Better Uptime', 'Notion'], prompt: 'Tulis incident runbook untuk [NAMA PROYEK]. Sertakan severity matrix, langkah triage, log/metric yang dicek, rollback, communication template, backup restore, escalation, dan postmortem tanpa blame.' },
  { group: 'Growth', phase: 'launch', title: 'GTM Launch Pack', code: 'GTM-003', description: 'ICP, positioning, message house, pricing, demo, onboarding, channel, dan FAQ.', sections: ['ICP & positioning', 'Message house', 'Pricing', 'Channel plan', 'Onboarding & FAQ'], tools: ['HubSpot', 'Notion', 'Canva'], prompt: 'Buat GTM launch pack untuk [NAMA PROYEK]. Sertakan ICP, positioning statement, messaging hierarchy, pricing/packaging assumptions, demo script, onboarding, objections, launch channels, owners, metric, dan feedback loop.' },
  { group: 'Growth', phase: 'launch', title: 'SEO & GEO Content Brief', code: 'GTM-004', description: 'Search intent, people-first source policy, technical foundation, pages, structured content, dan measurement.', sections: ['Search intent', 'Content outline', 'Original evidence', 'Technical SEO', 'Measurement'], tools: ['Google Search Console', 'Google Analytics', 'Ahrefs'], prompt: 'Buat SEO dan GEO content brief untuk [NAMA PROYEK] pada topik [TOPIK]. Petakan search intent, pertanyaan user, outline people-first, sumber primer, pengalaman/data asli yang perlu ditambahkan, internal links, schema bila relevan, technical SEO checklist, dan metrik Search Console. Hindari klaim bahwa ada trik khusus untuk AI search.' },
  { group: 'Operations', phase: 'optimize', title: 'Postmortem & Product Health Review', code: 'OPS-004', description: 'Dampak, timeline, root cause, action, debt, product/ops metric, dan owner.', sections: ['Impact & timeline', 'Root cause', 'Actions', 'Product health', 'Debt & owner'], tools: ['Notion', 'Linear', 'Sentry'], prompt: 'Buat template postmortem dan product health review untuk [NAMA PROYEK]. Gunakan budaya no-blame; pisahkan penyebab sistem dari individu, tulis action owner/due date, lalu review adoption, error, latency, support volume, cost, dan technical debt.' }
];

export const toolsByPhase = {
  discovery: [
    { name: 'Notion', purpose: 'Problem brief, research synthesis, dan decision log.', href: 'https://www.notion.so/' },
    { name: 'Dovetail', purpose: 'Simpan dan sintesis evidence interview/research.', href: 'https://dovetail.com/' },
    { name: 'Miro', purpose: 'Workshop problem, process map, dan VPC.', href: 'https://miro.com/' }
  ],
  planning: [
    { name: 'Linear', purpose: 'Roadmap, initiative, project, milestone, dan issue delivery.', href: 'https://linear.app/plan' },
    { name: 'Notion', purpose: 'PRD, RACI, dan decision log yang mudah dibaca lintas peran.', href: 'https://www.notion.so/' },
    { name: 'Google Sheets', purpose: 'Capacity plan, metric tree, dan cost/ROI model.', href: 'https://workspace.google.com/products/sheets/' }
  ],
  design: [
    { name: 'Figma', purpose: 'User flow, prototype, design system, dan handoff.', href: 'https://www.figma.com/' },
    { name: 'Mermaid', purpose: 'Diagram yang dapat dipelihara bersama kode dan dokumentasi.', href: 'https://mermaid.js.org/' },
    { name: 'PostHog', purpose: 'Rencana event, product analytics, replay, flag, dan experiment.', href: 'https://posthog.com/product-analytics' }
  ],
  foundation: [
    { name: 'GitHub', purpose: 'Repository, review, CI/CD workflow, dan protected branch.', href: 'https://docs.github.com/en/actions/get-started/continuous-integration' },
    { name: 'Supabase', purpose: 'Postgres managed, auth, storage, dan environment untuk app awal.', href: 'https://supabase.com/' },
    { name: 'Vercel', purpose: 'Preview deployment dan hosting web app berbasis Git.', href: 'https://vercel.com/docs' }
  ],
  build: [
    { name: 'GitHub Actions', purpose: 'Otomasi build, test, lint, security check, dan deploy.', href: 'https://docs.github.com/en/actions/get-started/understand-github-actions' },
    { name: 'Postman / Bruno', purpose: 'Uji dan dokumentasikan API contract.', href: 'https://www.postman.com/' },
    { name: 'n8n', purpose: 'Integrasi workflow dan AI yang bisa di-host sendiri bila diperlukan.', href: 'https://docs.n8n.io/' }
  ],
  verify: [
    { name: 'Playwright', purpose: 'E2E browser test di Chromium, Firefox, WebKit, dan mobile emulation.', href: 'https://playwright.dev/docs/browsers' },
    { name: 'OWASP ASVS', purpose: 'Baseline requirement keamanan sesuai risiko aplikasi.', href: 'https://owasp.org/www-project-application-security-verification-standard/' },
    { name: 'Sentry', purpose: 'Error, tracing, performance, dan replay untuk verifikasi produksi.', href: 'https://sentry.io/' }
  ],
  launch: [
    { name: 'Google Search Console', purpose: 'Monitor indexing, discovery, query, dan technical search issue.', href: 'https://search.google.com/search-console/about' },
    { name: 'Google Analytics', purpose: 'Mengukur acquisition dan conversion pada website publik.', href: 'https://marketingplatform.google.com/about/analytics/' },
    { name: 'HubSpot', purpose: 'CRM, pipeline, form, dan handoff sales/marketing.', href: 'https://www.hubspot.com/' }
  ],
  operate: [
    { name: 'Sentry', purpose: 'Error monitoring, tracing, alert, dan session replay.', href: 'https://sentry.io/' },
    { name: 'PostHog', purpose: 'Analitik produk, session replay, feature flag, dan experiment.', href: 'https://posthog.com/product-analytics' },
    { name: 'Grafana', purpose: 'Dashboard metric, log, dan alert yang dapat dikustomisasi.', href: 'https://grafana.com/' }
  ],
  optimize: [
    { name: 'Linear', purpose: 'Decision, debt, initiative, dan follow-up dari review.', href: 'https://linear.app/' },
    { name: 'PostHog', purpose: 'Menghubungkan adoption/funnel dengan replay dan experiment.', href: 'https://posthog.com/product-analytics' },
    { name: 'Google Search Console', purpose: 'Meninjau performance organic dan peluang konten.', href: 'https://search.google.com/search-console/about' }
  ]
};

// Semua link di bawah dipilih sebagai rujukan belajar, bukan sebagai template yang harus
// diikuti mentah-mentah. Sesuaikan scope dengan tier risiko dan konteks proyek.
export const artifactReferences = {
  'BIZ-000': { learn: ['Atlassian Project Poster', 'https://www.atlassian.com/software/confluence/templates/project-poster'], visual: ['Atlassian Project Plan template', 'https://www.atlassian.com/software/confluence/templates/project-plan'] },
  'BIZ-001': { learn: ['Miro Problem Framing Canvas', 'https://miro.com/templates/problem-framing-canvas-1/'], visual: ['Miro Problem Framing visual template', 'https://miro.com/templates/problem-framing-canvas-1/'] },
  'BIZ-002': { learn: ['Miro Competitor Analysis template', 'https://miro.com/templates/competitor-analysis/'], visual: ['Miro Value Curve / Strategic Canvas', 'https://miro.com/templates/value-curve-or-strategic-canvas/'] },
  'BIZ-003': { learn: ['Atlassian Business Case template', 'https://www.atlassian.com/software/confluence/templates/business-case'], visual: ['Atlassian Cost Benefit Analysis template', 'https://www.atlassian.com/software/confluence/templates/cost-benefit-analysis'] },
  'GTM-001': { learn: ['Miro Value Proposition examples', 'https://miro.com/templates/value-proposition/'], visual: ['Strategyzer Value Proposition Canvas', 'https://www.strategyzer.com/canvas/value-proposition-canvas'] },
  'GTM-002': { learn: ['Strategyzer Business Model Canvas', 'https://www.strategyzer.com/canvas/business-model-canvas'], visual: ['Miro Business Model Canvas template', 'https://miro.com/templates/business-model-canvas/'] },
  'PRO-001': { learn: ['Productboard: Product Vision Board', 'https://www.productboard.com/glossary/product-vision-board/'], visual: ['Miro Product Vision Board template', 'https://miro.com/templates/product-vision-board/'] },
  'PRO-002': { learn: ['Amplitude: North Star metric guide', 'https://amplitude.com/blog/north-star-metric'], visual: ['Amplitude: North Star framework visual', 'https://amplitude.com/blog/north-star-metric'] },
  'PRO-003': { learn: ['Atlassian Product Roadmap template', 'https://www.atlassian.com/software/confluence/templates/product-roadmap'], visual: ['Linear product planning', 'https://linear.app/plan'] },
  'PRO-004': { learn: ['Atlassian PRD template', 'https://www.atlassian.com/software/confluence/templates/product-requirements'], visual: ['Atlassian PRD example preview', 'https://www.atlassian.com/agile/product-management/requirements'] },
  'PRO-005': { learn: ['Atlassian RACI template', 'https://www.atlassian.com/software/confluence/templates/raci-chart'], visual: ['Atlassian Stakeholder Map template', 'https://www.atlassian.com/software/confluence/templates/stakeholder-map'] },
  'DES-001': { learn: ['Miro User Flow template', 'https://miro.com/templates/user-flow/'], visual: ['Miro Service Blueprint template', 'https://miro.com/templates/service-blueprint/'] },
  'DES-002': { learn: ['W3C WCAG 2.2 Quick Reference', 'https://www.w3.org/WAI/WCAG22/quickref/'], visual: ['Miro Customer Journey Map template', 'https://miro.com/templates/customer-journey-map/'] },
  'DES-003': { learn: ['Azure Well-Architected Framework', 'https://learn.microsoft.com/en-us/azure/well-architected/'], visual: ['Google SRE Workbook', 'https://sre.google/workbook/'] },
  'ENG-001': { learn: ['Microsoft: Maintain an ADR', 'https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record'], visual: ['ADR GitHub template collection', 'https://adr.github.io/'] },
  'ENG-002': { learn: ['C4 model documentation', 'https://c4model.com/'], visual: ['C4 model diagrams', 'https://c4model.com/diagrams'] },
  'ENG-003': { learn: ['DBML language docs', 'https://dbml.dbdiagram.io/docs/'], visual: ['dbdiagram.io visual ERD editor', 'https://dbdiagram.io/home'] },
  'ENG-004': { learn: ['Google Cloud IAM best practices', 'https://cloud.google.com/iam/docs/using-iam-securely'], visual: ['AWS IAM policy examples', 'https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_examples.html'] },
  'ENG-005': { learn: ['OpenAPI Specification', 'https://swagger.io/specification/'], visual: ['Swagger Petstore OpenAPI example', 'https://petstore.swagger.io/'] },
  'QA-001': { learn: ['Playwright writing tests', 'https://playwright.dev/docs/writing-tests'], visual: ['Playwright test generator', 'https://playwright.dev/docs/codegen'] },
  'SEC-001': { learn: ['OWASP Threat Modeling Cheat Sheet', 'https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html'], visual: ['OWASP Threat Dragon', 'https://owasp.org/www-project-threat-dragon/'] },
  'AI-001': { learn: ['OpenAI: building agents guide', 'https://platform.openai.com/docs/guides/agents'], visual: ['LangChain agent architecture overview', 'https://python.langchain.com/docs/concepts/architecture/'] },
  'OPS-001': { learn: ['Production readiness review example', 'https://github.com/happysnaker/production-readiness-checklist'], visual: ['Google SRE Production Readiness Review', 'https://sre.google/workbook/production-meetings/'] },
  'OPS-002': { learn: ['Google SRE: Implementing SLOs', 'https://sre.google/workbook/implementing-slos/'], visual: ['Google SRE SLO resources', 'https://sre.google/resources/book-update/slos/'] },
  'OPS-003': { learn: ['Incident response runbook template', 'https://github.com/securitytemplates/sectemplates/blob/main/incident-response/v1/Incident_response_runbook.md'], visual: ['AWS restore testing example', 'https://aws.amazon.com/blogs/storage/implementing-restore-testing-for-recovery-validation-using-aws-backup/'] },
  'GTM-003': { learn: ['Atlassian Product Launch template', 'https://www.atlassian.com/software/confluence/templates/product-launch'], visual: ['HubSpot Go-to-Market strategy template', 'https://www.hubspot.com/resources/templates/go-to-market-strategy-template'] },
  'GTM-004': { learn: ['Google: create helpful, reliable content', 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content'], visual: ['Google Search appearance & structured data', 'https://developers.google.com/search/docs/appearance'] },
  'OPS-004': { learn: ['Google SRE Postmortem Culture', 'https://sre.google/sre-book/postmortem-culture/'], visual: ['Atlassian Postmortem template', 'https://www.atlassian.com/software/confluence/templates/postmortem'] }
};

export const checklist = [
  {
    phase: 'profile', id: 'CLS-001', critical: true, title: 'Buat Application Profile',
    question: 'Aplikasi ini internal, commercial product, service, atau eksperimen?',
    why: 'Checklist yang benar bergantung pada dampak aplikasi. Dashboard internal kecil tidak butuh proses yang sama dengan SaaS yang menyimpan data pelanggan.',
    evidence: 'Application Profile dengan jenis aplikasi, target user, data sensitif, integrasi, payment, AI, dan tier risiko.',
    solo: 'Isi satu halaman profile sebelum membuat repo atau prompt pertama.',
    team: 'Product owner dan tech lead menyepakati scope serta tier risiko.',
    tags: ['All'], template: 'Application Profile', status: 'done'
  },
  {
    phase: 'profile', id: 'CLS-002', critical: true, title: 'Tetapkan tier risiko & blast radius',
    question: 'Apa dampak bila aplikasi salah, down, atau data bocor?',
    why: 'Tier risiko menentukan seberapa ketat keamanan, approval, backup, dan release gate yang diperlukan.',
    evidence: 'Risk tier: experiment, internal, production standard, atau enterprise/regulated.',
    solo: 'Tandai minimal satu risiko terbesar dan rencana fallback manual.',
    team: 'Risk register disetujui product, engineering, dan security owner.',
    tags: ['All'], template: 'Risk Register'
  },
  {
    phase: 'profile', id: 'CLS-003', critical: false, title: 'Klasifikasikan data',
    question: 'Apakah aplikasi memproses PII, data finansial, credential, atau data operasional sensitif?',
    why: 'Data menentukan desain akses, logging, retention, vendor, dan incident response.',
    evidence: 'Data classification register: public, internal, confidential, restricted.',
    solo: 'Daftar semua data yang dikumpulkan dan jangan kumpulkan yang tidak diperlukan.',
    team: 'Data owner dan legal/security menyetujui klasifikasi serta retention.',
    tags: ['All'], template: 'Data Inventory'
  },
  {
    phase: 'discovery', id: 'BIZ-001', critical: true, title: 'Tuliskan problem statement',
    question: 'Masalah siapa yang diselesaikan, seberapa sering terjadi, dan apa dampaknya hari ini?',
    why: 'Teknologi tanpa masalah yang jelas hanya mempercepat pembangunan fitur yang tidak dipakai.',
    evidence: 'Satu kalimat problem statement dengan user, kondisi, pain, dan dampak.',
    solo: 'Wawancarai minimal tiga calon pengguna atau amati prosesnya langsung.',
    team: 'Research synthesis disetujui product owner.',
    tags: ['All'], template: 'Problem Brief', status: 'done'
  },
  {
    phase: 'discovery', id: 'BIZ-002', critical: true, title: 'Pilih jalur internal atau commercial',
    question: 'Nilai utama aplikasi adalah revenue eksternal atau efisiensi proses internal?',
    why: 'Produk commercial membutuhkan validasi pasar dan GTM. Produk internal membutuhkan process owner dan adoption plan.',
    evidence: 'Keputusan jalur produk beserta alasan dan metric bisnis.',
    solo: 'Tentukan satu jalur utama; jangan mencampur dua strategi tanpa owner.',
    team: 'Sponsor bisnis menyetujui tujuan dan investasi.',
    tags: ['All'], template: 'Business Case'
  },
  {
    phase: 'discovery', id: 'BIZ-003', critical: false, title: 'Lakukan market & competitor research',
    question: 'Siapa alternatif pengguna saat ini dan kenapa mereka pindah?',
    why: 'Produk yang dijual perlu memahami willingness-to-pay, positioning, dan diferensiasi sebelum biaya build membesar.',
    evidence: 'Market map, ICP, competitor table, dan research interview.',
    solo: 'Bandingkan minimal lima alternatif nyata yang dipakai target user.',
    team: 'Evidence dikaji oleh product, founder, sales, dan marketing.',
    tags: ['Commercial'], template: 'Market Research'
  },
  {
    phase: 'discovery', id: 'BIZ-004', critical: false, title: 'Petakan proses as-is dan to-be',
    question: 'Langkah manual mana yang menghabiskan waktu, rawan salah, atau tidak punya owner?',
    why: 'Untuk aplikasi internal, proses bisnis yang buruk tidak otomatis menjadi baik hanya karena didigitalisasi.',
    evidence: 'Swimlane as-is/to-be, volume kerja, bottleneck, dan manual fallback.',
    solo: 'Gambarkan proses memakai kotak-panah sebelum membuat fitur.',
    team: 'Process owner menyetujui proses to-be dan change impact.',
    tags: ['Internal'], template: 'Process Map'
  },
  {
    phase: 'discovery', id: 'BIZ-005', critical: true, title: 'Buat business case & ROI hypothesis',
    question: 'Apa biaya membangun/menjalankan dibanding nilai yang diharapkan?',
    why: 'Aplikasi production memiliki biaya berjalan: cloud, vendor, support, security, dan waktu tim.',
    evidence: 'Cost model, expected benefit, owner budget, dan keputusan go/no-go.',
    solo: 'Hitung kasar biaya bulanan dan nilai waktu yang dihemat.',
    team: 'Finance atau sponsor menyetujui budget dan threshold keberhasilan.',
    tags: ['All'], template: 'Business Case'
  },
  {
    phase: 'planning', id: 'PRO-001', critical: true, title: 'Tentukan product vision & outcome',
    question: 'Apa perubahan yang harus terjadi pada user atau bisnis bila produk berhasil?',
    why: 'Roadmap tanpa outcome berubah menjadi daftar fitur yang tidak memiliki prioritas.',
    evidence: 'Product Vision Board, target user, problem, vision, dan metric outcome.',
    solo: 'Tulis satu outcome utama untuk 90 hari pertama.',
    team: 'Vision disetujui sponsor, product owner, dan delivery lead.',
    tags: ['All'], template: 'Product Vision Board', status: 'done'
  },
  {
    phase: 'planning', id: 'PRO-002', critical: true, title: 'Tetapkan success metrics dan guardrail metrics',
    question: 'Bagaimana kita tahu produk berhasil tanpa merusak hal penting lain?',
    why: 'Metric mengubah “rasanya bagus” menjadi keputusan yang dapat diuji.',
    evidence: 'Metric tree: business outcome, product behavior, quality guardrail, dan owner.',
    solo: 'Pilih satu metric outcome dan dua guardrail seperti error rate/cost.',
    team: 'Analytics plan mengikat metric ke event dan dashboard.',
    tags: ['All'], template: 'Metrics Tree'
  },
  {
    phase: 'planning', id: 'PRO-003', critical: true, title: 'Buat roadmap berbasis outcome',
    question: 'Apa urutan kecil yang paling cepat mengurangi risiko atau membuktikan nilai?',
    why: 'Roadmap melindungi tim dari scope creep dan membantu stakeholder memahami trade-off.',
    evidence: 'Now/Next/Later roadmap, dependency, dan review cadence.',
    solo: 'Pecah pekerjaan menjadi milestone yang dapat didemokan.',
    team: 'Roadmap memiliki decision log dan stakeholder review.',
    tags: ['All'], template: 'Product Roadmap'
  },
  {
    phase: 'planning', id: 'PRO-004', critical: true, title: 'Tentukan ownership dan operating model',
    question: 'Siapa memutuskan scope, menerima risiko, merawat sistem, dan menjawab user?',
    why: 'Tidak ada aplikasi production tanpa owner setelah launch.',
    evidence: 'RACI, product owner, technical owner, support owner, dan escalation path.',
    solo: 'Tuliskan “kalau aplikasi rusak jam 2 pagi, saya melakukan apa?”',
    team: 'RACI tersedia dan disetujui setiap owner.',
    tags: ['All'], template: 'RACI'
  },
  {
    phase: 'design', id: 'DES-001', critical: true, title: 'Buat PRD dan BRD',
    question: 'Apa yang dibangun, untuk siapa, apa yang tidak dibangun, dan apa kriteria selesai?',
    why: 'AI mengisi celah requirement dengan tebakan. Dokumen ini mengurangi ambiguity sebelum kode dibuat.',
    evidence: 'PRD: scope/non-scope, user story, acceptance criteria, dependencies, dan risks.',
    solo: 'Buat PRD ringkas sebelum fitur lebih besar dari perubahan kecil.',
    team: 'PRD direview product, design, engineering, dan QA.',
    tags: ['All'], template: 'PRD'
  },
  {
    phase: 'design', id: 'DES-002', critical: false, title: 'Buat VPC dan BMC',
    question: 'Apakah value proposition, channel, revenue, dan cost structure masuk akal?',
    why: 'Commercial product perlu menguji model bisnis, bukan hanya fungsi aplikasi.',
    evidence: 'Value Proposition Canvas dan Business Model Canvas yang tervalidasi.',
    solo: 'Isi asumsi terbesar dan rencana validasinya.',
    team: 'Founder/product/marketing mereview perubahan model.',
    tags: ['Commercial'], template: 'VPC + BMC'
  },
  {
    phase: 'design', id: 'DES-003', critical: true, title: 'Rancang user journey dan interaction flow',
    question: 'Apa langkah user dari awal sampai berhasil, gagal, atau meminta bantuan?',
    why: 'Happy path tanpa failure path menghasilkan pengalaman yang terlihat bagus tetapi membingungkan saat nyata.',
    evidence: 'User flow, use case diagram, activity diagram, dan error/empty states.',
    solo: 'Gambar layar dan keputusan utama di kertas atau Figma.',
    team: 'Usability review dengan user representatif.',
    tags: ['All'], template: 'User Flow'
  },
  {
    phase: 'design', id: 'DES-004', critical: true, title: 'Definisikan non-functional requirements',
    question: 'Seberapa cepat, aman, tersedia, dapat diakses, dan murah aplikasi harus berjalan?',
    why: 'NFR adalah bagian yang biasanya hilang dari demo tetapi menentukan apakah aplikasi tahan dipakai.',
    evidence: 'NFR sheet: performance, availability, security, privacy, accessibility, recovery, scalability, cost.',
    solo: 'Tentukan minimum: target response, backup, user count, dan data sensitif.',
    team: 'NFR diterjemahkan ke test, monitoring, dan budget.',
    tags: ['All'], template: 'NFR Sheet'
  },
  {
    phase: 'foundation', id: 'ENG-001', critical: true, title: 'Pilih tech stack dengan ADR',
    question: 'Mengapa framework, database, hosting, dan vendor ini dipilih?',
    why: 'Stack yang dipilih karena hype sulit dirawat saat tim, biaya, atau skala berubah.',
    evidence: 'ADR berisi konteks, opsi, trade-off, keputusan, dan konsekuensi.',
    solo: 'Mulai sederhana: monolith + Postgres + managed hosting bila cukup.',
    team: 'Tech lead menyetujui ADR dan rencana perubahan.',
    tags: ['All'], template: 'ADR'
  },
  {
    phase: 'foundation', id: 'ENG-002', critical: true, title: 'Rancang arsitektur dan batas sistem',
    question: 'Komponen mana berbicara dengan apa, data tinggal di mana, dan kegagalan apa yang mungkin?',
    why: 'Diagram arsitektur membuat integrasi, biaya, security boundary, dan debugging dapat dibicarakan bersama.',
    evidence: 'C4/context diagram, data flow, dependency map, dan owner tiap service.',
    solo: 'Gambar kotak-panah: browser, app, DB, storage, third party, AI.',
    team: 'Architecture review mendokumentasikan risk dan decision.',
    tags: ['All'], template: 'Architecture Diagram'
  },
  {
    phase: 'foundation', id: 'ENG-003', critical: true, title: 'Rancang data model dan data dictionary',
    question: 'Apa source of truth tiap data, relasinya, dan siapa yang boleh mengubahnya?',
    why: 'Data yang berantakan membuat fitur, laporan, audit, dan AI di atasnya ikut rapuh.',
    evidence: 'ERD, schema migration plan, PII label, retention, dan data ownership.',
    solo: 'Buat ERD sebelum tabel dibuat acak di tengah development.',
    team: 'Data owner dan engineering menyetujui migration strategy.',
    tags: ['All'], template: 'ERD + Data Dictionary'
  },
  {
    phase: 'foundation', id: 'ENG-004', critical: true, title: 'Pisahkan environment dan secret',
    question: 'Apakah development, staging, dan production terpisah; dan apakah secret aman?',
    why: 'Eksperimen di production dan API key di repo adalah dua sumber insiden paling mudah dihindari.',
    evidence: 'Environment matrix, secret manager/.env policy, akses minimum, dan rotasi secret.',
    solo: 'Minimal: dev dan production berbeda, .env tidak masuk Git.',
    team: 'IAM dan secret access direview secara berkala.',
    tags: ['All'], template: 'Environment Matrix'
  },
  {
    phase: 'foundation', id: 'ENG-005', critical: true, title: 'Siapkan Git, branch policy, dan CI baseline',
    question: 'Bisakah perubahan dilacak, direview, dan dihentikan sebelum merusak user?',
    why: 'Version control dan CI adalah jaring pengaman paling dasar bagi solo developer maupun tim.',
    evidence: 'Repository, README, branch policy, lint/typecheck/test di CI.',
    solo: 'Gunakan Git sejak hari pertama dan commit perubahan kecil.',
    team: 'Pull request review dan protected branch diaktifkan.',
    tags: ['All'], template: 'Repository README'
  },
  {
    phase: 'foundation', id: 'AI-001', critical: false, title: 'Buat AI/Agent design document',
    question: 'Apa tugas AI, sumber data, tool, fallback, biaya, dan batas tindakannya?',
    why: 'Agent tanpa scope, permission, evaluation, dan human fallback mempercepat risiko.',
    evidence: 'AI design: model, prompt policy, tools, eval set, cost cap, approval, kill switch.',
    solo: 'Mulai dengan satu tool read-only dan jalur manusia.',
    team: 'AI owner, security, dan product menyetujui policy serta eval.',
    tags: ['AI'], template: 'AI Design Doc'
  },
  {
    phase: 'build', id: 'DEV-001', critical: true, title: 'Pecah PRD menjadi vertical slice',
    question: 'Apa potongan terkecil yang dapat dipakai dan membuktikan nilai dari ujung ke ujung?',
    why: 'Vertical slice mencegah tim membangun banyak lapisan teknis tanpa feedback user.',
    evidence: 'Story map, backlog berprioritas, Definition of Ready, dan acceptance criteria.',
    solo: 'Bangun satu alur lengkap sebelum menambah fitur baru.',
    team: 'Sprint/kanban memiliki WIP limit dan owner.',
    tags: ['All'], template: 'Story Map'
  },
  {
    phase: 'build', id: 'DEV-002', critical: true, title: 'Gunakan Definition of Done',
    question: 'Kapan sebuah fitur benar-benar selesai, bukan sekadar tampil di laptop developer?',
    why: 'Definition of Done memasukkan test, docs, accessibility, analytics, dan observability ke arti “selesai”.',
    evidence: 'DoD checklist di setiap feature/PR.',
    solo: 'Jangan tandai selesai sebelum alur utama dan error path diuji.',
    team: 'QA/product/engineering setuju pada DoD.',
    tags: ['All'], template: 'Definition of Done'
  },
  {
    phase: 'build', id: 'DEV-003', critical: true, title: 'Gunakan migration dan API contract',
    question: 'Apakah perubahan database dan integrasi dapat dilakukan tanpa merusak versi lama?',
    why: 'Schema dan API adalah kontrak. Mengubahnya sembarangan menyebabkan kegagalan lintas sistem.',
    evidence: 'Migration versioned, API spec, error schema, versioning, idempotency bila perlu.',
    solo: 'Jangan edit schema production manual tanpa migration file.',
    team: 'Contract diuji pada integration pipeline.',
    tags: ['All'], template: 'API Contract'
  },
  {
    phase: 'build', id: 'DEV-004', critical: false, title: 'Pasang feature flag untuk perubahan berisiko',
    question: 'Bisakah fitur dinyalakan bertahap dan dimatikan tanpa deploy baru?',
    why: 'Feature flag menurunkan blast radius dan mempercepat rollback produk.',
    evidence: 'Flag owner, target audience, expiry date, dan rollback behavior.',
    solo: 'Gunakan flag untuk perubahan yang menyentuh user/data penting.',
    team: 'Flag governance mencegah flag lama menjadi debt.',
    tags: ['Production', 'Enterprise'], template: 'Feature Flag Register'
  },
  {
    phase: 'verify', id: 'QA-001', critical: true, title: 'Jalankan test sesuai risiko',
    question: 'Bagian apa yang bisa rusak dan bagaimana kita membuktikannya sebelum user menemukannya?',
    why: 'Test bukan angka coverage; test adalah bukti perilaku yang paling berisiko tetap benar.',
    evidence: 'Test strategy dan hasil unit, integration, E2E, UAT, performance sesuai scope.',
    solo: 'Minimal uji alur utama, validation, error path, dan mobile browser.',
    team: 'Quality gate memblokir release bila test kritis gagal.',
    tags: ['All'], template: 'Test Plan'
  },
  {
    phase: 'verify', id: 'SEC-001', critical: true, title: 'Lakukan threat modeling dan security verification',
    question: 'Apa asset berharga, siapa penyerang, dan kontrol apa yang menghentikan mereka?',
    why: 'Security yang ditambahkan setelah release jauh lebih mahal dan sering tidak lengkap.',
    evidence: 'Threat model, dependency scan, auth/access review, security test, risk acceptance.',
    solo: 'Cek auth, role, input validation, secrets, dependency update, dan rate limit.',
    team: 'Gunakan baseline seperti OWASP ASVS sesuai tier risiko.',
    tags: ['All'], template: 'Threat Model'
  },
  {
    phase: 'verify', id: 'OPS-001', critical: true, title: 'Buktikan backup dan restore',
    question: 'Kapan terakhir backup dipulihkan ke environment aman dan hasilnya diverifikasi?',
    why: 'Backup yang tidak pernah diuji adalah asumsi, bukan recovery plan.',
    evidence: 'Backup policy, retention, bukti restore test, RPO/RTO.',
    solo: 'Aktifkan backup managed DB dan lakukan satu restore drill sebelum launch.',
    team: 'DR exercise berkala dengan owner dan postmortem.',
    tags: ['All'], template: 'Backup & Restore Runbook'
  },
  {
    phase: 'verify', id: 'AI-002', critical: false, title: 'Evaluate dan red-team AI/agent',
    question: 'Apakah agent teruji pada kasus normal, ambiguity, prompt injection, dan tindakan berisiko?',
    why: 'Agent yang “terlihat pintar” dapat gagal diam-diam pada kasus yang paling penting.',
    evidence: 'Eval dataset, pass threshold, trace, injection test, tool permission test, human fallback.',
    solo: 'Simpan 20 contoh nyata dan test ulang setiap prompt/tool berubah.',
    team: 'Release AI diblokir bila eval/security threshold tidak terpenuhi.',
    tags: ['AI'], template: 'AI Evaluation Sheet'
  },
  {
    phase: 'launch', id: 'GTM-001', critical: false, title: 'Tentukan positioning, ICP, dan message house',
    question: 'Untuk siapa produk ini, masalah apa yang diselesaikan, dan mengapa mereka memilihnya?',
    why: 'Marketing tanpa positioning menghasilkan pesan generik dan acquisition yang mahal.',
    evidence: 'ICP, positioning statement, messaging hierarchy, objection handling.',
    solo: 'Tulis satu kalimat “untuk siapa, hasil apa, mengapa berbeda”.',
    team: 'Sales, marketing, dan product menggunakan narasi yang sama.',
    tags: ['Commercial'], template: 'Messaging House'
  },
  {
    phase: 'launch', id: 'GTM-002', critical: false, title: 'Siapkan SEO dan content operating system',
    question: 'Apakah halaman dapat ditemukan, dipahami, dan membantu calon user mengambil keputusan?',
    why: 'SEO dimulai dari produk dan informasi yang berguna, bukan dari keyword stuffing saat launch.',
    evidence: 'Intent map, information architecture, Search Console, sitemap, analytics, content calendar.',
    solo: 'Buat halaman yang menjawab pertanyaan nyata calon user dengan jelas.',
    team: 'Owner konten, technical SEO, dan analytics review tersedia.',
    tags: ['Commercial', 'Public'], template: 'SEO Launch Checklist'
  },
  {
    phase: 'launch', id: 'GTM-003', critical: false, title: 'Siapkan GEO/AEO secara bertanggung jawab',
    question: 'Apakah konten memiliki pengalaman asli, sumber jelas, struktur baik, dan reputasi yang dapat dipercaya?',
    why: 'Generative search tetap membutuhkan konten people-first yang unik, crawlable, dan dapat diverifikasi.',
    evidence: 'Expert content, case study, source policy, entity consistency, image/video plan, measurement.',
    solo: 'Tulis dari pengalaman dan data asli; jangan membuat ratusan halaman generik dengan AI.',
    team: 'Editorial review, fact check, dan brand governance.',
    tags: ['Commercial', 'Public'], template: 'GEO Content Brief'
  },
  {
    phase: 'launch', id: 'ADP-001', critical: false, title: 'Siapkan change management dan adoption plan',
    question: 'Bagaimana user internal belajar, pindah proses, memberi feedback, dan mendapat bantuan?',
    why: 'Aplikasi internal gagal bukan karena code saja, tetapi karena proses dan kebiasaan tidak ikut berubah.',
    evidence: 'Training plan, champion list, comms plan, support channel, adoption metric.',
    solo: 'Tuliskan panduan 1 halaman dan jadwalkan observasi pengguna pertama.',
    team: 'Process owner memimpin rollout dan feedback loop.',
    tags: ['Internal'], template: 'Adoption Plan'
  },
  {
    phase: 'operate', id: 'REL-001', critical: true, title: 'Siapkan release plan, rollback, dan communication',
    question: 'Apa yang berubah, siapa terpengaruh, bagaimana rollback, dan siapa diberi tahu bila gagal?',
    why: 'Deploy tanpa rencana komunikasi menciptakan kebingungan bahkan ketika teknisnya berhasil.',
    evidence: 'Release checklist, migration plan, rollback plan, change log, support coverage.',
    solo: 'Deploy kecil dan punya cara balik ke versi sebelumnya.',
    team: 'Go/no-go owner dan incident channel ditentukan.',
    tags: ['All'], template: 'Release Plan'
  },
  {
    phase: 'operate', id: 'OPS-002', critical: true, title: 'Pasang observability sebelum launch',
    question: 'Dapatkah kita melihat error, latency, uptime, behavior user, dan biaya tanpa menunggu komplain?',
    why: 'Sistem tanpa observability hanya diketahui rusak setelah user terdampak.',
    evidence: 'Error tracking, structured logs, health check, dashboard, alert, product analytics.',
    solo: 'Minimal pasang error tracking, uptime check, dan log deploy.',
    team: 'SLO, alert ownership, dashboard, dan on-call/escalation route tersedia.',
    tags: ['All'], template: 'Observability Plan'
  },
  {
    phase: 'operate', id: 'OPS-003', critical: true, title: 'Buat support dan incident runbook',
    question: 'Siapa menangani masalah, bagaimana severity ditentukan, dan bagaimana komunikasi berlangsung?',
    why: 'Runbook mengubah kepanikan menjadi langkah yang dapat diulang dan dipelajari.',
    evidence: 'Severity matrix, support channel, on-call/owner, incident template, postmortem template.',
    solo: 'Tulis langkah triage: cek status, log, rollback, komunikasi, catatan kejadian.',
    team: 'Incident commander dan stakeholder notification ditetapkan.',
    tags: ['All'], template: 'Incident Runbook'
  },
  {
    phase: 'operate', id: 'OPS-004', critical: true, title: 'Kelola biaya produksi',
    question: 'Siapa melihat tagihan cloud, API, AI token, storage, dan lonjakan biaya?',
    why: 'Production yang sehat harus dapat bertahan secara ekonomi, bukan hanya berjalan teknis.',
    evidence: 'Budget, cost tags, alert threshold, monthly cost review, unit economics.',
    solo: 'Pasang budget alert sebelum user pertama masuk.',
    team: 'FinOps owner mereview variance dan capacity plan.',
    tags: ['All'], template: 'Cost Model'
  },
  {
    phase: 'optimize', id: 'OPT-001', critical: true, title: 'Jalankan product & operational review cadence',
    question: 'Apa yang dipakai, tidak dipakai, mahal, lambat, atau menimbulkan support burden?',
    why: 'Maintenance adalah proses belajar. Tanpanya, debt dan biaya tumbuh lebih cepat dari nilai produk.',
    evidence: 'Weekly/monthly review, metric dashboard, decision log, action owner.',
    solo: 'Jadwalkan review bulanan: user feedback, error, cost, backlog.',
    team: 'Product/engineering/ops review metric dan risiko bersama.',
    tags: ['All'], template: 'Product Health Review'
  },
  {
    phase: 'optimize', id: 'OPT-002', critical: false, title: 'Rencanakan scale, vendor risk, dan deprecation',
    question: 'Apa yang terjadi bila user naik 10×, vendor down, atau fitur harus dihentikan?',
    why: 'Scaling bukan hanya menambah server; ini mencakup orang, proses, biaya, data, dan komunikasi.',
    evidence: 'Capacity plan, vendor register, exit strategy, deprecation and retention plan.',
    solo: 'Kenali tiga dependency paling kritis dan cara kerjanya tanpa vendor.',
    team: 'Quarterly architecture and business continuity review.',
    tags: ['Production', 'Enterprise'], template: 'Scale & Exit Plan'
  },
  {
    phase: 'discovery', id: 'BIZ-006', critical: false, title: 'Identifikasi legal, compliance, dan procurement constraint',
    question: 'Apakah ada aturan kontrak, pajak, perlindungan data, atau vendor yang membatasi solusi?',
    why: 'Constraint yang diketahui setelah build dapat memaksa arsitektur dan proses bisnis diulang dari awal.',
    evidence: 'Compliance checklist, legal assumption, vendor/procurement requirement, dan risk owner.',
    solo: 'Catat semua aturan industri atau data yang mungkin berlaku sebelum memilih vendor.',
    team: 'Legal, finance, dan procurement memberi keputusan tertulis bila relevan.',
    tags: ['Production', 'Enterprise'], template: 'Compliance Intake'
  },
  {
    phase: 'planning', id: 'PRO-005', critical: true, title: 'Rencanakan kapasitas tim, timeline, dan dependency',
    question: 'Apakah komitmen roadmap sesuai kapasitas orang, skill, budget, dan dependency nyata?',
    why: 'Timeline yang hanya berbasis optimisme akan mengorbankan testing, dokumentasi, dan operasi di akhir.',
    evidence: 'Delivery plan, capacity assumption, dependency map, risk/decision log, dan milestone review.',
    solo: 'Sisihkan waktu khusus untuk test, deploy, dokumentasi, dan support—bukan hanya coding.',
    team: 'Delivery lead mengelola dependency dan mengeskalasi blocker.',
    tags: ['All'], template: 'Delivery Plan'
  },
  {
    phase: 'planning', id: 'PRO-006', critical: true, title: 'Tetapkan buy vs build decision',
    question: 'Apakah kemampuan ini harus dibangun, dibeli, atau diintegrasikan?',
    why: 'Membangun fitur commodity sendiri menambah biaya maintenance tanpa selalu menambah keunggulan bisnis.',
    evidence: 'Option comparison: cost, time, security, vendor lock-in, capability, dan exit plan.',
    solo: 'Bandingkan setidaknya satu layanan yang sudah ada sebelum membuat dari nol.',
    team: 'Business dan engineering menyetujui konsekuensi biaya dan vendor.',
    tags: ['All'], template: 'Build vs Buy Matrix'
  },
  {
    phase: 'design', id: 'DES-005', critical: true, title: 'Rancang accessibility, content, dan empty/error states',
    question: 'Dapatkah user memahami, menyelesaikan, dan pulih dari error pada perangkat atau kemampuan yang berbeda?',
    why: 'UI yang hanya dirancang untuk happy path desktop membuat support burden dan conversion drop naik.',
    evidence: 'Wireframe, content guideline, responsive state, keyboard flow, contrast, empty/error/loading state.',
    solo: 'Uji form dengan keyboard, layar kecil, data kosong, dan pesan error yang jelas.',
    team: 'Design review memasukkan accessibility dan content owner.',
    tags: ['All'], template: 'UX Quality Checklist'
  },
  {
    phase: 'design', id: 'DES-006', critical: true, title: 'Rancang analytics & event taxonomy',
    question: 'Event apa yang menjawab metric produk, dan data apa yang tidak boleh dikumpulkan?',
    why: 'Analytics yang dipasang setelah launch sering tidak punya baseline dan tidak dapat menjawab alasan user gagal.',
    evidence: 'Event dictionary, metric mapping, privacy review, dashboard owner, dan retention policy.',
    solo: 'Pasang event untuk activation, conversion, error, dan funnel utama.',
    team: 'Product, analytics, dan privacy owner menyetujui taxonomy.',
    tags: ['All'], template: 'Analytics Tracking Plan'
  },
  {
    phase: 'foundation', id: 'ENG-006', critical: false, title: 'Versikan infrastructure dan configuration',
    question: 'Bisakah environment dibuat ulang secara konsisten tanpa setup manual yang tidak terdokumentasi?',
    why: 'Infrastructure as Code menurunkan configuration drift dan membuat recovery serta review perubahan lebih aman.',
    evidence: 'IaC/config repository, review process, environment variables matrix, dan deployment record.',
    solo: 'Dokumentasikan setiap setup server dan jangan bergantung pada ingatan.',
    team: 'Infrastructure change melalui review, audit log, dan access control.',
    tags: ['Production', 'Enterprise'], template: 'Infrastructure Runbook'
  },
  {
    phase: 'foundation', id: 'ENG-007', critical: true, title: 'Definisikan authentication, authorization, dan audit trail',
    question: 'Siapa boleh melakukan tindakan apa, pada data milik siapa, dan bagaimana aktivitasnya dapat ditelusuri?',
    why: 'Login saja tidak cukup. Production system membutuhkan role, boundary, dan catatan tindakan sensitif.',
    evidence: 'Role-permission matrix, auth flow, session policy, audit event list, dan access review cadence.',
    solo: 'Buat role minimum dan jangan mengandalkan hidden button sebagai keamanan.',
    team: 'Security dan product owner menyetujui role serta privileged access.',
    tags: ['All'], template: 'Access Control Matrix'
  },
  {
    phase: 'build', id: 'DEV-005', critical: true, title: 'Lakukan code review dan secure coding review',
    question: 'Apakah perubahan penting dibaca ulang untuk correctness, security, maintainability, dan impact?',
    why: 'AI dan manusia sama-sama dapat menghasilkan code yang jalan tetapi menyimpan bug, leak, atau debt.',
    evidence: 'Pull request, review comments, automated lint/typecheck, security scan, dan approval.',
    solo: 'Baca diff sendiri setelah jeda, jalankan test, dan minta AI menjelaskan trade-off code.',
    team: 'Protected branch dan minimal reviewer diterapkan pada perubahan berisiko.',
    tags: ['All'], template: 'Code Review Checklist'
  },
  {
    phase: 'build', id: 'DEV-006', critical: true, title: 'Dokumentasikan cara menjalankan dan mengubah sistem',
    question: 'Bisakah orang lain menjalankan proyek, deploy, dan memahami keputusan utama tanpa bertanya pada pembuatnya?',
    why: 'Bus factor satu orang membuat sistem bukan aset; dokumentasi adalah insurance yang paling murah.',
    evidence: 'README, local setup, architecture link, command list, environment doc, dan troubleshooting.',
    solo: 'Lakukan tes “saya kembali enam bulan lagi” dengan mengikuti README dari nol.',
    team: 'Dokumentasi menjadi bagian dari Definition of Done.',
    tags: ['All'], template: 'Project README'
  },
  {
    phase: 'verify', id: 'QA-002', critical: false, title: 'Uji performance, load, dan failure behavior',
    question: 'Apa yang terjadi saat traffic naik, third party lambat, atau request gagal berulang?',
    why: 'Aplikasi sering gagal pada kondisi yang tidak muncul di laptop developer: concurrency, timeout, dan dependency outage.',
    evidence: 'Performance budget, load test, timeout/retry behavior, capacity assumption, dan findings.',
    solo: 'Uji input besar, jaringan lambat, dan dependency yang tidak merespons.',
    team: 'SRE/engineering menyetujui capacity dan reliability target.',
    tags: ['Production', 'Enterprise'], template: 'Performance Test Plan'
  },
  {
    phase: 'verify', id: 'QA-003', critical: true, title: 'Lakukan UAT dan release acceptance',
    question: 'Apakah user/process owner mengonfirmasi alur nyata, bukan hanya developer yang mengatakan selesai?',
    why: 'UAT menangkap gap proses, bahasa, dan permission yang sering tidak terlihat di test teknis.',
    evidence: 'UAT scenario, sign-off, known issue register, dan go/no-go decision.',
    solo: 'Minta satu calon user menjalankan alur tanpa dibantu dan catat kebingungannya.',
    team: 'Product owner dan process owner memberi acceptance tertulis.',
    tags: ['All'], template: 'UAT Script'
  },
  {
    phase: 'launch', id: 'GTM-004', critical: false, title: 'Siapkan pricing, packaging, sales enablement, dan onboarding',
    question: 'Apakah calon customer memahami apa yang dibeli, berapa harganya, dan bagaimana mulai mendapat nilai?',
    why: 'Produk bagus tetap sulit tumbuh jika sales, pricing, onboarding, dan support tidak dapat menjelaskan nilainya.',
    evidence: 'Pricing page, package matrix, demo script, onboarding flow, FAQ, dan sales collateral.',
    solo: 'Buat satu demo singkat dan onboarding yang membuat user mendapat nilai pertama dengan cepat.',
    team: 'Sales, marketing, CS, dan product melakukan launch rehearsal.',
    tags: ['Commercial'], template: 'GTM Launch Pack'
  },
  {
    phase: 'launch', id: 'GTM-005', critical: false, title: 'Siapkan legal page dan consent flow',
    question: 'Apakah user mengetahui terms, privacy, consent, dan cara meminta bantuan atau menghapus data?',
    why: 'Kepercayaan dan compliance harus terlihat dalam pengalaman user, bukan hanya ada di folder legal.',
    evidence: 'Terms, privacy notice, cookie/consent policy bila relevan, dan data subject request process.',
    solo: 'Gunakan bahasa jelas mengenai data yang dikumpulkan dan tujuan penggunaannya.',
    team: 'Legal dan privacy owner menyetujui publikasi.',
    tags: ['Commercial', 'Public', 'Enterprise'], template: 'Privacy Notice'
  },
  {
    phase: 'operate', id: 'OPS-005', critical: true, title: 'Definisikan SLI, SLO, dan alert ownership',
    question: 'Seberapa andal sistem harus berjalan dan siapa bereaksi saat ambang kesehatan terlewati?',
    why: 'Uptime tanpa target dan owner hanya menjadi angka; SLO mengubah reliability menjadi keputusan bisnis.',
    evidence: 'SLI/SLO, alert threshold, routing, dashboard, dan review error budget.',
    solo: 'Tentukan target sederhana: uptime, response time, error rate, dan siapa yang menerima alert.',
    team: 'On-call/escalation dan reliability review berjalan berkala.',
    tags: ['Production', 'Enterprise'], template: 'SLO Definition'
  },
  {
    phase: 'operate', id: 'OPS-006', critical: true, title: 'Kelola patch, dependency, dan access review',
    question: 'Bagaimana celah dependency, user lama, token, dan hak akses ditemukan serta ditutup?',
    why: 'Production security memburuk dari waktu ke waktu bila patch dan access tidak memiliki ritme operasi.',
    evidence: 'Patch policy, dependency alert, access review log, secret rotation, dan vulnerability SLA.',
    solo: 'Aktifkan dependency alert dan jadwalkan review akses/secret bulanan.',
    team: 'Security owner melacak remediation dan exception.',
    tags: ['All'], template: 'Security Operations Checklist'
  },
  {
    phase: 'optimize', id: 'OPT-003', critical: true, title: 'Kelola technical debt dan postmortem',
    question: 'Apakah masalah berulang diterjemahkan menjadi perbaikan sistem, bukan hanya pemadam kebakaran?',
    why: 'Debt yang tidak terlihat mengurangi kecepatan, keamanan, dan kemampuan tim menjaga produk.',
    evidence: 'Debt register, postmortem tanpa menyalahkan orang, action item, owner, dan due date.',
    solo: 'Setelah bug besar, tulis penyebab, dampak, fix, dan pencegahan dalam satu halaman.',
    team: 'Action item postmortem dibahas dalam planning cadence.',
    tags: ['All'], template: 'Postmortem'
  }
];
