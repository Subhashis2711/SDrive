import { FileUploadActions } from "../slices/FileUploadSlice";
import axios from 'axios.js';


export const uploadFileToServer = (file) => {
    var fileInfo = {};
    file.forEach(function(value, key){
        fileInfo[key] = value;
    });

    return async (dispatch) => {
        const uploadFile = async () => {
            const response = await axios.post('/files/', file, {
                onUploadProgress: ({ loaded, total }) => {
                    let progress = ((loaded / total) * 100).toFixed(2);
                    dispatch(FileUploadActions.UpdateFileUploadProgress(
                        {percentage: progress, fileName: fileInfo.document.name}
                    ))
                }
            });
            const data = await response.data;
            if(response.statusText !== "OK"){
                throw new Error(data.message || "Could not fetch data.");
            }
            return data;
        }

        try{
            const uploadedFile = await uploadFile();
            console.log(uploadedFile);
        }catch(error){
            console.log(error);
        }
    }
}