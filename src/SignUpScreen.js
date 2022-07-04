import React from 'react'
import "./SignUpScreen.css"
import { useRef } from 'react';
import { auth } from './firebase';

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) =>{
      e.preventDefault();
      auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      ).then((authUser)=>{
          console.log(authUser);
      })
      .catch((error)=>{
          alert(error.message);
      })
  }
  const signin = (e) =>{
      e.preventDefault();
      auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      ).then((authUser)=>{
          console.log(authUser);
      })
      .catch((error)=>{
          alert(error.message);
      })
  }
  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email Address" />
        <input ref={passwordRef} type="password" placeholder="Password"></input>
        <button type='submit' onClick={signin}>Sign In</button>
        <h4><span className='signupScreen_gray'>New to NETFLIX ?</span><span onClick={register} className='underlining'>Sign Up now.</span></h4>
      </form>
    </div>
  )
}

export default SignUpScreen