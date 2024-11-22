import { CareerItem } from "../CareerSection";
import Card from "./Card";

export default function CareerList({
  careers,
  cardRefs,
}: {
  careers: CareerItem[];
  cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}) {
  return (
    <div className="space-y-4">
      {careers.map((career, idx) => (
        <Card
          key={career.id}
          career={career}
          ref={(el: HTMLDivElement | null) => {
            cardRefs.current[idx] = el;
          }}
        />
      ))}
    </div>
  );
}
