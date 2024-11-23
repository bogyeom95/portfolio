"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animateContainer, animateSplitText } from "../animations";
import { animateAsciiBackgrounds } from "./heroAnimation";
import AsciiBackground from "./components/AsciiBackground";
import { ascii } from "./ascii";
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const titleRef = React.useRef<HTMLDivElement | null>(null);

  const bgRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.add(animateContainer(containerRef))
      .add(animateSplitText(titleRef, { y: -30 }), 0)
      .add(animateAsciiBackgrounds(bgRefs.current), 0);

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
