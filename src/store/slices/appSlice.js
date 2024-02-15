import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "App slice",
    initialState: {
        isSideNavBarVisible: true,
        videos: null,
        clickedVideo: null,
        relatedVideos: null,
        comments: null,
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

        setClickedVideo: (state, action) => {
            state.clickedVideo = action.payload;
        },

        setReletedVideos: (state, action) => {
            state.relatedVideos = action.payload;
        },
        setComments: (state, action) => {
            state.comments = action.payload;
        },
    },
});

export const {
    openSideNavBar,
    closeSideNavBar,
    setVideo,
    setClickedVideo,
    setReletedVideos,
    setComments,
} = appSlice.actions;
export default appSlice.reducer;
