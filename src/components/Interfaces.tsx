import { Values } from "./Types"

export interface ITimerState {
    time: number,
    seconds: number,
    minutes: number,
}
export interface ILeaderboard {
    setStartNewGameEvent:(arg: boolean)=> void
}

export interface ITimerProps {
    time: number,
    stopTimer: boolean,
    setGameTime:(arg: ITimerState) => void,
    resetTimer: boolean,
}

export interface IPlayerDataProps {
    newPlayersData: Values
    gameStatus: string,
    gameMoves: number,
}
