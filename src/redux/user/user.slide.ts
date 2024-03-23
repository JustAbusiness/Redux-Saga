import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface IUser {
  id: number;
  name: string;
  email: string
}

export const fecthListUsers = createAsyncThunk(
  'users/fetchListUsers',
  async (userId, thunkApi) => {
    const response = await fetch('http://localhost:8000/users');
    const data = await response.json();
    return data
  }
)

interface IUserPayload {
  email: string,
  name: string  
}

export const createNewUser = createAsyncThunk(
  'users/createNewUser',
  async (payload:IUserPayload, thunkApi) => {
    const response = await fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...payload }),
    });

    const data = await response.json();
    console.log(data)
    if (data & data.id) {
      thunkApi.dispatch(fecthListUsers());
    }
    return data
  }
)


const initialState: {
  listUsers: IUser[],
  isCreateSuccess: boolean
} = {
  listUsers: [],
  isCreateSuccess: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetCreate(state) {
      state.isCreateSuccess = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fecthListUsers.fulfilled, (state, action) => {
        state.listUsers = action.payload
      }),
    builder.addCase(createNewUser.fulfilled, (state, action) => {
      state.isCreateSuccess = true
    })  
  }
});

export const { resetCreate } = userSlice.actions;
export const selectCount = (state: RootState) => state.count.value;

export default userSlice.reducer;
