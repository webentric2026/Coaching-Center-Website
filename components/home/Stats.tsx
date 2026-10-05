import { heroStats } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  return (
    <section aria-label="Institute at a glance" className="border-y border-line bg-paper">
      <Container className="py-8 lg:py-10">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line bg-line lg:grid-cols-4">
          {heroStats.map((s, i) => (
            <div key={s.label} className="bg-white px-5 py-6 text-center sm:py-7">
              <Reveal delay={i * 0.06}>
                <dd className="text-3xl font-extrabold tracking-tight text-navy-950 sm:text-[34px]">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-1 text-[12.5px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  {s.label}
                </dt>
              </Reveal>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
