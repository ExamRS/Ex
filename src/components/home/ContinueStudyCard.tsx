"use client";

export default function ContinueStudyCard() {
  return (
    <section className="rounded-2xl bg-[#0D1424] p-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[9px] uppercase tracking-[0.18em] text-cyan-400">
            Continue Studying
          </p>

          <h3 className="mt-2 text-[16px] font-bold tracking-tight text-white">
            Polity • Fundamental Rights
          </h3>

          <p className="mt-1.5 text-[12px] leading-5 text-slate-400">
            8 / 12 pages completed
          </p>
        </div>

        <button
          type="button"
          className="inline-flex h-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 px-3.5 text-[12px] font-semibold text-black transition hover:opacity-95"
        >
          Continue
        </button>
      </div>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
        <div className="h-full w-[66%] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400" />
      </div>
    </section>
  );
}
