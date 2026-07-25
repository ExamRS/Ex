"use client";

import { EXAMS } from "@/lib/config/navigation";
import { useState } from "react";

export default function ExamTabs() {
  const [active, setActive] = useState<(typeof EXAMS)[number]>("For You");

  return (
    <div className="bg-[#08111F]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[42px] w-full max-w-[1600px] items-center gap-6 overflow-x-auto px-3 scrollbar-hide sm:px-4">
        {EXAMS.map((exam) => {
          const isActive = active === exam;

          return (
            <button
              key={exam}
              onClick={() => setActive(exam)}
              className={`relative whitespace-nowrap py-2 text-[14px] font-medium transition-colors sm:text-[15px] ${
                isActive ? "text-cyan-400" : "text-slate-400 hover:text-white"
              }`}
            >
              {exam}
              {isActive && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-cyan-400" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
