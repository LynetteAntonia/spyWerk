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
    setVotes,
}) {
    const [users, setUsers] = useState([]);
    const [duration, setDuration] = useState(8)

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
        const votes = []

        userList.forEach(u => {
            votes.push({
                username: u.username,
                voteCount: 0,
            })

            if (u.username === username) {
                setRole(u.role)
                setPlace(u.place)
            }
        });

        setVotes(votes)
        setEndTime(endTime)
        setIsGameStart(true)
      })
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const startGame = () => {
        socket.emit("game-start", { duration });
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
            <div style={{ backgroundColor: "#011d2e", color: "white", fontSize: "28px", padding: "12px" }}>
                <input type="range" name="" id="" min="1" max="15" defaultValue={8} onChange={(e) => setDuration(e.target.value)} />
                <span> {duration} minute(s) </span>
            </div>
            <button className='start-game-button' onClick={() => startGame()}>
                Start Game
            </button>
            {/* PLAYERS ONLY */}
            <p className='waiting-room-message'>Waiting for other agents to join...</p>
        </div>
    )
}