"use client";

import { QUICK_ACTIONS } from "@/lib/config/navigation";

export default function QuickAccessGrid() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <h3 className="text-[15px] font-semibold text-white">Quick Access</h3>
        <button className="text-[12px] text-cyan-400">View all</button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {QUICK_ACTIONS.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className={`rounded-3xl bg-gradient-to-br ${item.tone} p-4 text-left`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[14px] font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    {item.subtitle}
                  </p>
                </div>

                <Icon size={18} className="text-cyan-400" />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
