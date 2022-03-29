export enum BoardCell {
    Empty = 0,
    PlayerOne = 1,
    PlayerTwo = 2
  }
  
  export enum GameStatus {
    Ongoing = -1,
    Draw = 0,
    PlayerOneWin = BoardCell.PlayerOne,
    PlayerTwoWin = BoardCell.PlayerTwo
  }
  
  export enum BoardSize {
    Columns = 7,
    Rows = 6
  }