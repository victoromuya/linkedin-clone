import React, { forwardRef } from 'react'
import './Posts.css'
import Avatar from '@material-ui/core/Avatar'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import InputOption from './InputOption'

const Posts = forwardRef(({ name, description, message, photoUrl }, ref) => {

  return (
    <div ref={ref} className='post'>
        <div className="post__header">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon} title="like" color="gray"/>
            <InputOption Icon={ChatOutlinedIcon} title="chat" color="gray"/>
            <InputOption Icon={ShareOutlinedIcon} title="share" color="gray"/>
            <InputOption Icon={SendOutlinedIcon} title="send" color="gray"/>

        </div>
    </div>
  )
}
)

export default Posts
