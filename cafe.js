<!-- Script for handling the cart -->
<script>
  let cartCount = 0; // Initialize cart count
  let cartItems = []; // To hold items in cart

  // Function to display the cart details in the modal
  function showCart() {
    const cartBadge = document.getElementById('cart-badge');
    const cartModal = document.getElementById('cart-modal');
    const cartItemsList = document.getElementById('cart-items-list');
    
    // Display cart count on badge
    cartBadge.innerText = cartCount;

    // Check if there are items in the cart
    if (cartCount === 0) {
      cartItemsList.innerHTML = 'No items in cart';
    } else {
      cartItemsList.innerHTML = cartItems.join('<br>');
    }

    // Show modal
    cartModal.style.display = 'block';
  }

  // Function to close the cart modal
  function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
  }

  // Function to add item to cart (sample item)
  function addToCart(itemName) {
    cartCount++;
    cartItems.push(itemName); // Adds item name to cart
    document.getElementById('cart-badge').innerText = cartCount;
  }

  // Function to clear cart
  function clearCart() {
    cartCount = 0;
    cartItems = [];
    document.getElementById('cart-badge').innerText = cartCount;
    document.getElementById('cart-items-list').innerHTML = 'No items in cart';
  }

  // Close the cart modal if clicked outside the modal
  window.onclick = function(event) {
    const cartModal = document.getElementById('cart-modal');
    if (event.target === cartModal) {
      closeCart();
    }
  }
</script>

  <!-- JavaScript -->
  <script>
    function openMenu(evt, menuName) {
      // Hide all menu sections
      var i, menuItems;
      menuItems = document.getElementsByClassName("menu");
      for (i = 0; i < menuItems.length; i++) {
        menuItems[i].style.display = "none";
      }

      // Remove "w3-red" class from all tabs
      var tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
      }

      // Show the selected menu section and highlight the tab
      document.getElementById(menuName).style.display = "block";
      evt.currentTarget.className += " w3-red";
    }

    // Open the default tab
    document.getElementById("defaultOpen").click();
  </script>
  
  <script>
        // Open the modal
        function openModal() {
            document.getElementById('reviewModal').style.display = 'flex';
        }

        // Close the modal when clicking outside
        function closeModal(event) {
            if (event.target === document.getElementById('reviewModal')) {
                document.getElementById('reviewModal').style.display = 'none';
            }
        }

        // Submit review
        function submitReview() {
            const username = document.getElementById('username').value;
            const reviewText = document.getElementById('reviewText').value;
            const stars = document.getElementById('stars').value;

            if (username && reviewText && stars) {
                // Create new review HTML
                const newBox = document.createElement('div');
                newBox.className = 'box';
                newBox.innerHTML = `
                    <div class="circle">
                        <img src="https://cilisos.my/wp-content/uploads/2016/07/unknown-person-icon-Image-from.png" alt="${username}">
                    </div>
                    <div class="name">${username}</div>
                    <div class="stars">${stars}</div>
                    <div class="review">${reviewText}</div>
                `;
                // Append to container
                document.getElementById('reviewContainer').appendChild(newBox);

                // Clear form and close modal
                document.getElementById('username').value = '';
                document.getElementById('reviewText').value = '';
                document.getElementById('stars').value = '?????';
                document.getElementById('reviewModal').style.display = 'none';
            } else {
                alert('Please fill out all fields!');
            }
        }
    </script>
    
    <script>
// Cart initialization
let cart = [];

// Add item to cart
function addToCart(itemName, price) {
  cart.push({ itemName, price });
  updateCartBadge();
  updateCartContent();
}

// Update cart badge
function updateCartBadge() {
  const cartBadge = document.getElementById('cart-badge');
  cartBadge.textContent = cart.length;
}

// Update cart content
function updateCartContent() {
  const cartItemsContainer = document.getElementById('cartItems');
  const totalPriceElement = document.getElementById('totalPrice');
  
  cartItemsContainer.innerHTML = ''; // Clear current cart items
  let totalPrice = 0;

  cart.forEach((item, index) => {
    totalPrice += item.price;
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = 
      `<span>${index + 1}. ${item.itemName}</span><span>RM${item.price.toFixed(2)}</span>
      <button class="w3-button w3-red w3-small" onclick="removeFromCart(${index})">Remove</button>`;
    cartItemsContainer.appendChild(cartItem);
  });

  totalPriceElement.textContent = totalPrice.toFixed(2); // Display the total price
}

// Remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartBadge();
  updateCartContent();
}

// Show cart modal
function showCart() {
  const modal = document.getElementById('cartModal');
  modal.style.display = 'block';
}

// Close cart modal
function closeCart() {
  const modal = document.getElementById('cartModal');
  modal.style.display = 'none';
}

// Clear cart
function clearCart() {
  cart = [];
  updateCartBadge();
  updateCartContent();
}

// Checkout function
function checkout() {
  const phoneNumber = document.getElementById('phoneNumber').value;
  const address = document.getElementById('address').value;
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

  if (!phoneNumber || !address || !paymentMethod) {
    alert("Please enter your phone number, address, and select a payment method.");
    return;
  }

  // Close Cart Modal
  closeCart();

  // Show Colorful Thank You Box
  const thankYouBox = document.getElementById('thankYouBox');
  const thankYouMessage = document.getElementById('thankYouMessage');

  const payment = paymentMethod.value === 'cash' ? 'Cash on Delivery' : 'Credit card';
  thankYouMessage.innerHTML = `Thank you for your order!<br>We will deliver to: ${address}<br>Payment method: ${payment}`;

  // Display the Thank You Box
  thankYouBox.style.display = 'block';

  // Clear the cart
  clearCart(); 
}

// Close Thank You box
function closeThankYou() {
  const thankYouBox = document.getElementById('thankYouBox');
  thankYouBox.style.display = 'none';
}
</script>

<script>
// Tabbed Menu
function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-dark-grey";
}
document.getElementById("myLink").click();
</script>
