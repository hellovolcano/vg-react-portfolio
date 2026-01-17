import { Grid } from "@mui/material"
import Project from "../Project"

export const PortfolioGrid = ({projects, title}) => {

    return (
        <section>
            <h2>{title}</h2>
                <Grid container spacing={2} rowSpacing={4} direction='column'>
                {projects.map((project) => (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Project key={project.name} projectItem={project} />
                    </Grid>
                )
                )}
            </Grid>
        </section>
    )
}