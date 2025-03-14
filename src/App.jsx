import About from './component/about'
import Features from './component/Features'
import Hero from './component/hero'
import Navbar from './component/Navbar'
import Story from './component/Story'
import Footer from './component/Footer'
import Contact from './component/Contact'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden '>
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
