import Container from "./components/Container";
import HeroSection from "./components/HeroSection/HeroSection";
import SkillSection from "./components/SkillSection/SkillSection";

export default function Home() {
  return (
    <Container>
      <Header />
      <HeroSection />
      <SkillSection />
    </Container>
  );
}
function Header() {
  return (
    <div
      className="fixed z-10 top-0 h-4 w-full sm:w-[100vh] mt-0 sm:mt-[100vh] text-2xl text-white rotate-0 sm:-rotate-90 mix-blend-exclusion
    origin-[0] "
    >
      <div className="flex flex-row sm:flex-row-reverse justify-between px-10 *:sm:rotate-180 p-4">
        <div>About Me</div>
        <div>Skills</div>

        <div>Career</div>
      </div>
    </div>
  );
}
