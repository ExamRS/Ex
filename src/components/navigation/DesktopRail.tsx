"use client";

import { ArrowRight, Bell, CalendarDays, Clock3, Flame, Sparkles } from "lucide-react";
import ProgressRing from "../home/ProgressRing";

const schedule = [
  { time: "10:00 AM", title: "Free Mega Contest", tone: "Join" },
  { time: "02:00 PM", title: "Polity Revision", tone: "Study" },
  { time: "07:00 PM", title: "Paid Mega Contest", tone: "Join" },
];

const leaderboard = [
  { label: "AIR", value: "1,248" },
  { label: "Rank", value: "+12" },
  { label: "XP", value: "4,820" },
];

export default function DesktopRail() {
  return (
    <aside className="hidden xl:block">
      <div className="sticky top-[104px] space-y-3">
        <section className="rounded-[26px] border border-white/5 bg-[#0D1424]/94 p-4 shadow-[0_24px_80px_-56px_rgba(34,211,238,0.32)] backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <ProgressRing value={72} size={84} label="Score" />
            <div className="min-w-0">
              <p className="text-[14px] font-semibold text-white">Knowledge Score</p>
              <p className="mt-1 text-[11px] leading-5 text-slate-400">
                Strong progress. Keep the revision loop tight.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[26px] border border-white/5 bg-[#0D1424]/94 p-4 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-[14px] font-semibold text-white">AI Coach</h3>
            <span className="inline-flex items-center gap-1 rounded-full bg-violet-500/15 px-2.5 py-1 text-[10px] font-semibold text-violet-300">
              <Sparkles size={11} />
              Live
            </span>
          </div>

          <div className="mt-3 rounded-[22px] bg-gradient-to-br from-cyan-400/12 via-indigo-500/8 to-fuchsia-500/8 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.05] text-cyan-400">
                <Sparkles size={20} />
              </div>

              <div>
                <p className="text-[12px] text-slate-400">Weak topic</p>
                <p className="mt-0.5 text-[16px] font-black tracking-tight text-white">
                  Polity
                </p>
              </div>
            </div>

            <p className="mt-3 text-[11px] leading-5 text-slate-400">
              Revise in 3 minutes before the decay widens.
            </p>

            <button
              type="button"
              className="mt-3 inline-flex h-9 w-full items-center justify-center rounded-full bg-cyan-400 px-4 text-[12px] font-semibold text-black transition hover:opacity-95"
            >
              Open weak set
            </button>
          </div>
        </section>

        <section className="rounded-[26px] border border-white/5 bg-[#0D1424]/94 p-4 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-[14px] font-semibold text-white">Today&apos;s Schedule</h3>
            <button type="button" className="text-[11px] text-cyan-400">
              View all
            </button>
          </div>

          <div className="mt-4 space-y-3">
            {schedule.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between rounded-2xl bg-white/[0.03] px-3 py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.04]">
                    <Clock3 size={16} className="text-cyan-400" />
                  </div>

                  <div>
                    <p className="text-[11px] text-slate-400">{item.time}</p>
                    <p className="mt-0.5 text-[13px] font-medium text-white">
                      {item.title}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className={`inline-flex h-8 items-center justify-center rounded-full px-3 text-[11px] font-semibold ${
                    item.tone === "Join"
                      ? "bg-emerald-400 text-black"
                      : "bg-cyan-400 text-black"
                  }`}
                >
                  {item.tone}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[26px] border border-white/5 bg-[#0D1424]/94 p-4 backdrop-blur-xl">
          <div className="flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
            <Flame size={12} />
            Momentum
          </div>

          <p className="mt-3 text-[18px] font-bold tracking-tight text-white">
            7 day streak • +120 XP today
          </p>

          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
            <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400" />
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="rounded-xl bg-white/[0.03] px-3 py-2.5">
              <p className="text-[10px] text-slate-500">Study</p>
              <p className="mt-1 text-[12px] font-semibold text-white">82%</p>
            </div>
            <div className="rounded-xl bg-white/[0.03] px-3 py-2.5">
              <p className="text-[10px] text-slate-500">Mocks</p>
              <p className="mt-1 text-[12px] font-semibold text-white">68%</p>
            </div>
            <div className="rounded-xl bg-white/[0.03] px-3 py-2.5">
              <p className="text-[10px] text-slate-500">Rewards</p>
              <p className="mt-1 text-[12px] font-semibold text-white">4</p>
            </div>
          </div>
        </section>

        <section className="rounded-[26px] border border-white/5 bg-[#0D1424]/94 p-4 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-[14px] font-semibold text-white">Leaderboard</h3>
            <span className="inline-flex items-center gap-1 rounded-full bg-red-500/15 px-2.5 py-1 text-[10px] font-semibold text-red-300">
              <Bell size={11} />
              Live
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {leaderboard.map((item) => (
              <div key={item.label} className="rounded-2xl bg-white/[0.03] px-3 py-3">
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-1 text-[13px] font-semibold text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-3 inline-flex h-9 items-center gap-2 text-[11px] text-cyan-400"
          >
            Open insights
            <ArrowRight size={12} />
          </button>
        </section>

        <section className="rounded-[26px] border border-white/5 bg-[#0D1424]/94 p-4 backdrop-blur-xl">
          <div className="flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
            <CalendarDays size={12} />
            Upcoming
          </div>

          <p className="mt-3 text-[14px] font-semibold text-white">
            Free Mega Contest starts in 2h 14m
          </p>
          <p className="mt-1 text-[11px] leading-5 text-slate-400">
            Join early to warm up and keep the rank momentum.
          </p>
        </section>
      </div>
    </aside>
  );
}
