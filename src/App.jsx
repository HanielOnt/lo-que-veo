import './app.css'
import { Footer } from './components/Footer'
import MainSection from './components/MainSection'
import Navbar from './components/Navbar'

function App() {


  return (
    <section className="w-full h-svh flex flex-col justify-evenly content-center">
      <Navbar />
      <MainSection />
      <Footer />
    </section>
  )
}

export default App
