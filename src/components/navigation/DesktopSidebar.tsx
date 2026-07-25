"use client";

import {
  BadgeCheck,
  BellRing,
  BookOpen,
  Briefcase,
  ClipboardCheck,
  House,
  LineChart,
  ScrollText,
  Settings,
  Sparkles,
  Trophy,
  User,
} from "lucide-react";

const sections = [
  {
    title: "Core",
    items: [
      { label: "Home", icon: House, active: true },
      { label: "Study", icon: BookOpen },
      { label: "Mock", icon: ClipboardCheck },
      { label: "Contest", icon: Trophy },
      { label: "Reverse Study", icon: Sparkles },
    ],
  },
  {
    title: "Tools",
    items: [
      { label: "Jobs", icon: Briefcase },
      { label: "Results", icon: BadgeCheck },
      { label: "Admit Card", icon: ScrollText },
      { label: "Leaderboard", icon: LineChart },
      { label: "Notifications", icon: BellRing },
      { label: "Profile", icon: User },
      { label: "Settings", icon: Settings },
    ],
  },
];

export default function DesktopSidebar() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-[104px] h-[calc(100dvh-124px)] overflow-hidden rounded-[28px] border border-white/5 bg-[#0D1424]/94 shadow-[0_28px_90px_-56px_rgba(34,211,238,0.3)] backdrop-blur-xl">
        <div className="border-b border-white/5 px-4 py-4">
          <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">
            Navigation
          </p>
          <h2 className="mt-2 text-[18px] font-black tracking-tight text-white">
            Exam<span className="text-cyan-400">RS</span>
          </h2>
          <p className="mt-1 text-[11px] text-slate-400">
            Premium preparation workspace
          </p>
        </div>

        <div className="h-[calc(100%-230px)] space-y-4 overflow-y-auto px-3 py-4 scrollbar-hide">
          {sections.map((section) => (
            <div key={section.title}>
              <p className="px-2 pb-2 text-[10px] uppercase tracking-[0.2em] text-slate-500">
                {section.title}
              </p>

              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const active = Boolean(item.active);

                  return (
                    <button
                      key={item.label}
                      type="button"
                      className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition ${
                        active
                          ? "bg-cyan-400/12 text-cyan-400"
                          : "text-slate-300 hover:bg-white/[0.03] hover:text-white"
                      }`}
                    >
                      <Icon size={18} className={active ? "text-cyan-400" : ""} />
                      <span className="text-[13px] font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 p-4">
          <div className="rounded-[24px] bg-gradient-to-br from-cyan-400/15 via-indigo-500/10 to-fuchsia-500/10 p-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400">
              Go Premium
            </p>
            <p className="mt-2 text-[14px] font-semibold leading-5 text-white">
              Unlock advanced analytics and faster insights
            </p>

            <button
              type="button"
              className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-full bg-cyan-400 text-[13px] font-semibold text-black transition hover:opacity-95"
            >
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
