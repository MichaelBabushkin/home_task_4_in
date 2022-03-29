import { BoardCell } from "./Enums";

export type Values = {
    nickname1 : string,
    age1 : number,
    nickname2 : string,
    age2 : number,
  }

export type RankRow = {
  id:number,
  rank:number,
  nickname:string,
  moves : number,
  time:string,
  date:string,
}

export type GameData = {
  gameState : string,
  moves : number,
}

export type IFormTextFieldProps = {
  label: string,
  name: string,
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export type Board = BoardCell[];

