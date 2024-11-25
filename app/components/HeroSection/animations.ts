import gsap from "gsap";
import SplitType from "split-type";

export function animateHeroTitle(titleRef: React.RefObject<HTMLElement>) {
  const tl = gsap.timeline();

  if (titleRef.current) {
    const titleSplitText = new SplitType(titleRef.current, {
      types: "chars",
    });
    tl.from(titleSplitText.chars, {
      y: gsap.utils.wrap([-30, 30]),
      opacity: 0,
      filter: "blur(3px)",
      scale: 3.0,
      duration: 1.5,
      stagger: {
        each: 0.1,
        from: "center",
      },
    });
  }
  return tl;
}
