import './../styles/lobby.css'
import './../styles/colors.css'

export default function WaitingRoom() {

    return (
        <div className='waiting-room-container bg-primary'>
            <div className='waiting-room-div'>
                <div className='waiting-room-title'>
                    Waiting room
                </div>
                <div className='player-list'>
                    player 1
                    <hr />
                </div>
                <div className='player-list'>
                    player 2
                    <hr />
                </div>
                <div className='player-list'>
                    player 3
                    <hr />
                </div>
                <div className='player-list'>
                    player 4
                    <hr />
                </div>
                <div className='player-list'>
                    player 5
                    <hr />
                </div>
                <div className='player-list'>
                    player 3
                    <hr />
                </div>
                <div className='player-list'>
                    player 4
                    <hr />
                </div>
                <div className='player-list'>
                    player 5
                    <hr />
                </div>
                <div className='player-list'>
                    player 3
                    <hr />
                </div>
                <div className='player-list'>
                    player 4
                    <hr />
                </div>
                <div className='player-list'>
                    player 5
                    <hr />
                </div>
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