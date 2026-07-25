"use client";

import { ReactNode, useEffect, useState } from "react";
import BottomNav from "./BottomNav";
import DesktopRail from "./DesktopRail";
import DesktopSidebar from "./DesktopSidebar";
import Header from "./Header";
import ExamTabs from "./ExamTabs";

const MOBILE_TOP_CHROME_HEIGHT = 90;

export default function ResponsiveChrome({ children }: { children: ReactNode }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [chromeVisible, setChromeVisible] = useState(true);
  const [hideBottomNav, setHideBottomNav] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let raf = 0;

    const update = () => {
      const desktop = window.innerWidth >= 1024;
      const y = window.scrollY;
      const delta = y - lastY;

      setIsDesktop(desktop);

      if (desktop) {
        setChromeVisible(true);
        setHideBottomNav(true);
        lastY = y;
        return;
      }

      if (y < 20) {
        setChromeVisible(true);
        setHideBottomNav(false);
        lastY = y;
        return;
      }

      if (delta > 10 && y > 72) {
        setChromeVisible(false);
        setHideBottomNav(true);
      } else if (delta < -6) {
        setChromeVisible(true);
        setHideBottomNav(false);
      }

      lastY = y;
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  const topChromeHidden = !isDesktop && !chromeVisible;
  const mainOffset = isDesktop || chromeVisible ? MOBILE_TOP_CHROME_HEIGHT : 0;

  return (
    <div className="min-h-screen bg-[#08111F] text-white">
      <div
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out will-change-transform ${
          topChromeHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <Header />
        <ExamTabs />
      </div>

      <main
        className={`mx-auto w-full max-w-[1680px] px-3 pb-24 sm:px-4 lg:grid lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-5 xl:grid-cols-[250px_minmax(0,1fr)_360px] transition-transform duration-300 ease-out will-change-transform`}
        style={{
          transform: `translateY(${mainOffset}px)`,
        }}
      >
        <DesktopSidebar />

        <section className="min-w-0">
          <div className="mx-auto w-full max-w-[430px] lg:max-w-[840px]">
            {children}
          </div>
        </section>

        <DesktopRail />
      </main>

      <BottomNav hidden={hideBottomNav} />
    </div>
  );
}
