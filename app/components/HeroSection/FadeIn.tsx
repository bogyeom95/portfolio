"use client";
import { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";

type Props = {
  tl: gsap.core.Timeline | undefined;
  children: ReactNode;
  vars?: gsap.TweenVars; // GSAP 애니메이션 옵션
};

export default function FadeIn({ children, vars, tl }: Props) {
  const el = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!tl) return; // Null 체크
    if (!el.current) return; // Null 체크

    tl.from(el.current, { opacity: 0, ...vars });

    return () => {}; // Cleanup
  }, [tl, vars]);

  return <div ref={el}>{children}</div>;
}
