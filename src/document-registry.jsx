import { useEffect, useRef, useState } from 'react';
import DOMPurify from 'dompurify';
import { marked } from 'marked';

const label = { markdown: 'MD', pdf: 'PDF', docx: 'DOCX', link: 'LINK' };

export function DocumentRegistry() {
  const [documents, setDocuments] = useState(() => window.productionReadyLocal?.documents || []);
  const [root, setRoot] = useState(null);
  const [viewer, setViewer] = useState(null);
  const input = useRef(null);

  useEffect(() => {
    const update = event => setDocuments(event.detail?.documents || []);
    window.addEventListener('production-ready-documents', update);
    return () => window.removeEventListener('production-ready-documents', update);
  }, []);

  const chooseRoot = async () => {
    if (!window.showDirectoryPicker) { setViewer({ title: 'Browser belum mendukung folder access', type: 'message', content: 'Gunakan Chrome atau Edge desktop untuk membuka file berdasarkan path repository. Link online tetap dapat dibuka langsung.' }); return; }
    try { setRoot(await window.showDirectoryPicker({ mode: 'read' })); } catch { /* user cancelled */ }
  };
  const open = async document => {
    if (document.location?.url) { window.open(document.location.url, '_blank', 'noopener'); return; }
    if (!root) { await chooseRoot(); return; }
    try {
      let folder = root;
      const parts = document.location.path.replace(/^\.\//, '').split('/').filter(Boolean);
      const fileName = parts.pop();
      for (const part of parts) folder = await folder.getDirectoryHandle(part);
      const handle = await folder.getFileHandle(fileName);
      const file = await handle.getFile();
      await readDocument(document, file, setViewer);
    } catch (error) { setViewer({ title: document.title, type: 'message', content: `File tidak dapat dibuka dari folder yang dipilih. Pastikan path “${document.location?.path}” benar dan pilih root repository yang tepat.` }); }
  };
  return <section className="document-registry"><div className="document-registry-head"><div><span className="eyebrow">DOCUMENT INDEX</span><h3>Dokumen proyek</h3></div><button className="text-button" onClick={() => input.current?.click()}>⇪ Import index</button><input ref={input} className="visually-hidden" type="file" accept="application/json,.json" onChange={event => window.productionReadyLocal?.importDocumentIndex(event)} /></div><p>Agent menyimpan lokasi dokumen di JSON. Pilih folder repo sekali untuk membuka path lokal; URL online dibuka langsung.</p><div className="document-actions"><button className={root ? 'folder-ready' : ''} onClick={chooseRoot}>{root ? '✓ Folder repo dipilih' : '▣ Pilih folder repo'}</button><a href="/document-index.template.json" download="documents.json">⇩ Download template JSON</a></div>{documents.length ? <div className="document-list">{documents.map(document => <button key={document.id} onClick={() => open(document)}><i className={document.type}>{label[document.type] || 'FILE'}</i><span><b>{document.title}</b><small>{document.location?.url || document.location?.path}</small></span><em>↗</em></button>)}</div> : <div className="document-empty">Belum ada document index. Download template JSON lalu isi lokasi dokumen Anda.</div>}{viewer && <DocumentViewer viewer={viewer} close={() => setViewer(null)} />}</section>;
}

async function readDocument(document, file, setViewer) {
  if (document.type === 'pdf') {
    const [pdfjsLib, workerModule] = await Promise.all([import('pdfjs-dist'), import('pdfjs-dist/build/pdf.worker.min.mjs?url')]);
    pdfjsLib.GlobalWorkerOptions.workerSrc = workerModule.default;
    const pdf = await pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
    const pages = [];
    for (let pageNumber = 1; pageNumber <= Math.min(pdf.numPages, 20); pageNumber += 1) {
      const content = await (await pdf.getPage(pageNumber)).getTextContent();
      pages.push(content.items.map(item => item.str).join(' '));
    }
    setViewer({ title: document.title, type: 'text', content: pages.join('\n\n'), note: pdf.numPages > 20 ? `Menampilkan 20 dari ${pdf.numPages} halaman.` : `${pdf.numPages} halaman.` });
    return;
  }
  if (document.type === 'docx') {
    const mammoth = await import('mammoth/mammoth.browser');
    const result = await mammoth.convertToHtml({ arrayBuffer: await file.arrayBuffer() });
    setViewer({ title: document.title, type: 'html', content: DOMPurify.sanitize(result.value), note: result.messages.length ? `${result.messages.length} catatan konversi.` : 'DOCX dibaca lokal.' });
    return;
  }
  const raw = await file.text();
  const formatted = document.type === 'markdown' ? await formatMarkdown(raw) : raw;
  setViewer({ title: document.title, type: document.type === 'markdown' ? 'html' : 'text', content: document.type === 'markdown' ? DOMPurify.sanitize(marked.parse(formatted)) : formatted, note: document.type === 'markdown' ? 'Markdown dirapikan dengan Prettier sebelum ditampilkan.' : 'Dokumen dibaca lokal.' });
}

async function formatMarkdown(value) {
  const [prettierModule, pluginModule] = await Promise.all([import('prettier/standalone'), import('prettier/plugins/markdown')]);
  return prettierModule.default.format(value, { parser: 'markdown', plugins: [pluginModule.default] });
}

function DocumentViewer({ viewer, close }) { return <div className="doc-viewer-backdrop" onMouseDown={close}><article className="doc-viewer" onMouseDown={event => event.stopPropagation()}><button className="modal-close" onClick={close}>×</button><span className="eyebrow orange">LOCAL DOCUMENT READER</span><h2>{viewer.title}</h2>{viewer.note && <p className="doc-note">{viewer.note}</p>}{viewer.type === 'html' ? <div className="doc-content html" dangerouslySetInnerHTML={{ __html: viewer.content }} /> : <pre className="doc-content">{viewer.content}</pre>}<button className="primary no-margin" onClick={close}>Tutup</button></article></div>; }
