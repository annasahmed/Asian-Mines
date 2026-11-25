export function Specimen({ variant = 0 }: { variant?: number }) {
  return (
    <svg
      className="specimen"
      viewBox="0 0 320 400"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="20" y="20" width="280" height="360" fill="none" stroke="#d5dee5" />
      {variant === 1 ? <Concentrate /> : null}
      {variant === 2 ? <Fines /> : null}
      {variant === 3 ? <Yard /> : null}
      {variant === 4 ? <Loading /> : null}
      {variant === 5 ? <Sample /> : null}
      {variant !== 1 &&
      variant !== 2 &&
      variant !== 3 &&
      variant !== 4 &&
      variant !== 5 ? (
        <Crystal />
      ) : null}
    </svg>
  );
}

function Crystal() {
  return (
    <g fill="none" stroke="#3a5563" strokeWidth="1.6">
      <path d="M160 78 236 128v92L160 270 84 220v-92L160 78Z" />
      <path d="M160 78v192M84 128l76 42 76-42M84 220l76-50 76 50" />
      <path d="M148 292h24" stroke="#00a9e4" />
      <circle cx="160" cy="170" r="3.5" fill="#00a9e4" stroke="none" />
    </g>
  );
}

function Concentrate() {
  return (
    <g fill="none" stroke="#3a5563" strokeWidth="1.6">
      <path d="M78 248c18-62 146-62 164 0" />
      <path d="M92 248h136" stroke="#00a9e4" />
      <circle cx="132" cy="168" r="22" />
      <circle cx="176" cy="154" r="16" />
      <circle cx="196" cy="188" r="12" />
      <path d="M118 196c8 10 22 10 30-2" />
    </g>
  );
}

function Fines() {
  return (
    <g fill="none" stroke="#3a5563" strokeWidth="1.5">
      <path d="M70 268h180" stroke="#00a9e4" />
      <path d="M108 250 126 214 148 250Z" />
      <path d="M154 246 176 198 198 246Z" />
      <path d="M188 236 204 208 224 236Z" />
      <circle cx="124" cy="168" r="7" />
      <circle cx="168" cy="150" r="5" />
      <circle cx="206" cy="166" r="6" />
      <path d="M96 188h22M186 128h18M142 132h14" />
    </g>
  );
}

function Yard() {
  return (
    <g fill="none" stroke="#3a5563" strokeWidth="1.6">
      <path d="M64 250h192" stroke="#00a9e4" />
      <path d="M86 250V132h148v118" />
      <path d="M86 164h148M86 196h148" />
      <path d="M118 250V164M168 250V164M210 250V164" />
      <path d="M150 132 160 104l10 28" />
    </g>
  );
}

function Loading() {
  return (
    <g fill="none" stroke="#3a5563" strokeWidth="1.6">
      <path d="M58 262h204" stroke="#00a9e4" />
      <path d="M78 262 118 188h104l28 74" />
      <path d="M118 188v-36h104v36" />
      <path d="M142 152v36M170 152v36M198 152v36" />
      <circle cx="108" cy="262" r="10" />
      <circle cx="214" cy="262" r="10" />
    </g>
  );
}

function Sample() {
  return (
    <g fill="none" stroke="#3a5563" strokeWidth="1.6">
      <path d="M92 286h136" stroke="#00a9e4" />
      <path d="M124 286c2-48 18-78 36-92 20 16 34 48 36 92" />
      <path d="M146 214c10 8 22 8 32-2M138 242c16 10 32 8 46-6" />
      <path d="M108 118h104M108 118v18h104v-18" />
      <path d="M160 136v28" />
    </g>
  );
}
