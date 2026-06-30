import { ChevronLeft, ChevronRight } from "lucide-react";

type ProgressNavProps = {
  active: number;
  total: number;
  onBack: () => void;
  onNext: () => void;
  onJump: (index: number) => void;
};

export function ProgressNav({ active, total, onBack, onNext, onJump }: ProgressNavProps) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-white/60 bg-paper/95 px-4 py-3 shadow-[0_-12px_35px_rgba(23,51,67,0.12)] backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="grid h-12 w-12 place-items-center rounded-full bg-white text-deep shadow-soft disabled:opacity-40"
          disabled={active === 0}
          aria-label="Previous section"
        >
          <ChevronLeft size={22} />
        </button>
        <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5" aria-label="Progress">
          {Array.from({ length: total }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => onJump(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === active ? "w-8 bg-coral" : "w-2.5 bg-deep/20"
              }`}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={onNext}
          className="grid h-12 w-12 place-items-center rounded-full bg-deep text-white shadow-soft"
          aria-label={active === total - 1 ? "Restart walkthrough" : "Next section"}
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </nav>
  );
}
