"use client";

import type { ContestCardData } from "./types";

export default function ContestCard({ data }: { data: ContestCardData }) {
  const isFree = data.id === "free-mega";

  return (
    <article className="relative overflow-hidden rounded-2xl bg-[#0D1424] p-3">
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${data.gradient}`}
      />

      <div className="relative flex min-h-[158px] flex-col justify-between">
        <div className="flex items-start justify-between gap-2">
          <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[9px] font-semibold tracking-[0.16em] text-white/85">
            {data.label}
          </span>
          <span className="text-[10px] text-slate-400">{data.time}</span>
        </div>

        <div className="mt-2 grid grid-cols-[1fr_auto] gap-3">
          <div className="min-w-0">
            <h4 className="text-[15px] font-semibold tracking-tight text-white">
              {data.title}
            </h4>
            <p className="mt-1.5 text-[11px] leading-5 text-slate-400">
              {data.subtitle}
            </p>

            <p className="mt-2 text-[11px] text-slate-300">
              {data.participants}
            </p>
            <p className="mt-0.5 text-[11px] font-medium text-emerald-400">
              {data.prize}
            </p>
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/[0.04]">
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                {isFree ? "XP" : "Prize"}
              </p>
              <p className="mt-0.5 text-[13px] font-bold text-white">
                {isFree ? "Win" : "₹"}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-end justify-between gap-2">
          <button
            type="button"
            className={`inline-flex h-9 items-center justify-center rounded-full bg-gradient-to-r ${
              isFree
                ? "from-emerald-500 to-emerald-400"
                : "from-violet-500 to-indigo-400"
            } px-4 text-[12px] font-semibold text-black transition hover:opacity-95`}
          >
            {data.cta}
          </button>

          <div className="flex flex-wrap justify-end gap-1.5 text-[9px] text-slate-400">
            <span className="rounded-full bg-white/[0.04] px-2 py-1">XP</span>
            <span className="rounded-full bg-white/[0.04] px-2 py-1">Points</span>
            <span className="rounded-full bg-white/[0.04] px-2 py-1">Badges</span>
          </div>
        </div>
      </div>
    </article>
  );
}
