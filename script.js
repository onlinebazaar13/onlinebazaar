// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product, price) {
  cart.push({ product, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product + " added to cart!");
}

// Show cart items in cart.html
if (document.getElementById("cart-items")) {
  const cartList = document.getElementById("cart-items");
  const totalElem = document.getElementById("cart-total");

  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - $${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });

  totalElem.textContent = `Total: $${total}`;
}
