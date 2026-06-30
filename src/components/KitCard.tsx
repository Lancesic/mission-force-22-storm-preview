import { useEffect, useState } from "react";
import { Maximize2, X } from "lucide-react";

type KitCardProps = {
  title: string;
  text: string;
  image: string;
};

export function KitCard({ title, text, image }: KitCardProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="overflow-hidden rounded-[1.25rem] border border-white/70 bg-white/92 text-left shadow-soft transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-sunlight/50"
        aria-label={`View full image for ${title}`}
      >
        <span className="block aspect-[5/3] overflow-hidden bg-deep">
          <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
        </span>
        <span className="block p-4">
          <span className="flex items-start justify-between gap-2">
            <span className="text-base font-black text-deep">{title}</span>
            <Maximize2 size={19} className="mt-0.5 shrink-0 text-coral" />
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-deep/72 line-clamp-2">
            {text}
          </span>
          <span className="mt-3 inline-flex rounded-full bg-paper px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-coral">
            View piece
          </span>
        </span>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-deep/88 p-4 backdrop-blur"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} full image preview`}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative flex max-h-[92svh] w-full max-w-5xl flex-col overflow-hidden rounded-[1.35rem] bg-white shadow-soft"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-deep/10 px-4 py-3">
              <div className="min-w-0">
                <p className="truncate text-lg font-black text-deep">{title}</p>
                <p className="text-sm font-bold text-deep/62">Full resource snapshot</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper text-deep"
                aria-label="Close image preview"
              >
                <X size={22} />
              </button>
            </div>
            <div className="flex min-h-0 flex-1 items-center justify-center bg-[#f7fbfa] p-3">
              <img
                src={image}
                alt={title}
                className="max-h-[76svh] w-full object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
