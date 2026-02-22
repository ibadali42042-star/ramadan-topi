/* ============================================================
   Al-Noor Topi House — script.js
   ============================================================ */

// ============================================================
// DATA — Products & Gallery Items
// ============================================================
const products = [
  {
    id: 1, name: "Classic White Topi",
    desc: "Pure cotton, soft weave, perfect for daily namaz. Available in all sizes.",
    price: 350, old: 500, badge: "Sale",
    color1: "#f9f7f0", color2: "#e8e0c8", pattern: "classic", bg: "#f5f0e2"
  },
  {
    id: 2, name: "Zardozi Royal Cap",
    desc: "Luxurious gold zardozi embroidery on premium velvet. A masterpiece for Eid.",
    price: 1200, old: 1800, badge: "Premium",
    color1: "#1a4030", color2: "#c9963a", pattern: "zardozi", bg: "#f0f5f0"
  },
  {
    id: 3, name: "Embroidered Kufiya",
    desc: "Traditional Islamic geometric embroidery in green and gold thread.",
    price: 650, old: 850, badge: "New",
    color1: "#1a5c38", color2: "#e8c97a", pattern: "embroidered", bg: "#f0f7f3"
  },
  {
    id: 4, name: "Kids Ramadan Topi",
    desc: "Soft, lightweight cap designed for children aged 3–12. Colorful Islamic motifs.",
    price: 250, old: 350, badge: "Hot",
    color1: "#2980b9", color2: "#e8c97a", pattern: "kids", bg: "#f0f5fa"
  },
  {
    id: 5, name: "Crescent & Star Cap",
    desc: "Elegant crescent moon and star design on pure white cotton. A symbol of faith.",
    price: 450, old: 600, badge: "",
    color1: "#f5f5f5", color2: "#c9963a", pattern: "crescent", bg: "#f8f8f5"
  },
  {
    id: 6, name: "Sindhi Ajrak Topi",
    desc: "Traditional Sindhi-inspired patterns woven into a contemporary Islamic cap.",
    price: 550, old: 700, badge: "",
    color1: "#8B1A1A", color2: "#c9963a", pattern: "sindhi", bg: "#faf0f0"
  },
  {
    id: 7, name: "Velvet Namaz Cap",
    desc: "Plush maroon velvet with silver thread detailing. Ideal for Taraweeh prayers.",
    price: 800, old: 1000, badge: "Premium",
    color1: "#6b1c1c", color2: "#c0c0c0", pattern: "velvet", bg: "#f7f0f0"
  },
  {
    id: 8, name: "Net Embroidery Topi",
    desc: "Delicate net fabric with intricate white-on-white embroidery. Ultra-breathable.",
    price: 480, old: 600, badge: "New",
    color1: "#faf8f5", color2: "#d4c5a0", pattern: "net", bg: "#fafaf7"
  }
];

const galleryItems = [
  { name: "Mashrabiya Weave",  desc: "Intricate lattice pattern inspired by Islamic architecture", color1: "#1a3460", color2: "#c9963a", pattern: "mashrabiya" },
  { name: "Calligraphy Cap",   desc: "Arabic calligraphy woven into the fabric",                   color1: "#1a5c38", color2: "#e8c97a", pattern: "calligraphy" },
  { name: "Floral Embroidery", desc: "Botanical Islamic flower motifs",                            color1: "#f5f0e0", color2: "#c9963a", pattern: "floral"      },
  { name: "Geometric Gold",    desc: "Bold geometric patterns in gold thread",                     color1: "#0d1f3c", color2: "#e8c97a", pattern: "geometric"   },
  { name: "Ivory Crochet",     desc: "Lightweight open-knit summer topi",                          color1: "#f8f4ec", color2: "#c9963a", pattern: "crochet"     },
  { name: "Ottoman Damask",    desc: "Ottoman empire inspired damask silk",                        color1: "#4a1a1a", color2: "#d4af37", pattern: "damask"      },
  { name: "Plain Ihram",       desc: "Pure white minimal cap for Haji feel",                       color1: "#fafafa", color2: "#e0e0e0", pattern: "plain"       },
  { name: "Peacock Thread",    desc: "Peacock motifs in multicolored silk thread",                  color1: "#1a4a40", color2: "#e8c97a", pattern: "peacock"     }
];

// ============================================================
// SVG CAP GENERATOR
// ============================================================
function capSVG(c1, c2, pattern, size = 140) {
  const templates = {

    classic: `
      <ellipse cx="70" cy="100" rx="62" ry="12" fill="rgba(0,0,0,0.12)"/>
      <path d="M8 95 Q8 40 70 28 Q132 40 132 95Z" fill="${c1}" stroke="${c2}" stroke-width="1.5"/>
      <path d="M8 95 Q8 85 70 82 Q132 85 132 95Z" fill="${c2}" opacity="0.3"/>
      <path d="M70 28 Q60 60 55 95" stroke="${c2}" stroke-width="0.8" fill="none" opacity="0.4"/>
      <path d="M70 28 Q80 60 85 95" stroke="${c2}" stroke-width="0.8" fill="none" opacity="0.4"/>
      <path d="M35 60 Q70 52 105 60" stroke="${c2}" stroke-width="0.8" fill="none" opacity="0.4"/>`,

    zardozi: `
      <ellipse cx="70" cy="100" rx="62" ry="12" fill="rgba(0,0,0,0.12)"/>
      <path d="M8 95 Q8 40 70 28 Q132 40 132 95Z" fill="${c1}" stroke="${c2}" stroke-width="2"/>
      <path d="M8 95 Q8 85 70 82 Q132 85 132 95Z" fill="${c2}" opacity="0.4"/>
      <polygon points="70,35 74,46 86,46 76,53 80,65 70,58 60,65 64,53 54,46 66,46" fill="${c2}"/>
      <circle cx="70" cy="50" r="8" fill="none" stroke="${c2}" stroke-width="1.2"/>
      <circle cx="40" cy="70" r="5" fill="none" stroke="${c2}" stroke-width="1"/>
      <circle cx="100" cy="70" r="5" fill="none" stroke="${c2}" stroke-width="1"/>`,

    embroidered: `
      <ellipse cx="70" cy="100" rx="62" ry="12" fill="rgba(0,0,0,0.12)"/>
      <path d="M8 95 Q8 40 70 28 Q132 40 132 95Z" fill="${c1}" stroke="${c2}" stroke-width="2"/>
      <path d="M8 95 Q8 85 70 82 Q132 85 132 95Z" fill="${c2}" opacity="0.35"/>
      <path d="M30 75 Q50 55 70 50 Q90 55 110 75" stroke="${c2}" stroke-width="1.5" fill="none"/>
      <path d="M40 85 Q60 65 70 62 Q80 65 100 85" stroke="${c2}" stroke-width="1.5" fill="none" opacity="0.7"/>
      <circle cx="70" cy="38" r="4" fill="${c2}"/>`,

    kids: `
      <ellipse cx="70" cy="100" rx="62" ry="12" fill="rgba(0,0,0,0.12)"/>
      <path d="M8 95 Q8 40 70 28 Q132 40 132 95Z" fill="${c1}" stroke="${c2}" stroke-width="2"/>
      <path d="M8 95 Q8 85 70 82 Q132 85 132 95Z" fill="${c2}" opacity="0.4"/>
      <circle cx="50" cy="55" r="6" fill="${c2}" opacity="0.8"/>
      <circle cx="90" cy="55" r="6" fill="${c2}" opacity="0.8"/>
      <path d="M60 70 Q70 78 80 70" stroke="${c2}" stroke-width="2" fill="none"/>
      <polygon points="70,35 73,43 82,43 75,48 78,56 70,51 62,56 65,48 58,43 67,43" fill="rgba(255,255,255,0.6)"/>`,

    crescent: `
      <ellipse cx="70" cy="100" rx="62" ry="12" fill="rgba(0,0,0,0.12)"/>
      <path d="M8 95 Q8 40 70 28 Q132 40 132 95Z" fill="${c1}" stroke="${c2}" stroke-width="1.5"/>
      <path d="M8 95 Q8 85 70 82 Q132 85 132 95Z" fill="${c2}" opacity="0.25"/>
      <path d="M65 38 A14 14 0 1 1 65 66 A9 9 0 1 0 65 38Z" fill="${c2}"/>
      <polygon points="82,42 84,48 90,48 85,51 87,57 82,54 77,57 79,51 74,48 80,48" fill="${c2}" opacity="0.9"/>`,

    sindhi: `
      <ellipse cx="70" cy="100" rx="62" ry="12" fill="rgba(0,0,0,0.12)"/>
      <path d="M8 95 Q8 40 70 28 Q132 40 132 95Z" fill="${c1}" stroke="${c2}" stroke-width="2"/>
      <path d="M8 95 Q8 85 70 82 Q132 85 132 95Z" fill="${c2}" opacity="0.35"/>
      <rect x="30" y="50" width="10" height="10" rx="2" fill="${c2}" opacity="0.7" transform="rotate(45 35 55)"/>
      <rect x="60" y="38" width="10" height="10" rx="2" fill="${c2}" opacity="0.7" transform="rotate(45 65 43)"/>
      <rect x="90" y="50" width="10" height="10" rx="2" fill="${c2}" opacity="0.7" transform="rotate(45 95 55)"/>
      <rect x="45" y="67" width="8" height="8" rx="2" fill="${c2}" opacity="0.5" transform="rotate(45 49 71)"/>
      <rect x="78" y="67" width="8" height="8" rx="2" fill="${c2}" opacity="0.5" transform="rotate(45 82 71)"/>`,

    velvet: `
      <ellipse cx="70" cy="100" rx="62" ry="12" fill="rgba(0,0,0,0.15)"/>
      <path d="M8 95 Q8 40 70 28 Q132 40 132 95Z" fill="${c1}" stroke="${c2}" stroke-width="2"/>
      <path d="M8 95 Q8 85 70 82 Q132 85 132 95Z" fill="${c2}" opacity="0.3"/>
      <path d="M25 80 Q70 60 115 80" stroke="${c2}" stroke-width="1.5" fill="none"/>
      <path d="M15 90 Q70 75 125 90" stroke="${c2}" stroke-width="1.5" fill="none"/>
      <circle cx="70" cy="40" r="5" fill="${c2}"/>
      <circle cx="70" cy="40" r="9" fill="none" stroke="${c2}" stroke-width="0.8"/>`,

    net: `
      <ellipse cx="70" cy="100" rx="62" ry="12" fill="rgba(0,0,0,0.08)"/>
      <path d="M8 95 Q8 40 70 28 Q132 40 132 95Z" fill="${c1}" stroke="${c2}" stroke-width="1.5"/>
      <path d="M8 95 Q8 85 70 82 Q132 85 132 95Z" fill="${c2}" opacity="0.25"/>
      ${[0,1,2,3,4].map(i => `<path d="M${20+i*22} 95 Q${30+i*22} 55 ${40+i*22} 30" stroke="${c2}" stroke-width="0.6" fill="none" opacity="0.5"/>`).join('')}
      ${[0,1,2].map(i => `<path d="M10 ${50+i*18} Q70 ${44+i*18} 130 ${50+i*18}" stroke="${c2}" stroke-width="0.6" fill="none" opacity="0.5"/>`).join('')}`,

    mashrabiya: `
      <ellipse cx="70" cy="100" rx="62" ry="12" fill="rgba(0,0,0,0.12)"/>
      <path d="M8 95 Q8 40 70 28 Q132 40 132 95Z" fill="${c1}" stroke="${c2}" stroke-width="1.5"/>
      <path d="M8 95 Q8 85 70 82 Q132 85 132 95Z" fill="${c2}" opacity="0.3"/>
      <polygon points="70,38 76,52 92,52 79,61 84,76 70,67 56,76 61,61 48,52 64,52" fill="none" stroke="${c2}" stroke-width="1.2"/>
      <circle cx="70" cy="57" r="6" fill="none" stroke="${c2}" stroke-width="0.8"/>`,

    calligraphy: `
      <ellipse cx="70" cy="100" rx="62" ry="12" fill="rgba(0,0,0,0.12)"/>
      <path d="M8 95 Q8 40 70 28 Q132 40 132 95Z" fill="${c1}" stroke="${c2}" stroke-width="1.5"/>
      <path d="M8 95 Q8 85 70 82 Q132 85 132 95Z" fill="${c2}" opacity="0.3"/>
      <text x="70" y="62" text-anchor="middle" fill="${c2}" font-family="serif" font-size="18" opacity="0.85">الله</text>
      <path d="M35 72 Q70 66 105 72" stroke="${c2}" stroke-width="1" fill="none" opacity="0.5"/>`,

    floral: `
      <ellipse cx="70" cy="100" rx="62" ry="12" fill="rgba(0,0,0,0.1)"/>
      <path d="M8 95 Q8 40 70 28 Q132 40 132 95Z" fill="${c1}" stroke="${c2}" stroke-width="1.5"/>
      <path d="M8 95 Q8 85 70 82 Q132 85 132 95Z" fill="${c2}" opacity="0.25"/>
      <circle cx="70" cy="50" r="8" fill="${c2}" opacity="0.3"/>
      ${[0,60,120,180,240,300].map(a =>
        `<ellipse cx="${70+10*Math.cos(a*Math.PI/180)}" cy="${50+10*Math.sin(a*Math.PI/180)}"
         rx="5" ry="3" fill="${c2}" opacity="0.5"
         transform="rotate(${a} ${70+10*Math.cos(a*Math.PI/180)} ${50+10*Math.sin(a*Math.PI/180)})"/>`
      ).join('')}`,

    geometric: `
      <ellipse cx="70" cy="100" rx="62" ry="12" fill="rgba(0,0,0,0.15)"/>
      <path d="M8 95 Q8 40 70 28 Q132 40 132 95Z" fill="${c1}" stroke="${c2}" stroke-width="2"/>
      <path d="M8 95 Q8 85 70 82 Q132 85 132 95Z" fill="${c2}" opacity="0.35"/>
      <polygon points="70,35 85,58 70,50 55,58" fill="none" stroke="${c2}" stroke-width="1.2"/>
      <polygon points="70,50 85,68 70,80 55,68" fill="none" stroke="${c2}" stroke-width="1.2"/>
      <line x1="70" y1="35" x2="70" y2="80" stroke="${c2}" stroke-width="0.8" opacity="0.5"/>`,

    crochet: `
      <ellipse cx="70" cy="100" rx="62" ry="12" fill="rgba(0,0,0,0.08)"/>
      <path d="M8 95 Q8 40 70 28 Q132 40 132 95Z" fill="${c1}" stroke="${c2}" stroke-width="1.5"/>
      <path d="M8 95 Q8 85 70 82 Q132 85 132 95Z" fill="${c2}" opacity="0.2"/>
      ${Array.from({length: 20}, (_, i) => {
        const x = 20 + (i % 7) * 16;
        const y = 40 + Math.floor(i / 7) * 18;
        return `<circle cx="${x}" cy="${y}" r="4" fill="none" stroke="${c2}" stroke-width="0.8" opacity="0.5"/>`;
      }).join('')}`,

    damask: `
      <ellipse cx="70" cy="100" rx="62" ry="12" fill="rgba(0,0,0,0.15)"/>
      <path d="M8 95 Q8 40 70 28 Q132 40 132 95Z" fill="${c1}" stroke="${c2}" stroke-width="2"/>
      <path d="M8 95 Q8 85 70 82 Q132 85 132 95Z" fill="${c2}" opacity="0.35"/>
      <path d="M55 48 Q62 38 70 42 Q78 38 85 48 Q95 60 85 68 Q78 74 70 70 Q62 74 55 68 Q45 60 55 48Z"
            fill="none" stroke="${c2}" stroke-width="1.2"/>`,

    plain: `
      <ellipse cx="70" cy="100" rx="62" ry="12" fill="rgba(0,0,0,0.06)"/>
      <path d="M8 95 Q8 40 70 28 Q132 40 132 95Z" fill="${c1}" stroke="${c2}" stroke-width="1"/>
      <path d="M8 95 Q8 88 70 85 Q132 88 132 95Z" fill="${c2}" opacity="0.15"/>`,

    peacock: `
      <ellipse cx="70" cy="100" rx="62" ry="12" fill="rgba(0,0,0,0.12)"/>
      <path d="M8 95 Q8 40 70 28 Q132 40 132 95Z" fill="${c1}" stroke="${c2}" stroke-width="1.5"/>
      <path d="M8 95 Q8 85 70 82 Q132 85 132 95Z" fill="${c2}" opacity="0.3"/>
      <ellipse cx="70" cy="52" rx="12" ry="16" fill="none" stroke="${c2}" stroke-width="1.2"/>
      <circle cx="70" cy="52" r="4" fill="${c2}" opacity="0.6"/>
      <path d="M58 48 Q65 40 70 52" stroke="${c2}" stroke-width="0.8" fill="none"/>
      <path d="M82 48 Q75 40 70 52" stroke="${c2}" stroke-width="0.8" fill="none"/>`
  };

  const tmpl = templates[pattern] || templates.classic;
  return `<svg viewBox="0 0 140 ${size}" xmlns="http://www.w3.org/2000/svg">${tmpl}</svg>`;
}

// ============================================================
// RENDER PRODUCTS
// ============================================================
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const badgeClass = { Sale: '', New: 'new', Hot: 'hot', Premium: '' };

  grid.innerHTML = products.map(p => `
    <div class="product-card reveal">
      ${p.badge ? `<div class="product-badge ${badgeClass[p.badge] || ''}">${p.badge}</div>` : ''}
      <div class="product-img" style="background:${p.bg}">
        ${capSVG(p.color1, p.color2, p.pattern)}
      </div>
      <div class="product-body">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div class="product-price">
            <sup>Rs.</sup>${p.price.toLocaleString()}
            ${p.old ? `<span class="old">Rs.${p.old.toLocaleString()}</span>` : ''}
          </div>
          <button class="add-cart-btn" id="btn-${p.id}" onclick="addToCart(${p.id})">+ Add</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================================
// RENDER GALLERY
// ============================================================
function renderGallery() {
  const grid = document.getElementById('galleryGrid');

  grid.innerHTML = galleryItems.map((g, i) => `
    <div class="gallery-item" onclick="openLightbox(${i})">
      ${capSVG(g.color1, g.color2, g.pattern, 120)}
      <div class="gallery-label">${g.name}</div>
    </div>
  `).join('');
}

// ============================================================
// CART STATE
// ============================================================
let cart = [];
let lightboxIdx = null;

// ============================================================
// CART FUNCTIONS
// ============================================================
function addToCart(id) {
  const prod = products.find(p => p.id === id);
  const existing = cart.find(i => i.id === id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...prod, qty: 1 });
  }

  updateCart();
  showToast(`🧢 ${prod.name} added to cart!`);

  const btn = document.getElementById('btn-' + id);
  if (btn) {
    btn.textContent = '✓ Added';
    btn.classList.add('added');
    setTimeout(() => { btn.textContent = '+ Add'; btn.classList.remove('added'); }, 1800);
  }
}

function updateCart() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);

  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartTotal').textContent = 'Rs. ' + total.toLocaleString();

  const empty    = document.getElementById('cartEmpty');
  const totalSec = document.getElementById('cartTotalSection');

  if (cart.length === 0) {
    empty.style.display    = 'block';
    totalSec.style.display = 'none';
  } else {
    empty.style.display    = 'none';
    totalSec.style.display = 'block';
  }

  document.getElementById('cartItems').innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-thumb">${capSVG(item.color1, item.color2, item.pattern, 60)}</div>
      <div style="flex:1">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">Rs. ${(item.price * item.qty).toLocaleString()}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <div class="cart-remove" onclick="removeFromCart(${item.id})">🗑</div>
    </div>
  `).join('');
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else updateCart();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCart();
}

function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
}

function checkoutWhatsApp() {
  if (cart.length === 0) return;
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  let msg = '🌙 *Ramadan Mubarak!*\n\n*New Order from Al-Noor Topi House Website*\n\n';
  cart.forEach(i => {
    msg += `• ${i.name} x${i.qty} = Rs. ${(i.price * i.qty).toLocaleString()}\n`;
  });
  msg += `\n*Total: Rs. ${total.toLocaleString()}*\n\nPlease confirm my order. JazakAllah Khair 🤲`;

  window.open('https://wa.me/923001234567?text=' + encodeURIComponent(msg), '_blank');
}

// ============================================================
// LIGHTBOX
// ============================================================
function openLightbox(idx) {
  lightboxIdx = idx;
  const g = galleryItems[idx];

  document.getElementById('lightboxSvg').innerHTML  = capSVG(g.color1, g.color2, g.pattern, 200);
  document.getElementById('lightboxName').textContent = g.name;
  document.getElementById('lightboxDesc').textContent = g.desc;
  document.getElementById('lightbox').classList.add('open');
}

function closeLightbox(e) {
  if (!e || e.target === document.getElementById('lightbox')) {
    document.getElementById('lightbox').classList.remove('open');
  }
}

function addToCartFromLightbox() {
  if (lightboxIdx === null) return;
  const g = galleryItems[lightboxIdx];

  const fakeProduct = {
    id: 100 + lightboxIdx, name: g.name,
    desc: g.desc, price: 450, old: null, badge: '',
    color1: g.color1, color2: g.color2,
    pattern: g.pattern, bg: '#f5f5f5', qty: 1
  };

  const existing = cart.find(i => i.id === fakeProduct.id);
  if (existing) existing.qty++;
  else cart.push({ ...fakeProduct });

  updateCart();
  showToast(`🧢 ${g.name} added to cart!`);
  document.getElementById('lightbox').classList.remove('open');
}

// ============================================================
// WHATSAPP
// ============================================================
function openWhatsApp() {
  const msg = '🌙 Assalam-o-Alaikum! I want to order Ramadan Topi from Al-Noor Topi House. Please share available designs and prices. JazakAllah Khair 🤲';
  window.open('https://wa.me/923001234567?text=' + encodeURIComponent(msg), '_blank');
}

// ============================================================
// CONTACT FORM
// ============================================================
function submitForm() {
  const name  = document.getElementById('contactName').value.trim();
  const phone = document.getElementById('contactPhone').value.trim();
  const msg   = document.getElementById('contactMsg').value.trim();

  if (!name || !phone || !msg) {
    showToast('⚠️ Please fill all fields!');
    return;
  }

  document.getElementById('formSuccess').classList.add('show');
  document.getElementById('contactName').value  = '';
  document.getElementById('contactPhone').value = '';
  document.getElementById('contactMsg').value   = '';

  showToast('✅ Message sent successfully!');
  setTimeout(() => document.getElementById('formSuccess').classList.remove('show'), 5000);
}

// ============================================================
// TOAST NOTIFICATION
// ============================================================
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ============================================================
// MOBILE NAV TOGGLE
// ============================================================
function toggleNav() {
  document.getElementById('navDrawer').classList.toggle('open');
}

// ============================================================
// HERO STARS
// ============================================================
function createStars() {
  const container = document.getElementById('heroStars');

  for (let i = 0; i < 60; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    s.style.cssText = `
      left:             ${Math.random() * 100}%;
      top:              ${Math.random() * 100}%;
      animation-delay:  ${Math.random() * 4}s;
      animation-duration:${2 + Math.random() * 3}s;
      opacity:          ${0.3 + Math.random() * 0.7}
    `;
    container.appendChild(s);
  }
}

// ============================================================
// SCROLL REVEAL
// ============================================================
function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderGallery();
  createStars();
  revealOnScroll();

  window.addEventListener('scroll', revealOnScroll, { passive: true });

  // Stagger animation delays for grid children
  setTimeout(() => {
    document.querySelectorAll(
      '.products-grid .reveal, .gallery-grid .reveal, .features-grid .reveal'
    ).forEach((el, i) => {
      el.style.transitionDelay = (i * 0.08) + 's';
    });
  }, 100);
});