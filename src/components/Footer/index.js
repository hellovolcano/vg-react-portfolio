import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import CodeIcon from '@mui/icons-material/Code';

const Footer = () => {
    return(
        <footer>
            <div>
                <div className="icons">
                    <a href="http://www.github.com/hellovolcano" target="_blank" rel="noreferrer"><GitHubIcon fontSize='large' /></a>
                    <a href="http://www.linkedin.com/in/valerie-gleason" target="_blank" rel="noreferrer"><LinkedInIcon fontSize='large' /></a>
                    <a href="https://www.codewars.com/users/valgleason" target="_blank" rel="noreferrer"><CodeIcon fontSize='large' /></a>
                    <a href="mailto:valerie.gleason@gmail.com"><AlternateEmailIcon fontSize='large' /></a>
                </div>
            <p>&copy; Valerie Gleason</p>
            </div>
            
        </footer>

    )
}

export default Footer