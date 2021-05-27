import { configureStore } from '@reduxjs/toolkit'
import inputsReducer from './inputsSlice'
import eventsReducer from './eventsSlice'

export default configureStore({
    reducer: {
        inputs: inputsReducer,
        events: eventsReducer,
    },
})