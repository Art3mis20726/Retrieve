import React from 'react'
import SidebarItem from './SidebarItem'
import '../../styles/Sidebar.css'
import { DeleteOutline, ImportantDevices, InsertDriveFile, PeopleAlt, QueryBuilder, StarBorder } from '@mui/icons-material'
import StorageIcon from '@mui/icons-material/Storage';
import UploadWidget from '../UploadWidget'

const index = () => {
  return (
    <div className='sideBar'>
      <UploadWidget />
        <div className="sidebar_itemsContainer">
          <SidebarItem arrow={true} icon={<InsertDriveFile/>} label={'MyDrive'} />
          {/* <SidebarItem arrow={true} icon={<ImportantDevices/>} label={'Computers'} />
          <SidebarItem arrow={true} icon={<PeopleAlt/>} label={'Shared with me'} />
          <SidebarItem arrow={true} icon={<QueryBuilder/>} label={'Recent'} />
          <SidebarItem arrow={true} icon={<StarBorder/>} label={'Starred'} />
          <SidebarItem arrow={true} icon={<DeleteOutline/>} label={'Bin'} />

            <hr/>

            <SidebarItem arrow={true}icon={<StorageIcon />} label={'Storage'} /> */}
            
        </div>
    </div>
  )
}

export default index