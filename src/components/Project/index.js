import React from 'react'
import Box from '@mui/material/Box'

const Project = ({projectItem}) => {
    const {name, githubUrl, deployedUrl, description, technologies, imgName} = projectItem

    return (
        // Wrapping each project in a box? Maybe
        <Box sx={{
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: 'antiquewhite',
            padding: 1,
        }
        }>
                <img className="portfolio-img" src={require(`../../assets/images/${imgName}`)} alt="screenshot of project" />
                <div className="project-wrapper">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <div className="project-link-wrapper">
                        <span className="project-links"><a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a></span>
                        <span className="project-links"><a href={deployedUrl} target="_blank" rel="noreferrer">Deployed</a></span>
                    </div>
                    {/* Map through the technologies used */}
                        <ul className="tech-ul">
                            {technologies.map((tech) => (
                                <li className="tech-li" key={tech}>{tech}</li>
                            ))}
                        </ul>
                    <div>

                    </div>
                </div>
        </Box>

    )
}

export default Project