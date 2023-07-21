import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./reducerSlices/authSlice"
import eSlice from './reducerSlices/eSlice'

export const store = configureStore({
  reducer: { auth: authReducer , app:eSlice },
})