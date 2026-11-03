"use client";

import { useReducedMotion } from "motion/react";

const rings = [
  { rx: 53, ry: 36, gold: false },
  { rx: 91, ry: 63, gold: true },
  { rx: 133, ry: 93, gold: false },
  { rx: 178, ry: 125, gold: true },
  { rx: 226, ry: 160, gold: false },
  { rx: 279, ry: 198, gold: true },
  { rx: 335, ry: 239, gold: false },
];

export function RippleHero() {
  const reduceMotion = useReducedMotion();

  return (
    <figure className="relative mx-auto w-full max-w-md bg-media-frame p-3 shadow-soft ring-1 ring-border-subtle sm:max-w-lg sm:p-3.5 md:mx-0 md:max-w-none lg:p-4">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#f4f1eb] md:aspect-[3/4] lg:min-h-[28rem] xl:min-h-[32rem]">
        <svg
          viewBox="0 0 480 620"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-labelledby="paychex-ripple-title paychex-ripple-desc"
        >
          <title id="paychex-ripple-title">Impact in motion</title>
          <desc id="paychex-ripple-desc">A yellow focal point surrounded by precise, softly layered concentric rings, representing the lasting reach of purposeful execution.</desc>
          <defs>
            <radialGradient id="px-ripple-bg" cx="50%" cy="51%" r="78%">
              <stop offset="0%" stopColor="#e2dbcf" />
              <stop offset="62%" stopColor="#f1ede6" />
              <stop offset="100%" stopColor="#f8f6f2" />
            </radialGradient>
            <radialGradient id="px-ripple-centre" cx="32%" cy="24%" r="82%">
              <stop offset="0%" stopColor="#ffe57d" />
              <stop offset="100%" stopColor="#e8ba21" />
            </radialGradient>
            <filter id="px-ripple-shadow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="10" />
            </filter>
          </defs>
          <rect width="480" height="620" fill="url(#px-ripple-bg)" />
          <g transform="translate(240 315)">
            {rings.map((ring, i) => (
              <ellipse
                key={i}
                rx={ring.rx}
                ry={ring.ry}
                fill="none"
                stroke={ring.gold ? "#d9b640" : "#b9b2a8"}
                strokeWidth={ring.gold ? 1.25 : 1.5}
                opacity={ring.gold ? 0.8 : 0.48}
                className={reduceMotion ? undefined : "px-ripple-ring"}
                style={reduceMotion ? undefined : { animationDelay: `${-i * 0.72}s` }}
              />
            ))}
            <ellipse cy="12" rx="40" ry="15" fill="#9a7a16" opacity="0.18" filter="url(#px-ripple-shadow)" />
            <ellipse rx="31" ry="22" fill="url(#px-ripple-centre)" stroke="#e5b311" strokeWidth="1.5" />
            <ellipse cy="-7" rx="21" ry="8" fill="#fff5c7" opacity="0.32" />
          </g>
        </svg>
        <style>{`@keyframes px-ripple-breathe { 0%, 100% { transform: scale(1); opacity: .78; } 50% { transform: scale(1.025); opacity: 1; } } .px-ripple-ring { transform-box: fill-box; transform-origin: center; animation: px-ripple-breathe 8s ease-in-out infinite; } @media (prefers-reduced-motion: reduce) { .px-ripple-ring { animation: none; } }`}</style>
      </div>
      <figcaption className="sr-only">An abstract ripple representing purposeful, lasting impact.</figcaption>
    </figure>
  );
}
