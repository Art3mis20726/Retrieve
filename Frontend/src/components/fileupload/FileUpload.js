import React, { useState } from 'react';
import './FileUpload.css';

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

    try {
      const response = await fetch('http://localhost:8000/api/v1/files/fileUpload', {
        method: 'POST',
        body: formData,
        headers: {
          // Add any necessary headers (e.g., authentication token)
        },
      });

      if (!response.ok) {
        throw new Error('Failed to upload file.');
      }

      const data = await response.json();
      console.log('File uploaded successfully:', data);
      // Optionally, handle success response

      // Clear selected file
      setSelectedFile(null);
      setError(null);
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Failed to upload file.');
    }
  };

  return (
    <div className="file-upload-container">
      <form onSubmit={handleSubmit}>
        <input type="file" className="file-input" onChange={handleFileChange} />
        <button type="submit" className="upload-button btn">Upload File</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default FileUpload;
