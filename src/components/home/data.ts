import type { UpdateCardData, VideoCardData } from "./types";

export const updateCards: UpdateCardData[] = [
  {
    id: "exam-notifications",
    title: "SSC CGL notification expected soon",
    subtitle: "Track eligibility, dates, and syllabus updates.",
    tone: "from-cyan-400/15 via-indigo-500/10 to-transparent",
  },
  {
    id: "admit-card",
    title: "Admit cards now open",
    subtitle: "Download once the hall ticket goes live.",
    tone: "from-emerald-400/15 via-cyan-500/10 to-transparent",
  },
  {
    id: "results",
    title: "Results & cut-offs",
    subtitle: "Follow official result releases in one place.",
    tone: "from-violet-400/15 via-fuchsia-500/10 to-transparent",
  },
  {
    id: "answer-key",
    title: "Answer key uploads",
    subtitle: "Instant review after any exam or mock test.",
    tone: "from-orange-400/15 via-amber-500/10 to-transparent",
  },
  {
    id: "cut-offs",
    title: "Expected cut-offs",
    subtitle: "AI predicts safe score ranges by category.",
    tone: "from-pink-400/15 via-rose-500/10 to-transparent",
  },
  {
    id: "syllabus",
    title: "Updated syllabus",
    subtitle: "Never miss an exam pattern change again.",
    tone: "from-sky-400/15 via-cyan-500/10 to-transparent",
  },
];

export const videoCards: VideoCardData[] = [
  {
    id: "1",
    title: "Polity in 20 Minutes — Fundamental Rights",
    subtitle: "Fast revision for one of the most important topics.",
    channel: "ExamRS Academy",
    duration: "12:40",
    views: "83K views",
    age: "2 days ago",
    tag: "AI Recommended",
    gradient: "from-cyan-400/40 via-indigo-500/40 to-fuchsia-500/40",
  },
  {
    id: "2",
    title: "Quant Tricks for Speed and Accuracy",
    subtitle: "Micro lessons with exam-style shortcuts.",
    channel: "ExamRS Academy",
    duration: "18:22",
    views: "61K views",
    age: "4 days ago",
    tag: "Top Pick",
    gradient: "from-emerald-400/35 via-cyan-500/35 to-blue-500/35",
  },
  {
    id: "3",
    title: "Reasoning Practice — 30 Questions",
    subtitle: "Build pattern recognition with quick drills.",
    channel: "ExamRS Academy",
    duration: "15:05",
    views: "47K views",
    age: "1 week ago",
    tag: "Practice",
    gradient: "from-orange-400/35 via-pink-500/35 to-red-500/35",
  },
  {
    id: "4",
    title: "Current Affairs — Weekly Revision",
    subtitle: "One clean run through the latest updates.",
    channel: "ExamRS Academy",
    duration: "21:10",
    views: "92K views",
    age: "5 days ago",
    tag: "Trending",
    gradient: "from-violet-400/35 via-fuchsia-500/35 to-cyan-500/35",
  },
];
