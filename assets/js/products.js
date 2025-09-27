let products = [
{image: "assets/images/products/electronics/1880.jpg",category: "electronics", name: "রিচার্জেবল ফ্যান", model:"1880", price:850 },
{image: "assets/images/products/electronics/bajajrice.jpg",category: "electronics", name: "বাজাজ রাইস কুকার", model:"2.8L", price:3199 },
{image: "assets/images/products/electronics/flax.jpg",category: "electronics", name: "Flax", model:"1L", price:400 },
{image: "assets/images/products/electronics/ghori.jpg",category: "electronics", name: "দেয়াল ঘড়ি", model:1880, price:850 },
{image: "assets/images/products/electronics/1880.jpg",category: "electronics", name: "Rechargable Fan", model:1880, price:850 },
{image: "assets/images/products/laptops/asus1.jpg",category: "laptops", name: "Asus Laptop", model:"Caleton N4020 15.6' FHD", price:29999 },
{image: "assets/images/products/laptops/hp1.jpg",category: "laptops", name: "Hp Laptop", model:"HP 15.6 Ryzon 5", price:4499 },
{image: "assets/images/products/laptops/asus1.jpg",category: "laptops", name: "Asus Laptop", model:"Caleton N4020 15.6' FHD", price:29999 },
{image: "assets/images/products/laptops/hp1.jpg",category: "laptops", name: "Hp Laptop", model:"HP 15.6 Ryzon 5", price:4499 },
{image: "assets/images/products/electronics/1880.jpg",category: "electronics", name: "রিচার্জেবল ফ্যান", model:"1880", price:850 },
{image: "assets/images/products/electronics/bajajrice.jpg",category: "electronics", name: "বাজাজ রাইস কুকার", model:"2.8L", price:3199 },
{image: "assets/images/products/electronics/flax.jpg",category: "electronics", name: "Flax", model:"1L", price:400 },
{image: "assets/images/products/electronics/ghori.jpg",category: "electronics", name: "দেয়াল ঘড়ি", model:1880, price:850 },
{image: "assets/images/products/electronics/1880.jpg",category: "electronics", name: "Rechargable Fan", model:1880, price:850 },
{image: "assets/images/products/laptops/asus1.jpg",category: "laptops", name: "Asus Laptop", model:"Caleton N4020 15.6' FHD", price:29999 },
{image: "assets/images/products/laptops/hp1.jpg",category: "laptops", name: "Hp Laptop", model:"HP 15.6 Ryzon 5", price:4499 },
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
});