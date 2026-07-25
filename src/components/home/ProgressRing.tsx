"use client";

export default function ProgressRing({
  value,
  size = 72,
  label,
}: {
  value: number;
  size?: number;
  label: string;
}) {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const dash = (value / 100) * circumference;

  return (
    <div
      className="relative inline-flex shrink-0 items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 40 40" className="h-full w-full -rotate-90">
        <circle cx="20" cy="20" r={radius} strokeWidth="4" stroke="#1f2937" fill="none" />
        <circle
          cx="20"
          cy="20"
          r={radius}
          strokeWidth="4"
          stroke="#22d3ee"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference}`}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[14px] font-black text-white">{value}%</span>
        <span className="text-[9px] uppercase tracking-[0.18em] text-slate-400">
          {label}
        </span>
      </div>
    </div>
  );
}
