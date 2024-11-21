import Image from "next/image";
import githubLogo from "./assets/github-mark.svg";

export default function HeroSection() {
  return (
    <section className="w-[100vw] h-[100vh]  relative">
      <div className="h-full flex flex-col items-center justify-center gap-4">
        <div className="size-80 relative">
          <Image
            className="object-contain"
            src={githubLogo}
            fill
            alt="github log"
          />
        </div>
        <h1 className="text-6xl text-white">Bogyeom</h1>
        <h1 className="text-6xl text-white m-0">FullStack Developer</h1>
      </div>
    </section>
  );
}
