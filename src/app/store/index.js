import { configureStore } from '@reduxjs/toolkit'
import FileUploadSlice from './slices/FileUploadSlice'
import FolderSlice from './slices/FolderSlice'
import UiSlice from './slices/UiSlice'

const store = configureStore({
    reducer: {
        folder: FolderSlice.reducer,
        ui: UiSlice.reducer,
        fileUpload: FileUploadSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store
