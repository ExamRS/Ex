"use client";

import { ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <main className="min-h-screen w-full bg-[#08111F] text-white">
      {children}
    </main>
  );
}
