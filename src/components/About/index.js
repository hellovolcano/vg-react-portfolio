import './about.css'

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
            <div>
                <h2 className="headline">Hi! I'm Valerie.</h2>
                <p>I'm an <span className="emph">engineering-focused technical writer</span> with hands-on software development experience.</p>
                <p>
                    I spent the first seven years of my career as a technical writer, writing about everything from application and driver software to internal tools and engineering processes. 
                    Across roles, my focus has always been to improve user experience.
                </p>
                <p>
                    In conjunction with my development work, I have continued to evolve my technical writing skill set, including:                    <ul>
                        <li>Designing and implementing a <span className="emph">YAML validation tool in Python</span> to improve configuration correctness and consistency.</li>
                        <li>Authoring <span className="emph">Markdown-based</span> specifications and internal documentation used by engineering teams.</li>
                        <li>Documenting a <span className="emph">REST API using OpenAPI</span> and publishing a <span className="epmh">docs-as-code site with Docusaurus</span>.</li>
                    </ul>
                </p>
                <p>
                    I am seeking engineering-focused technical writing roles where strong collaboration, modern tooling, and continuous improvement are core to how teams work.                </p>
            </div>
            <div style={{textAlign: 'center', marginTop: 30}}>
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