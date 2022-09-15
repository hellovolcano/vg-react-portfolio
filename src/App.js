import './App.css';
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
  console.log(location.pathname.split('/'))

  const [isAbout, setIsAbout] = useState(location.pathname === '/about')
  const pathName = '/resume'
  useEffect(() => {
    setIsAbout(location.pathname === '/about')
}, [location.pathname])

console.log(isAbout)
  return (
    <div>
      {/* Adding one more wrapper to help push the footer */}
      <div className="body-wrapper">
        <Header />
        <div id="main-wrapper" className={isAbout ? ("about-content-wrapper") : ("main-content-wrapper")}>
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
