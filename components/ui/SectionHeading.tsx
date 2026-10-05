import { cn } from "@/lib/utils";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-gold-600">
      <span aria-hidden="true" className="inline-block h-px w-8 bg-gold-500" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <div className={cn(align === "center" && "flex justify-center")}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2
        className={cn(
          "mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-[34px]",
          dark ? "text-white" : "text-navy-950"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-3 text-[15px] leading-relaxed",
            dark ? "text-navy-100" : "text-slate-600"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
