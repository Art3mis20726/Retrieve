import { useEffect, useRef, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import '../styles/NewFile.css';

const UploadWidget = () => {
    
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dmyxf1ylx',
            uploadPreset: 'p4pklw8z'
        }, function(error, result) {
            console.log(result);
        });
    }, []);

    return (
        <div className='newFile' onClick={() => widgetRef.current.open()}> 
            <div className="newFile_container"> 
                <AddIcon/>
                <p>Upload</p> 
            </div>
        </div>
    );
}

export default UploadWidget;
