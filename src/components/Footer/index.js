import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import CodeIcon from '@mui/icons-material/Code';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { NavLink } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return(
        <footer>
            <div>
                <div className="icons">
                    <a href="http://www.github.com/hellovolcano" target="_blank" rel="noreferrer"><GitHubIcon fontSize='medium' /></a>
                    <a href="http://www.linkedin.com/in/valerie-gleason" target="_blank" rel="noreferrer"><LinkedInIcon fontSize='medium' /></a>
                    <a href="https://www.codewars.com/users/valgleason" target="_blank" rel="noreferrer"><CodeIcon fontSize='medium' /></a>
                    <NavLink to="/contact"><ContactPageIcon fontSize='medium' /></NavLink>
                </div>
            <p>&copy; Valerie Gleason</p>
            </div>
            
        </footer>

    )
}

export default Footer