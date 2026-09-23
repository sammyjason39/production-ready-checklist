# Production Enterprise Ready Checklist

React/Vite dashboard untuk memetakan readiness aplikasi dari discovery sampai operations. Data demo disimpan di browser, sehingga aman dipakai sebagai sandbox tanpa backend.

## Jalankan lokal

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Hasil static site berada di `dist/` dan dapat di-host di Vercel, Nginx, atau VPS static hosting.

## Fitur versi pertama

- Multi-project workspace: setiap proyek memiliki profile, checklist, evidence, dan artefaknya sendiri.
- Roster tim: daftarkan anggota beserta skills, lalu tetapkan posisi berbeda untuk setiap proyek.
- Application profile untuk menampilkan checklist yang relevan terhadap tipe produk, tier risiko, AI/agent, dan public web.
- Mode Solo dan Team untuk setiap checklist item.
- Lifecycle dashboard, readiness score, release blocker, pencarian, dan filter status.
- Evidence yang dapat ditambahkan per checklist item.
- Artifact library berisi template business, product, design, engineering, quality, security, operations, dan growth; setiap template menyertakan struktur minimum, tool, dan AI starter prompt yang dapat disalin.
- Rekomendasi tools per fase lifecycle, ditautkan ke sumber resmi.
- Reset demo memulihkan seluruh proyek, tim, checklist, evidence, dan artefak starter.

## Data lokal

Workspace disimpan pada `localStorage` browser dengan key `production-ready-checklist-v2`. Untuk mulai kosong pada browser lokal, gunakan tombol **Reset demo** lalu hapus proyek/artefak sesuai kebutuhan, atau hapus key tersebut dari DevTools. Tidak ada data dikirim dari browser oleh aplikasi ini.

## Audit repository dengan AI agent

Platform ini dapat digunakan bersama Claude, Hermes, Codex, atau agent lain yang mendukung folder `SKILL.md`. Agent melakukan scan secara lokal, menghasilkan report JSON, lalu user mengimpornya melalui halaman **Checklist** → **Import audit.json**. Import hanya membuat *candidate evidence* dan mengubah item dari `Belum mulai` menjadi `Sedang dikerjakan`; tidak ada item yang otomatis ditandai selesai.

### Menjalankan scanner sendiri

Butuh Node.js 18 atau lebih baru. Dari root repository ini:

```bash
# Scan project ini
npm run scan

# Scan repository lain
node scripts/scan-repository.mjs --root /absolute/path/ke/repository

# Tentukan lokasi output sendiri
node scripts/scan-repository.mjs --root /absolute/path/ke/repository \
  --output /absolute/path/ke/repository/.production-ready/audit.json
```

Scanner membaca source code dan file teks umum, lalu mencari kandidat evidence seperti PRD, ADR, ERD, OpenAPI, test strategy, threat model, release plan, runbook, SLO, dan SEO plan. Hasil ada pada `<repository>/.production-ready/audit.json`.

### Install skill pada agent

Salin atau symlink dua folder ini ke skills directory pada agent yang digunakan:

```text
skills/production-readiness-scan/
skills/production-readiness-evidence/
```

- `production-readiness-scan`: audit repository dan membuat `audit.json`.
- `production-readiness-evidence`: mengambil metadata dokumen dari sumber yang telah diotorisasi melalui MCP, lalu membentuk source index yang dapat dipindai.

Instruksi lengkap ada di [docs/agent-workflow.md](docs/agent-workflow.md). Kedua skill memakai format portable `SKILL.md`, sehingga dapat dipakai oleh environment agent yang mendukung format tersebut.

### Dokumen di Jira, ClickUp, Notion, Drive, atau platform lain

Dashboard tidak menyimpan kredensial dan tidak langsung menarik dokumen SaaS. Agent yang telah diberi koneksi MCP oleh user melakukan pencarian hanya pada project/folder yang diberi izin, lalu menulis indeks kecil berikut pada repository target:

```text
.production-ready/sources.json
```

Mulai dari [.production-ready/sources.example.json](.production-ready/sources.example.json). Index hanya menyimpan judul, URL kanonis, sumber, waktu akses, tag, dan ringkasan faktual. Setelah itu, jalankan scan ulang. Dengan model ini, repository menjadi source of truth untuk report audit tanpa memasukkan token, credential, atau isi dokumen yang tidak relevan ke Git.

### Alur kerja yang disarankan

1. Jalankan aplikasi lokal dengan `npm install` dan `npm run dev`.
2. Install skill scan pada agent, lalu berikan path repository yang ingin diaudit.
3. Bila dokumen berada di luar repo, hubungkan MCP yang telah diotorisasi dan gunakan skill evidence untuk membuat source index.
4. Jalankan scanner dan import `audit.json` pada panel **Local agent workflow** di halaman Checklist.
5. Review evidence dan tetapkan owner. Gunakan **Copy agent gap plan** atau **Copy prompt** pada checklist item untuk meminta agent menyusun artefak yang kurang.
6. Simpan artefak ke repository atau sumber dokumen kanonis, review, lalu scan ulang.

### Prinsip keamanan dan review

- Scanner tidak mengakses jaringan dan tidak mengirim source code keluar dari mesin.
- MCP hanya dipakai oleh agent jika user sudah menghubungkan dan mengizinkan sumber tersebut.
- Jangan commit credential atau token ke `.production-ready/sources.json`.
- Kandidat keyword bukan bukti final. Owner tetap perlu memeriksa link, isi dokumen, approval, dan tanggal review sebelum status menjadi `Selesai`.

## Catatan

Data checklist, artifact library, dan katalog tool berada di `src/data.js`. Untuk penggunaan tim yang membutuhkan sinkronisasi lintas browser, langkah berikutnya adalah memindahkan state workspace ke database dan menambahkan autentikasi serta approval flow.
