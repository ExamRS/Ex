"use client";

import { QUICK_ACTIONS } from "@/lib/config/navigation";
import SectionHeader from "./SectionHeader";

export default function QuickActionsStrip() {
  return (
    <section className="space-y-2.5">
      <SectionHeader title="Quick Access" action="View all" />

      <div className="grid grid-cols-2 gap-2.5">
        {QUICK_ACTIONS.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="flex items-start justify-between rounded-2xl bg-[#0D1424] p-3 text-left transition active:scale-[0.99]"
            >
              <div className="min-w-0 pr-2">
                <p className="text-[13px] font-semibold tracking-tight text-white">
                  {item.title}
                </p>
                <p className="mt-1 text-[10px] leading-4 text-slate-500">
                  {item.subtitle}
                </p>
              </div>

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.04]">
                <Icon size={17} className="text-cyan-400" />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
