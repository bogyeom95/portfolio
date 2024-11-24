"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AsciiBackground from "../AsciiBackground";
import SplitType from "split-type";
import { ascii } from "./ascii";
import { animateAsciiBG } from "../animations";
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const titleRef = React.useRef<HTMLDivElement | null>(null);
  const bgRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const scrollHintRef = React.useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (titleRef.current) {
      const titleAnimation = gsap.timeline();
      const titleSplitText = new SplitType(titleRef.current, {
        types: "chars",
      });
      titleAnimation.from(titleSplitText.chars, {
        y: gsap.utils.wrap([-30, 30]),
        opacity: 0,
        filter: "blur(3px)",
        scale: 3.0,
        stagger: {
          each: 0.1,
          from: "center",
        },
      });
    }

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=2000",
      animation: animateAsciiBG(bgRefs, {
        scale: 0,
        opacity: 0,
        rotation: 30,
        ease: "back.out(1)",

        stagger: {
          each: 0.1,
          from: "end",
        },
      }),
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        if (scrollHintRef.current) {
          if (self.progress > 0.8) {
            gsap.to(scrollHintRef.current, {
              opacity: 0,
              duration: 0.5,
            });
          } else {
            gsap.to(scrollHintRef.current, {
              opacity: 1,
              duration: 0.5,
            });
          }
        }
      },
    });
  });

  return (
    <section
      ref={containerRef}
      className=" w-screen bg-gradient-to-b from-slate-900 via-black to-slate-900"
    >
      <div className="relative z-10 flex items-center justify-center w-screen h-screen flex-col gap-4 text-white overflow-hidden">
        <span
          ref={titleRef}
          className="text-5xl sm:text-7xl lg:text-9xl font-extrabold  text-white "
        >
          BOGYEOM
          <br />
          <span className="text-5xl sm:text-7xl lg:text-9xl font-extrabold  text-white ">
            PORTFOLIO
          </span>
        </span>
      </div>

      <AsciiBackground
        ascii={ascii}
        height={150}
        width={200}
        blockSize={10}
        xPosition="left-0"
        refs={bgRefs}
      />

      <div
        ref={scrollHintRef}
        className="absolute bottom-16 text-center text-white"
        style={{
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="6"
          stroke="currentColor"
          className="w-6 h-6  animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
