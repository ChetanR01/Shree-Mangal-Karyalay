import React from "react";

// -----------------------------------------------------------------------------
// Pure SVG ornaments — no client state, safe in server components.
// -----------------------------------------------------------------------------

export function Mandala({ className = "", stroke = "#d4af37" }: { className?: string; stroke?: string }) {
  const petals = Array.from({ length: 24 });
  const petals2 = Array.from({ length: 12 });
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <g fill="none" stroke={stroke} strokeWidth="0.8">
        <circle cx="100" cy="100" r="96" strokeOpacity="0.5" />
        <circle cx="100" cy="100" r="80" strokeOpacity="0.35" />
        <circle cx="100" cy="100" r="52" strokeOpacity="0.6" />
        <circle cx="100" cy="100" r="30" strokeOpacity="0.7" />
        <circle cx="100" cy="100" r="14" strokeOpacity="0.9" />
        {petals.map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="100"
            x2="100"
            y2="4"
            strokeOpacity="0.25"
            transform={`rotate(${(360 / 24) * i} 100 100)`}
          />
        ))}
        {petals2.map((_, i) => (
          <path
            key={i}
            d="M100 48 C112 66 112 84 100 100 C88 84 88 66 100 48 Z"
            strokeOpacity="0.75"
            transform={`rotate(${(360 / 12) * i} 100 100)`}
          />
        ))}
        {petals2.map((_, i) => (
          <circle
            key={`d${i}`}
            cx="100"
            cy="18"
            r="2.4"
            fill={stroke}
            fillOpacity="0.8"
            stroke="none"
            transform={`rotate(${(360 / 12) * i} 100 100)`}
          />
        ))}
      </g>
    </svg>
  );
}

export function Diya({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 80" className={className} aria-hidden="true">
      {/* flame */}
      <g className="flame">
        <path d="M30 8 C24 20 26 30 30 34 C34 30 36 20 30 8 Z" fill="#ffcf5c" />
        <path d="M30 16 C27 24 28 30 30 32 C32 30 33 24 30 16 Z" fill="#ff8a1e" />
      </g>
      {/* glow */}
      <ellipse cx="30" cy="30" rx="16" ry="10" fill="#ffcf5c" opacity="0.18" />
      {/* lamp body */}
      <path d="M8 52 Q30 44 52 52 Q46 70 30 70 Q14 70 8 52 Z" fill="url(#diyaGold)" />
      <path d="M8 52 Q30 60 52 52" fill="none" stroke="#7a0d18" strokeWidth="1.4" opacity="0.5" />
      <defs>
        <linearGradient id="diyaGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6e4a8" />
          <stop offset="0.5" stopColor="#d4af37" />
          <stop offset="1" stopColor="#9a7615" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Hanging marigold garland (toran) that stretches across a container width.
export function Toran({ className = "" }: { className?: string }) {
  const drops = Array.from({ length: 15 });
  return (
    <svg viewBox="0 0 1200 90" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path d="M0 8 Q600 70 1200 8" fill="none" stroke="#1f5c3d" strokeWidth="3" />
      {drops.map((_, i) => {
        const t = i / 14;
        const x = t * 1200;
        const y = 8 + Math.sin(Math.PI * t) * 56;
        const len = 14 + (i % 3) * 10;
        return (
          <g key={i}>
            <line x1={x} y1={y} x2={x} y2={y + len} stroke="#1f5c3d" strokeWidth="1.5" />
            <circle cx={x} cy={y + len + 6} r="7" fill={i % 2 ? "#e8871e" : "#f4a300"} />
            <circle cx={x} cy={y + len + 6} r="3" fill="#c96a10" />
            <circle cx={x} cy={y + len + 16} r="4" fill="#ffcf5c" />
          </g>
        );
      })}
    </svg>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent to-gold-500/70" />
      <svg viewBox="0 0 40 40" className="h-6 w-6 text-gold-500">
        <g fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M20 4 C24 14 26 16 36 20 C26 24 24 26 20 36 C16 26 14 24 4 20 C14 16 16 14 20 4 Z" />
          <circle cx="20" cy="20" r="3" fill="currentColor" />
        </g>
      </svg>
      <span className="h-px w-16 sm:w-28 bg-gradient-to-l from-transparent to-gold-500/70" />
    </div>
  );
}

// Ornate corner bracket used to frame panels.
export function Corner({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <g fill="none" stroke="#d4af37" strokeWidth="1.4" strokeOpacity="0.8">
        <path d="M2 30 L2 6 Q2 2 6 2 L30 2" />
        <path d="M10 30 Q10 10 30 10" />
        <circle cx="10" cy="10" r="2.4" fill="#d4af37" stroke="none" />
      </g>
    </svg>
  );
}

// -----------------------------------------------------------------------------
// Icon set — line-art with gold currentColor.
// -----------------------------------------------------------------------------
const P = ({ d }: { d: string }) => <path d={d} />;

const icons: Record<string, React.ReactNode> = {
  rings: (
    <>
      <circle cx="9" cy="14" r="6" />
      <circle cx="15" cy="14" r="6" />
      <P d="M9 4 l3 3 l3 -3" />
    </>
  ),
  turmeric: (
    <>
      <circle cx="12" cy="13" r="7" />
      <P d="M12 6 v3 M12 20 v-3 M5 13 h3 M19 13 h-3 M7 8 l2 2 M17 8 l-2 2" />
    </>
  ),
  ring: (
    <>
      <circle cx="12" cy="15" r="6" />
      <P d="M9 6 l3 3 l3 -3 l-3 -2 z" />
    </>
  ),
  lotus: (
    <>
      <P d="M12 4 c2 4 2 7 0 10 c-2 -3 -2 -6 0 -10z" />
      <P d="M12 14 c4 -2 7 -1 9 1 c-3 3 -7 3 -9 0z" />
      <P d="M12 14 c-4 -2 -7 -1 -9 1 c3 3 7 3 9 0z" />
    </>
  ),
  cradle: (
    <>
      <P d="M4 12 a8 6 0 0 0 16 0z" />
      <P d="M4 12 h16 M12 4 v4 M9 6 h6" />
    </>
  ),
  cake: (
    <>
      <P d="M4 20 h16 v-6 a8 4 0 0 0 -16 0z" />
      <P d="M12 6 v3 M12 3 a1 1 0 0 0 0 2 a1 1 0 0 0 0 -2z" />
    </>
  ),
  lawn: (
    <>
      <P d="M3 20 h18" />
      <P d="M6 20 v-5 M6 15 l-2 -2 M6 15 l2 -2 M12 20 v-7 M12 13 l-2 -2 M12 13 l2 -2 M18 20 v-5 M18 15 l-2 -2 M18 15 l2 -2" />
    </>
  ),
  ac: (
    <>
      <rect x="3" y="6" width="18" height="7" rx="2" />
      <P d="M6 17 q1 2 3 1 M11 17 q1 2 3 1 M16 17 q1 2 3 1" />
    </>
  ),
  parking: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <P d="M9 16 v-8 h3 a2 2 0 0 1 0 4 h-3" />
    </>
  ),
  cctv: (
    <>
      <P d="M3 8 l12 -3 l1 4 l-12 3z" />
      <P d="M15 6 l4 -1 M9 11 v3 a3 3 0 0 0 3 3" />
    </>
  ),
  power: (
    <>
      <P d="M13 3 L6 13 h5 l-1 8 l7 -11 h-5z" />
    </>
  ),
  room: (
    <>
      <P d="M4 20 v-9 l8 -6 l8 6 v9z" />
      <rect x="10" y="13" width="4" height="7" />
    </>
  ),
  suite: (
    <>
      <P d="M3 18 v-4 a2 2 0 0 1 2 -2 h14 a2 2 0 0 1 2 2 v4" />
      <P d="M3 14 v-4 h18 v4 M6 12 v-2 h5 v2 M13 12 v-2 h5 v2 M3 18 h18" />
    </>
  ),
  chair: (
    <>
      <P d="M6 4 v8 h12 v-8 M6 12 v8 M18 12 v8 M4 12 h16" />
    </>
  ),
  lamp: (
    <>
      <P d="M9 3 h6 l3 7 h-12z" />
      <P d="M12 10 v8 M9 21 h6" />
    </>
  ),
  child: (
    <>
      <circle cx="12" cy="6" r="3" />
      <P d="M12 9 v7 M8 12 h8 M9 21 l3 -5 l3 5" />
    </>
  ),
  phone: (
    <>
      <P d="M5 4 h4 l2 5 l-2 1 a11 11 0 0 0 5 5 l1 -2 l5 2 v4 a2 2 0 0 1 -2 2 A16 16 0 0 1 3 6 a2 2 0 0 1 2 -2z" />
    </>
  ),
  pin: (
    <>
      <P d="M12 21 s7 -6 7 -11 a7 7 0 0 0 -14 0 c0 5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <P d="M12 8 v4 l3 2" />
    </>
  ),
  whatsapp: (
    <>
      <P d="M4 20 l1.5 -4 a8 8 0 1 1 3 3z" />
      <P d="M9 9 c0 4 2 6 6 6 c1 0 2 -1 1 -2 l-2 -1 l-1 1 c-1 -0.5 -2 -1.5 -2.5 -2.5 l1 -1 l-1 -2 c-1 -1 -2 0 -2.5 1z" />
    </>
  ),
};

export function Icon({ name, className = "h-8 w-8" }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name] ?? icons.lotus}
    </svg>
  );
}
