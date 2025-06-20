import {configureStore} from '@reduxjs/toolkit'
import { authSlice } from './slice/auth.slice'

export const store = configureStore({
    reducer : {
        // Add your reducers here
        auth : authSlice,
        
    },
    middleware : (defaultMiddleware) => [...defaultMiddleware()]
})