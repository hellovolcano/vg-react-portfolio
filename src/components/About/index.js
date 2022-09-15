import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
    return (
        <section className="about">
            <h2>I'm Valerie.</h2>
            <h3>I'm a full-stack web developer.</h3>
            <hr/>
            <p>I have 14 years of experience in tech, finding success first as a technical writer and then as a software project manager. To put it another way: software has been the focus of my career for over a decade, and pursuing my passion in web development is the natural next step in my career.</p>
            <p>Throughout my career, I've learned two things: I love collaborating with others, and I love troubleshooting technical problems. I can't wait to put these skills to use! Think we'd be a good match? <Link to="/contact">Reach out!</Link></p>
        </section>
    )
}

export default About