"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animateAsciiBG } from "../animations";
import AsciiBackground from "../AsciiBackground";
import { ascii } from "./ascii";
import { animateHeroTitle } from "./animations";
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const titleRef = React.useRef<HTMLDivElement | null>(null);
  const bgRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const scrollHintRef = React.useRef<HTMLButtonElement | null>(null);

  useGSAP(() => {
    animateHeroTitle(titleRef);

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
          if (self.progress > 0.9) {
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

  const handleScrollHintClick = () => {
    if (containerRef.current) {
      const scrollPosition = 2000;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={containerRef}
      className=" w-screen h-screen bg-gradient-to-b from-slate-900 via-black to-slate-900 flex items-center justify-center "
    >
      <div className="z-10">
        <span
          ref={titleRef}
          className="text-5xl sm:text-7xl lg:text-9xl font-extrabold  text-white "
        >
          BOGYEOM
          <br />
          PORTFOLIO
        </span>
      </div>

      <AsciiBackground
        ascii={ascii}
        height={150}
        width={200}
        blockSize={10}
        xPosition="left-0"
        refs={bgRefs}
        animate={true}
      />

      <button
        ref={scrollHintRef}
        className="absolute bottom-16 text-center text-white z-50"
        style={{
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        onClick={handleScrollHintClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className="w-12 h-12  animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </section>
  );
}
