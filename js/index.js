
new TypeIt("#type1", {
    speed: 120,
    loop: true,
    waitUntilVisible: true,
  })
    .type("Biomedical Tech Bachelor", { delay: 400 })
    .pause(500)
    .delete(25)
    .type("Maker", { delay: 400 })
    .pause(500)
    .delete(9)
    .type("Coder", { delay: 400 })
    .pause(500)
    .delete(9)
    .go();

gsap.from(".navbar-brand", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".site-title h3", { opacity: 0, duration: 1, delay: .8, y: -50 });
gsap.from(".site-title h1", { opacity: 0, duration: 1, delay: 1.2, y: -45 });
gsap.from(".site-image", { opacity: 0, duration: 1, delay: 1.2, x: -200 });
gsap.from(".nav-item", { opacity: 0, duration: 1, delay: 1.2, y: 30, stagger: 0.2});

/* Scroll Effect */

const sr = ScrollReveal({
  origin: 'top',
  distance: '90px',
  duration: 2000,
  reset: true
})

/* About */

sr.reveal('.about-image',{delay: 400})
sr.reveal('.about-title',{delay: 200})
sr.reveal('.site-buttons',{delay: 200})

/* About */

sr.reveal('.para',{delay: 300})
sr.reveal('.services',{interval: 200})

/* Qualifications */

sr.reveal('.time',{delay: 300})
/* Skill */

sr.reveal('.skill',{delay: 300})

$('.skill-per').each(function(){
  var $this = $(this);
  var perc = $this.attr('perc');
  $this.css("width",perc+'%');
  $({animatedValue: 0}).animate({animatedValue: perc},{
    duration: 2000,
    step: function(){
      $this.attr('perc', Math.floor(this.animatedValue) + '%');
    },
    complete: function(){
      $this.attr('perc', Math.floor(this.animatedValue) + '%');
    }
  });
});
sr.reveal('.skill-image',{delay: 300})
sr.reveal('h4',{delay: 200})