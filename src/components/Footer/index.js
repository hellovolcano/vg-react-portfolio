import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'

const Footer = () => {
    // Style for the footer
    const footerStyle = {
        background: 'antiquewhite',
        // display: 'flex',
        // justifyContent: 'space-between',
        width: 1,
        padding: 40

    }

    return(
        <footer style={footerStyle}>
            <div className="icons">
                <a href="http://www.github.com/hellovolcano" target="_blank" rel="noreferrer"><GitHubIcon fontSize='large' /></a>
                <a href="http://www.linkedin.com/in/valerie-gleason" target="_blank" rel="noreferrer"><LinkedInIcon fontSize='large' /></a>
                <a href="mailto:valerie.gleason@gmail.com"><AlternateEmailIcon fontSize='large' /></a>
            </div>
        </footer>

    )
}

export default Footer