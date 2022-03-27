import React, { useState, useEffect } from 'react';
import { ITimerState } from './Interfaces';
import useStyles from "./Style";



interface TimerProps {
    time: number,
    stopTimer: boolean,
    setgameTime:(arg: ITimerState) => void,

}


const Timer: React.FC<TimerProps> = ({ time ,stopTimer,setgameTime}) => {
    const classes = useStyles();
    const [timer, setTimer] = useState<ITimerState>({
        time,
        minutes: Math.floor((time + 1) / 60),
        seconds: time - Math.floor((time + 1) / 60) * 60 + 1,
    });

    useEffect(() => {
        if (stopTimer) {
            setgameTime(timer);
            
            return;
        }
        setTimeout(() => {
            
            
            setTimer({
                time: timer.time + 1,
                minutes: Math.floor((timer.time + 1) / 60),
                seconds: timer.time - Math.floor((timer.time + 1) / 60) * 60 + 1,
            });
        }, 1000);

    }, [timer.time]);



    return (
        <div className={classes.timerWrapper}>
            <div className={classes.timer}>
                {`${timer.minutes}: ${timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds }`}
            </div>
         </div>
    );
};

export default Timer;