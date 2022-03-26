import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => createStyles({
    App:{
        backgroundImage: 'linear-gradient( 95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64% )',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    },
    form : {
        display : "flex",
        flexDirection : "column",
    },
    container : {
        backgroundImage: "linear-gradient(to right, #DECBA4, #ccaec1)",
                position : "absolute",
        top : "50%",
        left : "50%",
        transform : "translate(-50%,-50%)",
        padding : 30,
        textAlign : "center"
    },
    title : {
        margin:"0px 0 20px 0"
    },
    playerTitle:{
        width : "50%",
    },
    submitButton : {
        margin:"20px 0",
        backgroundImage: "linear-gradient(120deg,#90b635 0%, #72dd80 100%)",
    },
    textField:{
        margin:"6px"
    },
    playerTitleDiv:{
        display : "flex",
        flexDirection : "row",
    },
    zoominfo:{
        textAlign:"center",
        backgroundColor:"cadetblue",
    },
    playerName:{

    },
    playerData:{
        width : "25%",
        textAlign : "center"
    },
    playerDataSection:{
        display: "flex",
        flexDirection: "row",
    },
    leaderboardTable:{

    }, 
    playerDataFields:{
        display: "flex",
        flexDirection: "row",
    }
}))

export default useStyles;