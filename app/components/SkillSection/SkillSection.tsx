"use client";

import Horizontal from "@/components/Horizontal";
import SkillList from "./components/SkillList";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import {
  animateAsciiBG,
  animateCards,
  animateHorizontal,
  animateSplitText,
} from "../animations";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AsciiBackground from "../AsciiBackground";
import { ascii } from "./ascii";
gsap.registerPlugin(ScrollTrigger);

export default function SkillSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const horizontalRefs = useRef<HTMLHRElement[]>([]);
  const bgRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.add(animateHorizontal(horizontalRefs.current), 0)
      .add(animateSplitText(titleRef, { y: -30 }), 0)
      .add(animateCards(cardRefs.current))
      .add(animateAsciiBG(bgRefs), 0);

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      end: "bottom 20%",
      animation: tl,
      toggleActions: "restart none restart none",
      // toggleActions:  onEnter, onLeave, onEnterBack, and onLeaveBack
    });
  }, []);

  return (
    <section ref={containerRef} className="relative w-screen h-screen ">
      <div className="z-10  relative flex flex-col pt-16  gap-2 sm:gap-4  px-4 sm:p-20   ">
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

      <AsciiBackground
        ascii={ascii}
        height={120}
        width={200}
        blockSize={20}
        refs={bgRefs}
      />
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
    { name: "Java", bg: "bg-red-600", text: "text-white" },
    { name: "Typescript", bg: "bg-blue-700", text: "text-white" },
    { name: "JavaScript", bg: "bg-yellow-500", text: "text-black" },
  ],
  frontend: [
    { name: "React", bg: "bg-blue-400", text: "text-white" },
    { name: "Next.js", bg: "bg-gray-900", text: "text-white" },

    { name: "React Query", bg: "bg-red-500", text: "text-white" },
    { name: "Context API", bg: "bg-blue-500", text: "text-white" },

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
    { name: "Redis", bg: "bg-red-600", text: "text-white" },
  ],
  messaging: [{ name: "RabbitMQ", bg: "bg-orange-500", text: "text-white" }],
  etc: [
    { name: "NCP", bg: "bg-green-800", text: "text-white" },
    { name: "AWS ", bg: "bg-orange-600", text: "text-white" },

    { name: "GitHub Actions", bg: "bg-purple-600", text: "text-white" },
    { name: "Jenkins", bg: "bg-gray-700", text: "text-white" },
    { name: "Docker", bg: "bg-blue-600", text: "text-white" },

    { name: "Nginx", bg: "bg-green-500", text: "text-white" },

    { name: "Postman", bg: "bg-orange-400", text: "text-white" },
    { name: "Swagger", bg: "bg-yellow-300", text: "text-black" },
  ],
};
