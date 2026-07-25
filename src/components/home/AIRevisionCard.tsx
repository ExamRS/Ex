"use client";

const weakTopics = [
  "Polity: Fundamental Rights",
  "History: 1857 Revolt",
  "Reasoning: Coding-Decoding",
];

export default function AIRevisionCard() {
  return (
    <section className="rounded-2xl bg-[#0D1424] p-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="inline-flex rounded-full bg-violet-400/15 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-violet-300">
            Updated
          </div>

          <h3 className="mt-2.5 text-[16px] font-bold tracking-tight text-white">
            AI Revision Cart
          </h3>

          <p className="mt-1.5 max-w-[24ch] text-[12px] leading-5 text-slate-400">
            Auto-picked from your weak areas and recent performance.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex h-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-3.5 text-[12px] font-semibold text-white transition hover:opacity-95"
        >
          Start Revision
        </button>
      </div>

      <div className="mt-3 grid gap-1.5">
        {weakTopics.map((topic) => (
          <div key={topic} className="rounded-xl bg-white/[0.03] px-3 py-2.5">
            <p className="text-[12px] font-medium text-white">{topic}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
