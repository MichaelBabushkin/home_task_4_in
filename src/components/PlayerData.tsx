import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./Style";
import { Values } from "./Types";
import BrightnessAutoIcon from '@material-ui/icons/BrightnessAuto';

interface playerDataProps {
    newPlayersData: Values
    gameStatus: string,
    gameMoves: number,
}

const PlayerData: React.FC<playerDataProps> = ({ newPlayersData, gameStatus, gameMoves }) => {
    const classes = useStyles();

    // check for highscore

    // useEffect(() => {
    //     let playersData = localStorage.getItem('leaderboard') || '';
    //     let playersDatadArr = playersData ? JSON.parse(playersData) : [];
    //     console.log(playersDatadArr);
    // }, [])


    return (
        <div className={classes.playerDataSection}>
            <div className={classes.playerData1}>
                <Typography variant={"h4"} className={classes.playerName}>Nickname:{newPlayersData.nickname1} ({newPlayersData.age1}) </Typography>
                <Typography variant={"h4"} className={classes.playerName}>Highscore:0</Typography>
            </div>
            <div className={classes.gameMoves}>
                <Typography variant={"h4"} className={classes.playerName}>{gameMoves % 2 == 0 ? Math.floor(gameMoves / 2) : Math.floor(gameMoves / 2) + 1} moves played </Typography>
            </div>
            <div className={classes.gameStatus}>
                <Typography variant={"h4"} className={classes.playerName}>{gameStatus.includes("won") ? <BrightnessAutoIcon /> : ''} {gameStatus} </Typography>
            </div>
            <div className={classes.playerData2}>
                <Typography variant={"h4"} className={classes.playerName}>Nickname:{newPlayersData.nickname2} ({newPlayersData.age2}) </Typography>
                <Typography variant={"h4"} className={classes.playerName}>Highscore:0</Typography>
            </div>
        </div>
    );
}

export default PlayerData;