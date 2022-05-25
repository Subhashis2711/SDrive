import React from 'react'
import { ThemeProvider } from '@mui/material'

const SecondarySidenavTheme = ({ sideNavtheme, classes, children, open }) => {
    console.log(sideNavtheme);
    return <ThemeProvider theme={sideNavtheme}>{children}</ThemeProvider>
}
export default SecondarySidenavTheme
