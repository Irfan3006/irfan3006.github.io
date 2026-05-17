const fs = require('fs');
const path = require('path');

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwTfzjHnuQohWZdCe_4SsF2xS63lPAuEjysl9EOorjW5twz4VpvrUspWLigeIlzJZcfCw/exec';

module.exports = async (req, res) => {
  const { slug } = req.query;
  
  const htmlPath = path.join(process.cwd(), 'pages', 'post.html');
  let html = '';
  
  try {
    html = fs.readFileSync(htmlPath, 'utf8');
  } catch (err) {
    console.error('Failed to read post.html template:', err);
    return res.status(500).send('Internal Server Error');
  }

  if (!slug) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.status(200).send(html);
  }

  try {
    const apiRes = await fetch(`${SCRIPT_URL}?action=get_posts`);
    const result = await apiRes.json();

    if (result.success && Array.isArray(result.data)) {
      const post = result.data.find(p => p.slug === slug);
      
      if (post) {
        const postTitle = post.title || 'Post';
        
        let plainContent = 'Baca artikel lengkap di FanBlog.';
        let wordCount = 0;
        let readingTime = 1;
        
        if (post.content) {
          const rawText = post.content
            .replace(/<[^>]*>/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
          
          plainContent = rawText.substring(0, 160);
          if (rawText.length > 160) {
            plainContent += '...';
          }
          
          wordCount = rawText.split(/\s+/).filter(Boolean).length;
          readingTime = Math.ceil(wordCount / 225) || 1;
        }

        const titleWords = postTitle.toLowerCase()
          .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "")
          .split(/\s+/)
          .filter(w => w.length > 3);
        const keywords = Array.from(new Set([
          post.category,
          'fanblog',
          'artikel',
          ...titleWords
        ])).join(', ');
        
        const host = req.headers.host || 'fanblog.web.id';
        const defaultThumb = `https://${host}/assets/img/logo.webp`;
        let postThumbnail = defaultThumb;
        if (post.thumbnail) {
          postThumbnail = post.thumbnail.startsWith('http') 
            ? post.thumbnail 
            : `https://${host}${post.thumbnail}`;
        }

        const canonicalUrl = `https://${host}/pages/post?slug=${encodeURIComponent(slug)}`;

        const jsonLd = {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
          },
          "headline": postTitle,
          "description": plainContent,
          "image": [postThumbnail],
          "datePublished": post.created_at,
          "dateModified": post.updated_at || post.created_at,
          "author": {
            "@type": "Person",
            "name": post.author_name,
            "url": `https://${host}/pages/profile.html?user=${post.author_id}`,
            "jobTitle": "Konten Kreator"
          },
          "publisher": {
            "@type": "Organization",
            "name": "FanBlog",
            "logo": {
              "@type": "ImageObject",
              "url": `https://${host}/assets/img/logo.webp`
            }
          },
          "wordCount": wordCount,
          "inLanguage": "id-ID"
        };

        const advancedMetaTags = `
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="${escapeHtml(post.author_name)}">
  <meta name="keywords" content="${escapeHtml(keywords)}">
  <meta property="og:locale" content="id_ID">
  <meta property="og:site_name" content="FanBlog">
  <meta property="article:published_time" content="${post.created_at}">
  <meta property="article:modified_time" content="${post.updated_at || post.created_at}">
  <meta property="article:section" content="${escapeHtml(post.category)}">
  <meta name="twitter:label1" content="Ditulis Oleh">
  <meta name="twitter:data1" content="${escapeHtml(post.author_name)}">
  <meta name="twitter:label2" content="Estimasi Baca">
  <meta name="twitter:data2" content="${readingTime} menit">`;

        html = html
          .replace('<meta charset="UTF-8">', '<meta charset="UTF-8">' + advancedMetaTags)
          .replace(/<title id="meta-title">.*?<\/title>/, `<title id="meta-title">${escapeHtml(postTitle)} - FanBlog</title>`)
          .replace(/<meta name="description" id="meta-description" content=".*?">/, `<meta name="description" id="meta-description" content="${escapeHtml(plainContent)}">`)
          .replace(/<meta property="og:title" id="og-title" content=".*?">/, `<meta property="og:title" id="og-title" content="${escapeHtml(postTitle)}">`)
          .replace(/<meta property="og:description" id="og-description" content=".*?">/, `<meta property="og:description" id="og-description" content="${escapeHtml(plainContent)}">`)
          .replace(/<meta property="og:image" id="og-image" content=".*?">/, `<meta property="og:image" id="og-image" content="${escapeHtml(postThumbnail)}">`)
          .replace(/<meta property="og:url" id="og-url" content=".*?">/, `<meta property="og:url" id="og-url" content="${escapeHtml(canonicalUrl)}">`)
          .replace(/<meta property="twitter:title" id="tw-title" content=".*?">/, `<meta property="twitter:title" id="tw-title" content="${escapeHtml(postTitle)}">`)
          .replace(/<meta property="twitter:description" id="tw-description" content=".*?">/, `<meta property="twitter:description" id="tw-description" content="${escapeHtml(plainContent)}">`)
          .replace(/<meta property="twitter:image" id="tw-image" content=".*?">/, `<meta property="twitter:image" id="tw-image" content="${escapeHtml(postThumbnail)}">`)
          .replace(/<link rel="canonical" id="canonical-url" href=".*?">/, `<link rel="canonical" id="canonical-url" href="${escapeHtml(canonicalUrl)}">`)
          .replace(/<script type="application\/ld\+json" id="structured-data"><\/script>/, `<script type="application/ld+json" id="structured-data">${JSON.stringify(jsonLd)}</script>`);
      }
    }
  } catch (err) {
    console.error('Error rendering SEO for post:', err);
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  return res.status(200).send(html);
};

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
