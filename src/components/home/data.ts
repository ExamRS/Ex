import type {
  ContestCardData,
  UpdateCardData,
  VideoCardData,
} from "./types";

export const contestCards: ContestCardData[] = [
  {
    id: "free-mega",
    label: "FREE MEGA",
    title: "Free Mega Contest",
    subtitle: "Practice • Diagnose • Improve",
    time: "10:00 AM",
    participants: "34.6K+ Participating",
    prize: "XP • Points • Badges",
    cta: "Join Now",
    gradient: "from-emerald-400/22 via-emerald-500/6 to-transparent",
    glow: "shadow-[0_20px_60px_-28px_rgba(16,185,129,0.6)]",
  },
  {
    id: "paid-mega",
    label: "PAID MEGA",
    title: "Paid Mega Contest",
    subtitle: "Win cash prizes",
    time: "07:00 PM",
    participants: "12.8K+ Registered",
    prize: "₹50,000 Prize Pool",
    cta: "View Details",
    gradient: "from-violet-400/22 via-violet-500/6 to-transparent",
    glow: "shadow-[0_20px_60px_-28px_rgba(139,92,246,0.6)]",
  },
];

export const videoCards: VideoCardData[] = [
  {
    id: "polity-fr",
    title: "Fundamental Rights in 20 Minutes",
    subtitle: "Polity • Fast revision for SSC and UPSC",
    channel: "ExamRS",
    views: "12K views",
    age: "1 day ago",
    duration: "24:15",
    gradient: "from-emerald-400/25 via-emerald-900/10 to-slate-950",
    tag: "POLITY",
  },
  {
    id: "ssc-strategy",
    title: "SSC CGL Complete Strategy",
    subtitle: "To crack in first attempt",
    channel: "ExamRS",
    views: "18K views",
    age: "2 days ago",
    duration: "18:20",
    gradient: "from-rose-400/25 via-rose-900/10 to-slate-950",
    tag: "STRATEGY",
  },
  {
    id: "time-work",
    title: "Time & Work Best Tricks",
    subtitle: "Quantitative aptitude shortcuts",
    channel: "ExamRS",
    views: "9.2K views",
    age: "3 days ago",
    duration: "12:45",
    gradient: "from-amber-400/25 via-amber-900/10 to-slate-950",
    tag: "MATHS",
  },
  {
    id: "history-1857",
    title: "1857 Revolt Important Facts",
    subtitle: "History • High frequency questions",
    channel: "ExamRS",
    views: "7.1K views",
    age: "3 days ago",
    duration: "21:30",
    gradient: "from-cyan-400/25 via-cyan-900/10 to-slate-950",
    tag: "HISTORY",
  },
];

export const updateCards: UpdateCardData[] = [
  {
    id: "exam-notifications",
    title: "Exam Notifications",
    subtitle: "Latest official notifications",
    tone: "from-fuchsia-400/18 to-slate-900",
  },
  {
    id: "admit-card",
    title: "Admit Cards",
    subtitle: "Download hall tickets",
    tone: "from-blue-400/18 to-slate-900",
  },
  {
    id: "results",
    title: "Results",
    subtitle: "Check latest results",
    tone: "from-emerald-400/18 to-slate-900",
  },
  {
    id: "answer-key",
    title: "Answer Keys",
    subtitle: "Official answer keys",
    tone: "from-orange-400/18 to-slate-900",
  },
  {
    id: "cut-offs",
    title: "Cut-offs",
    subtitle: "Category-wise cut-offs",
    tone: "from-pink-400/18 to-slate-900",
  },
  {
    id: "syllabus",
    title: "Syllabus",
    subtitle: "Exam-wise subjects",
    tone: "from-cyan-400/18 to-slate-900",
  },
];
