import LinkIcon from '@mui/icons-material/Link';
import './project.css'

const Project = ({projectItem}) => {
    const {name, externalLink, description, demonstrates} = projectItem
    console.log(demonstrates)
    return (
        <main>
            <div className="template">
                <a href={externalLink} target="_blank" rel="noreferrer">
                    
                    <h4>{name} <LinkIcon size="small" className="icon" /></h4>
                </a>
            </div>
            <div className="demonstrates-container">
                {demonstrates.length > 0 && 
                    demonstrates.map(item =>
                        <span className="demonstrates">{item}</span>
                )}
            </div>
            <div className="details">
                {description}
            </div>
        </main>

    )
}

export default Project