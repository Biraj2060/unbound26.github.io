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
// EVENT CONFIG — update these before publishing.
// ─────────────────────────────────────────────────────────────

// TODO: replace with the real Google Form links for each track.
const registrationLinks = {
  build: 'https://forms.gle/REPLACE_WITH_IDEATHON_FORM',
  battle: 'https://forms.gle/REPLACE_WITH_ESPORTS_FORM',
}

// TODO: update fees before publishing.
const registrationFee = {
  build: 'NPR 500 / team',
  battle: 'NPR 300 / player',
}

// TODO: confirm final dates and venue.
const eventDates = 'Aug 21–22, 2026'
const venue = 'PACE × ACEM Campus'
const eligibility = 'Open to all +2 graduates'

const contactEmail = 'unbound26@paceacem.org'

// TODO: replace with real organizer names and numbers.
const organizers = [
  { name: 'Organizer Name', role: 'Ideathon Lead', phone: '+977-98XXXXXXXX' },
  { name: 'Organizer Name', role: 'E-Sports Lead', phone: '+977-98XXXXXXXX' },
]

// TODO: replace with real social links, or remove any you don't use.
const socials = {
  instagram: 'https://instagram.com/paceacem',
  facebook: 'https://facebook.com/paceacem',
  linkedin: undefined,
}

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
