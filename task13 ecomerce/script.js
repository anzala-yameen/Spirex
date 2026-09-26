// Dummy Product Data
const products = [
    {
        id: 1,
        name: "Ergonomic Office Chair",
        category: "Furniture",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Premium ergonomic office chair with lumbar support, adjustable armrests, and a breathable mesh back. Perfect for long hours of comfortable work."
    },
    {
        id: 2,
        name: "Noise-Cancelling Headphones",
        category: "Electronics",
        price: 199.50,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Industry-leading active noise cancellation ensures an immersive audio experience. Up to 30 hours of battery life and extreme comfort."
    },
    {
        id: 3,
        name: "Mechanical Keychron Keyboard",
        category: "Accessories",
        price: 120.00,
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Wireless mechanical keyboard with customizable RGB backlighting and tactile switches for the ultimate typing experience."
    },
    {
        id: 4,
        name: "Minimalist Smartwatch",
        category: "Wearables",
        price: 150.00,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Sleek and modern smartwatch featuring health tracking, notifications, and a beautiful AMOLED display that lasts up to 7 days on a single charge."
    },
    {
        id: 5,
        name: "Ceramic Coffee Mug",
        category: "Lifestyle",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Handcrafted ceramic mug with a matte finish. Microwave and dishwasher safe, perfect for your morning brew."
    },
    {
        id: 6,
        name: "Premium Leather Wallet",
        category: "Accessories",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Genuine full-grain leather wallet with RFID blocking technology. Slim design fits comfortably in your front pocket."
    }
];

// Cart State
let cart = [];

// DOM Elements
const productGrid = document.getElementById('product-grid');
const cartToggle = document.getElementById('cart-toggle');
const cartOverlay = document.getElementById('cart-overlay');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartCountElement = document.getElementById('cart-count');
const cartTotalPriceElement = document.getElementById('cart-total-price');
const checkoutButton = document.getElementById('checkout-button');

const productModal = document.getElementById('product-modal');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal');

// Initialize the app
function init() {
    renderProducts();
    loadCart();
    setupEventListeners();
}

// Render products to the grid
function renderProducts() {
    productGrid.innerHTML = '';
    products.forEach((product, index) => {
        const delay = index * 0.1; // Staggered animation
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animationDelay = `${delay}s`;
        card.innerHTML = `
            <div class="product-image-container" onclick="openModal(${product.id})">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title" onclick="openModal(${product.id})">${product.name}</h3>
                <span class="product-price">$${product.price.toFixed(2)}</span>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    cartToggle.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);
    
    closeModalBtn.addEventListener('click', closeModal);
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) closeModal();
    });

    checkoutButton.addEventListener('click', () => {
        if(cart.length > 0) {
            alert('Proceeding to checkout. Thank you for shopping with SpireX!');
            cart = [];
            saveCart();
            updateCartUI();
            toggleCart();
        }
    });
}

// Cart Functions
function toggleCart() {
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
    if (cartSidebar.classList.contains('active')) {
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
        document.body.style.overflow = '';
    }
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    saveCart();
    updateCartUI();
    
    // Optional: Visual feedback
    cartToggle.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartToggle.style.transform = 'scale(1)';
    }, 200);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function changeQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function updateCartUI() {
    // Update count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.textContent = totalItems;

    // Update items
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
        checkoutButton.disabled = true;
    } else {
        checkoutButton.disabled = false;
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                    <div class="cart-item-controls">
                        <div class="quantity-control">
                            <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                            <span class="qty-display">${item.quantity}</span>
                            <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                        </div>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    }

    // Update total price
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

// Local Storage
function saveCart() {
    localStorage.setItem('spirex_cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('spirex_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartUI();
}

// Modal Functions
function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    modalBody.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="modal-image">
        <div class="modal-details">
            <span class="product-category">${product.category}</span>
            <h2 class="modal-title">${product.name}</h2>
            <div class="modal-price">$${product.price.toFixed(2)}</div>
            <p class="modal-description">${product.description}</p>
            <button class="cta-button" onclick="addToCart(${product.id}); closeModal();">Add to Cart</button>
        </div>
    `;
    
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Run init
init();
