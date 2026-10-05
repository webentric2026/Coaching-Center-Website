import type { Metadata } from "next";
import { courses, courseCategories } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { CourseCard } from "@/components/courses/CourseCard";
import { MobileSlider } from "@/components/ui/MobileSlider";
import { CTA } from "@/components/home/ResultsCTA";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore foundation, CBSE board, JEE, NEET and spoken English courses at our Paschim Puri coaching centre. Batches for Classes 6–12.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Courses"
        title="Programmes for Classes 6–12, boards and beyond"
        description="Confirm batch timings and availability on a free counselling call."
      />
      {courseCategories.map((cat) => {
        const list = courses.filter((c) => c.category === cat);
        if (list.length === 0) return null;
        return (
          <section key={cat} aria-label={cat} className="border-b border-line bg-white last:border-0 odd:bg-paper">
            <Container className="py-10 lg:py-14">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-6 w-1 bg-gold-500" />
                <h2 className="text-xl font-bold text-navy-950 sm:text-2xl">{cat}</h2>
              </div>
              <div className="mt-6">
                <MobileSlider ariaLabel={`${cat} courses`}>
                  {list.map((c) => (
                    <CourseCard key={c.slug} course={c} />
                  ))}
                </MobileSlider>
              </div>
            </Container>
          </section>
        );
      })}
      <div className="bg-paper pt-12 lg:pt-16">
        <CTA />
      </div>
    </>
  );
}
