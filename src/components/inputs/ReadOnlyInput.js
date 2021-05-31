import React from "react";
import {createStyles, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
            margin: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
        },
        childrenContainer: {
            // maxWidth: '150px', //TODO fix
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
        }
    }),
);

const ReadOnlyInput = ({ caption, children }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography gutterBottom>{caption}</Typography>
            <div className={classes.childrenContainer}>{children}</div>
        </div>
    )
}

export default ReadOnlyInput;