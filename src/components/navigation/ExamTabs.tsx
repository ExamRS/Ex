"use client";

import { useState } from "react";

const EXAMS = [
  "For You",
  "SSC CGL",
  "SSC CHSL",
  "RRB NTPC",
  "UPSC",
  "UPPSC",
  "Banking",
  "Railway",
  "Defence",
  "All Exams",
] as const;

export default function ExamTabs() {
  const [active, setActive] = useState<(typeof EXAMS)[number]>("For You");

  return (
    <div className="border-b border-white/5 bg-[#08111F]/92 backdrop-blur-xl">
      <div className="mx-auto flex h-9 w-full max-w-[1760px] items-center gap-4 overflow-x-auto px-3 scrollbar-hide sm:h-10 sm:gap-5 sm:px-4 md:px-6">
        {EXAMS.map((exam) => {
          const isActive = active === exam;

          return (
            <button
              key={exam}
              type="button"
              onClick={() => setActive(exam)}
              className={`relative whitespace-nowrap py-2 text-[12px] font-medium transition-colors sm:text-[13px] ${
                isActive ? "text-cyan-400" : "text-slate-400 hover:text-white"
              }`}
            >
              {exam}
              {isActive ? (
                <span className="absolute inset-x-0 -bottom-[1px] h-[2px] rounded-full bg-cyan-400" />
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
