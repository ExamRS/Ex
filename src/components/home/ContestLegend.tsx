"use client";

import { ChevronRight, Crown, Flame, Trophy } from "lucide-react";

const contests = [
  {
    label: "FREE MEGA",
    title: "Free Mega Contest",
    subtitle: "Practice • Diagnose • Improve",
    badge: "10:00 AM",
    prize: "₹50,000 Prize Pool",
    joined: "34.6K joined",
    icon: Trophy,
    tint: "from-emerald-400/20 via-emerald-500/8 to-transparent",
    iconTint: "text-emerald-300",
    button: "Join Now",
  },
  {
    label: "PAID MEGA",
    title: "Paid Mega Contest",
    subtitle: "Win cash prizes and badges",
    badge: "07:00 PM",
    prize: "Big cash pool",
    joined: "12.8K registered",
    icon: Crown,
    tint: "from-violet-400/20 via-violet-500/8 to-transparent",
    iconTint: "text-violet-300",
    button: "View Details",
  },
  {
    label: "SUNDAY GRAND",
    title: "Grand Mega Battle",
    subtitle: "Weekly championship showdown",
    badge: "Sunday Eve",
    prize: "Highest prize pool",
    joined: "25.3K registered",
    icon: Flame,
    tint: "from-orange-400/20 via-orange-500/8 to-transparent",
    iconTint: "text-orange-300",
    button: "View Details",
  },
] as const;

export default function ContestLegend() {
  return (
    <section className="space-y-2.5">
      <div className="flex items-center justify-between px-1">
        <div>
          <h3 className="text-[14px] font-semibold tracking-tight text-white">
            Today&apos;s Contests
          </h3>
          <p className="mt-1 text-[11px] text-slate-500">
            Compete, rank, and unlock rewards
          </p>
        </div>

        <button type="button" className="text-[11px] text-cyan-400">
          View all
        </button>
      </div>

      <div className="scrollbar-hide flex snap-x gap-3 overflow-x-auto pb-0.5">
        {contests.map((contest) => {
          const Icon = contest.icon;

          return (
            <article
              key={contest.title}
              className="relative w-[84%] shrink-0 snap-start overflow-hidden rounded-[24px] bg-[#0D1424] p-3 sm:w-[60%]"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${contest.tint}`}
              />
              <div className="absolute -right-8 top-0 h-28 w-28 rounded-full bg-white/[0.03] blur-2xl" />

              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[9px] font-semibold tracking-[0.16em] text-white/85">
                    {contest.label}
                  </span>

                  <h4 className="mt-3 text-[17px] font-semibold tracking-tight text-white">
                    {contest.title}
                  </h4>

                  <p className="mt-1.5 text-[12px] leading-5 text-slate-400">
                    {contest.subtitle}
                  </p>

                  <div className="mt-3 space-y-1">
                    <p className="text-[11px] text-slate-300">{contest.joined}</p>
                    <p className="text-[11px] font-medium text-emerald-400">
                      {contest.prize}
                    </p>
                  </div>
                </div>

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-black/18">
                  <Icon size={22} className={contest.iconTint} />
                </div>
              </div>

              <div className="relative mt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  className={`inline-flex h-9 items-center rounded-full px-4 text-[12px] font-semibold ${
                    contest.label === "FREE MEGA"
                      ? "bg-emerald-400 text-black"
                      : contest.label === "PAID MEGA"
                      ? "bg-violet-500 text-white"
                      : "bg-orange-400 text-black"
                  }`}
                >
                  {contest.button}
                </button>

                <div className="rounded-full bg-white/[0.04] px-3 py-1 text-[11px] text-slate-300">
                  {contest.badge}
                </div>

                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.04] text-slate-300"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              <div className="relative mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
                <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-white/40 via-white/20 to-transparent" />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
