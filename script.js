let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};


var swiper = new Swiper(".home-slider", {
    autoplay: {
       delay:1000, 
       disableInteraction: false,
    },
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper(".review-slider", {
    autoplay: {
       delay:2000, 
       disableInteraction: false,
      
    },
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
   
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        600:{
            slidesPerView:2,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    autoplay: {
       delay:2000, 
       disableInteraction: false,
      
    },
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
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


