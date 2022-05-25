import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { styled } from '@mui/material/styles'
import { createPortal } from 'react-dom'

const CustomDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        backgroundColor: 'white',
    },
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}))

const portalElement = document.getElementById('overlays')

const FormDialog = (props) => {
    const { open, title, content, handleClose, handleSuccess, success_text } = props

    return (
        <>
            {createPortal(
                <CustomDialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                    fullWidth="true"
                    maxWidth="xs"
                >
                    <DialogTitle id="form-dialog-title" sx={{ color: 'black' }}>
                        {title}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText sx={{ color: 'black' }}>
                            {props.children}
                        </DialogContentText>
                        
                    </DialogContent>
                    <DialogActions>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleSuccess}
                            variant="outlined"
                            color="primary"
                        >
                            {success_text}
                        </Button>
                    </DialogActions>
                </CustomDialog>,
                portalElement
            )}
        </>
    )
}

export default FormDialog
