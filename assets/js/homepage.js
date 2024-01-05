$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);
  let panels = gsap.utils.toArray(".pannel_container .pannel");


  // const scroller = new LocomotiveScroll({
  //   el: document.querySelector('[data-scroll-container]'),
  //   smooth: true
  // })
  // scroller.on('scroll', ScrollTrigger.update)

  // ScrollTrigger.scrollerProxy(
  //   '.first_part', {
  //   scrollTop(value) {
  //     return arguments.length ?
  //       scroller.scrollTo(value, 0, 0) :
  //       scroller.scroll.instance.scroll.y
  //   },
  //   getBoundingClientRect() {
  //     return {
  //       left: 0, top: 0,
  //       width: window.innerWidth,
  //       height: window.innerHeight
  //     }
  //   }
  // })


  // ScrollTrigger.addEventListener('refresh', () => scroller.update())


  // ScrollTrigger.refresh()


  const changeScrollColor = gsap.timeline();
  changeScrollColor.to("#home_sections .scroll_down_box", { borderColor: "#fff" })
    .to("#home_sections .point", { backgroundColor: "#fff" })


    const changeLogoColor = gsap.timeline();
    changeLogoColor.to(".custom_navbar .letterpath", {fill:"#fff", stagger: .1, ease: "linear"})
    


  // intro_section_content animation
  var introSectionFisrstAnimation = gsap.timeline();
  introSectionFisrstAnimation
    .from("#first_section .section_content .content_before_line .line", { width: "0", duration: 10, ease: 'linear', })
    .from(".text_wrap h5", {
      y: 210,
      duration: 10,
      ease: 'linear',
    })
    .to("#first_section .section_content .content_before_line .line", { left: "50%", transform: "translate(-50%, 0)" })
    .to("#first_section .section_content .content_before_line .line", { width: "0", duration: 10, ease: 'linear', })
    .from("#first_section .section_content .content_after_line .line", { height: "0", duration: 10, ease: 'linear', })
    .from("#first_section .section_content .middle_title", { scale: 0, duration: 10, ease: 'linear' })
  // .to(".section_content .content_before_line", { yPercent: -100, ease: 'linear' })



  var lineAnimation = gsap.timeline();
  lineAnimation
    .fromTo("#first_section .section_content .content_after_line .line_bottom", { height: "0", ease: 'linear' }, { height: "2300px", duration: 10, ease: 'linear' })
  // .to(".section_content .content_after_line .line_bottom", { height: "2300px", duration: 10, ease:'linear'})



  var introSectioSecondPartAnimation = gsap.timeline();
  introSectioSecondPartAnimation
    .from("#second_section .second_part .why_viola_img", { x: "150%", y: "80%", duration: 2, ease: 'linear' }, "<")
    .from("#second_section .second_part .why_viola_content h5", { x: "-150%", duration: 2, ease: 'linear' }, "<")
    .from("#second_section .second_part .pargraph_link", { x: "-150%", y: 140, duration: 2, ease: 'linear' }, "<")
    .to("#second_section .second_part", { x: "-120%", duration: 3, ease: 'linear', delay: .2 })
    .to("#second_section_second_pannel", { x: "-100%", duration: 3, ease: 'linear' }, "<")
    .add(changeScrollColor)
    .add(changeLogoColor, "<")

  // .to("#second_section_second_pannel", { x: "-100%", duration: 3, ease: 'linear' }, "<")

  // let scrollTween = gsap.to(panels, {
  //   xPercent: -100 * (panels.length - 1),
  //   ease: "none", // <-- IMPORTANT!
  //   scrollTrigger: {
  //     trigger: ".pannel_container",
  //     pin: true,
  //     // pinSpacing: true,
  //     scrub: 0.1,
  //     // snap: directionalSnap(1 / (panels.length - 1)),
  //     end: "+=3000"
  //   }
  // });

  ScrollTrigger.create({
    trigger: ".line_bottom",
    start: "+=200",
    end: "+=2700",
    scrub: 1,
    // pinSpacing: false,
    animation: lineAnimation,
  });

  ScrollTrigger.create({
    trigger: "#first_section",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true,
    pinSpacing: true,
    animation: introSectionFisrstAnimation,
  });

  ScrollTrigger.create({
    trigger: ".second_part",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true,
    pinSpacing: true,
    animation: introSectioSecondPartAnimation,
  });



})

// 


// gsap.set('#Path_73', { drawSVG: '0%' });

// gsap.to('#Path_73', {
//   duration: 10,
//   drawSVG: '100%',
//   ease: 'power1.inOut' // Change the ease as needed
// });