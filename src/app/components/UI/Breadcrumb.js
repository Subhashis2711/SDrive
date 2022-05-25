import React from 'react'
import { styled, useTheme } from '@mui/system'
import { Breadcrumbs, Hidden } from '@mui/material'
import { NavLink } from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';


const BreadcrumbRoot = styled('div')(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
}))

const BreadcrumbName = styled('h4')(() => ({
    margin: 0,
    fontSize: '16px',
    paddingBottom: '1px',
    verticalAlign: 'middle',
    textTransform: 'capitalize',
}))

const SubName = styled('span')(({ theme }) => ({
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
}))

const Separator = styled('h4')(({ theme }) => ({
    margin: 0,
    marginLeft: 8,
    paddingBottom: '3px',
    color: theme.palette.text.hint
}))

const StyledIcon = styled(HomeIcon)(() => ({
    marginLeft: 8,
    marginBottom: '4px',
    verticalAlign: 'middle',
}))

const Breadcrumb = ({ routeSegments }) => {
    const theme = useTheme()
    const hint = theme.palette.text.hint

    return (
        <BreadcrumbRoot>
            {routeSegments ? (
                <Hidden xsDown>
                    <BreadcrumbName>
                        {routeSegments[routeSegments.length - 1]['name']}
                    </BreadcrumbName>
                    <Separator>|</Separator>
                </Hidden>
            ) : null}
            <Breadcrumbs
                separator={<NavigateNextIcon sx={{ color: hint }} />}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative'
                }}
            >
                <NavLink to="/my-drive">
                    <StyledIcon color="primary">
                        home
                    </StyledIcon>
                </NavLink>
                {routeSegments
                    ? routeSegments.map((route, index) => {
                        return index !== routeSegments.length - 1 ? (
                            <NavLink key={index} to={`${route.path}`}>
                                <SubName>
                                    {route.name}
                                </SubName>
                            </NavLink>
                        ) : (
                            <SubName key={index}>
                                {route.name}
                            </SubName>
                        )
                    })
                    : null}
            </Breadcrumbs>
        </BreadcrumbRoot>
    )
}

export default Breadcrumb
