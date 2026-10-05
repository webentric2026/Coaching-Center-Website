import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { courses } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/layout/NewsletterForm";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true" {...props}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const quickLinks = siteConfig.navigation;

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr] lg:py-16">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/10 text-gold-400">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-[16px] font-extrabold uppercase tracking-wide text-white">
                {siteConfig.name}
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
                Paschim Puri · Delhi
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Focused classroom coaching for Classes 6–12, CBSE boards, JEE, NEET
            and spoken English — with small batches and personal mentoring.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { label: "Instagram", href: siteConfig.socials.instagram, Icon: InstagramIcon },
              { label: "Facebook", href: siteConfig.socials.facebook, Icon: FacebookIcon },
              { label: "YouTube", href: siteConfig.socials.youtube, Icon: YoutubeIcon },
              { label: "LinkedIn", href: siteConfig.socials.linkedin, Icon: LinkedinIcon },
            ].map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${siteConfig.name} on ${label}`}
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/15 text-slate-300 transition-colors hover:border-gold-500 hover:text-gold-400"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h3 className="text-[13px] font-bold uppercase tracking-[0.16em] text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-gold-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Popular courses">
          <h3 className="text-[13px] font-bold uppercase tracking-[0.16em] text-white">
            Courses
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {courses.slice(0, 5).map((c) => (
              <li key={c.slug}>
                <Link href={`/courses#${c.slug}`} className="transition-colors hover:text-gold-400">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-[13px] font-bold uppercase tracking-[0.16em] text-white">
            Stay Updated
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Batch updates and admission alerts. No spam.
          </p>
          <NewsletterForm />
          <address className="mt-5 text-sm not-italic leading-relaxed text-slate-400">
            {siteConfig.contact.addressLines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
            <a href={siteConfig.contact.phoneHref} className="mt-1 block hover:text-gold-400">
              {siteConfig.contact.phoneDisplay}
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="block hover:text-gold-400">
              {siteConfig.contact.email}
            </a>
          </address>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-[13px] text-slate-500 sm:flex-row">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <p className="flex gap-4">
            <Link href="/contact" className="hover:text-gold-400">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-gold-400">
              Terms &amp; Conditions
            </Link>
          </p>
        </Container>
        {/* Spacer so the fixed mobile call bar never covers footer content */}
        <div aria-hidden="true" className="h-16 md:hidden" />
      </div>
    </footer>
  );
}
