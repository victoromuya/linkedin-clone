import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from './Firebase'
import { login } from './features/userSlice'
import './Login.css'

function Login() {

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [profilePic, setprofilePic] = useState("")
  const dispatch = useDispatch();

  const loginToApp = (e) => {
      e.preventDefault();

      auth.signInWithEmailAndPassword(email, password)
          .then((userAuth)=>{
            dispatch(login({
              email: userAuth.user.email,
              uid : userAuth.user.uid,
              displayName: userAuth.user.displayName,
              photoUrl: userAuth.user.photoUrl, 
            })
            );
          })
        
        .catch((error) => alert(error.message));
  };

  const register = () => {
    if(!name) {
      return alert("Please enter your full name!")
    }
    auth.createUserWithEmailAndPassword(email, password).then(
      (userAuth) => {
        userAuth.user.updateProfile(
          {
            displayName : name,
            photoUrl: profilePic,
          }
        ).then(()=>{
          dispatch(login({
            email: userAuth.user.email,
            uid : userAuth.user.uid,
            displayName: name,
            photoUrl: profilePic, 
          }))
        })
      }
    ) .catch((error) => alert(error.message));
  }
  return (
    <div className='login'>
      <img src="https://cdn.iconscout.com/icon/free/png-256/linkedin-47-189764.png?f=avif&w=128" alt="" />

    <form action="">
      <input value={name} type="text" onChange={(e) => setName(e.target.value)} placeholder='Full name (required for registration)' />
      <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email (required)'/>
      <input value={profilePic} type="text" onChange={(e) => setprofilePic(e.target.value)} placeholder='Profile Photo Url (optional)'/>
      <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password (required)' required/>
      <button type='submit' onClick={loginToApp}>Sign In</button>
    </form>
    <p className="">
      Not a member? <span className='login__register' onClick={register}>Register now</span>
    </p>
    </div>
  )
}

export default Login
