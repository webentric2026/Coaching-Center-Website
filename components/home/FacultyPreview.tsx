import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { faculty } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MobileSlider } from "@/components/ui/MobileSlider";
import { Reveal } from "@/components/ui/Reveal";

export function FacultyCard({ member }: { member: (typeof faculty)[number] }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-line bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(10,22,51,0.08)]">
      <div className="relative overflow-hidden">
        <Image
          src={member.image}
          alt={`Portrait of ${member.name}, ${member.subject} faculty`}
          width={600}
          height={700}
          loading="lazy"
          sizes="(max-width: 768px) 75vw, 280px"
          className="aspect-[5/5.4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <p className="absolute bottom-0 left-0 bg-navy-900 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-gold-400">
          {member.experience}
        </p>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[16px] font-bold text-navy-950">{member.name}</h3>
        <p className="mt-0.5 text-[13px] font-semibold text-navy-700">
          {member.subject} · {member.qualification}
        </p>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{member.text}</p>
      </div>
    </article>
  );
}

export function FacultyPreview() {
  return (
    <section aria-labelledby="faculty-heading" className="border-y border-line bg-paper">
      <Container className="py-14 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Our Faculty"
            title={<span id="faculty-heading">Learn from career teachers</span>}
            description="Subject specialists who teach the same classes year after year — and know the CBSE, JEE and NEET patterns inside out."
          />
          <Link
            href="/faculty-results"
            className="hidden items-center gap-1.5 text-[13px] font-bold uppercase tracking-wide text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-4 md:inline-flex"
          >
            Meet all faculty <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <Reveal className="mt-8">
          <MobileSlider ariaLabel="Faculty members">
            {faculty.map((m) => (
              <FacultyCard key={m.name} member={m} />
            ))}
          </MobileSlider>
        </Reveal>
      </Container>
    </section>
  );
}
