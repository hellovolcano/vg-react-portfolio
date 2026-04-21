import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import MobileNav from '../MobileNav'
import './header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const location = useLocation()
    const isHome = location.pathname.split('/')[1].length === 0
    const [scrolledPastHero, setScrolledPastHero] = useState(false)

    useEffect(() => {
        if (!isHome) return;

        const check = () => setScrolledPastHero(window.scrollY >= window.innerHeight * 0.9);
        check();
        window.addEventListener('scroll', check, { passive: true });
        return () => window.removeEventListener('scroll', check);
    }, [isHome]);

    const showNav = !isHome || scrolledPastHero;

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
        </>
    );
}

export default Header
