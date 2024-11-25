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
  const containerRef = React.useRef<HTMLElement | null>(null);
  const titleRef = React.useRef<HTMLDivElement | null>(null);
  const bgRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    animateHeroTitle(titleRef);

    const tl = animateAsciiBG(bgRefs, {
      scale: 0,
      opacity: 0,
      rotation: 30,
      ease: "back.out(1)",
      stagger: {
        each: 0.1,
        from: "end",
      },
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=2000",
      animation: tl,
      pin: true,
      scrub: true,
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
      className="relative  w-screen h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-black to-slate-900 "
    >
      <div className="z-10  relative  w-screen h-screen flex items-center justify-center ">
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
        animate={false}
      />

      <button
        onClick={handleScrollHintClick}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          marginLeft: "-18px",
          border: "0",
          outline: "0",
          width: "36px",
          height: "36px",
          color: "white",
          zIndex: 100,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
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
