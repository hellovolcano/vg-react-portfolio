import './about.css'

// Skillset icons
import { IconContext } from 'react-icons'
import { DiDotnet, DiReact } from 'react-icons/di'
import { DiJavascript1 } from 'react-icons/di'
import { DiNodejs } from 'react-icons/di'
import { DiHtml5 } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'
import { DiPython } from 'react-icons/di'
import { DiGit } from 'react-icons/di'

const About = () => {
    return (
        <section>
                <p>
                    I would call myself full-service, but I'm not a gas station. Before I dive into who I am, let me tell you what I've done.
                </p>
                <ul className="list">
                    <li id="one">I've built the thing.</li>
                    <li id="two">I've written about how to use the thing.</li>
                    <li id="three">I've made sure the thing actually ships (on-time and within budget, thank you very much).</li>
                </ul>
                
<p>
I've worked inside enterprise systems, wrangled DevOps projects, built internal tools (hello instant client feedback), and shipped UI features that are out in the wild. To make it crystal clear: I love to build. More importantly, I love to build 
pretty and engaging things. Sometimes that's web apps; more often, if we're being honest, it's Dungeon Crawler Carl-themed stickers and tote bags. I'm a sucker for a pretty font and a good quote.
</p>
<p>
I understand process. I understand constraints. I understand what it takes to move from idea to live without everything catching on fire.
</p>
<p>
If you're building something you actually care about, I'm interested.

</p>
        </section>

    )
}

export default About