"use client";

export default function ContinueStudyCard() {
  return (
    <section className="rounded-[24px] border border-white/5 bg-[#0D1424]/94 p-4 backdrop-blur-xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
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
          className="inline-flex h-9 w-full shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 px-3.5 text-[12px] font-semibold text-black transition hover:opacity-95 sm:w-auto"
        >
          Continue
        </button>
      </div>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
        <div className="h-full w-[66%] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400" />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {["Article 12", "Article 13", "Article 14"].map((item) => (
          <span
            key={item}
            className="rounded-full bg-white/[0.04] px-3 py-1 text-[11px] text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
