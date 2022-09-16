import {Routes, Route, useLocation } from 'react-router'
import Header from '../src/components/Header'
import ContactForm from '../src/components/Contact'
import Resume from '../src/components/Resume'
import Portfolio from '../src/components/Portfolio'
import About from '../src/components/About'
import Footer from '../src/components/Footer'
import { useEffect, useState} from 'react'

function App() {

  const location = useLocation()
  console.log("0" + location.pathname.split('/')[0])
  console.log("1" + location.pathname.split('/')[1])

  const [isAbout, setIsAbout] = useState(true)

  useEffect(() => {
    setIsAbout(location.pathname.split('/')[1] === 'about')
}, [location.pathname])

  return (
    <div>
      {/* Adding one more wrapper to help push the footer */}
      <div className={isAbout ? ("about-content-wrapper") : ("body-wrapper")}>
        <Header />
        {/* <div id="main-wrapper" className={isAbout ? ("about-content-wrapper") : ("main-content-wrapper")}> */}
        <div id="main-wrapper" className="main-content-wrapper">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/vg-react-portfolio" element={<About />} />
              <Route path="about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="resume" element={<Resume />} />
              <Route path="contact" element={<ContactForm />} />
            </Routes>
          
        </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
