import { useState } from 'react'
import './../styles/lobby.css'
import './../styles/colors.css'

export default function Login() {

    const [userName, setUserName] = useState("")
    // const [showWarning, setShowWarning] = useState(false)


    const startGame = () => {
        if (userName.length > 0) {
            window.location.pathname = '/waitingRoom'
        }
    }

    return (
        <div className='lobby-container bg-primary'>
            <div className='login-div'>
                <div className='title'>
                    Create user
                </div>
                <div className="fields">
                    <div className="username">
                        <input onChange={(e) => setUserName(e.target.value)} placeholder=' Enter username' className='fieldsInput' />
                    </div>
                    {/* <p hidden={showWarning} style={{ color: "red" }}>please enter username</p> */}
                    <button onClick={() => startGame()} className='signin-button'>
                        Start Game
                    </button>
                </div>
            </div>
        </div>
    )
}