"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "done" | "error">("idle");

  return (
    <form
      className="mt-3"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          setState("error");
          return;
        }
        setState("done");
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex">
        <input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setState("idle");
          }}
          aria-invalid={state === "error"}
          aria-describedby={state === "error" ? "newsletter-error" : undefined}
          className="h-10 w-full rounded-sm rounded-r-none border border-white/15 bg-white/5 px-3 text-sm text-white placeholder:text-slate-500 focus:border-gold-500 focus:outline-none"
        />
        <button
          type="submit"
          className="h-10 shrink-0 rounded-sm rounded-l-none bg-gold-500 px-4 text-[13px] font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-gold-400"
        >
          Join
        </button>
      </div>
      {state === "done" && (
        <p role="status" className="mt-2 text-[13px] text-gold-400">
          Thanks — you are on the list.
        </p>
      )}
      {state === "error" && (
        <p role="alert" id="newsletter-error" className="mt-2 text-[13px] text-red-300">
          Please enter a valid email address.
        </p>
      )}
    </form>
  );
}
