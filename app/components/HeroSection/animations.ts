// animations.ts
import gsap from "gsap";
import SplitType from "split-type";

export function animateContainer(
  containerRef: React.RefObject<HTMLDivElement>
) {
  const tl = gsap.timeline();
  tl.to(containerRef.current, { opacity: 1, duration: 0.5 });
  return tl;
}

export function animateTitle(titleRef: React.RefObject<HTMLDivElement>) {
  const tl = gsap.timeline();
  if (titleRef.current) {
    const splitTitle = new SplitType(titleRef.current, { types: "chars" });
    tl.from(splitTitle.chars, {
      y: -30,
      duration: 1,
      opacity: 0,
      ease: "back(3)",
      stagger: 0.05,
    });
    tl.eventCallback("onComplete", () => {
      splitTitle.revert();
    });
  }
  return tl;
}

export function animateDescription(
  descriptionRef: React.RefObject<HTMLParagraphElement>
) {
  const tl = gsap.timeline();
  if (descriptionRef.current) {
    const splitDescription = new SplitType(descriptionRef.current, {
      types: "chars",
    });
    tl.from(splitDescription.chars, {
      y: 30,
      opacity: 0,
      ease: "back(3)",
      stagger: 0.05,
    });
    tl.eventCallback("onComplete", () => {
      splitDescription.revert();
    });
  }
  return tl;
}

export function animateCardListHeader(
  cardListHeaderRef: React.RefObject<HTMLDivElement>
) {
  const tl = gsap.timeline();
  if (cardListHeaderRef.current) {
    const splitCardListHeader = new SplitType(cardListHeaderRef.current, {
      types: "chars",
    });
    tl.from(splitCardListHeader.chars, {
      y: 30,
      opacity: 0,
      duration: 0.5,
      ease: "back(3)",
      stagger: 0.05,
    });
    tl.eventCallback("onComplete", () => {
      splitCardListHeader.revert();
    });
  }
  return tl;
}

export function animateCards(cardRefs: (HTMLDivElement | null)[]) {
  const tl = gsap.timeline();
  tl.from(
    cardRefs.filter((ref) => ref !== null),
    {
      y: 100,
      opacity: 0,

      stagger: {
        each: 0.05,
        ease: "back(3)",
      },
    }
  );
  return tl;
}
