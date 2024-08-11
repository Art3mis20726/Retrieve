import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import FileUpload from '../../components/fileupload/FileUpload'
import FileViewer from '../../components/filelist/FileViewer'
const Home = () => {
  return (
    <>
    <Navbar/>
    <FileUpload/>
    <FileViewer/>
    </>
  )
}

export default Home