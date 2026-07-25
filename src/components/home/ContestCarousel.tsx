"use client";

import ContestCard from "./ContestCard";
import SectionHeader from "./SectionHeader";
import { contestCards } from "./data";

export default function ContestCarousel() {
  return (
    <section className="space-y-2.5">
      <SectionHeader title="Today's Contests" action="View all" />

      <div className="scrollbar-hide flex snap-x gap-3 overflow-x-auto pb-0.5">
        {contestCards.map((item) => (
          <div key={item.id} className="w-[82%] shrink-0 snap-start sm:w-[60%]">
            <ContestCard data={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
