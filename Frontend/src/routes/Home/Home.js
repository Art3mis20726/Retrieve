import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import FileUpload from '../../components/fileupload/FileUpload'
import FileList from '../../components/filelist/FileList'

const Home = () => {
  return (
    <>
    <Navbar/>
    <FileUpload/>
    <FileList/>
    </>
  )
}

export default Home