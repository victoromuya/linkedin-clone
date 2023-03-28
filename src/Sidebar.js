import React from 'react'
import './Sidebar.css'
import Avatar from '@material-ui/core/Avatar'
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

function Sidebar() {
    const user = useSelector(selectUser)

    const recentitem = (topic) =>(
        <div className="sidebar__recentitem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3TFdX8NxoKoRh9SshHqryOR3J4hM9Cp1lUNUMLoTZ&s" alt="" />
            <Avatar src={user.photoUrl} className='sidebar__avatar'>
                {user.email[0]}
            </Avatar>
            <h2 className='name'>{user.displayName}</h2>
            <h4 className='email'>{user.email}</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>2,345</p>
            </div>

            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className='sidebar__statNumber'>2,127</p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentitem("reactjs")}
            {recentitem("programming")}
            {recentitem("software engineering")}
            {recentitem("backend")}
        </div>
       
    </div>
  )
}

export default Sidebar
