"use client";

import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function MobileCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/97 backdrop-blur md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <nav aria-label="Quick actions" className="grid grid-cols-3 text-center">
        <a
          href={siteConfig.contact.phoneHref}
          className="flex items-center justify-center gap-1.5 py-3 text-[13px] font-bold uppercase tracking-wide text-navy-900"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call
        </a>
        <a
          href={siteConfig.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 border-x border-line py-3 text-[13px] font-bold uppercase tracking-wide text-navy-900"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center bg-navy-900 py-3 text-[13px] font-bold uppercase tracking-wide text-white"
        >
          Book Demo
        </Link>
      </nav>
    </div>
  );
}
