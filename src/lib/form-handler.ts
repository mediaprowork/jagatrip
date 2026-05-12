import { SITE } from '../data/site';

/**
 * Google Apps Script Web App URL — ganti dengan URL deployment kamu.
 * Cara setup:
 * 1. Buka Google Sheets → Extensions → Apps Script
 * 2. Paste code dari /docs/apps-script.js
 * 3. Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone
 * 4. Copy URL deployment → paste di sini
 */
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/GANTI_DENGAN_DEPLOYMENT_ID/exec';

export function initRegistrationForm(): void {
  const form = document.getElementById('daftar-form') as HTMLFormElement | null;
  if (!form) return;

  const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const statusEl = document.getElementById('form-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const payload: Record<string, string> = {};
    data.forEach((val, key) => { payload[key] = val.toString().trim(); });

    // Validasi
    const required = ['nama', 'email', 'wa', 'jabatan', 'sekolah', 'kota_asal', 'kota_berangkat', 'program'];
    for (const field of required) {
      if (!payload[field]) {
        showStatus('error', 'Mohon lengkapi semua field yang wajib diisi (*)');
        return;
      }
    }

    // Disable button
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Mengirim data...';
    }

    try {
      // POST ke Apps Script
      const res = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...payload,
          timestamp: new Date().toISOString(),
          source: window.location.href,
        }),
      });

      // no-cors selalu return opaque response, jadi anggap sukses
      showStatus('success', 'Data berhasil dikirim! Mengalihkan ke WhatsApp...');

      // Redirect ke WA setelah 1.5 detik
      setTimeout(() => {
        const msg = [
          `Halo admin JAGATRIP 👋`,
          ``,
          `Saya sudah mengisi form pendaftaran di website.`,
          ``,
          `📋 Data saya:`,
          `Nama: ${payload.nama}`,
          `Jabatan: ${payload.jabatan}`,
          `Sekolah/Instansi: ${payload.sekolah}`,
          `Kota Asal: ${payload.kota_asal}`,
          `Kota Berangkat: ${payload.kota_berangkat}`,
          `Program: ${payload.program}`,
          payload.peserta ? `Estimasi Peserta: ${payload.peserta}` : '',
          ``,
          `Mohon konfirmasi pendaftaran saya. Terima kasih! 🙏`,
        ].filter(Boolean).join('\n');

        window.open(
          `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(msg)}`,
          '_blank',
          'noopener,noreferrer'
        );
      }, 1500);

    } catch {
      showStatus('error', 'Gagal mengirim. Coba lagi atau hubungi admin via WhatsApp.');
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = 'Kirim & Lanjut ke WhatsApp →';
      }
    }
  });

  function showStatus(type: 'success' | 'error', msg: string): void {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.className = `text-sm text-center mt-3 font-medium ${
      type === 'success' ? 'text-green-600' : 'text-red-600'
    }`;
    statusEl.classList.remove('hidden');
  }
}
