const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwTfzjHnuQohWZdCe_4SsF2xS63lPAuEjysl9EOorjW5twz4VpvrUspWLigeIlzJZcfCw/exec';

function sanitizeHTML(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const dangerousTags = ['script', 'iframe', 'object', 'embed', 'form', 'input', 'textarea', 'select', 'button', 'link', 'style', 'meta', 'base', 'applet'];
  dangerousTags.forEach(tag => {
    doc.querySelectorAll(tag).forEach(el => el.remove());
  });
  doc.querySelectorAll('*').forEach(el => {
    for (const attr of [...el.attributes]) {
      const name = attr.name.toLowerCase();
      if (name.startsWith('on') || (attr.value && attr.value.trim().toLowerCase().startsWith('javascript:'))) {
        el.removeAttribute(attr.name);
      }
    }
    ['href', 'src', 'action', 'formaction', 'data'].forEach(attrName => {
      const val = el.getAttribute(attrName);
      if (val && val.trim().toLowerCase().startsWith('javascript:')) {
        el.removeAttribute(attrName);
      }
    });
  });
  return doc.body.innerHTML;
}

function validateInput(value, maxLength = 500) {
  if (typeof value !== 'string') return '';
  return value.trim().substring(0, maxLength);
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

class API {
  static _pendingRequests = {};

  static async request(method, data = {}, showLoader = true) {
    if (showLoader) showLoading();
    try {
      let url = SCRIPT_URL;
      let options = { redirect: 'follow' };

      if (method === 'GET') {
        const queryParams = new URLSearchParams(data).toString();
        url = `${SCRIPT_URL}?${queryParams}`;
        options.method = 'GET';
      } else {
        options.method = 'POST';
        options.headers = { 'Content-Type': 'text/plain;charset=utf-8' };
        options.body = JSON.stringify(data);
      }

      const response = await fetch(url, options);
      const result = await response.json();
      hideLoading();
      return result;
    } catch (error) {
      hideLoading();
      console.error("API Error:", error);
      return { success: false, message: 'Network error or invalid response.' };
    }
  }

  static CACHE_DURATION = 1000 * 60 * 5;

  static async getPosts(forceRefresh = false) {
    const cacheKey = 'posts_cache';
    const cached = sessionStorage.getItem(cacheKey);
    const cacheTime = sessionStorage.getItem(cacheKey + '_time');

    if (!forceRefresh && cached && (Date.now() - cacheTime < this.CACHE_DURATION)) {
      return JSON.parse(cached);
    }


    if (this._pendingRequests[cacheKey]) {
      return this._pendingRequests[cacheKey];
    }

    this._pendingRequests[cacheKey] = (async () => {
      const res = await this.request('GET', { action: 'get_posts' });
      if (res.success) {
        sessionStorage.setItem(cacheKey, JSON.stringify(res));
        sessionStorage.setItem(cacheKey + '_time', Date.now());
      }
      delete this._pendingRequests[cacheKey];
      return res;
    })();

    return this._pendingRequests[cacheKey];
  }

  static async getUsers(forceRefresh = false) {
    const cacheKey = 'users_cache';
    const cached = sessionStorage.getItem(cacheKey);
    const cacheTime = sessionStorage.getItem(cacheKey + '_time');

    if (!forceRefresh && cached && (Date.now() - cacheTime < this.CACHE_DURATION)) {
      return JSON.parse(cached);
    }

    const res = await this.request('GET', { action: 'get_users' });
    if (res.success) {
      sessionStorage.setItem(cacheKey, JSON.stringify(res));
      sessionStorage.setItem(cacheKey + '_time', Date.now());
    }
    return res;
  }

  static clearCache() {
    sessionStorage.removeItem('posts_cache');
    sessionStorage.removeItem('posts_cache_time');
    sessionStorage.removeItem('users_cache');
    sessionStorage.removeItem('users_cache_time');
  }

  static async login(username, password) {
    return this.request('POST', { action: 'login', username, password });
  }

  static async register(username, email, password) {
    return this.request('POST', { action: 'register', username, email, password });
  }

  static async createPost(postData) {
    this.clearCache();
    postData.title = validateInput(postData.title, 200);
    postData.category = validateInput(postData.category, 100);
    postData.thumbnail = validateInput(postData.thumbnail, 1000);
    if (postData.content) postData.content = sanitizeHTML(postData.content);
    return this.request('POST', { action: 'create_post', ...postData });
  }

  static async updatePost(postData) {
    this.clearCache();
    if (postData.title) postData.title = validateInput(postData.title, 200);
    if (postData.category) postData.category = validateInput(postData.category, 100);
    if (postData.thumbnail) postData.thumbnail = validateInput(postData.thumbnail, 1000);
    if (postData.content) postData.content = sanitizeHTML(postData.content);
    return this.request('POST', { action: 'update_post', ...postData });
  }

  static async deletePost(id, userId) {
    this.clearCache();
    return this.request('POST', { action: 'delete_post', id, user_id: userId });
  }

  static async deleteUser(id, adminId) {
    this.clearCache();
    return this.request('POST', { action: 'delete_user', id, admin_id: adminId });
  }

  static async updateProfile(profileData) {
    if (profileData.avatar && profileData.avatar.trim() !== '') {
      const url = profileData.avatar.trim().toLowerCase();
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        return { success: false, message: 'Avatar URL must start with http:// or https://' };
      }
    }
    if (profileData.bio) {
      profileData.bio = profileData.bio.substring(0, 500);
    }
    return this.request('POST', { action: 'update_profile', ...profileData });
  }
}

let _loadingCount = 0;

function showLoading() {
  _loadingCount++;
  const loader = document.getElementById('global-loader');
  if (loader) {
    loader.classList.remove('done');
    loader.classList.add('active');
  }
}

function hideLoading() {
  _loadingCount = Math.max(0, _loadingCount - 1);
  if (_loadingCount > 0) return;
  
  const loader = document.getElementById('global-loader');
  if (loader) {
    loader.classList.remove('active');
    loader.classList.add('done');

    setTimeout(() => {
      if (!loader.classList.contains('active')) {
        loader.classList.remove('done');
        loader.style.width = '0%';
      }
    }, 600);
  }
}

function showToast(icon, title, text = '') {
  if (typeof Swal !== 'undefined') {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    });
  } else {
    alert(`${title}: ${text}`);
  }
}
