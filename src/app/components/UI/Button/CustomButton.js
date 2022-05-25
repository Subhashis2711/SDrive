import React from 'react'
import { Fab } from '@mui/material'


const CustomButton = (props) => {
    const { type, icon, icon_sx, color, variant, shape, sx, onClick } = props
    const Icon = icon

    return (
        (type === 'icon-label' && icon && shape === 'circular' && (
            <Fab
                variant={variant}
                color={color}
                aria-label="Delete"
                className="button"
                sx={sx}
                onClick={onClick}
            >
                <Icon sx={icon_sx}/>
                {props.children}
            </Fab>
        ))
    )
}

export default CustomButton
