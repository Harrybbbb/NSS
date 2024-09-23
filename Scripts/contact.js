

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
  
  
  
  
  