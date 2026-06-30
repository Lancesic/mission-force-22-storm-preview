import type { ReactNode } from "react";

type SectionShellProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
};

export function SectionShell({ eyebrow, title, children }: SectionShellProps) {
  return (
    <section
      className="mx-auto flex min-h-[100svh] w-full max-w-5xl scroll-mt-4 flex-col justify-center px-4 pb-32 pt-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-3xl">
        {eyebrow ? (
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-coral">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-black leading-tight text-deep sm:text-5xl">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
