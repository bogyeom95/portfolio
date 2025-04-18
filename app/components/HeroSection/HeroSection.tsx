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
  const containerRef = React.useRef<HTMLElement>(null);
  const titleRef = React.useRef<HTMLDivElement>(null);
  const bgRefs = React.useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.add(animateHeroTitle(titleRef)).add(
      animateAsciiBG(bgRefs, {
        scale: 0,
        opacity: 0,
        ease: "power3.inOut",

        stagger: {
          each: 0.01,
          from: "center",
        },
      }),
      1
    );
  });

  return (
    <section ref={containerRef}>
      <div className="relative  w-screen h-screen flex items-center justify-center ">
        <div className="z-10  text-center">
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
          width={210}
          blockSize={15}
          xPosition="left-0"
          refs={bgRefs}
          animate={true}
        />
      </div>
    </section>
  );
}
