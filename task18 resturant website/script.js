// Menu Data
const menuData = [
    {
        id: 1,
        name: "Truffle Arancini",
        category: "starters",
        price: "$14",
        description: "Crispy risotto balls stuffed with mozzarella and black truffle, served with marinara.",
        image: "https://images.unsplash.com/photo-1541529086526-db283c563270?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 2,
        name: "Seared Scallops",
        category: "starters",
        price: "$18",
        description: "Pan-seared jumbo scallops with sweet corn purée and crispy pancetta.",
        image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 3,
        name: "Wagyu Beef Filet",
        category: "mains",
        price: "$65",
        description: "8oz Wagyu filet mignon, truffle mashed potatoes, grilled asparagus, red wine jus.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 4,
        name: "Lobster Linguine",
        category: "mains",
        price: "$38",
        description: "Fresh pasta, butter-poached lobster tail, cherry tomatoes, white wine sauce.",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 5,
        name: "Mushroom Risotto",
        category: "mains",
        price: "$28",
        description: "Arborio rice, wild mushrooms, parmesan crisp, white truffle oil.",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 6,
        name: "Tiramisu Classic",
        category: "desserts",
        price: "$12",
        description: "Espresso-soaked ladyfingers, mascarpone cream, dusted with premium cocoa.",
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 7,
        name: "Crème Brûlée",
        category: "desserts",
        price: "$10",
        description: "Vanilla bean custard with a caramelized sugar crust and fresh berries.",
        image: "https://images.unsplash.com/photo-1472555794301-77353b152fa7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sticky Navbar Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Render Menu Items
    const menuGrid = document.getElementById('menu-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function renderMenu(category = 'all') {
        menuGrid.innerHTML = '';
        
        const filteredData = category === 'all' 
            ? menuData 
            : menuData.filter(item => item.category === category);

        filteredData.forEach(item => {
            const el = document.createElement('div');
            el.className = 'menu-item';
            el.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="menu-item-img" loading="lazy">
                <div class="menu-item-info">
                    <div class="menu-item-header">
                        <h3>${item.name}</h3>
                        <span class="menu-item-price">${item.price}</span>
                    </div>
                    <p>${item.description}</p>
                </div>
            `;
            menuGrid.appendChild(el);
        });
    }

    // Initial render
    renderMenu('all');

    // Filter Listeners
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add to clicked
            e.target.classList.add('active');
            
            // Render filtered menu
            const filterValue = e.target.getAttribute('data-filter');
            renderMenu(filterValue);
        });
    });

    // 3. Reservation Form Handling
    const bookingForm = document.getElementById('booking-form');
    const successModal = document.getElementById('success-modal');
    const closeModalBtn = document.getElementById('close-modal');

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success modal
        successModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Reset form
        bookingForm.reset();
    });

    closeModalBtn.addEventListener('click', () => {
        successModal.classList.remove('active');
        document.body.style.overflow = '';
    });
});
