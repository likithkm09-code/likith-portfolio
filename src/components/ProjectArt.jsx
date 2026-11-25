// Original SVG illustrations used as project visuals.
// Replace with real screenshots by adding an `image` field to a project in data/portfolio.js.
const A = "var(--accent)";
const L = "var(--border)";
const M = "var(--text-2)";

function Art({ type }) {
  switch (type) {
    case "eye":
      return (
        <>
          <path d="M40 90c30-44 90-44 120 0-30 44-90 44-120 0z" fill="none" stroke={M} strokeWidth="2" />
          <circle cx="100" cy="90" r="22" fill="none" stroke={A} strokeWidth="2.5" />
          <circle cx="100" cy="90" r="8" fill={A} />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <circle key={i} cx={52 + i * 19} cy={i % 2 ? 76 : 104} r="2.5" fill={M} />
          ))}
          <rect x="30" y="140" width="140" height="6" rx="3" fill={L} />
          <rect x="30" y="140" width="92" height="6" rx="3" fill={A} />
          <text x="30" y="30" fill={M} fontSize="11" fontFamily="monospace">
            EAR 0.31 · ALERT OFF
          </text>
        </>
      );
    case "neural": {
      const cols = [
        [50, 90, 130],
        [40, 70, 110, 140],
        [60, 120],
      ];
      const xs = [40, 100, 160];
      return (
        <>
          {cols[0].map((y1) =>
            cols[1].map((y2) => <line key={`a${y1}-${y2}`} x1={xs[0]} y1={y1} x2={xs[1]} y2={y2} stroke={L} />)
          )}
          {cols[1].map((y1) =>
            cols[2].map((y2) => <line key={`b${y1}-${y2}`} x1={xs[1]} y1={y1} x2={xs[2]} y2={y2} stroke={L} />)
          )}
          {cols.map((col, ci) =>
            col.map((y) => <circle key={`${ci}-${y}`} cx={xs[ci]} cy={y} r="7" fill="var(--card)" stroke={ci === 2 ? A : M} strokeWidth="2" />)
          )}
          <circle cx={xs[2]} cy="60" r="3.5" fill={A} />
        </>
      );
    }
    case "rps":
      return (
        <>
          <circle cx="50" cy="90" r="24" fill="none" stroke={M} strokeWidth="2" />
          <rect x="88" y="66" width="48" height="48" rx="6" fill="none" stroke={A} strokeWidth="2.5" />
          <path d="M150 66l30 48M180 66l-30 48" stroke={M} strokeWidth="2.5" strokeLinecap="round" />
          <text x="30" y="150" fill={M} fontSize="11" fontFamily="monospace">
            you 3 : 2 cpu
          </text>
        </>
      );
    case "portal":
      return (
        <>
          <rect x="22" y="30" width="156" height="22" rx="4" fill="none" stroke={L} />
          <rect x="22" y="60" width="156" height="22" rx="4" fill="none" stroke={A} strokeWidth="2" />
          <rect x="22" y="90" width="156" height="22" rx="4" fill="none" stroke={L} />
          {["Student", "Recruiter", "Admin"].map((r, i) => (
            <text key={r} x={34 + i * 48} y="140" fill={M} fontSize="10" fontFamily="monospace">
              {r}
            </text>
          ))}
          <circle cx="34" cy="71" r="4" fill={A} />
        </>
      );
    case "warehouse":
      return (
        <>
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={28 + i * 30} y={130 - (20 + ((i * 37) % 60))} width="20" height={20 + ((i * 37) % 60)} rx="3" fill={i === 3 ? A : L} />
          ))}
          <line x1="20" y1="132" x2="180" y2="132" stroke={M} />
          <path d="M28 70l30-18 30 10 30-24 30 8" fill="none" stroke={M} strokeDasharray="4 4" />
        </>
      );
    case "billing":
      return (
        <>
          <path d="M60 24h80v112l-10-7-10 7-10-7-10 7-10-7-10 7-10-7-10 7z" fill="none" stroke={M} strokeWidth="2" />
          {[48, 64, 80].map((y) => (
            <line key={y} x1="74" y1={y} x2="126" y2={y} stroke={L} strokeWidth="3" strokeLinecap="round" />
          ))}
          <line x1="74" y1="100" x2="126" y2="100" stroke={A} strokeWidth="3" strokeLinecap="round" />
        </>
      );
    default:
      return null;
  }
}

export default function ProjectArt({ type }) {
  return (
    <svg viewBox="0 0 200 170" className="projectart" role="img" aria-label="Project illustration" preserveAspectRatio="xMidYMid meet">
      <g>
        <Art type={type} />
      </g>
    </svg>
  );
}
