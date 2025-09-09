const hamburger = document.getElementById("hamburger");
const userPage = document.getElementById("user-page");
hamburger.addEventListener('click'), () => {
    hamburger.classList.toggle('open');
    userPage.classList.toggle('show');
};