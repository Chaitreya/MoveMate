import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./reducerSlices/authSlice"
import exerciseReducer from "./reducerSlices/eSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    exercise: exerciseReducer,
  },
})