"use client";

import ProgressRing from "./ProgressRing";

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/[0.03] px-2.5 py-2">
      <p className="text-[9px] uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-[12px] font-semibold text-white">{value}</p>
    </div>
  );
}

export default function MissionCard() {
  return (
    <section className="rounded-2xl bg-[#0D1424] p-3 shadow-[0_18px_54px_-34px_rgba(34,211,238,0.18)]">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-cyan-400">
            Today&apos;s Mission
          </p>

          <h2 className="mt-2 max-w-[12ch] text-[22px] font-extrabold leading-[1.03] tracking-tight text-white">
            Stay consistent and keep the streak alive
          </h2>

          <p className="mt-2 max-w-[28ch] text-[12px] leading-5 text-slate-400">
            3 topics • 1 mock • 15 questions • 48 min
          </p>
        </div>

        <div className="shrink-0 pt-0.5">
          <ProgressRing value={68} size={68} label="Mission" />
        </div>
      </div>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
        <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400" />
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <Metric label="Topics" value="3" />
        <Metric label="Mock" value="1" />
        <Metric label="Questions" value="15" />
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <div>
          <p className="text-[9px] text-slate-500">Daily Progress</p>
          <p className="mt-0.5 text-[12px] font-semibold text-white">
            42% complete
          </p>
        </div>

        <button
          type="button"
          className="inline-flex h-9 items-center justify-center rounded-full bg-cyan-400 px-4 text-[12px] font-semibold text-black transition hover:opacity-90"
        >
          Start Mission
        </button>
      </div>
    </section>
  );
}
