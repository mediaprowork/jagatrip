# Landing Page Redesign — JAGATRIP

**Date:** 2026-05-04  
**Source:** Jagatrip Materi LP #2.pdf  

---

## Overview

Full redesign of the homepage (`index.astro`) following the LP materi document. Two new sections added, all existing sections updated with copy from the PDF, and the hero poster replaced with `jagatrip-hero.png`.

---

## Hero Section Layout

- **Layout:** Split left-right (text left, poster right)
- **Poster:** `public/jagatrip-hero.png` as `<img>` with `object-fit: cover`
- No programmatic card — replace entirely with the image

---

## Section Order (index.astro)

| Order | Component | Status |
|-------|-----------|--------|
| 1 | `HomeHero.astro` | Update |
| 2 | `ProblemSection.astro` | Update copy |
| 3 | `AboutSection.astro` | Update copy |
| 4 | `AudienceSection.astro` | **NEW** |
| 5 | `WhySection.astro` | Update copy |
| 6 | `BenefitSection.astro` | Update copy |
| 7 | `TimelineSection.astro` | No change |
| 8 | `IncludesSection.astro` | **NEW** |
| 9 | `PricingSection.astro` | Update copy |
| 10 | `CtaBannerSection.astro` | Update copy |
| 11 | `FaqSection.astro` | No change |
| 12 | `AgendaTableSection.astro` | No change |

---

## Section Specs

### 1. HomeHero.astro

**Left column:**
- Badge (dark navy pill): `✨ JAGATRIP INSIDER SERIES 2026 ✨`
- H1: `JAGATRIP WORLD EXPEDITION` + subline `Ekspedisi Benchmarking Internasional`
- Subheadline (bold, large): `Dunia adalah Ruang Kelas Terbesar. Yuk Belajar Langsung dari Sumbernya!`
- Body: `Program Edu-Tourism eksklusif bagi para praktisi pendidikan Indonesia yang ingin melakukan BENCHMARKING langsung ke sekolah-sekolah terbaik dunia — bukan sekadar jalan-jalan, tapi perjalanan yang mengubah cara kamu memimpin.`
- Event info badges:
  - 📅 `24–28 Juni 2026` / `Malaysia & Thailand`
  - ✈️ `5 Hari 4 Malam` / `Kuala Lumpur → Hatyai`
- CTA primary: `Daftar Sekarang →` (orange, links to WA)
- CTA secondary: `Lihat Itinerary ↓` (outline/dark, links to `#itinerary`)
- Social proof bar (dark navy): `★★★★★ Dipercaya oleh 200+ Praktisi Pendidikan Indonesia | Certified by PT Jagatrip Mitra Edukasi`

**Right column:**
- `<img src="/jagatrip-hero.png">` with rounded corners, shadow, aspect-ratio portrait
- Wrapped in WA link

---

### 2. ProblemSection.astro

- Headline: `Apakah Kamu Mengalami Ini?`
- 6 pain points (checkmark ✓ list):
  1. Sekolahmu sudah bagus — tapi kamu ngerasa ada yang kurang dan nggak tahu harus mulai dari mana.
  2. Kamu pengen sistem pendidikan yang lebih modern, tapi referensinya terbatas dan tidak bisa keluar dari "zona nyaman" yang itu-itu aja.
  3. Sudah banyak seminar dan pelatihan, tapi hasilnya belum mengubah kualitas sekolahmu secara nyata.
  4. Kamu ingin tahu bagaimana sekolah-sekolah terbaik dunia membangun budaya belajar yang kuat — tapi akses ke mereka terasa sangat jauh.
  5. Siswa dan guru butuh inspirasi baru — tapi kamu sendiri bingung harus mencari inspirasi itu ke mana.
  6. Ingin mengadopsi praktik terbaik sekolah internasional, tapi tidak punya networking yang tepat untuk memulainya.
- Closing hook (orange box): `Kalau jawabanmu "IYA" — maka kamu perlu ikut JAGATRIP To Malaysia & Thailand, 24–28 Juni 2026`
- Quote (italic): `Karena ilmu yang paling mahal bukan yang ada di buku teks — melainkan yang tersimpan di balik tembok sekolah-sekolah terbaik yang jarang dibuka untuk umum.`

---

### 3. AboutSection.astro

- Headline: `Apa Itu JAGATRIP?`
- Filosofi nama (2 kolom):
  - ◆ **JAGAT** *(Sanskerta-Jawa Kuno)* = dunia, semesta, alam raya
  - ◆ **TRIP** *(English - global)* = perjalanan, kunjungan
- Tagline box: `"Perjalanan ke Seluruh Penjuru Dunia"`
- Definisi: `JAGATRIP adalah program Edu-Tourism premium yang dirancang khusus untuk para praktisi pendidikan — kepala sekolah, guru, pengawas, dan pemangku pendidikan — yang ingin melakukan BENCHMARKING langsung ke sekolah-sekolah terbaik di seluruh dunia.`
- Diferensiasi (dark box): `Bukan sekadar jalan-jalan. Bukan sekadar studi banding biasa.`
- JAGATRIP menggabungkan (✓ list):
  - Pengalaman belajar langsung di lapangan (field learning)
  - Workshop eksklusif bersama praktisi pendidikan di negara-negara kunjungan
  - Sesi dialog terbuka dengan manajemen sekolah internasional
  - City tour edukatif destinasi wisata
  - Networking eksklusif antar sesama praktisi pendidikan Indonesia

---

### 4. AudienceSection.astro (NEW)

- File: `src/components/sections/home/AudienceSection.astro`
- Headline: `Program Ini Dirancang untuk Kamu yang...`
- Grid 2×3 cards:

| Icon | Title | Description |
|------|-------|-------------|
| 🏫 | Kepala Sekolah | Yang ingin membawa visi sekolahnya ke level internasional |
| 📚 | Guru & Pendidik | Yang lapar inspirasi dan metode mengajar baru |
| 🔍 | Pengawas Pendidikan | Yang mencari referensi sistem pendidikan terbaik dunia |
| 🏛️ | Owner Yayasan | Yang ingin membangun institusi pendidikan kelas dunia |
| 🎓 | Mahasiswa Pendidikan | Calon pemimpin pendidikan yang ingin melihat dunia lebih luas |
| 🤝 | Pemerhati Pendidikan | Yang aktif berkontribusi pada kemajuan sistem pendidikan Indonesia |

---

### 5. WhySection.astro

- Headline: `Karena Sekolahmu Layak Dapat yang Terbaik`
- Subheadline: `Satu perjalanan bersama JAGATRIP bisa mengubah cara pandangmu terhadap pendidikan — selamanya.`
- Label: `5 ALASAN WAJIB IKUT`
- 5 alasan (icon + title + desc):
  1. 🏫 **Sistem Pendidikan Kelas Dunia** — saksikan bagaimana sekolah Malaysia & Thailand membangun sistem pendidikan yang konsisten, inovatif, dan berdampak
  2. 💡 **Guru yang Benar-Benar Menginspirasi** — saksikan budaya belajar yang hidup dan rasakan sendiri perbedaannya
  3. 📱 **Teknologi Pendidikan yang Relevan** — integrasi teknologi yang tepat guna di ruang kelas nyata
  4. 🤝 **Jaringan yang Tidak Ternilai** — bergabung dengan ratusan praktisi pendidikan terbaik dari Indonesia
  5. 🏆 **Rekognisi & Sertifikasi Resmi** — sertifikat resmi dari PT JAGATRIP MITRA EDUKASI

---

### 6. BenefitSection.astro

- Headline: `Yang Akan Kamu Dapatkan dari JAGATRIP`
- 10 benefit (✓ icon list):
  1. ✈️ Merasakan langsung suasana dan kultur sekolah kelas dunia di Malaysia & Thailand
  2. 🏫 Akses eksklusif ke sesi benchmarking & observasi kelas di sekolah internasional pilihan
  3. 🎤 Ngobrol langsung (dialog terbuka) dengan kepala sekolah dan staf pengajar top
  4. 📚 Workshop intensif: praktik terbaik manajemen sekolah, kurikulum, dan pengembangan guru
  5. 🌍 Inspirasi nyata dari sistem pendidikan yang sudah terbukti menghasilkan lulusan berkualitas
  6. 📸 Dokumentasi perjalanan profesional yang bisa jadi konten inspiratif untuk sekolahmu
  7. 🎁 Merchandise & souvenir eksklusif JAGATRIP Insider Series
  8. 🥇 Sertifikat resmi partisipasi program benchmarking internasional
  9. 🤝 Membangun network dengan sesama praktisi pendidikan terbaik Indonesia
  10. 💡 Oleh-oleh ilmu yang langsung bisa diaplikasikan di sekolahmu setelah pulang
- Quote (orange box): `"Perjalanan ini bukan pengeluaran. Ini adalah INVESTASI terbaik untuk sekolah dan generasi yang kamu didik."`
- Closing line: `5 Hari yang Bisa Mengubah 5 Tahun ke Depan Sekolahmu.`

---

### 7. TimelineSection.astro — No change

Already matches PDF Section 9 itinerary.

---

### 8. IncludesSection.astro (NEW)

- File: `src/components/sections/home/IncludesSection.astro`
- Headline: `Semua Sudah Termasuk. Kamu Tinggal Hadir dan Belajar.`
- 13 item (2-column icon list):
  1. ✈️ TIKET PESAWAT — Round-trip flight ke KLIA (PP)
  2. 🏨 HOTEL BINTANG 3 — Penginapan nyaman selama 4 malam
  3. 🍽️ 10x MAKAN — Termasuk sarapan, makan siang, dan makan malam pilihan
  4. 🥂 WELCOME DRINK — Minuman sambutan di hari pertama
  5. 🚌 BUS PARIWISATA LUXURY — Transportasi darat Malaysia–Thailand (VIP)
  6. 📚 WORKSHOP & SEMINAR KIT — Modul, buku, dan alat tulis eksklusif
  7. 🛍️ MERCHANDISE JAGATRIP — Tas, kaos, dan souvenir eksklusif Insider Series
  8. 🎁 DOOR PRIZE — Hadiah menarik untuk peserta beruntung
  9. 🥇 SERTIFIKAT RESMI — Sertifikat benchmarking internasional dari PT Jagatrip Mitra Edukasi
  10. 📸 DOKUMENTASI — Foto dan video profesional selama perjalanan
  11. 🗺️ CITY TOUR — Tur kota Kuala Lumpur & Bangkok
  12. 👨‍🏫 TOUR LEADER PROFESIONAL — Pendamping berpengalaman selama perjalanan
  13. 🛡️ ASURANSI PERJALANAN — Perlindungan selama program berlangsung
- Catatan penting (box): `Meeting Point Keberangkatan: KLIA (Kuala Lumpur International Airport). Tiket pesawat dari kota asal peserta menuju KLIA ditanggung dalam paket.`

---

### 9. PricingSection.astro

- Headline: `Investasi Terbaik yang Pernah Kamu Buat untuk Sekolah dan Instansimu`
- Two pricing tiers side by side:
  - **🔥 EARLY BIRD** (Sampai 10 Juni 2026): **Rp 7.900.000** / per orang | All-in
  - **HARGA NORMAL** (Berlaku 10 Juni 2026 dst): **Rp 8.250.000** / per orang | All-in
- CTA: `DAFTAR SEKARANG` → WA link

---

### 10. CtaBannerSection.astro

- Headline: `Dan sekarang, saatnya kamu ambil langkah pertama.`
- Badge: `🔥 PROGRAM PERDANA — JAGATRIP INSIDER SERIES 2026`
- Event: `CLASS CONFIDENTIAL: Rahasia Sekolah Kelas Dunia yang Tidak Diajarkan di Seminar Manapun`
- CTA: `Daftar Sekarang →` → WA link

---

## Files to Create

- `src/components/sections/home/AudienceSection.astro`
- `src/components/sections/home/IncludesSection.astro`

## Files to Modify

- `src/pages/index.astro` — import & order new sections
- `src/components/sections/home/HomeHero.astro`
- `src/components/sections/home/ProblemSection.astro`
- `src/components/sections/home/AboutSection.astro`
- `src/components/sections/home/WhySection.astro`
- `src/components/sections/home/BenefitSection.astro`
- `src/components/sections/home/PricingSection.astro`
- `src/components/sections/home/CtaBannerSection.astro`

## Files Unchanged

- `src/components/sections/home/TimelineSection.astro`
- `src/components/sections/home/FaqSection.astro`
- `src/components/sections/home/AgendaTableSection.astro`
