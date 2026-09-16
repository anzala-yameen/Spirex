const products = [
    { id: 1, name: "Cloud Sneakers", category: "Fashion", price: 89.99, emoji: "👟" },
    { id: 2, name: "Urban Backpack", category: "Lifestyle", price: 64.99, emoji: "🎒" },
    { id: 3, name: "Classic Headphones", category: "Technology", price: 119.99, emoji: "🎧" },
    { id: 4, name: "Minimal Watch", category: "Fashion", price: 149.99, emoji: "⌚" },
    { id: 5, name: "Everyday Camera", category: "Technology", price: 299.99, emoji: "📷" },
    { id: 6, name: "Essential Hoodie", category: "Fashion", price: 74.99, emoji: "🧥" },
    { id: 7, name: "Travel Bottle", category: "Lifestyle", price: 29.99, emoji: "🥤" },
    { id: 8, name: "Smart Tablet", category: "Technology", price: 399.99, emoji: "📱" }
];

let cart = [];
let activeCategory = "All";
let promoApplied = false;

const productsGrid = document.getElementById("productsGrid");
const productCount = document.getElementById("productCount");
const sortSelect = document.getElementById("sortSelect");
const searchPanel = document.getElementById("searchPanel");
const searchInput = document.getElementById("searchInput");
const cartDrawer = document.getElementById("cartDrawer");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const overlay = document.getElementById("overlay");
const subtotalElement = document.getElementById("subtotal");
const discountElement = document.getElementById("discount");
const shippingElement = document.getElementById("shipping");
const totalElement = document.getElementById("total");
const discountRow = document.getElementById("discountRow");
const shippingMessage = document.getElementById("shippingMessage");
const shippingAmount = document.getElementById("shippingAmount");
const progressBar = document.getElementById("progressBar");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

function formatCurrency(value) {
    return `$${value.toFixed(2)}`;
}

function getVisibleProducts() {
    const query = searchInput.value.trim().toLowerCase();
    const visibleProducts = products.filter(product => {
        const matchesCategory = activeCategory === "All" || product.category === activeCategory;
        const matchesSearch = !query || `${product.name} ${product.category}`.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });

    switch (sortSelect.value) {
        case "low":
            return visibleProducts.sort((first, second) => first.price - second.price);
        case "high":
            return visibleProducts.sort((first, second) => second.price - first.price);
        case "name":
            return visibleProducts.sort((first, second) => first.name.localeCompare(second.name));
        default:
            return visibleProducts;
    }
}

function displayProducts() {
    const visibleProducts = getVisibleProducts();
    productCount.textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? "product" : "products"}`;

    if (visibleProducts.length === 0) {
        productsGrid.innerHTML = `<p class="no-results">No products match your search.</p>`;
        return;
    }

    productsGrid.innerHTML = visibleProducts.map(product => `
        <article class="product-card">
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-bottom">
                    <span class="product-price">${formatCurrency(product.price)}</span>
                    <button class="add-button" data-add-product="${product.id}">Add to Cart</button>
                </div>
            </div>
        </article>
    `).join("");
}

function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast.timeout);
    showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function addToCart(productId) {
    const item = cart.find(cartItem => cartItem.id === productId);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ ...products.find(product => product.id === productId), quantity: 1 });
    }
    updateCart();
    showToast("Added to cart");
    openCart();
}

function changeQuantity(productId, change) {
    const item = cart.find(cartItem => cartItem.id === productId);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) cart = cart.filter(cartItem => cartItem.id !== productId);
    updateCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function renderCart() {
    if (cart.length === 0) {
        cartItems.innerHTML = `<div class="empty-cart"><div class="empty-cart-icon">🛒</div><h3>Your cart is empty</h3><p>Add some products to get started.</p></div>`;
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">${item.emoji}</div>
            <div>
                <h3>${item.name}</h3>
                <p class="cart-item-price">${formatCurrency(item.price)} each</p>
                <div class="quantity-controls">
                    <button aria-label="Decrease ${item.name} quantity" data-change="-1" data-product="${item.id}">−</button>
                    <span>${item.quantity}</span>
                    <button aria-label="Increase ${item.name} quantity" data-change="1" data-product="${item.id}">+</button>
                </div>
                <button class="remove-button" data-remove-product="${item.id}">Remove</button>
            </div>
            <span class="item-total">${formatCurrency(item.price * item.quantity)}</span>
        </div>
    `).join("");
}

function updateCart() {
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const discount = promoApplied ? subtotal * 0.15 : 0;
    const shipping = subtotal === 0 || subtotal >= 150 ? 0 : 8;
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const amountForShipping = Math.min(subtotal, 150);

    renderCart();
    cartCount.textContent = totalItems;
    subtotalElement.textContent = formatCurrency(subtotal);
    discountElement.textContent = `-${formatCurrency(discount)}`;
    shippingElement.textContent = shipping === 0 ? "Free" : formatCurrency(shipping);
    totalElement.textContent = formatCurrency(subtotal - discount + shipping);
    discountRow.hidden = !promoApplied;
    shippingAmount.textContent = `${formatCurrency(amountForShipping)} / $150`;
    progressBar.style.width = `${(amountForShipping / 150) * 100}%`;
    shippingMessage.textContent = subtotal >= 150 ? "You unlocked free shipping" : `Add ${formatCurrency(150 - subtotal)} for free shipping`;
}

function openCart() {
    cartDrawer.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("no-scroll");
}

function closeCartDrawer() {
    cartDrawer.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
}

document.getElementById("cartButton").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCartDrawer);
overlay.addEventListener("click", closeCartDrawer);
document.getElementById("searchToggle").addEventListener("click", () => {
    searchPanel.classList.toggle("active");
    if (searchPanel.classList.contains("active")) searchInput.focus();
});
document.getElementById("closeSearch").addEventListener("click", () => searchPanel.classList.remove("active"));
searchInput.addEventListener("input", displayProducts);
sortSelect.addEventListener("change", displayProducts);

document.querySelectorAll(".category-card").forEach(button => {
    button.addEventListener("click", () => {
        activeCategory = button.dataset.category;
        document.querySelectorAll(".category-card").forEach(category => category.classList.remove("active"));
        button.classList.add("active");
        displayProducts();
    });
});

productsGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-add-product]");
    if (button) addToCart(Number(button.dataset.addProduct));
});

cartItems.addEventListener("click", event => {
    const quantityButton = event.target.closest("[data-change]");
    const removeButton = event.target.closest("[data-remove-product]");
    if (quantityButton) changeQuantity(Number(quantityButton.dataset.product), Number(quantityButton.dataset.change));
    if (removeButton) removeFromCart(Number(removeButton.dataset.removeProduct));
});

document.getElementById("applyPromo").addEventListener("click", () => {
    const input = document.getElementById("promoInput");
    if (input.value.trim().toUpperCase() !== "NOVA15") {
        showToast("Enter a valid promo code");
        return;
    }
    promoApplied = true;
    updateCart();
    showToast("15% discount applied");
});

document.getElementById("copyPromo").addEventListener("click", async event => {
    try {
        await navigator.clipboard.writeText("NOVA15");
    } catch {
        const copyField = document.createElement("textarea");
        copyField.value = "NOVA15";
        document.body.appendChild(copyField);
        copyField.select();
        document.execCommand("copy");
        copyField.remove();
    }
    event.currentTarget.textContent = "Copied!";
    showToast("Promo code copied");
});

document.getElementById("checkoutBtn").addEventListener("click", () => {
    if (cart.length === 0) {
        showToast("Your cart is empty");
        return;
    }
    showToast("Order placed successfully");
    cart = [];
    promoApplied = false;
    updateCart();
    closeCartDrawer();
});

displayProducts();
updateCart();