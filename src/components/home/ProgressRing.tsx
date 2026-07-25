"use client";

import type { CSSProperties } from "react";

type ProgressRingProps = {
  value: number;
  size?: number;
  stroke?: number;
  label?: string;
};

export default function ProgressRing({
  value,
  size = 86,
  stroke = 8,
  label,
}: ProgressRingProps) {
  const normalized = Math.max(0, Math.min(100, value));
  const track = `conic-gradient(#22D3EE ${normalized}%, rgba(255,255,255,0.08) 0)`;
  const inner = size - stroke * 2 - 16;

  return (
    <div
      className="flex items-center justify-center rounded-full"
      style={{ width: size, height: size, background: track } as CSSProperties}
    >
      <div
        className="flex items-center justify-center rounded-full bg-[#08111F]"
        style={{ width: inner + stroke * 2, height: inner + stroke * 2 }}
      >
        <div
          className="flex items-center justify-center rounded-full bg-[#101827]"
          style={{ width: inner, height: inner }}
        >
          <div className="text-center">
            <div className="text-[18px] font-bold leading-none text-white">
              {normalized}%
            </div>
            {label ? (
              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-500">
                {label}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
