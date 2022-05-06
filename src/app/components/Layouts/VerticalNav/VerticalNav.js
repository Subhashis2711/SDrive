import { styled, Box } from '@mui/system'
import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import useSettings from 'app/hooks/useSettings'
import { Span } from '../../Typography'
import { ButtonBase } from '@mui/material'

import CustomButton from 'app/components/UI/Button/CustomButton'

const ExtAndIntCommon = {
    display: 'flex',
    overflow: 'hidden',
    borderRadius: '4px',
    height: 44,
    whiteSpace: 'pre',
    marginBottom: '8px',
    textDecoration: 'none',
    justifyContent: 'space-between',
    transition: 'all 150ms ease-in',
    '&:hover': {
        background: 'rgba(255, 255, 255, 0.08)',
    },
    '&.compactNavItem': {
        overflow: 'hidden',
        justifyContent: 'center !important',
    },
    '& .icon': {
        fontSize: '18px',
        paddingLeft: '16px',
        paddingRight: '16px',
        verticalAlign: 'middle',
    },
}

const InternalLink = styled(Box)(({ theme }) => ({
    '& a': {
        ...ExtAndIntCommon,
        color: theme.palette.text.primary,
    },
    '& .navItemActive': {
        backgroundColor: 'rgba(255, 255, 255, 0.16)',
    },
}))

const StyledText = styled(Span)(({ mode }) => ({
    fontSize: '0.975rem',
    paddingLeft: '0.8rem',
    display: mode === 'compact' && 'none',
}))

const BulletIcon = styled('div')(({ theme }) => ({
    padding: '2px',
    marginLeft: '24px',
    marginRight: '8px',
    overflow: 'hidden',
    borderRadius: '300px',
    background: theme.palette.text.primary,
}))

const BadgeValue = styled('div')(() => ({
    padding: '1px 8px',
    overflow: 'hidden',
    borderRadius: '300px',
}))

const VerticalNav = ({ items }) => {
    const { settings } = useSettings()
    const { mode } = settings.layout1Settings.leftSidebar

    const renderLevels = (data) => {
        return data.map((item, index) => {
            if (item.type === 'button') {
                return (
                    <CustomButton
                        type={item.btn_type}
                        variant={item.variant}
                        shape={item.shape}
                        color={item.color}
                        icon={item.icon}
                        icon_sx={item.icon_sx}
                        sx={{
                            width: '100%',
                            fontSize: 25,
                            margin: '20px auto',
                        }}
                    >
                        <StyledText mode={mode} className="sidenavHoverShow">
                            {item.label}
                        </StyledText>
                    </CustomButton>
                )
            } else {
                const Icon = item?.icon ? item.icon : ''
                return (
                    <InternalLink key={index}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                isActive
                                    ? `navItemActive ${
                                          mode === 'compact' && 'compactNavItem'
                                      }`
                                    : `${
                                          mode === 'compact' && 'compactNavItem'
                                      }`
                            }
                        >
                            <ButtonBase
                                key={item.name}
                                name="child"
                                sx={{ width: '100%' }}
                            >
                                {Icon !== '' ? (
                                    <Icon sx={{ width: 36, marginLeft: 1 }} />
                                ) : (
                                    <Fragment>
                                        <BulletIcon
                                            className={`nav-bullet`}
                                            sx={{
                                                display:
                                                    mode === 'compact' &&
                                                    'none',
                                            }}
                                        />
                                        <Box
                                            className="nav-bullet-text"
                                            sx={{
                                                ml: '20px',
                                                fontSize: '11px',
                                                display:
                                                    mode !== 'compact' &&
                                                    'none',
                                            }}
                                        >
                                            {item.iconText}
                                        </Box>
                                    </Fragment>
                                )}
                                <StyledText
                                    mode={mode}
                                    className="sidenavHoverShow"
                                >
                                    {item.name}
                                </StyledText>
                                <Box mx="auto"></Box>
                                {item.badge && (
                                    <BadgeValue className="sidenavHoverShow">
                                        {item.badge.value}
                                    </BadgeValue>
                                )}
                            </ButtonBase>
                        </NavLink>
                    </InternalLink>
                )
            }
        })
    }

    return <div className="navigation">{renderLevels(items)}</div>
}

export default React.memo(VerticalNav)
