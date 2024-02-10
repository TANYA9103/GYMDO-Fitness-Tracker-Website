let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');

    }
    else{
        document.querySelector('.header').classList.remove('active');

    }
    window.onload = () =>{
        if(window.scrollY > 0){
            document.querySelector('.header').classList.add('active');
    
        }
        else{
            document.querySelector('.header').classList.remove('active');
    
        }
        
    }



}


var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    centeredSliders: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

// for feature selection
var swiper = new Swiper(".feature-slider", {
    spaceBetween: 20,
     grabCursor: true,
    loop:true,
    centeredSliders: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});