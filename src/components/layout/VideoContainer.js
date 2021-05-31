import React, {createRef} from "react";
import {
    createStyles,
    makeStyles,
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {EVENTS_BINDING } from "../../consts";
import englishSubtitles from "../../assets/subtitles/english.vtt"
import frenchSubtitles from "../../assets/subtitles/french.vtt"
import {logNewEvent} from "../../store/eventsSlice";
import {updateStatus} from "../../store/inputsSlice";
import DashboardContainer from "./DashboardContainer";
import styled from "styled-components";
import clsx from "clsx";

const GridLayout = styled.div`
  height: 100%;
  display: grid;
  row-gap: 5px;
  grid-template:
    "StyledVideoElContainer" 1fr
    "StyledDashboardContainer" 4fr
`;

const StyledVideoElContainer = styled.div`
  grid-area: StyledVideoElContainer;
  resize: vertical;
`;

const StyledDashboardContainer = styled.div`
  grid-area: StyledDashboardContainer;
`;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
        },
        gridItem: {
            border: '1px solid #BBB',
            borderRadius: '5px'
        },
        videoElContainer: {
            overflow: 'auto',
            resize: 'vertical',
            height: '350px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        dashboardContainer: {
            padding: '10px',
            background: '#f1f1f1',
        }
    }),
);

const VideoContainer = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const binds = useSelector((state) => state.events.binds);
    const videoRef = createRef();

    const createEventCallback = ({name, color, dataPath}) => {
        return binds[name] ? (() => {
                handleLog({name, color, dataPath})
                updateStatus({name, data: videoRef.current[dataPath]})
            })
        : undefined;
    }

    const handleLog = ({name, color, dataPath}) => {
        // console.log(name);
        // console.log(videoRef.current[dataPath]);
        dispatch(logNewEvent({ name, color, data: videoRef.current[dataPath] }));
    }

    return (
        <GridLayout>
            <StyledVideoElContainer className={clsx(classes.gridItem, classes.videoElContainer)}>
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

                    <source src="http://techslides.com/demos/sample-videos/small.webm" type="video/webm"/>
                    <source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/ogg"/>
                    <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4"/>
                    <source src="http://techslides.com/demos/sample-videos/small.3gp" type="video/3gp"/>

                    {/*<source src="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4" type="video/mp4"/>*/}
                    {/*<source src="https://archive.org/download/ElephantsDream/ed_hd.ogv" type="video/ogg"/>*/}
                    {/*<source src="https://archive.org/download/ElephantsDream/ed_hd.avi" type="video/avi"/>*/}
                    <track kind="subtitles" label="english subtitles" src={englishSubtitles} srcLang="en"/>
                    <track kind="subtitles" label="french subtitles" src={frenchSubtitles} srcLang="fr"/>
                        Your browser doesn't support HTML5 video tag.
                </video>
            </StyledVideoElContainer>
            <StyledDashboardContainer className={clsx(classes.gridItem, classes.dashboardContainer)}>
                <DashboardContainer ref={videoRef}/>
            </StyledDashboardContainer>
        </GridLayout>
    )
}

export default VideoContainer;