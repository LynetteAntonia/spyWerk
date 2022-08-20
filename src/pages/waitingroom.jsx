import './../styles/lobby.css'
import './../styles/colors.css'
import { useEffect, useState } from 'react';

export default function WaitingRoom({ 
    socket, 
    username, 
    setRole, 
    setPlace, 
    setIsGameStart, 
    setEndTime, 
}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      socket.on('user-list', (userList) => {
        setUsers([...userList])
      })

      socket.on('friend-join', (userList) => {
        setUsers([...userList])
      })

      socket.on('friend-leave', ({ userList, message }) => {
        console.log(message)
        setUsers([...userList])
      })

      socket.on('role-assign', ({ userList, endTime }) => {
        userList.forEach(u => {
            if (u.username === username) {
                setRole(u.role)
                setPlace(u.place)
            }
        });

        setEndTime(endTime)
        setIsGameStart(true)
      })
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const startGame = () => {
        socket.emit("game-start");
    }

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
            <button className='start-game-button' onClick={() => startGame()}>
                Start Game
            </button>
            {/* PLAYERS ONLY */}
            <p className='waiting-room-message'>Waiting for other agents to join...</p>
        </div>
    )
}