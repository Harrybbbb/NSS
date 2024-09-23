let typeSplit9 = new SplitType("p.gallery-text", {
  types: "lines, words, chars",
  tagName: "span",
});

gsap.from("p.gallery-text span.word", {
  y: "100%",
  opacity: 0,
  duration: 0.6,
  ease: "none.out",
  stagger: 0.1,
});

document.addEventListener("DOMContentLoaded", () => {
  const campimages = [
    {
      imgSrc: "assets/gallery/camp/camp1.jpg",
    },
    {
      imgSrc: "assets/gallery/camp/camp2.jpg",
    },

    {
      imgSrc: "assets/gallery/camp/camp3.jpg",
    },

    {
      imgSrc: "assets/gallery/camp/camp4.jpg",
    },

    {
      imgSrc: "assets/gallery/camp/camp5.jpg",
    },
    {
      imgSrc: "assets/gallery/camp/camp6.jpg",
    },

    {
      imgSrc: "assets/gallery/camp/camp7.jpg",
    },

    {
      imgSrc: "assets/gallery/camp/camp8.jpg",
    },

    {
      imgSrc: "assets/gallery/camp/camp9.jpg",
    },
  ];

  const galleryContainer = document.getElementById("campgallery");

  campimages.forEach((image) => {
    const imgcard = ` <div data-aos="fade-right" data-aos-once="true" class="img-card">
          <img loading="lazy" src="${image.imgSrc}">
        </div>`;
    galleryContainer.innerHTML += imgcard;
  });

  AOS.init();
});

document.addEventListener("DOMContentLoaded", () => {
  const aidimages = [
    {
      imgSrc: "assets/gallery/aids/aids1.jpg",
    },
    {
      imgSrc: "assets/gallery/aids/aids2.jpg",
    },
    {
      imgSrc: "assets/gallery/aids/aids3.jpg",
    },
    {
      imgSrc: "assets/gallery/aids/aids4.jpg",
    },
    {
      imgSrc: "assets/gallery/aids/aids5.jpg",
    },
    {
      imgSrc: "assets/gallery/aids/aids5.jpg",
    },
  ];

  const galleryContainer = document.getElementById("aidgallery");

  aidimages.forEach((image) => {
    const imgcard = ` <div data-aos="fade-right" data-aos-once="true" class="img-card">
          <img loading="lazy" src="${image.imgSrc}">
        </div>`;
    galleryContainer.innerHTML += imgcard;
  });

  AOS.init();
});

document.addEventListener("DOMContentLoaded", () => {
  const bloodimages = [
    {
      imgSrc: "assets/gallery/blood/blood1.jpg",
    },
    {
      imgSrc: "assets/gallery/blood/blood2.jpg",
    },
    {
      imgSrc: "assets/gallery/blood/blood3.jpg",
    },
    {
      imgSrc: "assets/gallery/blood/blood4.jpg",
    },
    {
      imgSrc: "assets/gallery/blood/blood5.jpg",
    },
    {
      imgSrc: "assets/gallery/blood/blood6.jpg",
    },
  ];

  const galleryContainer = document.getElementById("bloodgallery");

  bloodimages.forEach((image) => {
    const imgcard = ` <div data-aos="fade-right" data-aos-once="true" class="img-card">
          <img loading="lazy" src="${image.imgSrc}">
        </div>`;
    galleryContainer.innerHTML += imgcard;
  });

  AOS.init();
});

document.addEventListener("DOMContentLoaded", () => {
  const plantimages = [
    {
      imgSrc: "assets/gallery/plantation/plant1.jpg",
    },
    {
      imgSrc: "assets/gallery/plantation/plant8.jpg",
    },
    {
      imgSrc: "assets/gallery/plantation/plant3.jpg",
    },
    {
      imgSrc: "assets/gallery/plantation/plant4.jpg",
    },

    {
      imgSrc: "assets/gallery/plantation/plant5.jpg",
    },

    {
      imgSrc: "assets/gallery/plantation/plant6.jpg",
    },

    {
      imgSrc: "assets/gallery/plantation/plant7.jpg",
    },
  ];

  const galleryContainer = document.getElementById("plantgallery");

  plantimages.forEach((image) => {
    const imgcard = ` <div data-aos="fade-right" data-aos-once="true" class="img-card">
          <img loading="lazy" src="${image.imgSrc}">
        </div>`;
    galleryContainer.innerHTML += imgcard;
  });

  AOS.init();
});

document.addEventListener("DOMContentLoaded", () => {
  const nicimages = [
    {
      imgSrc: "assets/gallery/nic/nic1.jpg",
    },
    {
      imgSrc: "assets/gallery/nic/nic2.jpg",
    },
    {
      imgSrc: "assets/gallery/nic/nic3.jpg",
    },
    {
      imgSrc: "assets/gallery/nic/nic4.jpg",
    },
    {
      imgSrc: "assets/gallery/nic/nic5.jpg",
    },
    {
      imgSrc: "assets/gallery/nic/nic6.jpg",
    },
  ];

  const galleryContainer = document.getElementById("nicgallery");

  nicimages.forEach((image) => {
    const imgcard = ` <div data-aos="fade-right" data-aos-once="true" class="img-card">
          <img loading="lazy" src="${image.imgSrc}">
        </div>`;
    galleryContainer.innerHTML += imgcard;
  });

  AOS.init();
});

document.addEventListener("DOMContentLoaded", () => {
  const rakshamimages = [
    {
      imgSrc: "assets/gallery/raksham/raksham1.jpg",
    },
    {
      imgSrc: "assets/gallery/raksham/raksham2.jpg",
    },
    {
      imgSrc: "assets/gallery/raksham/raksham3.jpg",
    },
    {
      imgSrc: "assets/gallery/raksham/raksham4.jpg",
    },
    {
      imgSrc: "assets/gallery/raksham/raksham5.jpg",
    },
  ];

  const galleryContainer = document.getElementById("rakshamgallery");

  rakshamimages.forEach((image) => {
    const imgcard = ` <div data-aos="fade-right" data-aos-once="true" class="img-card">
          <img loading="lazy" src="${image.imgSrc}">
        </div>`;
    galleryContainer.innerHTML += imgcard;
  });

  AOS.init();
});



document.addEventListener("DOMContentLoaded", () => {
  const teacherimages = [
    {
      imgSrc: "assets/gallery/teacher/teacher1.jpg",
    },
    {
      imgSrc: "assets/gallery/teacher/teacher2.jpg",
    },
    {
      imgSrc: "assets/gallery/teacher/teacher3.jpg",
    },
  ];

  const galleryContainer = document.getElementById("teachergallery");

  teacherimages.forEach((image) => {
    const imgcard = ` <div data-aos="fade-right" data-aos-once="true" class="img-card">
          <img loading="lazy" src="${image.imgSrc}">
        </div>`;
    galleryContainer.innerHTML += imgcard;
  });

  AOS.init();
});
