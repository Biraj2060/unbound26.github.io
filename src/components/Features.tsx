import { motion } from 'framer-motion'
import { Users, Award, Handshake, Sparkles } from 'lucide-react'

const FEATURES = [
  {
    icon: Handshake,
    title: 'Real mentorship',
    body: 'Work alongside engineers and current students from PACE and ACEM, not just judges who show up at the end.',
  },
  {
    icon: Award,
    title: 'Prizes that matter',
    body: 'Cash prizes, goodies, and certificates for top performers across both the Ideathon and E-Sports brackets.',
  },
  {
    icon: Users,
    title: 'Built for +2 grads',
    body: 'No prior coding or competitive background required — just curiosity and a team, or the willingness to find one.',
  },
  {
    icon: Sparkles,
    title: 'A real campus preview',
    body: 'Two days on campus, meeting the seniors and clubs you would actually be working with as an engineering student.',
  },
]

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why UNBOUND</span>
          <h2>Not just another college fest.</h2>
          <p>UNBOUND 26 is built specifically for +2 graduates weighing what comes next.</p>
        </div>

        <div className="feature-grid">
          {FEATURES.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                className="feature-card"
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Icon size={20} />
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .feature-card {
          padding: 26px 22px;
          border-radius: var(--radius-md);
          background: var(--bg-raised);
          border: 1px solid var(--line);
          color: var(--accent);
          transition: border-color 0.3s ease, transform 0.3s ease;
        }
        .feature-card:hover {
          border-color: var(--line-strong);
          transform: translateY(-3px);
        }
        .feature-card h3 {
          margin-top: 16px;
          font-size: 16.5px;
          font-weight: 600;
          color: var(--ink);
        }
        .feature-card p {
          margin-top: 8px;
          font-size: 14px;
          line-height: 1.55;
          color: var(--ink-dim);
        }
        @media (max-width: 980px) {
          .feature-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 560px) {
          .feature-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
