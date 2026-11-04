"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { siteConfig } from "@/config/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const pathname = usePathname();


  const [openedOnPath, setOpenedOnPath] = useState(pathname);
  const menuOpen = open && openedOnPath === pathname;

  const toggleMenu = () => {
    setOpenedOnPath(pathname);
    setOpen(!menuOpen);
  };

  useEffect(() => {
    if (!menuOpen) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onEscape);
    };
  }, [menuOpen]);



  return (
    <>
      <button
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="paychex-mobile-menu"
        onClick={toggleMenu}
        className="relative z-[100] ml-auto flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-sm border border-current/30 md:hidden"
      >
        <span className="h-[2px] w-5 bg-current" />
        <span className="h-[2px] w-5 bg-current" />
        <span className="h-[2px] w-5 bg-current" />
      </button>

      {mounted &&
        createPortal(
          <div
            id="paychex-mobile-menu"
            aria-hidden={!menuOpen}
            className={`fixed inset-0 z-[90] bg-[#171717] text-white transition-opacity duration-200 md:hidden ${
              menuOpen
                ? "visible opacity-100"
                : "invisible pointer-events-none opacity-0"
            }`}
          >
            <div className="flex h-full flex-col overflow-y-auto px-7 pb-12 pt-28">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="absolute right-7 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-sm border border-white/30 text-3xl text-white"
              >
                <span aria-hidden="true">×</span>
              </button>
              <nav aria-label="Mobile navigation">
                <ul className="space-y-6">
                  {siteConfig.nav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        tabIndex={menuOpen ? 0 : -1}
                        onClick={() => setOpen(false)}
                        className="block border-b border-white/15 pb-4 text-3xl font-semibold"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <Link
                href={siteConfig.cta.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => setOpen(false)}
                className="mt-12 inline-flex min-h-14 items-center justify-center bg-[#f0cd36] px-6 font-semibold text-black"
              >
                {siteConfig.cta.label}
              </Link>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
