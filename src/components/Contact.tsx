import { Phone, Mail, ExternalLink } from 'lucide-react'

interface ContactPerson {
  name: string
  role: string
  phone: string
}

interface Props {
  email: string
  contacts: ContactPerson[]
  socials: { instagram?: string; facebook?: string; linkedin?: string }
}

export default function Contact({ email, contacts, socials }: Props) {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Contact</span>
          <h2>Questions? Reach the organizing team directly.</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <Mail size={18} />
            <p className="contact-label">Email</p>
            <a href={`mailto:${email}`} className="contact-value">
              {email}
            </a>
          </div>

          {contacts.map((c) => (
            <div className="contact-card" key={c.phone}>
              <Phone size={18} />
              <p className="contact-label">
                {c.name} · {c.role}
              </p>
              <a href={`tel:${c.phone}`} className="contact-value">
                {c.phone}
              </a>
            </div>
          ))}
        </div>

        <div className="contact-socials">
          {socials.instagram && (
            <a href={socials.instagram} target="_blank" rel="noreferrer">
              Instagram <ExternalLink size={13} />
            </a>
          )}
          {socials.facebook && (
            <a href={socials.facebook} target="_blank" rel="noreferrer">
              Facebook <ExternalLink size={13} />
            </a>
          )}
          {socials.linkedin && (
            <a href={socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .contact-card {
          padding: 24px;
          border-radius: var(--radius-md);
          background: var(--bg-raised);
          border: 1px solid var(--line);
          color: var(--accent);
          transition: color 0.4s ease;
        }
        .contact-label {
          margin-top: 14px;
          font-size: 13px;
          color: var(--ink-dim);
        }
        .contact-value {
          display: inline-block;
          margin-top: 6px;
          font-size: 16px;
          font-weight: 600;
          color: var(--ink);
        }
        .contact-value:hover {
          color: var(--accent);
        }
        .contact-socials {
          margin-top: 32px;
          display: flex;
          gap: 16px;
        }
        .contact-socials a {
          padding: 10px 18px;
          border-radius: 999px;
          border: 1px solid var(--line);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13.5px;
          color: var(--ink-dim);
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .contact-socials a:hover {
          color: var(--accent);
          border-color: var(--accent);
        }
        @media (max-width: 720px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
