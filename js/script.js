const themeToggler = document.querySelector(".theme-toggler");
const main = document.querySelector(".main");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    main.classList.add("dark-mode");
}

themeToggler.addEventListener("click", function() {
    main.classList.toggle("dark-mode");
    if (main.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbarMenu = document.querySelector('.nav-list');

hamburgerMenu.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
  console.log("Clicked!"); // add a console log to check if the event listener is working
});