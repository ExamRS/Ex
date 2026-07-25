"use client";

import { ChevronRight, Crown, Medal, ShieldCheck, Sparkles, Trophy, type LucideIcon } from "lucide-react";

type ContestCard = {
  label: string;
  title: string;
  subtitle: string;
  badge: string;
  prize: string;
  joined: string;
  button: string;
  accent: string;
  Icon: LucideIcon;
};

const contests: ContestCard[] = [
  {
    label: "FREE MEGA",
    title: "Free Mega Contest",
    subtitle: "Practice • Diagnose • Improve",
    badge: "10:00 AM",
    prize: "₹50,000 Prize Pool",
    joined: "34.6K joined",
    button: "Join Now",
    accent: "from-emerald-400/18 via-cyan-400/10 to-transparent",
    Icon: Trophy,
  },
  {
    label: "PAID MEGA",
    title: "Paid Mega Contest",
    subtitle: "Win cash prizes and badges",
    badge: "07:00 PM",
    prize: "Big cash pool",
    joined: "12.8K registered",
    button: "View Details",
    accent: "from-violet-400/18 via-fuchsia-400/10 to-transparent",
    Icon: Crown,
  },
  {
    label: "SUNDAY GRAND",
    title: "Grand Mega Battle",
    subtitle: "Weekly championship showdown",
    badge: "Sunday Eve",
    prize: "Highest prize pool",
    joined: "25.3K registered",
    button: "View Details",
    accent: "from-amber-400/18 via-orange-400/10 to-transparent",
    Icon: Medal,
  },
];

export default function ContestLegend() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <div>
          <h3 className="text-[14px] font-semibold tracking-tight text-white">
            Today&apos;s Contests
          </h3>
          <p className="mt-1 text-[11px] text-slate-500">
            Compete, rank, and unlock rewards
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-1 text-[11px] text-cyan-400 transition hover:text-cyan-300"
        >
          View all
          <ChevronRight size={12} />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {contests.map((contest) => {
          const Icon = contest.Icon;

          return (
            <article
              key={contest.title}
              className="group relative overflow-hidden rounded-[26px] border border-white/5 bg-[#0D1424]/94 p-4 shadow-[0_24px_80px_-60px_rgba(34,211,238,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/10"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${contest.accent}`}
              />
              <div className="pointer-events-none absolute -right-8 top-0 h-36 w-36 rounded-full bg-white/[0.03] blur-3xl" />
              <div className="pointer-events-none absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <span className="inline-flex rounded-full bg-white/[0.06] px-2.5 py-1 text-[9px] font-semibold tracking-[0.16em] text-white/85">
                      {contest.label}
                    </span>

                    <h4 className="mt-3 text-[18px] font-semibold tracking-tight text-white sm:text-[19px]">
                      {contest.title}
                    </h4>

                    <p className="mt-1.5 text-[12px] leading-5 text-slate-400">
                      {contest.subtitle}
                    </p>
                  </div>

                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] border border-white/5 ${
                      contest.label === "FREE MEGA"
                        ? "bg-emerald-400/12 text-emerald-300"
                        : contest.label === "PAID MEGA"
                        ? "bg-violet-400/12 text-violet-300"
                        : "bg-amber-400/12 text-amber-300"
                    }`}
                  >
                    <Icon size={26} strokeWidth={2} />
                  </div>
                </div>

                <div className="relative mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded-2xl bg-white/[0.04] px-3 py-3">
                    <p className="text-[10px] text-slate-500">Joined</p>
                    <p className="mt-1 text-[12px] font-semibold text-white">
                      {contest.joined}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.04] px-3 py-3">
                    <p className="text-[10px] text-slate-500">Prize</p>
                    <p className="mt-1 text-[12px] font-semibold text-white">
                      {contest.prize}
                    </p>
                  </div>
                </div>

                <div className="relative mt-3 flex items-center justify-between gap-2 rounded-2xl bg-white/[0.03] px-3 py-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                      Start time
                    </p>
                    <p className="mt-1 text-[13px] font-semibold text-white">
                      {contest.badge}
                    </p>
                  </div>

                  <button
                    type="button"
                    className={`inline-flex h-9 items-center justify-center rounded-full px-4 text-[12px] font-semibold transition ${
                      contest.label === "FREE MEGA"
                        ? "bg-emerald-400 text-black hover:opacity-95"
                        : contest.label === "PAID MEGA"
                        ? "bg-violet-500 text-white hover:opacity-95"
                        : "bg-amber-400 text-black hover:opacity-95"
                    }`}
                  >
                    {contest.button}
                  </button>
                </div>

                <div className="relative mt-3 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] px-2.5 py-1 text-[10px] text-slate-300">
                    <ShieldCheck size={11} className="text-cyan-400" />
                    Official competition
                  </div>

                  <button
                    type="button"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.04] text-slate-300 transition hover:bg-white/[0.07] hover:text-white"
                  >
                    <ChevronRight size={15} />
                  </button>
                </div>

                <div className="relative mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
                  <div
                    className={`h-full rounded-full ${
                      contest.label === "FREE MEGA"
                        ? "w-[74%] bg-gradient-to-r from-emerald-400 to-cyan-400"
                        : contest.label === "PAID MEGA"
                        ? "w-[66%] bg-gradient-to-r from-violet-400 to-fuchsia-400"
                        : "w-[80%] bg-gradient-to-r from-amber-400 to-orange-400"
                    }`}
                  />
                </div>

                <div className="relative mt-4 flex items-center justify-between">
                  <p className="text-[11px] text-slate-500">Powered by ExamRS Arena</p>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] px-2.5 py-1 text-[10px] text-slate-300">
                    <Sparkles size={11} className="text-cyan-400" />
                    Live ranking
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
