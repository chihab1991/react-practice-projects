import { configureStore } from "@reduxjs/toolkit";
import quoteSlice from "./slice/quoteSlice";

export const store = configureStore({
	reducer: {
		quote: quoteSlice,
	},
});
