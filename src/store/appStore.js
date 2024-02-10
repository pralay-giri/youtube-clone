import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";

const appStore = configureStore({
    reducer: {
        appSlice,
    },
});

export default appStore;
