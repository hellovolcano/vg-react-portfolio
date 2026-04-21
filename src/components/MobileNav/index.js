import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu';
import './mobilenav.css'

const MobileNav = () => {
    const [state, setState] = useState(false)

    return(
        <div>
            <button className="mobile-nav-toggle" onClick={() => setState(true)}>
                <MenuIcon fontSize="large" />
            </button>

            <Drawer open={state} anchor={"right"} onClose={() => setState(false)}>
                <Box
                    sx={{
                        width: "90vw",
                        maxWidth: "420px",
                        height: "100%",
                        backgroundColor: '#0d0d0d',
                    }}
                    role="presentation"
                    onClick={() => setState(false)}
                    onKeyDown={() => setState(false)}
                >
                    <ul className="mobile-nav-list">
                        <li className="mobile-nav-item"><NavLink to="/portfolio">portfolio</NavLink></li>
                        <li className="mobile-nav-item"><NavLink to="/writing">writing samples</NavLink></li>
                        <li className="mobile-nav-item"><NavLink to="/fun">just fun</NavLink></li>
                        <li className="mobile-nav-item"><NavLink to="/contact">contact</NavLink></li>
                    </ul>
                </Box>
            </Drawer>
        </div>
    )
}

export default MobileNav
