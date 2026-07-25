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
    <aside className="hidden lg:flex lg:flex-col">
      <div className="sticky top-[96px] flex h-[calc(100dvh-112px)] flex-col rounded-[28px] bg-[#0D1424] p-3">
        <div className="px-2 pb-3">
          <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
            Navigation
          </p>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto pr-1">
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

        <div className="mt-3 rounded-[24px] bg-gradient-to-br from-cyan-400/15 via-indigo-500/10 to-fuchsia-500/10 p-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400">
            Go Premium
          </p>
          <p className="mt-2 text-[14px] font-semibold leading-5 text-white">
            Unlock advanced analytics and faster insights
          </p>

          <button className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-full bg-cyan-400 text-[13px] font-semibold text-black transition hover:opacity-95">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
}
