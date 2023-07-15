import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./reducerSlices/authSlice"

export const store = configureStore({
  reducer: { auth: authReducer },
})