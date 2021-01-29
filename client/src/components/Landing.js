import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Landing() {
    const [hoverHello, toggleHello] = useState("Hello.")
    const [hoverProjects, toggleProjects] = useState("I am")
    const [hoverContact, toggleContact] = useState("Allen")

    const width = window.innerWidth;

    const breakpoint = 1000;
    
    if (width < breakpoint) {
        setTimeout(function(){
            toggleHello("About")
            toggleProjects("Projects")
            toggleContact("Contact")
            const links = document.getElementsByTagName('p')
            links[0].classList.add('reAnimate')
            links[1].classList.add('reAnimate')
            links[2].classList.add('reAnimate')

        }, 6000)
    }

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
