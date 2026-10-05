import type { Metadata } from "next";
import { Suspense } from "react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Vidya Academy in Paschim Puri, Delhi — book a free demo, ask about batches and fees, or visit the centre.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book your free demo class"
        description="Call, WhatsApp or send the enquiry form — our counsellor responds within one working day."
      />
      <section className="bg-paper">
        <Container className="grid gap-6 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-14">
          <ContactInfo />
          <Suspense fallback={<div className="rounded-sm border border-line bg-white p-8 text-sm text-slate-500">Loading form…</div>}>
            <ContactForm />
          </Suspense>
        </Container>
      </section>
      <section aria-label="Location map" className="bg-white">
        <Container className="pb-12 lg:pb-16">
          <h2 className="text-xl font-bold text-navy-950">Find us in {siteConfig.contact.addressShort}</h2>
          <div className="mt-5 overflow-hidden rounded-sm border border-line">
            <iframe
              title={`Map showing ${siteConfig.contact.addressShort}`}
              src={siteConfig.contact.mapEmbedSrc}
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block h-[320px] w-full border-0 lg:h-[380px]"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
