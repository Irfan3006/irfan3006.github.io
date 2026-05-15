class Auth {
  static setSession(user) {
    localStorage.setItem('fanblog_user', JSON.stringify(user));
  }

  static getSession() {
    try {
      const data = localStorage.getItem('fanblog_user');
      if (!data) return null;
      const parsed = JSON.parse(data);
      if (!parsed || !parsed.id || !parsed.username || !parsed.role) {
        localStorage.removeItem('fanblog_user');
        return null;
      }
      if (!['user', 'admin'].includes(parsed.role)) {
        localStorage.removeItem('fanblog_user');
        return null;
      }
      return parsed;
    } catch (e) {
      localStorage.removeItem('fanblog_user');
      return null;
    }
  }

  static clearSession() {
    localStorage.removeItem('fanblog_user');
    window.location.href = '/pages/login.html';
  }

  static isLoggedIn() {
    return this.getSession() !== null;
  }

  static isAdmin() {
    const user = this.getSession();
    return user && user.role === 'admin';
  }

  static requireLogin() {
    if (!this.isLoggedIn()) {
      window.location.href = '/pages/login.html';
    }
  }

  static requireAdmin() {
    if (!this.isAdmin()) {
      if (typeof Swal !== 'undefined') {
        Swal.fire({
          icon: 'error',
          title: 'Access Denied',
          text: 'Maaf, Anda tidak memiliki izin untuk mengakses halaman ini.',
          confirmButtonColor: 'var(--accent)',
          confirmButtonText: 'Kembali ke Beranda'
        }).then(() => {
          window.location.href = '/';
        });
      } else {
        window.location.href = '/';
      }
    }
  }

  static checkAuthRedirect() {
    if (this.isLoggedIn()) {
      if (typeof Swal !== 'undefined') {
        Swal.fire({
          icon: 'info',
          title: 'Sudah Login',
          text: 'Anda sudah masuk ke akun Anda.',
          confirmButtonColor: 'var(--accent)',
          confirmButtonText: 'Ke Beranda'
        }).then(() => {
          window.location.href = '/';
        });
      } else {
        window.location.href = '/';
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({ once: true, offset: 50 });
  }

  updateNavbar();

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && Auth.isLoggedIn()) {
      const href = link.getAttribute('href');
      if (href && (href.includes('login.html') || href.includes('signup.html'))) {
        e.preventDefault();
        const user = Auth.getSession();
        Swal.fire({
          icon: 'info',
          title: `Halo, ${escapeHTML(user.username)}!`,
          text: 'Anda sudah masuk ke akun Anda. Ingin menulis sesuatu hari ini?',
          showCancelButton: true,
          confirmButtonColor: 'var(--accent)',
          cancelButtonColor: 'var(--stroke)',
          confirmButtonText: '<i class="bi bi-pencil-square me-2"></i> Tulis Postingan',
          cancelButtonText: 'Ke Profil Saya'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/pages/create-post.html';
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            window.location.href = '/pages/profile.html';
          }
        });
      }
    }
  });
});

function updateNavbar() {
  const user = Auth.getSession();
  const authNav = document.getElementById('auth-nav');
  if (!authNav) return;

  if (user) {
    const safeUsername = escapeHTML(user.username);
    const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.username)}&background=random&color=fff`;
    const safeAvatar = escapeHTML(user.avatar || defaultAvatar);
    let adminLink = user.role === 'admin' ? `<li><a class="dropdown-item" href="/pages/admin.html"><i class="bi bi-speedometer2 me-2"></i> Dashboard</a></li>` : '';
    
    authNav.innerHTML = `
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle d-flex align-items-center gap-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="${safeAvatar}" class="rounded-circle-img" alt="Avatar" referrerpolicy="no-referrer" onerror="this.src='${defaultAvatar}'">
          <span>${safeUsername}</span>
        </a>
        <ul class="dropdown-menu dropdown-menu-end shadow border-0" aria-labelledby="navbarDropdown">
          ${adminLink}
          <li><a class="dropdown-item" href="/pages/profile.html"><i class="bi bi-person me-2"></i> Profil</a></li>
          <li><a class="dropdown-item" href="/pages/create-post.html"><i class="bi bi-pencil-square me-2"></i> Tulis Postingan</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item text-danger" href="#" onclick="Auth.clearSession()"><i class="bi bi-box-arrow-right me-2"></i> Logout</a></li>
        </ul>
      </li>
    `;
  } else {
    authNav.innerHTML = `
      <li class="nav-item">
        <a class="nav-link" href="/pages/login.html">Login</a>
      </li>
      <li class="nav-item ms-lg-2 mt-2 mt-lg-0">
        <a class="btn btn-primary w-100" href="/pages/signup.html">Mulai Sekarang</a>
      </li>
    `;
  }
}

function renderNavbar() {
  return `
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center gap-2" href="/">
        <img src="/assets/img/logo.webp" alt="FanBlog Logo" style="width: 35px; height: 35px; object-fit: contain;"> 
        <span class="fw-bold">FanBlog</span>
      </a>
      <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <i class="bi bi-list fs-1"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="/pages/explore.html">Explore</a></li>
          <li class="nav-item"><a class="nav-link" href="/pages/categories.html">Categories</a></li>
          <li class="nav-item"><a class="nav-link" href="/pages/trending.html">Trending</a></li>
          <li class="nav-item"><a class="nav-link" href="/pages/about.html">About</a></li>
        </ul>
        <ul class="navbar-nav align-items-lg-center gap-2" id="auth-nav">
          <li class="nav-item d-none d-lg-block">
            <a class="nav-link text-primary fw-bold" href="/pages/create-post.html">
              <i class="bi bi-pencil-square me-1"></i> Write
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  `;
}

function renderFooter() {
  return `
  <footer class="py-5 mt-5 border-top border-secondary border-opacity-10">
    <div class="container text-center">
      <div class="mb-3">
        <i class="bi bi-feather text-primary fs-4"></i>
      </div>
      <div class="d-flex justify-content-center gap-3 mb-3" style="font-size: 0.85rem;">
        <a href="/pages/faq.html" class="text-muted text-decoration-none hover-accent">FAQ</a>
        <span class="text-muted opacity-25">|</span>
        <a href="/pages/guidelines.html" class="text-muted text-decoration-none hover-accent">Guidelines</a>
        <span class="text-muted opacity-25">|</span>
        <a href="/pages/about.html" class="text-muted text-decoration-none hover-accent">About</a>
      </div>
      <p class="text-muted mb-2" style="font-size: 0.9rem;">&copy; ${new Date().getFullYear()} FanBlog. All rights reserved.</p>
      <p class="text-muted mb-0" style="font-size: 0.85rem;">
        Developed by <a href="https://irfan-syarifudin.vercel.app" target="_blank" rel="noopener noreferrer" class="text-primary text-decoration-none fw-600">Irfan Syarifudin</a>
      </p>
    </div>
  </footer>
  `;
}

function renderLoader() {
  return `
  <div class="loading-overlay" id="global-loader">
    <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  `;
}

function formatDate(dateString) {
  if (!dateString) return '';
  const d = new Date(dateString);
  if (isNaN(d.getTime())) return dateString;

  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const dayName = days[d.getDay()];
  
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  
  return `${dayName}, ${day}/${month}/${year} - ${hours}:${minutes} WIB`;
}

document.addEventListener('DOMContentLoaded', () => {
  const navbarEl = document.getElementById('navbar-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  
  if (navbarEl) navbarEl.innerHTML = renderNavbar();
  if (footerEl) footerEl.innerHTML = renderFooter();
  
  document.body.insertAdjacentHTML('beforeend', renderLoader());
  updateNavbar();
});
