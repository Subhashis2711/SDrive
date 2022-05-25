import Footer from '../Footer'
import Layout1Topbar from './Layout1Topbar'
import CustomSuspense from 'app/components/UI/CustomSuspense/CustomSuspense'
import Layout1Sidenav from './Layout1Sidenav'
import Scrollbar from 'react-perfect-scrollbar'
import useSettings from 'app/hooks/useSettings'
import { styled, Box, useTheme } from '@mui/system'
import React, { Fragment, useEffect, useRef } from 'react'
import { ThemeProvider, useMediaQuery } from '@mui/material'
import SidenavTheme from '../../Theme/SidenavTheme/SidenavTheme'
import SecondarySidebar from '../../Theme/SecondarySidenavTheme/SecondarySidenavTheme'
import { sidenavCompactWidth, sideNavWidth } from 'app/utils/constant'
import { Outlet } from 'react-router-dom'
import useUiComponent from 'app/hooks/useUiComponent'
import CustomizedAlertBar from 'app/components/UI/AlertBars/CustomizedAlertBar'
import { useSelector } from 'react-redux'

const Layout1Root = styled(Box)(({ theme }) => ({
    display: 'flex',
    background: theme.palette.background.default,
}))

const ContentBox = styled(Box)(() => ({
    height: '100%',
    display: 'flex',
    overflowY: 'auto',
    overflowX: 'hidden',
    flexDirection: 'column',
    justifyContent: 'space-between',
}))

const StyledScrollBar = styled(Scrollbar)(() => ({
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexGrow: '1',
    flexDirection: 'column',
}))

const LayoutContainer = styled(Box)(({ width, secondarySidebar }) => ({
    height: '100vh',
    display: 'flex',
    flexGrow: '1',
    flexDirection: 'column',
    verticalAlign: 'top',
    marginLeft: width,
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    marginRight: secondarySidebar.open ? 50 : 0,
}))

const Layout1 = () => {
    const { settings, updateSettings } = useSettings()
    const { layout1Settings, secondarySidebar } = settings
    const { component: Component, hideUiComponent } = useUiComponent({
        name: 'Dialog',
    })
    const open = Component ? true : false;

    const ui = useSelector((state) => state.ui);
    const alertBar = ui.toast;

    const topbarTheme = settings.themes[layout1Settings.topbar.theme]
    const {
        leftSidebar: { mode: sidenavMode, show: showSidenav },
    } = layout1Settings

    const getSidenavWidth = () => {
        switch (sidenavMode) {
            case 'full':
                return sideNavWidth
            case 'compact':
                return sidenavCompactWidth
            default:
                return '0px'
        }
    }

    const sidenavWidth = getSidenavWidth()
    const theme = useTheme()
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'))

    const ref = useRef({ isMdScreen, settings })
    const layoutClasses = `theme-${theme.palette.type}`

    useEffect(() => {
        let { settings } = ref.current
        let sidebarMode = settings.layout1Settings.leftSidebar.mode
        if (settings.layout1Settings.leftSidebar.show) {
            let mode = isMdScreen ? 'close' : sidebarMode
            updateSettings({ layout1Settings: { leftSidebar: { mode } } })
        }
    }, [isMdScreen])

    return (
        <Fragment>
            {open && <Component open={open} handleClose={hideUiComponent} />}

            <Layout1Root className={layoutClasses}>
                {showSidenav && sidenavMode !== 'close' && (
                    <SidenavTheme>
                        <Layout1Sidenav />
                    </SidenavTheme>
                )}

                <LayoutContainer
                    width={sidenavWidth}
                    secondarySidebar={secondarySidebar}
                >
                    {layout1Settings.topbar.show &&
                        layout1Settings.topbar.fixed && (
                            <ThemeProvider theme={topbarTheme}>
                                <Layout1Topbar
                                    fixed={true}
                                    className="elevation-z8"
                                />
                            </ThemeProvider>
                        )}
                    {settings.perfectScrollbar && (
                        <StyledScrollBar>
                            {layout1Settings.topbar.show &&
                                !layout1Settings.topbar.fixed && (
                                    <ThemeProvider theme={topbarTheme}>
                                        <Layout1Topbar />
                                    </ThemeProvider>
                                )}
                            <Box flexGrow={1} position="relative">
                                <CustomSuspense>
                                    <Outlet />
                                </CustomSuspense>
                            </Box>
                            {settings.footer.show && !settings.footer.fixed && (
                                <Footer />
                            )}
                        </StyledScrollBar>
                    )}

                    {!settings.perfectScrollbar && (
                        <ContentBox>
                            {layout1Settings.topbar.show &&
                                !layout1Settings.topbar.fixed && (
                                    <ThemeProvider theme={topbarTheme}>
                                        <Layout1Topbar />
                                    </ThemeProvider>
                                )}
                            <Box flexGrow={1} position="relative">
                                <CustomSuspense>
                                    <Outlet />
                                </CustomSuspense>
                            </Box>
                            {settings.footer.show && !settings.footer.fixed && (
                                <Footer />
                            )}
                        </ContentBox>
                    )}

                    {settings.footer.show && settings.footer.fixed && (
                        <Footer />
                    )}
                </LayoutContainer>
                {settings.secondarySidebar.show && <SecondarySidebar />}
            </Layout1Root>

            {alertBar.open && 
                <CustomizedAlertBar
                    {...alertBar.props}
                />
            }
        </Fragment>
    )
}

export default React.memo(Layout1)
