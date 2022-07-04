import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { auth } from './firebase'
import Nav from './Nav'
import './ProfileScreen.css'
function ProfileScreen() {
  const user = useSelector(selectUser)
  return (  
    <div className='profileScreen'>
        <Nav />
        <div className='profileScreen_body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen_info'>
                <img src='https://i.pinimg.com/564x/eb/05/eb/eb05eb6fb0880b5c811669b60b0278bb.jpg' 
                alt='Smiley'
                ></img>
                <div className='profileScreen_details'>
                  <h2>{user.email}</h2>
                  <div className='profileScreen_plans'>
                    <h3>Plans</h3>
                    <button 
                    onClick={() => {
                      auth.signOut()
                    }}
                    className='profileScreen_signOut'>Sign Out</button>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen