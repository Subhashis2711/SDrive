// assets
import CreateNewFolderRoundedIcon from '@mui/icons-material/CreateNewFolderRounded'
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded'
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded'
import FormDialog from 'app/components/UI/Dialog/FormDialog'
import CreateFolder from 'app/components/Layouts/CreateFolder'

// constant
const icons = {
    CreateNewFolderRoundedIcon,
    UploadFileRoundedIcon,
    DriveFolderUploadRoundedIcon,
}

const dialogs = {
    CreateFolder

}

// ==============================|| DASHBOARD MENU ITEMS ||============================== //
const addMenuItems = [
    {
        id: 'folder',
        type: 'group',
        children: [
            {
                id: 'new-folder',
                title: 'Folder',
                icon: icons.CreateNewFolderRoundedIcon,
                
            },
        ],
        dialog: dialogs.CreateFolder
    },
    {
        id: 'upload',
        type: 'group',
        children: [
            {
                id: 'upload-file',
                title: 'File Upload',
                icon: icons.UploadFileRoundedIcon,
                upload: 'file-upload'
            },
            {
                id: 'upload-folder',
                title: 'Folder Upload',
                icon: icons.DriveFolderUploadRoundedIcon,
                upload: 'folder-upload'
            },
        ],
    },
]

export default addMenuItems
