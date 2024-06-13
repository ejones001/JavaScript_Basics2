let isLoggedIn = false;

// Sample products
let products = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 15 }
];

let cart = [];

// Function to add item to cart
function addItemToCart(itemIndex) {
    if (isLoggedIn) {
        cart.push(products[itemIndex]);
        console.log(`${products[itemIndex].name} added to cart.`);
    } else {
        console.log("Please log in to add items to your cart.");
    }
}

// Function to display available products
function displayProducts() {
    console.log("Available products:");
    products.forEach((product, index) => {
        console.log(`${index + 1}. ${product.name} - $${product.price}`);
    });
}

// Function to calculate total cost of items in cart
function calculateTotal() {
    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });
    return total;
}

// Test the functions
displayProducts();
addItemToCart(0); // Try adding an item to cart (not logged in)
console.log("Total cost:", calculateTotal()); // Calculate total cost
