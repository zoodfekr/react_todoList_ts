import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type theme_slice_type = 'dark' | 'light';


const getStoredTheme = (): theme_slice_type => {
    const storedTheme = localStorage.getItem('react_todolist_ts_theme');
    return storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : 'light';
};


const initialState: { mode: theme_slice_type } = { mode: getStoredTheme() };

export const theme_slice = createSlice({

    name: "theme_slice",

    initialState,

    reducers: {
        setTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
            state.mode = action.payload;

            console.log("action.payload", action.payload)
            localStorage.setItem('react_todolist_ts_theme', action.payload)

        }
    }

});

export const { setTheme } = theme_slice.actions;
export default theme_slice.reducer;
