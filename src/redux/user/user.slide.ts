import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface IUser {
  id: number;
  name: string;
  email: string;
}

export const fecthListUsers = createAsyncThunk(
  "users/fetchListUsers",
  async (userId, thunkApi) => {
    const response = await fetch("http://localhost:8000/users");
    const data = await response.json();
    return data;
  }
);

interface IUserPayload {
  email: string;
  name: string;
}

export const createNewUser = createAsyncThunk(
  "users/createNewUser",
  async (payload: IUserPayload, thunkApi) => {
    const response = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...payload }),
    });

    const data = await response.json();
    console.log(data);
    if (data & data.id) {
      thunkApi.dispatch(fecthListUsers());
    }
    return data;
  }
);

export const updateAUser = createAsyncThunk(
  "users/updateAUser",
  async (payload: IUserPayload, thunkApi) => {
    const response = await fetch(`http://localhost:8000/users/${payload.id}`, {
      method: "PUT",
      body: JSON.stringify({
        email: payload.email,
        name: payload.name,
      }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    if (data & data.id) {
      thunkApi.dispatch(fecthListUsers());
    }
    return data;
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (payload: any, thunkApi) => {
    const response = await fetch(`http://localhost:8000/users/${payload.id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    thunkApi.dispatch(fecthListUsers());
    return data;
  }
);

const initialState: {
  listUsers: IUser[];
  isCreateSuccess: boolean;
  isDeleteSuccess: boolean;
  isUpdateSuccess: boolean;
} = {
  listUsers: [],
  isCreateSuccess: false,
  isDeleteSuccess: false,
  isUpdateSuccess: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetCreate(state) {
      state.isCreateSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fecthListUsers.fulfilled, (state, action) => {
      state.listUsers = action.payload;
    });
    builder.addCase(createNewUser.fulfilled, (state, action) => {
      state.isCreateSuccess = true;
    })
    .addCase(updateAUser.fulfilled, (state, action) => {
      state.isUpdateSuccess = true
    })
    .addCase(deleteUser.fulfilled, (state, action) => {
      state.isDeleteSuccess = true
    })
  },
});

export const { resetCreate } = userSlice.actions;
export const selectCount = (state: RootState) => state.count.value;

export default userSlice.reducer;
