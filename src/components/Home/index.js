import Tile from '../Tile'
import './home.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <main className="layout">
            <div className="container">
                <h1 className="big-name">
                    Valerie Gleason
                </h1>
                <div className="navigation">
                    <NavLink to="/about"><Tile label="About"></Tile></NavLink>
                    <NavLink to="/portfolio"><Tile label="Web Dev"></Tile></NavLink>
                    <NavLink to="/writing"><Tile label="Writing"></Tile></NavLink>
                </div>
            </div>
        </main>
    )
}

export default Home