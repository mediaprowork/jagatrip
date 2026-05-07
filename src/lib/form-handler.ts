import { SITE } from '../data/site';

export function initKonsultasiForm(): void {
  const form = document.getElementById('konsultasi-form') as HTMLFormElement | null;
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const nama    = (data.get('nama')    as string ?? '').trim();
    const sekolah = (data.get('sekolah') as string ?? '').trim();
    const wa      = (data.get('wa')      as string ?? '').trim();
    const program = (data.get('program') as string ?? '').trim();
    const peserta = (data.get('peserta') as string ?? '').trim();

    if (!nama || !sekolah || !wa || !program || !peserta) return;

    const msg = encodeURIComponent(
      `Halo JAGATRIP! Saya ingin konsultasi gratis program edu-tourism:\n\n` +
      `Nama: ${nama}\n` +
      `Sekolah/Instansi: ${sekolah}\n` +
      `No. WA: ${wa}\n` +
      `Program: ${program}\n` +
      `Estimasi Peserta: ${peserta}\n\n` +
      `Mohon informasinya. Terima kasih!`
    );
    window.open(`https://wa.me/${SITE.waNumber}?text=${msg}`, '_blank', 'noopener,noreferrer');
  });
}
