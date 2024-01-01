import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const userAsyncSlice = createAsyncThunk(
    'get/user',
    async () => {
        const request = await axios.get('http://localhost:8081/user',
        {
            withCredentials: true
        })

        return request.data
    }
)




const initialState = {
    info: [],
};


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // actions
        // например выйти из системы
        // или минусовать бабки хех
        // или поднять бабок
        // или чё угодно короч
    },
    extraReducers: (builder) => {
        builder.addCase(userAsyncSlice.fulfilled, (state, action) => {
            state.info = action.payload
        })
    },
})


export const { actions } = userSlice;

export const userStore = (state) => state.user.info

export default userSlice.reducer