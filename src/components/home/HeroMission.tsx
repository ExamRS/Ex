"use client";

import { ChevronRight, Flame, ShieldCheck, Sparkles, Target, Zap } from "lucide-react";
import ProgressRing from "./ProgressRing";

function Metric({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Target;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-white/[0.03] px-2.5 py-2.5">
      <div className="flex items-center gap-2">
        <Icon size={13} className="text-cyan-400" />
        <p className="text-[8px] uppercase tracking-[0.14em] text-slate-500">
          {label}
        </p>
      </div>
      <p className="mt-1 text-[11px] font-semibold text-white">{value}</p>
    </div>
  );
}

export default function HeroMission() {
  return (
    <section className="relative overflow-hidden rounded-[24px] bg-[#0D1424] p-3 shadow-[0_24px_90px_-50px_rgba(34,211,238,0.18)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.10),transparent_26%)]" />
      <div className="absolute -right-10 top-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
            <Flame size={11} />
            127 Day Streak
          </div>

          <h2 className="mt-2.5 max-w-[14ch] text-[22px] font-black leading-[1.02] tracking-tight text-white">
            Good evening, Vivek
          </h2>

          <p className="mt-1.5 max-w-[30ch] text-[12px] leading-5 text-slate-400">
            Protect the streak, win the contest, and move closer to AIR 500.
          </p>

          <div className="mt-2.5 flex flex-wrap gap-2">
            <span className="rounded-full bg-cyan-400/15 px-2.5 py-1 text-[10px] text-cyan-300">
              AIR 500
            </span>
            <span className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[10px] text-slate-300">
              +120 XP
            </span>
            <span className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[10px] text-slate-300">
              Rank +12
            </span>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button
              type="button"
              className="inline-flex h-9 items-center gap-2 rounded-full bg-cyan-400 px-3.5 text-[12px] font-semibold text-black transition hover:opacity-95"
            >
              Continue Mission
              <ChevronRight size={15} />
            </button>

            <button
              type="button"
              className="inline-flex h-9 items-center rounded-full bg-white/[0.04] px-3.5 text-[12px] font-semibold text-white transition hover:bg-white/[0.06]"
            >
              Reverse Study
            </button>
          </div>
        </div>

        <div className="shrink-0 pt-0.5">
          <ProgressRing value={72} size={66} label="Mission" />
        </div>
      </div>

      <div className="relative mt-3 grid grid-cols-3 gap-2">
        <Metric icon={Target} label="Focus" value="3 Topics" />
        <Metric icon={Zap} label="XP" value="+120" />
        <Metric icon={ShieldCheck} label="Shield" value="Safe" />
      </div>

      <div className="relative mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
        <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400" />
      </div>

      <div className="relative mt-2.5 flex items-center justify-between">
        <p className="text-[10px] text-slate-500">Today&apos;s Mission Progress</p>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] px-2.5 py-1 text-[10px] text-slate-300">
          <Sparkles size={11} className="text-cyan-400" />
          Mission live
        </div>
      </div>
    </section>
  );
}
