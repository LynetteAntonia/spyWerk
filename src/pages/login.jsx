import './../styles/lobby.css'
import './../styles/colors.css'
import React from 'react'

export default function Lobby({ socket, setUsername }) {
    const startGame = () => {
        const username = document.getElementById('username').value;
        if (username.length < 3) {
            window.alert("Please input at least 3 characters");
            return;
        }

        socket.emit("user-join", { username }, (response) => {
            console.log(response);
        });

        setUsername(username);
    };

    return (
        <div className='lobby-container bg-primary'>
            <div className='login-div'>
                <div className='title'>
                    Create user
                </div>
                <div className="fields">
                    <div className="username">
                        <input id='username' placeholder=' Enter username' className='fieldsInput' />
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