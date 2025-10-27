import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".supports-section",
      start: "top 60%", // mulai animasi ketika 60% section udah masuk viewport
      toggleActions: "play none none reverse",
    },
  });

  tl.to(".supports-title", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
  })
    .to(
      ".supports-marquee",
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    );

  // Opsional: Pause marquee sampai section kelihatan
  const marquee = document.querySelector(".marquee-track");
  marquee.style.animationPlayState = "paused";

  ScrollTrigger.create({
    trigger: ".supports-section",
    start: "top 60%",
    onEnter: () => (marquee.style.animationPlayState = "running"),
    onLeaveBack: () => (marquee.style.animationPlayState = "paused"),
  });
});
