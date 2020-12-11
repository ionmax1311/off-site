const mobileMenu = document.getElementById("mobile-menu");

const menu = () => {
    mobileMenu.classList.add('active')
}

const burger = document.getElementById("burger")
burger.addEventListener('click', menu)

const menuClose = () => {
    mobileMenu.classList.remove('active')
}

const btnClose = document.querySelector(".close")
btnClose.addEventListener('click', menuClose)