import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <nav>
            <ul>
                <li><NavLink to="/about">about</NavLink></li>
                <li><NavLink to="/portfolio">web dev</NavLink></li>
                <li><NavLink to="/writing">writing</NavLink></li>
                <li><NavLink to="/contact">contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav