"use client";

const metrics = [
  { label: "Study", value: "82%" },
  { label: "Mock", value: "68%" },
  { label: "Revision", value: "74%" },
  { label: "Contests", value: "56%" },
] as const;

export default function WeeklyProgressCard() {
  return (
    <section className="rounded-2xl bg-[#0D1424] p-3">
      <div className="flex items-center justify-between">
        <h3 className="text-[14px] font-semibold text-white">Weekly Progress</h3>
        <button type="button" className="text-[11px] text-cyan-400">
          Report
        </button>
      </div>

      <div className="mt-3.5 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
        <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400" />
      </div>

      <div className="mt-3.5 grid grid-cols-4 gap-2">
        {metrics.map((item) => (
          <div
            key={item.label}
            className="rounded-xl bg-white/[0.03] px-2 py-2.5 text-center"
          >
            <p className="text-[9px] text-slate-500">{item.label}</p>
            <p className="mt-1 text-[12px] font-semibold text-white">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
