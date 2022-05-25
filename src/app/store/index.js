import { configureStore } from "@reduxjs/toolkit";
import FolderSlice from "./slices/FolderSlice";
import UiSlice from "./slices/UiSlice";

const store = configureStore({
    reducer: { folder: FolderSlice.reducer, ui: UiSlice.reducer }
})

export default store;