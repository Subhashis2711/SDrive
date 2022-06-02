import { createSlice } from '@reduxjs/toolkit';

const FileUploadSlice = createSlice({
    name: 'fileUpload',
    initialState: {
        selectedFiles: [],
        uploadedFiles: [],
        progressInfos: [],


    },
    reducers: {
        SetFileUploadProgress(state, action){
            state.progressInfos = action.payload;
        },

        SetSelectedFiles(state, action){
            state.selectedFiles = action.payload;
        },

        UpdateFileUploadProgress(state, action){
            let currentProgress = action.payload;
            console.log(currentProgress);
            let currentFileName = currentProgress.fileName;
            let stateIndex = state.progressInfos.findIndex((item) => item.fileName === currentFileName);

            if(stateIndex !== -1){
                console.log(state[stateIndex]);
                state.progressInfos[stateIndex].percentage = currentProgress.percentage;
            }
        }

    }

});

export const FileUploadActions = FileUploadSlice.actions;

export default FileUploadSlice;