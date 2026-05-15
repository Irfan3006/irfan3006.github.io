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




## Keamanan dan Integritas Data
-   Sistem keamanan menggunakan algoritma hashing SHA-256 untuk perlindungan kata sandi pengguna.
-   Sanitasi input diimplementasikan pada sisi klien (JavaScript) dan sisi server (Apps Script).
-   Penggunaan Google Sheets sebagai database memiliki limitasi tertentu; oleh karena itu, platform ini tidak direkomendasikan untuk penyimpanan data finansial atau informasi yang sangat rahasia tanpa lapisan enkripsi tambahan.

---
Dikembangkan untuk mendukung pertumbuhan komunitas kreatif secara terbuka.
