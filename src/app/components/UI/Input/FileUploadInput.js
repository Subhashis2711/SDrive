import React from "react";
import { styled } from '@mui/material/styles';
import _ from 'lodash';
import { useDispatch, useSelector } from "react-redux";
import { FileUploadActions } from "app/store/slices/FileUploadSlice";
import { uploadFileToServer } from "app/store/actions/FileUploadAction";


const Input = styled('input')({
    display: 'none',
})

const FileUploadInput = (props) => {
    const dispatch = useDispatch();
    const folder = useSelector((state) => state.folder);
    const current_folder = folder.folder_order[folder.folder_order.length - 1];
    const current_folder_id = (current_folder)? current_folder.id : '';
    
    const upload = (file) => {
        const formData = new FormData();
        formData.append('document', file, file.name);
        formData.append('parent', current_folder_id);


        dispatch(uploadFileToServer(formData));
    }

    var input = document.getElementById(props.id);
    input != null && (input.onchange = async (event) => {


        let currentProgressInfos = [], selectedFiles = [];
        _.forEach(event.target.files, file => {
            selectedFiles.push(file);
            currentProgressInfos.push({percentage: 0, fileName: file.name});
        });

        dispatch(FileUploadActions.SetSelectedFiles(selectedFiles));
        dispatch(FileUploadActions.SetFileUploadProgress(currentProgressInfos));

        _.forEach(event.target.files, file => {
            upload(file);
        });
    })

    
    return(
        <Input
            accept="image/*"
            id={props.id}
            multiple
            type="file"
        />
            

    );
}

export default FileUploadInput;