
document.addEventListener("DOMContentLoaded", () => {
    const mevents = [
      {
          imgSrc: 'https://res.cloudinary.com/dxea0kghs/image/upload/v1726973500/NSSday_upxdvl.jpg',
          name: 'NSS Day Celebration',
          content: `NSS Day 2023 at IET DAVV, part of the Freshmen Orientation "SAMANVAY," celebrated the National Service Scheme's establishment. The event began with a lamp-lighting ceremony led by Chief Guest Dr. Sachin Sharma and Dr. Dheeraj Mandloi, honoring “MAA SARASWATI.” Dr. Sharma introduced NSS and its community goals, ending with a special NSS clap. The program featured a skit on NSS’s role, the distribution of NSS appointment letters to core team members, and B certificates to participants. Tapesh Sir concluded with a vote of thanks, and the event ended with the national anthem.`
      },
      {
          imgSrc: 'https://res.cloudinary.com/dxea0kghs/image/upload/v1726973501/VotersAwareness_d6tst0.jpg',
          name: 'VOTERS AWARENESS',
          content: `On November 3, IET DAVV hosted a “Voting Awareness” event to tackle
            the decline in local newspaper coverage and the spread of fake
            information. The event focused on the significance of voting and
            featured a “NUKKAD NATAK” performed by students. This street play
            illustrated the power of each vote and the impact on society, while
            also informing voters about government facilities. The performance
            took place at Navlakha bus stand and RNT Marg, Nalanda Campus DAVV,
            aiming to educate and motivate citizens, increase voter turnout, and
            promote civic responsibility to reinforce democracy.`
      },
      {
          imgSrc: 'https://res.cloudinary.com/dxea0kghs/image/upload/v1726973646/Blood_xx7dye.jpg',
          name: 'Blood Donation',
          content: `NSS IET DAVV organized a successful blood donation and awareness
            camp in collaboration with MY Hospital’s blood bank and DAVV’s
            health center. The preceding day's awareness program included expert
            talks, posters, and presentations to educate participants and dispel
            myths about blood donation. On the camp day, students and staff were
            encouraged to donate, with thorough health checks before donation.
            The event collected 70 units of blood, benefiting patients,
            especially those with sickle cell disease. The camp raised awareness
            and showcased strong participation from students and staff, with
            hopes for future similar events.`
      },
      {
          imgSrc: 'https://res.cloudinary.com/dxea0kghs/image/upload/v1726973501/Life-Challenges-Seminar_w61m7d.jpg',
          name: 'Facing Life Challenges-Seminar',
          content: ` NSS IET-DAVV hosted an inspiring session on "Facing Life Problems"
            with Youth Mentor and Motivational Speaker His Grace Krishnapada Das
            Ji. The event began with the Kulgeet and a lamp-lighting ceremony
            before Maa Saraswati. Guruji shared wisdom on managing mental
            pressures, using the metaphor of a charioteer to illustrate
            controlling one's senses amidst distractions. He also spoke about
            his organization’s efforts to aid the less fortunate, emphasizing
            service and compassion. The session ended with chanting the holy
            name of Krishna and a Q&A, providing students with valuable life
            lessons and inspiration to tackle challenges with confidence and
            inner strength.`
      },
      {
          imgSrc: 'https://res.cloudinary.com/dxea0kghs/image/upload/v1726973503/Yuva-Utsav_fbvtuz.jpg',
          name: 'District Level Yuva Utsav',
          content: `On May 25th, the Ministry of Youth Affairs and Sports, in
            collaboration with Nehru Yuva Kendra and IET NSS, held the
            district-level Youth Utsav Bharat @ 2047 at Devi Ahilya University.
            The event focused on youth development and the Panch Pran of Amrit
            Kaal, as outlined by the Prime Minister. It began with prayers,
            lamp-lighting, and singing the Kul Geet. The first competition
            highlighted civic duty, national unity, and pride in Indian
            heritage. Cultural programs featured Rajasthani, Tamil, and
            Maharashtrian folk dances to enhance patriotism. Notable attendees
            included MP Shankar Lalwani, Dr. Nishant Khare, and NSS District
            Organizer Sachin Sharma. The event, guided by Nehru Yuva Kendra's
            Tara Pargo and Vijay Yadav, was praised for promoting youth
            development and national pride.`
      },
  
      {
          imgSrc: 'https://res.cloudinary.com/dxea0kghs/image/upload/v1726973503/yoga_nxesib.jpg',
          name: 'Yoga Day Celebration',
          content: ` On International Yoga Day, NSS - IET DAVV organized a yoga session
            themed "YOGA SE HI HOGA," emphasizing physical fitness. Held at 8
            am, the session was guided by Yoga faculties Rashmi Mam and Juhi Mam
            from Nature Pace Classes of Yoga, with Dr. Prakash Gadhwal, head of
            NSS-Indore Division, and Mrs. Seema Chouhan Mam attending as guests.
            The session was well-received by students, who found it energizing
            and calming. The faculties highlighted yoga's benefits for physical,
            mental, and spiritual well-being. The event concluded with
            refreshments of bananas, sprouts, and fruits for the participants.`
      },
      {
          imgSrc: 'https://res.cloudinary.com/dxea0kghs/image/upload/v1726973503/teachersDay_gnjhul.jpg',
          name: 'Teachers Day Celebration',
          content: ` To honor the teachers of IET-DAVV, a special program was held at 12
            p.m., starting with a lamp-lighting ceremony and singing the Kulgeet
            to pay tribute to Devi Saraswati and the institution. The event
            featured various student performances, including speeches, poetry, a
            song, and a comedy act, all aimed at celebrating the student-teacher
            relationship and bringing joy to the teachers. Momentos were
            presented to show gratitude, and refreshments were provided. The day
            was further enriched by unexpected singing performances from
            teachers, making the event memorable. Organized by NSS, the program
            successfully celebrated Teachers' Day and left a lasting impression.`
      },
    
    ];
  
    const mainEventContainer = document.getElementById("mainevent");
  
    mevents.forEach((mevent) => {
      const meventCard = ` <div class="card-wrapper">
          <div class="event-img">
            <img src="${mevent.imgSrc}" alt="loading..." />
          </div>
          <div class="event-content">
            <p class="event-heading">${mevent.name}</p>
            <p class="event-info">
              ${mevent.content}
            </p>
          </div>
        </div>`;
      mainEventContainer.innerHTML += meventCard;
    });
  });
  

  

let typeSplit8 = new SplitType('p.contact-text', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('p.contact-text span.word', {
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
