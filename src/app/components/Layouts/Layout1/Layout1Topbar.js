import React from 'react'
// import { Link } from 'react-router-dom'
// import useAuth from 'app/hooks/useAuth'
import useSettings from 'app/hooks/useSettings'
import { styled, useTheme, Box } from '@mui/system'
import { Span } from '../../../components/Typography'
import CustomMenu from '../CustomMenu'
import SearchBox from '../SearchBox'
import { themeShadows } from '../../Theme/themeColors'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import useMediaQuery from '@mui/material/useMediaQuery'
import Hidden from '@mui/material/Hidden'
import LogoutIcon from '@mui/icons-material/Logout'
import Avatar from '@mui/material/Avatar'

import MenuIcon from '@mui/icons-material/Menu'

import { topBarHeight } from 'app/utils/constant'

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.text.primary,
}))

const TopbarRoot = styled('div')(({ theme }) => ({
    top: 0,
    zIndex: 96,
    transition: 'all 0.3s ease',
    boxShadow: themeShadows[8],
    height: topBarHeight,
}))

const TopbarContainer = styled(Box)(({ theme }) => ({
    padding: '8px',
    paddingLeft: 18,
    paddingRight: 20,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    [theme.breakpoints.down('xs')]: {
        paddingLeft: 14,
        paddingRight: 16,
    },
}))

const UserMenu = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 24,
    padding: 4,
    '& span': {
        margin: '0 8px',
    },
}))

const StyledItem = styled(MenuItem)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    minWidth: 185,
    '& a': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    },
    '& span': {
        marginRight: '10px',
        color: theme.palette.text.primary,
    },
}))

const Layout1Topbar = () => {
    const theme = useTheme()
    const { settings, updateSettings } = useSettings()
    // const { logout, user } = useAuth()
    const isLgScreen = useMediaQuery(theme.breakpoints.down('lg'))

    const updateSidebarMode = (sidebarSettings) => {
        updateSettings({
            layout1Settings: {
                leftSidebar: {
                    ...sidebarSettings,
                },
            },
        })
    }

    const handleSidebarToggle = () => {
        let { layout1Settings } = settings

        let mode
        if (isLgScreen) {
            mode =
                layout1Settings.leftSidebar.mode === 'close'
                    ? 'mobile'
                    : 'close'
        } else {
            mode =
                layout1Settings.leftSidebar.mode === 'compact'
                    ? 'full'
                    : 'compact'
        }
        updateSidebarMode({ mode })
    }

    return (
        <TopbarRoot>
            <TopbarContainer>
                <Box display="flex">
                    <StyledIconButton onClick={handleSidebarToggle}>
                        <MenuIcon />
                    </StyledIconButton>
                </Box>
                <Box display="flex" alignItems="center">
                    <SearchBox />
                    <CustomMenu
                        menuButton={
                            <UserMenu>
                                <Hidden xsDown>
                                    <Span>
                                        Hi <strong>Subhashis Das</strong>
                                    </Span>
                                </Hidden>
                                <Avatar
                                    // src={user.avatar}
                                    sx={{ cursor: 'pointer' }}
                                />
                            </UserMenu>
                        }
                    >
                        <StyledItem>
                            <LogoutIcon />
                            <Span> Logout </Span>
                        </StyledItem>
                    </CustomMenu>
                </Box>
            </TopbarContainer>
        </TopbarRoot>
    )
}

export default React.memo(Layout1Topbar)
