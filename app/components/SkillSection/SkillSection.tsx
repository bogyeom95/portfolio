"use client";

import Horizontal from "@/components/Horizontal";
import SkillList from "./components/SkillList";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import {
  animateCards,
  animateContainer,
  animateHorizontal,
  animateSplitText,
} from "../animations";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function SkillSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const horizontalRefs = useRef<(HTMLHRElement | null)[]>([]);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.add(animateContainer(containerRef))
      .add(animateHorizontal(horizontalRefs.current), 0)
      .add(animateSplitText(titleRef, { y: -30 }), 0)
      .add(animateCards(cardRefs.current));

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=2000`,
      animation: tl,

      pin: true,
      markers: true,

      // defaults enter leave enterBack leaveBack
      // toggleActions: "none none none none",
      toggleActions: "restart reverse restart reverse",
    });
  }, []);

  return (
    <section ref={containerRef} className="relative w-screen opacity-0 ">
      <div className="flex flex-col pt-16  gap-2 sm:gap-4  px-4 sm:p-20 justify-center ">
        <Horizontal
          ref={(el) => {
            if (el) horizontalRefs.current[0] = el;
          }}
        />
        <h1
          ref={titleRef}
          className="text-2xl sm:text-4xl lg:text-6xl text-slate-100   font-bold"
        >
          My Skills
        </h1>

        <Horizontal
          ref={(el) => {
            if (el) horizontalRefs.current[1] = el;
          }}
        />

        <SkillList skills={skills} cardRefs={cardRefs} />

        <Horizontal
          ref={(el) => {
            if (el) horizontalRefs.current[2] = el;
          }}
        />
      </div>
    </section>
  );
}

export type SkillItem = {
  name: string;
  bg: string;
  text: string;
};

export type Skills = {
  [category: string]: SkillItem[];
};

const skills: Skills = {
  language: [
    { name: "Typescript", bg: "bg-blue-700", text: "text-white" },
    { name: "JavaScript", bg: "bg-yellow-500", text: "text-black" },
    { name: "Java", bg: "bg-red-600", text: "text-white" },
  ],
  frontend: [
    { name: "React", bg: "bg-blue-400", text: "text-white" },
    { name: "Next.js", bg: "bg-gray-900", text: "text-white" },
    { name: "Bootstrap", bg: "bg-purple-600", text: "text-white" },
    { name: "TailwindCSS", bg: "bg-teal-500", text: "text-white" },
    { name: "gsap", bg: "bg-green-500", text: "text-white" },
  ],
  backend: [
    { name: "Spring", bg: "bg-green-700", text: "text-white" },
    { name: "JPA", bg: "bg-indigo-600", text: "text-white" },
    { name: "QueryDSL", bg: "bg-teal-600", text: "text-white" },
    { name: "JdbcTemplate", bg: "bg-yellow-500", text: "text-black" },
  ],
  database: [
    { name: "MySQL", bg: "bg-blue-500", text: "text-white" },
    {
      name: "MongoDB ",
      bg: "bg-green-600",
      text: "text-white",
    },
  ],
  etc: [
    { name: "NCP", bg: "bg-green-800", text: "text-white" },
    { name: "AWS ", bg: "bg-orange-600", text: "text-white" },
    { name: "GitHub Actions", bg: "bg-purple-600", text: "text-white" },
    { name: "Docker", bg: "bg-blue-600", text: "text-white" },
  ],
};
