import { Card, CardContent } from '@mui/material'
import LaunchIcon from '@mui/icons-material/Launch';
import { NavLink } from 'react-router-dom';
import './project.css'

const Project = ({projectItem}) => {
    const {name, externalLink, internalLink, isExternalLink, description} = projectItem

    const showExternalIcon = isExternalLink === true;

    return (
        <Card>
            <CardContent className="card-link">
                <div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
                <div>
                {showExternalIcon ?
                    <a href={externalLink} target="_blank" rel="noreferrer">
                        Details <LaunchIcon fontSize='xsmall'/>
                    </a>
                    :
                    <NavLink to={internalLink}>
                        Details
                    </NavLink>
                    }
                </div>
            </CardContent>
        </Card>

    )
}

export default Project