import React, { useState, useEffect } from 'react';
import { ITimerProps, ITimerState } from '../datatypes/Interfaces';
import useStyles from "./Style";

const Timer: React.FC<ITimerProps> = ({ time ,stopTimer,setGameTime, resetTimer}) => {
    const classes = useStyles();
    const [timer, setTimer] = useState<ITimerState>({
        time,
        minutes: Math.floor((time + 1) / 60),
        seconds: time - Math.floor((time + 1) / 60) * 60 + 1,
    });

    useEffect(() => {
        if (stopTimer) {
            setGameTime(timer);
            return;
        }
        setTimeout(() => {
            
            
            setTimer({
                time: timer.time + 1,
                minutes: Math.floor((timer.time + 1) / 60),
                seconds: timer.time - Math.floor((timer.time + 1) / 60) * 60 + 1,
            });
        }, 1000);

    }, [timer.time,resetTimer]);

    useEffect(() => {
        setTimer({
            time: 0,
            seconds: 0,
            minutes: 0,
        })
    }, [resetTimer])
    
    return (
        <div className={classes.timerWrapper}>
            <div className={classes.timer}>
                {`${timer.minutes}: ${timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds }`}
            </div>
         </div>
    );
};

export default Timer;