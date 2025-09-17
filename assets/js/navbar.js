fetch("components/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

   // Select elements AFTER DOM is loaded
const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("close");
const overlay = document.getElementById("overlay");

// Put sidebar buttons inside an array
const menuButtons = Array.from(document.querySelectorAll("#user-page, #all-items"));

hamburger.addEventListener("click", () => {
  // Add active class
  menuButtons.forEach(btn => btn.classList.add("active"));
  document.getElementById("user-page").classList.add("active");
  overlay.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  menuButtons.forEach(btn => btn.classList.remove("active"));
  document.getElementById("user-page").classList.remove("active");
  overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
  menuButtons.forEach(btn => btn.classList.remove("active"));
  document.getElementById("user-page").classList.remove("active");
  overlay.style.display = "none";
});

  });
