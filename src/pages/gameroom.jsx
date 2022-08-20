import './../styles/lobby.css'
import './../styles/colors.css'
import { unixTimeDiff } from './../util/time'
import { useEffect, useState } from 'react';

export default function GameRoom({ 
    socket, 
    username, 
    role, 
    place,
    votes,
    setVotes,
    endTime,
}) {
    const [timer, setTimer] = useState(unixTimeDiff(endTime));
    const [vote, setVote] = useState("");

    useEffect(() => {
        const t = setTimeout(() => {
            setTimer(unixTimeDiff(endTime, new Date().getTime()));
        }, 1000);
    
        return () => clearTimeout(t);
    });

    useEffect(() => {
        socket.on('game-update-votes', ({ votedUname, unvotedUname }) => {
            console.log(votedUname)
            const newVotes = votes.map((user) => {
                let count
                switch (user.username) {
                    case votedUname:
                        count = user.voteCount + 1
                        break
                    case unvotedUname:
                        count = user.voteCount - 1
                        break
                    default:
                        count = user.voteCount
                        break;
                }

                return {
                    ...user,
                    voteCount: count
                }
            })

            setVotes(newVotes)
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    })

    const voteUser = (votedUname) => {
        socket.emit("game-vote", { votedUname, unvotedUname: vote });

        setVote(votedUname)
    }

    return (
        <div className='waiting-room-container bg-primary'>
            <div className='waiting-room-div'>
                <div className='waiting-room-title'>
                    Game room
                </div>

                <h5 className='waiting-room-title'> 
                    Time Left 
                    <br /> 
                    { Math.floor(timer/60) < 10 ? "0" + Math.floor(timer/60) : Math.floor(timer/60) }
                    :
                    { timer % 60 < 10 ? "0" + timer % 60 : timer % 60 }
                </h5>

                <br /><br />
                <div className='waiting-room-title'>
                    <h4> username: {username} </h4>
                    <h4> place: {place} </h4>
                    <h4> You are a {role} </h4>
                </div>
            </div>

            <div className='waiting-room-title' style={{ backgroundColor: "gray", textAlign: "left" }}>
                <div>
                    <span> Rank </span>
                    <span> Username </span>
                    <span> Count </span>
                    <span> Vote </span>
                </div>
                {
                    votes
                    .sort((a, b) => b.voteCount - a.voteCount)
                    .map((user, i) => (
                        <div> 
                            <span> #{i+1} </span>
                            <span> { user.username } </span>
                            <span> { user.voteCount } </span>
                            {
                                user.username === username ?
                                null
                                :
                                <span 
                                    className="input-vote"
                                    style={{ backgroundColor: user.username ===  vote ? "blue" : "white", cursor: "pointer" }} 
                                    onClick={() => voteUser(user.username)}
                                > X </span>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}