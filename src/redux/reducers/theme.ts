import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type theme_slice_type = { mode: 'dark' | 'light' };

const initialState: theme_slice_type = { mode: "light" };

export const theme_slice = createSlice({
    name: "theme_slice",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
            state.mode = action.payload;
        }
    }
});

export const { setTheme } = theme_slice.actions;
export default theme_slice.reducer;
