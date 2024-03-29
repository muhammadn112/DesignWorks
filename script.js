function scrollToProducts() {
    const productsSection = document.getElementById('products');
    productsSection.scrollIntoView({ behavior: 'smooth' });
}




// Define the products array
const products = [
    { id: 1, name: "Green and White Landing Page", description: "A beautiful landing page design with a clean green and white color scheme.", price: 10, image: "product1.jpeg" },
    { id: 2, name: "Responsive Landing Page", description: "A fully responsive landing page design that looks great on all devices.", price: 20, image: "product2.jpeg" },
    { id: 3, name: "Color Palette Figma File", description: "A comprehensive color palette Figma file for your design projects.", price: 30, image: "product3.jpeg" },
    { id: 4, name: "Mobile App Design", description: "A complete mobile app design with modern UI/UX elements and functionalities.", price: 40, image: "product4.jpeg" }
];

// Function to add a product to the cart
function addToCart(productId) {
    // Retrieve existing cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Find the product by ID
    const productToAdd = products.find(product => product.id === productId);
    
    // Add the product to cart items
    cartItems.push(productToAdd);

    // Update localStorage with the updated cart items
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Update cart count in the header
    const cartCount = cartItems.length;
    localStorage.setItem('cartCount', cartCount);
    document.getElementById('cart-count').textContent = cartCount;
}

// Function to display cart items on the cart page
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    // Retrieve cart items from localStorage or any other source
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Clear existing content
    cartItemsContainer.innerHTML = '';

    // Display each cart item
    cartItems.forEach((item, index) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <div class="cart-item-details">
                <img src="images/${item.image}" alt="${item.name}">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <p>$${item.price}</p>
                <button onclick="removeCartItem(${index})">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemElement);
    });
}

// Function to remove a cart item
function removeCartItem(index) {
    // Retrieve cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Remove the item at the specified index
    cartItems.splice(index, 1);
    
    // Update localStorage with the updated cart items
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Update the cart count
    const cartCount = cartItems.length;
    localStorage.setItem('cartCount', cartCount);
    document.getElementById('cart-count').textContent = cartCount;
    
    // Redisplay the cart items
    displayCartItems();
}


// Initialize the cart count on page load
window.onload = function() {
    console.log("Window loaded");
    const cartCount = localStorage.getItem('cartCount') || 0;
    document.getElementById('cart-count').textContent = cartCount;
    if (window.location.pathname === '/DesignWorks/cart.html') {
        console.log("Calling displayCartItems()");
        displayCartItems();
    }
};
