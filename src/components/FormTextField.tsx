import React from 'react';
import {TextField} from "@material-ui/core";
import useStyles from './Style';
import { IFormTextFieldProps } from './Types';


function FormTextField (props: IFormTextFieldProps){
  const classes = useStyles();
  return (
    <TextField
            label={props.label}
            name={props.name}
            onChange={props.changeHandler}

            variant={"outlined"} //enables special material-ui styling
            size={"small"}
            margin={"dense"}
            className={classes.textField}
        />
  );
}

export default FormTextField