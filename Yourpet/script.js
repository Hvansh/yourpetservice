// Initialize cart variables
let totalItems = 0;
let totalPrice = 0;

// Function to update cart summary
function updateCart() {
    document.getElementById('total-items').innerText = totalItems;
    document.getElementById('total-price').innerHTML = `&#8377; ${totalPrice}`; // Use innerHTML to render the currency symbol
}

// Function to add items to cart
function addToCart(price) {
    totalItems++;
    totalPrice += price;
    updateCart();
}

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.pet-card button').forEach(button => {
    button.addEventListener('click', function() {
        const priceText = this.parentElement.querySelector('p:nth-of-type(2)').innerText;
        const price = parseInt(priceText.replace(/[^0-9]/g, '')); // Extract price
        addToCart(price);
    });
});

document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', function() {
        const priceText = this.parentElement.querySelector('p').innerText;
        const price = parseInt(priceText.replace(/[^0-9]/g, '')); // Extract price
        addToCart(price);
    });
});

// Function to find the perfect pet
function findPerfectPet(event) {
    event.preventDefault(); // Prevent form submission
    const climate = document.getElementById('climate').value;
    const needs = document.getElementById('needs').value;
    const recommendationDiv = document.getElementById('pet-recommendation');

    let recommendedPet = '';

    if (climate === 'hot' && needs === 'low-maintenance') {
        recommendedPet = 'Labrador';
    } else if (climate === 'hot' && needs === 'high-maintenance') {
        recommendedPet = 'Short-haired German Shepherds';
    } 
    else if (climate === 'cold' && needs === 'high-maintenance') {
        recommendedPet = 'Golden Retriever';
    }else if (climate === 'cold' && needs === 'low-maintenance') {
        recommendedPet = 'German Shepherds';
    }else {
        recommendedPet = 'No suitable pet found for your selection.';
    }

    recommendationDiv.innerText = `Recommended Pet: ${recommendedPet}`;
}

// Add event listener to the "Find Pet" button
document.querySelector('#recommendation form button').addEventListener('click', findPerfectPet);