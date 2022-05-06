import React from 'react'
import { Card, Grid, Box } from '@mui/material'
import { styled } from '@mui/system'
import { convertHexToRGB } from 'app/utils/utils'
import { FileIcon, defaultStyles } from 'react-file-icon'

const CardRoot = styled(Card)(({ theme }) => ({
    marginBottom: '10px',
    padding: '10px !important',
    [theme.breakpoints.down('sm')]: {
        paddingLeft: '16px !important',
    },
}))

const StyledCard = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    position: 'relative',
    background: `rgb(${convertHexToRGB(
        theme.palette.primary.main
    )}, 0.15) !important`,
    padding: '20px !important',
    [theme.breakpoints.down('sm')]: {
        padding: '16px !important',
    },
    '& svg': {
        width: '50%'
    },
}))

const Heading = styled('h6')(({ theme }) => ({
    margin: 0,
    marginTop: '4px',
    fontWeight: '800',
    fontSize: '1.2rem',
    color: theme.palette.primary.main,
}))

const FileCards = () => {
    return (
        <Grid container spacing={3} sx={{ mb: '24px' }}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardRoot>
                    <StyledCard elevation={3}>
                        <FileIcon extension="docx" {...defaultStyles.docx} sx={{width: '60%'}}/>
                    </StyledCard>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Heading>Inspection#9765422</Heading>
                    </Box>
                </CardRoot>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardRoot>
                    <StyledCard elevation={3}>
                        <FileIcon extension="xlsx" {...defaultStyles.xlsx} />
                    </StyledCard>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Heading>Inspection#9765422</Heading>
                    </Box>
                </CardRoot>
            </Grid>
        </Grid>
    )
}

export default FileCards
