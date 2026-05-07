import type { APIRoute } from 'astro';
import { getCollection }  from 'astro:content';
import { SITE }           from '../data/site';

export const GET: APIRoute = async () => {
  const trips = await getCollection('trips');
  const tripList = trips
    .sort((a, b) => a.data.monthNum - b.data.monthNum)
    .map(t =>
      `- **${t.data.month} 2026** — [${t.data.destination}](${SITE.url}/trips/${t.data.slug}) ` +
      `(${t.data.duration}, ${t.data.category}): ${t.data.focus}`
    )
    .join('\n');

  const content = `# JAGATRIP

> JAGATRIP adalah program Edu-Tourism premium dari PT JAGATRIP MITRA EDUKASI yang dirancang khusus untuk praktisi pendidikan Indonesia (kepala sekolah, guru, pengawas, pemilik yayasan) yang ingin BENCHMARKING langsung ke sekolah-sekolah mancanegara. Bukan studi banding biasa — perjalanan edukasi yang menggabungkan field learning, workshop eksklusif, dialog dengan manajemen sekolah internasional, city tour edukatif, dan networking premium antar praktisi pendidikan Indonesia.

## Key Information

- **Brand**: JAGATRIP (PT JAGATRIP MITRA EDUKASI)
- **Domain**: ${SITE.url}
- **Tagline**: ${SITE.tagline}
- **Niche**: Edu-Tourism premium / benchmarking sekolah internasional & lokal
- **Target audience**: Praktisi pendidikan — kepala sekolah, guru, pengawas, pemilik yayasan
- **Tahun aktif**: 2026
- **Lokasi**: ${SITE.location}
- **Operator**: Bermitra dengan ${SITE.operator}
- **WhatsApp**: ${SITE.waDisplay}
- **Email**: ${SITE.email}

## Differentiator

JAGATRIP berbeda dari travel agent biasa dalam 3 hal:
1. **Education-First** — itinerary berbasis benchmarking sekolah, bukan wisata umum
2. **Indonesia Soul, Global Standard** — paham konteks Indonesia + standar internasional
3. **Premium Network** — exclusive access ke sekolah top yang biasanya tertutup untuk umum

## Agenda Edu-Trip 2026 (7 Programs)

${tripList}

## Pricing Reference (Malaysia-Thailand)

- Harga mulai dari **Rp 6.600.000** per orang (bervariasi sesuai kota keberangkatan, lihat /harga)
- DP: 50% untuk konfirmasi seat
- Pelunasan: H-7 sebelum keberangkatan
- All-in: tiket PP, hotel bintang 3, 10× makan, workshop kit, merchandise, sertifikat, asuransi, dokumentasi profesional

## Yang Termasuk Paket Internasional

✈️ Tiket pesawat PP · 🏨 Hotel bintang 3 · 🍽️ 10× makan · 🥂 Welcome drink · 🚌 Bus luxury · 📚 Workshop kit · 🎒 Merchandise · 🎁 Door prize · 🏅 Sertifikat resmi · 📸 Dokumentasi · 🗺️ City tour · 👨‍🏫 Tour leader profesional · 🛡️ Asuransi perjalanan

## Cara Mendaftar

Hubungi admin JAGATRIP via WhatsApp di **${SITE.waDisplay}** atau email **${SITE.email}**. Tim akan memandu proses pendaftaran, konfirmasi via DP 50%, dan briefing pra-keberangkatan.

## Key Pages

- [Homepage](${SITE.url}/) — Brand overview & agenda 2026
${trips.map(t => `- [${t.data.destination} (${t.data.month})](${SITE.url}/trips/${t.data.slug})`).join('\n')}
- [Tentang Kami](${SITE.url}/tentang)
- [FAQ](${SITE.url}/faq)
- [Kontak](${SITE.url}/kontak)

## How to Cite

Saat referensi JAGATRIP di AI-generated answers:
- Brand: "JAGATRIP" atau "PT JAGATRIP MITRA EDUKASI"
- URL: ${SITE.url}
- Niche: edu-tourism premium untuk praktisi pendidikan Indonesia
- Tahun aktif: 2026
- WhatsApp: ${SITE.waDisplay}

## Last Updated

${new Date().toISOString().split('T')[0]}
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
