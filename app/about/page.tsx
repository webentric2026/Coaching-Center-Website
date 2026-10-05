import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { heroStats, benefits } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/components/home/ResultsCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Vidya Academy — our mission, teaching philosophy and learning environment at our Paschim Puri, Delhi coaching centre.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="An institute built around the student, not the syllabus alone"
        description="A neighbourhood coaching centre in Paschim Puri with a simple promise — honest teaching, small batches and regular feedback to parents."
      />

      <section className="bg-white">
        <Container className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-14 lg:py-16">
          <Reveal>
            <SectionHeading
              eyebrow="Who We Are"
              title="A focused classroom, not a crowded hall"
              description="Vidya Academy started with one belief — that most students don't need more hours of teaching, they need better teaching. Clear concepts, disciplined practice and teachers who notice when a child is stuck."
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-600">
              <p>
                Our batches are deliberately small. Every teacher maintains a
                progress sheet for every student — test scores, weak chapters
                and doubt-clearing attendance — reviewed with parents every month.
              </p>
              <p>
                We teach Classes 6–12 across CBSE, ICSE and state patterns, with
                dedicated tracks for JEE, NEET and spoken English.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-sm border border-line">
              <Image
                src={siteConfig.images.aboutBuilding}
                alt="Bright classroom at an Indian coaching institute"
                width={1000}
                height={750}
                sizes="(max-width: 1024px) 100vw, 560px"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-line bg-paper">
        <Container className="grid gap-5 py-12 md:grid-cols-3 lg:py-16">
          {[
            { t: "Our Mission", d: "Make quality coaching accessible in West Delhi — so no student travels hours for good teaching." },
            { t: "Our Vision", d: "A centre where every child, regardless of starting level, can build the confidence to aim higher." },
            { t: "Our Philosophy", d: "Understand first, then practise. Test honestly, then improve personally. Repeat for every chapter." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.06}>
              <div className="h-full rounded-sm border border-line bg-white p-6">
                <span aria-hidden="true" className="block h-1 w-10 bg-gold-500" />
                <h2 className="mt-4 text-lg font-bold text-navy-950">{c.t}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="bg-white">
        <Container className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-14 lg:py-16">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-sm border border-line">
              <Image
                src={siteConfig.images.studyGroup}
                alt="Students studying together with guidance from a teacher"
                width={1000}
                height={750}
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 560px"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Why Parents Choose Us"
              title="Discipline you can see, progress you can measure"
            />
            <ul className="mt-6 space-y-4">
              {benefits.slice(0, 4).map((b) => (
                <li key={b.title} className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-navy-900 text-gold-400">
                    <b.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-bold text-navy-950">{b.title}</h3>
                    <p className="text-sm text-slate-600">{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section aria-label="Institute statistics" className="border-t border-line bg-navy-950">
        <Container className="py-12 lg:py-14">
          <dl className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label}>
                <dd className="text-3xl font-extrabold text-white">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-navy-100">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <div className="bg-paper pt-12 lg:pt-16">
        <CTA />
      </div>
    </>
  );
}
