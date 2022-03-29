import React, {useState} from "react";
import {Typography,Paper,Button} from "@material-ui/core";

import FormTextField from "./FormTextField";
import useStyles from "./Style";
import { Values } from "../datatypes/Types";
import { IFormProps } from "../datatypes/Interfaces";

const Form: React.FC<IFormProps> = ({logChange,updateLoggedState,updatePlayersData}) =>{

    const classes = useStyles();
    const [error, setError] = useState<string>('')
    const [values,setValues] = useState<Values>({
        nickname1 : "",
        age1 : 0,
        nickname2 : "",
        age2 : 0,
    });

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values,[event.target.name] : event.target.value});
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(values.nickname1 !== "" && values.nickname2 !== "" && values.age1 !==0 && values.age2 !== 0){
            updateLoggedState(true)
            updatePlayersData(values);
            setError("")
        }else{
            setError("Please fill all the fields correctly")
        }
    }

    return (
        <Paper className={classes.container}>
            <Typography variant={"h4"} className={classes.title}>Create Players</Typography>
            <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>

            <div className={classes.playerTitleDiv}>
                <Typography variant={"h6"} className={classes.playerTitle}>Player1</Typography>
                <Typography variant={"h6"} className={classes.playerTitle}>Player2</Typography>
            </div> 
            <div className={classes.playerDataFields}>
              <div >
                <FormTextField changeHandler={handleChange} label={"Nickname"} name={"nickname1"}/>
                <FormTextField changeHandler={handleChange} label={"Age"} name={"age1"}/>
               </div> 
               <div>
                <FormTextField changeHandler={handleChange} label={"Nickname"} name={"nickname2"}/>
                <FormTextField changeHandler={handleChange} label={"Age"} name={"age2"}/>
               </div> 
            </div>
                <Button type={"submit"} variant={"contained"} className={classes.submitButton}>Lets Start</Button>
                <div className={classes.error}>{error}</div>
            </form>
        </Paper>
    );
}

export default Form;