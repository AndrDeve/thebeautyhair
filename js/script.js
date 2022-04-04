let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times'); /* activa la x */
    navbar.classList.toggle('active');
}

/* desaparece el menú responsivo al darle click en un link */
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    effect: "fade",
    grabCursor:true,
    loop:true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    centeredSlides:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });





  var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 50,
    grabCursor:true,
    loop:true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      0:{
        slidesPerView:1,
      },
      768:{
        slidesPerView:2,
      },
      991:{
        slidesPerView:3,
      },
    },
  });
      