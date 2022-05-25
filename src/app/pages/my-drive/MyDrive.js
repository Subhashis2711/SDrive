import React, { useEffect } from 'react'
import Breadcrumb from 'app/components/UI/Breadcrumb'
import { styled } from '@mui/system'
import FolderCards from './shared/FolderCards'

import { H3 } from 'app/components/Typography'
import FileCards from './shared/FileCards'
import { useDispatch, useSelector } from 'react-redux'
import { createNewFolder, fetchMyDrive, fetchFolderDetail } from 'app/store/actions/FolderAction'
import useAuth from 'app/hooks/useAuth'
import FileDropZone from 'app/components/UI/Dropzone/FileDropZone'
import { useParams } from "react-router-dom";


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
    margin: '25px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    [theme.breakpoints.down('xs')]: {
        margin: '10px',
    },
}))

const MyDrive = () => {
    const dispatch = useDispatch()
    const folder = useSelector((state) => state.folder)
    const params = useParams();
    console.log(folder);
    

    useEffect(() => {
        dispatch(fetchMyDrive(folder))
    }, [dispatch])

    useEffect(() => {
        if (folder.changed && folder.new_folder != null) {
            dispatch(createNewFolder(folder.new_folder))
        }
    }, [folder, dispatch])

    useEffect(() => {
        if(params.slug){
            dispatch(fetchFolderDetail(params.slug))
        }else{
            dispatch(fetchMyDrive(folder))

        }
    }, [params])

    const FOLDERS = folder.folders;
    const FILES = folder.files;
    var breadcrumb_order = [];
    
    if(folder.folder_order.length !== 0){
        folder.folder_order.map((item) => {
            if(item == null){
                breadcrumb_order.push({
                    name: 'My Drive',
                    path: '/my-drive/'
                });
            }else{
                const slug = (item.slug)? item.slug: '';
                breadcrumb_order.push({
                    name: item.name,
                    path: `/my-drive/${slug}`
                });
            }
        })
    }

    return (
        <FileDropZone noClick={true}>
            <Container>
                <div className="breadcrumb">
                    <Breadcrumb routeSegments={breadcrumb_order} />
                </div>
                {FOLDERS.length !== 0 && 
                    <>
                        <H3 sx={{ marginBottom: 3 }}>Folders</H3>
                        <ContentBox className="my-drive">
                            <FolderCards folders={FOLDERS} />
                        </ContentBox>
                    </>
                }
                {FILES.length !== 0 && 
                    <>
                        <H3 sx={{ marginBottom: 3 }}>Files</H3>
                        <ContentBox className="my-drive">
                            <FileCards files={FILES} />
                        </ContentBox>
                    </>
                }
            </Container>
        </FileDropZone>
    )
}

export default MyDrive
