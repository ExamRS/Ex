import {
  Trophy,
  Sparkles,
  BriefcaseBusiness,
  PlayCircle,
  ClipboardCheck,
  FileText,
  Target,
  BellRing,
} from "lucide-react";

export const EXAMS = [
  "For You",
  "SSC CGL",
  "SSC CHSL",
  "RRB NTPC",
  "UPSC",
  "UPPSC",
  "Banking",
  "Railway",
  "Defence",
  "All Exams",
] as const;

export const QUICK_ACTIONS = [
  {
    title: "Free Mega",
    subtitle: "10:00 AM",
    icon: Trophy,
    tone: "from-emerald-400/20 to-emerald-400/5",
  },
  {
    title: "AI Revision",
    subtitle: "Weak topics",
    icon: Sparkles,
    tone: "from-cyan-400/20 to-cyan-400/5",
  },
  {
    title: "Jobs & Results",
    subtitle: "Latest updates",
    icon: BriefcaseBusiness,
    tone: "from-violet-400/20 to-violet-400/5",
  },
  {
    title: "Video Feed",
    subtitle: "Watch next",
    icon: PlayCircle,
    tone: "from-amber-400/20 to-amber-400/5",
  },
  {
    title: "Mock Test",
    subtitle: "Adaptive",
    icon: Target,
    tone: "from-sky-400/20 to-sky-400/5",
  },
  {
    title: "PYQ Bank",
    subtitle: "Practice",
    icon: FileText,
    tone: "from-rose-400/20 to-rose-400/5",
  },
  {
    title: "Revision Cart",
    subtitle: "Auto picked",
    icon: ClipboardCheck,
    tone: "from-lime-400/20 to-lime-400/5",
  },
  {
    title: "Notifications",
    subtitle: "Admit / Result",
    icon: BellRing,
    tone: "from-orange-400/20 to-orange-400/5",
  },
] as const;
