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
  animateCardListHeader,
  animateCards,
  animateContainer,
  animateDescription,
  animateTitle,
} from "./animations";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const cardListHeaderRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.add(animateContainer(containerRef))
      .add(animateTitle(titleRef))
      .add(animateDescription(descriptionRef))
      .add(animateCardListHeader(cardListHeaderRef))
      .add(animateCards(cardRefs.current), "<");
  }, []);
  return (
    <section className="relative w-screen h-screen  mt-20 sm:mt-0">
      <div
        ref={containerRef}
        className="w-full h-full flex flex-col  gap-4 py-16 px-4 sm:p-20 justify-center opacity-0"
      >
        <h1
          ref={titleRef}
          className="text-2xl sm:text-4xl lg:text-6xl text-slate-100   font-bold"
        >
          안녕하세요.
          <br />
          주니어 개발자 김보겸입니다.
        </h1>

        <p
          ref={descriptionRef}
          className="text-sm sm:text-lg lg:text-xl  text-slate-300 mt-4"
        >
          복잡한 문제를 간단히 해결하는 데 집중하며, <br />
          현재 프론트엔드 개발에 깊은 관심을 가진 개발자입니다.
        </p>

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
