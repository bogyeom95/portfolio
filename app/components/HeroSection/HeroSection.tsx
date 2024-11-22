"use client";

import { ReactNode, useRef } from "react";
import { FaBaby, FaHome, FaUser } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { GiWeightLiftingUp } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Horizontal from "@/components/Horizontal";
import CardList from "./components/CardList";
import {
  animateCards,
  animateContainer,
  animateSplitText,
} from "../animations";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const cardListHeaderRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.add(animateContainer(containerRef))
      .add(animateSplitText(titleRef, { y: -30 }), 0)
      .add(
        animateSplitText(descriptionRef, {
          y: 30,
          stagger: {
            each: 0.05,
            ease: "linear",
          },
        }),
        0
      )
      .add(animateSplitText(cardListHeaderRef, { y: 30 }))
      .add(animateCards(cardRefs.current), "<");

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "-=100 top",
      end: `+=1000`,
      animation: tl,

      pin: true,
      markers: true,

      // defaults enter leave enterBack leaveBack
      // toggleActions: "none none none none",
      toggleActions: "restart reverse restart reverse",
    });
  }, []);
  return (
    <section
      ref={containerRef}
      className="relative w-screen   mt-20 sm:mt-0 opacity-0"
    >
      <div className="flex flex-col  gap-4 pt-16 px-4 sm:p-20 justify-center ">
        <Horizontal />
        <h1
          ref={titleRef}
          className="text-2xl sm:text-4xl lg:text-6xl text-slate-100   font-bold"
        >
          안녕하세요.
          <br />
          주니어 개발자 김보겸입니다.
        </h1>
        <Horizontal />
        <div
          ref={descriptionRef}
          className="text-sm sm:text-lg lg:text-xl  text-slate-300 mt-4"
        >
          복잡한 문제를 간단히 해결하는 데 집중하며, <br />
          현재 프론트엔드 개발에 깊은 관심을 가진 개발자입니다.
        </div>

        <Horizontal />

        <div className="w-full bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1
            ref={cardListHeaderRef}
            className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold text-center mb-6 border-b-2 border-slate-500 pb-2"
          >
            About Me
          </h1>
          <CardList items={aboutMeItems} cardRefs={cardRefs} />
        </div>

        <Horizontal />
      </div>
    </section>
  );
}

export type AboutMeItem = {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
};

const aboutMeItems: AboutMeItem[] = [
  {
    id: 1,
    icon: <FaUser className="text-slate-100" />,
    title: "이름",
    description: "김보겸",
  },
  {
    id: 2,
    icon: <FaBaby className="text-slate-100" />,
    title: "생일",
    description: "1995년 4월 18일",
  },
  {
    id: 3,
    icon: <FaHome className="text-slate-100" />,
    title: "집",
    description: "경기도 구리시",
  },
  {
    id: 4,
    icon: <IoIosMail className="text-slate-100" />,
    title: "메일",
    description: "95bogyeom@gmail.com",
  },

  {
    id: 5,
    icon: <FaPencil className="text-slate-100" />,
    title: "학력",
    description: "강원대학교 (컴퓨터과학과)",
  },
  {
    id: 6,
    icon: <GiWeightLiftingUp className="text-slate-100" />,
    title: "취미",
    description: "웨이트트레이닝",
  },
];
