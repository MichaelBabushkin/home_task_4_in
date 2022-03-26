import React from 'react';
import {TextField} from "@material-ui/core";
import useStyles from './Style';


type formTextFieldProps = {
    label: string,
    name: string,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
}
function FormTextField (props: formTextFieldProps){
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