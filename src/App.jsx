import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Story from './components/Story'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow--hidden">
      {/* What this does is that it makes the main element take the full height and width of the screen and prevent horizontal scrolling */}
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}

export default App