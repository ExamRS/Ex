"use client";

import { ArrowRight, Bell, Clock3, Flame, Users2 } from "lucide-react";
import ProgressRing from "@/components/home/ProgressRing";

const schedule = [
  { time: "10:00 AM", title: "Free Mega Contest", tone: "Join" },
  { time: "02:00 PM", title: "Polity Revision", tone: "Study" },
  { time: "07:00 PM", title: "Paid Mega Contest", tone: "Join" },
];

const contests = [
  { title: "Maths Special Contest", prize: "₹25,000" },
  { title: "GK Mega Contest", prize: "₹50,000" },
  { title: "Reasoning Battle", prize: "₹15,000" },
];

export default function DesktopRail() {
  return (
    <aside className="hidden xl:block">
      <div className="sticky top-[96px] space-y-3">
        <section className="rounded-[26px] bg-[#0D1424] p-4">
          <div className="flex items-center gap-4">
            <ProgressRing value={72} size={86} label="Score" />
            <div>
              <p className="text-[14px] font-semibold text-white">Knowledge Score</p>
              <p className="mt-1 text-[11px] text-slate-400">
                You are improving every week.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[26px] bg-[#0D1424] p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[14px] font-semibold text-white">Live Arena</h3>
            <span className="inline-flex items-center gap-1 rounded-full bg-red-500/15 px-2.5 py-1 text-[10px] font-semibold text-red-300">
              <Bell size={11} />
              Live
            </span>
          </div>

          <div className="mt-3 rounded-[22px] bg-gradient-to-br from-cyan-400/12 via-indigo-500/8 to-fuchsia-500/8 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.05] text-cyan-400">
                <Users2 size={20} />
              </div>

              <div>
                <p className="text-[12px] text-slate-400">Participants</p>
                <p className="mt-0.5 text-[20px] font-black tracking-tight text-white">
                  4,283
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div>
                <p className="text-[11px] text-slate-400">Join before</p>
                <p className="mt-0.5 text-[13px] font-semibold text-white">
                  09:59:48
                </p>
              </div>

              <button className="inline-flex h-9 items-center rounded-full bg-cyan-400 px-4 text-[12px] font-semibold text-black">
                Start Battle
              </button>
            </div>
          </div>
        </section>

        <section className="rounded-[26px] bg-[#0D1424] p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[14px] font-semibold text-white">Today&apos;s Schedule</h3>
            <button className="text-[11px] text-cyan-400">View all</button>
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

        <section className="rounded-[26px] bg-[#0D1424] p-4">
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

        <section className="rounded-[26px] bg-[#0D1424] p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[14px] font-semibold text-white">
              Upcoming Contests
            </h3>
            <button className="text-[11px] text-cyan-400">View all</button>
          </div>

          <div className="mt-4 space-y-3">
            {contests.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between rounded-2xl bg-white/[0.03] px-3 py-3"
              >
                <div>
                  <p className="text-[13px] font-medium text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">{item.prize}</p>
                </div>

                <button className="inline-flex h-8 items-center justify-center rounded-full bg-violet-500 px-3 text-[11px] font-semibold text-white">
                  Register
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[26px] bg-[#0D1424] p-4">
          <div className="grid grid-cols-2 gap-2">
            <button className="rounded-2xl bg-white/[0.03] p-3 text-left">
              <p className="text-[12px] font-medium text-white">AI Coach</p>
              <p className="mt-1 text-[10px] text-slate-500">Revise Polity now</p>
            </button>
            <button className="rounded-2xl bg-white/[0.03] p-3 text-left">
              <p className="text-[12px] font-medium text-white">Daily Reward</p>
              <p className="mt-1 text-[10px] text-slate-500">Claim XP</p>
            </button>
          </div>

          <button className="mt-3 inline-flex h-9 items-center gap-2 text-[11px] text-cyan-400">
            Open insights
            <ArrowRight size={12} />
          </button>
        </section>
      </div>
    </aside>
  );
}
