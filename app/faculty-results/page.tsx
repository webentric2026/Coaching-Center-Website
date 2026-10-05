import type { Metadata } from "next";
import { faculty, resultHighlights, achievements, testimonials } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FacultyCard } from "@/components/home/FacultyPreview";
import { MobileSlider } from "@/components/ui/MobileSlider";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/components/home/ResultsCTA";
import { Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Faculty & Results",
  description:
    "Meet our experienced faculty and see student results — board distinctions, JEE/NEET selections and success stories.",
};

export default function FacultyResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Faculty & Results"
        title="Teachers who stay. Results that speak."
        description="Career educators for every subject — and a track record built one batch at a time."
      />

      <section className="bg-white">
        <Container className="py-12 lg:py-16">
          <SectionHeading
            eyebrow="Faculty"
            title="Your child's mentors"
          />
          <Reveal className="mt-8">
            <MobileSlider ariaLabel="All faculty members">
              {faculty.map((m) => (
                <FacultyCard key={m.name} member={m} />
              ))}
            </MobileSlider>
          </Reveal>
        </Container>
      </section>

      <section aria-label="Result statistics" className="border-y border-line bg-navy-950">
        <Container className="py-12 lg:py-14">
          <dl className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {resultHighlights.map((r) => (
              <div key={r.label} className="border-l-2 border-gold-500 pl-4 text-left sm:text-center sm:border-l-0 sm:pl-0">
                <dd className="text-3xl font-extrabold text-white">
                  <AnimatedCounter value={r.value} suffix={r.suffix} />
                </dd>
                <dt className="mt-1 text-[13px] font-medium text-navy-100">{r.label}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-12 lg:py-16">
          <SectionHeading
            eyebrow="Achievements"
            title="What consistent teaching produces"
          />
          <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="h-full bg-white p-6">
                  <Award className="h-6 w-6 text-gold-600" aria-hidden="true" />
                  <h3 className="mt-3 text-[15px] font-bold text-navy-950">{a.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="pb-12 lg:pb-16">
          <SectionHeading
            eyebrow="Success Stories"
            title="Students who stayed consistent"
          />
          <ul className="mt-8 space-y-4">
            {testimonials.slice(0, 3).map((t) => (
              <li key={t.name + t.meta} className="rounded-sm border border-line bg-paper p-5 sm:p-6">
                <p className="text-[15px] leading-relaxed text-slate-700">“{t.quote}”</p>
                <p className="mt-3 text-sm font-bold text-navy-950">
                  {t.name} <span className="font-medium text-slate-500">· {t.meta}</span>
                  {t.result && <span className="ml-2 bg-gold-100 px-2 py-0.5 text-[12px]">{t.result}</span>}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <div className="bg-paper pt-2">
        <CTA />
      </div>
    </>
  );
}
