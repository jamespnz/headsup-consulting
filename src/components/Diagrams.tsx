export function ArchDiagram() {
  return (
    <svg
      viewBox="0 0 480 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Grid background */}
      <defs>
        <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#e5e5e5" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="480" height="320" fill="#fafafa" />
      <rect width="480" height="320" fill="url(#grid)" />

      {/* Top node */}
      <rect x="192" y="20" width="96" height="36" rx="2" fill="white" stroke="#d4d4d4" strokeWidth="1" />
      <text x="240" y="42" textAnchor="middle" fill="#404040" fontSize="10" fontFamily="IBM Plex Mono, monospace" fontWeight="500">AI Engine</text>

      {/* Connector lines */}
      <line x1="240" y1="56" x2="240" y2="90" stroke="#d4d4d4" strokeWidth="1" strokeDasharray="4 2" />
      <line x1="120" y1="108" x2="360" y2="108" stroke="#d4d4d4" strokeWidth="1" />
      <line x1="120" y1="108" x2="120" y2="132" stroke="#d4d4d4" strokeWidth="1" strokeDasharray="4 2" />
      <line x1="240" y1="108" x2="240" y2="132" stroke="#d4d4d4" strokeWidth="1" strokeDasharray="4 2" />
      <line x1="360" y1="108" x2="360" y2="132" stroke="#d4d4d4" strokeWidth="1" strokeDasharray="4 2" />

      {/* Middle row nodes */}
      <rect x="68" y="132" width="104" height="36" rx="2" fill="white" stroke="#a3a3a3" strokeWidth="1.5" />
      <text x="120" y="154" textAnchor="middle" fill="#262626" fontSize="10" fontFamily="IBM Plex Mono, monospace" fontWeight="500">Compliance</text>

      <rect x="188" y="132" width="104" height="36" rx="2" fill="#171717" stroke="#171717" strokeWidth="1.5" />
      <text x="240" y="154" textAnchor="middle" fill="white" fontSize="10" fontFamily="IBM Plex Mono, monospace" fontWeight="500">ZenithAudit</text>

      <rect x="308" y="132" width="104" height="36" rx="2" fill="white" stroke="#a3a3a3" strokeWidth="1.5" />
      <text x="360" y="154" textAnchor="middle" fill="#262626" fontSize="10" fontFamily="IBM Plex Mono, monospace" fontWeight="500">Reporting</text>

      {/* Second connector lines */}
      <line x1="120" y1="168" x2="120" y2="200" stroke="#d4d4d4" strokeWidth="1" strokeDasharray="4 2" />
      <line x1="240" y1="168" x2="240" y2="200" stroke="#d4d4d4" strokeWidth="1" strokeDasharray="4 2" />
      <line x1="360" y1="168" x2="360" y2="200" stroke="#d4d4d4" strokeWidth="1" strokeDasharray="4 2" />
      <line x1="120" y1="218" x2="360" y2="218" stroke="#d4d4d4" strokeWidth="1" />

      {/* Bottom row nodes */}
      <rect x="68" y="200" width="104" height="36" rx="2" fill="white" stroke="#d4d4d4" strokeWidth="1" />
      <text x="120" y="222" textAnchor="middle" fill="#737373" fontSize="10" fontFamily="IBM Plex Mono, monospace">Data Layer</text>

      <rect x="188" y="200" width="104" height="36" rx="2" fill="white" stroke="#d4d4d4" strokeWidth="1" />
      <text x="240" y="222" textAnchor="middle" fill="#737373" fontSize="10" fontFamily="IBM Plex Mono, monospace">Workflows</text>

      <rect x="308" y="200" width="104" height="36" rx="2" fill="white" stroke="#d4d4d4" strokeWidth="1" />
      <text x="360" y="222" textAnchor="middle" fill="#737373" fontSize="10" fontFamily="IBM Plex Mono, monospace">API Gateway</text>

      {/* Bottom connector */}
      <line x1="240" y1="236" x2="240" y2="264" stroke="#d4d4d4" strokeWidth="1" strokeDasharray="4 2" />
      <rect x="180" y="264" width="120" height="36" rx="2" fill="white" stroke="#d4d4d4" strokeWidth="1" />
      <text x="240" y="286" textAnchor="middle" fill="#737373" fontSize="10" fontFamily="IBM Plex Mono, monospace">Infrastructure</text>

      {/* Node dots */}
      {[
        [240, 108], [120, 108], [360, 108], [240, 218], [120, 218], [360, 218]
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="#d4d4d4" />
      ))}
    </svg>
  );
}

export function StudioDiagram() {
  return (
    <svg
      viewBox="0 0 480 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#e5e5e5" />
        </pattern>
      </defs>
      <rect width="480" height="280" fill="#fafafa" />
      <rect width="480" height="280" fill="url(#dots)" />

      {/* Center hexagon-ish shape */}
      <rect x="192" y="110" width="96" height="60" rx="4" fill="#171717" />
      <text x="240" y="136" textAnchor="middle" fill="white" fontSize="9" fontFamily="IBM Plex Mono, monospace" fontWeight="500">App Design</text>
      <text x="240" y="151" textAnchor="middle" fill="#a3a3a3" fontSize="9" fontFamily="IBM Plex Mono, monospace">Studio</text>

      {/* Orbiting items */}
      {[
        { x: 64, y: 50, label: 'Discovery', sub: 'Research' },
        { x: 300, y: 30, label: 'Architecture', sub: 'Design' },
        { x: 380, y: 120, label: 'AI Models', sub: 'Integration' },
        { x: 300, y: 210, label: 'Delivery', sub: 'Deploy' },
        { x: 64, y: 210, label: 'Iteration', sub: 'Review' },
        { x: 20, y: 120, label: 'Strategy', sub: 'Planning' },
      ].map((item, i) => (
        <g key={i}>
          <rect x={item.x - 2} y={item.y - 2} width="76" height="40" rx="2" fill="white" stroke="#d4d4d4" strokeWidth="1" />
          <text x={item.x + 36} y={item.y + 15} textAnchor="middle" fill="#404040" fontSize="9" fontFamily="IBM Plex Mono, monospace" fontWeight="500">{item.label}</text>
          <text x={item.x + 36} y={item.y + 28} textAnchor="middle" fill="#a3a3a3" fontSize="8" fontFamily="IBM Plex Mono, monospace">{item.sub}</text>
          <line
            x1={item.x + 36}
            y1={item.y + 38}
            x2={
              i === 0 ? 205 : i === 1 ? 220 : i === 2 ? 288 : i === 3 ? 250 : i === 4 ? 200 : 192
            }
            y2={
              i === 0 ? 125 : i === 1 ? 115 : i === 2 ? 140 : i === 3 ? 170 : i === 4 ? 165 : 140
            }
            stroke="#e5e5e5"
            strokeWidth="1"
            strokeDasharray="3 2"
          />
        </g>
      ))}
    </svg>
  );
}
