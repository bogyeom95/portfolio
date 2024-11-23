"use client";
import React from "react";
import { ascii } from "./ascii";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const titleRef = React.useRef<HTMLDivElement | null>(null);

  const bgRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline();
    if (titleRef.current) {
      const titleAnimation = gsap.timeline({ repeat: -1 });
      const titleSplitText = new SplitType(titleRef.current, {
        types: "chars",
      });
      titleAnimation.from(titleSplitText.chars, {
        y: gsap.utils.wrap([-30, 30]),
        opacity: 0,
        filter: "blur(10px)",
        scale: 2.0,
        stagger: {
          each: 0.1,
          from: "center",
        },
      });
      titleAnimation.to(titleSplitText.chars, {
        y: gsap.utils.wrap([-30, 30]),
        opacity: 0,
        x: gsap.utils.distribute({
          base: -30,
          amount: 30,
        }),
        scale: 2.0,
        delay: 3,
        stagger: {
          each: 0.1,
          ease: "power3.inOut",
          from: "center",
        },
      });
      tl.add(titleAnimation, 0);
    }

    if (bgRefs.current) {
      tl.from(
        bgRefs.current,
        {
          y: gsap.utils.wrap([-30, 30]),
          opacity: 0,
          filter: "blur(3px)",

          ease: "power3.inOut",
          stagger: {
            each: 0.05,
            from: "start",
            repeat: -1,

            repeatDelay: 3,
          },
        },
        0
      );
    }

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center",
      end: "bottom center",

      markers: true,
      animation: tl,

      // defaults enter leave enterBack leaveBack
      toggleActions: "restart pause restart pause",
    });
  });

  return (
    <section
      ref={containerRef}
      className="relative w-screen h-screen flex flex-col justify-between"
    >
      {/* 콘텐츠 영역 */}
      <div className="relative z-10 flex items-center justify-center w-full h-full flex-col gap-4 text-white ">
        <h1
          ref={titleRef}
          className=" text-4xl sm:text-6xl lg:text-8xl font-bold"
        >
          My Portfolio
        </h1>
      </div>

      {/* ASCII 배경 */}
      <div
        className="absolute bottom-0 left-0 right-0 text-gray-700 whitespace-pre
      text-[8px] sm:text-[14px]"
        style={{
          fontFamily: "monospace",
          lineHeight: "1.2",
          overflow: "hidden",
          pointerEvents: "none", // 상호작용 방지
        }}
      >
        {ascii.split("\n").map((line, index) => (
          <div
            ref={(el) => {
              if (el) bgRefs.current[index] = el;
            }}
            key={index}
          >
            {line}
          </div>
        ))}
      </div>
    </section>
  );
}
