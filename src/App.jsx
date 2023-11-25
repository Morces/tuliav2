import Navbar from './APP/Components/Navbar'
import 'typeface-poppins';
import Footer2 from './APP/Components/Footer2';
import HeroSection from './APP/Components/Hero';
import About from './APP/Components/About';
import Contact from './APP/Components/Contact';



function App() {
  

  return (
    <div className="font-sans scroll-smooth">
      <Navbar />

      <HeroSection />

      <About />

      <Contact />

      <Footer2 />
      
    </div>
  )
}

export default App
