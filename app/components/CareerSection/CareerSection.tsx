"use client";
import Horizontal from "@/components/Horizontal";
import { useRef } from "react";
import { animateHorizontal } from "../animations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CareerList from "./components/CareerList";
gsap.registerPlugin(ScrollTrigger);
export default function CareerSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const horizontalRefs = useRef<(HTMLHRElement | null)[]>([]);
  const cardWrapperRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.add(animateHorizontal(horizontalRefs.current), 0);

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      end: "bottom 20%",
      animation: tl,

      toggleActions: "restart reverse restart reverse",
    });

    ScrollTrigger.create({
      trigger: cardWrapperRef.current,
      start: "top center",
      end: "bottom center",

      animation: gsap.from(cardRefs.current, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
      }),

      toggleActions: "restart reverse restart reverse",
    });
  }, []);

  return (
    <section ref={containerRef} className=" w-screen">
      <div className="flex flex-col pt-20  gap-4  px-4 sm:p-20 justify-center">
        <Horizontal
          ref={(el) => {
            if (el) horizontalRefs.current[0] = el;
          }}
        />
        <h1 className="text-2xl sm:text-4xl lg:text-6xl text-slate-100   font-bold">
          Careers
        </h1>
        <Horizontal
          ref={(el) => {
            if (el) horizontalRefs.current[1] = el;
          }}
        />
        <div ref={cardWrapperRef}>
          <CareerList careers={careerItems} cardRefs={cardRefs} />
        </div>
      </div>
    </section>
  );
}

export type CareerItem = {
  id: number;
  company: string;
  image: string;
  title: string;
  descriptions: string[];
  activityPeriod: string;
  myRole: string;
  techStack: string[];
};
export const careerItems: CareerItem[] = [
  {
    id: 1,
    company: "디지털메딕",
    image: "/career/survey.webp",
    title: "노코드 플랫폼 개발",
    descriptions: [
      "관리자가 설문을 생성하고 관리할 수 있는 노코드 환경을 설계하고 개발했습니다.",
      "정신건강 관리에 필요한 콘텐츠 관리를 위해 CMS 기능을 설계하고 개발했습니다.",
      "사용자의 시청 이력 및 설문 응답 데이터에 대한 분석 및 시각화 기능을 개발했습니다.",
    ],
    activityPeriod: "2023.10 - 2024.09",
    myRole: "풀스택 개발",
    techStack: [
      "React18",
      "Typescript",
      "Java17",
      "Spring",
      "JPA",
      "QueryDSL",
      "JdbcTemplate",
      "Nginx",
      "Docker",
      "GitHub Actions",
      "Cloud DB for MySQL (NCP)",
    ],
  },
  {
    id: 2,
    company: "디지털메딕",
    image: "/career/smart_management.webp",
    title: "스마트 환자 관리 시스템 개발",
    descriptions: [
      "RTLS 데이터로 대시보드를 구성하는 프로젝트에서 데이터 집계 및 조회 API 개발을 담당했습니다.",
      "MongoDB(Time Series Collection)을 활용해 실시간 데이터 저장 및 조회 성능을 최적화했습니다.",
      "RabbitMQ를 도입하여 데이터 유실을 방지하고, Batch Insert를 통해 저장 효율성을 향상시켰습니다.",
    ],
    activityPeriod: "2023.08 - 2023.09",
    myRole: "백엔드 개발",
    techStack: [
      "Java17",
      "Spring",
      "MongoDB (Time Series Collection)",
      "RabbitMQ",
      "Nginx",
      "Docker",
      "GitHub Actions",
      "NCP Server",
    ],
  },
  {
    id: 3,
    company: "엘핀",
    image: "/career/buildingchat.webp",
    title: "빌딩챗 - 신규 프로젝트 개발 (프로토타입)",
    descriptions: [
      "위치 인증을 기반으로 같은 빌딩 내 사용자들 간에 익명 게시판 서비스를 제공하는 앱 개발 프로젝트에 참여했습니다.",
      "프론트엔드와 기획팀과 협업하여 초기 기획부터 배포까지 전 과정에 참여해볼 수 있었습니다.",
    ],
    activityPeriod: "2021.09 - 2021.12",
    myRole: "백엔드 개발 (인턴)",
    techStack: [
      "Java11",
      "Spring",
      "JPA",
      "QueryDSL",
      "RDS (AWS)",
      "S3 (AWS)",
      "EC2 (AWS)",
      "Nginx",
      "Postman",
      "dbdiagram",
    ],
  },
];
