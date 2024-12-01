import gsap from "gsap";
import SplitType from "split-type";

export function animateContainer(
  containerRef: React.RefObject<HTMLDivElement>
) {
  const tl = gsap.timeline();
  tl.to(containerRef.current, { opacity: 1, duration: 0.5 });
  return tl;
}
export function animateSplitText(
  elementRef: React.RefObject<HTMLElement>,
  vars?: gsap.TweenVars
) {
  const defaultVars: gsap.TweenVars = {
    y: 30,
    opacity: 0,
    duration: 0.5,
    ease: "power3.inOut",
    stagger: 0.05,
  };

  const tl = gsap.timeline();
  if (elementRef.current) {
    const splitElement = new SplitType(elementRef.current, { types: "chars" });
    tl.from(splitElement.chars, {
      ...defaultVars,
      ...vars,
    });
  }
  return tl;
}

export function animateHorizontal(horizontalRefs: HTMLHRElement[]) {
  const tl = gsap.timeline();

  tl.from(
    horizontalRefs.filter((ref) => ref !== null),
    {
      scaleX: 0,
      opacity: 0,
      transformOrigin: "left center",
      duration: 1,
      ease: "power3.inOut",
    }
  );
  return tl;
}

export function animateCards(cardRefs: HTMLDivElement[]) {
  const tl = gsap.timeline();
  tl.from(
    cardRefs.filter((ref) => ref !== null),
    {
      y: 30,
      opacity: 0,

      stagger: {
        each: 0.05,
        ease: "power3.inOut",
      },
    }
  );
  return tl;
}

export function animateAsciiBG(
  refs: React.MutableRefObject<HTMLDivElement[]>,
  vars?: gsap.TweenVars
) {
  const defaultVars: gsap.TweenVars = {
    scale: 0.1,
    opacity: 0,
    rotation: 30,
    ease: "back.out(1.7)",
    stagger: {
      each: 0.025,
    },
  };

  const tl = gsap.timeline();

  tl.from(refs.current, {
    ...defaultVars,
    ...vars,
  });

  return tl;
}
