document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.links a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});
const swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  delay: 1000,
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.SlideShow', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  speed:2000,
  autoplay: {
    delay: 0,
    reverseDirection: true,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
  
});

AOS.init();

var navbtn = document.getElementById("NavBtn");
var link = document.getElementById("Link");
navbtn.addEventListener("click", function(){
  link.classList.toggle("show");
});
