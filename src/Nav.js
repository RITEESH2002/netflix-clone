/* eslint-disable no-undef */
/* eslint-disable no-template-curly-in-string */
import React,{useState} from "react";
import "./Nav.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Nav() {
  const [show , handleShow] = useState(false);
  const navigate = useNavigate();
  const transitionNavBar = () => {
    if(window.scrollY > 100)
        handleShow(true);
    else
        handleShow(false);  
  }
  
  useEffect(() => {
    window.addEventListener("scroll",transitionNavBar);
    return () => window.removeEventListener("scroll",transitionNavBar);
  }, []);
  
  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className="nav_contents">
        <img
          onClick={() => {
            navigate('/')
          }}
          className="nav_logo"
          src="https://th.bing.com/th/id/R.00a20044f313db63df1e3d294fc70596?rik=dJ4ftUvVaX3sQQ&riu=http%3a%2f%2fassets.stickpng.com%2fthumbs%2f580b57fcd9996e24bc43c529.png&ehk=bS46j1odNo2JhSgsJZPJ3gnxunL6mg8wiykP8v8Tqts%3d&risl=&pid=ImgRaw&r=0"
          alt="Netflix"
        />
        <img
          onClick={()=>{
            navigate('/profile')
          }}
          className="nav_avatar"
          src="https://i.pinimg.com/564x/eb/05/eb/eb05eb6fb0880b5c811669b60b0278bb.jpg"
          alt="Smiley"
        />
      </div>
    </div>
  );
}

export default Nav;
