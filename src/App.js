import {Routes, Route, useLocation } from 'react-router'
import Header from '../src/components/Header'
import ContactForm from '../src/components/Contact'
import Resume from '../src/components/Resume'
import Portfolio from '../src/components/Portfolio'
import About from '../src/components/About'
import Footer from '../src/components/Footer'
import Home from '../src/components/Home'
import { useEffect, useState} from 'react'
import Writing from './components/Writing'
import { FindAMovie } from './components/Portfolio/find-a-movie'
  
function App() {

  const location = useLocation()
  const [isAbout, setIsAbout] = useState(true)

  useEffect(() => {
    setIsAbout(location.pathname.split('/')[1] !== 'resume' )
}, [location.pathname])



  return (
    <div className="tile-bg shimmer glossy">
      {/* Adding one more wrapper to help push the footer */}
      <div className={isAbout ? ("about-content-wrapper") : ("body-wrapper")}>
        <Header />
        {/* <div id="main-wrapper" className={isAbout ? ("about-content-wrapper") : ("main-content-wrapper")}> */}
        <div id="main-wrapper" className="main-content-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vg-react-portfolio" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/writing" element={<Writing />} />
              <Route path="resume" element={<Resume />} />
              <Route path="contact" element={<ContactForm />} />
              <Route path="portfolio/find-a-movie" element={<FindAMovie />} />
            </Routes>
          
        </div>
      </div>
      <Footer />
      </div>
    
  );
}

export default App;
