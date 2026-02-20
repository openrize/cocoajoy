// ==========================================
// CocoaJoy – Cart Logic
// ==========================================

let cart = JSON.parse(localStorage.getItem('cocoajoy_cart') || '[]');

function saveCart() {
    localStorage.setItem('cocoajoy_cart', JSON.stringify(cart));
}

function getCartCount() {
    return cart.reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);
}

function addToCart(productId, size = null) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const key = `${productId}-${size || 'default'}`;
    const existing = cart.find(i => i.key === key);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ key, id: productId, name: product.name, emoji: product.emoji, price: product.price, size: size || (product.sizes && product.sizes[0]) || null, qty: 1 });
    }
    saveCart();
    updateCartUI();
    showToast(`${product.emoji} ${product.name} added to cart!`);
}

function removeFromCart(key) {
    cart = cart.filter(i => i.key !== key);
    saveCart();
    updateCartUI();
}

function changeQty(key, delta) {
    const item = cart.find(i => i.key === key);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) { removeFromCart(key); return; }
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    const badge = document.getElementById('cartBadge');
    const totalEl = document.getElementById('cartTotal');
    const itemsEl = document.getElementById('cartItems');
    const checkoutBtn = document.querySelector('.cart-footer .btn-primary');
    const count = getCartCount();
    if (badge) badge.textContent = count;
    if (totalEl) totalEl.textContent = `$${getCartTotal()}`;
    if (itemsEl) renderCartItems(itemsEl);
    if (checkoutBtn) checkoutBtn.href = 'checkout.html';
}

function renderCartItems(container) {
    if (cart.length === 0) {
        container.innerHTML = `<div class="cart-empty"><div class="empty-icon">🛒</div><p>Your cart is empty</p><a href="shop.html" class="btn btn-primary btn-sm" style="margin-top:16px">Browse Chocolates</a></div>`;
        return;
    }
    container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)} ${item.size ? `<small>· ${item.size}</small>` : ''}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty('${item.key}', -1)">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.key}', 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.key}')" title="Remove">✕</button>
    </div>
  `).join('');
}

function openCart() {
    document.getElementById('cartSidebar')?.classList.add('open');
    document.getElementById('cartOverlay')?.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cartSidebar')?.classList.remove('open');
    document.getElementById('cartOverlay')?.classList.remove('active');
    document.body.style.overflow = '';
}

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
    showToast('🎉 You\'re subscribed! Enjoy 10% off your first order.');
    emailEl.value = '';
}

// Init cart UI on load
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();

    // Cart toggle
    document.getElementById('cartIcon')?.addEventListener('click', (e) => { e.preventDefault(); openCart(); });
    document.getElementById('cartClose')?.addEventListener('click', closeCart);
    document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
});
