import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import DownloadIcon from '@mui/icons-material/Download'

const Resume = () => {
    return(
        <section>
            <div>
                <DownloadIcon fontSize='large' />
                <a href="http://www.google.com">Download Resume</a>
            </div>
            <div className="icons">
                <a href="http://www.github.com/hellovolcano" target="_blank" rel="noreferrer"><GitHubIcon fontSize='large' /></a>
                <a href="http://www.linkedin.com/in/valerie-gleason" target="_blank" rel="noreferrer"><LinkedInIcon fontSize='large' /></a>
                <a href="mailto:valerie.gleason@gmail.com"><AlternateEmailIcon fontSize='large' /></a>
            </div>
        </section>
    )
}

export default Resume