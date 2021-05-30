import { createSlice } from '@reduxjs/toolkit'
import {DEFAULT_VIDEO_HEIGHT, DEFAULT_VIDEO_WIDTH, INPUTS} from "../consts";

export const inputsSlice = createSlice({
    name: 'inputs',
    initialState: {
        display: {
            // mutable inputs
            [INPUTS.PLAY.name]: true,
            [INPUTS.PAUSE.name]: true,
            [INPUTS.AUTOPLAY.name]: true,
            [INPUTS.LOOP.name]: true,
            [INPUTS.MUTED.name]: true,
            [INPUTS.POSTER.name]: true,
            [INPUTS.SRC.name]: true,
            [INPUTS.PRELOAD.name]: true,
            [INPUTS.VOLUME.name]: true,
            [INPUTS.WIDTH.name]: true,
            [INPUTS.HEIGHT.name]: true,
            [INPUTS.CURRENT_TIME.name]: true,
            [INPUTS.PLAYBACK_RATE.name]: true,
            [INPUTS.PICTURE_IN_PICTURE.name]: true,
            [INPUTS.FULL_SCREEN.name]: true,
            [INPUTS.CONTROLS.name]: true,
            // read only inputs
            [INPUTS.DURATION.name]: true,
            [INPUTS.PLAYBACK_QUALITY.name]: true,
            [INPUTS.READY_STATE.name]: true,
            [INPUTS.NETWORK_STATE.name]: true,
            [INPUTS.TEXT_TRACKS.name]: true,
        },
        status: {
            [INPUTS.PLAY.name]: null,
            [INPUTS.PAUSE.name]: null,
            [INPUTS.AUTOPLAY.name]: null,
            [INPUTS.LOOP.name]: null,
            [INPUTS.MUTED.name]: null,
            [INPUTS.POSTER.name]: null,
            [INPUTS.SRC.name]: null,
            [INPUTS.PRELOAD.name]: null,
            [INPUTS.VOLUME.name]: null,
            [INPUTS.WIDTH.name]: DEFAULT_VIDEO_WIDTH,
            [INPUTS.HEIGHT.name]: DEFAULT_VIDEO_HEIGHT,
            [INPUTS.CURRENT_TIME.name]: null,
            [INPUTS.PLAYBACK_RATE.name]: null,
            [INPUTS.PICTURE_IN_PICTURE.name]: null,
            [INPUTS.FULL_SCREEN.name]: null,
            [INPUTS.CONTROLS.name]: null,
            // read only inputs
            [INPUTS.DURATION.name]: null,
            [INPUTS.PLAYBACK_QUALITY.name]: null,
            [INPUTS.READY_STATE.name]: null,
            [INPUTS.NETWORK_STATE.name]: null,
            [INPUTS.TEXT_TRACKS.name]: null,
        }
    },
    reducers: {
        setInputDisplay: (state, { payload }) => {
            const { inputName, value } = payload;
            state.display[inputName] = value;
        },
        setBulkInputDisplay: (state, { payload }) => {
            for (const input in state.display) {
                if (state.display.hasOwnProperty(input)) {
                    state.display[input] = payload;
                }
            }
        },
        updateStatus: (state, { payload }) => {
            const { inputName, data } = payload;
            if (state.status || state.status === null) {
                state.status[inputName] = data;
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { setInputDisplay, setBulkInputDisplay, updateStatus } = inputsSlice.actions

export default inputsSlice.reducer