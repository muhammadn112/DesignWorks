function scrollToProducts() {
    const productsSection = document.getElementById('products');
    productsSection.scrollIntoView({ behavior: 'smooth' });
}


const products = [
    { id: 1, name: "Green and White Landing Page", description: "A beautiful landing page design with a clean green and white color scheme.", price: 10, image: "product1.jpeg" },
    { id: 2, name: "Responsive Landing Page", description: "A fully responsive landing page design that looks great on all devices.", price: 20, image: "product2.jpeg" },
    { id: 3, name: "Color Palette Figma File", description: "A comprehensive color palette Figma file for your design projects.", price: 30, image: "product3.jpeg" },
    { id: 4, name: "Mobile App Design", description: "A complete mobile app design with modern UI/UX elements and functionalities.", price: 40, image: "product4.jpeg" }
];

function addToCart(productId) {

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    

    const productToAdd = products.find(product => product.id === productId);
    

    cartItems.push(productToAdd);


    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    const cartCount = cartItems.length;
    localStorage.setItem('cartCount', cartCount);
    document.getElementById('cart-count').textContent = cartCount;
}


function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
  
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];


    cartItemsContainer.innerHTML = '';

  
    cartItems.forEach((item, index) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <div class="cart-item-details">
                <img src="./images/${item.image}" alt="${item.name}">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <p>$${item.price}</p>
                <button onclick="removeCartItem(${index})">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemElement);
    });
}


function removeCartItem(index) {

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
 
    cartItems.splice(index, 1);
    

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    

    const cartCount = cartItems.length;
    localStorage.setItem('cartCount', cartCount);
    document.getElementById('cart-count').textContent = cartCount;
    

    displayCartItems();
}

window.onload = function() {
    console.log("Window loaded");
    const cartCount = localStorage.getItem('cartCount') || 0;
    document.getElementById('cart-count').textContent = cartCount;
    if (window.location.pathname === '/DesignWorks/cart.html') {
        console.log("Calling displayCartItems()");
        displayCartItems();
    }
};

