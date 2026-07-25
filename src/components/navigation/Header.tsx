"use client";

import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-white/5 bg-[#08111F]/92 backdrop-blur-xl">
      <div className="mx-auto flex h-11 w-full max-w-[1760px] items-center justify-between px-3 sm:h-12 sm:px-4 md:px-6">
        <div className="min-w-0">
          <h1 className="select-none whitespace-nowrap text-[16px] font-black tracking-tight sm:text-[17px] md:text-[18px]">
            <span className="text-white">Exam</span>
            <span className="text-cyan-400">RS</span>
          </h1>
          <p className="mt-0.5 hidden text-[10px] text-slate-400 sm:block">
            Study. Compete. Succeed.
          </p>
        </div>

        <div className="hidden flex-1 items-center justify-center px-6 lg:flex">
          <div className="flex h-9 w-full max-w-[680px] items-center gap-3 rounded-full border border-white/6 bg-white/[0.04] px-4 shadow-[0_12px_40px_-24px_rgba(34,211,238,0.18)]">
            <Search size={17} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search exams, topics, mocks..."
              className="w-full bg-transparent text-[13px] text-white outline-none placeholder:text-slate-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <button
            type="button"
            aria-label="Notifications"
            className="relative rounded-full p-2 text-slate-200 transition hover:bg-white/[0.04] hover:text-white"
          >
            <Bell size={18} />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </button>

          <button
            type="button"
            aria-label="Search"
            className="rounded-full p-2 text-slate-200 transition hover:bg-white/[0.04] hover:text-white lg:hidden"
          >
            <Search size={18} />
          </button>

          <button
            type="button"
            aria-label="Profile"
            className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 text-[11px] font-bold text-black shadow-[0_12px_28px_-16px_rgba(34,211,238,0.55)] sm:h-10 sm:w-10"
          >
            VS
          </button>
        </div>
      </div>
    </header>
  );
}
