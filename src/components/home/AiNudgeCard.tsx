"use client";

import { ArrowRight, Brain, Sparkles } from "lucide-react";

export default function AiNudgeCard() {
  return (
    <section className="relative overflow-hidden rounded-[24px] bg-[#0D1424] p-4">
      <div className="absolute -right-8 top-0 h-24 w-24 rounded-full bg-violet-400/10 blur-3xl" />
      <div className="relative flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/[0.04] text-violet-300">
            <Brain size={18} />
          </div>

          <div className="min-w-0">
            <div className="inline-flex rounded-full bg-violet-400/15 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-violet-300">
              AI Alert
            </div>

            <h3 className="mt-2 text-[17px] font-bold tracking-tight text-white">
              Polity is fading from memory
            </h3>

            <p className="mt-1.5 max-w-[28ch] text-[12px] leading-5 text-slate-400">
              Last touch was 19 days ago. Fix it before the decay grows.
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/[0.04] px-3 py-1 text-[11px] text-slate-300">
                Fundamental Rights
              </span>
              <span className="rounded-full bg-white/[0.04] px-3 py-1 text-[11px] text-slate-300">
                3 minute rescue
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-4 text-[12px] font-semibold text-white"
        >
          Revise now
          <Sparkles size={14} />
        </button>
      </div>

      <div className="relative mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
        <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400" />
      </div>

      <div className="relative mt-3 flex items-center justify-between">
        <p className="text-[11px] text-slate-500">AI recommended priority</p>
        <button className="inline-flex items-center gap-1 text-[11px] text-cyan-400">
          Open weak set
          <ArrowRight size={12} />
        </button>
      </div>
    </section>
  );
}
