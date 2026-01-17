import React, {useState} from 'react'
import { PortfolioGrid } from '../PortfolioGrid';

const Portfolio = () => {
    const [projects] = useState([
        {
            name: 'Hippohonk',
            externalLink: 'https://github.com/hellovolcano/hippohonk',
            isExternalLink: true,
            description: 'Hippohonk is dedicated to finding and rating showcasing bands at SXSW Austin. Originally created with Ruby on Rails in 2011 and ported to PERN.',
            technologies: ['Postgres','Node.js','React.js','Material-UI','JavaScript','HTML','CSS', 'Express.js'],
            imgName: 'hippohonk.png'
        },
        {
            name: 'Find A Movie',
            internalLink: 'find-a-movie',
            isExternalLink: false,
            description: 'Quickly search for the movie you want to watch amonst multiple popular streaming services.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            imgName: 'iStreamuStream.png'
        },
        {
            name: 'Our 1907 House',
            externalLink: 'https://www.our1907house.com',
            isExternalLink: true,
            description: 'CMS-style blog that leverages Handlebars as a template engine, and Sequelize as an ORM.',
            technologies: ['HTML', 'CSS','JavaScript','Node.js','Handlebars','MySQL'],
            imgName: 'mvc-blog.png'
        },
    ])

    return (
        <PortfolioGrid projects={projects} title="Web Dev Projects" />
        
    )
}

export default Portfolio    