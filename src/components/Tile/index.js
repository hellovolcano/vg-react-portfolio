import './tile.css'

const Tile = ({label}) => {
    const title = label
    return (
        <div className="tile">
            <div className="title">{title}</div>
        </div>
    )
}

export default Tile