import gsap from "gsap";
// 배경 요소 애니메이션
export function animateAsciiBackgrounds(bgRefs: (HTMLDivElement | null)[]) {
  const tl = gsap.timeline();
  const validRefs = bgRefs.filter((ref) => ref !== null);
  if (validRefs.length > 0) {
    tl.from(validRefs, {
      duration: 1.5,
      y: 10,
      scale: 0,
      ease: "power3",
      stagger: {
        each: 0.1,
        grid: "auto",
        from: "center",
        repeat: -1,
        yoyo: true,
      },
    });
  }
  return tl;
}
