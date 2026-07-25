"use client";

import { Clock3, Eye, PlayCircle } from "lucide-react";
import type { VideoCardData } from "./types";

export default function VideoCard({ data }: { data: VideoCardData }) {
  return (
    <article className="h-full w-full overflow-hidden rounded-[24px] border border-white/5 bg-[#0D1424]/94 backdrop-blur-xl">
      <div className={`relative h-36 bg-gradient-to-br ${data.gradient} sm:h-40`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_42%)]" />
        <div className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[9px] font-semibold tracking-[0.16em] text-white">
          {data.tag}
        </div>
        <div className="absolute bottom-3 right-3 rounded-full bg-black/70 px-2.5 py-1 text-[9px] font-medium text-white">
          {data.duration}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm">
            <PlayCircle size={22} className="text-white" />
          </div>
        </div>
      </div>

      <div className="p-3.5 sm:p-4">
        <h4 className="line-clamp-2 text-[13px] font-semibold leading-5 text-white">
          {data.title}
        </h4>

        <p className="mt-1.5 line-clamp-2 text-[11px] leading-5 text-slate-400">
          {data.subtitle}
        </p>

        <div className="mt-2.5 flex items-center justify-between gap-2 text-[10px] text-slate-500">
          <span>{data.channel}</span>

          <span className="inline-flex items-center gap-1">
            <Eye size={11} />
            {data.views}
          </span>
        </div>

        <div className="mt-1 inline-flex items-center gap-1 text-[10px] text-slate-500">
          <Clock3 size={11} />
          {data.age}
        </div>
      </div>
    </article>
  );
}
