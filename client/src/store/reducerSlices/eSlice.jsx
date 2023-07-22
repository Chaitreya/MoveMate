import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:4000"
const API_URL = "/api/goals"

const initialState = {

    exer: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ""
}


// create exercise
export const createExercise = createAsyncThunk(
    "create/Exercise",
    async (exerciseData, { rejectWithValue, getState }) => {
        try {
            const token = getState().auth.user.token;
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.post(BASE_URL + API_URL, exerciseData, config)
            return response.data;
        } catch (err) {
            const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
            return rejectWithValue(message);
        }
    }
);

//get Exercises

export const getExercises = createAsyncThunk(
    "get/Exercises",
    async (args, { rejectWithValue, getState }) => {
        try {
            const token = getState().auth.user.token;
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            const response = await axios.get(BASE_URL + API_URL, config);
            return response.data;
        } catch (err) {
            const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
            return rejectWithValue(message);
        }
    }
);

// delete Exercise
export const deleteExercise = createAsyncThunk(
    "delete/Exercise",
    async (id, { rejectWithValue, getState }) => {
        try {
            const token = getState().auth.user.token;
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            const response = await axios.delete(BASE_URL + API_URL + "/" + id, config)
            return response.data;
        } catch (err) {
            const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
            return rejectWithValue(message);
        }
    }
);

//update action
export const updateExercise = createAsyncThunk(
    "update/Exercise",
    async (updatedData, { rejectWithValue }) => {
        try {
            const token = getState().auth.user.token;
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.patch(BASE_URL + API_URL + `/${updatedData._id}`, updatedData, config);
            return response.data;
        } catch (err) {
            const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
            return rejectWithValue(message);
        }
    }
);

const eSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        reset: (state) => {
            state.exer = []
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ""
        }
    },
    extraReducers: {
        [createExercise.pending]: (state) => {
            state.isLoading = true;
        },
        [createExercise.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.exer.push(action.payload);
        },
        [createExercise.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        },
        [getExercises.pending]: (state) => {
            state.isLoading = true;
        },
        [getExercises.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.exer = action.payload;
        },
        [getExercises.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        },
        [deleteExercise.pending]: (state) => {
            state.isLoading = true;
        },
        [deleteExercise.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.exer = state.exer.filter((exercise) => exercise._id !== action.payload.id);
        },
        [deleteExercise.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        },
        [updateExercise.pending]: (state) => {
            state.isLoading = true;
        },
        [updateExercise.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.exer = state.exer.map((ele) =>
                ele.id === action.payload.id ? action.payload : ele
            );
        },
        [updateExercise.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        },
    },
});

export const { reset } = eSlice.actions
export default eSlice.reducer;
