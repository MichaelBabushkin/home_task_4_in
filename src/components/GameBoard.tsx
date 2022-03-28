import React, { useEffect, useState } from 'react';
import "../App.css";
import AlertDialog from './AlertDialog';
import Leaderboard from './Leaderboard';
import { Values } from './Types';
import Timer from './Timer';
import { ITimerState } from './Interfaces';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import useStyles from "./Style";



type Board = BoardCell[];

enum BoardCell {
  Empty = 0,
  PlayerOne = 1,
  PlayerTwo = 2
}

enum GameStatus {
  Ongoing = -1,
  Draw = 0,
  PlayerOneWin = BoardCell.PlayerOne,
  PlayerTwoWin = BoardCell.PlayerTwo
}

enum BoardSize {
  Columns = 7,
  Rows = 6
}

const WINNING_SEQUENCE: number = 4;

type GameData = {
  gameState: string,
  moves: number,
}

interface State {
  board: Board,
  playerTurn: BoardCell,
  gameStatus: GameStatus | BoardCell,
  moves: number,

}

interface gameStatusProps {
  newPlayersData: Values,
  updateGameStatus: (arg: GameData) => void,
  startNewGameEvent: boolean,
  setShowLeaderboard:(arg: boolean) => void,
}




function intitializeBoard() {
  const board = [];
  for (let i = 0; i < BoardSize.Columns * BoardSize.Rows; i++) {
    board.push(BoardCell.Empty);
  }

  return board;
};

function getPlayingPlayer(player: BoardCell) {
  return player === BoardCell.Empty ? "noPlayer" : player === BoardCell.PlayerOne ? "playerOne" : "playerTwo"
};

function findLowestEmptyIndex(board: Board, column: number) {
  for (let i = BoardSize.Columns * (BoardSize.Rows - 1) + column; i >= 0; i -= BoardSize.Columns) {
    if (board[i] === BoardCell.Empty) return i;
  }
  return -1;
};

function togglePlayerTurn(player: BoardCell) {
  return player === BoardCell.PlayerOne ? BoardCell.PlayerTwo : BoardCell.PlayerOne;
};

function getGameState(board: Board) {
  // Checks wins horizontally
  for (let r = 0; r < BoardSize.Rows; r++) {
    for (let c = 0; c <= WINNING_SEQUENCE; c++) {
      const index = r * BoardSize.Columns + c;
      const boardSlice = board.slice(index, index + WINNING_SEQUENCE);

      const winningResult = checkWinningSlice(boardSlice);
      if (winningResult !== false) return winningResult;
    }
  }

  // check wins vertically
  for (let r = 0; r <= 2; r++) {
    for (let c = 0; c < BoardSize.Columns; c++) {
      const index = r * BoardSize.Columns + c;
      const boardSlice = [
        board[index],
        board[index + BoardSize.Columns],
        board[index + BoardSize.Columns * 2],
        board[index + BoardSize.Columns * 3]
      ];

      const winningResult = checkWinningSlice(boardSlice);
      if (winningResult !== false) return winningResult;
    }
  }

  // check wins diagonally
  for (let r = 0; r <= 2; r++) {
    for (let c = 0; c < BoardSize.Columns; c++) {
      const index = r * BoardSize.Columns + c;

      // Checks diagonal down-left
      if (c >= 3) {
        const boardSlice = [
          board[index],
          board[index + BoardSize.Columns - 1],
          board[index + BoardSize.Columns * 2 - 2],
          board[index + BoardSize.Columns * 3 - 3]
        ];

        const winningResult = checkWinningSlice(boardSlice);
        if (winningResult !== false) return winningResult;
      }

      // Checks diagonal down-right
      if (c <= 3) {
        const boardSlice = [
          board[index],
          board[index + BoardSize.Columns + 1],
          board[index + BoardSize.Columns * 2 + 2],
          board[index + BoardSize.Columns * 3 + 3]
        ];

        const winningResult = checkWinningSlice(boardSlice);
        if (winningResult !== false) return winningResult;
      }
    }
  }

  if (board.some(cell => cell === BoardCell.Empty)) {
    return GameStatus.Ongoing
  } else {
    return GameStatus.Draw
  }
};

function checkWinningSlice(miniBoard: BoardCell[]) {
  if (miniBoard.some(cell => cell === BoardCell.Empty)) return false;

  if (
    miniBoard[0] === miniBoard[1] &&
    miniBoard[1] === miniBoard[2] &&
    miniBoard[2] === miniBoard[3]
  ) {
    return miniBoard[1];
  }

  return false;
};








const GameBoard: React.FC<gameStatusProps> = ({ updateGameStatus, newPlayersData, startNewGameEvent, setShowLeaderboard }) => {
  const classes = useStyles();

  const [gameState, setGameState] = useState<State>({
    board: intitializeBoard(),
    playerTurn: (Math.floor(Math.random() * 2) + 1 == 2) ? BoardCell.PlayerTwo : BoardCell.PlayerOne,
    gameStatus: GameStatus.Ongoing,
    moves: 0,
  });

  const [gameTime, setGameTime] = useState<ITimerState>({
    time: 0,
    seconds: 0,
    minutes: 0,
  });
  const [resetTimer, setResetTimer] = useState<boolean>(false);
  const [hideBoard, setHideBoard] = useState<boolean>(true);


  useEffect(() => {
    // if the game is over and the result is not a draw
    if (gameState.gameStatus !== GameStatus.Ongoing && gameState.gameStatus !== GameStatus.Draw) {

      let prevLeaderboard = localStorage.getItem('leaderboard') || '';
      let prevLeaderboardArr = prevLeaderboard ? JSON.parse(prevLeaderboard) : []
      var arrSize = Object.keys(prevLeaderboardArr).length + 1;

      let winnerMoves = gameState.moves % 2 == 0 ? Math.floor(gameState.moves / 2) : Math.floor(gameState.moves / 2) + 1
      let winnerNickname = renderGameStatus(gameState.gameStatus, gameState.moves).replace("won", "").trim();
      let time = gameTime.minutes + ":" + (gameTime.seconds > 10 ? gameTime.seconds : "0" + gameTime.seconds);
      let date = new Date().toUTCString();

      // save the highscore in localstorage 
      localStorage.setItem('leaderboard', JSON.stringify([...prevLeaderboardArr, { id: arrSize, moves: winnerMoves, nickname: winnerNickname, time, date }]))
    }

  }, [gameTime]);

  useEffect(() => {
    if(startNewGameEvent){
      startNewGame();
    }

  }, [startNewGameEvent])
  
  

//for treating the answer from the modal
  function updateAlertChoice(alertChoice: string): void {
    if (alertChoice === "leaderboard") {
      setShowLeaderboard(true);
      setHideBoard(false);
    }
    else if (alertChoice === "new_game") {
      startNewGame();
    }
  }

  function startNewGame() {
    setResetTimer(!resetTimer)
    setHideBoard(true);
    setGameState({
      board: intitializeBoard(),
      playerTurn: BoardCell.PlayerOne,
      gameStatus: GameStatus.Ongoing,
      moves: 0,
    });
    renderGameStatus();
  }

  function renderCells() {
    const { board }: State = gameState;
    return board.map((player, index) => renderCell(player, index));
  };

  function handleOnClick(index: number) {
    const { gameStatus, board }: State = gameState;

    if (gameStatus !== GameStatus.Ongoing) return

    const column = index % BoardSize.Columns;
    if (board[column] === BoardCell.Empty) {
      makeMove(column);
    }
  };

  function makeMove(column: number) {
    let { board, playerTurn, moves }: State = gameState;

    const index = findLowestEmptyIndex(board, column);

    const newBoard = board.slice();
    newBoard[index] = playerTurn;
    moves++;

    const gameStatus = getGameState(newBoard);

    setGameState({
      board: newBoard,
      playerTurn: togglePlayerTurn(playerTurn),
      gameStatus,
      moves,
    });

    renderGameStatus(gameStatus, moves);
  }

  function renderCell(player: BoardCell, index: number) {
    return (
      <div
        className="cell"
        key={index}
        onClick={() => handleOnClick(index)}
        data-player={getPlayingPlayer(player)}
      />
    );
  };

  function renderGameStatus(gameStatus: GameStatus | BoardCell = GameStatus.Ongoing, moves: number = 0) {
    if (gameStatus === GameStatus.Ongoing) {
      updateGameStatus({ gameState: 'Game is ongoing', moves })
    } else if (gameStatus === GameStatus.Draw) {
      updateGameStatus({ gameState: 'Game is a draw', moves })
    } else if (gameStatus === GameStatus.PlayerOneWin) {
      updateGameStatus({ gameState: newPlayersData.nickname1 + ' won', moves })
    } else if (gameStatus === GameStatus.PlayerTwoWin) {
      updateGameStatus({ gameState: newPlayersData.nickname2 + ' won', moves })
    }
    return resolveGameStatusLabel();
  }

  function resolveGameStatusLabel() {
    const { gameStatus }: State = gameState;
    let text = '';
    if (gameStatus === GameStatus.Ongoing) {
      text = 'Game is ongoing'
    } else if (gameStatus === GameStatus.Draw) {
      text = 'Game is a draw'
    } else if (gameStatus === GameStatus.PlayerOneWin) {
      text = newPlayersData.nickname1 + ' won'
    } else if (gameStatus === GameStatus.PlayerTwoWin) {
      text = newPlayersData.nickname2 + ' won'
    }
    return text;
  }



  return (
    <>
      <div className={classes.timerWrapper}>{gameState.playerTurn == 1 ?
        <div className={classes.firstArrow}><ArrowBackIcon /></div> : 
        <div className={classes.secondArrow}><ArrowForwardIcon /></div>} 
        <Timer time={0} stopTimer={gameState.gameStatus !== GameStatus.Ongoing} setGameTime={setGameTime} resetTimer={resetTimer} />
      </div>
      {hideBoard && <div className="board">{renderCells()}</div>}
      {gameState.gameStatus !== GameStatus.Ongoing &&
        <AlertDialog data={resolveGameStatusLabel()} updateAlertChoice={updateAlertChoice} isShown={true} />
      }
    </>
  );
}

export default GameBoard;