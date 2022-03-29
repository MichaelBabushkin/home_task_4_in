import { BoardCell, GameStatus } from "./Enums";
import { Board, GameData, Values } from "./Types"

export interface ITimerState {
    time: number,
    seconds: number,
    minutes: number,
}
export interface ILeaderboard {
    setStartNewGameEvent: (arg: boolean) => void
}

export interface ITimerProps {
    time: number,
    stopTimer: boolean,
    setGameTime: (arg: ITimerState) => void,
    resetTimer: boolean,
}

export interface IPlayerDataProps {
    newPlayersData: Values
    gameStatus: string,
    gameMoves: number,
}

export interface IAlertProps {
    isShown: boolean;
    data?: string,
    updateAlertChoice: (arg: string) => void
}

export interface IFormProps {
    logChange: boolean,
    updateLoggedState: (arg: boolean) => void,
    updatePlayersData: (arg: Values) => void,
}

export interface IState {
    board: Board,
    playerTurn: BoardCell,
    gameStatus: GameStatus | BoardCell,
    moves: number,
  
  }
  
  export interface IGameStatusProps {
    newPlayersData: Values,
    updateGameStatus: (arg: GameData) => void,
    startNewGameEvent: boolean,
    setShowLeaderboard:(arg: boolean) => void,
  }
  