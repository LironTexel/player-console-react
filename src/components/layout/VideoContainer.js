import React from "react";
import {
    createStyles,
    makeStyles,
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {EVENTS_BINDING } from "../../consts";
import englishSubtitles from "../../assets/subtitles/english.vtt"
import frenchSubtitles from "../../assets/subtitles/french.vtt"
import {logNewEvent} from "../../store/eventsSlice";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
    }),
);

const VideoContainer = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const binds = useSelector((state) => state.events.binds);
    const videoRef = React.createRef();

    const createEventCallback = ({name, color, dataPath}) => {
        return binds[name] ? (() => handleLog({name, color, dataPath})) : undefined;
    }

    const handleLog = ({name, color, dataPath}) => {
        // console.log(name);
        // console.log(videoRef.current[dataPath]);
        dispatch(logNewEvent({ name, color, data: videoRef.current[dataPath] }));
    }

    return (
        <div className={classes.root}>
            <video className="player"
                   ref={videoRef}
                   preload="none"
                   controls="controls"
                   onContextMenu={createEventCallback(EVENTS_BINDING.ON_CONTEXT_MENU)}
                   onPlay={createEventCallback(EVENTS_BINDING.PLAY)}
                   onPause={createEventCallback(EVENTS_BINDING.PAUSE)}
                   onPlaying={createEventCallback(EVENTS_BINDING.PLAYING)}
                   onProgress={createEventCallback(EVENTS_BINDING.PROGRESS)}
                   onRateChange={createEventCallback(EVENTS_BINDING.RATE_CHANGE)}
                   onAbort={createEventCallback(EVENTS_BINDING.ABORT)}
                   onCanPlay={createEventCallback(EVENTS_BINDING.CAN_PLAY)}
                   onCanPlayThrough={createEventCallback(EVENTS_BINDING.CAN_PLAY_THROUGH)}
                   onDurationChange={createEventCallback(EVENTS_BINDING.DURATION_CHANGE)}
                   onEmptied={createEventCallback(EVENTS_BINDING.EMPTIED)}
                   onEnded={createEventCallback(EVENTS_BINDING.ENDED)}
                   onError={createEventCallback(EVENTS_BINDING.ERROR)}
                   onLoadedData={createEventCallback(EVENTS_BINDING.LOADED_DATA)}
                   onLoadedMetadata={createEventCallback(EVENTS_BINDING.LOADED_METADATA)}
                   onLoadStart={createEventCallback(EVENTS_BINDING.LOAD_START)}
                   onSeeked={createEventCallback(EVENTS_BINDING.SEEKED)}
                   onSeeking={createEventCallback(EVENTS_BINDING.SEEKING)}
                   onStalled={createEventCallback(EVENTS_BINDING.STALLED)}
                   onSuspend={createEventCallback(EVENTS_BINDING.SUSPEND)}
                   onTimeUpdate={createEventCallback(EVENTS_BINDING.TIME_UPDATE)}
                   onVolumeChange={createEventCallback(EVENTS_BINDING.VOLUME_CHANGE)}
                   onWaiting={createEventCallback(EVENTS_BINDING.WAITING)}
            >
                <source src="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4" type="video/mp4"/>
                <source src="https://archive.org/download/ElephantsDream/ed_hd.ogv" type="video/ogg"/>
                <source src="https://archive.org/download/ElephantsDream/ed_hd.avi" type="video/avi"/>
                <track kind="subtitles" label="english subtitles" src={englishSubtitles} srcLang="en"/>
                <track kind="subtitles" label="french subtitles" src={frenchSubtitles} srcLang="fr"/>
                    Your browser doesn't support HTML5 video tag.
            </video>
        </div>
    )
}

export default VideoContainer;