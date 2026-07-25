"use client";

import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#08111F]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[48px] w-full max-w-[1600px] items-center justify-between px-3 sm:px-4">
        <div className="min-w-0">
          <h1 className="select-none whitespace-nowrap text-[18px] font-extrabold tracking-tight sm:text-[19px]">
            <span className="text-white">Exam</span>
            <span className="text-cyan-400">RS</span>
          </h1>
          <p className="mt-0.5 text-[10px] text-slate-400">
            Study. Compete. Succeed.
          </p>
        </div>

        <div className="hidden flex-1 items-center justify-center px-6 lg:flex">
          <div className="flex h-10 w-full max-w-[760px] items-center gap-3 rounded-full bg-white/[0.04] px-4">
            <Search size={18} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search exams, topics, mocks..."
              className="w-full bg-transparent text-[13px] text-white placeholder:text-slate-500 outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            aria-label="Notifications"
            className="relative text-slate-200 transition hover:text-white"
          >
            <Bell size={20} />
            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500" />
          </button>

          <button
            aria-label="Search"
            className="text-slate-200 transition hover:text-white lg:hidden"
          >
            <Search size={20} />
          </button>

          <button
            aria-label="Profile"
            className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 text-[11px] font-bold text-black sm:h-9 sm:w-9"
          >
            VS
          </button>
        </div>
      </div>
    </header>
  );
}
