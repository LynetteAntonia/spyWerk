import './../styles/lobby.css'
import './../styles/colors.css'
import { useEffect, useState } from 'react';

export default function WaitingRoom({ socket, username }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      socket.on('user-list', (userList) => {
        setUsers([...userList])
      })
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='waiting-room-container bg-primary'>
            <div className='waiting-room-div'>
                <div className='waiting-room-title'>
                    Waiting room
                </div>
                {
                    users.length ?
                        users.map((user) => (
                            <div key={user.id} className='player-list'>
                                {user.username}
                            </div>
                        ))
                        :
                        <div> 
                            Waiting room empty ... 
                        </div>
                }
            </div>
            {/* ADMIN ONLY */}
            <button className='start-game-button'>
                Start Game
            </button>
            {/* PLAYERS ONLY */}
            <p className='waiting-room-message'>Waiting for other agents to join...</p>
        </div>
    )
}