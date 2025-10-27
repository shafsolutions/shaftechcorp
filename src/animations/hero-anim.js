import gsap from "gsap";

if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero-text", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
    })
    .from(".hero-cta", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    }, "-=0.2");
  });
}
