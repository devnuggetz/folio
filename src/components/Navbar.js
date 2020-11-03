import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar__left'>
                <h1>Shuvam Kumar</h1>
            </div>
            <div className='navbar__right'>
                <h2>Me</h2>
                <h2>Projects</h2>
                <h2>Contact</h2>
            </div>
        </div>
    )
}

export default Navbar
