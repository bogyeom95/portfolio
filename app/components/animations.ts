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
    ease: "back(3)",
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

export function animateHorizontal(horizontalRefs: (HTMLHRElement | null)[]) {
  const tl = gsap.timeline();

  tl.from(
    horizontalRefs.filter((ref) => ref !== null),
    {
      scaleX: 0,
      opacity: 0,
      transformOrigin: "left center",
      duration: 1.5,
    }
  );
  return tl;
}

export function animateCards(cardRefs: (HTMLDivElement | null)[]) {
  const tl = gsap.timeline();
  tl.from(
    cardRefs.filter((ref) => ref !== null),
    {
      y: 30,
      opacity: 0,

      stagger: {
        each: 0.05,
        ease: "back.out(3)",
      },
    }
  );
  return tl;
}

export function animateAsciiBG(
  refs: React.MutableRefObject<(HTMLDivElement | null)[]>,
  vars?: gsap.TweenVars
) {
  const defaultVars: gsap.TweenVars = {
    scale: 0.1,
    opacity: 0,
    rotation: 45,
    ease: "back.out(2)",
    stagger: {
      each: 0.01,
    },
  };

  const tl = gsap.timeline();

  tl.from(refs.current, {
    ...defaultVars,
    ...vars,
  });

  return tl;
}
