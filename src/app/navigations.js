import StorageIcon from '@mui/icons-material/Storage';
import GroupIcon from '@mui/icons-material/Group';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import addMenuItems from './menu-items/addMenuItems';
// constant
const icons = {
    StorageIcon,
    GroupIcon,
    AccessTimeFilledIcon,
    StarIcon,
    DeleteIcon,
    AddIcon
};

export const navigations = [
    {   
        id: 'add',
        type: 'button',
        btn_type: 'icon-label',
        variant: 'extended',
        label: 'Add',
        shape: 'circular',
        color: 'default',
        icon:  icons.AddIcon,
        icon_sx: {mr: 0},
        menu_items: addMenuItems,

    },
    {   
        id: 'my-drive',
        name: 'My Drive',
        path: '/my-drive',
        icon: icons.StorageIcon,
    },
    {   
        id: 'shared',
        name: 'Shared with me',
        path: '/shared',
        icon: icons.GroupIcon,
    },
    {   
        id: 'recents',
        name: 'Recents',
        path: '/recent',
        icon: icons.AccessTimeFilledIcon,
    },
    {   
        id: 'starred',
        name: 'Starred',
        path: '/starred',
        icon: icons.StarIcon,
    },
    {   
        id: 'bin',
        name: 'Bin',
        path: '/bin',
        icon: icons.DeleteIcon,
    },
    
]
