#!/usr/bin/env node
/*
 * Dependency-free evidence scanner. It deliberately finds candidates and never
 * marks a checklist item as complete; a human or agent must review the evidence.
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { resolve, relative, join, basename } from 'node:path';
import { execFileSync } from 'node:child_process';

const ignored = new Set(['.git', 'node_modules', 'dist', 'build', '.next', '.cache', 'coverage', 'vendor']);
const textExtensions = new Set(['.md', '.mdx', '.txt', '.rst', '.json', '.yaml', '.yml', '.toml', '.js', '.mjs', '.cjs', '.ts', '.tsx', '.jsx', '.py', '.go', '.java', '.rb', '.php', '.sql', '.html']);
const rules = [
  ['CLS-001', 'Application Profile', /application[-_ ]?profile|project[-_ ]?(brief|charter)|product[-_ ]?overview/i],
  ['CLS-002', 'Risk tier / risk register', /risk[-_ ]?(register|assessment|matrix)|blast[-_ ]?radius/i],
  ['CLS-003', 'Data classification', /data[-_ ]?(classification|inventory|retention)|pii|personal data/i],
  ['BIZ-001', 'Problem Brief', /problem[-_ ]?(brief|statement)|discovery|customer[-_ ]?research/i],
  ['BIZ-003', 'Market research / ICP', /market[-_ ]?research|competitor|competitive[-_ ]?analysis|\bicp\b/i],
  ['BIZ-005', 'Business case / ROI', /business[-_ ]?case|\broi\b|cost[-_ ]?model|unit[-_ ]?economics/i],
  ['PRO-001', 'Product Vision Board', /product[-_ ]?vision|vision[-_ ]?board|north[-_ ]?star/i],
  ['PRO-002', 'Metrics tree / analytics plan', /metrics?[-_ ]?(tree|plan)|event[-_ ]?(taxonomy|dictionary)|analytics[-_ ]?plan/i],
  ['PRO-003', 'Product roadmap', /roadmap|now[-_ ]?next[-_ ]?later|milestone/i],
  ['PRO-004', 'RACI / ownership', /\braci\b|stakeholder|responsible|accountable/i],
  ['PRO-005', 'Delivery plan', /delivery[-_ ]?plan|capacity[-_ ]?plan|dependency[-_ ]?map/i],
  ['DES-001', 'PRD / BRD', /\bprd\b|product[-_ ]?requirements?|business[-_ ]?requirements?|acceptance[-_ ]?criteria/i],
  ['DES-003', 'User flow / process map', /user[-_ ]?flow|use[-_ ]?case|activity[-_ ]?diagram|service[-_ ]?blueprint/i],
  ['DES-004', 'Non-functional requirements', /non[-_ ]?functional|\bnfr\b|performance[-_ ]?budget|availability/i],
  ['DES-006', 'Analytics tracking plan', /tracking[-_ ]?plan|event[-_ ]?dictionary|analytics[-_ ]?taxonomy/i],
  ['ENG-001', 'Architecture Decision Record', /\badr\b|architecture[-_ ]?decision|decision[-_ ]?record/i],
  ['ENG-002', 'Architecture diagram', /architecture|\bc4\b|system[-_ ]?context|container[-_ ]?diagram/i],
  ['ENG-003', 'ERD / data dictionary', /\berd\b|data[-_ ]?dictionary|dbml|schema[-_ ]?design/i],
  ['ENG-004', 'Environment / secret policy', /environment[-_ ]?(matrix|policy)|secret[-_ ]?(management|rotation)|\.env/i],
  ['ENG-005', 'Repository / CI baseline', /github[-_ ]?actions|\bci\b|pull[-_ ]?request|branch[-_ ]?protection/i],
  ['ENG-007', 'Access control matrix', /access[-_ ]?control|authorization|permission[-_ ]?matrix|rbac/i],
  ['AI-001', 'AI / agent design', /ai[-_ ]?(agent|design)|system[-_ ]?prompt|prompt[-_ ]?policy|tool[-_ ]?permission/i],
  ['DEV-001', 'Story map / vertical slice', /story[-_ ]?map|vertical[-_ ]?slice|backlog/i],
  ['DEV-002', 'Definition of Done', /definition[-_ ]?of[-_ ]?done|\bdod\b/i],
  ['DEV-003', 'API contract / migrations', /openapi|swagger|api[-_ ]?contract|migration/i],
  ['DEV-005', 'Code review policy', /code[-_ ]?review|review[-_ ]?checklist|protected[-_ ]?branch/i],
  ['DEV-006', 'Local setup documentation', /getting[-_ ]?started|local[-_ ]?setup|development[-_ ]?setup|installation/i],
  ['QA-001', 'Test plan', /test[-_ ]?(plan|strategy)|e2e|integration[-_ ]?test|unit[-_ ]?test/i],
  ['QA-003', 'UAT', /\buat\b|user[-_ ]?acceptance|release[-_ ]?acceptance/i],
  ['SEC-001', 'Threat model', /threat[-_ ]?model|\bstride\b|security[-_ ]?assessment/i],
  ['OPS-001', 'Backup and restore', /backup|restore[-_ ]?test|\brpo\b|\brto\b/i],
  ['REL-001', 'Release plan', /release[-_ ]?plan|rollback|go[-_ ]?no[-_ ]?go/i],
  ['OPS-002', 'Observability plan', /observability|monitoring|error[-_ ]?tracking|health[-_ ]?check/i],
  ['OPS-003', 'Incident runbook', /incident[-_ ]?(runbook|response)|severity[-_ ]?matrix|postmortem/i],
  ['OPS-004', 'Cost model', /cost[-_ ]?(model|budget|alert)|finops/i],
  ['OPS-005', 'SLO definition', /\bslo\b|\bsli\b|error[-_ ]?budget/i],
  ['OPS-006', 'Security operations', /dependency[-_ ]?(scan|update)|patch[-_ ]?policy|access[-_ ]?review/i],
  ['GTM-001', 'Positioning / ICP', /positioning|message[-_ ]?house|\bicp\b/i],
  ['GTM-002', 'SEO launch', /\bseo\b|search[-_ ]?console|sitemap|robots\.txt/i],
  ['GTM-003', 'GEO content', /\bgeo\b|generative[-_ ]?search|helpful[-_ ]?content/i],
  ['ADP-001', 'Adoption plan', /adoption[-_ ]?plan|training[-_ ]?plan|change[-_ ]?management/i],
  ['OPT-001', 'Product health review', /product[-_ ]?health|operational[-_ ]?review|monthly[-_ ]?review/i],
  ['OPT-003', 'Postmortem / technical debt', /postmortem|technical[-_ ]?debt|debt[-_ ]?register/i]
];

function arg(name, fallback) { const index = process.argv.indexOf(name); return index >= 0 ? process.argv[index + 1] : fallback; }
const root = resolve(arg('--root', process.cwd()));
const output = resolve(arg('--output', join(root, '.production-ready', 'audit.json')));
const sourcesPath = resolve(arg('--sources', join(root, '.production-ready', 'sources.json')));
const documentsPath = resolve(arg('--documents', join(root, '.production-ready', 'documents.json')));
const agentSummaryPath = resolve(arg('--agent-summary', join(root, '.production-ready', 'agent-summary.json')));

function walk(directory, files = []) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (ignored.has(entry.name) || entry.name.startsWith('.production-ready')) continue;
    const full = join(directory, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.isFile() && textExtensions.has(entry.name.slice(entry.name.lastIndexOf('.')).toLowerCase())) files.push(full);
  }
  return files;
}
function readText(file) { try { return readFileSync(file, 'utf8').slice(0, 250000); } catch { return ''; } }
function makeEvidence(label, path, content, sourceType = 'repository', url = '') {
  const compact = content.replace(/\s+/g, ' ');
  return { label, type: sourceType, path, url, snippet: compact.slice(0, 280) };
}
function readSources() {
  if (!existsSync(sourcesPath)) return [];
  try { const parsed = JSON.parse(readFileSync(sourcesPath, 'utf8')); return Array.isArray(parsed.documents) ? parsed.documents : []; } catch { return []; }
}
function readDocumentIndex() {
  if (!existsSync(documentsPath)) return [];
  try {
    const parsed = JSON.parse(readFileSync(documentsPath, 'utf8'));
    if (!Array.isArray(parsed.documents)) return [];
    return parsed.documents.map(document => ({
      title: document.title || document.location?.path || document.location?.url || 'Document index entry',
      url: document.location?.url || '',
      tags: [document.checklistId, document.artifactCode, document.type, ...(document.tags || [])].filter(Boolean),
      summary: document.summary || document.title || ''
    }));
  } catch { return []; }
}
function git(args) { try { return execFileSync('git', ['-C', root, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim(); } catch { return ''; } }
function firstMeaningfulText(markdown = '') {
  return markdown.split(/\r?\n/).filter(line => !/^#{1,6}\s+/.test(line)).map(line => line.replace(/[`*_>[\]]/g, '').trim()).find(line => line.length > 30 && !line.startsWith('!')) || '';
}
function readPackage() { try { return JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')); } catch { return {}; } }
function readAgentSummary() {
  if (!existsSync(agentSummaryPath)) return null;
  try {
    const value = JSON.parse(readFileSync(agentSummaryPath, 'utf8'));
    if (!value || typeof value !== 'object') return null;
    return {
      overview: String(value.overview || '').slice(0, 1200),
      capabilities: Array.isArray(value.capabilities) ? value.capabilities.map(item => String(item).slice(0, 160)).slice(0, 12) : [],
      currentFocus: String(value.currentFocus || '').slice(0, 500),
      risks: Array.isArray(value.risks) ? value.risks.map(item => String(item).slice(0, 240)).slice(0, 8) : [],
      implementationProgress: value.implementationProgress && typeof value.implementationProgress === 'object' ? {
        percent: Math.max(0, Math.min(100, Number(value.implementationProgress.percent) || 0)),
        basis: String(value.implementationProgress.basis || '').slice(0, 500),
        completed: Array.isArray(value.implementationProgress.completed) ? value.implementationProgress.completed.map(item => String(item).slice(0, 160)).slice(0, 10) : [],
        remaining: Array.isArray(value.implementationProgress.remaining) ? value.implementationProgress.remaining.map(item => String(item).slice(0, 160)).slice(0, 10) : []
      } : null,
      sources: Array.isArray(value.sources) ? value.sources.map(item => String(item).slice(0, 240)).slice(0, 12) : []
    };
  } catch { return null; }
}

if (!existsSync(root)) throw new Error(`Repository root tidak ditemukan: ${root}`);
const files = walk(root).slice(0, 2000).map(file => ({ path: relative(root, file), content: readText(file) }));
const sources = [...readSources(), ...readDocumentIndex()];
const findings = rules.map(([checklistId, title, pattern]) => {
  const evidence = [];
  for (const file of files) {
    if (pattern.test(`${file.path}\n${file.content}`)) evidence.push(makeEvidence(title, file.path, file.content));
    if (evidence.length >= 4) break;
  }
  for (const source of sources) {
    if (evidence.length >= 4) break;
    const haystack = `${source.title || ''}\n${source.content || ''}\n${(source.tags || []).join(' ')}`;
    if (pattern.test(haystack)) evidence.push(makeEvidence(title, source.title || source.url || 'MCP source', source.content || source.summary || source.title || '', 'external', source.url || ''));
  }
  return { checklistId, title, status: evidence.length ? 'candidate_evidence' : 'missing', confidence: evidence.length ? Math.min(.9, .45 + evidence.length * .12) : 0, evidence, recommendation: evidence.length ? 'Review evidence; ubah menjadi selesai hanya setelah owner menyetujui.' : `Minta agent membuat atau menemukan ${title}, lalu jalankan scan ulang.` };
});
const packageJson = readPackage();
const readme = files.find(file => /^readme\.md$/i.test(basename(file.path)))?.content || '';
const languageCounts = files.reduce((counts, file) => { const extension = file.path.split('.').pop()?.toLowerCase(); const name = ({ ts: 'TypeScript', tsx: 'TypeScript', js: 'JavaScript', jsx: 'JavaScript', mjs: 'JavaScript', cjs: 'JavaScript', py: 'Python', go: 'Go', java: 'Java', rb: 'Ruby', php: 'PHP', sql: 'SQL' })[extension]; if (name) counts[name] = (counts[name] || 0) + 1; return counts; }, {});
const candidateEvidence = findings.filter(finding => finding.evidence.length).length;
const codeFiles = files.filter(file => /\.(?:[cm]?[jt]sx?|py|go|java|rb|php|sql)$/i.test(file.path));
const testFiles = codeFiles.filter(file => /(?:^|[./_-])(test|spec|__tests__)(?:[./_-]|$)|\.(?:test|spec)\./i.test(file.path));
const branch = git(['branch', '--show-current']) || 'unknown';
const commitCount = Number(git(['rev-list', '--count', 'HEAD'])) || 0;
const lastCommit = git(['log', '-1', '--format=%H%x1f%h%x1f%s%x1f%cI']).split('\x1f');
const detected = [
  ...(packageJson.name ? [`package: ${packageJson.name}`] : []),
  ...Object.entries(languageCounts).sort((a, b) => b[1] - a[1]).slice(0, 4).map(([language, count]) => `${language} (${count} file)`),
  ...(testFiles.length ? [`${testFiles.length} test file`] : []),
  ...(existsSync(join(root, '.github', 'workflows')) ? ['CI workflow directory'] : [])
];
const project = {
  title: packageJson.name || basename(root),
  overview: packageJson.description || firstMeaningfulText(readme) || 'Ringkasan belum ditemukan; tambahkan description pada package.json atau README.',
  detected,
  repositoryMetrics: {
    filesScanned: files.length,
    sourceFiles: codeFiles.length,
    testFiles: testFiles.length,
    languages: languageCounts,
    branch,
    commitCount,
    lastCommit: lastCommit[0] ? { sha: lastCommit[0], shortSha: lastCommit[1], message: lastCommit[2], committedAt: lastCommit[3] } : null
  },
  implementationProgress: {
    percent: findings.length ? Math.round(candidateEvidence / findings.length * 100) : 0,
    evidencedItems: candidateEvidence,
    totalChecks: findings.length,
    note: 'Indikator evidence yang ditemukan scanner; bukan estimasi effort atau persetujuan production.'
  }
};
const report = { schemaVersion: '1.1', generatedAt: new Date().toISOString(), repository: { root, filesScanned: files.length, externalDocumentsScanned: sources.length }, project, agentSummary: readAgentSummary(), summary: { candidateEvidence, missing: findings.filter(f => !f.evidence.length).length }, findings };
mkdirSync(resolve(output, '..'), { recursive: true });
writeFileSync(output, `${JSON.stringify(report, null, 2)}\n`);
console.log(`Production readiness scan selesai: ${report.summary.candidateEvidence} candidate evidence, ${report.summary.missing} gap.`);
console.log(`Report: ${output}`);
