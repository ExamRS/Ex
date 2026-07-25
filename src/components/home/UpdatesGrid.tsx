"use client";

import { BellRing, BadgeCheck, KeyRound, ScrollText, FileText, ChartNoAxesCombined } from "lucide-react";
import type { UpdateCardData } from "./types";

const iconById = {
  "exam-notifications": BellRing,
  "admit-card": BadgeCheck,
  results: ChartNoAxesCombined,
  "answer-key": KeyRound,
  "cut-offs": ScrollText,
  syllabus: FileText,
} as const;

export default function UpdatesGrid({ items }: { items: UpdateCardData[] }) {
  return (
    <section className="rounded-2xl bg-[#0D1424] p-3">
      <div className="flex items-center justify-between">
        <h3 className="text-[14px] font-semibold text-white">Latest Updates</h3>
        <button type="button" className="text-[11px] text-cyan-400">
          View all
        </button>
      </div>

      <div className="mt-3.5 grid grid-cols-2 gap-2.5">
        {items.map((item) => {
          const Icon = iconById[item.id as keyof typeof iconById] ?? BellRing;

          return (
            <article
              key={item.id}
              className={`rounded-xl bg-gradient-to-br ${item.tone} px-3 py-3`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h4 className="text-[12px] font-semibold tracking-tight text-white">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-[10px] leading-4 text-slate-400">
                    {item.subtitle}
                  </p>
                </div>

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/15">
                  <Icon size={15} className="text-white" />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
