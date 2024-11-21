"use client";
import { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

type Props = {
  tl: gsap.core.Timeline | undefined;
  children: ReactNode;
  vars?: gsap.TweenVars; // GSAP 애니메이션 옵션
};

export default function SplitText({ children, vars, tl }: Props) {
  const el = useRef<HTMLSpanElement | null>(null);

  useGSAP(() => {
    if (!tl) return; // Null 체크
    if (!el.current) return; // Null 체크

    const split = new SplitType(el.current, { types: "chars" });

    tl.from(split.chars, { opacity: 0, ...vars });

    return () => split.revert(); // Cleanup
  }, [tl, vars]);

  return <span ref={el}>{children}</span>;
}
