# FanBlog: Modern UGC Blog Platform

FanBlog adalah platform blog modern yang mengutamakan User-Generated Content (UGC). Dibangun dengan pendekatan serverless, platform ini tidak menggunakan database SQL/NoSQL tradisional, melainkan memanfaatkan Google Sheets sebagai database utama dan Google Apps Script sebagai mesin API.

## Fitur Unggulan FanBlog
FanBlog dirancang untuk membangun komunitas di mana setiap pengguna dapat berbagi informasi dan karya:

-   **Pendaftaran dan Login Mandiri**: Pengguna dapat mendaftar, mengelola akun, dan melakukan autentikasi untuk mulai mempublikasikan konten.
-   **Dashboard Penulis**: Antarmuka fungsional untuk membuat, memperbarui, dan menghapus postingan blog secara mandiri.
-   **Profil Kustom**: Setiap penulis memiliki halaman profil publik dengan deskripsi diri dan foto profil yang dapat dipersonalisasi.
-   **Eksplorasi Konten**: Sistem untuk menemukan konten terbaru dan populer yang dihasilkan oleh komunitas.
-   **Kategorisasi Dinamis**: Pengelompokan konten berdasarkan kategori untuk efisiensi navigasi pembaca.
-   **Moderasi Administrator**: Panel kontrol bagi administrator untuk mengelola konten dan basis pengguna guna menjaga integritas platform.

## Teknologi yang Digunakan

-   **Frontend**: HTML5, CSS3, Vanilla JavaScript, Bootstrap 5.
-   **Animasi**: Animate.css dan AOS (Animate On Scroll) untuk antarmuka pengguna yang dinamis.
-   **Backend/API**: Google Apps Script (REST API).
-   **Database**: Google Sheets (Cloud Storage).
-   **Hosting**: Dioptimasi untuk platform GitHub Pages.

## Struktur Proyek
```text
FanBlog/
├── .gitignore
├── 404.html
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   │   ├── favicon.ico
│   │   └── logo.webp
│   └── js/
│       ├── api.js
│       ├── app.js
│       ├── categories.js
│       └── post-seo.js
└── pages/
    ├── about.html
    ├── admin.html
    ├── categories.html
    ├── contact.html
    ├── create-post.html
    ├── edit-post.html
    ├── explore.html
    ├── faq.html
    ├── guidelines.html
    ├── login.html
    ├── post.html
    ├── profile.html
    ├── signup.html
    └── trending.html
```

### Penjelasan File & Folder:

*   **Root Directory (`/`)**:
    *   `index.html`: Halaman utama (Homepage) blog yang menampilkan daftar postingan terbaru, terpopuler, dan navigasi utama platform.
    *   `404.html`: Halaman penanganan error 404 (Not Found) untuk merespons halaman yang tidak ditemukan.
    *   `README.md`: Dokumentasi petunjuk penggunaan, teknologi, dan panduan proyek.
    *   `.gitignore`: Mengonfigurasi berkas atau folder mana yang harus diabaikan saat melakukan commit ke repositori Git.

*   **`assets/`**: Menyimpan seluruh berkas aset statis pendukung tampilan dan fungsi aplikasi.
    *   **`css/`**:
        *   `style.css`: File stylesheet utama yang mengatur kustomisasi tampilan, tata letak, warna, dan responsivitas web.
    *   **`img/`**:
        *   `favicon.ico`: Ikon situs web untuk tab peramban.
        *   `logo.webp`: Aset gambar logo resmi FanBlog dalam format WebP yang efisien.
    *   **`js/`**:
        *   `api.js`: Modul logika untuk berkomunikasi dengan Google Apps Script REST API (mengirim request GET, POST, dll).
        *   `app.js`: Script utama penanganan login, otentikasi sesi, menu dropdown, serta pengaturan interaksi antarmuka pengguna (UI).
        *   `categories.js`: Logika Javascript untuk pemrosesan, pemfilteran, dan visualisasi daftar kategori postingan.
        *   `post-seo.js`: Penanganan modifikasi tag meta SEO secara dinamis untuk halaman artikel tunggal.

*   **`pages/`**: Folder yang berisi halaman-halaman fitur dan fungsionalitas utama aplikasi.
    *   `about.html`: Informasi umum dan visi misi platform FanBlog.
    *   `admin.html`: Dasbor moderasi admin untuk mengelola seluruh konten postingan dan daftar pengguna.
    *   `categories.html`: Halaman visualisasi artikel berdasarkan kategori terpilih.
    *   `contact.html`: Formulir kontak bagi pengunjung untuk mengirim pesan.
    *   `create-post.html`: Formulir pembuatan artikel baru yang dilengkapi dengan validasi input.
    *   `edit-post.html`: Halaman pengeditan artikel yang sudah diterbitkan.
    *   `explore.html`: Halaman pencarian dan eksplorasi seluruh postingan secara menyeluruh.
    *   `faq.html`: Halaman tanya-jawab umum seputar penggunaan platform.
    *   `guidelines.html`: Panduan etika penulisan dan tata tertib komunitas.
    *   `login.html`: Halaman otentikasi masuk pengguna.
    *   `post.html`: Halaman penayangan konten artikel/postingan secara lengkap dan mendalam.
    *   `profile.html`: Profil publik penulis beserta rekam jejak postingan yang sudah dipublikasikan.
    *   `signup.html`: Formulir pendaftaran akun penulis baru.
    *   `trending.html`: Halaman yang menyajikan daftar artikel terpopuler saat ini.

## Keamanan dan Integritas Data
-   Sistem keamanan menggunakan algoritma hashing SHA-256 untuk perlindungan kata sandi pengguna.
-   Sanitasi input diimplementasikan pada sisi klien (JavaScript) dan sisi server (Apps Script).
-   Penggunaan Google Sheets sebagai database memiliki limitasi tertentu; oleh karena itu, platform ini tidak direkomendasikan untuk penyimpanan data finansial atau informasi yang sangat rahasia tanpa lapisan enkripsi tambahan.

---
Dikembangkan untuk mendukung pertumbuhan komunitas kreatif secara terbuka.
