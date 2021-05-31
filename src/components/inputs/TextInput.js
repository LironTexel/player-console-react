import React from "react";
import {createStyles, makeStyles, TextField} from "@material-ui/core";
import clsx from "clsx";
const useStyles = makeStyles(() =>
    createStyles({
        root: {
            minWidth: '120px',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
        },
    }),
);

const TextInput = ({ value, onChange, caption, icon, disabled, className }) => {
    const classes = useStyles();

    return (
        <div className={clsx(classes.root, className)}>
                {icon}
                <TextField label={caption}
                           value={value}
                           disabled={disabled}
                           onChange={onChange}
                           variant="outlined" />
        </div>
    )
}

export default TextInput;