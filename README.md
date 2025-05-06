# Discord OwO Multi-Selfbot

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E=16.9.0-brightgreen)

Owo Pray Bot otomatis untuk menjalankan `owo pray` ke target user secara berkala menggunakan banyak akun (multi-token). Didesain khusus untuk farming OwO Pray secara efisien dan aman.

---

## ✨ Fitur

- [x] **Multi-token support**
- [x] **Otomatis `owo pray`, `wpray`, `owopray`**
- [x] **Random delay 5-6 menit**
- [x] **Typing Indicator**
- [x] **Delay Ketik Acak (3-5 detik)**
- [x] **Auto-pause** jika mendeteksi Captcha dari OwO
- [x] **Manual Commands:** `!pause`, `!resume`
- [x] **Konfigurasi Mudah** via `config.js`

---

## ⚙️ Struktur Proyek

```
.
├── package.json
├── tokens.txt
├── README.md
└── src
    ├── index.js              # Entry point utama
    ├── config.js             # Konfigurasi channel dan user
    ├── utils
    │   └── autoPray.js       # Fungsi untuk auto pray
    └── commands
        └── control.js        # Handler untuk command !pause/resume/
```

---

## 📦 Dependency

| Library                  | Kegunaan                            |
|-------------------------|--------------------------------------|
| `discord.js-selfbot-v13@latest`| Library selfbot Discord utama       |
| `chalk v4.1.2`                 | Memberi warna pada log terminal     |

Install semuanya:
```bash
npm install
```

---

## 🚀 Cara Memasang

1. **Clone project ini atau download zip:**
```bash
git clone https://github.com/ohmygod-king/OwO-Pray-Bot.git
cd Owo-Pray-Bot
```

2. **Masukkan token ke `tokens.txt` (1 baris per token):**
```
Njk2MzM...Token1
OTIyNz...Token2
```

3. **Ubah `src/config.js` sesuai kebutuhan:**
```js
module.exports = {
    targetChannelId: '1368556509814067371', // Channel ID
    targetUserId: '788520888395104266', // Target User 

    prayInterval: {
        min: 5 * 60 * 1000, // 5 menit
        max: 6 * 60 * 1000  // 6 menit
    },

    startDelay: {
        min: 5000,
        max: 15000
    },

    typingDelay: {
        min: 3000,
        max: 5000
    },

    warningKeywords: ['⚠️'],

    commandPrefix: '!',
    publicControl: true,
    ownerId: '000000000000000000',

    commands: {
        pauseAll: 'pauseall',
        resumeAll: 'resumeall'
    },

    useColorLogs: true
};
```

4. **Jalankan bot:**
```bash
npm start
```

---

## 🧠 Command

| Command          | Fungsi                                     |
|------------------|---------------------------------------------|
| `!pause`         | Menjeda semua auto-pray sementara           |
| `!resume`        | Melanjutkan kembali auto-pray               |

> Catatan: Command bisa diketik siapa saja di channel target OwO.

---

## ⚠️ Disclaimer

- Gunakan dengan bijak.
- Risiko ditanggung pengguna.

---

## 📜 Lisensi

MIT License © 2025 — [Gar.](https://github.com/ohmygod-king)