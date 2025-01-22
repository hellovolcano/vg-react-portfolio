import React, { useState, useEffect } from 'react'
import Nav from '../Nav'
import MobileNav from '../MobileNav'

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 700)
    
    const updateWindow = () => {
        setIsMobile(window.innerWidth < 700)
    }

    useEffect(() => {
        window.addEventListener('resize', updateWindow)
        return () => window.removeEventListener('resize', updateWindow)
    })

    return(
        <header>
                {isMobile ? (
                    <MobileNav /> ) : (<Nav />)
                }
                
            
        </header>
    )
}

export default Header