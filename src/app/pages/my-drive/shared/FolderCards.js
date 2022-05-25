import React from 'react'
import { Grid, Card } from '@mui/material'
import { Box, styled } from '@mui/system'
import { Small } from 'app/components/Typography'
import FolderIcon from '@mui/icons-material/Folder'
import FileDropZone from 'app/components/UI/Dropzone/FileDropZone'
import { Link } from "react-router-dom";


const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px !important',
    background: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
        padding: '14px !important',
    },
    border: '0.1rem solid lightgray',
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

const FolderCards = (props) => {
    const { folders } = props;
    return (
        <Grid container spacing={3} sx={{ mb: '24px' }}>
            {folders.map((item) => (
                <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
                    <FileDropZone noClick={true} noDragEventsBubbling={true}>
                        <Link to={`/my-drive/${item.slug}`}>
                            <StyledCard elevation={6} sx={{cursor: 'pointer'}}>
                                <ContentBox>
                                    <FolderIcon className="icon" />
                                    <Box ml="12px">
                                        <Heading>{item.name}</Heading>
                                        <Small></Small>
                                    </Box>
                                </ContentBox>
                            </StyledCard>
                        </Link>
                    </FileDropZone>
                </Grid>
            ))}
        </Grid>
    )
}

export default FolderCards
