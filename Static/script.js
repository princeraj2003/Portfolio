document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navUl = document.querySelector(".logo-ul");
    const two = document.querySelector(".lets-connect");
    const three = document.querySelector(".head-ul");
    const proj = document.querySelector(".ProjHover");
  
    hamburgerMenu.addEventListener("click", function () {
      navUl.classList.toggle("nav-open");
      two.classList.toggle("nav-open");
      three.classList.toggle("nav-open");
    });
  });