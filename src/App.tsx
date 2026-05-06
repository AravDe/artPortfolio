import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Process from './components/Process'
import Gallery from './components/Gallery'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      <Hero />
      <Process />
      <Gallery />
      <About />
      <Footer />
    </div>
  )
}
