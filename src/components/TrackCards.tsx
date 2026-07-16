import { motion } from 'framer-motion'
import { Lightbulb, Gamepad2, ArrowUpRight } from 'lucide-react'
import type { Track } from '../types'

interface CardData {
  key: Track
  icon: typeof Lightbulb
  title: string
  format: string
  fee: string
  points: string[]
}

interface Props {
  onRegister: (track: Track) => void
  registrationFee: { build: string; battle: string }
}

export default function TrackCards({ onRegister, registrationFee }: Props) {
  const cards: CardData[] = [
    {
      key: 'build',
      icon: Lightbulb,
      title: 'Ideathon',
      format: 'Teams of 2–4 · 48 hours',
      fee: registrationFee.build,
      points: [
        'Pitch a solution to a real, judge-set problem statement',
        'Mentor check-ins across both days',
        'Final pitch to a panel of industry and faculty judges',
      ],
    },
    {
      key: 'battle',
      icon: Gamepad2,
      title: 'E-Sports',
      format: 'Squad or solo · bracket play',
      fee: registrationFee.battle,
      points: [
        'Single-elimination bracket across the two days',
        'Casted matches on the main stage screen',
        'Podium prizes for top 3 teams',
      ],
    },
  ]

  return (
    <section id="tracks" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The two tracks</span>
          <h2>Pick your lane. Both lead to the same stage.</h2>
          <p>
            UNBOUND 26 runs Ideathon and E-Sports in parallel across both days — register for one, or both if you're
            feeling unbound.
          </p>
        </div>

        <div className="track-grid">
          {cards.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={c.key}
                className={`track-card track-card-${c.key}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="track-card-icon">
                  <Icon size={22} />
                </div>
                <h3>{c.title}</h3>
                <p className="track-card-format">{c.format}</p>

                <ul>
                  {c.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>

                <div className="track-card-footer">
                  <span className="track-card-fee">{c.fee}</span>
                  <button className="btn btn-primary" onClick={() => onRegister(c.key)}>
                    Register <ArrowUpRight size={16} />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        .track-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .track-card {
          position: relative;
          padding: 32px;
          border-radius: var(--radius-lg);
          background: var(--bg-raised);
          border: 1px solid var(--line);
          overflow: hidden;
        }
        .track-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(120% 80% at 100% 0%, var(--card-glow, transparent), transparent 60%);
          pointer-events: none;
        }
        .track-card-build { --card-glow: var(--build-glow); }
        .track-card-battle { --card-glow: var(--battle-glow); }
        .track-card-icon {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .track-card-build .track-card-icon { background: var(--build-dim); color: var(--build); }
        .track-card-battle .track-card-icon { background: var(--battle-dim); color: var(--battle); }
        .track-card h3 {
          font-size: 24px;
          font-weight: 600;
        }
        .track-card-format {
          margin-top: 6px;
          font-family: var(--font-mono);
          font-size: 12.5px;
          color: var(--ink-faint);
        }
        .track-card ul {
          margin: 22px 0 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .track-card li {
          font-size: 14.5px;
          color: var(--ink-dim);
          line-height: 1.5;
          padding-left: 18px;
          position: relative;
        }
        .track-card-build li::before { background: var(--build); }
        .track-card-battle li::before { background: var(--battle); }
        .track-card li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 7px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
        }
        .track-card-footer {
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid var(--line);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .track-card-fee {
          font-family: var(--font-mono);
          font-size: 13.5px;
          color: var(--ink-dim);
        }
        .track-card-build .btn-primary { background: var(--build); box-shadow: 0 8px 30px -8px var(--build-glow); }
        .track-card-battle .btn-primary { background: var(--battle); box-shadow: 0 8px 30px -8px var(--battle-glow); }
        @media (max-width: 820px) {
          .track-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 420px) {
          .track-card-footer {
            flex-direction: column;
            align-items: flex-start;
          }
          .track-card-footer .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
