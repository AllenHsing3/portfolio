import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Landing() {
    const [hoverHello, toggleHello] = useState("Hello.")
    const [hoverProjects, toggleProjects] = useState("I am")
    const [hoverContact, toggleContact] = useState("Allen")

    return (
        <div className="container-main">
            <div >
            <Link className="white " to='/about'><p onMouseEnter={() => toggleHello("About")} onMouseLeave={() => toggleHello("Hello.")} className="x-large animate-hover">{hoverHello}</p></Link>
            <Link className="red" to='/projects'><p onMouseEnter={() => toggleProjects("Projects")} onMouseLeave={() => toggleProjects("I am")} className="x-large animate-hover">{hoverProjects}</p></Link>
            <Link className="red" to='/contact'><p onMouseEnter={() => toggleContact("Contact")} onMouseLeave={() => toggleContact("Allen")} className="x-large animate-hover">{hoverContact}</p></Link>
            </div>

        </div>
    )
}
