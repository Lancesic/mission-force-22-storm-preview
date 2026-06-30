import { useState } from "react";

const storyBeats = [
  {
    label: "Story",
    prompt: "Read the Interactive Sound Story aloud while kids raise their cue cards.",
    image: "/images/reference/interactive-sound-story-1.webp",
    action: "Next: CREAK",
  },
  {
    label: "Creak",
    prompt: "Jesus and His disciples climbed into a boat.",
    image: "/images/reference/interactive-sound-story-2.webp",
    action: "Raise CREAK!",
  },
  {
    label: "Whoosh",
    prompt: "A wild wind came roaring across the lake.",
    image: "/images/reference/interactive-sound-story-3.webp",
    action: "Raise WHOOSH!",
  },
  {
    label: "Splash",
    prompt: "Towering waves crashed over the sides of the boat.",
    image: "/images/reference/interactive-sound-story-4.webp",
    action: "Raise SPLASH!",
  },
  {
    label: "Boom",
    prompt: "The sky grew dark and thunder crashed all around.",
    image: "/images/reference/interactive-sound-story-5.webp",
    action: "Raise BOOM!",
  },
  {
    label: "Help",
    prompt: "The disciples were afraid and called out to Jesus.",
    image: "/images/reference/interactive-sound-story-6.webp",
    action: "Raise HELP!",
  },
  {
    label: "ZZZZ",
    prompt: "Jesus was asleep, resting in the back of the boat.",
    image: "/images/reference/interactive-sound-story-7.webp",
    action: "Start again",
  },
];

export function StormDemo() {
  const [step, setStep] = useState(0);
  const beat = storyBeats[step];
  const finalBeat = step === storyBeats.length - 1;

  const advance = () => {
    setStep((current) => (current === storyBeats.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="w-full min-w-0 overflow-hidden rounded-[1.6rem] bg-deep text-white shadow-soft">
      <div className="grid min-w-0 gap-0 lg:grid-cols-[1.45fr_.55fr]">
        <div
          className={`min-w-0 overflow-hidden transition ${
            finalBeat
              ? "bg-[linear-gradient(180deg,#f6c76a_0%,#8ed2cf_54%,#23576a_100%)]"
              : "bg-[linear-gradient(180deg,#102536_0%,#23576a_54%,#153141_100%)]"
          }`}
        >
          <div className="flex aspect-video w-full min-w-0 items-center justify-center overflow-hidden bg-white/5 p-2 sm:p-3 lg:min-h-[520px]">
            <img
              src={beat.image}
              alt={`Interactive Sound Story slide for ${beat.label}`}
              className="max-h-full max-w-full rounded-[1rem] object-contain shadow-[0_18px_45px_rgba(0,0,0,0.24)] transition duration-500 sm:rounded-[1.2rem]"
            />
          </div>
          <div className="mx-3 mb-3 mt-3 min-w-0 rounded-[1.25rem] bg-white/95 p-3 text-deep shadow-soft sm:mx-4 sm:mb-4 sm:p-4">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">
              {step === 0 ? "Sound story slide 0" : `Story beat ${step}`}
            </p>
            <p className="mt-1 break-words text-base font-black leading-snug sm:text-lg">
              {beat.prompt}
            </p>
          </div>
        </div>

        <div className="min-w-0 bg-deep p-3 sm:p-5">
          <div className="grid min-w-0 grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2">
            {storyBeats.map((storyBeat, index) => (
              <button
                key={storyBeat.label}
                type="button"
                onClick={() => setStep(index)}
                className={`min-h-12 min-w-0 rounded-2xl px-2 py-3 text-center text-xs font-black uppercase tracking-[0.06em] ${
                  index === step ? "bg-sunlight text-deep" : "bg-white/10 text-white/72"
                }`}
              >
                {storyBeat.label}
              </button>
            ))}
          </div>

          <div className="mt-3 min-w-0 rounded-[1.25rem] bg-white p-3 text-deep sm:mt-4 sm:p-4">
            <div className="min-w-0">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-coral">
                Interactive cue
              </p>
              <p className="mt-1 break-words text-xl font-black leading-tight">{beat.action}</p>
            </div>
            <button
              type="button"
              onClick={advance}
              className="mt-3 min-h-12 w-full whitespace-normal break-words rounded-full bg-sunlight px-4 py-2 text-base font-black leading-tight text-deep shadow-soft"
            >
              {beat.action}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
