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

                <p>
                    I'm a <span className="emph">web-focused software developer and content engineer</span> with a background in
                    technical writing and a strong emphasis on user experience.
                </p>

                <p>
                    I began my career as a technical writer, spending several years documenting application and driver software,
                    internal tools, and engineering processes. Across roles, my work has consistently focused on helping users understand and effectively use complex systems.
                </p>

                <p>
                    Over time, my role expanded into hands-on software development. Today, I build and maintain user-facing web
                    features, contribute to design systems, and work closely with designers and engineers to translate
                    requirements and designs into well-crafted interfaces. I'm especially interested in the intersection of
                    UI development, content, and developer experience.
                </p>

                <p>
                    Alongside my development work, I continue to practice content engineering and technical communication,
                    including:
                    <ul>
                        <li>
                            Designing and implementing a <span className="emph">Python-based YAML validation tool</span> to improve
                            configuration correctness and consistency.
                        </li>
                        <li>
                            Authoring <span className="emph">Markdown-based</span> specifications and internal documentation used
                            by engineering teams.
                        </li>
                        <li>
                            Documenting <span className="emph">REST APIs using OpenAPI</span> and publishing
                            <span className="emph"> docs-as-code sites with Docusaurus</span>.
                        </li>
                    </ul>
                </p>

                <p>
                    I’m drawn to roles that value strong collaboration, modern tooling, and thoughtful problem-solving—
                    particularly in <span className="emph">web development</span>, <span className="emph">content engineering</span>,
                    and <span className="emph">developer experience</span>–focused teams.
                </p>
            </div>

            <div style={{ textAlign: 'center', marginTop: 30 }}>
                <IconContext.Provider value={{ size: '3em ' }}>
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