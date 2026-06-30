import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GalleryItem = {
  src: string;
  title: string;
  caption: string;
};

type LookInsideGalleryProps = {
  items: GalleryItem[];
};

export function LookInsideGallery({ items }: LookInsideGalleryProps) {
  const [active, setActive] = useState(0);
  const item = items[active];
  const go = (direction: number) => {
    setActive((current) => (current + direction + items.length) % items.length);
  };

  return (
    <div className="rounded-[1.6rem] bg-white/80 p-3 shadow-soft sm:p-4">
      <figure className="overflow-hidden rounded-[1.35rem] bg-white">
        <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#173343,#23576a)] p-3 sm:aspect-[16/10]">
          <img
            src={item.src}
            alt={item.title}
            className="max-h-full max-w-full rounded-xl object-contain shadow-[0_14px_30px_rgba(0,0,0,0.24)]"
            loading="lazy"
          />
          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/92 text-deep shadow-soft"
            aria-label="Previous preview"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/92 text-deep shadow-soft"
            aria-label="Next preview"
          >
            <ChevronRight size={22} />
          </button>
        </div>
        <figcaption className="p-4">
          <p className="text-lg font-black text-deep">{item.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-deep/70">{item.caption}</p>
        </figcaption>
      </figure>

      <div className="mt-3 flex gap-2 overflow-x-auto pb-1 no-scrollbar" aria-label="Preview thumbnails">
        {items.map((thumbnail, index) => (
          <button
            key={thumbnail.src}
            type="button"
            onClick={() => setActive(index)}
            className={`h-20 min-w-20 overflow-hidden rounded-2xl border-2 bg-deep transition sm:h-24 sm:min-w-28 ${
              active === index ? "border-sunlight" : "border-white/70 opacity-70"
            }`}
            aria-label={`Show ${thumbnail.title}`}
            aria-current={active === index}
          >
            <img src={thumbnail.src} alt="" className="h-full w-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>
      <div className="mt-3 flex justify-center gap-1.5">
        {items.map((dot, index) => (
          <button
            key={dot.src}
            type="button"
            onClick={() => setActive(index)}
            className={`h-2 rounded-full transition-all ${
              active === index ? "w-7 bg-coral" : "w-2 bg-deep/20"
            }`}
            aria-label={`Go to ${dot.title}`}
          />
        ))}
      </div>
    </div>
  );
}
