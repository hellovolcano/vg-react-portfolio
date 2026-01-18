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
        color: 'rgb(255, 240, 240)',
        marginTop: 0,
        marginRight: 10
    }

    const liStyle = {
        listStyleType: 'none',
        padding: 10,
        textTransform: 'uppercase'
    }

    const mobileNav = {
        paddingInlineStart: 0
    }

    return(
        <div>
            <button style={buttonStyle} onClick={() => setState(true)}><MenuIcon fontSize="large" /> </button>
            
            <Drawer open={state} anchor={"right"} onClose={() => setState(false)}>
                
                <Box
                    sx={{ 
                        width: "auto",
                        minWidth: "400px",
                        height: "100%",
                        backgroundColor: 'darkslategray' }}
                    role="presentation"
                    onClick={() => setState(false)}
                    onKeyDown={() => setState(false)}
                    className="flex"
                    >
                    <ul style={mobileNav}>
                        <li style={liStyle}><NavLink to ="/about">about</NavLink></li>
                        <li style={liStyle}><NavLink to="/portfolio">portfolio</NavLink></li>
                        <li style={liStyle}><NavLink to="/writing">writing samples</NavLink></li>
                        <li style={liStyle}><NavLink to="/contact">contact</NavLink></li>
                    </ul>
                </Box>
                    
                
            </Drawer>
        </div>
        

    )
}

export default MobileNav