import { useState } from "react";
import { echoSteps } from "../data/presentation";

export function StoryEchoFlow() {
  const [active, setActive] = useState(0);

  return (
    <div className="rounded-[1.5rem] bg-white/90 p-4 shadow-soft">
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
        {echoSteps.map((step, index) => (
          <button
            key={step.title}
            type="button"
            onClick={() => setActive(index)}
            className={`rounded-2xl px-3 py-4 text-sm font-black transition ${
              active === index ? "bg-deep text-white" : "bg-paper text-deep"
            }`}
          >
            {step.title}
          </button>
        ))}
      </div>
      <div className="mt-4 rounded-2xl bg-water/12 p-4">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-harbor">
          {echoSteps[active].title}
        </p>
        <p className="mt-2 text-lg font-bold leading-snug text-deep">{echoSteps[active].text}</p>
      </div>
    </div>
  );
}
