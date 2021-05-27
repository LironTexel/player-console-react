import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import LoopIcon from '@material-ui/icons/Loop';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import PictureInPictureAltIcon from '@material-ui/icons/PictureInPictureAlt';
import GetAppIcon from '@material-ui/icons/GetApp';
import ImageIcon from '@material-ui/icons/Image';
import HeightIcon from '@material-ui/icons/Height';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import ControlCameraIcon from '@material-ui/icons/ControlCamera';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import CodeIcon from '@material-ui/icons/Code';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import NetworkCheckIcon from '@material-ui/icons/NetworkCheck';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import UpdateIcon from '@material-ui/icons/Update';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import PauseIcon from '@material-ui/icons/Pause';
import {Colors} from "./styles/colors";


export const INPUTS = {
    PLAY: {
        name: 'play',
        caption: 'Play',
        icon: <PlayArrowIcon/>
    },
    PAUSE: {
        name: 'pause',
        caption: 'Pause',
        icon: <PauseIcon/>
    },
    AUTOPLAY: {
        name: 'autoplay',
        caption: 'Autoplay',
        icon: <PlayCircleFilledIcon/>
    },
    LOOP: {
        name: 'loop',
        caption: 'Loop',
        icon: <LoopIcon/>
    },
    MUTED: {
        name: 'muted',
        caption: 'Muted',
        icon: <VolumeOffIcon/>
    },
    POSTER: {
        name: 'poster',
        caption: 'Poster',
        icon: <ImageIcon/>
    },
    SRC: {
        name: 'src',
        caption: 'Src',
        icon: <CodeIcon/>
    },
    PRELOAD: {
        name: 'preload',
        caption: 'Preload',
        icon: <GetAppIcon/>
    },
    VOLUME: {
        name: 'volume',
        caption: 'Volume',
        icon: <VolumeUpIcon/>
    },
    WIDTH: {
        name: 'width',
        caption: 'Width',
        icon: <HeightIcon style={{'transform': 'rotate(90deg)'}}/>
    },
    HEIGHT: {
        name: 'height',
        caption: 'Height',
        icon: <HeightIcon/>
    },
    CURRENT_TIME: {
        name: 'currentTime',
        caption: 'Current time',
        icon: <ScheduleIcon/>
    },
    PLAYBACK_RATE: {
        name: 'playbackRate',
        caption: 'Playback rate',
        icon: <SlowMotionVideoIcon/>
    },
    PICTURE_IN_PICTURE: {
        name: 'pictureInPicture',
        caption: 'Picture in picture',
        icon: <PictureInPictureAltIcon/>
    },
    FULL_SCREEN: {
        name: 'fullScreen',
        caption: 'Full screen',
        icon: <FullscreenIcon/>
    },
    CONTROLS: {
        name: 'controls',
        caption: 'Controls',
        icon: <ControlCameraIcon/>
    },
    // read only inputs
    DURATION: {
        name: 'duration',
        caption: 'Duration',
        icon: <UpdateIcon/>
    },
    PLAYBACK_QUALITY: {
        name: 'playbackQuality',
        caption: 'Playback quality',
        icon: <EqualizerIcon/>
    },
    READY_STATE: {
        name: 'readyState',
        caption: 'Ready state',
        icon: <HourglassEmptyIcon/>
    },
    NETWORK_STATE: {
        name: 'networkState',
        caption: 'Network state',
        icon: <NetworkCheckIcon/>
    },
    TEXT_TRACKS: {
        name: 'textTracks',
        caption: 'Text tracks',
        icon: <SubtitlesIcon/>
    },
}

export const EVENTS_BINDING = {
    PLAY: {
        name: 'play',
        color: Colors.GREEN,
        dataPath: ''
    },
    PAUSE: {
        name: 'pause',
        dataPath: ''
    },
    PLAYING: {
        name: 'playing',
        color: Colors.DARK_GREEN,
        dataPath: ''
    },
    PROGRESS: {
        name: 'progress',
        color: Colors.BLUE,
        dataPath: ''
    },
    RATE_CHANGE: {
        name: 'ratechange',
        dataPath: ''
    },
    ABORT: {
        name: 'abort',
        color: Colors.ORANGE,
        dataPath: ''
    },
    CAN_PLAY: {
        name: 'canplay',
        color: Colors.TEAL,
        dataPath: ''
    },
    CAN_PLAY_THROUGH: {
        name: 'canplaythrough',
        color: Colors.DARK_TEAL,
        dataPath: ''
    },
    DURATION_CHANGE: {
        name: 'durationchange',
        dataPath: ''
    },
    EMPTIED: {
        name: 'emptied',
        dataPath: ''
    },
    ENDED: {
        name: 'ended',
        dataPath: ''
    },
    ERROR: {
        name: 'error',
        color: Colors.ERROR_RED,
        dataPath: ''
    },
    LOADED_DATA: {
        name: 'loadeddata',
        dataPath: ''
    },
    LOADED_METADATA: {
        name: 'loadedmetadata',
        dataPath: ''
    },
    LOAD_START: {
        name: 'loadstart',
        dataPath: ''
    },
    SEEKED: {
        name: 'seeked',
        dataPath: ''
    },
    SEEKING: {
        name: 'seeking',
        dataPath: ''
    },
    STALLED: {
        name: 'stalled',
        dataPath: ''
    },
    SUSPEND: {
        name: 'suspend',
        dataPath: ''
    },
    TIME_UPDATE: {
        name: 'timeupdate',
        dataPath: 'currentTime'
    },
    VOLUME_CHANGE: {
        name: 'volumechange',
        dataPath: ''
    },
    WAITING: {
        name: 'waiting',
        dataPath: ''
    },
    ON_ENTER_PICTURE_IN_PICTURE: {
        name: 'onenterpictureinpicture',
        dataPath: ''
    },
    ON_LEAVE_PICTURE_IN_PICTURE: {
        name: 'onleavepictureinpicture',
        dataPath: ''
    },
    ON_FULL_SCREEN_CHANGE: {
        name: 'onfullscreenchange',
        dataPath: ''
    },
    ON_CONTEXT_MENU: {
        name: 'oncontextmenu',
        dataPath: ''
    }
}

export const TOOLBAR_HEIGHT = 40;
export const LOGS_TITLE_HEIGHT = 30;
export const DEFAULT_VIDEO_HEIGHT = 300;
export const DEFAULT_VIDEO_WIDTH = 600;