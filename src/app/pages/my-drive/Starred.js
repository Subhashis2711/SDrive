import React from 'react';
import Breadcrumb from 'app/components/UI/Breadcrumb';
import { styled } from '@mui/system'


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

const Starred = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Starred' },
                    ]}
                />
            </div>
        </Container>
    )
    
}

export default Starred;