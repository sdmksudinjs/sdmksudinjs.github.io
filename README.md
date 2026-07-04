# SDMK Sudin Jakarta Selatan Public Website

This repository contains only the static public website for GitHub Pages. It is intentionally isolated from private application code, private configuration, credentials, database migrations, administrative panels, authentication flows, and internal operational data.

## Scope

- Static public website assets only.
- Build output is generated into `dist/`.
- Deployment is designed for GitHub Pages using GitHub Actions.

## Local commands

```bash
npm ci
npm run build
```

# SDMK Jakarta Selatan Public Static Site Candidate

Direktori ini adalah kandidat situs publik statis yang terisolasi dari aplikasi utama.

## Prinsip keamanan

- Tidak mengimpor kode dari aplikasi utama.
- Tidak memakai Supabase.
- Tidak memakai autentikasi, panel admin, Server Actions, route handler, atau API privat.
- Tidak memuat `.env`, kredensial, service role, database URL, atau secret.
- Tidak memuat data real pegawai, tenaga kesehatan, pasien, atau fasyankes.
- Konten memakai placeholder aman seperti `akan diperbarui` sampai ada validasi resmi.

## Perintah lokal

```bash
npm install
npm run build
```

Output statis dibuat di `dist/`.

## Rekomendasi penggunaan

Salin isi direktori ini ke repositori publik terpisah setelah review manusia. Jangan aktifkan GitHub Pages dari repositori utama privat-oriented.
