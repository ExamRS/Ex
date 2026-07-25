"use client";

import { Gift, Sparkles, Trophy, Users2 } from "lucide-react";

export default function BattleRewards() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
      <article className="relative overflow-hidden rounded-[24px] border border-white/5 bg-[#0D1424]/94 p-4 backdrop-blur-xl">
        <div className="absolute -right-8 top-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
            <Users2 size={12} />
            Daily Battle
          </div>

          <h3 className="mt-3 text-[18px] font-bold tracking-tight text-white">
            You vs 4,283 aspirants
          </h3>

          <p className="mt-2 max-w-[26ch] text-[12px] leading-5 text-slate-400">
            Win accuracy, speed, and rank points in a live battle.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              type="button"
              className="inline-flex h-9 items-center rounded-full bg-cyan-400 px-4 text-[12px] font-semibold text-black"
            >
              Start Battle
            </button>

            <span className="rounded-full bg-white/[0.04] px-3 py-1 text-[11px] text-slate-300">
              + Rank
            </span>
          </div>
        </div>
      </article>

      <article className="relative overflow-hidden rounded-[24px] border border-white/5 bg-[#0D1424]/94 p-4 backdrop-blur-xl">
        <div className="absolute -left-8 bottom-0 h-28 w-28 rounded-full bg-fuchsia-400/10 blur-3xl" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-fuchsia-300">
            <Gift size={12} />
            Today&apos;s Rewards
          </div>

          <h3 className="mt-3 text-[18px] font-bold tracking-tight text-white">
            +100 XP • +3 Gems • +1 Badge
          </h3>

          <p className="mt-2 max-w-[26ch] text-[12px] leading-5 text-slate-400">
            Keep the streak alive and claim the reward vault.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              type="button"
              className="inline-flex h-9 items-center rounded-full bg-fuchsia-500 px-4 text-[12px] font-semibold text-white"
            >
              Claim Rewards
            </button>

            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.04] text-fuchsia-300">
              <Sparkles size={16} />
            </span>

            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.04] text-slate-300">
              <Trophy size={16} />
            </span>
          </div>
        </div>
      </article>
    </section>
  );
}
