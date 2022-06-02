import React from 'react'
import { styled } from '@mui/system'
import { amber, green } from '@mui/material/colors'
import { Alert, Button, Snackbar } from '@mui/material'
import { useDispatch } from 'react-redux'
import { UiActions } from 'app/store/slices/UiSlice'
import { H1 } from 'app/components/Typography'

const ContentRoot = styled('div')(({ theme }) => ({
    '& .success': {
        backgroundColor: green[600],
    },
    '& .error': {
        backgroundColor: theme.palette.error.main,
    },
    '& .info': {
        backgroundColor: theme.palette.primary.main,
    },
    '& .warning': {
        backgroundColor: amber[700],
    },
    '& .icon': {
        fontSize: 20,
    },
    '& .iconVariant': {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    '& .message': {
        display: 'flex',
        alignItems: 'center',
    },
    '& .margin': {
        margin: theme.spacing(1),
    },
}))

const CustomizedAlertBar = (props) => {
    const dispatch = useDispatch();
    const { open, vertical, horizontal, variant, severity, message } = props;

    const handleClose = () => {
        dispatch(UiActions.HideToast());
    }

    return (
        <ContentRoot>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                anchorOrigin={{ vertical, horizontal }}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity={severity}
                    sx={{ width: '100%' }}
                    variant={variant}
                >
                    {message}
                </Alert>
            </Snackbar>
        </ContentRoot>
    )
}

export default CustomizedAlertBar
