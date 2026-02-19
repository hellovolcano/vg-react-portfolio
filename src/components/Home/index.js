import Tile from '../Tile'
import './home.css'
import { NavLink } from 'react-router-dom'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import LooksIcon from '@mui/icons-material/Looks';
import { useEffect, useState, useRef } from 'react';
import About from '../About';
import Portfolio from '../Portfolio';

const Home = () => {

    const [visible, setVisible] = useState(false);
    const colors = [
        "#1e1e2f",
        "#2a2a40",
        "#3a1c71",
        "#ff6b6b",
        "#4ecdc4",
        "#f7b733",
    ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);


const useRandomBg = () => {
  const lastColorRef = useRef(null);

  const changeBackground = () => {
    // initialize once (first run) from current inline style if present
    const current = lastColorRef.current ?? document.body.style.backgroundColor;

    let next = current;
    let safety = 0;

    while (next === current && safety < 20) {
      next = colors[Math.floor(Math.random() * colors.length)];
      safety++;
    }

    lastColorRef.current = next;
    document.body.style.backgroundColor = next;
    console.log("event fired", { current, next });
  };

  return changeBackground;
};
    const changeBackground = useRandomBg();

    const scrollToSection = () => {
        document
            .getElementById("about-section")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }

    return (
        <main className="layout">
            <div className="container">
                <h1 className="big-name">
                    <span>Valerie</span>
                    <span>Gleason</span>
                </h1>
                <div className="subheading">
                    <span className="weirdo">
                        MAKE
                        <span className="not-weirdo">R</span>
                    </span> 
                    <span className="divider">
                        <LooksIcon fontSize='small' />
                    </span>
                    <span className="weirdo">
                         WEIRD
                         <span className="not-weirdo">O</span>
                    </span>
                </div>
                <div>
                    <div className="weird-button-wrap">
                        <button 
                            id="weird-button"
                            className={visible ? "visible" : ""}
                            onMouseEnter={changeBackground}
                            onClick={scrollToSection}>
                            <KeyboardDoubleArrowDownIcon fontSize='large'/>
                        </button>
                    </div>
                </div>
                {/* <div className="navigation">
                    <NavLink to="/about"><Tile label="About"></Tile></NavLink>
                    <NavLink to="/portfolio"><Tile label="Web Dev"></Tile></NavLink>
                    <NavLink to="/writing"><Tile label="Writing"></Tile></NavLink>
                </div> */}
            </div>
            <div id="about-section" className="section about">
                <About />
            </div>
            <div className="section web">
                <Portfolio/>
            </div>
        </main>
    )
}

export default Home