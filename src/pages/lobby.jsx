import React from 'react'
import './../styles/lobby.css'
import './../styles/colors.css'

export default function Lobby() {
    return (
        <div className='lobby-container bg-primary'>
            <div className='login-div'>
                <div className='title'>
                    Create user
                </div>
                <div className="fields">
                    <div className="username">
                        <input placeholder=' Enter username' className='fieldsInput' />
                    </div>
                    <button className='signin-button'>
                        Start Game
                    </button>
                </div>
            </div>
        </div>
    )
}