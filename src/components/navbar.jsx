import React from 'react'
import './../styles/lobby.css'
import './../styles/colors.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <img src='/src/assets/images/logo.png' alt='spyWerk' style={{ color: 'white', marginTop: '8px', marginLeft: '10px' }} width="200" height="200"></img>
        </div>
    )
}