import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'

const Footer = () => {
    // Style for the footer
    const footerStyle = {
        backgroundColor: 'antiquewhite',
        // display: 'flex',
        // justifyContent: 'space-between',

    }

    return(
        <footer style={footerStyle}>
            <div>
                <div className="icons">
                    <a href="http://www.github.com/hellovolcano" target="_blank" rel="noreferrer"><GitHubIcon fontSize='large' /></a>
                    <a href="http://www.linkedin.com/in/valerie-gleason" target="_blank" rel="noreferrer"><LinkedInIcon fontSize='large' /></a>
                    <a href="mailto:valerie.gleason@gmail.com"><AlternateEmailIcon fontSize='large' /></a>
                </div>
            <p>&copy; Valerie Gleason</p>
            </div>
            
        </footer>

    )
}

export default Footer