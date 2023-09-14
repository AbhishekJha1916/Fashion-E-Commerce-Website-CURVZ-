const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// console.log('Hello');

// Show Sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// Close Sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// Change Theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
})