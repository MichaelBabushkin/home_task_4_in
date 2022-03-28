import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./Style";
import BrightnessAutoIcon from '@material-ui/icons/BrightnessAuto';
import { IPlayerDataProps } from "./Interfaces";

const PlayerData: React.FC<IPlayerDataProps> = ({ newPlayersData, gameStatus, gameMoves }) => {
    const classes = useStyles();
const [playerHigh1, setPlayerHigh1] = useState<number>(0)
const [playerHigh2, setPlayerHigh2] = useState<number>(0)

    // check for highscore

    useEffect(() => {
        let playersData = localStorage.getItem('leaderboard') || '';
        let playersDatadArr = playersData ? JSON.parse(playersData) : [];
        let playerHigh1Arr = playersDatadArr.filter((player:any)=>player.nickname.trim() == newPlayersData.nickname1).map((player1:any)=>player1.moves);
        let playerHigh2Arr = playersDatadArr.filter((player:any)=>player.nickname.trim() == newPlayersData.nickname2).map((player2:any)=>player2.moves);
        if (playerHigh1Arr.length == 0) playerHigh1Arr.push(0);
        if (playerHigh2Arr.length == 0) playerHigh2Arr.push(0);
        setPlayerHigh1(Math.min(...playerHigh1Arr));
        setPlayerHigh2(Math.min(...playerHigh2Arr));
        
    }, [newPlayersData])


    return (
        <div className={classes.playerDataSection}>
            <div className={classes.playerData1}>
                <Typography variant={"h4"} className={classes.playerName}>Nickname:{newPlayersData.nickname1} ({newPlayersData.age1}) </Typography>
                <Typography variant={"h4"} className={classes.playerName}>Highscore:{playerHigh1}</Typography>
            </div>
            <div className={classes.gameMoves}>
                <Typography variant={"h4"} className={classes.playerName}>{gameMoves % 2 == 0 ? Math.floor(gameMoves / 2) : Math.floor(gameMoves / 2) + 1} moves played </Typography>
            </div>
            <div className={classes.gameStatus}>
                <Typography variant={"h4"} className={classes.playerName}>{gameStatus.includes("won") ? <BrightnessAutoIcon /> : ''} {gameStatus} </Typography>
            </div>
            <div className={classes.playerData2}>
                <Typography variant={"h4"} className={classes.playerName}>Nickname:{newPlayersData.nickname2} ({newPlayersData.age2}) </Typography>
                <Typography variant={"h4"} className={classes.playerName}>Highscore:{playerHigh2}</Typography>
            </div>
        </div>
    );
}

export default PlayerData;