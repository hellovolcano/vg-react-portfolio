import "./home.css";
import { useNavigate } from "react-router-dom";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import LooksIcon from "@mui/icons-material/Looks";
import { useEffect, useState, useRef, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import About from "../About";
import PolyCard from "../PolyCard";

/** --- Stable seeded RNG (so letters don't change each render) --- */
function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildVectors(text, seed) {
  const rng = mulberry32(seed);
  return [...text].map((ch) => {
    if (ch === " ") return { isSpace: true, x: 0, y: 0, r: 0, s: 1 };

    // Tasteful drift (tweak these later)
    const dist = 10 + rng() * 45; // 10..55px
    const x = (rng() - 0.5) * dist * 2.2;
    const y = (rng() - 0.5) * dist * 1.2;
    const r = (rng() - 0.5) * 10; // -5..5deg
    const s = 1 + (rng() - 0.5) * 0.03;
    return { isSpace: false, x, y, r, s };
  });
}

/** One letter = one place where hooks are used (legal) */
function Letter({ ch, vec, explode }) {
  const x = useTransform(explode, (p) => p * vec.x);
  const y = useTransform(explode, (p) => p * vec.y);
  const rot = useTransform(explode, (p) => p * vec.r);
  const sc = useTransform(explode, (p) => 1 + p * (vec.s - 1));

  // Combine into a single CSS transform string
  const transform = useMotionTemplate`translate(${x}px, ${y}px) rotate(${rot}deg) scale(${sc})`;

  return (
    <motion.span
      className={`letter ${vec.isSpace ? "space" : ""}`}
      style={{ transform }}
    >
      {ch === " " ? "\u00A0" : ch}
    </motion.span>
  );
}

const hexToRgb = (hex) => {
  const h = hex.replace("#", "").trim();
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const int = parseInt(full, 16);
  return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 };
};

const lerp = (a, b, t) => a + (b - a) * t;

const lerpColor = (c1, c2, t) => {
  const a = hexToRgb(c1);
  const b = hexToRgb(c2);
  return `rgb(${Math.round(lerp(a.r, b.r, t))}, ${Math.round(lerp(a.g, b.g, t))}, ${Math.round(lerp(a.b, b.b, t))})`;
};

const colors = ["#2a2a40", "#3a1c71", "#ff6b6b", "#4ecdc4", "#f7b733"];

function AnimatedLine({ text, explode, className = "", seed = 1 }) {
  const vectors = useMemo(() => buildVectors(text, seed), [text, seed]);

  return (
    <span className={`name-line ${className}`}>
      {[...text].map((ch, i) => (
        <Letter key={`${ch}-${i}`} ch={ch} vec={vectors[i]} explode={explode} />
      ))}
    </span>
  );
}

const Home = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [showFill, setShowFill] = useState(false);


  const revealFill = () => {
    setShowFill(true);
  };

  // --- Scroll-explode controls ---
  const nameStackRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: nameStackRef,
    offset: ["start start", "end start"],
  });

  const explodeBase = useTransform(scrollYProgress, [0, 0.9], [0, 1], {
    clamp: true,
  });

  // Dampen explosion during programmatic smooth scroll (button click)
  const [dampen, setDampen] = useState(1);
  const explode = useTransform(explodeBase, (p) => p * dampen);

  // Keep the last color we set (used for hover and for initializing scroll blending)
  const lastColorRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll-based background color shifting
  useEffect(() => {
    let rafId = null;

    const apply = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      const progress =
        maxScroll > 0 ? Math.min(Math.max(y / maxScroll, 0), 1) : 0;

      const segments = Math.max(colors.length - 1, 1);
      const scaled = progress * segments;
      const index = Math.min(Math.floor(scaled), colors.length - 2);
      const t = scaled - index;

      const blended = lerpColor(colors[index], colors[index + 1], t);

      lastColorRef.current = blended;
      document.body.style.backgroundColor = blended;

      rafId = null;
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToSection = (id) => () => {
    // make scroll-button usage "almost unnoticeable" for the explode effect
    setDampen(0.15);

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

    window.setTimeout(() => setDampen(1), 900);
  };

  return (
    <main className="layout">
      <div className="container">
        <div className="name-stack" ref={nameStackRef}>
          <h1 className="sr-only">Valerie Gleason</h1>

          <h1 className="big-name outline" aria-hidden="true">
            <AnimatedLine text="Valerie" explode={explode} seed={111} />
            <AnimatedLine text="Gleason" explode={explode} seed={222} className="gleason" />
          </h1>

          <h1
            className={`big-name fill ${showFill ? "visible" : ""}`}
            aria-hidden="true"
          >
            <AnimatedLine text="Valerie" explode={explode} seed={111} />
            <AnimatedLine text="Gleason" explode={explode} seed={222} className="gleason" />
          </h1>
        </div>

        <div className="subheading">
          <span className="weirdo">
            MAKE
            <span className="not-weirdo">R</span>
          </span>
          <span className="divider">
            <LooksIcon fontSize="small" />
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
              onMouseEnter={revealFill}
              onClick={scrollToSection("about-section")}
            >
              <KeyboardDoubleArrowDownIcon fontSize="large" />
            </button>
          </div>
        </div>
      </div>

      <section className="about" id="about-section">
        <div className="headline-wrapper">
          <h2 className="headline" lang="es">
            Viva la revolucion, Carl!
          </h2>
          <h3 className="credit">-Princess Donut</h3>
        </div>
        <div className="about-panel-wrap">
          <div className="about-panel">
            <About />
            <PolyCard
              as="button"
              bg="#f7b733"
              width="fit-content"
              rotate="0.5deg"
              className="cta"
              onClick={scrollToSection("portfolio")}
              style={{ "--poly-padding": "1rem 1.5rem" }}
            >
              Explore my work
            </PolyCard>
          </div>
        </div>
      </section>

        <div className="headline-wrapper but-white">
            <h2>Things I've Made</h2>
        </div>
      <section className="portfolio" id="portfolio">
        
        <PolyCard
          as="button"
          bg="#ff6b6b"
          width="fit-content"
          rotate="-0.4deg"
          className="cta"
          onClick={() => navigate("/portfolio")}
          style={{ "--poly-padding": "4rem 5rem" }}
        >
          <h1>WEB</h1>
          <p className="card-summary">full-stack web projects</p>
        </PolyCard>

        <PolyCard
          as="button"
          bg="#3a1c71"
          width="fit-content"
          rotate="1deg"
          className="cta"
          onClick={() => navigate("/writing")}
          style={{ "--poly-padding": "4rem 5rem" }}
        >
          <h1>UX</h1>
          <p className="card-summary">technical writing samples</p>
        </PolyCard>

        <PolyCard
          as="button"
          bg="#4ecdc4"
          width="fit-content"
          rotate=".5deg"
          className="cta"
          onClick={() => navigate("/fun")}
          style={{ "--poly-padding": "4rem 5rem" }}
        >
          <h1>Just fun</h1>
          <p className="card-summary">coming soon</p>
        </PolyCard>
      </section>
    </main>
  );
};

export default Home;