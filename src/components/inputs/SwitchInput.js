import React from "react";
import {createStyles, makeStyles, Switch, Typography} from "@material-ui/core";
import clsx from "clsx";
const useStyles = makeStyles(() =>
    createStyles({
        root: {
            minWidth: '120px',
            textAlign: 'center',
            padding: '5px',
        },
        content: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
        }
    }),
);

const SwitchInput = ({ value, onChange, caption, icon, disabled, className }) => {
    const classes = useStyles();

    return (
        <div className={clsx(classes.root, className)}>
            <Typography gutterBottom>
                {caption}
            </Typography>
            <div className={classes.content}>
                {icon}
                <Switch
                    // size={"small"}
                    checked={value}
                    disabled={disabled}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

export default SwitchInput;