"use client";

import ThemeProvider from "@/lib/providers/ThemeProvider";
import QueryProvider from "@/lib/providers/QueryProvider";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  );
}
