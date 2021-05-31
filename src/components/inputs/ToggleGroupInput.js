import React from "react";
import {createStyles, makeStyles, Typography} from "@material-ui/core";
import clsx from "clsx";
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab";
const useStyles = makeStyles(() =>
    createStyles({
        root: {
            minWidth: '120px',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
        },
        caption: {
            paddingRight: '10px'
        }
    }),
);

const ToggleGroupInput = ({ value, options = [], onChange, caption, icon, disabled, className }) => {
    const classes = useStyles();

    return (
        <div className={clsx(classes.root, className)}>
            {icon}
            <Typography className={classes.caption}>{caption}</Typography>
            <ToggleButtonGroup
                value={value}
                exclusive
                onChange={onChange}
            >
                {
                    options.map(option =>
                            <ToggleButton value={option}
                                          key={option}
                                          disabled={disabled}>
                                {option}
                            </ToggleButton>
                    )
                }
            </ToggleButtonGroup>
        </div>
    )
}

export default ToggleGroupInput;