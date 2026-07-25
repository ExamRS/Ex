"use client";

import { ArrowRight, RotateCcw, Target } from "lucide-react";

const mistakes = [
  "Polity: wrong twice",
  "History: guessed once",
  "Reasoning: time wasted",
];

export default function ReverseStudyCard() {
  return (
    <section className="relative overflow-hidden rounded-[24px] border border-white/5 bg-[#0D1424]/94 p-4 backdrop-blur-xl">
      <div className="absolute -left-8 top-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
            <RotateCcw size={12} />
            Reverse Study
          </div>

          <h3 className="mt-3 text-[18px] font-bold tracking-tight text-white">
            Fix mistakes before they repeat
          </h3>

          <p className="mt-2 max-w-[30ch] text-[12px] leading-5 text-slate-400">
            Turn wrong answers into the next right answers. That is where rank grows.
          </p>
        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.04] text-cyan-400">
          <Target size={18} />
        </div>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        {mistakes.map((item) => (
          <div key={item} className="rounded-2xl bg-white/[0.03] px-3 py-3">
            <p className="text-[12px] font-medium text-white">{item}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] text-slate-500">Weak set: 3 topics waiting</p>

        <button
          type="button"
          className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-4 text-[12px] font-semibold text-black sm:w-auto"
        >
          Open weak set
          <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
}
