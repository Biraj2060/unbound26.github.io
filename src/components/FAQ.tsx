import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'

const ITEMS = [
  {
    q: 'Who can register for UNBOUND 26?',
    a: 'Any student who has completed or is currently finishing their +2 (or equivalent) is eligible. No prior competition experience is required for either track.',
  },
  {
    q: "What's the difference between Ideathon and E-Sports?",
    a: 'Ideathon is a 48-hour problem-solving and pitching competition in teams of 2–4. E-Sports is a bracket-style gaming tournament. You can register for one track or both — they run in parallel, so plan your time across the two days.',
  },
  {
    q: 'Do I need a team already?',
    a: "It helps, but it's not required. If you register solo for the Ideathon, we'll help place you with a team before day one. E-Sports team formation depends on the specific game and will be confirmed after registration.",
  },
  {
    q: 'Is there a registration fee?',
    a: 'Each track has its own small registration fee, shown on the track cards above. This covers materials, meals during the event, and your participant kit.',
  },
  {
    q: 'What should I bring?',
    a: 'A valid ID, your own laptop if participating in the Ideathon, and a charger. Specific gaming peripherals for E-Sports will be communicated after registration, depending on the games selected.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section">
      <div className="container faq-container">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Good to know before you sign up.</h2>
        </div>

        <div className="faq-list">
          {ITEMS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div className="faq-item" key={item.q}>
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <motion.span
                    className="faq-icon"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Plus size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .faq-container {
          max-width: 760px;
        }
        .faq-list {
          border-top: 1px solid var(--line);
        }
        .faq-item {
          border-bottom: 1px solid var(--line);
        }
        .faq-question {
          width: 100%;
          background: none;
          border: none;
          padding: 22px 4px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          text-align: left;
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 500;
          color: var(--ink);
        }
        .faq-icon {
          flex-shrink: 0;
          color: var(--accent);
          transition: color 0.4s ease;
        }
        .faq-answer p {
          padding: 0 34px 22px 4px;
          color: var(--ink-dim);
          font-size: 14.5px;
          line-height: 1.65;
        }
      `}</style>
    </section>
  )
}
