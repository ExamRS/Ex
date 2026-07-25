"use client";

import {
  BookOpen,
  ClipboardCheck,
  House,
  Sparkles,
  Trophy,
  User,
  type LucideIcon,
} from "lucide-react";

type BottomNavProps = {
  hidden?: boolean;
};

type NavItem = {
  icon: LucideIcon;
  label: string;
  active?: boolean;
};

const items: NavItem[] = [
  { icon: House, label: "Home", active: true },
  { icon: BookOpen, label: "Study" },
  { icon: Trophy, label: "Contest" },
  { icon: ClipboardCheck, label: "Mock" },
  { icon: Sparkles, label: "AI" },
  { icon: User, label: "Profile" },
];

export default function BottomNav({ hidden = false }: BottomNavProps) {
  return (
    <nav
      aria-label="Primary"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      className={`fixed inset-x-0 bottom-0 z-50 transition-all duration-300 ease-out will-change-transform
        ${hidden ? "pointer-events-none translate-y-full opacity-0" : "translate-y-0 opacity-100"}
        border-t border-white/5 bg-[#08111F]/96 backdrop-blur-xl
        md:bottom-4 md:left-1/2 md:right-auto md:w-[min(92vw,760px)] md:-translate-x-1/2 md:rounded-full md:border md:shadow-[0_24px_80px_-40px_rgba(34,211,238,0.35)]`}
    >
      <div className="mx-auto flex h-[62px] max-w-[760px] items-stretch justify-around px-2 pt-1 md:h-[70px] md:px-3 md:pt-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = Boolean(item.active);

          return (
            <button
              key={item.label}
              type="button"
              className={`relative flex flex-1 flex-col items-center justify-center rounded-2xl transition
                ${
                  isActive
                    ? "bg-cyan-400/10 text-cyan-400 md:bg-white/[0.04]"
                    : "text-slate-400 hover:text-white"
                }`}
            >
              <Icon
                size={item.label === "AI" ? 20 : 21}
                strokeWidth={2.1}
                className={isActive ? "drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]" : ""}
              />
              <span className="mt-0.5 text-[9px] font-medium md:text-[10px]">
                {item.label}
              </span>

              {isActive ? (
                <span className="absolute inset-x-4 bottom-1 h-0.5 rounded-full bg-cyan-400 md:inset-x-5" />
              ) : null}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
