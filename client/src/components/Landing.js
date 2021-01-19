import React from 'react'
import {Link} from 'react-router-dom'

export default function Landing() {
    return (
        <div className="container-landing">
            <div>
            <Link className="white " to='/about'><p className="large animate-hover">Hello.</p></Link>
            <Link className="red" to='/projects'><p className="large animate-hover">I am</p></Link>
            <Link className="red" to='/contact'><p className="large animate-hover">Allen</p></Link>
            </div>

        </div>
    )
}
