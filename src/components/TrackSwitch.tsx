import { motion } from 'framer-motion'
import type { Track } from '../types'

interface Props {
  track: Track
  onChange: (track: Track) => void
}

export default function TrackSwitch({ track, onChange }: Props) {
  const isBattle = track === 'battle'

  return (
    <div className="track-switch" role="group" aria-label="Choose which track to preview">
      <button
        type="button"
        className={`track-switch-label left ${!isBattle ? 'active' : ''}`}
        onClick={() => onChange('build')}
      >
        Build
      </button>

      <button
        type="button"
        className="track-switch-rail"
        onClick={() => onChange(isBattle ? 'build' : 'battle')}
        aria-pressed={isBattle}
        aria-label={`Currently previewing ${isBattle ? 'Battle' : 'Build'}. Tap to switch.`}
      >
        <motion.span
          className="track-switch-knob"
          animate={{ left: isBattle ? '52%' : '4%' }}
          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
        />
      </button>

      <button
        type="button"
        className={`track-switch-label right ${isBattle ? 'active' : ''}`}
        onClick={() => onChange('battle')}
      >
        Battle
      </button>

      <style>{`
        .track-switch {
          display: inline-flex;
          align-items: center;
          gap: 14px;
        }
        .track-switch-label {
          background: none;
          border: none;
          padding: 4px 2px;
          font-family: var(--font-mono);
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-faint);
          transition: color 0.3s ease;
        }
        .track-switch-label.active {
          color: var(--ink);
        }
        .track-switch-rail {
          position: relative;
          width: 74px;
          height: 34px;
          border-radius: 999px;
          background: var(--bg-raised-2);
          border: 1px solid var(--line-strong);
          padding: 0;
          box-shadow: inset 0 2px 6px rgba(0,0,0,0.4);
        }
        .track-switch-knob {
          position: absolute;
          top: 3px;
          width: 44%;
          height: calc(100% - 6px);
          border-radius: 999px;
          background: var(--accent);
          box-shadow: 0 0 16px var(--accent-glow);
          transition: background 0.4s ease, box-shadow 0.4s ease;
        }
      `}</style>
    </div>
  )
}
