import { createSlice } from '@reduxjs/toolkit'
import { EVENTS_BINDING } from "../consts";

export const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        binds: {
            [EVENTS_BINDING.PLAY.name]: true,
            [EVENTS_BINDING.PAUSE.name]: true,
            [EVENTS_BINDING.PLAYING.name]: true,
            [EVENTS_BINDING.PROGRESS.name]: true,
            [EVENTS_BINDING.RATE_CHANGE.name]: true,
            [EVENTS_BINDING.ABORT.name]: true,
            [EVENTS_BINDING.CAN_PLAY.name]: true,
            [EVENTS_BINDING.CAN_PLAY_THROUGH.name]: true,
            [EVENTS_BINDING.DURATION_CHANGE.name]: true,
            [EVENTS_BINDING.EMPTIED.name]: true,
            [EVENTS_BINDING.ENDED.name]: true,
            [EVENTS_BINDING.ERROR.name]: true,
            [EVENTS_BINDING.LOADED_DATA.name]: true,
            [EVENTS_BINDING.LOADED_METADATA.name]: true,
            [EVENTS_BINDING.LOAD_START.name]: true,
            [EVENTS_BINDING.SEEKED.name]: true,
            [EVENTS_BINDING.SEEKING.name]: true,
            [EVENTS_BINDING.STALLED.name]: true,
            [EVENTS_BINDING.SUSPEND.name]: true,
            [EVENTS_BINDING.TIME_UPDATE.name]: true,
            [EVENTS_BINDING.VOLUME_CHANGE.name]: true,
            [EVENTS_BINDING.WAITING.name]: true,
            // document events
            [EVENTS_BINDING.ON_ENTER_PICTURE_IN_PICTURE.name]: true,
            [EVENTS_BINDING.ON_LEAVE_PICTURE_IN_PICTURE.name]: true,
            [EVENTS_BINDING.ON_FULL_SCREEN_CHANGE.name]: true,
            [EVENTS_BINDING.ON_CONTEXT_MENU.name]: true,
        },
        logs: []
    },
    reducers: {
        setBindActive: (state, { payload }) => {
            const { eventName, value } = payload;
            state.binds[eventName] = value;
        },
        logNewEvent: (state, { payload }) => {
            state.logs.push(payload);
        },
        clearLogs: (state) => {
            console.log('clear');
            state.logs.length = 0;
        },
        toggleAllBinds: (state, { payload }) => {
            for (const bind in state.binds) {
                if (state.binds.hasOwnProperty(bind)) {
                    state.binds[bind] = !!payload;
                }
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { setBindActive, logNewEvent, clearLogs, toggleAllBinds } = eventsSlice.actions;

export default eventsSlice.reducer;