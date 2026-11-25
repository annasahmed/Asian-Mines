"use client";

import { useState } from "react";

const copy = {
  china:
    "China is the main destination. Buyers there are usually feeding ferrochrome and stainless steel. They contract on chemistry and on size.",
  europe:
    "Europe takes the same Muslim Bagh ore. The specification is written the same way. The voyage and the papers are what change.",
  oman:
    "Oman is the shorter voyage, across the Arabian Sea. The specification is written the same way. Only the discharge changes.",
} as const;

export function RouteMap() {
  const [active, setActive] = useState<keyof typeof copy>("china");

  return (
    <div className="route">
      <div className="route-stage">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M 16 58 Q 48 8 76 22"
            className={active === "china" ? "route-line is-active" : "route-line"}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 16 58 Q 20 16 36 16"
            className={active === "europe" ? "route-line is-active" : "route-line"}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 16 58 Q 36 90 62 76"
            className={active === "oman" ? "route-line is-active" : "route-line"}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <p className="route-sea">Arabian Sea</p>
        <div className="route-node is-origin" style={{ left: "16%", top: "58%" }}>
          <span>Origin</span>
          Pakistan
        </div>
        <button
          type="button"
          className="route-node"
          style={{ left: "36%", top: "16%" }}
          aria-pressed={active === "europe"}
          onClick={() => setActive("europe")}
        >
          <span>Also</span>
          Europe
        </button>
        <button
          type="button"
          className="route-node"
          style={{ left: "76%", top: "22%" }}
          aria-pressed={active === "china"}
          onClick={() => setActive("china")}
        >
          <span>Primary</span>
          China
        </button>
        <button
          type="button"
          className="route-node"
          style={{ left: "62%", top: "76%" }}
          aria-pressed={active === "oman"}
          onClick={() => setActive("oman")}
        >
          <span>Also</span>
          Oman
        </button>
      </div>
      <p className="route-copy" aria-live="polite">
        {copy[active]}
      </p>
    </div>
  );
}
