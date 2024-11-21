"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function FadeIn({ children }) {
  const el = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (el.current)
      gsap.from(el.current.children, {
        duration: 1,
        y: 10,
        opacity: 0,
        stagger: {
          each: 0.5,
        },
      });
  });
  return <div ref={el}>{children}</div>;
}
