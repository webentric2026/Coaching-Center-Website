import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { benefits } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-heading" className="border-y border-line bg-paper">
      <Container className="grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-14 lg:py-20">
        <Reveal className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-sm border border-line">
            <Image
              src={siteConfig.images.classroomLarge}
              alt="Indian students studying together in a coaching classroom"
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
            eyebrow="Why Choose Us"
            title={<span id="why-heading">We Don&apos;t Just Teach. We Build Futures.</span>}
            description="A disciplined classroom, honest feedback and teachers who stay with your child through every chapter and every test."
          />
          <ul className="mt-7 space-y-5">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.05}>
                <li className="flex gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-navy-900 text-gold-400">
                    <b.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-bold text-navy-950">{b.title}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{b.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
