import FormDialog from "app/components/UI/Dialog/FormDialog";
import React, { useState } from "react";
import TextField from '@mui/material/TextField'
import { useDispatch, useSelector } from "react-redux";
import { FolderActions } from "app/store/slices/FolderSlice";


const CreateFolder = (props) => {
    const { open, handleClose } = props
    const [FolderInfo, setFolderInfo] = useState({name: ''});
    const dispatch = useDispatch();
    const folder = useSelector((state) => state.folder);
    const current_folder = folder.folder_order[folder.folder_order.length - 1];
    const current_folder_id = (current_folder)? current_folder.id : null;


    const handleSuccess = () => {
        const folderName = FolderInfo.name;

        dispatch(FolderActions.CreateNewFolder({
            name: folderName,
            parent: current_folder_id,
        }));

        handleClose();
    }

    const handleChange = ({ target: { name, value } }) => {
        let temp = { ...FolderInfo }
        temp[name] = value
        setFolderInfo(temp)
    }

    return(
        <FormDialog 
            open={open}
            title="New Folder"
            handleClose={handleClose}
            success_text="Create"
            handleSuccess={handleSuccess}
        >
            <TextField
                autoFocus
                margin="dense"
                onChange={handleChange}
                id="name"
                name="name"
                label="Name"
                type="text"
                fullWidth
            />
        </FormDialog>
    );
}

export default CreateFolder;
