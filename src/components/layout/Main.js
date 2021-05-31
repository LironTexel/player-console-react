import React from "react";
import {
    createStyles,
    makeStyles,
} from "@material-ui/core";
import {TOOLBAR_HEIGHT} from "../../consts";
import MainLogsContainer from "./MainLogsContainer";
import VideoContainer from "./VideoContainer";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            height: `calc(100% - ${TOOLBAR_HEIGHT}px)`,
            width: '100%',
            display: 'flex'
        },
        gridItem: {
            border: '1px solid #BBB',
            borderRadius: '5px'
        },
        videoContainer: {
            overflow: 'auto',
            margin: '10px 10px 10px 0',
            width: '100%'
        },
        logsContainer: {
            width: '350px'
        }
    })
);

const Toolbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.logsContainer}>
                <MainLogsContainer/>
            </div>
            <div className={classes.videoContainer}>
                    <VideoContainer/>
            </div>
        </div>
    )
}

export default Toolbar;