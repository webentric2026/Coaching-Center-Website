import Image from "next/image";
import { ArrowRight, BadgeCheck, Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section aria-label="Introduction" className="bg-white">
      <Container className="grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-[72px]">
        <div>
          <h1 className="text-[32px] font-extrabold leading-[1.12] tracking-tight text-navy-950 sm:text-[42px] lg:text-[48px]">
            Build Strong Foundations.
            <span className="block">
              Achieve <span className="relative inline-block">Bigger Goals.
                <span aria-hidden="true" className="absolute inset-x-0 -bottom-1 h-1 bg-gold-500/70" />
              </span>
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-slate-600 sm:text-base">
            Focused classroom learning, experienced faculty and personal
            guidance for Classes 6–12, CBSE boards, JEE and NEET — so students
            perform with confidence.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/courses" size="lg" className="w-full sm:w-auto">
              Explore Courses
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="/contact" size="lg" variant="secondary" className="w-full sm:w-auto">
              Book Free Demo
            </Button>
          </div>

          <dl className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-5 text-sm">
            <div className="flex items-center gap-2">
              <span className="flex" aria-label="Rated 4.8 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold-500 text-gold-500" aria-hidden="true" />
                ))}
              </span>
              <dt className="sr-only">Rating</dt>
              <dd className="font-semibold text-navy-950">4.8/5 parent rating</dd>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <BadgeCheck className="h-4 w-4 text-navy-700" aria-hidden="true" />
              <span>Trusted by students &amp; parents in West Delhi</span>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="grid grid-cols-[1.2fr_0.8fr] gap-3 sm:gap-4">
            <div className="relative overflow-hidden rounded-sm border border-line">
              <Image
                src={siteConfig.images.heroMain}
                alt="Students attentively learning in an Indian coaching classroom in Delhi"
                width={800}
                height={1000}
                priority
                sizes="(max-width: 1024px) 60vw, 560px"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="relative overflow-hidden rounded-sm border border-line">
                <Image
                  src={siteConfig.images.heroSecondary}
                  alt="Teacher guiding school students during a coaching class"
                  width={600}
                  height={500}
                  sizes="(max-width: 1024px) 35vw, 320px"
                  className="aspect-[4/3.4] w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center rounded-sm bg-navy-900 p-5 text-white">
                <p className="text-3xl font-extrabold leading-none">
                  20<span className="text-gold-400">+</span>
                </p>
                <p className="mt-1.5 text-[13px] font-medium leading-snug text-navy-100">
                  Expert faculty for every subject
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
