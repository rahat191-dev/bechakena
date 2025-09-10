fetch("components/navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
   

    const hamburger = document.getElementById("hamburger");
const userPage = document.getElementById("user-page");
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    userPage.classList.toggle('show');
});
 });