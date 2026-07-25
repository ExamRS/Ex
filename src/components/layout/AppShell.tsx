"use client";

import { ReactNode } from "react";
import ResponsiveChrome from "../navigation/ResponsiveChrome";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-dvh overflow-x-clip bg-[#08111F] text-white antialiased">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_26%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.08),transparent_24%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.05),transparent_18%)]" />
      <div className="relative">
        <ResponsiveChrome>{children}</ResponsiveChrome>
      </div>
    </main>
  );
}
