import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ShowSidebarState = { show: boolean };

const initialState: ShowSidebarState = { show: false };

export const showSidebarSlice = createSlice({
    name: "show_sidebar",
    initialState,
    reducers: {
        setShowSidebar: (state, action: PayloadAction<boolean>) => {
            state.show = action.payload;
        }
    }
});

export const { setShowSidebar } = showSidebarSlice.actions;
export default showSidebarSlice.reducer;
