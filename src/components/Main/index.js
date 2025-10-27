import React from 'react'
import "../../assets/styles/grid.css"

const MainCard = () => {
    return (
        <section className="landing-page">
            <div className="grid-container">
                <div className="cell top-left">
                    <a href="/about">
                        <h2 className="links text-block">About</h2>
                    </a>
                </div>
                <div className="cell top-right">
                    <div className="text-block">
                        <h1>Valerie Gleason</h1>
                        <hr />
                        <h2>Technical Writer | Full-Stack Developer</h2>
                    </div>
                </div>
                <div className="cell bottom-left">
                    <a href="/contact">
                        <h2 className="links text-block">Contact</h2>
                    </a>
                </div>
                <div className="cell bottom-right">
                    <a href="/portfolio">
                        <h2 className="links text-block">Portfolio</h2>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default MainCard