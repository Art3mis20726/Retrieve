import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FileViewer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faFileImage, faFilePdf, faFileWord, faFileExcel, faFilePowerpoint, faFile } from '@fortawesome/free-solid-svg-icons'; // Import required icons

function FileViewer() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('http://localhost:8000/api/v1/users/getAllFiles',{credentials:"include",withCredentials: true});
        setFiles(response.data.data);
        setLoading(false);

      } catch (err) {
        console.error('Error fetching files:', err);
        setError('Failed to fetch files');
        setLoading(false);
      }
    };
  
    fetchFiles();
  }, []);

  const getFileIcon = (fileName) => {
    // Extract file extension
    const extension = fileName.split('.').pop().toLowerCase();
    // Map file extensions to FontAwesome icons
    switch (extension) {
      case 'pdf':
        return faFilePdf;
      case 'doc':
      case 'docx':
        return faFileWord;
      case 'xls':
      case 'xlsx':
        return faFileExcel;
      case 'ppt':
      case 'pptx':
        return faFilePowerpoint;
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return faFileImage;
      default:
        return faFile;
    }
  };

  if (loading) return <p>Loading files...</p>;
  if (error) return <p>Error: {error}</p>;

  const renderFiles = () => {
    return files.map(file => (
      <div key={file.public_id} className="file-entry">
        <div className="file-icon">
          <FontAwesomeIcon icon={getFileIcon(file.public_id)} />
        </div>
        <div className="file-info">
          <p>{file.public_id}</p>
          <a href={file.url} target="_blank" rel="noopener noreferrer" className="file-link">
            {file.public_id}
          </a>
        </div>
      </div>
    ));
  };

  return (
    <div className="file-viewer">
      <h1>My Files</h1>
      <div className="file-list">
        {renderFiles()}
      </div>
    </div>
  );
}

export default FileViewer;
