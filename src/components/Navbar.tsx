import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface Props {
  onRegisterClick: () => void
}

const LINKS = [
  { href: '#tracks', label: 'Tracks' },
  { href: '#features', label: 'Why UNBOUND' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ onRegisterClick }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-brand">
          UNBOUND<span>26</span>
        </a>

        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="btn btn-primary nav-register" onClick={onRegisterClick}>
            Register
          </button>
          <button
            className="nav-burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container nav-mobile-inner">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <button
                className="btn btn-primary"
                onClick={() => {
                  setOpen(false)
                  onRegisterClick()
                }}
              >
                Register
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 40;
          backdrop-filter: blur(14px);
          background: rgba(2, 11, 46, 0.72);
          border-bottom: 1px solid var(--line);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        .nav-brand {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 19px;
          letter-spacing: -0.01em;
        }
        .nav-brand span {
          color: var(--accent);
          transition: color 0.4s ease;
        }
        .nav-links {
          display: flex;
          gap: 32px;
        }
        .nav-links a {
          font-size: 14.5px;
          color: var(--ink-dim);
          transition: color 0.2s ease;
        }
        .nav-links a:hover {
          color: var(--ink);
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .nav-register {
          padding: 10px 20px;
        }
        .nav-burger {
          display: none;
          background: none;
          border: none;
          color: var(--ink);
        }
        .nav-mobile-inner {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-bottom: 20px;
        }
        .nav-mobile-inner a {
          padding: 12px 4px;
          border-bottom: 1px solid var(--line);
          color: var(--ink-dim);
        }
        .nav-mobile-inner .btn {
          margin-top: 14px;
        }
        @media (max-width: 860px) {
          .nav-links {
            display: none;
          }
          .nav-burger {
            display: flex;
          }
          .nav-register {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}
