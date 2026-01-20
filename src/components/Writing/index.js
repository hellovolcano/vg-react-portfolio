import { useState } from "react"
import { PortfolioGrid } from "../PortfolioGrid"
const Writing = () => {
    const [projects] = useState([
        {
            name: "Hippohonk Help",
            externalLink: "https://hippohonk-help-eafe024b411f.herokuapp.com/docs/intro",
            description: 
                `
                End-to-end API documentation generated from an OpenAPI specification and rendered using Docusaurus.

                This sample demonstrates docs-as-code workflows, single-sourced content, and custom tooling to generate reference documentation directly from the API spec.
                `,
            demonstrates: ['API documentation', 'Docs-as-code', 'Docusaurus']
        },
        {
            name: "Getting Started with Instrument Control",
            externalLink: "https://www.ni.com/docs/en-US/bundle/ni-visa/page/getting-started-with-instrument-control.html",
            description: 
                `
                This getting started guide addressed a top support issue: customers were jumping directly into writing low-level instrument drivers when an existing driver likely already met their needs.

                Working with a Product Support Engineer, I authored a task-focused guide for NI-VISA to redirect users toward searching for existing drivers before building their own.
                `,
            demonstrates: ['Task-based documentation', 'Support-drive content']
        },
        {
            name: "NI System Configuration API Reference for LabWindows™/CVI™",
            externalLink: "https://www.ni.com/docs/en-US/bundle/ni-system-configuration-c-ref/page/nisyscfgcvi/bp_help_file_title.html",
            description: 
                `
                Created API reference content for the NI System Configuration C API, single-sourcing relevant conceptual material from the LabVIEW help using DITA XML. 
                `,
            demonstrates: ['Enterprise API docs', 'DITA XML']
        }
    ])
    return (
        <PortfolioGrid projects={projects} title="Writing Samples" />
    )
}

export default Writing