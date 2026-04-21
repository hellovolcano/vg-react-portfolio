import { useEffect } from 'react';
import './justfun.css';

const JustFun = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#3a1c71';
    return () => { document.body.style.backgroundColor = ''; };
  }, []);

  return (
    <section className="portfolio-grid fun-page">
      <div className="portfolio-grid-heading-wrap">
        <h2 className="portfolio-grid-heading">Just Fun</h2>
      </div>
      <h3>Coming Soon</h3>
        <p className="fun-placeholder">
          Woodworking, side projects, and other things I make for fun.
        </p>
    </section>
  );
};

export default JustFun;
