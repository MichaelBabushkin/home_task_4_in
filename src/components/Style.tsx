import React from 'react';
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => createStyles({
    // general app
    App: {
        backgroundImage: 'linear-gradient( 95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64% )',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
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

    // form 
    form: {
        display: "flex",
        flexDirection: "column",
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
    // player data section
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

    playerDataFields: {
        display: "flex",
        flexDirection: "row",
    },

    // timer
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

    // zoominfo logo
    logo: {
        maxWidth: 160,
    },

    // turn buttons
    secondArrow: {
        marginLeft: "50%",
        backgroundImage: "linear-gradient(#fb7272, #da0000)",
        width: "80px",
        height: "50px",
        paddingTop: "1%",
        textAlign: "center",
        borderRadius: "50%",
        marginBottom: "5px",

    },
    firstArrow: {
        marginLeft: "49%",
        backgroundImage: "linear-gradient(#ffffc9, #cece00)",
        width: "80px",
        height: "50px",
        paddingTop: "1%", textAlign: "center",
        borderRadius: "50%",
        marginBottom: "5px",


    },

    // Leaderboard 

    newGameBtn: {
        marginTop: "50px",
        marginLeft: "42%",
        color: "black",
        backgroundColor: "#3170c7",
    },

    leaderboard: {
        height: 400,
        width: '80%',
        backgroundImage: "linear-gradient(#88d89d, #c9c94f)",
        marginLeft: "10%",
        marginTop: "10%",
    },

    // error
    error: {
        color: "red"
    }


}))

export default useStyles;