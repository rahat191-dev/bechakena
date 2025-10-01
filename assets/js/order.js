fetch("components/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });

const product = JSON.parse(localStorage.getItem("selectedProduct"));
const deliveryCharge = 100;

const quantitySelect = document.getElementById("quantity");
for (let i = 1; i <= 20; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  quantitySelect.appendChild(option);
}

function updatePrices() {
  const quantity = parseInt(document.getElementById("quantity").value) || 1;
  const productsPrice = product.price * quantity;
  const total = productsPrice + deliveryCharge;

  document.getElementById("productsPrice").innerText = "Product Price: ৳" + productsPrice;
  document.getElementById("deliveryCharge").innerText = "Delivery Charge: ৳" + deliveryCharge;
  document.getElementById("totalPrice").innerText = "Total: ৳" + total;
}

if(product){
  document.getElementById("productName").innerText = product.name;
  document.getElementById("productImage").src = product.image;
  document.getElementById("productModel").innerText = "Model: " + product.model;

  updatePrices();

  document.getElementById("quantity").addEventListener("change", updatePrices);
}

document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("✅ Your order has been placed successfully!");
});
