import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { courses } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MobileSlider } from "@/components/ui/MobileSlider";
import { Reveal } from "@/components/ui/Reveal";

function Card({ course }: { course: (typeof courses)[number] }) {
  const Icon = course.icon;
  return (
    <article className="group flex h-full flex-col rounded-sm border border-line bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-navy-900/30 hover:shadow-[0_8px_24px_rgba(10,22,51,0.08)]">
      <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-navy-50 text-navy-800 transition-colors group-hover:bg-navy-900 group-hover:text-gold-400">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-gold-600">
        {course.category}
      </p>
      <h3 className="mt-1 text-[16px] font-bold leading-snug text-navy-950">
        {course.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
        {course.description}
      </p>
      <p className="mt-3 border-t border-line pt-3 text-[13px] font-semibold text-navy-800">
        {course.target}
      </p>
      <Link
        href={`/courses#${course.slug}`}
        className="mt-3 inline-flex items-center gap-1 text-[13px] font-bold uppercase tracking-wide text-navy-800 hover:text-navy-950"
        aria-label={`Learn more about ${course.name}`}
      >
        Learn More
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </Link>
    </article>
  );
}

export function CoursesPreview() {
  const preview = courses.slice(0, 8);
  return (
    <section aria-labelledby="courses-heading" className="bg-white">
      <Container className="py-14 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Our Courses"
            title={<span id="courses-heading">Coaching for every stage of school</span>}
            description="From foundation years to boards and competitive exams — structured batches with a clear plan for each class."
          />
          <Link
            href="/courses"
            className="hidden items-center gap-1.5 text-[13px] font-bold uppercase tracking-wide text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-4 md:inline-flex"
          >
            View all courses <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <Reveal className="mt-8">
          <MobileSlider ariaLabel="Courses">
            {preview.map((c) => (
              <Card key={c.slug} course={c} />
            ))}
          </MobileSlider>
        </Reveal>
        <div className="mt-6 text-center md:hidden">
          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-wide text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-4"
          >
            View all courses <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
