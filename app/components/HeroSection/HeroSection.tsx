"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { ascii } from "./ascii";
gsap.registerPlugin(ScrollTrigger);
function generateAsciiBlocks(
  asciiArt: string,
  size: number,
  maxWidth: number,
  maxHeight: number
): string[] {
  const blocks: string[] = [];

  const lines = asciiArt.split("\n");

  while (lines.length < maxHeight) {
    lines.push(""); // 부족한 줄은 빈 줄로 추가
  }

  // 각 줄이 빈 문자열(`''`)인 경우 공백으로 대체하고 길이 맞추기
  const paddedLines = lines.map((line) =>
    line.length < maxWidth
      ? line.padEnd(maxWidth, " ")
      : line.substring(0, maxWidth)
  );

  for (let row = 0; row < maxHeight; row += size) {
    for (let col = 0; col < maxWidth; col += size) {
      let block = "";

      for (let r = row; r < row + size && r < maxHeight; r++) {
        const lineSegment = paddedLines[r]
          .substring(col, col + size)
          .padEnd(size, " "); // 부족한 부분은 공백으로 채움
        block += lineSegment + "\n";
      }

      blocks.push(block.trimEnd());
    }
  }

  return blocks;
}

export default function HeroSection() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const titleRef = React.useRef<HTMLDivElement | null>(null);

  const bgRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline();
    if (titleRef.current) {
      const titleAnimation = gsap.timeline();
      const titleSplitText = new SplitType(titleRef.current, {
        types: "chars",
      });
      titleAnimation.from(titleSplitText.chars, {
        y: gsap.utils.wrap([-30, 30]),
        opacity: 0,

        scale: 2.0,
        stagger: {
          each: 0.1,
          from: "center",
        },
      });

      tl.add(titleAnimation, 0);
    }

    if (bgRefs.current) {
      const bgAnimation = gsap.timeline();

      bgAnimation.from(
        bgRefs.current,

        {
          duration: 1.5,
          y: 10,
          scale: 0,
          ease: "power3",
          stagger: {
            each: 0.1,
            grid: "auto",
            from: "center",
            repeat: -1,
            yoyo: true,
          },
        }
      );

      tl.add(bgAnimation, 0);
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
        className="absolute bottom-0  text-gray-500 whitespace-pre
    text-[8px] md:text-[10px] font-mono"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${100 / 5}, auto)`, // 블록 열 개수
          maxWidth: "100ch",
          maxHeight: "75em",
          overflow: "hidden",
          pointerEvents: "none", // 상호작용 방지
        }}
      >
        {generateAsciiBlocks(ascii, 5, 100, 75).map((block, index) => (
          <div
            ref={(el) => {
              if (el) bgRefs.current[index] = el;
            }}
            key={index}
          >
            {block}
          </div>
        ))}
      </div>
    </section>
  );
}
