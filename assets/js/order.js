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
  document.getElementById("productPrice").innerText = "Product Price: ৳" + product.price;

  updatePrices();

  document.getElementById("quantity").addEventListener("change", updatePrices);
}

document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("✅ Your order has been placed successfully!");
});

function setupModal(openBtnId, modalId, closeBtnId) {
  const openBtn = document.getElementById(openBtnId);
  const modal = document.getElementById(modalId);
  const closeBtn = document.getElementById(closeBtnId);

  openBtn.addEventListener("click", function(e){
    e.preventDefault();
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", function(){
    modal.style.display = "none";
  });

  window.addEventListener("click", function(e){
    if(e.target === modal){
      modal.style.display = "none";
    }
  });
}

setupModal("cardBtn", "cardModal", "closeModal");

setupModal("bkashBtn", "bkashModal", "closeBkashModal");

document.getElementById("cardForm").addEventListener("submit", function(e){
  e.preventDefault();
  const cardNumber = document.getElementById("cardNumber").value.trim();
  const expiryDate = document.getElementById("expiryDate").value.trim();
  const cvv = document.getElementById("cvv").value.trim();

  if(cardNumber.length !== 16 || isNaN(cardNumber)){
    alert("❌ Invalid Card Number");
    return;
  }
  if(!/^\d{2}\/\d{2}$/.test(expiryDate)){
    alert("❌ Invalid Expiry Date (MM/YY)");
    return;
  }
  if(cvv.length !== 3 || isNaN(cvv)){
    alert("❌ Invalid CVV");
    return;
  }

  alert("✅ Card Payment Successful!");
  document.getElementById("cardModal").style.display = "none";
});

document.getElementById("bkashForm").addEventListener("submit", function(e){
  e.preventDefault();
  const bkashNumber = document.getElementById("bkashNumber").value.trim();
  const bkashPin = document.getElementById("bkashPin").value.trim();

  if(bkashNumber.length !== 11 || isNaN(bkashNumber)){
    alert("❌ Invalid Bkash Number");
    return;
  }
  if(bkashPin.length < 4){
    alert("❌ Invalid PIN");
    return;
  }

  alert("✅ Bkash Payment Successful!");
  document.getElementById("bkashModal").style.display = "none";
});
fetch("components/footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer-container").innerHTML = data;
    });
