import { Skills } from "../SkillSection";
import Card from "./Card";

export default function SkillList({
  skills,
  cardRefs,
}: {
  skills: Skills;
  cardRefs: React.MutableRefObject<HTMLDivElement[]>;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
      {Object.entries(skills).map(([category, items], idx) => (
        <Card
          key={category}
          category={category}
          items={items}
          ref={(el: HTMLDivElement) => {
            cardRefs.current[idx] = el;
          }}
        />
      ))}
    </div>
  );
}
