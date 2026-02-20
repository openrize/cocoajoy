// ==========================================
// CocoaJoy – Main JS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    // --- Navbar scroll effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);
        const scrollTop = document.querySelector('.scroll-top');
        if (scrollTop) scrollTop.classList.toggle('visible', window.scrollY > 400);
    });

    // --- Mobile hamburger ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger?.addEventListener('click', () => {
        navLinks?.classList.toggle('open');
    });

    // --- Scroll to top button ---
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top'; scrollTopBtn.innerHTML = '↑'; scrollTopBtn.title = 'Back to top';
    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.body.appendChild(scrollTopBtn);

    // --- Intersection Observer for reveal animations ---
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));

    // --- Homepage featured products grid ---
    const homeGrid = document.getElementById('homeFeaturedGrid');
    if (homeGrid) {
        const featured = PRODUCTS.filter(p => p.featured).slice(0, 6);
        homeGrid.innerHTML = featured.map(p => productCardHTML(p)).join('');
    }

    // --- Shop page ---
    initShopPage();

    // --- Product page ---
    initProductPage();

    // --- Blog page ---
    initBlogPage();

    // --- FAQ accordion ---
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
            if (!isOpen) item.classList.add('open');
        });
    });

    // --- Contact form ---
    const contactForm = document.getElementById('contactForm');
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('✉️ Message sent! We\'ll reply within 24 hours.');
        contactForm.reset();
    });

    // --- Active nav link ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href')?.split('#')[0];
        link.classList.toggle('active', href === currentPage);
    });
});

// --- Product Card HTML Builder ---
function productCardHTML(p) {
    const badgeHTML = p.badge ? `<div class="product-badge badge-${p.badge}">${p.badge === 'bestseller' ? '🏆 Bestseller' : p.badge === 'new' ? '✨ New' : p.badge === 'seasonal' ? '🌟 Seasonal' : p.badge === 'vegan' ? '🌱 Vegan' : p.badge === 'limited' ? '⏳ Limited' : p.badge}</div>` : '';
    const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');
    const bgColor = p.colors ? p.colors[0] : 'linear-gradient(135deg,#f5e9d7,#eedbc0)';
    return `
    <div class="product-card reveal">
      <a href="product.html?id=${p.id}" style="text-decoration:none">
        <div class="product-img" style="background:${bgColor}">
          ${badgeHTML}
          <span class="product-emoji">${p.emoji}</span>
        </div>
      </a>
      <div class="product-info">
        <div class="product-rating">
          <span class="product-stars">${stars}</span>
          <span class="product-reviews">(${p.reviews})</span>
        </div>
        <a href="product.html?id=${p.id}" style="text-decoration:none">
          <h3 class="product-name">${p.name}</h3>
        </a>
        <p class="product-desc">${p.desc}</p>
        <div class="product-footer">
          <span class="product-price">$${p.price.toFixed(2)}</span>
          <button class="add-to-cart" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>
    </div>`;
}

// --- Shop Page ---
function initShopPage() {
    const shopGrid = document.getElementById('shopGrid');
    const filterTabs = document.querySelectorAll('.filter-tab');
    const sortSelect = document.getElementById('sortSelect');
    if (!shopGrid) return;

    let currentFilter = 'all';

    function renderShop() {
        let items = [...PRODUCTS];
        if (currentFilter !== 'all') items = items.filter(p => p.category === currentFilter);
        const sort = sortSelect?.value || 'featured';
        if (sort === 'price-asc') items.sort((a, b) => a.price - b.price);
        if (sort === 'price-desc') items.sort((a, b) => b.price - a.price);
        if (sort === 'rating') items.sort((a, b) => b.rating - a.rating);
        shopGrid.innerHTML = items.map(p => productCardHTML(p)).join('');
        // Re-apply reveal observer
        shopGrid.querySelectorAll('.reveal').forEach(el => {
            setTimeout(() => el.classList.add('visible'), 50);
        });
        // Update hash for category anchors
        if (currentFilter !== 'all') history.replaceState(null, '', `#${currentFilter}`);
    }

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.dataset.filter;
            renderShop();
        });
    });
    sortSelect?.addEventListener('change', renderShop);

    // Check URL hash for category
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        const matchTab = document.querySelector(`.filter-tab[data-filter="${hash}"]`);
        if (matchTab) { filterTabs.forEach(t => t.classList.remove('active')); matchTab.classList.add('active'); currentFilter = hash; }
    }
    renderShop();
}

// --- Product Page ---
function initProductPage() {
    const pName = document.getElementById('pName');
    if (!pName) return;
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id')) || 1;
    const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];

    document.title = `${product.name} – CocoaJoy`;
    document.getElementById('pBreadcrumb').textContent = product.name;
    document.getElementById('pEmoji').textContent = product.emoji;
    document.getElementById('pEmoji').parentElement.style.background = product.colors ? product.colors[0] : '';
    document.getElementById('pName').textContent = product.name;
    document.getElementById('pPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('pDesc').textContent = product.longDesc || product.desc;
    document.getElementById('pRatingStars').textContent = '★'.repeat(Math.floor(product.rating));
    document.getElementById('pRatingCount').textContent = `(${product.reviews} reviews)`;
    document.getElementById('pBadge').textContent = product.badge ? product.badge.toUpperCase() : '';
    document.getElementById('pBadge').className = `product-badge badge-${product.badge}`;

    // Features
    const fList = document.getElementById('pFeatures');
    if (fList && product.features) fList.innerHTML = product.features.map(f => `<li>${f}</li>`).join('');

    // Sizes
    const sBox = document.getElementById('pSizes');
    if (sBox && product.sizes) {
        sBox.innerHTML = product.sizes.map((s, i) => `<button class="size-opt ${i === 0 ? 'selected' : ''}" onclick="selectSize(this,'${s}')">${s}</button>`).join('');
    }

    // Add to cart button
    document.getElementById('pAddToCart')?.addEventListener('click', () => {
        const selectedSize = document.querySelector('.size-opt.selected')?.textContent;
        const qty = parseInt(document.getElementById('pQty')?.value || 1);
        for (let i = 0; i < qty; i++) addToCart(product.id, selectedSize);
    });

    // Related products
    const relGrid = document.getElementById('relatedGrid');
    if (relGrid) {
        const related = PRODUCTS.filter(p => p.id !== id && p.category === product.category).slice(0, 3);
        relGrid.innerHTML = related.length ? related.map(p => productCardHTML(p)).join('') : PRODUCTS.slice(0, 3).map(p => productCardHTML(p)).join('');
        relGrid.querySelectorAll('.reveal').forEach(el => setTimeout(() => el.classList.add('visible'), 50));
    }
}

function selectSize(el, size) {
    document.querySelectorAll('.size-opt').forEach(b => b.classList.remove('selected'));
    el.classList.add('selected');
}

function changeProductQty(delta) {
    const input = document.getElementById('pQty');
    if (!input) return;
    const val = Math.max(1, parseInt(input.value) + delta);
    input.value = val;
}

// --- Blog Page ---
function initBlogPage() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;
    blogGrid.innerHTML = BLOG_POSTS.map(post => `
    <div class="blog-card reveal">
      <div class="blog-img" style="background:${post.color}">
        <span class="blog-category">${post.category}</span>
        <span style="font-size:3rem">${post.emoji}</span>
      </div>
      <div class="blog-content">
        <div class="blog-meta"><span>📅 ${post.date}</span><span>⏱ ${post.read} read</span></div>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <a href="#" class="blog-read-more">Read More →</a>
      </div>
    </div>`).join('');
    blogGrid.querySelectorAll('.reveal').forEach(el => setTimeout(() => el.classList.add('visible'), 50));
}
