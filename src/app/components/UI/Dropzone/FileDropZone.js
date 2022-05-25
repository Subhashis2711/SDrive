import React, { useMemo } from 'react'
import { useDropzone } from 'react-dropzone'

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    // padding: '20px',
    borderWidth: 4,
    borderRadius: 2,
    borderColor: '#fafafa',
    borderStyle: 'dashed',
    // backgroundColor: '#fafafa',
    // color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
}

const focusedStyle = {
    borderColor: 'white',
}

const acceptStyle = {
    borderColor: '#2196f3',
}

const rejectStyle = {
    borderColor: '#ff1744',
}

function FileDropZone(props) {

    const { noClick, noDragEventsBubbling } = props
    const {
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject,
    } = useDropzone({ 
        accept: { 'image/*': [] },
        noClick: noClick,
        noDragEventsBubbling: noDragEventsBubbling

    })

    const style = useMemo(
        () => ({
            ...baseStyle,
            ...(isFocused ? focusedStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [isFocused, isDragAccept, isDragReject]
    )
    
        
    

    // const files = acceptedFiles.map((file) => (
    //     <li key={file.path}>{file.path}</li>
    // ))

    return (
        <section className="container">
            <div {...getRootProps({style})}>
                <input {...getInputProps()} />
                {props.children}
            </div>
        </section>
    )
}

export default FileDropZone
