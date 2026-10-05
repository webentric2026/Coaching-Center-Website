import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { CoursesPreview } from "@/components/home/CoursesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TeachingApproach } from "@/components/home/TeachingApproach";
import { FacultyPreview } from "@/components/home/FacultyPreview";
import { ResultsBand, CTA } from "@/components/home/ResultsCTA";
import { Testimonials } from "@/components/home/Testimonials";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Coaching Institute in Paschim Puri, Delhi`,
  description:
    "CBSE, JEE, NEET and foundation coaching in Paschim Puri, Delhi. Small batches, experienced faculty, weekly tests and free demo classes.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <CoursesPreview />
      <WhyChooseUs />
      <TeachingApproach />
      <FacultyPreview />
      <ResultsBand />
      <Testimonials />
      <CTA />
    </>
  );
}
