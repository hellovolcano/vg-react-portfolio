import React from 'react'
import Box from '@mui/material/Box'

const Project = ({projectItem}) => {
    const {name, githubUrl, deployedUrl, technologies, imgName} = projectItem

    return (
        // Wrapping each project in a box? Maybe
        <Box className='proj-container'>
                <img className="portfolio-img" src={require(`../../assets/images/${imgName}`)} alt="screenshot of project" />
                <div className="project-wrapper">
                    <h3>{name}</h3>
                    {/* <p>{description}</p> */}
                    {/* Map through the technologies used */}
                    <ul className="tech-ul">
                            {technologies.map((tech) => (
                                <li className="tech-li" key={tech}>{tech}</li>
                            ))}
                        </ul>
                    <div className="project-link-wrapper">
                        <span className="project-links"><a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a></span>
                        {deployedUrl && <span className="project-links"><a href={deployedUrl} target="_blank" rel="noreferrer">Deployed</a></span>}
                    </div>
                    
                    <div>

                    </div>
                </div>
        </Box>

    )
}

export default Project