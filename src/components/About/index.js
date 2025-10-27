import React from 'react'
import profilePic from '../../assets/images/profilePic.jpg'

// Skillset icons
import { IconContext } from 'react-icons'
import { DiDotnet, DiReact } from 'react-icons/di'
import { DiJavascript1 } from 'react-icons/di'
import { DiNodejs } from 'react-icons/di'
import { DiHtml5 } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'
import { DiPython } from 'react-icons/di'
import { DiGit } from 'react-icons/di'

const About = () => {
    return (
        <section className="about">
            <div className="about-pic">
                <div>
                    <h2 className="headline">Hi! I'm Valerie.</h2>
                    <h3>I'm a <span className="emph">web developer</span>, <span className="emph">technical communicator</span>, and <span className="emph">project manager.</span></h3>
                </div>
                <img src={profilePic} alt="Valerie headshot" />
            </div>
            <div>
                
                <hr/>
                <p>I have 16 years of experience in tech, finding success first as a technical writer and then as a software project manager. Software has been the focus of my career for over a decade, and pursuing my passion in web development is the natural next step in my career.</p>
            </div>
            <div style={{textAlign: 'center', marginTop: 20}}>
                <IconContext.Provider value={{ size: '3em '}} >
                    <DiCss3 />
                    <DiHtml5 />
                    <DiJavascript1 />
                    <DiPython />
                    <DiDotnet />
                    <DiReact />
                    <DiGit />
                    <DiNodejs />
                </IconContext.Provider>
                

            </div>
        </section>
    )
}

export default About