import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const BASE_URL = "http://localhost:4000"
const API_URL = "/api/users"

//get user from local storage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

//Register User
export const register = createAsyncThunk("auth/regiseter", async (user, { rejectWithValue }) => {
    try {
        const response = await axios.post(BASE_URL + API_URL + "/register", user);
        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        return rejectWithValue(message);
    }
})

//Register User
export const login = createAsyncThunk("auth/login", async (user, { rejectWithValue }) => {
    try {
        const response = await axios.post(BASE_URL + API_URL + "/login", user);
        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        return rejectWithValue(message);
    }
})

// logout user
export const logout = createAsyncThunk("user/logout", async () => {
    localStorage.removeItem('user');
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ""
        }
    },
    extraReducers: {
        [register.pending]: (state) => {
            state.isLoading = true
        },
        [register.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        },
        [register.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        },
        [login.pending]: (state) => {
            state.isLoading = true
        },
        [login.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        },
        [login.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        },
        [logout.fulfilled]: (state, action) => {
            state.user = null
        },

    }
})

export const { reset } = authSlice.actions
export default authSlice.reducer