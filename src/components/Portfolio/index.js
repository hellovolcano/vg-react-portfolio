import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

const Portfolio = () => {
    return (
        <Grid container spacing={1}>
            <Grid xs={12} sm={6} md={4}>
                <div className="deleteMe">A Project</div>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
                <div className="deleteMe">A Project</div>
            </Grid>
        </Grid>
    )
}

export default Portfolio    