# Kebijakan Konten Situs Publik Statis

## Boleh dipublikasikan

- Profil singkat resmi yang sudah disetujui.
- Ringkasan layanan publik.
- Pengumuman dan berita yang sudah dikurasi untuk publik.
- Placeholder aman seperti `akan diperbarui`.
- Aset logo dan ikon yang memang aman untuk publik.
- Tautan ke portal atau form eksternal resmi yang sudah diverifikasi.

## Tidak boleh dipublikasikan

- Data personal pegawai, tenaga kesehatan, pasien, atau user.
- Nomor identitas, nomor registrasi, nomor izin, atau identifier personal.
- Nomor telepon pribadi dan email pribadi.
- Data real fasyankes sebelum ada keputusan publikasi resmi.
- Kode admin, autentikasi, Supabase, database, Server Actions, route handler, atau API privat.
- `.env`, token, service role, database URL, cookie, atau secret apa pun.

## Perlu review manual

- Konten yang menyebut pegawai, pasien, tenaga kesehatan, atau fasyankes.
- Konten regulasi atau dokumen internal.
- Dokumen yang berasal dari aplikasi utama atau panel admin.
- Kontak kantor dan tautan eksternal sebelum dipublikasikan.

## Keputusan operasional

Repositori utama tetap privat. Situs publik statis harus berada di repositori publik terpisah atau artefak statis terpisah setelah review konten selesai.
