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

for (let i=0; i<products.length; i++) {
const div= document.createElement("div");
div.classList.add("product-card");
div.innerHTML = `
<img src="${products[i].image}">
<div>
<h3>${products[i].name}</h3>
<P>${products[i].model}</p>
<P>Price <span style="color:#01a884;">৳${products[i].price}</span></p>
</div>
`;
contains.appendChild(div);
}