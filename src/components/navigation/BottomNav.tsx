"use client";

import { BookOpen, ClipboardCheck, House, Trophy, User } from "lucide-react";

type BottomNavProps = {
  hidden?: boolean;
};

const items = [
  { icon: House, label: "Home", active: true },
  { icon: BookOpen, label: "Study" },
  { icon: Trophy, label: "Contest" },
  { icon: ClipboardCheck, label: "Mock" },
  { icon: User, label: "Profile" },
];

export default function BottomNav({ hidden = false }: BottomNavProps) {
  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 z-50 h-[54px] bg-[#08111F]/90 backdrop-blur-xl md:hidden transition-transform duration-300 ease-out will-change-transform ${
        hidden ? "translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="flex h-full items-center justify-around">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = Boolean(item.active);

          return (
            <button
              key={item.label}
              className={`flex flex-col items-center justify-center transition-colors ${
                isActive ? "text-cyan-400" : "text-slate-400 hover:text-white"
              }`}
            >
              <Icon size={21} strokeWidth={2.1} />
              <span className="mt-0.5 text-[10px]">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
