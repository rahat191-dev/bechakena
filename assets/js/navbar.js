fetch("components/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

 const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");
const mobileButtonsDiv = document.querySelector(".mobile-buttons");
const closeBtn = document.getElementById("close");

// Buttons to clone
const buttonsToClone = [
  document.getElementById("all-items"),
  document.getElementById("login"),
  document.getElementById("signup")
];

buttonsToClone.forEach(el => {
  if(el) mobileButtonsDiv.appendChild(el.cloneNode(true));
});

hamburger.addEventListener("click", () => {
  mobileButtonsDiv.parentElement.classList.add("open"); // parent div e class
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

  });
