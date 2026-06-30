import { contactActions } from "../data/presentation";

type ContactCTAProps = {
  compact?: boolean;
};

export function ContactCTA({ compact = false }: ContactCTAProps) {
  const actions = compact ? contactActions.slice(0, 3) : contactActions.slice(0, 3);

  return (
    <div className="grid gap-3">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <a
            key={action.label}
            href={action.href}
            target={action.external ? "_blank" : undefined}
            rel={action.external ? "noreferrer" : undefined}
            className={`inline-flex min-h-16 items-center justify-start gap-3 rounded-[1.2rem] px-5 py-3 text-left shadow-soft transition hover:-translate-y-0.5 ${
              action.primary ? "bg-deep text-white" : "bg-white text-deep"
            }`}
          >
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                action.primary ? "bg-white/12" : "bg-sunlight/55"
              }`}
            >
              <Icon size={21} />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-black uppercase tracking-[0.12em]">
                {action.label}
              </span>
              <span className="block break-words text-base font-black leading-tight">
                {action.detail}
              </span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
