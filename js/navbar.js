const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 40) { 
        $("#menu").addClass("ativo"); 
    } else {
        $("#menu").removeClass("ativo");
    }
});
