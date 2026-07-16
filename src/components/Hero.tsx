import { motion } from 'framer-motion'
import { CalendarDays, MapPin, GraduationCap } from 'lucide-react'
import TrackSwitch from './TrackSwitch'
import type { Track } from '../types'

interface Props {
  track: Track
  onTrackChange: (t: Track) => void
  eventDates: string
  venue: string
  eligibility: string
  onPrimaryCta: () => void
}

const COPY: Record<Track, { headline: string; sub: string; cta: string }> = {
  build: {
    headline: 'Ship an idea in 48 hours.',
    sub: 'The Ideathon track: pitch, prototype, and defend a solution to a real problem alongside mentors from PACE × ACEM.',
    cta: 'Register for Ideathon',
  },
  battle: {
    headline: 'Play for the podium.',
    sub: 'The E-Sports track: bracket-style tournaments, squad rivalries, and bragging rights on the UNBOUND 26 main stage.',
    cta: 'Register for E-Sports',
  },
}

export default function Hero({ track, onTrackChange, eventDates, venue, eligibility, onPrimaryCta }: Props) {
  const copy = COPY[track]

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <span className="eyebrow">PACE × ACEM present</span>

        <h1 className="hero-title">
          UNBOUND <span className="hero-title-accent">26</span>
        </h1>

        <p className="hero-tagline">
          Two days. Two tracks. One shot to prove where you belong next — in the build, or in the battle.
        </p>

        <div className="hero-switch-row">
          <TrackSwitch track={track} onChange={onTrackChange} />
        </div>

        <motion.div
          key={track}
          className="hero-copy"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <h2>{copy.headline}</h2>
          <p>{copy.sub}</p>
        </motion.div>

        <div className="hero-cta-row">
          <button className="btn btn-primary" onClick={onPrimaryCta}>
            {copy.cta}
          </button>
          <a className="btn btn-ghost" href="#tracks">
            See both tracks
          </a>
        </div>

        <div className="hero-meta">
          <span>
            <CalendarDays size={15} /> {eventDates}
          </span>
          <span>
            <MapPin size={15} /> {venue}
          </span>
          <span>
            <GraduationCap size={15} /> {eligibility}
          </span>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          z-index: 1;
          padding: 88px 0 64px;
          text-align: center;
        }
        .hero-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-title {
          margin-top: 20px;
          font-size: clamp(52px, 11vw, 108px);
          font-weight: 700;
          line-height: 0.95;
        }
        .hero-title-accent {
          color: var(--accent);
          transition: color 0.4s ease;
        }
        .hero-tagline {
          margin-top: 22px;
          max-width: 560px;
          font-size: 17px;
          line-height: 1.6;
          color: var(--ink-dim);
        }
        .hero-switch-row {
          margin-top: 36px;
        }
        .hero-copy {
          margin-top: 28px;
          min-height: 96px;
          max-width: 520px;
        }
        .hero-copy h2 {
          font-size: 22px;
          font-weight: 600;
        }
        .hero-copy p {
          margin-top: 10px;
          color: var(--ink-dim);
          font-size: 15px;
          line-height: 1.6;
        }
        .hero-cta-row {
          margin-top: 12px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .hero-meta {
          margin-top: 44px;
          display: flex;
          gap: 26px;
          flex-wrap: wrap;
          justify-content: center;
          font-family: var(--font-mono);
          font-size: 12.5px;
          color: var(--ink-faint);
        }
        .hero-meta span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        @media (max-width: 640px) {
          .hero {
            padding: 56px 0 44px;
          }
          .hero-cta-row {
            width: 100%;
            flex-direction: column;
          }
          .hero-cta-row .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
