import React, { useEffect } from 'react';
import HomeScreen from './HomeScreen';
import './App.css';
import LoginScreen from './LoginScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        //LoggedIn
        dispatch(login({
          uid : userAuth.uid , 
          email : userAuth.email,
        }));
      }else{
        dispatch(logout());
        //LoggedOut
      }
    })
    return unsubscribe;
  },[dispatch])
  return (
    <div className="app">
     <Router>
        {!user ? ( <LoginScreen /> )
        : (
        <Routes>
          <Route path='/profile' element={<ProfileScreen/>}></Route>
          <Route path='/' element={<HomeScreen/>}>
          </Route>
        </Routes>
          )
        }
     </Router>
    </div>
  );
}

export default App;
