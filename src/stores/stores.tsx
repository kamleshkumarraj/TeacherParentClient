import {configureStore} from '@reduxjs/toolkit'
import { authSlice } from './slice/auth.slice'
import { studentApi } from '../api/studentApi'

export const store = configureStore({
    reducer : {
        // Add your reducers here
        [studentApi.reducerPath]: studentApi.reducer,
        
    },
    middleware: (defaultMiddleware) => [...defaultMiddleware(), studentApi.middleware]
})