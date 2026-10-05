import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-line bg-navy-950 text-white">
      <Container className="py-12 lg:py-16">
        <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-gold-400">
          <span aria-hidden="true" className="inline-block h-px w-8 bg-gold-500" />
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-navy-100">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
