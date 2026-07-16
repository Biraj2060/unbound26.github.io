import { AnimatePresence, motion } from 'framer-motion'
import { X, Lightbulb, Gamepad2, ArrowUpRight } from 'lucide-react'
import type { Track } from '../types'

interface Props {
  open: boolean
  onClose: () => void
  preselected: Track | null
  formLinks: { build: string; battle: string }
}

export default function RegisterModal({ open, onClose, preselected, formLinks }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-card"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Choose a track to register for"
          >
            <button className="modal-close" onClick={onClose} aria-label="Close">
              <X size={18} />
            </button>

            <span className="eyebrow">Register</span>
            <h3>Which track are you joining?</h3>
            <p className="modal-sub">You'll be taken to the official Google Form for that track.</p>

            <div className="modal-options">
              {(['build', 'battle'] as const).map((t) => {
                const hasLink = Boolean(formLinks[t])
                const Icon = t === 'build' ? Lightbulb : Gamepad2
                const content = (
                  <>
                    <Icon size={20} />
                    <span className="modal-option-title">{t === 'build' ? 'Ideathon' : 'E-Sports'}</span>
                    <span className="modal-option-sub">
                      {hasLink ? (
                        <>
                          {t === 'build' ? 'Build track' : 'Battle track'} <ArrowUpRight size={14} />
                        </>
                      ) : (
                        'Form opening soon'
                      )}
                    </span>
                  </>
                )
                const className = `modal-option ${t} ${preselected === t ? 'suggested' : ''} ${
                  hasLink ? '' : 'disabled'
                }`
                return hasLink ? (
                  <a key={t} href={formLinks[t]} target="_blank" rel="noreferrer" className={className}>
                    {content}
                  </a>
                ) : (
                  <span key={t} className={className} aria-disabled="true">
                    {content}
                  </span>
                )
              })}
            </div>
          </motion.div>

          <style>{`
            .modal-backdrop {
              position: fixed;
              inset: 0;
              z-index: 60;
              background: rgba(2, 6, 20, 0.72);
              backdrop-filter: blur(6px);
              display: flex;
              align-items: flex-end;
              justify-content: center;
              padding: 16px;
            }
            @media (min-width: 640px) {
              .modal-backdrop {
                align-items: center;
              }
            }
            .modal-card {
              position: relative;
              width: 100%;
              max-width: 440px;
              background: var(--bg-raised-2);
              border: 1px solid var(--line-strong);
              border-radius: var(--radius-lg);
              padding: 32px 28px;
              box-shadow: 0 30px 80px -20px rgba(0,0,0,0.6);
            }
            .modal-close {
              position: absolute;
              top: 18px;
              right: 18px;
              background: none;
              border: none;
              color: var(--ink-dim);
            }
            .modal-card h3 {
              margin-top: 10px;
              font-size: 22px;
              font-weight: 600;
            }
            .modal-sub {
              margin-top: 8px;
              font-size: 14px;
              color: var(--ink-dim);
            }
            .modal-options {
              margin-top: 24px;
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 12px;
            }
            .modal-option {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              gap: 8px;
              padding: 18px;
              border-radius: var(--radius-sm);
              border: 1px solid var(--line);
              transition: border-color 0.2s ease, transform 0.2s ease;
            }
            .modal-option:hover {
              transform: translateY(-2px);
            }
            .modal-option.build { color: var(--build); }
            .modal-option.battle { color: var(--battle); }
            .modal-option.build.suggested { border-color: var(--build); background: var(--build-dim); }
            .modal-option.battle.suggested { border-color: var(--battle); background: var(--battle-dim); }
            .modal-option.disabled {
              opacity: 0.55;
              cursor: default;
              pointer-events: none;
            }
            .modal-option-title {
              font-size: 15.5px;
              font-weight: 600;
              color: var(--ink);
            }
            .modal-option-sub {
              font-family: var(--font-mono);
              font-size: 11.5px;
              display: inline-flex;
              align-items: center;
              gap: 4px;
              color: inherit;
            }
            @media (max-width: 420px) {
              .modal-options {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
