import React from 'react';
import useStyles from './Style';

type Props = {}

export default function Logo({ }: Props) {
    const classes = useStyles();
    return (
        <div className={classes.logo}>
            <img src="http://localhost:3001/assets/zoominfo-logo-vector.svg"></img>
        </div>
    )
}