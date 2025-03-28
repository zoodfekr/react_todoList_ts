import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ShowSidebarState = { drawer: boolean, closed: boolean };

const initialState: ShowSidebarState = { drawer: false, closed: false };

export const showSidebarSlice = createSlice({
    name: "show_sidebar",
    initialState,
    reducers: {
        setDrawerSidebar: (state, action: PayloadAction<boolean>) => {
            state.drawer = action.payload;
        },
        setCloseSidebar: (state, action: PayloadAction<boolean>) => {
            state.closed = action.payload;
        },

    }
});

export const { setDrawerSidebar, setCloseSidebar } = showSidebarSlice.actions;
export default showSidebarSlice.reducer;
