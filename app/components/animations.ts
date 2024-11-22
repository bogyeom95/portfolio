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
    // 애니메이션 완료 후 분할된 텍스트를 원래대로 복구하려면 아래 주석을 해제하세요.
    // tl.eventCallback("onComplete", () => {
    //   splitElement.revert();
    // });
  }
  return tl;
}

export function animateHorizontal(horizontalRefs: (HTMLHRElement | null)[]) {
  const tl = gsap.timeline();

  tl.from(
    horizontalRefs.filter((ref) => ref !== null),
    {
      scaleX: 0, // x 방향으로 작게 시작
      opacity: 0, // 완전히 투명하게 시작
      transformOrigin: "left center", // 왼쪽에서 확장되도록 설정
      duration: 1.5, // 애니메이션 지속 시간
      ease: "power2.out", // 부드러운 감속 효과
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
