import React from 'react'
import '../styles/Header.css'
import retrieve_logo from '../media/retrieve_logo_orange.png'
import SearchIcon from '@mui/icons-material/Search';
import { ExpandMore, HelpOutline} from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className="header">
        <div className="header_logo">
        <img src={retrieve_logo} alt="Retrieve Logo" className='logo'/>
        {/* <span>Drive</span> */}
        </div>
        <div className="header_searchContainer">
            <div className="header_searchBar">
                <SearchIcon />
                <input type='text' placeholder='Search' />
                {/* <ExpandMore/> */}
            </div>
        </div>
        <div className="header_icons">
            <span>
                {/* <HelpOutline /> */}
                <Link to="/about" className='header_link'>About Us</Link>
                {/* <SettingsIcon /> */}
            </span>
            <Link to="/profile">
                <img src=" " alt="User Photo" />
            </Link>

            {/* <AppsIcon /> */}
        </div>
    </div>
  );
}

export default Header