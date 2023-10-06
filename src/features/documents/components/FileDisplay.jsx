import React from 'react';


const FileDisplay = ({ fileType, fileUrl }) => {
    switch (fileType) {
        case 'pdf':
            return <iframe src={fileUrl} title="PDF Document" width="100%" height="100%"/>
        case 'jpeg':
            return <img src={fileUrl} alt="Image" />
        case 'png':
            return <img src={fileUrl} alt="Image" />
        case 'docx':
            return <iframe src={`https://docs.google.com/viewer?url=${encodeURIComponent({fileUrl})}&embedded=true`} title="Document Viewer" width="100%" height="600px"></iframe>
    };
};

export default FileDisplay;

