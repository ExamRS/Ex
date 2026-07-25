"use client";

import { Flame, TrendingUp } from "lucide-react";

export default function MomentumStrip() {
  return (
    <section className="rounded-[24px] border border-white/5 bg-[#0D1424]/94 p-4 backdrop-blur-xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
            <Flame size={12} />
            Momentum
          </div>

          <p className="mt-2 text-[17px] font-bold tracking-tight text-white">
            7 day streak • +120 XP today
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-2 text-[11px] text-slate-300">
          <TrendingUp size={14} className="text-emerald-400" />
          Rank +12
        </div>
      </div>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
        <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400" />
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <div className="rounded-xl bg-white/[0.03] px-3 py-2.5">
          <p className="text-[10px] text-slate-500">Study</p>
          <p className="mt-1 text-[12px] font-semibold text-white">82%</p>
        </div>
        <div className="rounded-xl bg-white/[0.03] px-3 py-2.5">
          <p className="text-[10px] text-slate-500">Mocks</p>
          <p className="mt-1 text-[12px] font-semibold text-white">68%</p>
        </div>
        <div className="rounded-xl bg-white/[0.03] px-3 py-2.5">
          <p className="text-[10px] text-slate-500">Revision</p>
          <p className="mt-1 text-[12px] font-semibold text-white">74%</p>
        </div>
        <div className="rounded-xl bg-white/[0.03] px-3 py-2.5">
          <p className="text-[10px] text-slate-500">Rewards</p>
          <p className="mt-1 text-[12px] font-semibold text-white">4</p>
        </div>
      </div>
    </section>
  );
}
