document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartDropdown = document.querySelector('.cart-dropdown');
    let cartItems = [];
  
    // Denna funktion uppdaterar innehållet i kundvagnen
    function updateCart() {
      cartDropdown.innerHTML = '';
  
      if (cartItems.length === 0) {
        cartDropdown.innerHTML = '<p>Din kundvagn är tom</p>';
      } else {
        const ul = document.createElement('ul');
        cartItems.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          ul.appendChild(li);
        });
        cartDropdown.appendChild(ul);
      }
    }
  
    // Lägg till produkt i kundvagnen när knappen "Lägg till i kundvagn" klickas
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Lägg till detta för att spara kundvagnen i localStorage
        updateCart();
      });
    });
  
    // Uppdatera kundvagnen när sidan laddas
    updateCart();
  });
  