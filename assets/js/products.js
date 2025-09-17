let products = [
{image: "assets/images/products/1880.jpg",category: "electronics", name: "রিচার্জেবল ফ্যান", model:"1880", price:850 },
{image: "assets/images/products/bajajrice.jpg",category: "electronics", name: "বাজাজ রাইস কুকার", model:"XXX", price:3199 },
{image: "assets/images/products/1880.jpg",category: "electronics", name: "Flax", model:"XXX", price:400 },
{image: "assets/images/products/ghori.jpg",category: "electronics", name: "দেয়াল ঘড়ি", model:1880, price:850 },
{image: "assets/images/products/1880.jpg",category: "electronics", name: "Rechargable Fan", model:1880, price:850 }
];

const contains = document.getElementById("product-list");

for (let i=0; i<products.length; i++) {
const div= document.createElement("div");
div.classList.add("product-card");
div.innerHTML = `
<img src="${products[i].image}">
<div>
<h3>${products[i].name}</h3>
<P>Model: ${products[i].model}</p>
<P>Price <span style="color:#01a884;">৳${products[i].price}</span></p>
</div>
`;
contains.appendChild(div);
}