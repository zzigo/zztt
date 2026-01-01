// ActivityHeatmap.jsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import HeatMap from '@uiw/react-heat-map';

// Format Date -> "YYYY/MM/DD" (uiw heatmap examples commonly use slashes)
function toYMDSlash(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}/${m}/${day}`;
}

// Parse input date robustly (supports Date, "YYYY-MM-DD", "YYYY/MM/DD", ISO strings)
function parseAnyDate(input) {
  if (!input) return null;
  if (input instanceof Date && !Number.isNaN(input.valueOf())) return input;

  if (typeof input === 'string') {
    // Handle "YYYY-MM-DD" safely (avoid UTC parsing surprises)
    const m = input.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (m) {
      const y = Number(m[1]);
      const mo = Number(m[2]) - 1;
      const da = Number(m[3]);
      const d = new Date(y, mo, da);
      return Number.isNaN(d.valueOf()) ? null : d;
    }

    // Handle "YYYY/MM/DD"
    const s = input.match(/^(\d{4})\/(\d{2})\/(\d{2})$/);
    if (s) {
      const y = Number(s[1]);
      const mo = Number(s[2]) - 1;
      const da = Number(s[3]);
      const d = new Date(y, mo, da);
      return Number.isNaN(d.valueOf()) ? null : d;
    }

    // Fallback: ISO or other parseable formats
    const d = new Date(input);
    return Number.isNaN(d.valueOf()) ? null : d;
  }

  return null;
}

export default function ActivityHeatmap({ data = [] }) {
  const wrapRef = useRef(null);
  const [hmWidth, setHmWidth] = useState(980);
  const [tooltip, setTooltip] = useState(null);

  // ResizeObserver to fit the heatmap to its container width
  useEffect(() => {
    if (!wrapRef.current) return;

    const el = wrapRef.current;
    const ro = new ResizeObserver((entries) => {
      const w = entries?.[0]?.contentRect?.width ?? 980;
      // keep some room for scrollbars/padding
      setHmWidth(Math.max(600, Math.floor(w)));
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Normalize incoming data to what uiw heatmap expects:
  // value item should have { date: "YYYY/MM/DD", count: number, ... }
  const normalized = useMemo(() => {
    return data
      .map((d) => {
        const parsed = parseAnyDate(d.date);
        if (!parsed) return null;
        return {
          ...d,
          date: toYMDSlash(parsed),
          // ensure count exists (heatmap uses it to determine intensity / presence)
          count: typeof d.count === 'number' ? d.count : 1,
        };
      })
      .filter(Boolean);
  }, [data]);

  const years = useMemo(() => {
    const set = new Set();
    normalized.forEach((d) => {
      const parsed = parseAnyDate(d.date.replaceAll('/', '-')); // safe-ish for year extraction
      if (parsed) set.add(parsed.getFullYear());
    });
    return Array.from(set).sort((a, b) => b - a);
  }, [normalized]);

  // Geometry helpers
  const rectSize = 12; // slightly smaller
  const space = 3;

  return (
    <div
      ref={wrapRef}
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '0rem',
      }}
    >
      {tooltip && (
        <div
          style={{
            position: 'fixed',
            top: tooltip.y - 8,
            left: tooltip.x,
            transform: 'translate(-50%, -100%)',
            backgroundColor: 'rgba(20, 20, 20, 0.95)',
            color: '#fff',
            padding: '8px 12px',
            borderRadius: '6px',
            fontSize: '0.8rem',
            pointerEvents: 'none',
            zIndex: 9999,
            border: `1px solid ${tooltip.color}`,
            boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
            maxWidth: '1000px',
            backdropFilter: 'blur(4px)',
          }}
        >
          <div style={{ 
            fontWeight: 'bold', 
            color: tooltip.color, 
            textTransform: 'uppercase', 
            fontSize: '0.7rem',
            marginBottom: '4px',
            letterSpacing: '0.05em'
          }}>
            {tooltip.type || 'Activity'}
          </div>
          <div style={{ marginBottom: '4px', opacity: 0.7, fontSize: '0.75rem' }}>{tooltip.date}</div>
          <div style={{ lineHeight: '1' }}>{tooltip.content}</div>
        </div>
      )}

      {years.map((year) => {
        // Use Date(year, m, d) to avoid UTC parsing quirks
        const startDate = new Date(year, 0, 1);
        const endDate = new Date(year, 11, 31);

        return (
          <div
            key={year}
            style={{
              display: 'grid',
              gridTemplateColumns: '3.2rem 1fr',
              gap: '0.75rem',
              alignItems: 'center',
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: '0.85rem',
                textAlign: 'right',
                opacity: 0.6,
              }}
            >
              {year}
            </h3>

            <div style={{ width: '100%', overflowX: 'auto', overflowY: 'hidden' }}>
              <HeatMap
                value={normalized}
                startDate={startDate}
                endDate={endDate}
                width={Math.max(hmWidth, 1300)}
                rectSize={rectSize}
                space={space}
                legendCellSize={0}
                panelColors={{
                  0: 'transparent',
                }}
                rectRender={(props, cell) => {
                  // Empty cell
                  if (!cell || !cell.count) {
                    return <rect {...props} fill="var(--color-bg-muted, #222)" rx={2} />;
                  }

                  let fill = '#555';
                  if (cell.type === 'work') fill = '#4caf50';
                  else if (cell.type === 'research') fill = '#ee82ee';
                  else if (cell.type === 'event') fill = 'rgba(60, 100, 255, 0.5)';

                  return (
                    <rect
                      {...props}
                      fill={fill}
                      rx={2}
                      opacity={1}
                      onMouseEnter={(e) => {
                        const rect = e.target.getBoundingClientRect();
                        setTooltip({
                          x: rect.left + rect.width / 2,
                          y: rect.top,
                          content: cell.content,
                          type: cell.type,
                          date: cell.date,
                          color: fill
                        });
                      }}
                      onMouseLeave={() => setTooltip(null)}
                    >
                    </rect>
                  );
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}