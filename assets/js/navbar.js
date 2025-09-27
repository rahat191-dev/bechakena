fetch("components/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

 const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");
const mobileButtonsDiv = document.querySelector(".mobile-buttons");
const closeBtn = document.getElementById("close");

const buttonsToClone = [
  document.getElementById("all-items"),
  document.getElementById("login"),
  document.getElementById("signup")
];

buttonsToClone.forEach(el => {
  if(el) mobileButtonsDiv.appendChild(el.cloneNode(true));
});

hamburger.addEventListener("click", () => {
  mobileButtonsDiv.parentElement.classList.add("open");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobileButtonsDiv.parentElement.classList.remove("open");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  mobileButtonsDiv.parentElement.classList.remove("open");
  overlay.classList.remove("active");
});

document.querySelector(".category").addEventListener("click", () => {
  document.querySelector(".dropdown-content").classList.toggle("show");
});

window.addEventListener("click", (e) => {
  if (!e.target.closest(".drop-category")) {
    document.querySelector(".dropdown-content").classList.remove("show");
  }
});

function filterSelection(category) {
  console.log("Filter:", category);
}
  });
