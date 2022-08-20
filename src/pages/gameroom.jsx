import './../styles/lobby.css'
import './../styles/colors.css'
import { unixTimeDiff } from './../util/time'
import { useEffect, useState } from 'react';

export default function GameRoom({ 
    socket, 
    username, 
    role, 
    place,
    endTime,
}) {
     const [timer, setTimer] = useState(unixTimeDiff(endTime));

    useEffect(() => {
        const t = setTimeout(() => {
            setTimer(unixTimeDiff(endTime, new Date().getTime()));
        }, 1000);
    
        return () => clearTimeout(t);
    });

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
        </div>
    )
}