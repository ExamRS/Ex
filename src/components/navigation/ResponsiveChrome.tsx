"use client";

import { ReactNode, useEffect, useState } from "react";
import BottomNav from "./BottomNav";
import DesktopRail from "./DesktopRail";
import DesktopSidebar from "./DesktopSidebar";
import ExamTabs from "./ExamTabs";
import Header from "./Header";

const DESKTOP_BREAKPOINT = 1024;

export default function ResponsiveChrome({ children }: { children: ReactNode }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [chromeVisible, setChromeVisible] = useState(true);
  const [hideBottomNav, setHideBottomNav] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let raf = 0;

    const sync = () => {
      const desktop = window.innerWidth >= DESKTOP_BREAKPOINT;
      const y = window.scrollY;
      const delta = y - lastY;

      setIsDesktop(desktop);

      if (desktop) {
        setChromeVisible(true);
        setHideBottomNav(false);
        lastY = y;
        return;
      }

      if (y <= 12) {
        setChromeVisible(true);
        setHideBottomNav(false);
        lastY = y;
        return;
      }

      if (delta > 12 && y > 72) {
        setChromeVisible(false);
        setHideBottomNav(true);
      } else if (delta < -8) {
        setChromeVisible(true);
        setHideBottomNav(false);
      }

      lastY = y;
    };

    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(sync);
    };

    sync();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  const topChromeHidden = !isDesktop && !chromeVisible;

  return (
    <div className="min-h-dvh">
      <div
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out will-change-transform ${
          topChromeHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <Header />
        <ExamTabs />
      </div>

      <main
        className="mx-auto grid w-full max-w-[1760px] gap-4 px-3 pb-[calc(7.75rem+env(safe-area-inset-bottom))] sm:px-4 md:px-6 lg:grid-cols-[248px_minmax(0,1fr)] lg:gap-5 xl:grid-cols-[248px_minmax(0,1fr)_336px] 2xl:grid-cols-[264px_minmax(0,1fr)_356px]"
        style={{ paddingTop: "5.9rem" }}
      >
        <DesktopSidebar />
        <section className="min-w-0">{children}</section>
        <DesktopRail />
      </main>

      <BottomNav hidden={hideBottomNav} />
    </div>
  );
}
