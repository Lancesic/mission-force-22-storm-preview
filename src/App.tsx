import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowDown, BookOpen, Compass, ExternalLink, FileText, Sparkles } from "lucide-react";
import { ContactCTA } from "./components/ContactCTA";
import { KitCard } from "./components/KitCard";
import { LookInsideGallery } from "./components/LookInsideGallery";
import { ProgressNav } from "./components/ProgressNav";
import { SectionShell } from "./components/SectionShell";
import { StormDemo } from "./components/StormDemo";
import { StoryEchoFlow } from "./components/StoryEchoFlow";
import { VideoPreview } from "./components/VideoPreview";
import {
  helpCards,
  hero,
  kitCards,
  kitGallery,
  missionGallery,
  overviewCards,
  resourceLinks,
} from "./data/presentation";

const sectionIds = [
  "welcome",
  "overview",
  "vision",
  "featured",
  "look-inside",
  "video-preview",
  "echo-system",
  "demo",
  "why",
  "contact",
];

function App() {
  const [active, setActive] = useState(0);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);

  const jumpTo = (index: number) => {
    const next = Math.max(0, Math.min(sectionIds.length - 1, index));
    sectionRefs.current[next]?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(next);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActive(sectionIds.indexOf(visible.target.id));
        }
      },
      { threshold: [0.42, 0.64] }
    );

    sectionRefs.current.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!window.location.hash) {
      return;
    }

    const hashTarget = window.location.hash.slice(1);
    const index = sectionIds.indexOf(hashTarget);
    if (index === -1) {
      return;
    }

    window.setTimeout(() => {
      sectionRefs.current[index]?.scrollIntoView({ behavior: "auto", block: "start" });
      setActive(index);
    }, 50);
  }, []);

  const overview = useMemo(
    () =>
      overviewCards.map((card) => {
        const Icon = card.icon;
        return (
          <article key={card.title} className="rounded-[1.25rem] bg-white/90 p-5 shadow-soft">
            <Icon className="text-coral" size={28} />
            <h3 className="mt-4 text-xl font-black text-deep">{card.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-deep/70">{card.text}</p>
          </article>
        );
      }),
    []
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#fff7e7_0%,#d8eff0_42%,#fff7e7_100%)] pb-24 text-deep">
      <section
        id="welcome"
        ref={(node) => {
          sectionRefs.current[0] = node;
        }}
        className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-center overflow-hidden px-4 pb-32 pt-5 sm:px-6 sm:py-10 lg:px-8"
      >
        <div className="absolute inset-x-4 top-5 z-10 flex items-center justify-between text-white sm:text-deep/70">
          <span className="rounded-full bg-deep/80 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-white shadow-soft backdrop-blur">
            Mission Force 22
          </span>
          <Compass className="drop-shadow" />
        </div>
        <div className="relative mx-auto grid w-full max-w-3xl gap-5 pt-12">
          <div className="relative min-h-[350px] overflow-hidden rounded-[1.75rem] bg-deep shadow-soft sm:min-h-[520px]">
            <img
              src="/images/reference/mf22-launch-room.webp"
              alt="Mission Force 22 mission room with kids ministry resources"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,29,41,0.14)_0%,rgba(12,29,41,0.08)_38%,rgba(12,29,41,0.82)_100%)]" />
            <img
              src="/images/reference/mf22-logo.webp"
              alt="Mission Force 22"
              className="absolute left-4 top-5 w-32 drop-shadow-2xl sm:w-44"
            />
            <img
              src="/images/reference/mf22-mission-case.webp"
              alt="Mission Force 22 resource briefcase"
              className="absolute bottom-20 right-[-22px] w-[78%] max-w-md drop-shadow-2xl sm:right-5 sm:w-[58%]"
            />
            <div className="absolute bottom-5 left-4 right-4 rounded-[1.35rem] border border-white/20 bg-deep/80 p-4 shadow-soft backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">
                Ministry resource preview
              </p>
              <p className="mt-1 text-lg font-black leading-tight text-white">
                Book, characters, comic-story world, and ready-to-use ministry resources.
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-coral">
              Ministry resource preview
            </p>
            <h1 className="mt-3 text-3xl font-black leading-tight sm:text-6xl">{hero.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-deep/72">{hero.subtitle}</p>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {[
                ["Book", BookOpen],
                ["Characters", Sparkles],
                ["Kits", Compass],
              ].map(([label, Icon]) => {
                const Glyph = Icon as typeof BookOpen;
                return (
                  <div
                    key={label as string}
                    className="flex min-h-16 flex-col items-center justify-center rounded-2xl bg-white/88 p-2 text-center shadow-soft"
                  >
                    <Glyph className="text-coral" size={20} />
                    <span className="mt-1 text-xs font-black uppercase tracking-[0.1em] text-deep">
                      {label as string}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="mt-7 grid gap-3">
              <button
                type="button"
                onClick={() => jumpTo(1)}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-deep px-6 text-base font-black text-white shadow-soft"
              >
                Start the 2-minute walkthrough
                <ArrowDown size={20} />
              </button>
              <button
                type="button"
                onClick={() => jumpTo(9)}
                className="min-h-12 text-sm font-black text-harbor underline decoration-coral decoration-2 underline-offset-4"
              >
                Skip to contact
              </button>
            </div>
          </div>
        </div>
      </section>

      <div ref={(node) => { sectionRefs.current[1] = node; }} id="overview">
        <SectionShell title="Mission Force 22 turns one Bible story into a complete kids ministry experience.">
          <p className="text-lg leading-relaxed text-deep/75">
            Mission Force 22 is a children's ministry creative system that helps a church take a
            Bible story, sermon theme, or teaching direction and turn it into connected resources
            for kids, leaders, volunteers, and families.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              ["/images/reference/mf22-book-cover.webp", "Book"],
              ["/images/reference/mf22-character-sheet.webp", "Characters"],
              ["/images/reference/mf22-comic-page-1.webp", "Comic"],
              ["/images/reference/mf22-briefcase-explainer.webp", "Resource kit"],
            ].map(([src, label]) => (
              <figure
                key={src}
                className="relative overflow-hidden rounded-[1.1rem] bg-deep shadow-soft"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={src}
                    alt={`Mission Force 22 ${label}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-deep/78 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white backdrop-blur">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">{overview}</div>
          <p className="mt-6 rounded-2xl bg-deep px-5 py-4 text-lg font-bold leading-snug text-white">
            The goal is not more random activities. The goal is one story echoing through the
            whole experience.
          </p>
        </SectionShell>
      </div>

      <div ref={(node) => { sectionRefs.current[2] = node; }} id="vision">
        <SectionShell eyebrow="Look inside" title="A bigger vision for connected kids ministry resources.">
          <LookInsideGallery items={missionGallery} />
        </SectionShell>
      </div>

      <div ref={(node) => { sectionRefs.current[3] = node; }} id="featured">
        <SectionShell eyebrow="Ministry kit" title="Jesus Calms the Storm">
          <p className="text-lg leading-relaxed text-deep/75">
            This kit is built around Mark 4:35-41 and the truth: Jesus is with me in the storm.
            It is designed as a connected teaching experience kids can hear, say, act, make, pray,
            and take home.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {kitCards.map((card) => (
              <KitCard key={card.title} title={card.title} text={card.text} image={card.image} />
            ))}
          </div>
        </SectionShell>
      </div>

      <div ref={(node) => { sectionRefs.current[4] = node; }} id="look-inside">
        <SectionShell eyebrow="Kit preview" title="Look inside the ministry kit.">
          <LookInsideGallery items={kitGallery} />
        </SectionShell>
      </div>

      <div ref={(node) => { sectionRefs.current[5] = node; }} id="video-preview">
        <SectionShell eyebrow="Video preview" title="See the storm story in motion.">
          <VideoPreview />
        </SectionShell>
      </div>

      <div ref={(node) => { sectionRefs.current[6] = node; }} id="echo-system">
        <SectionShell eyebrow="The Story Echo System" title="One story. Many echoes.">
          <p className="mb-6 text-lg leading-relaxed text-deep/75">
            The kit is built so kids encounter the same truth in multiple ways, with every piece
            reinforcing the same Bible story instead of scattering attention.
          </p>
          <StoryEchoFlow />
        </SectionShell>
      </div>

      <div ref={(node) => { sectionRefs.current[7] = node; }} id="demo">
        <SectionShell eyebrow="Mini demo moment" title="Try one piece of the kit.">
          <StormDemo />
        </SectionShell>
      </div>

      <div ref={(node) => { sectionRefs.current[8] = node; }} id="why">
        <SectionShell title="Why this helps a kids ministry team.">
          <div className="grid gap-4 sm:grid-cols-2">
            {helpCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="rounded-[1.25rem] bg-white/90 p-5 shadow-soft">
                  <Icon className="text-coral" size={28} />
                  <h3 className="mt-4 text-xl font-black text-deep">{card.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-deep/70">{card.text}</p>
                </article>
              );
            })}
          </div>
        </SectionShell>
      </div>

      <div ref={(node) => { sectionRefs.current[9] = node; }} id="contact">
        <SectionShell title="Take a look at the full resource.">
          <p className="text-lg leading-relaxed text-deep/75">
            Take a look at the full resource and contact me if you wish. I would be grateful to
            hear your thoughts and see if it could serve your kids ministry team.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <a
              href={resourceLinks.slideShow}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-deep px-5 text-center text-base font-black text-white shadow-soft transition hover:-translate-y-0.5"
            >
              Open Jesus Calms the Storm Slideshow
              <ExternalLink size={19} />
            </a>
            <a
              href={resourceLinks.bookSample}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-5 text-center text-base font-black text-deep shadow-soft transition hover:-translate-y-0.5"
            >
              View Mission Force 22 Book Sample
              <BookOpen size={19} />
            </a>
            <a
              href={resourceLinks.stormKitPdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-paper px-5 text-center text-base font-black text-deep shadow-soft transition hover:-translate-y-0.5 sm:col-span-2"
            >
              Open Jesus Calms the Storm Ministry Kit
              <FileText size={19} />
            </a>
          </div>
          <div className="mt-7">
            <ContactCTA />
          </div>
          <blockquote className="mt-10 border-l-4 border-sunlight pl-5 text-lg font-bold leading-relaxed text-deep/78">
            <p>
              And the Lord answered me: "Write the vision; make it plain on tablets, so he may
              run who reads it."
            </p>
            <footer className="mt-3 text-sm font-black uppercase tracking-[0.16em] text-coral">
              Habakkuk 2:2 ESV
            </footer>
          </blockquote>
        </SectionShell>
      </div>

      {active > 0 ? (
        <button
          type="button"
          onClick={() => jumpTo(9)}
          className="fixed right-4 top-4 z-40 rounded-full bg-sunlight px-4 py-3 text-sm font-black text-deep shadow-soft"
        >
          Contact Me
        </button>
      ) : null}
      <ProgressNav
        active={active}
        total={sectionIds.length}
        onBack={() => jumpTo(active - 1)}
        onNext={() => jumpTo(active === sectionIds.length - 1 ? 0 : active + 1)}
        onJump={jumpTo}
      />
    </main>
  );
}

export default App;
