import './App.css';
import {Routes, Route } from 'react-router'
import Header from '../src/components/Header'
import ContactForm from '../src/components/Contact'
import Resume from '../src/components/Resume'
import Portfolio from '../src/components/Portfolio'
import About from '../src/components/About'
import Footer from '../src/components/Footer'

function App() {
  return (
    <div>
      <Header />
      <div className="main-content-wrapper">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<ContactForm />} />
          </Routes>
        
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
