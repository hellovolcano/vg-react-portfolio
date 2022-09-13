import React, {useState} from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Project from '../Project'

const Portfolio = () => {
    const [projects] = useState([
        {
            name: 'Track Stream',
            githubUrl: 'https://github.com/hellovolcano/streaming-service-tracker',
            deployedUrl: 'https://shielded-thicket-83954.herokuapp.com/',
            description: 'Track Stream\'s purpose is to keep you notified of all the video streaming services you are subscribed too. The application will give you a visual reminder of how much you\'re spending on streaming services and when the renewal period starts again.',
            technologies: ['MySQL','JavaScript','ExpressJS','HTML5','CSS3'],
            imgName: 'trackStream.png'
        },
        {
            name: 'iStream, uStream',
            githubUrl: 'http://www.github.com/hellovolcano/random-movie-recs',
            deployedUrl: 'https://hellovolcano.github.io/random-movie-recs',
            description: 'Quickly search for the movie you want to watch amonst multiple popular streaming services.',
            technologies: ['HTML5', 'CSS3', 'JavaScript'],
            imgName: 'iStreamuStream.png'
        }
    ])

    return (
        <Grid container spacing={2}>
            {projects.map((project) => (
                <Grid xs={12} sm={12} md={6} lg={4}>
                    <Project projectItem={project} />
                </Grid>
            )
            )}

            {/* 
                <div className="deleteMe">A Project</div>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
                <div className="deleteMe">A Project</div>
            </Grid> */}
        </Grid>
    )
}

export default Portfolio    