import Image from "next/image";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { resultHighlights } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";

export function ResultsBand() {
  return (
    <section aria-label="Results and achievements" className="bg-white">
      <Container className="pb-14 lg:pb-20">
        <div className="grid overflow-hidden rounded-sm bg-navy-950 lg:grid-cols-2">
          <div className="p-7 sm:p-9 lg:p-11">
            <Reveal>
              <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-gold-400">
                <span aria-hidden="true" className="inline-block h-px w-8 bg-gold-500" />
                Results &amp; Achievements
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                Scores improve when teaching is personal
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-navy-100">
                Small batches, regular testing and mentoring that keeps every student on track.
              </p>
            </Reveal>
            <dl className="mt-7 grid grid-cols-2 gap-6">
              {resultHighlights.map((r, i) => (
                <Reveal key={r.label} delay={i * 0.06}>
                  <div className="border-l-2 border-gold-500 pl-4">
                    <dd className="text-2xl font-extrabold text-white sm:text-3xl">
                      <AnimatedCounter value={r.value} suffix={r.suffix} />
                    </dd>
                    <dt className="mt-1 text-[13px] font-medium leading-snug text-navy-100">
                      {r.label}
                    </dt>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
          <div className="relative min-h-[260px] lg:min-h-full">
            <Image
              src={siteConfig.images.resultsSide}
              alt="Graduating students celebrating academic results"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-navy-950/25" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function CTA() {
  return (
    <section aria-labelledby="cta-heading" className="bg-paper">
      <Container className="pb-14 lg:pb-20">
        <div className="rounded-sm bg-navy-900 px-6 py-10 text-center sm:px-12 lg:py-14">
          <Reveal>
            <h2 id="cta-heading" className="mx-auto max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl">
              Ready to Take the Next Step?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-navy-100">
              Book a free counselling and demo session. We will understand your
              child&apos;s goals and suggest the right batch — no obligation.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-gold-500 px-7 text-[13px] font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-gold-400"
              >
                Book Free Demo
              </a>
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-white/30 px-7 text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
