import React from 'react'
import { Grid, Card } from '@mui/material'
import { Box, styled } from '@mui/system'
import { Small } from 'app/components/Typography'
import FolderIcon from '@mui/icons-material/Folder';

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px !important',
    background: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
        padding: '16px !important',
    },
    border: "0.1rem solid lightgray",
}))

const ContentBox = styled('div')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    '& small': {
        color: theme.palette.text.secondary,
    },
    '& .icon': {
        opacity: 0.9,
        fontSize: '44px',
        color: theme.palette.secondary.main,
    },
}))

const Heading = styled('h6')(({ theme }) => ({
    margin: 0,
    marginTop: '4px',
    fontWeight: '500',
    fontSize: '14px',
    color: theme.palette.primary.main,
}))

const FolderCards = () => {
    return (
        <Grid container spacing={3} sx={{ mb: '24px' }}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <StyledCard elevation={6}>
                    <ContentBox>
                        <FolderIcon className='icon'/>
                        <Box ml="12px">
                            <Heading>Inspection#9765422</Heading>
                            <Small>Me</Small>
                        </Box>
                    </ContentBox>
                    
                </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <StyledCard elevation={6}>
                    <ContentBox>
                        <FolderIcon className='icon'/>
                        <Box ml="12px">
                            <Heading>Inspection#9765422</Heading>
                            <Small>Me</Small>
                        </Box>
                    </ContentBox>
                    
                </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <StyledCard elevation={6}>
                    <ContentBox>
                        <FolderIcon className='icon'/>
                        <Box ml="12px">
                            <Heading>Inspection#9765422</Heading>
                            <Small>Me</Small>
                        </Box>
                    </ContentBox>
                    
                </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <StyledCard elevation={6}>
                    <ContentBox>
                        <FolderIcon className='icon'/>
                        <Box ml="12px">
                            <Heading>Inspection#9765422</Heading>
                            <Small>Me</Small>
                        </Box>
                    </ContentBox>
                    
                </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <StyledCard elevation={6}>
                    <ContentBox>
                        <FolderIcon className='icon'/>
                        <Box ml="12px">
                            <Heading>Inspection#9765422</Heading>
                            <Small>Me</Small>
                        </Box>
                    </ContentBox>
                    
                </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <StyledCard elevation={6}>
                    <ContentBox>
                        <FolderIcon className='icon'/>
                        <Box ml="12px">
                            <Heading>Inspection#9765422</Heading>
                            <Small>Me</Small>
                        </Box>
                    </ContentBox>
                    
                </StyledCard>
            </Grid>
        </Grid>
    )
}

export default FolderCards
