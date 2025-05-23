"use client";
import React, { useEffect, useRef } from "react";
import Container from "./Container";
import CareerSection from "./CareerSection/CareerSection";

import SkillSection from "./SkillSection/SkillSection";
import AboutMeSection from "./AboutMeSection/AboutMeSection";
import HeroSection from "./HeroSection/HeroSection";
import EndSection from "./EndSection/EndSection";

export default function ContainerWarpper() {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 모바일 회전 이벤트 처리

    const refreshScrollTrigger = () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    };
    window.addEventListener("orientationchange", refreshScrollTrigger);
    return () => {
      window.removeEventListener("orientationchange", refreshScrollTrigger);
    };
  }, []);

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement>,
    offset: number = 10
  ) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const scrollTop = window.scrollY + rect.top + offset; // 현재 스크롤 위치 + 섹션 위치 - 오프셋
      window.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container>
      <Header
        scrollToSection={scrollToSection}
        refs={{
          aboutMe: aboutMeRef,
          skill: skillRef,
          career: careerRef,
        }}
      />

      <HeroSection />

      <div ref={aboutMeRef} />
      <AboutMeSection />

      <div ref={skillRef} />
      <SkillSection />

      <div ref={careerRef} />
      <CareerSection />

      <EndSection />
    </Container>
  );
}

function Header({
  scrollToSection,
  refs,
}: {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  refs: {
    aboutMe: React.RefObject<HTMLDivElement>;
    skill: React.RefObject<HTMLDivElement>;
    career: React.RefObject<HTMLDivElement>;
  };
}) {
  return (
    <div
      className="fixed z-[999] top-0 h-4 w-full sm:w-[100vh] mt-0 sm:mt-[100vh] text-2xl text-white rotate-0 sm:-rotate-90 mix-blend-exclusion
    origin-[0]"
    >
      <div className="flex flex-row sm:flex-row-reverse justify-between px-10 *:sm:rotate-180 p-4">
        <button onClick={() => scrollToSection(refs.aboutMe)}>About Me</button>

        <button onClick={() => scrollToSection(refs.skill)}>Skills</button>

        <button onClick={() => scrollToSection(refs.career)}>Careers</button>
      </div>
    </div>
  );
}
