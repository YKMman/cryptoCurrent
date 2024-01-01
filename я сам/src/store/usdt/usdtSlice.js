import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const usdtAsyncSlice = createAsyncThunk(
    'post/usdt',
    async ({ url, arrayCoins }) => {
        const data = []
        for (let i = 0; i < arrayCoins.length; i++) {
            const response = await axios.get(`${url}?symbol=${arrayCoins[i]}`)
            data.push(response.data)
        }

        return data
    }
)



const initialState = {
    coins: []
}


export const usdtSlice = createSlice({
    name: 'usdt',
    initialState,
    reducers: {
        //  ну тут ваще ниче не надо из редьюсеров по-моему ну лан
    },
    extraReducers: (builder) => {
        builder.addCase(usdtAsyncSlice.fulfilled, (state, action) => {
            state.coins = action.payload;
        });
    },
})


export const { actions: coinsActions } = usdtSlice;

export const usdtStore = (state) => state.usdt.coins

export default usdtSlice.reducer