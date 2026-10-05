import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function ContactInfo() {
  const c = siteConfig.contact;
  return (
    <div className="rounded-sm border border-line bg-white p-6 sm:p-7">
      <h2 className="text-lg font-bold text-navy-950">Visit or reach us</h2>
      <p className="mt-1 text-sm text-slate-600">
        Walk in for counselling, or call — we respond the same day.
      </p>
      <ul className="mt-6 space-y-5 text-sm">
        <li className="flex gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-navy-50 text-navy-800">
            <MapPin className="h-4 w-4" aria-hidden="true" />
          </span>
          <span>
            <strong className="block text-navy-950">Address</strong>
            <span className="text-slate-600">
              {c.addressLines.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </span>
          </span>
        </li>
        <li className="flex gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-navy-50 text-navy-800">
            <Phone className="h-4 w-4" aria-hidden="true" />
          </span>
          <span>
            <strong className="block text-navy-950">Phone</strong>
            <a href={c.phoneHref} className="text-navy-800 underline-offset-2 hover:underline">
              {c.phoneDisplay}
            </a>
          </span>
        </li>
        <li className="flex gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-navy-50 text-navy-800">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
          </span>
          <span>
            <strong className="block text-navy-950">WhatsApp</strong>
            <a href={c.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-navy-800 underline-offset-2 hover:underline">
              Chat on {c.whatsappDisplay}
            </a>
          </span>
        </li>
        <li className="flex gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-navy-50 text-navy-800">
            <Mail className="h-4 w-4" aria-hidden="true" />
          </span>
          <span>
            <strong className="block text-navy-950">Email</strong>
            <a href={`mailto:${c.email}`} className="break-all text-navy-800 underline-offset-2 hover:underline">
              {c.email}
            </a>
          </span>
        </li>
        <li className="flex gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-navy-50 text-navy-800">
            <Clock className="h-4 w-4" aria-hidden="true" />
          </span>
          <span>
            <strong className="block text-navy-950">Opening Hours</strong>
            {c.hours.map((h) => (
              <span key={h.days} className="block text-slate-600">
                {h.days}: {h.time}
              </span>
            ))}
          </span>
        </li>
      </ul>
    </div>
  );
}
