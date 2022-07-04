import React from 'react';
import './navbar.scss';
import Lendsqr from '../../assets/lendsqr.png';
import Union from '../../assets/Union.png';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Image from '../../assets/image 4.png';

const navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="logo">
                <img src={Union} alt="" className='img1' />
                <img src={Lendsqr} alt=""  className='img2' />
            </div>
            <div className="items">
               <div className='searchContainer'>
                    <div className="search">
                    <input type="text" placeholder="Search for something" />
                    </div>
                    <div className="searchIcon">
                        <SearchOutlinedIcon className="icon"/>
                    </div>
                </div>
                
                <div className="item">
                    <p>Docs</p>
                    <NotificationsNoneIcon className="notifyIcon"/>
                    <div className="details">
                        <div className='imageContainer'>
                               <img src={Image} alt="image" />
                        </div>
                        <span>Adedeji</span>
                        <ArrowDropDownIcon/>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default navbar;