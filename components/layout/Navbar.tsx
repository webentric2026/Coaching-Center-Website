"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, GraduationCap, Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change (pathname comes from Next router)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open ]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow",
          scrolled ? "border-line shadow-[0_1px_12px_rgba(10,22,51,0.08)]" : "border-transparent"
        )}
      >
        <Container>
          <nav aria-label="Primary" className="flex h-16 items-center justify-between gap-4 lg:h-[72px]">
            <Link href="/" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} — home`}>
              <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-navy-900 text-gold-400">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block text-[17px] font-extrabold uppercase tracking-wide text-navy-950">
                  {siteConfig.name}
                </span>
                <span className="block text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">
                  Paschim Puri · Delhi
                </span>
              </span>
            </Link>

            <ul className="hidden items-center gap-1 lg:flex">
              {siteConfig.navigation.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative px-3.5 py-2 text-[13.5px] font-semibold tracking-wide transition-colors",
                        active ? "text-navy-900" : "text-slate-600 hover:text-navy-900"
                      )}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-x-3 -bottom-0.5 h-0.5 bg-gold-500 transition-transform",
                          active ? "scale-x-100" : "scale-x-0"
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="hidden items-center gap-3 lg:flex">
              <Button href="/contact" size="sm" variant="primary">
                Book Free Demo
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-sm border border-line text-navy-950 lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile drawer — slides in from the right */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[60] lg:hidden">
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-navy-950/45"
            />
            <motion.aside
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 flex h-full dvh w-[86%] max-w-sm flex-col bg-white shadow-xl"
            >
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <span className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-navy-900 text-gold-400">
                    <GraduationCap className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-[15px] font-extrabold uppercase tracking-wide text-navy-950">
                    {siteConfig.name}
                  </span>
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  autoFocus
                  className="flex h-10 w-10 items-center justify-center rounded-sm border border-line text-navy-950"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-4">
                <ul>
                  {siteConfig.navigation.map((item, i) => {
                    const active =
                      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                    return (
                      <li key={item.href} className={cn(i > 0 && "border-t border-line")}>
                        <Link
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "group flex items-center justify-between py-3.5 text-[16px] font-semibold",
                            active ? "text-navy-950" : "text-slate-600"
                          )}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              aria-hidden="true"
                              className={cn(
                                "h-5 w-1 rounded-sm",
                                active ? "bg-gold-500" : "bg-transparent"
                              )}
                            />
                            {item.label}
                          </span>
                          <ArrowRight className="h-4 w-4 text-slate-300 transition-transform group-active:translate-x-0.5" aria-hidden="true" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="border-t border-line px-5 py-5">
                <Button href="/contact" size="md" className="w-full">
                  Book Free Demo
                </Button>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-navy-900"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
