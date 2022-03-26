import React, {useState} from "react";
import {Typography,Paper,Button} from "@material-ui/core";

import FormTextField from "./FormTextField";
import useStyles from "./Style";
import { Values } from "./Types";


interface playerDataProps {
    newPlayersData: Values
    gameStatus: string,
    gameMoves: number,
  }

const PlayerData: React.FC<playerDataProps> = ({newPlayersData,gameStatus,gameMoves}) =>{

    const classes = useStyles();

console.log(newPlayersData);


    return (
<div className={classes.playerDataSection}>
        <div className={classes.playerData}>
            <Typography variant={"h4"} className={classes.playerName}>Nickname:{newPlayersData.nickname1} ({newPlayersData.age1}) </Typography>
            <Typography variant={"h4"} className={classes.playerName}>Highscore:0</Typography>
        </div>
        <div className={classes.playerData}>
            <Typography variant={"h4"} className={classes.playerName}>{gameMoves} moves played </Typography>
        </div>
        <div className={classes.playerData}>
            <Typography variant={"h4"} className={classes.playerName}>{gameStatus} </Typography>
        </div>
        <div className={classes.playerData}>
            <Typography variant={"h4"} className={classes.playerName}>Nickname:{newPlayersData.nickname2} ({newPlayersData.age2}) </Typography>
            <Typography variant={"h4"} className={classes.playerName}>Highscore:0</Typography>
        </div>
</div>
    );
}

export default PlayerData;