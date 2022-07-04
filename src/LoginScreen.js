import React, { useState } from 'react'
import "./LoginScreen.css"
import SignUpScreen from './SignUpScreen';
function LoginScreen() {
  const [signIn,setSignIn] = useState(false);
  return (
    <div className='loginScreen'>
        <img className='loginScreen_logo' src="https://th.bing.com/th/id/R.00a20044f313db63df1e3d294fc70596?rik=dJ4ftUvVaX3sQQ&riu=http%3a%2f%2fassets.stickpng.com%2fthumbs%2f580b57fcd9996e24bc43c529.png&ehk=bS46j1odNo2JhSgsJZPJ3gnxunL6mg8wiykP8v8Tqts%3d&risl=&pid=ImgRaw&r=0" alt="Background">
        </img>
        <button 
        onClick={()=>{setSignIn(true)}}
        className='loginScreen_button'>Sign In</button>
        <div className="loginScreen_gradient"></div>
        <div className='loginScreen_body'>
          {signIn ? (<SignUpScreen /> ) : (          
           <><h1>Unlimited Films, TV Programmes and more.</h1><h2>Watch anywhere. Cancel at any time</h2><h4>Ready to watch? Enter your email to create or restart your membership</h4><div className='loginScreen_input'>
            <form>
              <input type="email" placeholder='Email Address' />
              <button onClick={() => { setSignIn(true); } }>GET STARTED</button>
            </form>
          </div></>
          )}
        </div>
      </div>
    )
}

export default LoginScreen