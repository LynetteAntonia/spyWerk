import './../styles/lobby.css'
import './../styles/colors.css'

export default function GameRoom({ socket, username, role, place }) {
    return (
        <div className='waiting-room-container bg-primary'>
            <div className='waiting-room-div'>
                <div className='waiting-room-title'>
                    Game room
                </div>
                
                <br /><br />
                <div className='waiting-room-title'>
                  <h3> username: {username} </h3>
                  <h3> place: {place} </h3>
                  <h3> role: {role} </h3>
                </div>
            </div>
        </div>
    )
}