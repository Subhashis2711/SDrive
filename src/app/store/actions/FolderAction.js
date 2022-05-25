import { FolderActions } from '../slices/FolderSlice'
import axios from 'axios.js'
import { UiActions } from '../slices/UiSlice'

export const fetchMyDrive = () => {

    return async (dispatch) => {
        const fetchDrive = async () => {
            const response = await axios.get('home');
            const data = await response.data;


            if(response.statusText !== "OK"){
                throw new Error(data.message || "Could not fetch data.");
            }


            return data;
        }

        try{
            const driveData = await fetchDrive();
            const payload = {
                folders: driveData.folders,
                files: driveData.files,
                folder_order: [null],
            }
            dispatch(FolderActions.UpdateDrive(payload));
        
        }catch(error){
            console.log(error);
        }
    }
}

export const createNewFolder  = (newFolder) => {

    
    return async (dispatch) => {
        dispatch(UiActions.ShowToast({
            open: true,
            horizontal: 'right',
            vertical: 'bottom',
            severity: 'info',
            variant: 'filled',
            message: 'Creating...'
        }))

        const sendCreateRequest = async () => {
            const response = await axios.post('/folders/', newFolder);
            const data = await response.data;

            if(response.status !== 201){
                throw new Error(data.message || "Could not fetch data.");
            }


            return data;
        };

        try{
            const folderData = await sendCreateRequest();
            dispatch(UiActions.ShowToast({
                open: true,
                horizontal: 'right',
                vertical: 'bottom',
                severity: 'success',
                variant: 'filled',
                message: 'Folder Created!'
            }))
            if(folderData){
                dispatch(FolderActions.AddNewFolderToDrive(folderData));
            }
        
        }catch(error){
            console.log(error);
            dispatch(UiActions.ShowToast({
                open: true,
                horizontal: 'right',
                vertical: 'bottom',
                severity: 'error',
                variant: 'filled',
                message: 'Folder Creation Failed!'
            }))
        }
    };
}

export const fetchFolderDetail  = (slug) => {
    return async (dispatch) => {
        const fetchFolder = async () => {
            const response = await axios.get(`/folders/${slug}`);
            const data = await response.data;


            if(response.statusText !== "OK"){
                throw new Error(data.message || "Could not fetch data.");
            }


            return data;
        }

        try{
            const folderData = await fetchFolder();
            var folder_order = []
            var folder = folderData
            while(folder != null){
                folder_order.unshift(folder)
                folder = folder.parent;

            }
            folder_order.unshift(null)
            
            const payload = {
                folders: folderData.children.folders,
                files: folderData.children.files,
                folder_order: folder_order
            }
            dispatch(FolderActions.UpdateDrive(payload));
        
        }catch(error){
            console.log(error);
        }
    }
};
