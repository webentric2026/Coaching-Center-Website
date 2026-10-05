import { approachSteps } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function TeachingApproach() {
  return (
    <section aria-labelledby="approach-heading" className="bg-white">
      <Container className="py-14 lg:py-20">
        <SectionHeading
          align="center"
          eyebrow="Teaching Approach"
          title={<span id="approach-heading">A simple loop that builds toppers</span>}
          description="No shortcuts, no gimmicks. Four steps repeated for every chapter, every subject, every student."
        />
        <ol className="mt-10 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {approachSteps.map((s, i) => (
            <li key={s.no} className="group relative bg-white p-6 transition-colors hover:bg-navy-950 lg:p-7">
              <Reveal delay={i * 0.07}>
                <p className="text-[13px] font-extrabold tracking-[0.2em] text-gold-600 group-hover:text-gold-400">
                  {s.no}
                </p>
                <h3 className="mt-2 text-lg font-bold text-navy-950 group-hover:text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 group-hover:text-navy-100">
                  {s.text}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-4 block h-0.5 w-8 bg-gold-500 transition-all group-hover:w-12"
                />
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
