import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import searchSlice from "./slices/searchSlice";

const appStore = configureStore({
    reducer: {
        appSlice,
        searchSlice,
    },
});

export default appStore;
