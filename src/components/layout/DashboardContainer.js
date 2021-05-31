import React, { forwardRef, useEffect, useState } from "react";
import {
    Button,
    createStyles,
    makeStyles, Typography,
} from "@material-ui/core";
import {useSelector} from "react-redux";
import {DEFAULT_VIDEO_HEIGHT, DEFAULT_VIDEO_WIDTH, INPUTS, NETWORK_STATE_CODES, READY_STATE_CODES} from "../../consts";
import DashboardInput from "../inputs/DashboardInput";
import {VolumeDown, VolumeUp} from "@material-ui/icons";
import SliderInput from "../inputs/SliderInput";
import SwitchInput from "../inputs/SwitchInput";
import TextInput from "../inputs/TextInput";
import ToggleGroupInput from "../inputs/ToggleGroupInput";
import clsx from "clsx";
import ReadOnlyInput from "../inputs/ReadOnlyInput";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
        },
        inputsContainer: {
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        input: {
            // background: 'red',
            margin: '0 5px 5px 0',
            minWidth: '200px',
            width: 'calc(16% - 5px)',
            // display: 'none'
            '&.wide': {
                width: 'calc(32% - 5px)',
                minWidth: '400px',
            }
        },
        buttonInput: {
            width: '100%',
        },
    }),
);

const DashboardContainer = forwardRef((props, ref) => {
    const classes = useStyles();
    const inputsDisplay = useSelector((state) => state.inputs.display);
    // eslint-disable-next-line no-unused-vars
    const [refObj, setRefObj] = useState(null)
    const [volume, setVolume] = useState(INPUTS.VOLUME.defaultValue);
    const [currentTime, setCurrentTime] = useState(INPUTS.CURRENT_TIME.defaultValue);
    const [duration, setDuration] = useState(0);
    const [height, setHeight] = useState(DEFAULT_VIDEO_HEIGHT);
    const [width, setWidth] = useState(DEFAULT_VIDEO_WIDTH);
    const [playbackRate, setPlaybackRate] = useState(INPUTS.PLAYBACK_RATE.defaultValue);
    const [poster, setPoster] = useState(INPUTS.POSTER.defaultValue);
    const [src, setSrc] = useState(INPUTS.SRC.defaultValue);
    const [preload, setPreload] = useState(INPUTS.PRELOAD.defaultValue);
    const [controls, setControls] = useState(INPUTS.CONTROLS.defaultValue);
    const [fullscreen, setFullscreen] = useState(INPUTS.FULL_SCREEN.defaultValue);
    const [readyState, setReadyState] = useState(INPUTS.READY_STATE.defaultValue);
    const [networkState, setNetworkState] = useState(INPUTS.NETWORK_STATE.defaultValue);


    const roundFix = (num, toFixed = 2) => {
        return parseFloat(num).toFixed(toFixed);
    }

    // unable to map normal textTrack object
    const getTextTracks = (tracksData = []) => {
        let arr = [];
        for (let i = 0; i < tracksData.length; i++) {
            arr[i] = {};
            arr[i].kind = tracksData[i].kind;
            arr[i].label = tracksData[i].label;
            arr[i].language = tracksData[i].language;
        }
        return arr.map(track => <div>{track.kind}, "{track.label}", {track.language}</div>);
    }

    useEffect(() => {
        setRefObj(ref);
        window.video = ref?.current;
        if (ref?.current) {
            ref.current.height = height;
            ref.current.width = width;
            ref.current.poster = poster;
            ref.current.onvolumechange = () => setVolume(roundFix(ref.current.volume));
            ref.current.ontimeupdate = () => setCurrentTime(roundFix(ref.current.currentTime));
            ref.current.ondurationchange = () => setDuration(roundFix(ref.current.duration));
            ref.current.onstalled = ref.current.onsuspend = ref.current.oncanplaythrough =
                ref.current.oncanplay = ref.current.onloadedmetadata = ref.current.onwaiting = () => {
                setReadyState(ref?.current?.readyState);
                setNetworkState(ref?.current?.networkState)
            }
        }
    }, [height, poster, ref, width])

    return (
        <div className={classes.root}>
            <Typography>Mutable props</Typography>
            <div className={classes.inputsContainer}>
                { inputsDisplay[INPUTS.PLAY.name] &&
                    <DashboardInput icon={INPUTS.PLAY.icon} className={classes.input}>
                        <Button onClick={INPUTS.PLAY.action(ref)} className={classes.buttonInput}>
                            {INPUTS.PLAY.caption}
                        </Button>
                    </DashboardInput>
                }
                { inputsDisplay[INPUTS.PAUSE.name] &&
                    <DashboardInput icon={INPUTS.PAUSE.icon} className={classes.input}>
                        <Button onClick={INPUTS.PAUSE.action(ref)} className={classes.buttonInput}>
                            {INPUTS.PAUSE.caption}
                        </Button>
                    </DashboardInput>
                }
                { inputsDisplay[INPUTS.LOOP.name] &&
                    <DashboardInput icon={INPUTS.LOOP.icon} className={classes.input}>
                        <SwitchInput caption={INPUTS.LOOP.caption}
                                     // icon={INPUTS.LOOP.icon}
                                     onChange={INPUTS.LOOP.action(ref)}
                        />
                    </DashboardInput>
                }
                { inputsDisplay[INPUTS.MUTED.name] &&
                    <DashboardInput icon={INPUTS.MUTED.icon} className={classes.input}>
                        <SwitchInput caption={INPUTS.MUTED.caption}
                                     // icon={INPUTS.MUTED.icon}
                                     onChange={INPUTS.MUTED.action(ref)}
                        />
                    </DashboardInput>
                }
                { inputsDisplay[INPUTS.AUTOPLAY.name] &&
                    <DashboardInput icon={INPUTS.AUTOPLAY.icon} className={classes.input}>
                        <SwitchInput caption={INPUTS.AUTOPLAY.caption}
                                     // value={INPUTS.AUTOPLAY.defaultValue}
                                     // icon={INPUTS.AUTOPLAY.icon}
                                     onChange={INPUTS.AUTOPLAY.action(ref)}
                        />
                    </DashboardInput>
                }
                { inputsDisplay[INPUTS.CONTROLS.name] &&
                    <DashboardInput icon={INPUTS.CONTROLS.icon} className={classes.input}>
                        <SwitchInput caption={INPUTS.CONTROLS.caption}
                                     value={controls}
                                     onChange={(event, checked) => {
                                         setControls(checked);
                                         INPUTS.CONTROLS.action(ref)(checked)
                                     }}
                        />
                    </DashboardInput>
                }
                { inputsDisplay[INPUTS.VOLUME.name] &&
                    <DashboardInput icon={INPUTS.VOLUME.icon} className={classes.input}>
                        <SliderInput caption={INPUTS.VOLUME.caption}
                                     leftIcon={<VolumeDown/>}
                                     rightIcon={<VolumeUp/>}
                                     value={volume}
                                     minValue={0}
                                     maxValue={1}
                                     step={0.01}
                                     onChange={(event, volume) => INPUTS.VOLUME.action(ref)(volume)}/>
                    </DashboardInput>
                }
                { inputsDisplay[INPUTS.CURRENT_TIME.name] &&
                    <DashboardInput icon={INPUTS.CURRENT_TIME.icon} className={classes.input}>
                        <SliderInput caption={INPUTS.CURRENT_TIME.caption}
                                     leftIcon={0}
                                     rightIcon={duration}
                                     value={currentTime || 0}
                                     minValue={0}
                                     maxValue={duration || 0}
                                     step={1}
                                     disabled={!duration}
                                     onChange={(event, currentTime) => INPUTS.CURRENT_TIME.action(ref)(currentTime)}/>
                    </DashboardInput>
                }
                { inputsDisplay[INPUTS.HEIGHT.name] &&
                    <DashboardInput icon={INPUTS.HEIGHT.icon} className={classes.input}>
                        <SliderInput caption={INPUTS.HEIGHT.caption}
                                     // leftIcon={INPUTS.HEIGHT.icon}
                                     value={height}
                                     minValue={0}
                                     maxValue={700}
                                     step={1}
                                     onChange={(event, height) => {
                                         setHeight(height);
                                         INPUTS.HEIGHT.action(ref)(height)
                                     }}/>
                    </DashboardInput>
                }
                { inputsDisplay[INPUTS.WIDTH.name] &&
                    <DashboardInput icon={INPUTS.WIDTH.icon} className={classes.input}>
                        <SliderInput caption={INPUTS.WIDTH.caption}
                                     // leftIcon={INPUTS.WIDTH.icon}
                                     value={width}
                                     minValue={0}
                                     maxValue={700}
                                     step={1}
                                     onChange={(event, width) => {
                                         setWidth(width);
                                         INPUTS.WIDTH.action(ref)(width)
                                     }}/>
                    </DashboardInput>
                }
                {inputsDisplay[INPUTS.PLAYBACK_RATE.name] &&
                    <DashboardInput icon={INPUTS.PLAYBACK_RATE.icon} className={classes.input}>
                        <SliderInput caption={INPUTS.PLAYBACK_RATE.caption}
                                     // leftIcon={INPUTS.PLAYBACK_RATE.icon}
                                     value={playbackRate}
                                     minValue={0}
                                     maxValue={6}
                                     step={0.25}
                                     onChange={(event, playbackRate) => {
                                         setPlaybackRate(playbackRate);
                                         INPUTS.PLAYBACK_RATE.action(ref)(playbackRate)
                                     }}/>
                    </DashboardInput>
                }
                { inputsDisplay[INPUTS.POSTER.name] &&
                    <DashboardInput icon={INPUTS.POSTER.icon} className={classes.input}>
                        <TextInput
                            caption={INPUTS.POSTER.caption}
                            // icon={INPUTS.POSTER.icon}
                            value={poster}
                            onChange={(event) => {
                            setPoster(event.target.value);
                            INPUTS.POSTER.action(ref)(event.target.value)
                        }}/>
                    </DashboardInput>
                }
                { inputsDisplay[INPUTS.SRC.name] &&
                    <DashboardInput icon={INPUTS.SRC.icon} className={classes.input}>
                        <TextInput
                            caption={INPUTS.SRC.caption}
                            // icon={INPUTS.SRC.icon}
                            value={src}
                            onChange={(event) => {
                                setSrc(event.target.value);
                                INPUTS.SRC.action(ref)(event.target.value)
                            }}/>
                    </DashboardInput>
                }
                { inputsDisplay[INPUTS.PRELOAD.name] &&
                    <DashboardInput icon={INPUTS.PRELOAD.icon} className={clsx(classes.input, 'wide')}>
                        <ToggleGroupInput
                            caption={INPUTS.PRELOAD.caption}
                            // icon={INPUTS.PRELOAD.icon}
                            options={['none', 'metadata', 'auto']}
                            value={preload}
                            onChange={(event, value) => {
                                setPreload(value)
                                INPUTS.PRELOAD.action(ref)(value)
                            }}/>
                    </DashboardInput>
                }
                { inputsDisplay[INPUTS.PICTURE_IN_PICTURE.name] &&
                    <DashboardInput icon={INPUTS.PICTURE_IN_PICTURE.icon} className={classes.input}>
                        <SwitchInput caption={INPUTS.PICTURE_IN_PICTURE.caption}
                                     disabled={!duration}
                                     onChange={(event, checked) => {
                                         INPUTS.PICTURE_IN_PICTURE.action(ref)(checked)
                                     }}
                        />
                    </DashboardInput>
                }
                { inputsDisplay[INPUTS.FULL_SCREEN.name] &&
                    <DashboardInput icon={INPUTS.FULL_SCREEN.icon} className={classes.input}>
                        <SwitchInput caption={INPUTS.FULL_SCREEN.caption}
                                     value={fullscreen}
                                     onChange={(event, checked) => {
                                         INPUTS.FULL_SCREEN.action(ref)(checked);
                                         // auto exit from full screen
                                         setTimeout(() => {
                                             INPUTS.FULL_SCREEN.action(ref)(false)
                                             setFullscreen(false);
                                         }, 2000)
                                     }}
                        />
                    </DashboardInput>
                }
            </div>
            <Typography>Read only props</Typography>
            <div className={classes.inputsContainer}>
                { inputsDisplay[INPUTS.READY_STATE.name] &&
                    <DashboardInput icon={INPUTS.READY_STATE.icon} className={classes.input}>
                        <ReadOnlyInput caption={INPUTS.READY_STATE.caption}>
                            {READY_STATE_CODES[readyState]}
                        </ReadOnlyInput>
                    </DashboardInput>
                }
                { inputsDisplay[INPUTS.NETWORK_STATE.name] &&
                    <DashboardInput icon={INPUTS.NETWORK_STATE.icon} className={classes.input}>
                        <ReadOnlyInput caption={INPUTS.NETWORK_STATE.caption}>
                            {NETWORK_STATE_CODES[networkState]}
                        </ReadOnlyInput>
                    </DashboardInput>
                }
                { inputsDisplay[INPUTS.TEXT_TRACKS.name] &&
                    <DashboardInput icon={INPUTS.TEXT_TRACKS.icon} className={clsx(classes.input, 'wide')}>
                        <ReadOnlyInput caption={INPUTS.TEXT_TRACKS.caption}>
                            {getTextTracks(ref?.current?.textTracks)}
                        </ReadOnlyInput>
                    </DashboardInput>
                }
                { inputsDisplay[INPUTS.PLAYBACK_QUALITY.name] &&
                    <DashboardInput icon={INPUTS.PLAYBACK_QUALITY.icon} className={clsx(classes.input, 'wide')}>
                        <ReadOnlyInput caption={INPUTS.PLAYBACK_QUALITY.caption}>
                            <div>Total frames: <span>{ref?.current?.getVideoPlaybackQuality().totalVideoFrames}</span></div>
                            <div>Dropped frames: <span>{ref?.current?.getVideoPlaybackQuality().droppedVideoFrames}</span></div>
                        </ReadOnlyInput>
                    </DashboardInput>
                }
            </div>
        </div>
    )
})

export default DashboardContainer;