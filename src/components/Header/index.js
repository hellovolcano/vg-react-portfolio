import React, { useState, useEffect } from 'react'
import {useLocation } from 'react-router'

import MobileNav from '../MobileNav'
import './header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const location = useLocation()
        const [showNav, setShowNav] = useState(true)
        
        var pathName = location.pathname.split('/')[1]
        useEffect(() => {
            setShowNav(pathName.length !== 0)
            }, [pathName.length])
        console.log('path name: ' + pathName.length)

    return (
  <>
    {showNav && (
      <header>
        <div className="name">
          
          <NavLink to="/">
            <h1>Valerie Gleason</h1>
          </NavLink>
        </div>

        <div>
          <MobileNav />
        </div>
      </header>
    )}

    {/* rest of page */}
  </>
);
}

export default Header