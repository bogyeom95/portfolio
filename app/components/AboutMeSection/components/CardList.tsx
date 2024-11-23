import Card from "./Card";
import { AboutMeItem } from "../AboutMeSection";

interface CardListProps {
  items: AboutMeItem[];
  cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}
export default function CardList({ items, cardRefs }: CardListProps) {
  return (
    <div
      id={"card_list"}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4"
    >
      {items.map((item, idx) => (
        <Card
          key={item.id}
          item={item}
          ref={(el: HTMLDivElement | null) => {
            cardRefs.current[idx] = el;
          }}
        />
      ))}
    </div>
  );
}
