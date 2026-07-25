import "./globals.css";
import type { Metadata } from "next";
import Providers from "@/providers";
import AppShell from "@/components/layout/AppShell";

export const metadata: Metadata = {
  title: "ExamRS",
  description: "Exam Reverse Study Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
