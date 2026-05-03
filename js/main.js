// ==========================================
// CocoaJoy – Main JS (portfolio site)
// ==========================================

const SITE_EMAIL = 'openrize@gmail.com';
const SITE_PHONE_DISPLAY = '+1 (224) 377 9143';
const SITE_PHONE_TEL = '+12243779143';

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function subscribeNewsletter() {
    const emailEl = document.getElementById('footerEmail');
    if (!emailEl) return;
    if (!emailEl.value || !emailEl.value.includes('@')) { showToast('Please enter a valid email', 'error'); return; }
    showToast('🎉 Thanks for subscribing!');
    emailEl.value = '';
}

function productContactLinksHTML(productName) {
    const sub = encodeURIComponent(productName ? `Inquiry: ${productName}` : 'Inquiry from CocoaJoy portfolio');
    return `
    <div class="product-contact-mini">
      <a class="product-contact-email" href="mailto:${SITE_EMAIL}?subject=${sub}">${SITE_EMAIL}</a>
      <span class="product-contact-sep" aria-hidden="true">·</span>
      <a class="product-contact-phone" href="tel:${SITE_PHONE_TEL}">${SITE_PHONE_DISPLAY}</a>
    </div>`;
}

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
    const stars = '★'.repeat(Math.floor(p.rating || 5)) + ((p.rating || 5) % 1 >= 0.5 ? '½' : '');
    const bgColor = p.colors ? p.colors[0] : 'linear-gradient(135deg,#f5e9d7,#eedbc0)';
    
    // Check if we should show an image or an emoji
    const imageContent = p.image 
        ? `<img src="${p.image}" alt="${p.name}" class="product-actual-img" onerror="this.src='https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=800'">`
        : `<span class="product-emoji">${p.emoji || '🍫'}</span>`;

    return `
    <div class="product-card reveal">
      <a href="product.html?id=${p.id}" style="text-decoration:none">
        <div class="product-img" style="background:${p.image ? 'white' : bgColor}">
          ${badgeHTML}
          ${imageContent}
        </div>
      </a>
      <div class="product-info">
        <div class="product-rating">
          <span class="product-stars">${stars}</span>
          <span class="product-reviews">(${p.reviews || 0})</span>
        </div>
        <a href="product.html?id=${p.id}" style="text-decoration:none">
          <h3 class="product-name">${p.name}</h3>
        </a>
        <p class="product-desc">${p.desc || p.description || ''}</p>
        ${productContactLinksHTML(p.name)}
        <div class="product-footer">
          <a href="product.html?id=${p.id}" class="btn btn-primary btn-sm">View details</a>
        </div>
      </div>
    </div>`;
}

// --- Shop Page ---
function initShopPage() {
    const shopGrid = document.getElementById('shopGrid');
    const filterTabs = document.querySelectorAll('.filter-tab');
    const sortSelect = document.getElementById('sortSelect');
    const shopSearch = document.getElementById('shopSearch');
    if (!shopGrid) return;

    let currentFilter = 'all';
    let searchQuery = '';
    let currentPage = 1;
    const itemsPerPage = 8;

    function renderShop() {
        let items = [...PRODUCTS];
        if (currentFilter !== 'all') items = items.filter(p => p.category === currentFilter);
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            items = items.filter(p => 
                p.name.toLowerCase().includes(query) || 
                (p.description && p.description.toLowerCase().includes(query)) ||
                (p.desc && p.desc.toLowerCase().includes(query))
            );
        }
        const sort = sortSelect?.value || 'featured';
        if (sort === 'rating') items.sort((a, b) => b.rating - a.rating);

        const totalPages = Math.ceil(items.length / itemsPerPage);
        const start = (currentPage - 1) * itemsPerPage;
        const pagedItems = items.slice(start, start + itemsPerPage);

        shopGrid.innerHTML = pagedItems.map(p => productCardHTML(p)).join('');
        renderPagination('shopPagination', totalPages, currentPage, (page) => {
            currentPage = page;
            renderShop();
            window.scrollTo({ top: shopGrid.offsetTop - 100, behavior: 'smooth' });
        });

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
            currentPage = 1;
            renderShop();
        });
    });
    sortSelect?.addEventListener('change', () => { currentPage = 1; renderShop(); });
    shopSearch?.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        currentPage = 1;
        renderShop();
    });

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
    document.getElementById('pDesc').textContent = product.longDesc || product.desc;
    document.getElementById('pRatingStars').textContent = '★'.repeat(Math.floor(product.rating));
    document.getElementById('pRatingCount').textContent = `(${product.reviews} reviews)`;
    document.getElementById('pBadge').textContent = product.badge ? product.badge.toUpperCase() : '';
    document.getElementById('pBadge').className = `product-badge badge-${product.badge}`;

    // Features
    const fList = document.getElementById('pFeatures');
    if (fList && product.features) fList.innerHTML = product.features.map(f => `<li>${f}</li>`).join('');

    const emailBtn = document.getElementById('pEmailLink');
    if (emailBtn) {
        emailBtn.href = `mailto:${SITE_EMAIL}?subject=${encodeURIComponent('Inquiry: ' + product.name)}`;
    }

    // Related products
    const relGrid = document.getElementById('relatedGrid');
    if (relGrid) {
        const related = PRODUCTS.filter(p => p.id !== id && p.category === product.category).slice(0, 3);
        relGrid.innerHTML = related.length ? related.map(p => productCardHTML(p)).join('') : PRODUCTS.slice(0, 3).map(p => productCardHTML(p)).join('');
        relGrid.querySelectorAll('.reveal').forEach(el => setTimeout(() => el.classList.add('visible'), 50));
    }
}

// --- Blog Page ---
function initBlogPage() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;

    let currentBlogPage = 1;
    const blogItemsPerPage = 4;

    function renderBlog() {
        const totalPages = Math.ceil(BLOG_POSTS.length / blogItemsPerPage);
        const start = (currentBlogPage - 1) * blogItemsPerPage;
        const pagedPosts = BLOG_POSTS.slice(start, start + blogItemsPerPage);

        blogGrid.innerHTML = pagedPosts.map(post => `
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

        renderPagination('blogPagination', totalPages, currentBlogPage, (page) => {
            currentBlogPage = page;
            renderBlog();
            window.scrollTo({ top: blogGrid.offsetTop - 100, behavior: 'smooth' });
        });

        blogGrid.querySelectorAll('.reveal').forEach(el => setTimeout(() => el.classList.add('visible'), 50));
    }

    renderBlog();
}

// --- Pagination UI Helper ---
function renderPagination(containerId, totalPages, currentPage, onPageClick) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }

    let html = `
        <button class="page-btn prev-next" ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}">← Prev</button>
    `;

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            html += `<span style="color:var(--text-muted)">...</span>`;
        }
    }

    html += `
        <button class="page-btn prev-next" ${currentPage === totalPages ? 'disabled' : ''} data-page="${currentPage + 1}">Next →</button>
    `;

    container.innerHTML = html;

    container.querySelectorAll('.page-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const page = parseInt(btn.dataset.page);
            if (!isNaN(page)) onPageClick(page);
        });
    });
}
