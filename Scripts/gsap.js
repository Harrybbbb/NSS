gsap.registerPlugin(ScrollTrigger);

let typeSplit = new SplitType('p.motto-text', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('p.motto-text span.word', {
  y: '100%',
  opacity: 0,
  duration: 0.6,
  ease: 'sine.in',
  stagger: 0.1,
  
  scrollTrigger: {
    trigger: 'p.motto-text',
    start: 'top center',
    
  }
})




let typeSplit2 = new SplitType('p.about-text', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('p.about-text span.line', {
  y: '100%',
  opacity: 0,
  duration: 0.6,
  ease: 'sine.out',
  stagger: 0.2,
  
  // scrollTrigger: {
  //   trigger: 'p.about-text',
  //   start: 'top center',
    
  // }
})

let typeSplit3 = new SplitType('p.heading-text', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('p.heading-text span.word', {
  y: '100%',
  opacity: 0,
  duration: 0.6,
  ease: 'none.out',
  stagger: 0.1,
  
  scrollTrigger: {
    trigger: 'p.heading-text',
    start:'top 80%',
  }
})



let typeSplit4 = new SplitType('p.head', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('p.head span.word', {
  y: '100%',
  opacity: 0,
  duration: 0.6,
  ease: 'sine.in',
  stagger: 0.1,
  
  scrollTrigger: {
    trigger: 'p.head',
    start: 'top 70%',
    
  }
})

let typeSplit5 = new SplitType('p.main', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('p.main span.line', {
  y: '100%',
  opacity: 0,
  duration: 0.6,
  ease: 'sine.out',
  stagger: 0.2,
  
  scrollTrigger: {
    trigger: 'p.about-text',
    start: 'bottom 50%',
  
    
  }
})

let typeSplit6 = new SplitType('p.effort-text', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('p.effort-text span.word', {
  y: '100%',
  opacity: 0,
  duration: 0.6,
  ease: 'none.out',
  stagger: 0.1,
  
  scrollTrigger: {
    trigger: 'p.effort-text',
    start:'top center',
  }
})

let typeSplit7 = new SplitType('p.social-text', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('p.social-text span.word', {
  y: '100%',
  opacity: 0,
  duration: 0.6,
  ease: 'none.out',
  stagger: 0.1,
  
  scrollTrigger: {
    trigger: 'p.social-text',
    start:'top center',
  }
})



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




