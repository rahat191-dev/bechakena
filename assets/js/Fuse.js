const options = {
  keys: ["name", "model", "category", "location"],
  threshold: 0.4,
};
const fuse = new Fuse(products, options);

let selectedLocation = "all";
let selectedCategory = "all";

function showProducts(list) {
  const contains = document.getElementById("product-list");
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

function filterProducts() {
  const query = document.getElementById("searchInput").value.trim();

  let results = query ? fuse.search(query).map(r => r.item) : products;

  let filtered = results.filter(product =>
    (selectedLocation === "all" || product.location === selectedLocation) &&
    (selectedCategory === "all" || product.category === selectedCategory)
  );

  showProducts(filtered);
}
function filterByLocation(loc) {
  selectedLocation = loc;
  filterProducts();
}

function filterByCategory(cat) {
  selectedCategory = cat;
  filterProducts();
}

document.getElementById("searchInput").addEventListener("keyup", filterProducts);
document.getElementById("searchBtn").addEventListener("click", (e) => {
  e.preventDefault();
  filterProducts();
});

document.addEventListener("DOMContentLoaded", () => {
  showProducts(products);
});
