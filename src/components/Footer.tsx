export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-brand">
          UNBOUND<strong>26</strong>
        </span>
        <p>PACE × ACEM · Built for +2 graduates deciding what comes next.</p>
      </div>

      <style>{`
        .footer {
          position: relative;
          z-index: 1;
          border-top: 1px solid var(--line);
          padding: 32px 0;
        }
        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .footer-brand {
          font-family: var(--font-display);
          font-size: 14px;
          color: var(--ink-dim);
        }
        .footer-brand strong {
          color: var(--ink);
        }
        .footer p {
          font-size: 13px;
          color: var(--ink-faint);
        }
      `}</style>
    </footer>
  )
}
