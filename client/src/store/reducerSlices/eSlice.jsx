import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action

export const createExercise = createAsyncThunk(
  "createExercise",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://64b779ea21b9aa6eb078267d.mockapi.io/curd",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//read

export const show = createAsyncThunk(
  "showUser",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://64b779ea21b9aa6eb078267d.mockapi.io/curd"
    );

    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//delete

export const deleteE = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://64b779ea21b9aa6eb078267d.mockapi.io/curd/${id}`,
      {
        method: "DELETE",
      }
    );

    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//update action

export const updateExercise = createAsyncThunk(
  "createExercise",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://64b779ea21b9aa6eb078267d.mockapi.io/curd/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const eSlice = createSlice({
  name: "userInfo",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [createExercise.pending]: (state) => {
      state.loading = true;
    },
    [createExercise.fulfilled]: (state, action) => {
      state.loading = false;
      state.user.push(action.payload);
    },
    [createExercise.rejected]: (state) => {
      state.loading = false;
      state.user = state.payload;
    },
    [show.pending]: (state) => {
      state.loading = true;
    },
    [show.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [show.rejected]: (state) => {
      state.loading = false;
      state.user = state.payload;
    },
    [deleteE.pending]: (state) => {
      state.loading = true;
    },
    [deleteE.fulfilled]: (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.user = state.user.filter((ele) => ele.id != id);
      }
    },
    [deleteE.rejected]: (state) => {
      state.loading = false;
      state.user = state.payload;
    },
    [updateExercise.pending]: (state) => {
      state.loading = true;
    },
    [updateExercise.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = state.user.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele
      );
    },
    [updateExercise.rejected]: (state) => {
      state.loading = false;
      state.user = state.payload;
    },
  },
});

export default eSlice.reducer;
