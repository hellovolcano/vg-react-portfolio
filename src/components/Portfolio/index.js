import React, {useState} from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Project from '../Project'

const Portfolio = () => {
    const [projects] = useState([
        {
            name: 'Track Stream',
            githubUrl: 'https://github.com/hellovolcano/streaming-service-tracker',
            deployedUrl: 'https://shielded-thicket-83954.herokuapp.com/',
            description: 'Track Stream track your video streaming services subscriptions to help you visualize your spending and manage your budget.',
            technologies: ['MySQL','JavaScript','ExpressJS','HTML','CSS'],
            imgName: 'trackStream.png'
        },
        {
            name: 'iStream, uStream',
            githubUrl: 'http://www.github.com/hellovolcano/random-movie-recs',
            deployedUrl: 'https://hellovolcano.github.io/random-movie-recs',
            description: 'Quickly search for the movie you want to watch amonst multiple popular streaming services.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            imgName: 'iStreamuStream.png'
        },
        {
            name: 'The Tech Blog',
            githubUrl: 'https://github.com/hellovolcano/sparky-tech-blog',
            deployedUrl: 'https://cryptic-forest-67933.herokuapp.com/',
            description: 'CMS-style blog that leverages Handlebars as a template engine, and Sequelize as an ORM.',
            technologies: ['HTML', 'CSS','JavaScript','Node.js','Handlebars','MySQL'],
            imgName: 'mvc-blog.png'
        },
        {
            name: 'Weather Dashboard',
            githubUrl: 'https://github.com/hellovolcano/weather-dashboard',
            deployedUrl: 'Weather Dashboard',
            description: 'Weather dashboard leverages the Open Weather API to show you weather conditions for your city.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            imgName: 'weather-dashboard.png'
        }
    ])

    return (
        <section>
            <h2>Portfolio</h2>
            <Grid container spacing={2} rowSpacing={4}>
            {projects.map((project) => (
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Project key={project.name} projectItem={project} />
                </Grid>
            )
            )}
        </Grid>
        </section>
        
    )
}

export default Portfolio    