import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "App slice",
    initialState: {
        isSideNavBarVisible: true,
        videos: null,
    },
    reducers: {
        openSideNavBar: (state) => {
            state.isSideNavBarVisible = true;
        },
        closeSideNavBar: (state) => {
            state.isSideNavBarVisible = false;
        },
        setVideo: (state, action) => {
            state.videos = action.payload;
        },
    },
});

export const { openSideNavBar, closeSideNavBar, setVideo } = appSlice.actions;
export default appSlice.reducer;
