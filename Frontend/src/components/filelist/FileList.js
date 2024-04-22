import React, { useState, useEffect } from 'react';
import './FileList.css';

const FileList = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFiles = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8000/api/v1/users/getAllFiles');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setFiles(jsonData.data); // Adjusted to match the structure where data is an array in jsonData
      } catch (error) {
        console.error("Error fetching files:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  if (loading) return <div>Loading files...</div>;
  if (!files.length) return <div>No files uploaded yet!</div>;

  return (
    <div className="file-container">
      {files.map((file, index) => (
        <div key={index} className="file-box" onClick={() => window.open(file.url, '_blank')}>
          <div className="file-name">{file.public_id}</div>
        </div>
      ))}
    </div>
  );
};

export default FileList;
