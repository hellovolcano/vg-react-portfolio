import { useState } from "react"
import { PortfolioGrid } from "../PortfolioGrid"
const Writing = () => {
    const [projects] = useState([
        {
            name: "Hippohonk Help",
            internalLink: "",
            isExternalLink: true,
            externalLink: "https://hippohonk-help-eafe024b411f.herokuapp.com/docs/intro",
            Description: "",
        },
        {
            name: "Getting Started with NI-VISA",
            internalLink: "",
            isExternalLink: true,
            externalLink: "http://www.ni.com",
            Description: "A guide helping people get started with NI-VISA",
        },
        {
            name: "Other Getting Started",
            internalLink: "",
            isExternalLink: true,
            externalLink: "https://www.ni.com",
            Description: "Some other sample"
        }
    ])
    return (
        <PortfolioGrid projects={projects} title="Writing Samples" />
    )
}

export default Writing