// pageContent.addEventListener("mousemove", function(dets){
//     cursor.style.left = dets.x + "px";
//     cursor.style.top = dets.y + "px";
// })
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#main'),
//   smooth: true
// });

function locoscroll(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}


function cursoreffect() {
  var pageContent = document.querySelector("#page-content");
  var cursor = document.querySelector("#cursor");
  pageContent.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });

  pageContent.addEventListener("mouseenter", function (dets) {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  pageContent.addEventListener("mouseleave", function (dets) {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}

function cursoreffect2() {
  var pageContent2 = document.querySelector("#page5-content");
  var cursor2 = document.querySelector("#cursor2");
  pageContent2.addEventListener("mousemove", function (details) {
    gsap.to(cursor2, {
      x: details.x,
      y: details.y,
    });
  });

  pageContent2.addEventListener("mouseenter", function (details) {
    gsap.to(cursor2, {
      scale: 1,
      opacity: 1,
    });
  });

  pageContent2.addEventListener("mouseleave", function (details) {
    gsap.to(cursor2, {
      scale: 0,
      opacity: 0,
    });
  });
}



function page2Animation(){
  gsap.from(".elem h1",{
    y: 120,
    stagger: 0.2,
    duaration: 1,
    scrollTrigger:{
      trigger: "#page2",
      scroller: "#main",
      start: "top 46%",
      end: "top 47%",
      scrub: 3
    }
  })
}


function page3Animation(){
   gsap.from("#page3-top h3",{
    y:140,
    stagger: 0.1,
    duaration: 1,
    scrollTrigger:{
      trigger: "#page3",
      scroller: "#main",
      start: "top 46%",
      end: "top 47%",
      scrub: 3
    }
   })
}



function page4Animation(){
  gsap.from(".elem4 h1",{
    y: 120,
    stagger: 0.2,
    duaration: 1,
    scrollTrigger:{
      trigger: "#page4",
      scroller: "#main",
      start: "top 46%",
      end: "top 47%",
      scrub: 3
    }
  })
}


function page6Animation(){
  gsap.from(".elem6 h1",{
    y: 120,
    stagger: 0.2,
    duaration: 1,
    scrollTrigger:{
      trigger: "#page6",
      scroller: "#main",
      start: "top 46%",
      end: "top 47%",
      scrub: 3
    }
  })
}

function aboutAnimation(){
  gsap.from(".abttext h3",{
    y: 120,
    stagger: 0.2,
    duaration: 1,
    scrollTrigger:{
      trigger: "#about",
      scroller: "#main",
      start: "top 46%",
      end: "top 47%",
      scrub: 3
    }
  })

}


function swiper(){
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
}


locoscroll();
cursoreffect();
cursoreffect2();
page2Animation();
page3Animation();
page4Animation();
page6Animation();
aboutAnimation();
swiper();

var t1 = gsap.timeline();

t1.from("#loader h3",{
  x: 40,
  opacity:0,
  duaration:1,
  stagger:0.1,
})
t1.to("#loader h3",{
  x: -40,
  opacity:0,
  duaration:1,
  stagger:0.1,
})

t1.to("#loader",{
  opacity:0
})
t1.to("#loader",{
   display: "none"
})

t1.from("#page-content h1 span",{
  y:100,
  opacity:0,
  stagger:0.2
})