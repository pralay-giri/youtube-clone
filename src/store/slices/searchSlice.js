import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchData: null,
    },
    reducers: {
        addSearchData: (state, action) => {
            action.payload.items = action.payload?.items?.filter(
                (item) => item.id.kind === "youtube#video"
            );
            state.searchData = action.payload;
        },
        removeSearchData: (state) => {
            state.searchData = {};
        },
    },
});

export const { addSearchData, removeSearchData } = searchSlice.actions;
export default searchSlice.reducer;
