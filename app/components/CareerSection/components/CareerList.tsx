import { CareerItem } from "../CareerSection";
import Card from "./Card";

export default function CareerList({
  careers,
  cardRefs,
}: {
  careers: CareerItem[];
  cardRefs: React.MutableRefObject<HTMLDivElement[]>;
}) {
  return (
    <div className="space-y-4">
      {careers.map((career, idx) => (
        <Card
          key={career.id}
          career={career}
          ref={(el: HTMLDivElement) => {
            cardRefs.current[idx] = el;
          }}
        />
      ))}
    </div>
  );
}
