document.addEventListener('DOMContentLoaded', ()=> {
    const mentors = [
      {

            imgSrc: 'https://res.cloudinary.com/dxea0kghs/image/upload/v1728661794/1000138476-removebg-preview_lhhuee.png',
            name: 'Rakesh Singhai',
            post:'Vice Chancellor',
            quote: `"Lead by example in your actions, not just words. Demonstrating
              integrity, responsibility, and commitment inspires others to
              follow suit."`
        },
        {
            imgSrc: 'https://res.cloudinary.com/dxea0kghs/image/upload/v1726951708/ajay_rwmimy.jpg',
            name: 'Dr. Ajay Verma',
            post:'Registrar DAVV',
            quote: `"Cultivate empathy and understanding towards diverse communities.
              Effective service requires seeing the world through the eyes of
              those you aim to help."`
        },
        
        {
           imgSrc: 'https://res.cloudinary.com/dxea0kghs/image/upload/v1726951708/Sachin_figsnp.jpg',
            name: ' Dr.Sachin Sharma',
            post:'NSS District Head',
            quote: `"Work collaboratively with peers and community members. Building
              strong networks can enhance your impact and provide valuable
              support and resources."`
        },
        {
          imgSrc: 'https://res.cloudinary.com/dxea0kghs/image/upload/v1726951709/prakash_smybx1.jpg',

            name: 'Dr. Prakash Gadwal',
            post:'NSS Program Coordinator',
            quote: `"View your NSS experience as an opportunity for continuous
              learning. Every challenge is a chance to grow and develop new
              skills that will benefit you throughout life."`
        },
        {
          imgSrc: 'https://res.cloudinary.com/dxea0kghs/image/upload/v1727153218/vrinda_kvldtk.png',
          name: 'Dr. Vrinda Tokekar',
          post:'Director DAVV',
          quote: `"Service often comes with challenges. Develop perseverance and
            resilience to overcome obstacles and achieve meaningful outcomes."`
      },
      {
          imgSrc: 'https://res.cloudinary.com/dxea0kghs/image/upload/v1726951711/sanjiv_csqyzm.jpg',
          name: 'Dr. Sanjiv Tokekar',
          post:'Former  Director DAVV',
          quote: `"Service often comes with challenges. Develop perseverance and
            resilience to overcome obstacles and achieve meaningful outcomes."`
      },
        {
            imgSrc: 'https://res.cloudinary.com/dxea0kghs/image/upload/v1726951712/tapesh_valklp.jpg',
            name: 'Tapesh Sarsodia',
            post:'Programm incharge',
            quote: `"Regularly reflect on your service experiences. Use these
          reflections to identify areas for improvement and to better
          understand the impact of your work on the community and yourself."`
        },
    ];

    const mentorContainer = document.getElementById('mentor')

     mentors.forEach((mentor)=> {
        const mentorCard = `<div class="mentor-card">
        <div class="mentor-img"><img src="${mentor.imgSrc}"></div>
        <div class="mentor-info"><p>${mentor.name}</p><p class="mentor-post">${mentor.post}</p></div>
        <div class="quote"><p>${mentor.quote}</p></div>
      </div>`

        mentorContainer.innerHTML += mentorCard
     })
})



let typeSplit10 = new SplitType('p.mentor-text', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('p.mentor-text span.word', {
  y: '100%',
  opacity: 0,
  duration: 0.6,
  ease: 'none.out',
  stagger: 0.1,

  // scrollTrigger: {
  //   trigger: 'p.about-text',
  //   start: 'top center',
    
  // }
})
