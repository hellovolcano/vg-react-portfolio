import {Routes, Route, useLocation } from 'react-router'
import Header from '../src/components/Header'
import ContactForm from '../src/components/Contact'
import Resume from '../src/components/Resume'
import Portfolio from '../src/components/Portfolio'
import About from '../src/components/About'
import Footer from '../src/components/Footer'
import { useEffect, useState} from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import MainCard from './components/Main'
  
function App() {

  const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#303b47',
      },
      secondary: {
        main: '#66454f',
      },
      highlight: {
        main: '#666445',
      },
      white: {
        main: 'antiquewhite',
      },
      error: {
        main: '#66454f',
      },
    },
    overrides: {
      MuiButton: {
        root: {
          background: 'linear-gradient(45deg, #66454f 30%, #303b47 90%)',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          height: 48,
          padding: '0 30px',
        },
      },
    },
    typography: {
      h1: {
        fontFamily: 'Amatic SC',
        fontSize: '6.2rem',
      },
      h2: {
        fontFamily: 'Amatic SC',
        fontSize: '3.7rem',
      },
      body1: {
        fontFamily: 'Poppins',
      },
      body2: {
        fontFamily: 'Poppins',
      },
      button: {
        fontFamily: 'Poppins',
      },
      caption: {
        fontFamily: 'Poppins',
      },
      overline: {
        fontFamily: 'Poppins',
      },
      subtitle2: {
        fontFamily: 'Poppins',
      },
      subtitle1: {
        fontFamily: 'Poppins',
      },
      h6: {
        fontFamily: 'Amatic SC',
        fontSize: '1.6rem',
      },
      h5: {
        fontFamily: 'Amatic SC',
        fontSize: '1.7rem',
      },
      h4: {
        fontFamily: 'Amatic SC',
        fontSize: '2.3rem',
      },
      h3: {
        fontFamily: 'Amatic SC',
        fontSize: '3.2rem',
      },
    },
  })


  const location = useLocation()
  const [isAbout, setIsAbout] = useState(true)

  useEffect(() => {
    setIsAbout(location.pathname.split('/')[1] === '' )
}, [location.pathname])



  return (
    <ThemeProvider theme={theme}>
      {/* Adding one more wrapper to help push the footer */}
      <div className={isAbout ? ("about-content-wrapper") : ("body-wrapper")}>
        {!isAbout && <Header />}
        {/* <div id="main-wrapper" className={isAbout ? ("about-content-wrapper") : ("main-content-wrapper")}> */}
        <div id="main-wrapper" className="main-content-wrapper">
            <Routes>
              <Route path="/" element={<MainCard />} />
              <Route path="/vg-react-portfolio" element={<About />} />
              <Route path="about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="resume" element={<Resume />} />
              <Route path="contact" element={<ContactForm />} />
            </Routes>
          
        </div>
      </div>
      <Footer />
    </ThemeProvider>
    
  );
}

export default App;
