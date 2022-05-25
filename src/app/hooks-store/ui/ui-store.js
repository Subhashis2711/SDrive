import { initStore } from "../store";

const configureUiStore = () => {
    const actions = {
        SHOW_DIALOG: (curState, payload) => {
            curState.dialog.component = payload.component;
    
        },

        SHOW_ALERTBAR: (curState, payload) => {
            curState.alertBar.props = payload.payload

        }
    };

    initStore(actions, {
        alertBar: null,
        dialog: null,
    })
};

export default configureUiStore;

