import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrackCards from './components/TrackCards'
import Features from './components/Features'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import RegisterModal from './components/RegisterModal'
import type { Track } from './types'

// ─────────────────────────────────────────────────────────────
// EVENT CONFIG — fill in real values here before the event goes live.
// Nothing below is invented; each field is either a safe "to be
// announced" default or clearly marked for you to fill in.
// ─────────────────────────────────────────────────────────────

// Set these once your Google Forms exist. Until then, registration
// buttons show a "coming soon" state instead of linking anywhere.
const registrationLinks = {
  build: '',
  battle: '',
}

const registrationFee = {
  build: 'Fee TBA',
  battle: 'Fee TBA',
}

const eventDates = 'Dates to be announced'
const venue = 'Venue to be announced'
const eligibility = 'Open to all +2 graduates'

// Set this to your real organizing email once confirmed.
const contactEmail = ''

// Add real organizers here, e.g. { name: 'Jane Doe', role: 'Ideathon Lead', phone: '+977-98XXXXXXXX' }
const organizers: { name: string; role: string; phone: string }[] = []

// Add real links once your pages exist, e.g. instagram: 'https://instagram.com/paceacem'
const socials: { instagram?: string; facebook?: string; linkedin?: string } = {}

// ─────────────────────────────────────────────────────────────

export default function App() {
  const [track, setTrack] = useState<Track>('build')
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTrack, setModalTrack] = useState<Track | null>(null)

  useEffect(() => {
    const root = document.documentElement.style
    if (track === 'battle') {
      root.setProperty('--accent', 'var(--battle)')
      root.setProperty('--accent-dim', 'var(--battle-dim)')
      root.setProperty('--accent-glow', 'var(--battle-glow)')
    } else {
      root.setProperty('--accent', 'var(--build)')
      root.setProperty('--accent-dim', 'var(--build-dim)')
      root.setProperty('--accent-glow', 'var(--build-glow)')
    }
  }, [track])

  const openRegister = (t: Track | null = null) => {
    setModalTrack(t ?? track)
    setModalOpen(true)
  }

  return (
    <>
      <Navbar onRegisterClick={() => openRegister(null)} />

      <main>
        <Hero
          track={track}
          onTrackChange={setTrack}
          eventDates={eventDates}
          venue={venue}
          eligibility={eligibility}
          onPrimaryCta={() => openRegister(track)}
        />

        <TrackCards onRegister={(t) => openRegister(t)} registrationFee={registrationFee} />

        <Features />

        <FAQ />

        <Contact email={contactEmail} contacts={organizers} socials={socials} />
      </main>

      <Footer />

      <RegisterModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        preselected={modalTrack}
        formLinks={registrationLinks}
      />
    </>
  )
}
