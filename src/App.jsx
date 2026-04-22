import { Route, BrowserRouter as Router, Routes  } from "react-router-dom"
import HeroSection from "./pages/Hero"
import Navbar from "./component/Navbar"
import Aboutus from "./pages/Aboutus"
import Ribbons from './component/Ribbons';
import Projects from "./pages/Projects"
import Skills from "./pages/Skill";
import Contact from "./pages/Contact";


function App() {
  

  return (
    
  <>
  <Router>


{/* <div style={{ height: '500px', position: 'relative', overflow: 'hidden'}}> */}
  <Ribbons
    baseThickness={30}
    colors={["#5227FF"]}
    speedMultiplier={0.5}
    maxAge={500}
    enableFade={false}
    enableShaderEffect={false}
  />
{/* </div> */}
   
    
      <Navbar />
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  </>
  )
}

export default App
