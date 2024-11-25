"use client";
import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function Container({ children }: { children: ReactNode }) {
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.set(contentRef.current, { autoAlpha: 0 });
    const tl = gsap.timeline();
    tl.to(loadingRef.current, {
      duration: 1,

      color: "transparent",
      autoAlpha: 0,
      display: "none",
    }).to(contentRef.current, { duration: 1, autoAlpha: 1 });
  });

  return (
    <main className="min-h-screen ">
      <div
        ref={loadingRef}
        className="fixed text-center text-white z-50"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
          <p className="mt-4 text-xl font-semibold tracking-wide animate-pulse">
            Loading...
          </p>
        </div>
      </div>

      <div
        className="opacity-0 break-all w-screen overflow-hidden"
        ref={contentRef}
      >
        {children}
      </div>
    </main>
  );
}
