import React, {useState} from 'react'
import { PortfolioGrid } from '../PortfolioGrid';

const Portfolio = () => {
    const [projects] = useState([
        {
            name: 'Hippohonk',
            internalLink: 'hippohonk',
            externalLink: 'https://github.com/hellovolcano/hippohonk',
            description: 'Hippohonk is dedicated to finding and rating showcasing bands at SXSW Austin. Originally created with Ruby on Rails in 2011 and ported to PERN.',
            technologies: ['Postgres','Node.js','React.js','Material-UI','JavaScript','HTML','CSS', 'Express.js'],
            imgName: 'hippohonk.png'
        },
        {
            name: 'Find A Movie',
            internalLink: 'find-a-movie',
            externalLink: 'https://find-a-movie-5e830608c35b.herokuapp.com/',
            description: 'Quickly search for the movie you want to watch amonst multiple popular streaming services.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            imgName: 'iStreamuStream.png'
        },
        {
            name: 'Our 1907 House',
            externalLink: 'https://www.our1907house.com',
            internalLink: 'our-1907-house',
            description: 'Frontend only website for hosting information about a century home.',
            technologies: ['HTML', 'CSS','JavaScript','Node.js','Handlebars','MySQL'],
            imgName: 'mvc-blog.png'
        },
    ])

    return (
        <PortfolioGrid projects={projects} title="Web Dev Projects" />
        
    )
}

export default Portfolio    