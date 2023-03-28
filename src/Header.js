import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationIcon from '@material-ui/icons/Notifications';
import { logout } from './features/userSlice';
import { auth } from './Firebase';
import { useDispatch } from 'react-redux';


function Header() {

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className='header'>
        <div className="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />

            <div className="header_search">
                <SearchIcon />
                <input type="text" placeholder='Search'/>
            </div>
        </div>

        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="home"/>
            <HeaderOption Icon={SupervisorAccount} title=" My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationIcon} title="Notifications"/>
            <HeaderOption avatar="https://media.licdn.com/dms/image/C4D03AQFdA836BxNrbw/profile-displayphoto-shrink_100_100/0/1659048133036?e=1684972800&v=beta&t=iWeaMQaL6QScs2h2ASPQFBKTtOD_e64OhgNzhtw-jck" 
            title="Me" onClick={logoutOfApp}/>
        </div>
      
    </div>
  )
}

export default Header
