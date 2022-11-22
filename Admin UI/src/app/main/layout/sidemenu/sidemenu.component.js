const themeToggler = document.querySelector(".theme-toggler");
themeToggler.addEventListener('click', () => {
document.body.classList.toggle('dark-theme-variables');
themeToggler.querySelector('i:nth-child(1)').classList.toggle('active');
themeToggler.querySelector('i:nth-child(2)').classList.toggle('active');
});     