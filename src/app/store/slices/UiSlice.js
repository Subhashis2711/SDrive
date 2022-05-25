import { createSlice } from '@reduxjs/toolkit';

const UiSlice = createSlice({
    name: 'ui',
    initialState: {
        toast: {
            open: false
        },
        dialog: {},

    },
    reducers: {
        ShowToast(state, action){
            state.toast.open = action.payload.open
            state.toast.props = action.payload

        },
        HideToast(state){
            state.toast.open = false;
            state.toast.props = {};
        }

    }
});

export const UiActions = UiSlice.actions;

export default UiSlice;

