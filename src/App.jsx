import useReveal from './hooks/useReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BrandIntro from './components/BrandIntro'
import Collections from './components/Collections'
import BespokeSection from './components/BespokeSection'
import WhyHeaven from './components/WhyHeaven'
import Showroom from './components/Showroom'
import BrandStory from './components/BrandStory'
import Timeline from './components/Timeline'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import MobileBar from './components/MobileBar'

export default function App() {
  useReveal()

  return (
    <div className="min-h-screen bg-ivory-50 text-ink-800 antialiased">
      <Navbar />
      <main>
        <Hero />
        <BrandIntro />
        <Collections />
        <BespokeSection />
        <WhyHeaven />
        <Showroom />
        <BrandStory />
        <Timeline />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBar />
    </div>
  )
}
