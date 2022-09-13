import React from 'react'
import Box from '@mui/material/Box'

const Project = ({projectItem}) => {
    const {name, githubUrl, deployedUrl, description, technologies, imgName} = projectItem

    return (
        // Wrapping each project in a box? Maybe
        <Box sx={{
            boxShadow: 2,
        }
        }>
                <img className="portfolio-img" src={require(`../../assets/images/${imgName}`)} alt="screenshot of project" />
                <div className="project-wrapper">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <div>
                        <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
                        <a href={deployedUrl} target="_blank" rel="noreferrer">Deployed</a>
                    </div>
                    {/* Map through the technologies used */}
                        <ul className="tech-ul">
                            {technologies.map((tech) => (
                                <li className="tech-li">{tech}</li>
                            ))}
                        </ul>
                    <div>

                    </div>
                </div>
        </Box>

    )
}

export default Project