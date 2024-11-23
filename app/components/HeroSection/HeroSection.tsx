"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AsciiBackground from "./components/AsciiBackground";
import { ascii } from "./ascii";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const titleRef = React.useRef<HTMLDivElement | null>(null);
  const bgRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.set(containerRef.current, { opacity: 1 });
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
      animation: gsap.from(bgRefs.current, {
        scale: 0,
        opacity: 0,
        stagger: {
          each: 0.1,
          from: "end",
        },
      }),
      pin: true,
      scrub: true,
    });
  });

  return (
    <section
      ref={containerRef}
      className=" w-screen opacity-0  bg-gradient-to-b from-slate-900 via-black to-slate-900"
    >
      <div className="relative z-10 flex items-center justify-center w-full h-screen flex-col gap-4 text-white ">
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
        refs={bgRefs}
      />
    </section>
  );
}
