import StorageIcon from '@mui/icons-material/Storage';
import GroupIcon from '@mui/icons-material/Group';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
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
        type: 'button',
        btn_type: 'icon-label',
        variant: 'extended',
        label: 'Add',
        shape: 'circular',
        color: 'default',
        icon:  icons.AddIcon,
        icon_sx: {mr: 0},
    },
    {
        name: 'My Drive',
        path: '/my-drive',
        icon: icons.StorageIcon,
    },
    {
        name: 'Shared with me',
        path: '/shared',
        icon: icons.GroupIcon,
    },
    {
        name: 'Recents',
        path: '/recent',
        icon: icons.AccessTimeFilledIcon,
    },
    {
        name: 'Starred',
        path: '/starred',
        icon: icons.StarIcon,
    },
    {
        name: 'Bin',
        path: '/bin',
        icon: icons.DeleteIcon,
    },
    
]
