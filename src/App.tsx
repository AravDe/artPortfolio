import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Process from './components/Process'
import Collections from './components/Collections'
import About from './components/About'
import Footer from './components/Footer'
import SiteBackground from './components/SiteBackground'

export default function App() {
  return (
    <div className="bg-transparent min-h-screen relative z-0">
      <SiteBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Process />
        <Collections />
        <About />
        <Footer />
      </div>
    </div>
  )
}
