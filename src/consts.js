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

export const TOOLBAR_HEIGHT = 40;
export const LOGS_TITLE_HEIGHT = 30;
export const DEFAULT_VIDEO_HEIGHT = 300;
export const DEFAULT_VIDEO_WIDTH = 530;
export const DEFAULT_POSTER = 'https://www.shortlist.com/media/imager/201905/24024-posts.article_md.jpg';

export const NETWORK_STATE_CODES = {
    0: 'NETWORK_EMPTY',
    1: 'NETWORK_IDLE',
    2: 'NETWORK_LOADING',
    3: 'NETWORK_NO_SOURCE',
}

export const READY_STATE_CODES = {
    0: 'HAVE_NOTHING',
    1: 'HAVE_METADATA',
    2: 'HAVE_CURRENT_DATA',
    3: 'HAVE_FUTURE_DATA',
    4: 'HAVE_ENOUGH_DATA',
}

export const INPUTS = {
    PLAY: {
        name: 'play',
        caption: 'Play',
        icon: <PlayArrowIcon/>,
        action: (ref) => () => ref.current.play()
    },
    PAUSE: {
        name: 'pause',
        caption: 'Pause',
        icon: <PauseIcon/>,
        action: (ref) => () => ref.current.pause()

    },
    AUTOPLAY: {
        name: 'autoplay',
        caption: 'Autoplay',
        defaultValue: false,
        icon: <PlayCircleFilledIcon/>,
        action: (ref) => () => ref.current.autoplay = !ref.current.autoplay
    },
    LOOP: {
        name: 'loop',
        caption: 'Loop',
        icon: <LoopIcon/>,
        action: (ref) => () => ref.current.loop = !ref.current.loop
    },
    MUTED: {
        name: 'muted',
        caption: 'Muted',
        icon: <VolumeOffIcon/>,
        action: (ref) => () => ref.current.muted = !ref.current.muted
    },
    POSTER: {
        name: 'poster',
        caption: 'Poster',
        defaultValue: DEFAULT_POSTER,
        icon: <ImageIcon/>,
        action: (ref) => (poster) => {
            console.log({poster})
            ref.current.poster = poster
        }
    },
    SRC: {
        name: 'src',
        caption: 'Src',
        defaultValue: '',
        icon: <CodeIcon/>,
        action: (ref) => (src) => {
            ref.current.src = src;
            ref.current.load();
        }
    },
    PRELOAD: {
        name: 'preload',
        caption: 'Preload',
        defaultValue: 'none',
        icon: <GetAppIcon/>,
        action: (ref) => (preload) => ref.current.preload = preload
    },
    VOLUME: {
        name: 'volume',
        caption: 'Volume',
        defaultValue: 1,
        icon: <VolumeUpIcon/>,
        action: (ref) => (volume) => {
            console.log(volume)
            ref.current.volume = volume
        }
    },
    WIDTH: {
        name: 'width',
        caption: 'Width',
        icon: <HeightIcon style={{'transform': 'rotate(90deg)'}}/>,
        action: (ref) => (width) => ref.current.width = width
    },
    HEIGHT: {
        name: 'height',
        caption: 'Height',
        icon: <HeightIcon/>,
        action: (ref) => (height) => ref.current.height = height
    },
    CURRENT_TIME: {
        name: 'currentTime',
        caption: 'Current time',
        defaultValue: 0,
        icon: <ScheduleIcon/>,
        action: (ref) => (currentTime) => ref.current.currentTime = currentTime
    },
    PLAYBACK_RATE: {
        name: 'playbackRate',
        caption: 'Playback rate',
        defaultValue: 1,
        icon: <SlowMotionVideoIcon/>,
        action: (ref) => (playbackRate) => ref.current.playbackRate = playbackRate
    },
    PICTURE_IN_PICTURE: {
        name: 'pictureInPicture',
        caption: 'Picture in picture',
        icon: <PictureInPictureAltIcon/>,
        action: (ref) => (checked) => checked && document.pictureInPictureEnabled ?
            ref.current.requestPictureInPicture() : document.exitPictureInPicture()
    },
    FULL_SCREEN: {
        name: 'fullScreen',
        caption: 'Full screen',
        defaultValue: false,
        icon: <FullscreenIcon/>,
        action: (ref) => (checked) => checked && document.fullscreenEnabled ?
            ref.current.requestFullscreen() : document.exitFullscreen()
    },
    CONTROLS: {
        name: 'controls',
        caption: 'Controls',
        defaultValue: true,
        icon: <ControlCameraIcon/>,
        action: (ref) => (checked) => ref.current.controls = checked
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
        defaultValue: '',
        icon: <HourglassEmptyIcon/>
    },
    NETWORK_STATE: {
        name: 'networkState',
        caption: 'Network state',
        defaultValue: '',
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
        dataPath: 'playbackRate'
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
        dataPath: 'volume'
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