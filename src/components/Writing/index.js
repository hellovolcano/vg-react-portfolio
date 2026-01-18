import { useState } from "react"
import { PortfolioGrid } from "../PortfolioGrid"
const Writing = () => {
    const [projects] = useState([
        {
            name: "Hippohonk Help",
            externalLink: "https://hippohonk-help-eafe024b411f.herokuapp.com/docs/intro",
            description: 
                `
                Docusaurus site for a non-public API as a way to learn how to generate docs from OpenAPI. 
                I parameterized all properties to ensure content was single-sourced in the OpenAPI spec.
                I authored a custom generation script to create separate markdown files for each path in the
                OpenAPI spec. 
                `,
        },
        {
            name: "Getting Started with Instrument Control",
            externalLink: "https://www.ni.com/docs/en-US/bundle/ni-visa/page/getting-started-with-instrument-control.html",
            description: 
                `
                This getting started guide was written to address a Top Support Issue. Our customers were often jumping directly 
                into authoring their own low-level driver for their instrument, even thought it was likely a driver already existed. 
                Working with our Product Support Engineer, we determined the best way to resolve this was to add a specific Getting Started
                guide for NI-VISA with the purpose of directing users to search for existing driver before jumping in to writing their own.
                `,
        },
        {
            name: "NI System Configuration API Reference for LabWindows™/CVI™",
            externalLink: "https://www.ni.com/docs/en-US/bundle/ni-system-configuration-c-ref/page/nisyscfgcvi/bp_help_file_title.html",
            description: 
                `
                Created API reference content for the NI System Configuration C API, single-sourcing relevant conceptual material from the LabVIEW help using DITA XML. 
                `
        }
    ])
    return (
        <PortfolioGrid projects={projects} title="Writing Samples" />
    )
}

export default Writing