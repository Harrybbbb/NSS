document.addEventListener("DOMContentLoaded", () => {
  const events = [
    {
      imgSrc: "https://res.cloudinary.com/dxea0kghs/image/upload/v1726973034/UnitCamp_i2rv1w.jpg",
      heading: "NSS Unit Camp",
      info: " NSS Unit camp: A collaborative event focusing on community service, skill development, and leadership, fostering teamwork and social responsibility among participants.",
    },
    {
      imgSrc: "https://res.cloudinary.com/dxea0kghs/image/upload/v1726973071/SBA_hkoubb.jpg",
      heading: "Swach Bharat Abhiyan",
      info: `NSS's Swachh Bharat Abhiyan promotes cleanliness through community cleanup drives, awareness campaigns, and fostering  a culture of hygiene.`,
    },
    {
      imgSrc: "https://res.cloudinary.com/dxea0kghs/image/upload/v1726973039/TeachersDay_aoiaey.jpg",
      heading: "Teachers Day",
      info: "NSS organized a memorable Teachers Day with performances, speeches, and momentos, honoring teachers and celebrating their impact on students.",
    },
    {
      imgSrc: "https://res.cloudinary.com/dxea0kghs/image/upload/v1726977127/26Jan_gcwizq.jpg",
      heading: "Republic Day",
      info: "The Raksham Workshop focused on enhancing skills and knowledge for youth empowerment, featuring interactive sessions and expert guidance.",
    },
    {
      imgSrc: "https://res.cloudinary.com/dxea0kghs/image/upload/v1726973034/WAD_y1u6br.jpg",
      heading: `World's AIDS Day`,
      info: `NSS's World AIDS Day campaign raised awareness about HIV/AIDS, promoting prevention, testing, and support to combat stigma and spread knowledge.`,
    },
    {
      imgSrc: "https://res.cloudinary.com/dxea0kghs/image/upload/v1726973024/Blood_fzfrmo.jpg",
      heading: "Blood Donation",
      info: `NSS's blood donation campaign successfully collected 110 units of blood, raising awareness and emphasizing the importance of life-saving donations.`,
    },
    {
      imgSrc: "https://res.cloudinary.com/dxea0kghs/image/upload/v1726973021/plantation_pavt8f.jpg",
      heading: "Plantation",
      info: "NSS organized a plantation drive to enhance green spaces, promoting environmental awareness and encouraging community participation in tree planting.",
    },
  ];


const eventsContainer = document.getElementById("SwiperWrapper");
  
let eventCardsHTML = '';
events.forEach((event) => {
  const eventCard = `
    <div class="swiper-slide">
      <div class="card">
        <div class="card-image">
          <img src="${event.imgSrc}">
        </div>
        <div class="card-content">
          <p class="card-heading">${event.heading}</p>
          <p class="eventinfo">${event.info}</p>
        </div>
      </div>
    </div>`;
  eventCardsHTML += eventCard;
});


eventsContainer.innerHTML = eventCardsHTML;

const swiper = new Swiper(".EffortSwiper", {
    slidesPerView: 1,
    spaceBetween: 5,
    speed:2000,
    autoplay: {
      delay: 0,
    },
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
   
  });
  
});

