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
  animateHorizontal,
  animateSplitText,
} from "../animations";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function AboutMeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const cardContainerRef = useRef<HTMLDivElement>(null);
  const cardTitleRef = useRef<HTMLDivElement>(null);
  const cardContentRefs = useRef<HTMLDivElement[]>([]);
  const horizontalRefs = useRef<HTMLHRElement[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.add(animateHorizontal(horizontalRefs.current), 0)
      .add(animateSplitText(titleRef, { y: -10 }), 0)
      .add(
        animateSplitText(descriptionRef, {
          y: 10,
          duration: 0.3,
          ease: "power3.inOut",
          stagger: {
            each: 0.03,
          },
        }),
        0
      )
      .add(animateContainer(cardContainerRef), 0)
      .add(animateSplitText(cardTitleRef, { y: 10 }))
      .add(animateCards(cardContentRefs.current), "<");

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center",
      end: "bottom center",
      animation: tl,
      toggleActions: "restart none restart none",
    });
  }, []);
  return (
    <section ref={containerRef} className=" w-screen">
      <div className="flex flex-col pt-16 gap-2 sm:gap-4  px-4 sm:p-20 justify-center ">
        <Horizontal
          ref={(el) => {
            if (el) horizontalRefs.current[0] = el;
          }}
        />

        <h1
          ref={titleRef}
          className="text-2xl sm:text-4xl lg:text-6xl text-slate-100   font-bold"
        >
          안녕하세요.
          <br />
          주니어 개발자 김보겸입니다.
        </h1>
        <Horizontal
          ref={(el) => {
            if (el) horizontalRefs.current[1] = el;
          }}
        />
        <div
          ref={descriptionRef}
          className="text-sm sm:text-lg lg:text-xl  text-slate-300"
        >
          Java, TypeScript를 기반으로 풀스택 개발 경험을 쌓아 왔으며,
          <br />
          현재는 쿠버네티스 기반 인프라 환경 구축에 많은 관심을 가지고 있습니다.
        </div>
        <Horizontal
          ref={(el) => {
            if (el) horizontalRefs.current[2] = el;
          }}
        />
        <div
          ref={cardContainerRef}
          className="w-full bg-gray-800 p-6 rounded-lg shadow-lg opacity-0"
        >
          <h1
            ref={cardTitleRef}
            className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold text-center mb-6 border-b-2 border-slate-500 pb-2"
          >
            About Me
          </h1>
          <CardList items={aboutMeItems} cardRefs={cardContentRefs} />
        </div>
        <Horizontal
          ref={(el) => {
            if (el) horizontalRefs.current[3] = el;
          }}
        />
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
    description: "강원대학교 졸업(컴퓨터과학과)",
  },
  {
    id: 6,
    icon: <GiWeightLiftingUp className="text-slate-100" />,
    title: "취미",
    description: "웨이트트레이닝",
  },
];
