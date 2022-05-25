import { createSlice } from '@reduxjs/toolkit';

const FolderSlice = createSlice({
    name: 'folder',
    initialState: {
        folders: [],
        files: [],
        new_folder: null,
        new_files: [],
        changed: false,
        folder_order: [null],

    },
    reducers: {
        UpdateDrive(state, action){
            state.folders = action.payload.folders;
            state.files = action.payload.files;
            state.folder_order = action.payload.folder_order;
        },

        CreateNewFolder(state, action){
            const newFolder = action.payload;
            state.changed = true;
            state.new_folder = newFolder
        },

        AddNewFolderToDrive(state, action){
            const newFolder = action.payload;
            state.changed = false;
            state.folders.push(newFolder);

        },
    }
});

export const FolderActions = FolderSlice.actions;

export default FolderSlice;

