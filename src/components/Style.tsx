import React from 'react';
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => createStyles({
    App: {
        backgroundImage: 'linear-gradient( 95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64% )',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    container: {
        backgroundImage: "linear-gradient(to right, #DECBA4, #ccaec1)",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        padding: 30,
        textAlign: "center"
    },
    title: {
        margin: "0px 0 20px 0"
    },
    playerTitle: {
        width: "50%",
    },
    submitButton: {
        margin: "20px 0",
        backgroundImage: "linear-gradient(120deg,#90b635 0%, #72dd80 100%)",
    },
    textField: {
        margin: "6px"
    },
    playerTitleDiv: {
        display: "flex",
        flexDirection: "row",
    },
    zoominfo: {
        textAlign: "center",
        backgroundColor: "cadetblue",
    },
    playerName: {

    },
    playerData1: {
        width: "25%",
        textAlign: "center",
        backgroundImage: "linear-gradient(#ffffc9, #cece00)",
        borderRadius: "10%"
    },
    gameMoves: {
        width: "25%",
        textAlign: "center",
        alignSelf: "center",
    },
    gameStatus: {
        width: "25%",
        textAlign: "center",
        alignSelf: "center",
    },
    playerData2: {
        width: "25%",
        textAlign: "center",
        backgroundImage: "linear-gradient(#fb7272, #da0000)",
        borderRadius: "10%"
    },
    playerDataSection: {
        display: "flex",
        flexDirection: "row",
    },
    leaderboardTable: {

    },
    playerDataFields: {
        display: "flex",
        flexDirection: "row",
    },
    timerWrapper: {
        width: "100%",
    },
    timer: {
        textAlign: "center",
        fontSize: "35px",
        width: "100px",
        marginLeft: "49%",
        marginBottom: "1%",
        border: "#62cda3  5px solid",
        borderRadius: "10%",
        backgroundImage: "linear-gradient(#72fbcc, #6871e2)",
    },
    secondArrow: {
        marginLeft: "50%",
        backgroundImage: "linear-gradient(#fb7272, #da0000)",
        width: "50px",
        textAlign: "center",
        borderRadius: "50%",
        marginBottom: "5px",

    },
    firstArrow: {
        marginLeft: "50%",
        backgroundImage: "linear-gradient(#ffffc9, #cece00)",
        width: "50px",
        textAlign: "center",
        borderRadius: "50%",
        marginBottom: "5px",


    },
    newGameBtn: {
        marginTop: "50px",
        marginLeft: "50%",
        color: "black",
        backgroundColor: "#3170c7",
    },


}))

export default useStyles;