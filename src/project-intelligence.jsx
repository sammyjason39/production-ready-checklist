function formatDate(value) {
  if (!value) return '—';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? '—' : new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium', timeStyle: 'short' }).format(date);
}

function Metric({ label, value, detail }) {
  return <article className="intelligence-metric"><strong>{value ?? '—'}</strong><span>{label}</span>{detail && <small>{detail}</small>}</article>;
}

export function ProjectIntelligence({ insight }) {
  if (!insight?.project) return <section className="project-intelligence empty-intelligence"><div><span className="eyebrow">AGENT PROJECT INTELLIGENCE</span><h2>Belum ada ringkasan repository</h2><p>Jalankan scanner lokal lalu import <code>audit.json</code>. Dashboard akan menampilkan overview, teknologi yang ditemukan, statistik Git, indikator progress evidence, dan rangkuman agent.</p></div><code>npm run scan -- --root /path/ke/repository</code></section>;
  const project = insight.project;
  const metrics = project.repositoryMetrics || {};
  const progress = project.implementationProgress || {};
  const summary = insight.agentSummary;
  const planProgress = summary?.implementationProgress;
  const languages = Object.entries(metrics.languages || {}).sort((a, b) => b[1] - a[1]);
  return <section className="project-intelligence">
    <header><div><span className="eyebrow orange">AGENT PROJECT INTELLIGENCE</span><h2>{project.title || 'Repository summary'}</h2><p>{summary?.overview || project.overview}</p></div><small>Scan terakhir<br /><b>{formatDate(insight.generatedAt)}</b></small></header>
    <div className="intelligence-metrics">
      <Metric label="commit terdeteksi" value={metrics.commitCount} detail={metrics.branch ? `branch: ${metrics.branch}` : ''} />
      <Metric label="source file dipindai" value={metrics.sourceFiles} detail={`${metrics.testFiles || 0} file test`} />
      <Metric label={planProgress ? 'progress rencana implementasi' : 'progress evidence code'} value={`${planProgress?.percent ?? progress.percent ?? 0}%`} detail={planProgress?.basis || progress.note || `${progress.evidencedItems || 0}/${progress.totalChecks || 0} checks`} />
      <Metric label="dokumen eksternal" value={insight.repository?.externalDocumentsScanned ?? '—'} detail="dari index/MCP yang diimpor" />
    </div>
    <div className="intelligence-grid">
      <article><span>REPOSITORY SNAPSHOT</span><p><b>{metrics.lastCommit?.shortSha || '—'}</b> {metrics.lastCommit?.message || 'Belum ada metadata Git yang dapat dibaca.'}</p><small>{metrics.lastCommit?.committedAt ? `Commit terakhir: ${formatDate(metrics.lastCommit.committedAt)}` : 'Jalankan scanner di repository Git untuk commit metadata.'}</small><div className="language-tags">{languages.map(([language, count]) => <i key={language}>{language} · {count}</i>)}{!languages.length && <i>Language belum terdeteksi</i>}</div></article>
      <article><span>YANG TERDETEKSI</span><ul>{(project.detected || []).slice(0, 8).map(item => <li key={item}>{item}</li>)}{!(project.detected || []).length && <li>Belum ada metadata yang cukup.</li>}</ul></article>
      <article><span>RINGKASAN AGENT</span>{summary?.currentFocus && <p><b>Fokus:</b> {summary.currentFocus}</p>}{summary?.capabilities?.length ? <div className="summary-list"><b>Kemampuan / scope</b>{summary.capabilities.map(item => <small key={item}>• {item}</small>)}</div> : <p>Tambahkan <code>.production-ready/agent-summary.json</code> agar agent dapat memberi ringkasan scope, fokus, dan risiko dari sumber yang diizinkan.</p>}{planProgress?.completed?.length ? <div className="summary-list"><b>Scope selesai menurut agent</b>{planProgress.completed.map(item => <small key={item}>• {item}</small>)}</div> : null}{planProgress?.remaining?.length ? <div className="summary-list risks"><b>Sisa scope</b>{planProgress.remaining.map(item => <small key={item}>• {item}</small>)}</div> : summary?.risks?.length ? <div className="summary-list risks"><b>Risiko yang perlu ditinjau</b>{summary.risks.map(item => <small key={item}>• {item}</small>)}</div> : null}{summary?.sources?.length ? <div className="summary-list sources"><b>Sumber ringkasan</b>{summary.sources.map(item => <small key={item}>• {item}</small>)}</div> : null}</article>
    </div>
    <footer>{planProgress ? 'Persentase rencana implementasi adalah estimasi agent berdasarkan basis yang ditulis di atas; tech lead perlu meninjau sebelum dipakai untuk keputusan delivery.' : 'Progress evidence menunjukkan seberapa banyak area rencana yang memiliki kandidat bukti dari repository/dokumen. Ini bukan persentase effort dan tidak menggantikan review owner.'}</footer>
  </section>;
}
