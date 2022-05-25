import React, { useEffect } from 'react'
import { styled, alpha } from '@mui/material/styles'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import { Divider, MenuList } from '@mui/material'
import useDialog from 'app/hooks/useUiComponent'
import useUiComponent from 'app/hooks/useUiComponent'

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        backgroundColor: 'white',
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 320,
        color:
            theme.palette.mode === 'light'
                ? 'rgb(55, 65, 81)'
                : theme.palette.grey[100],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 30,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}))

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    '&:focus': {
        backgroundColor: theme.palette.default,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            color: theme.palette.common.black,
        },
    },
}))

const CustomizedMenu = (props) => {
    const { items, anchorEl, open: menuOpen, handleClose: handleMenuClose, onOpenCreateFolderDialog } = props
    const ctx = useUiComponent();
    const { showUiComponent, hideUiComponent } = ctx
    
    const menuItems = items.map((item) => { 
        const Dialog = item.dialog || '';

        const openDialogHandler = () => {
            ((Dialog != '') && showUiComponent(Dialog))
        }
        return (
            [
                (item.children?.map((child) => {
                    const MenuIcon = child.icon

                    return (
                        <StyledMenuItem key={child.id} onClick={openDialogHandler}>
                            <ListItemIcon>
                                <MenuIcon />
                            </ListItemIcon>
                            <ListItemText primary={child.title} />
                        </StyledMenuItem>
                            
                    )
                })),
                <Divider />,

            ]
        )
    })
    return (
        <div>
            <StyledMenu
                id="simple-menu"
                anchorEl={anchorEl}
                open={menuOpen}
                onClick={handleMenuClose}
                onClose={handleMenuClose}
                elevation={0}
                getcontentanchorel={null}
            >
                <MenuList>{menuItems}</MenuList>
            </StyledMenu>
        </div>
    )
}

export default CustomizedMenu
