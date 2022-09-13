import React from 'react'

const Project = () => {
    const projects = [
        {
            name: 'Track Stream',
            githubUrl: 'https://github.com/hellovolcano/streaming-service-tracker',
            deployedUrl: 'https://shielded-thicket-83954.herokuapp.com/',
            description: 'Track Stream\'s purpose is to keep you notified of all the video streaming services you are subscribed too. The application will give you a visual reminder of how much you\'re spending on streaming services and when the renewal period starts again.',
            technologies: ['MySQL','JavaScript','ExpressJS','HTML5','CSS3']
        }
    ]

    return (
        <section>
                <img alt="screenshot of project" />
                <div>
                <h2>{projects[0].name}</h2>
                <p>{projects[0].description}</p>
                <div>
                    <a href={projects[0].githubUrl} target="_blank" rel="noreferrer">GitHub</a>
                    <a href={projects[0].deployedUrl} target="_blank" rel="noreferrer">Deployed</a>
                </div>
                </div>
        </section>
    )
}

export default Project