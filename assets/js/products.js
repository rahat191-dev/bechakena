let products = [
{image: "assets/images/products/electronics/1880.jpg", location: "dhaka", category: "electronics", name: "রিচার্জেবল ফ্যান", model:"1880", price:850 },
{image: "assets/images/products/electronics/bajajrice.jpg",location: "barishal", category: "electronics", name: "বাজাজ রাইস কুকার", model:"2.8L", price:3199 },
{image: "assets/images/products/electronics/flax.jpg",location: "chittagong", category: "electronics", name: "Flax", model:"1L", price:400 },
{image: "assets/images/products/electronics/ghori.jpg",location: "khulna", category: "electronics", name: "দেয়াল ঘড়ি", model:1880, price:850 },
{image: "assets/images/products/electronics/1880.jpg",location: "mymensingh", category: "electronics", name: "Rechargable Fan", model:1880, price:850 },
{image: "assets/images/products/laptops/asus1.jpg",location: "rajshahi", category: "laptops", name: "Asus Laptop", model:"Caleton N4020 15.6' FHD", price:29999 },
{image: "assets/images/products/laptops/hp1.jpg",location: "rangpur", category: "laptops", name: "Hp Laptop", model:"HP 15.6 Ryzon 5", price:4499 },
{image: "assets/images/products/laptops/asus1.jpg",location: "sylhet", category: "laptops", name: "Asus Laptop", model:"Caleton N4020 15.6' FHD", price:29999 },
{image: "assets/images/products/laptops/hp1.jpg",location: "dhaka", category: "laptops", name: "Hp Laptop", model:"HP 15.6 Ryzon 5", price:4499 },
{image: "assets/images/products/electronics/1880.jpg",location: "barishal", category: "electronics", name: "রিচার্জেবল ফ্যান", model:"1880", price:850 },
{image: "assets/images/products/electronics/bajajrice.jpg",location: "chittagong", category: "electronics", name: "বাজাজ রাইস কুকার", model:"2.8L", price:3199 },
{image: "assets/images/products/electronics/flax.jpg",location: "khulna", category: "electronics", name: "Flax", model:"1L", price:400 },
{image: "assets/images/products/electronics/ghori.jpg",location: "mymensingh", category: "electronics", name: "দেয়াল ঘড়ি", model:1880, price:850 },
{image: "assets/images/products/electronics/1880.jpg",location: "rajshahi", category: "electronics", name: "Rechargable Fan", model:1880, price:850 },
{image: "assets/images/products/laptops/asus1.jpg",location: "rangpur", category: "laptops", name: "Asus Laptop", model:"Caleton N4020 15.6' FHD", price:29999 },
{image: "assets/images/products/laptops/hp1.jpg",location: "sylhet", category: "laptops", name: "Hp Laptop", model:"HP 15.6 Ryzon 5", price:4499 },
];

const contains = document.getElementById("product-list");

function showProducts(list) {
  contains.innerHTML = "";
  list.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product-card");
    div.innerHTML = `
      <img src="${product.image}">
      <div>
        <h3>${product.name}</h3>
        <p>${product.model}</p>
        <p>Price <span style="color:#01a884;">৳${product.price}</span></p>
      </div>
    `;

      div.addEventListener("click", () => {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      window.location.href = "order.html";
    });

    contains.appendChild(div);
  });
}

function filterSelection(c) {
  if (c === "all") {
    showProducts(products);
  } else {
    const filtered = products.filter(product => product.category === c);
    showProducts(filtered);
  }
}

function searchProducts() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(query) ||
    product.model.toString().toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query)
  );
  showProducts(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  filterSelection("all");

  document.getElementById("searchBtn").addEventListener("click", (e) => {
    e.preventDefault();
    searchProducts();
  });

  document.getElementById("searchInput").addEventListener("keyup", searchProducts);
});let selectedLocation = "all";
let selectedCategory = "all";

function filterProducts() {
  let filtered = products.filter(product => {
    let locationMatch = selectedLocation === "all" || product.location === selectedLocation;
    let categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    return locationMatch && categoryMatch;
  });
  showProducts(filtered);
}

function filterByLocation(loc) {
  selectedLocation = loc;
  filterProducts();

   const locationBtn = document.querySelector(".location-category .all");
  const btnText = document.querySelector(`.location-dropdown button[onclick="filterByLocation('${loc}')"]`).innerText;
  locationBtn.innerHTML = `<img src="assets/images/map.png">${btnText}`;
}

function filterByCategory(cat) {
  selectedCategory = cat;
  filterProducts();

  const categoryBtn = document.querySelector(".products-category");
  const btnText = document.querySelector(`.dropdown-content button[onclick="filterByCategory('${cat}')"]`).innerText;
  categoryBtn.innerHTML = `<img src="assets/images/category.png">${btnText}`;
}

function searchProducts() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = products.filter(product =>
    (selectedLocation === "all" || product.location === selectedLocation) &&
    (selectedCategory === "all" || product.category === selectedCategory) &&
    (
      product.name.toLowerCase().includes(query) ||
      product.model.toString().toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    )
  );
  showProducts(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  filterProducts();

  document.getElementById("searchBtn").addEventListener("click", (e) => {
    e.preventDefault();
    searchProducts();
  });

  document.getElementById("searchInput").addEventListener("keyup", searchProducts);
});