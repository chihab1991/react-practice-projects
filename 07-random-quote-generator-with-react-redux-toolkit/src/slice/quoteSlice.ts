import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	quote: {},
	isLoading: false,
	isError: false,
};

export const fetchQuote = createAsyncThunk("quote/fetchQuote", async () => {
	const res = await axios("https://api.quotable.io/random");
	const data = await res.data;
	return data;
});

export const quoteSlice = createSlice({
	name: "quote",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchQuote.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchQuote.fulfilled, (state, action) => {
			state.isLoading = false;
			state.quote = action.payload;
		});
		builder.addCase(fetchQuote.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
		});
	},
});

export default quoteSlice.reducer;
