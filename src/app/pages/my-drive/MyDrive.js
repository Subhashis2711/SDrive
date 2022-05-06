import React from 'react';
import Breadcrumb from 'app/components/UI/Breadcrumb';
import { styled } from '@mui/system'
import FolderCards from './shared/FolderCards';

import { H3 } from 'app/components/Typography';
import FileCards from './shared/FileCards';


const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const ContentBox = styled('div')(({ theme }) => ({
    margin: '35px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    [theme.breakpoints.down('xs')]: {
        margin: '10px',
    },
}))

const MyDrive = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'My Drive' },
                    ]}
                />
            </div>
            <H3 sx={{marginBottom: 3}}>Folders</H3>
            <ContentBox className="my-drive">
                <FolderCards />

            </ContentBox>
            <H3 sx={{marginBottom: 3}}>Files</H3>
            <ContentBox className="my-drive">
                <FileCards />

            </ContentBox>
        </Container>
    )
    
}

export default MyDrive;