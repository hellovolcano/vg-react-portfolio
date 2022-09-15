import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu';

const MobileNav = () => {
    const [state, setState] = useState(false)

    const buttonStyle = {
        background: 'none',
        border: 'none',
        color: 'antiquewhite',
        marginTop: 20,
        marginRight: 10
    }

    const liStyle = {
        listStyleType: 'none',
        padding: 10,
        textTransform: 'uppercase'
    }

    return(
        <div>
            <button style={buttonStyle} onClick={() => setState(true)}><MenuIcon fontSize="large" /> </button>
            
            <Drawer open={state} anchor={"top"} onClose={() => setState(false)}>
                <Box
                    sx={{ 
                        width: "auto",
                        backgroundColor: 'antiquewhite' }}
                    role="presentation"
                    onClick={() => setState(false)}
                    onKeyDown={() => setState(false)}
                    >
                    <ul>
                        {/* TODO: Pull this list into a separate component to be shared between desktop nav and mobile nav */}
                        <li style={liStyle}><NavLink to ="/about">about</NavLink></li>
                        <li style={liStyle}><NavLink to="/portfolio">portfolio</NavLink></li>
                        <li style={liStyle}><NavLink to="/resume">resume</NavLink></li>
                        <li style={liStyle}><NavLink to="/contact">contact</NavLink></li>
                    </ul> 
                </Box>
            </Drawer>
        </div>
        

    )
}

export default MobileNav