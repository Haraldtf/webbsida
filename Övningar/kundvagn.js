document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    
    // Hämta kundvagnens innehåll från localStorage eller annan lagringsteknik
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    // Visa kundvagnens innehåll
    if (cartItems.length === 0) {
      cartItemsContainer.innerHTML = '<p>Din kundvagn är tom</p>';
    } else {
      const ul = document.createElement('ul');
      cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });
      cartItemsContainer.appendChild(ul);
    }
  });
  