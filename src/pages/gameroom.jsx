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
                    <h4> username: {username} </h4>
                    <h4> place: {place} </h4>
                    <h4> You are a {role} </h4>
                </div>
            </div>
        </div>
    )
}