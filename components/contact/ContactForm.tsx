"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";
import { courses } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

const inputCls =
  "h-11 w-full rounded-sm border border-line bg-white px-3.5 text-sm text-navy-950 placeholder:text-slate-400 focus:border-navy-800 focus:outline-none";
const labelCls = "mb-1.5 block text-[13px] font-bold text-navy-950";
const errCls = "mt-1 text-[12.5px] text-red-700";

export function ContactForm() {
  const params = useSearchParams();
  const preselected = params.get("course") ?? "";
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const v: Record<string, string> = {};
    fd.forEach((val, key) => {
      v[key] = String(val).trim();
    });

    const next: Record<string, string> = {};
    if (!v.studentName) next.studentName = "Please enter the student's name.";
    if (!v.phone || !/^[6-9]\d{9}$/.test(v.phone.replace(/[\s+-]/g, "").slice(-10))) {
      next.phone = "Enter a valid 10-digit mobile number.";
    }
    if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) {
      next.email = "Enter a valid email, or leave it blank.";
    }
    if (!v.class) next.class = "Please select a class.";
    if (!v.course) next.course = "Please choose a course.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    (e.target as HTMLFormElement).reset();
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-sm border border-line bg-white px-6 py-12 text-center" role="status">
        <CheckCircle2 className="h-12 w-12 text-green-700" aria-hidden="true" />
        <h2 className="mt-4 text-xl font-bold text-navy-950">Enquiry received</h2>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
          Thank you. Our counsellor will call you within one working day to
          schedule your free demo class.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex h-11 items-center rounded-sm border border-line px-6 text-[13px] font-bold uppercase tracking-wide text-navy-900 hover:border-navy-900"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-sm border border-line bg-white p-6 sm:p-7" aria-label="Enquiry form">
      <h2 className="text-lg font-bold text-navy-950">Request a Free Demo / Counselling</h2>
      <p className="mt-1 text-sm text-slate-600">Fill this in — we call back within one working day.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="studentName" className={labelCls}>
            Student Name *
          </label>
          <input id="studentName" name="studentName" autoComplete="name" placeholder="e.g. Aarav Mehta" className={inputCls} aria-invalid={!!errors.studentName} aria-describedby={errors.studentName ? "err-studentName" : undefined} />
          {errors.studentName && <p id="err-studentName" role="alert" className={errCls}>{errors.studentName}</p>}
        </div>
        <div>
          <label htmlFor="parentName" className={labelCls}>
            Parent / Guardian Name
          </label>
          <input id="parentName" name="parentName" autoComplete="off" placeholder="e.g. Ritu Mehta" className={inputCls} />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone Number *
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="numeric" placeholder="10-digit mobile" className={inputCls} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "err-phone" : undefined} />
          {errors.phone && <p id="err-phone" role="alert" className={errCls}>{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className={inputCls} aria-invalid={!!errors.email} aria-describedby={errors.email ? "err-email" : undefined} />
          {errors.email && <p id="err-email" role="alert" className={errCls}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="class" className={labelCls}>
            Class *
          </label>
          <select id="class" name="class" defaultValue="" className={inputCls} aria-invalid={!!errors.class} aria-describedby={errors.class ? "err-class" : undefined}>
            <option value="" disabled>Select class</option>
            {["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "Dropper / Repeater"].map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.class && <p id="err-class" role="alert" className={errCls}>{errors.class}</p>}
        </div>
        <div>
          <label htmlFor="course" className={labelCls}>
            Course Interested In *
          </label>
          <select id="course" name="course" defaultValue={preselected} className={inputCls} aria-invalid={!!errors.course} aria-describedby={errors.course ? "err-course" : undefined}>
            <option value="" disabled>Select course</option>
            {courses.map((c) => (
              <option key={c.slug} value={c.name}>{c.name}</option>
            ))}
          </select>
          {errors.course && <p id="err-course" role="alert" className={errCls}>{errors.course}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>
            Message
          </label>
          <textarea id="message" name="message" rows={4} placeholder="Tell us about goals, school, preferred timing…" className="w-full rounded-sm border border-line bg-white px-3.5 py-3 text-sm text-navy-950 placeholder:text-slate-400 focus:border-navy-800 focus:outline-none" />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 text-sm text-red-700">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-navy-900 px-7 text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-navy-800 disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {status === "sending" ? "Submitting…" : "Submit Enquiry"}
      </button>
      <p className="mt-3 text-[12px] text-slate-400">
        By submitting, you agree to be contacted about admissions.
      </p>
    </form>
  );
}
