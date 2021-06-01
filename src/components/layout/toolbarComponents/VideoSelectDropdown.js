import React from "react";
import {
    createStyles,
    makeStyles,
} from "@material-ui/core";
// import {useDispatch, useSelector} from "react-redux";


const useStyles = makeStyles(() =>
    createStyles({
        root: {
        },
    }),
);

const VideoSelectDropdown = () => {
    const classes = useStyles();
    // const dispatch = useDispatch();
    // const inputsDisplay = useSelector((state) => state.inputs.display);


    return (
        <div className={classes.root}>
            VideoSelectDropdown
        </div>
    )
}

export default VideoSelectDropdown;