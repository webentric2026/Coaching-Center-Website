import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Course } from "@/lib/data";

export function CourseCard({ course }: { course: Course }) {
  const Icon = course.icon;
  return (
    <article
      id={course.slug}
      className="group flex h-full scroll-mt-32 flex-col rounded-sm border border-line bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-navy-900/30 hover:shadow-[0_8px_24px_rgba(10,22,51,0.08)]"
    >
      <div className="flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-navy-50 text-navy-800 transition-colors group-hover:bg-navy-900 group-hover:text-gold-400">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="bg-paper px-2 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
          {course.category}
        </span>
      </div>
      <h3 className="mt-4 text-[16px] font-bold leading-snug text-navy-950">
        {course.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{course.description}</p>
      <div className="mt-3 border-t border-line pt-3 text-[13px]">
        <p className="font-semibold text-navy-800">{course.target}</p>
        <p className="mt-1 text-slate-500">Subjects: {course.subjects.join(" · ")}</p>
      </div>
      <Link
        href={`/contact?course=${encodeURIComponent(course.name)}`}
        className="mt-4 inline-flex items-center gap-1 text-[13px] font-bold uppercase tracking-wide text-navy-800 hover:text-navy-950"
        aria-label={`Enquire about ${course.name}`}
      >
        Enquire Now
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
