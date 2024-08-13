import React, { useState } from 'react';
import axios from 'axios';
import './FileUpload.css';

// This component allows the user to upload a file to the server

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setError('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    console.log(formData);
    try {
      const response = await axios.post('http://localhost:8000/api/v1/files/fileUpload', formData, {
        withCredentials: true,credentials:"include"
        ,headers:{
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials':true,
        }
      });
alert("File Uploaded successfully")
      // console.log('File uploaded successfully:', response.data);
      setSelectedFile(null); // Clear the selected file
      setError(null); // Clear any errors
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Failed to upload file.');
    }
  };

  return (
    <div className="file-upload-container">
      <h3>Upload a File</h3>

      <form className="file-upload-form" onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button className="btn" type="submit">Upload File</button>

      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload File</button>

      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default FileUpload;
