import React from "react";
import {
    createStyles,
    makeStyles, Typography,
} from "@material-ui/core";
import InputsDisplaySetting from "./toolbarComponents/InputsDisplaySetting";
import VideoSelectDropdown from "./toolbarComponents/VideoSelectDropdown";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            width: '100%',
            height: '40px',
            background: 'gray',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        title: {
            padding: '20px',
            color: 'white'
        },
        settings: {
            display: 'flex',
        }
    }),
);

const Toolbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.title} variant={"h5"}>Player console</Typography>
            <div className={classes.settings}>
                <VideoSelectDropdown/>
                <InputsDisplaySetting/>
            </div>
        </div>
    )
}

export default Toolbar;