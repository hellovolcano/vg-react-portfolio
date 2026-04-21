import { Grid } from "@mui/material"
import Project from "../Project"
import './portfoliogrid.css'
import { useEffect } from "react"

export const PortfolioGrid = ({projects, title}) => {
      useEffect(() => {
        document.body.style.backgroundColor = '#2a2a40';
        return () => { document.body.style.backgroundColor = ''; };
      }, []);

    return (
        <section className="portfolio-grid">
            <div className="portfolio-grid-heading-wrap">
                <h2 className="portfolio-grid-heading">{title}</h2>
            </div>
            <Grid container spacing={2} rowSpacing={4} direction='column'>
                {projects.map((project) => (
                    <Grid item xs={12} sm={12} md={12} lg={12} key={project.name}>
                        <div className="portfolio-project-card">
                            <Project projectItem={project} />
                        </div>
                    </Grid>
                ))}
            </Grid>
        </section>
    )
}