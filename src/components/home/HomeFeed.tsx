"use client";

import {
  ArrowRight,
  BadgeCheck,
  Brain,
  ChevronRight,
  Clock3,
  Crown,
  Eye,
  FileText,
  Flame,
  Gift,
  KeyRound,
  Medal,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import ProgressRing from "./ProgressRing";

type ContestCardData = {
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

type VideoCardData = {
  title: string;
  subtitle: string;
  channel: string;
  duration: string;
  views: string;
  age: string;
  tag: string;
  gradient: string;
};

type UpdateCardData = {
  title: string;
  text: string;
  tone: string;
  icon: LucideIcon;
};

type RewardCardData = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  tone: string;
};

const contests: ContestCardData[] = [
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
  {
    label: "SUBJECT CUP",
    title: "Reasoning Cup",
    subtitle: "Quick rounds and accuracy points",
    badge: "Today • 09:30 PM",
    prize: "Top rank rewards",
    joined: "9.8K joined",
    button: "Join Now",
    accent: "from-sky-400/18 via-indigo-400/10 to-transparent",
    Icon: Trophy,
  },
];

const videos: VideoCardData[] = [
  {
    title: "Polity in 20 Minutes — Fundamental Rights",
    subtitle: "Fast revision for one of the most important topics.",
    channel: "ExamRS Academy",
    duration: "12:40",
    views: "83K views",
    age: "2 days ago",
    tag: "AI Recommended",
    gradient: "from-cyan-400/35 via-indigo-500/35 to-fuchsia-500/35",
  },
  {
    title: "Quant Tricks for Speed and Accuracy",
    subtitle: "Micro lessons with exam-style shortcuts.",
    channel: "ExamRS Academy",
    duration: "18:22",
    views: "61K views",
    age: "4 days ago",
    tag: "Top Pick",
    gradient: "from-emerald-400/30 via-cyan-500/30 to-blue-500/30",
  },
  {
    title: "Reasoning Practice — 30 Questions",
    subtitle: "Build pattern recognition with quick drills.",
    channel: "ExamRS Academy",
    duration: "15:05",
    views: "47K views",
    age: "1 week ago",
    tag: "Practice",
    gradient: "from-orange-400/30 via-pink-500/30 to-red-500/30",
  },
  {
    title: "Current Affairs — Weekly Revision",
    subtitle: "One clean run through the latest updates.",
    channel: "ExamRS Academy",
    duration: "21:10",
    views: "92K views",
    age: "5 days ago",
    tag: "Trending",
    gradient: "from-violet-400/30 via-fuchsia-500/30 to-cyan-500/30",
  },
];

const updates: UpdateCardData[] = [
  {
    title: "SSC CGL notification expected soon",
    text: "Track eligibility, dates, and syllabus updates.",
    tone: "from-cyan-400/15 via-indigo-500/10 to-transparent",
    icon: BadgeCheck,
  },
  {
    title: "Admit cards now open",
    text: "Download once the hall ticket goes live.",
    tone: "from-emerald-400/15 via-cyan-500/10 to-transparent",
    icon: FileText,
  },
  {
    title: "Results & cut-offs",
    text: "Follow official result releases in one place.",
    tone: "from-violet-400/15 via-fuchsia-500/10 to-transparent",
    icon: ShieldCheck,
  },
  {
    title: "Answer key uploads",
    text: "Instant review after any exam or mock test.",
    tone: "from-orange-400/15 via-amber-500/10 to-transparent",
    icon: KeyRound,
  },
  {
    title: "Expected cut-offs",
    text: "AI predicts safe score ranges by category.",
    tone: "from-pink-400/15 via-rose-500/10 to-transparent",
    icon: TrendingUp,
  },
  {
    title: "Updated syllabus",
    text: "Never miss an exam pattern change again.",
    tone: "from-sky-400/15 via-cyan-500/10 to-transparent",
    icon: FileText,
  },
];

const rewards: RewardCardData[] = [
  {
    title: "+100 XP",
    subtitle: "Claim your daily study bonus",
    icon: Gift,
    tone: "from-fuchsia-500/18 via-pink-500/10 to-transparent",
  },
  {
    title: "Daily Streak",
    subtitle: "Protect the 127 day run",
    icon: Flame,
    tone: "from-orange-400/18 via-amber-400/10 to-transparent",
  },
  {
    title: "Elite Badge",
    subtitle: "Unlocked after 3 more contests",
    icon: Medal,
    tone: "from-violet-400/18 via-indigo-400/10 to-transparent",
  },
  {
    title: "AI Reward",
    subtitle: "Weak set completion unlocked",
    icon: Sparkles,
    tone: "from-cyan-400/18 via-sky-400/10 to-transparent",
  },
];

function SectionTitle({
  title,
  action,
}: {
  title: string;
  action?: string;
}) {
  return (
    <div className="flex items-center justify-between px-1">
      <h3 className="text-[14px] font-semibold tracking-tight text-white">{title}</h3>
      {action ? (
        <button type="button" className="text-[11px] text-cyan-400 transition hover:text-cyan-300">
          {action}
        </button>
      ) : null}
    </div>
  );
}

function Metric({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-white/[0.03] px-3 py-3">
      <div className="flex items-center gap-2">
        <Icon size={13} className="text-cyan-400" />
        <p className="text-[9px] uppercase tracking-[0.16em] text-slate-500">{label}</p>
      </div>
      <p className="mt-1 text-[12px] font-semibold text-white">{value}</p>
    </div>
  );
}

function QuickAction({
  icon: Icon,
  label,
  tone,
}: {
  icon: LucideIcon;
  label: string;
  tone: string;
}) {
  return (
    <button
      type="button"
      className={`group flex items-center gap-3 rounded-[22px] border border-white/5 bg-gradient-to-br ${tone} px-3 py-3 text-left transition hover:-translate-y-0.5 hover:border-white/10`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-black/15 text-white">
        <Icon size={18} />
      </span>
      <span className="min-w-0">
        <span className="block text-[12px] font-semibold text-white">{label}</span>
        <span className="mt-0.5 block text-[10px] text-slate-300">Open</span>
      </span>
    </button>
  );
}

function ContestCard({ item }: { item: ContestCardData }) {
  const Icon = item.Icon;

  return (
    <article className="group relative w-[248px] shrink-0 overflow-hidden rounded-[24px] border border-white/5 bg-[#0D1424]/94 p-3.5 shadow-[0_24px_80px_-60px_rgba(34,211,238,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/10 sm:w-[272px]">
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent}`} />
      <div className="pointer-events-none absolute -right-6 top-0 h-28 w-28 rounded-full bg-white/[0.03] blur-3xl" />
      <div className="pointer-events-none absolute -left-8 bottom-0 h-20 w-20 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <span className="inline-flex rounded-full bg-white/[0.06] px-2.5 py-1 text-[9px] font-semibold tracking-[0.16em] text-white/85">
              {item.label}
            </span>

            <h4 className="mt-2.5 text-[16px] font-semibold tracking-tight text-white">
              {item.title}
            </h4>

            <p className="mt-1 text-[11px] leading-4.5 text-slate-400">{item.subtitle}</p>
          </div>

          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[18px] border border-white/5 ${
              item.label === "FREE MEGA"
                ? "bg-emerald-400/12 text-emerald-300"
                : item.label === "PAID MEGA"
                ? "bg-violet-400/12 text-violet-300"
                : item.label === "SUNDAY GRAND"
                ? "bg-amber-400/12 text-amber-300"
                : "bg-sky-400/12 text-sky-300"
            }`}
          >
            <Icon size={22} strokeWidth={2} />
          </div>
        </div>

        <div className="relative mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-2xl bg-white/[0.04] px-2.5 py-2.5">
            <p className="text-[9px] text-slate-500">Joined</p>
            <p className="mt-0.5 text-[11px] font-semibold text-white">{item.joined}</p>
          </div>

          <div className="rounded-2xl bg-white/[0.04] px-2.5 py-2.5">
            <p className="text-[9px] text-slate-500">Prize</p>
            <p className="mt-0.5 text-[11px] font-semibold text-white">{item.prize}</p>
          </div>
        </div>

        <div className="relative mt-2.5 flex items-center justify-between gap-2 rounded-2xl bg-white/[0.03] px-2.5 py-2.5">
          <div>
            <p className="text-[9px] uppercase tracking-[0.18em] text-slate-500">
              Start time
            </p>
            <p className="mt-0.5 text-[11px] font-semibold text-white">{item.badge}</p>
          </div>

          <button
            type="button"
            className={`inline-flex h-8 items-center justify-center rounded-full px-3.5 text-[11px] font-semibold transition ${
              item.label === "FREE MEGA"
                ? "bg-emerald-400 text-black hover:opacity-95"
                : item.label === "PAID MEGA"
                ? "bg-violet-500 text-white hover:opacity-95"
                : item.label === "SUNDAY GRAND"
                ? "bg-amber-400 text-black hover:opacity-95"
                : "bg-sky-400 text-black hover:opacity-95"
            }`}
          >
            {item.button}
          </button>
        </div>

        <div className="relative mt-2.5 flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] px-2.5 py-1 text-[10px] text-slate-300">
            <Sparkles size={11} className="text-cyan-400" />
            Live ranking
          </div>

          <button
            type="button"
            className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.04] text-slate-300 transition hover:bg-white/[0.07] hover:text-white"
          >
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="relative mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
          <div
            className={`h-full rounded-full ${
              item.label === "FREE MEGA"
                ? "w-[74%] bg-gradient-to-r from-emerald-400 to-cyan-400"
                : item.label === "PAID MEGA"
                ? "w-[66%] bg-gradient-to-r from-violet-400 to-fuchsia-400"
                : item.label === "SUNDAY GRAND"
                ? "w-[80%] bg-gradient-to-r from-amber-400 to-orange-400"
                : "w-[68%] bg-gradient-to-r from-sky-400 to-indigo-400"
            }`}
          />
        </div>

        <div className="relative mt-3.5 flex items-center justify-between">
          <p className="text-[10px] text-slate-500">Powered by ExamRS Arena</p>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] px-2.5 py-1 text-[10px] text-slate-300">
            <ShieldCheck size={11} className="text-cyan-400" />
            Official
          </div>
        </div>
      </div>
    </article>
  );
}

function VideoCard({ video }: { video: VideoCardData }) {
  return (
    <article className="w-[244px] shrink-0 overflow-hidden rounded-[22px] border border-white/5 bg-[#0D1424]/94 backdrop-blur-xl sm:w-[264px]">
      <div className={`relative h-28 bg-gradient-to-br ${video.gradient} sm:h-32`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_42%)]" />
        <div className="absolute left-2.5 top-2.5 rounded-full bg-black/60 px-2 py-1 text-[8px] font-semibold tracking-[0.16em] text-white">
          {video.tag}
        </div>
        <div className="absolute bottom-2.5 right-2.5 rounded-full bg-black/70 px-2 py-1 text-[8px] font-medium text-white">
          {video.duration}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm">
            <PlayCircle size={20} className="text-white" />
          </div>
        </div>
      </div>

      <div className="p-3">
        <h4 className="line-clamp-2 text-[12px] font-semibold leading-5 text-white">
          {video.title}
        </h4>
        <p className="mt-1 line-clamp-2 text-[10px] leading-4.5 text-slate-400">
          {video.subtitle}
        </p>

        <div className="mt-2 flex items-center justify-between gap-2 text-[9px] text-slate-500">
          <span>{video.channel}</span>
          <span className="inline-flex items-center gap-1">
            <Eye size={10} />
            {video.views}
          </span>
        </div>

        <div className="mt-1 inline-flex items-center gap-1 text-[9px] text-slate-500">
          <Clock3 size={10} />
          {video.age}
        </div>
      </div>
    </article>
  );
}

function UpdateCard({ item }: { item: UpdateCardData }) {
  const Icon = item.icon;

  return (
    <article className={`w-[200px] shrink-0 rounded-[20px] bg-gradient-to-br ${item.tone} px-3 py-3`}>
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h4 className="text-[11px] font-semibold tracking-tight text-white">
            {item.title}
          </h4>
          <p className="mt-1 text-[10px] leading-4 text-slate-400">{item.text}</p>
        </div>

        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black/15">
          <Icon size={14} className="text-white" />
        </div>
      </div>
    </article>
  );
}

function RewardCard({ item }: { item: RewardCardData }) {
  const Icon = item.icon;

  return (
    <article
      className={`w-[200px] shrink-0 rounded-[20px] border border-white/5 bg-gradient-to-br ${item.tone} p-3 backdrop-blur-xl`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
            Reward
          </div>
          <h4 className="mt-2.5 text-[13px] font-bold tracking-tight text-white">
            {item.title}
          </h4>
          <p className="mt-1 text-[10px] leading-4.5 text-slate-400">{item.subtitle}</p>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-black/15 text-white">
          <Icon size={16} />
        </div>
      </div>
    </article>
  );
}

export default function HomeFeed() {
  return (
    <div className="space-y-4 md:space-y-5">
      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.14fr)_minmax(320px,0.86fr)]">
        <section className="relative overflow-hidden rounded-[26px] border border-white/5 bg-[#0D1424]/94 p-4 shadow-[0_28px_90px_-58px_rgba(34,211,238,0.36)] backdrop-blur-xl sm:p-4.5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.10),transparent_26%)]" />
          <div className="absolute -right-8 top-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-fuchsia-500/10 blur-3xl" />

          <div className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 flex-1">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                <Flame size={11} />
                127 Day Streak
              </div>

              <h2 className="mt-2.5 max-w-[15ch] text-[24px] font-black leading-[1.02] tracking-tight text-white sm:max-w-[18ch] sm:text-[28px] lg:text-[30px]">
                Good evening, Vivek
              </h2>

              <p className="mt-1.5 max-w-[40ch] text-[12px] leading-5 text-slate-400 sm:text-[13px]">
                Compact mission focus, stronger revision flow, and cleaner competition tracking.
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-cyan-400/15 px-2.5 py-1 text-[10px] text-cyan-300">
                  AIR 500
                </span>
                <span className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[10px] text-slate-300">
                  +120 XP
                </span>
                <span className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[10px] text-slate-300">
                  Rank +12
                </span>
              </div>

              <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
                <button
                  type="button"
                  className="inline-flex h-9 items-center justify-center gap-2 rounded-full bg-cyan-400 px-4 text-[12px] font-semibold text-black transition hover:opacity-95"
                >
                  Continue Mission
                  <ChevronRight size={15} />
                </button>

                <button
                  type="button"
                  className="inline-flex h-9 items-center justify-center rounded-full bg-white/[0.04] px-4 text-[12px] font-semibold text-white transition hover:bg-white/[0.06]"
                >
                  Reverse Study
                </button>
              </div>
            </div>

            <div className="shrink-0 self-start pt-0.5">
              <ProgressRing value={72} size={66} label="Mission" />
            </div>
          </div>

          <div className="relative mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
            <Metric icon={TrendingUp} label="Focus" value="3 Topics" />
            <Metric icon={Brain} label="AI" value="Live Coach" />
            <Metric icon={ShieldCheck} label="Shield" value="Safe" />
          </div>

          <div className="relative mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
            <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400" />
          </div>

          <div className="relative mt-2 flex items-center justify-between gap-2">
            <p className="text-[10px] text-slate-500">Today&apos;s Mission Progress</p>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] px-2.5 py-1 text-[10px] text-slate-300">
              <Sparkles size={11} className="text-cyan-400" />
              Mission live
            </div>
          </div>
        </section>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
          <section className="rounded-[22px] border border-white/5 bg-[#0D1424]/94 p-4 backdrop-blur-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300">
              <Brain size={12} />
              AI Alert
            </div>

            <h3 className="mt-2.5 text-[16px] font-bold tracking-tight text-white">
              Polity is fading from memory
            </h3>

            <p className="mt-1.5 max-w-[28ch] text-[11px] leading-5 text-slate-400">
              Last touch was 19 days ago. Fix it before the decay grows.
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/[0.04] px-3 py-1 text-[10px] text-slate-300">
                Fundamental Rights
              </span>
              <span className="rounded-full bg-white/[0.04] px-3 py-1 text-[10px] text-slate-300">
                3 minute rescue
              </span>
            </div>

            <div className="mt-3.5 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
              <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400" />
            </div>

            <div className="mt-3 flex items-center justify-between">
              <p className="text-[11px] text-slate-500">AI recommended priority</p>
              <button className="inline-flex items-center gap-1 text-[11px] text-cyan-400">
                Open weak set
                <ArrowRight size={12} />
              </button>
            </div>
          </section>

          <section className="rounded-[22px] border border-white/5 bg-[#0D1424]/94 p-4 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-cyan-400">
                  Continue Study
                </p>
                <h3 className="mt-1 text-[15px] font-semibold tracking-tight text-white">
                  Polity • Fundamental Rights
                </h3>
              </div>

              <button
                type="button"
                className="inline-flex h-8 items-center rounded-full bg-cyan-400 px-3.5 text-[11px] font-semibold text-black"
              >
                Continue
              </button>
            </div>

            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
              <div className="h-full w-[66%] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400" />
            </div>

            <div className="mt-3.5 flex flex-wrap gap-2">
              {["Article 12", "Article 13", "Article 14"].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[10px] text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="space-y-2.5">
        <SectionTitle title="Quick Actions" />
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <QuickAction icon={Brain} label="AI Coach" tone="from-cyan-400/14 via-indigo-400/8 to-transparent" />
          <QuickAction icon={Flame} label="Daily Streak" tone="from-orange-400/14 via-amber-400/8 to-transparent" />
          <QuickAction icon={Trophy} label="Contest" tone="from-violet-400/14 via-fuchsia-400/8 to-transparent" />
          <QuickAction icon={Gift} label="Rewards" tone="from-emerald-400/14 via-cyan-400/8 to-transparent" />
        </div>
      </section>

      <section className="space-y-2.5">
        <SectionTitle title="Today's Contests" action="View all" />
        <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-1">
          {contests.map((item) => (
            <ContestCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="rounded-[22px] border border-white/5 bg-[#0D1424]/94 p-4 backdrop-blur-xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
              <Flame size={12} />
              Momentum
            </div>

            <p className="mt-2 text-[16px] font-bold tracking-tight text-white">
              7 day streak • +120 XP today
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-2 text-[11px] text-slate-300">
            <TrendingUp size={14} className="text-emerald-400" />
            Rank +12
          </div>
        </div>

        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
          <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400" />
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <div className="rounded-xl bg-white/[0.03] px-3 py-2.5">
            <p className="text-[10px] text-slate-500">Study</p>
            <p className="mt-1 text-[12px] font-semibold text-white">82%</p>
          </div>
          <div className="rounded-xl bg-white/[0.03] px-3 py-2.5">
            <p className="text-[10px] text-slate-500">Mocks</p>
            <p className="mt-1 text-[12px] font-semibold text-white">68%</p>
          </div>
          <div className="rounded-xl bg-white/[0.03] px-3 py-2.5">
            <p className="text-[10px] text-slate-500">Revision</p>
            <p className="mt-1 text-[12px] font-semibold text-white">74%</p>
          </div>
          <div className="rounded-xl bg-white/[0.03] px-3 py-2.5">
            <p className="text-[10px] text-slate-500">Rewards</p>
            <p className="mt-1 text-[12px] font-semibold text-white">4</p>
          </div>
        </div>
      </section>

      <section className="space-y-2.5">
        <SectionTitle title="AI Recommendations" action="Open all" />
        <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-1">
          {[
            {
              title: "Polity weak set",
              text: "3 minute rescue now",
              icon: Brain,
              tone: "from-cyan-400/14 via-indigo-500/8 to-transparent",
            },
            {
              title: "Revision due",
              text: "History + Geography",
              icon: FileText,
              tone: "from-violet-400/14 via-fuchsia-500/8 to-transparent",
            },
            {
              title: "Forgetting soon",
              text: "Quant formulas",
              icon: ShieldCheck,
              tone: "from-orange-400/14 via-amber-500/8 to-transparent",
            },
            {
              title: "Suggested mock",
              text: "Reasoning sprint",
              icon: Trophy,
              tone: "from-emerald-400/14 via-cyan-500/8 to-transparent",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className={`w-[200px] shrink-0 rounded-[20px] border border-white/5 bg-gradient-to-br ${item.tone} p-3.5`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.18em] text-cyan-400">AI</p>
                    <h4 className="mt-1.5 text-[13px] font-semibold text-white">{item.title}</h4>
                    <p className="mt-1 text-[10px] text-slate-400">{item.text}</p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-black/15 text-white">
                    <Icon size={17} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="space-y-2.5">
        <SectionTitle title="Latest Updates" action="View all" />
        <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-1">
          {updates.map((item) => (
            <UpdateCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-2.5">
        <SectionTitle title="Continue Learning" action="View all" />
        <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-1">
          {videos.map((video) => (
            <VideoCard key={video.title} video={video} />
          ))}
        </div>
      </section>

      <section className="space-y-2.5">
        <SectionTitle title="Rewards" action="Claim" />
        <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-1">
          {rewards.map((item) => (
            <RewardCard key={item.title} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
