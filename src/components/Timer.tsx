import React, { useState, useEffect } from 'react';
import useStyles from "./Style";

interface TimerState {
    time: number,
    seconds: number,
    minutes: number,
}


interface TimerProps {
    time: number,
}


const Timer: React.FC<TimerProps> = ({ time }) => {
    const classes = useStyles();
    const [timer, setTimer] = useState<TimerState>({
        time,
        minutes: Math.floor((time + 1) / 60),
        seconds: time - Math.floor((time + 1) / 60) * 60 + 1,
    });

    useEffect(() => {
        setTimeout(() => {
            // if (timer.time === 0) {
            //     return;
            // }
            setTimer({
                time: timer.time + 1,
                minutes: Math.floor((timer.time + 1) / 60),
                seconds: timer.time - Math.floor((timer.time + 1) / 60) * 60 + 1,
            });
        }, 1000);

    }, [timer.time]);



    return (
        <div className={classes.timer}>
            {`${timer.minutes}: ${timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds }`}
        </div>
    );
};

export default Timer;