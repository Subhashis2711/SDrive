import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { styled } from '@mui/material/styles'
import CustomAccordion from '../CustomAccordian'
import { CircularProgress, Grid, Typography } from '@mui/material'

const UploadNotification = styled(Drawer)(({ theme }) => ({
    width: 300,
    color: theme.palette.success.main,
    '& .MuiDrawer-paper': {
        width: '30%',
        left: 'auto',
    },
}))

const FileUploadBar = (props) => {
    const { uploadProgressInfos } = props
    console.log(uploadProgressInfos)

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return
        }
    }

    const content = (anchor) => (
        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <CustomAccordion text="Uploading 4 files" id="upload-notification">
                <List>
                    {uploadProgressInfos.map((info, index) => (
                        <ListItem button key={index}>
                            <Grid container spacing={3}>
                                <Grid item lg={10} sx={{
                                        textOverflow: 'ellipsis',
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap'
                                    }}>
                                    <ListItemText primary={info.fileName} />
                                </Grid>
                                <Grid item lg={2}>
                                    <CircularProgress
                                        variant="determinate"
                                        value={info.percentage}
                                    />
                                </Grid>
                            </Grid>
                        </ListItem>
                    ))}
                </List>
            </CustomAccordion>
        </Box>
    )

    return (
        <div>
            {['bottom'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <UploadNotification
                        variant="persistent"
                        anchor={anchor}
                        open={true}
                        onClose={toggleDrawer(anchor, false)}
                        sx={{
                            width: '30%',
                        }}
                    >
                        {content(anchor)}
                    </UploadNotification>
                </React.Fragment>
            ))}
        </div>
    )
}

export default FileUploadBar
