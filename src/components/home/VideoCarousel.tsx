"use client";

import SectionHeader from "./SectionHeader";
import VideoCard from "./VideoCard";
import { videoCards } from "./data";

export default function VideoCarousel() {
  return (
    <section className="space-y-2.5">
      <SectionHeader title="Continue Learning" action="View all" />

      <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-0.5 lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:overflow-visible">
        {videoCards.map((item) => (
          <div
            key={item.id}
            className="w-[86%] shrink-0 sm:w-[62%] md:w-[48%] lg:w-auto"
          >
            <VideoCard data={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
