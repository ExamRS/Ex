"use client";

import SectionHeader from "./SectionHeader";
import VideoCard from "./VideoCard";
import { videoCards } from "./data";

export default function VideoCarousel() {
  return (
    <section className="space-y-2.5">
      <SectionHeader title="Continue Learning" action="View all" />

      <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-0.5">
        {videoCards.map((item) => (
          <VideoCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
}
