import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form"
import GameBoard from "./components/GameBoard";
import PlayerData from "./components/PlayerData";
import useStyles from "./components/Style";
import { Typography } from "@material-ui/core";
import { GameData, Values } from './components/Types';
import Leaderboard from './components/Leaderboard';
import Logo from './components/Logo';


function App() {
  const classes = useStyles();
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [showLeaderboard, setShowLeaderboard] = useState<boolean>(false);
  const [startNewGameEvent, setStartNewGameEvent] = useState<boolean>(false);
  const [playersData, setPlayersData] = useState<Values>({
    nickname1: '-',
    age1: 0,
    nickname2: '-',
    age2: 0,
  });
  const [gameStatus, setGameStatus] = useState<string>('Game Started');
  const [gameMoves, setGameMoves] = useState<number>(0);

  function updateLoggedState(logChange: boolean): void {
    setIsLogged(logChange);
  }

  function updatePlayersData(newPlayersData: Values): void {
    setPlayersData(newPlayersData);
  }

  function updateGameStatus(newGameStatus: GameData): void {
    setGameStatus(newGameStatus.gameState);
    setGameMoves(newGameStatus.moves)
  }
  useEffect(() => {
    if (startNewGameEvent) {
      setStartNewGameEvent(false);
      setShowLeaderboard(false);
    }

  }, [startNewGameEvent]);

  return (
    <div className={classes.App}>
        <Logo/>
      <div> <Typography variant={"h4"} className={classes.zoominfo}>Home Task connect-4 game</Typography></div>
      {isLogged && <PlayerData newPlayersData={playersData} gameStatus={gameStatus} gameMoves={gameMoves} />}
      {!isLogged && <Form logChange={isLogged} updateLoggedState={updateLoggedState} updatePlayersData={updatePlayersData} />}
      {isLogged && <GameBoard updateGameStatus={updateGameStatus} newPlayersData={playersData} startNewGameEvent={startNewGameEvent} setShowLeaderboard={setShowLeaderboard} />}
      {showLeaderboard && <Leaderboard setStartNewGameEvent={setStartNewGameEvent} />}
    </div>
  );
}

export default App;
