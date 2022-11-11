import React, {useState, useRef} from 'react'
import './navbar.css';
import openMenu from '../../Assets/openMenu.svg';

const BarLinks = () => (
      <>
            <p><a href="#artical">Articles</a></p>
            <p><a href="#charts">Chats</a></p>
            <p><a href="#awards">Awards</a></p>
            <p><a href="#about">About</a></p>
      </>
);

const GetInTouch = () => <button className="getInTouch">Get in touch</button>;


function Navbar() {
      const [showMenu, setShowMenu] = useState(true);
      const menuRef = useRef(null);

  return (
      <div className="navbar">
          <div className="navbar-logo">
              <p>Jonathan Specter</p>
          </div>
          <div className="navbar-links">
             <BarLinks />
          </div>
          <div className="navbar-getInTouch">
                <GetInTouch />
          </div>
              <div className="opemenu" onClick={() => { setShowMenu(!showMenu); console.log(showMenu); showMenu ? menuRef.current.style.left = '0px' : menuRef.current.style.left = '-200%'; }}>
                  <img src={openMenu} alt="" srcSet="" />
            </div>
              
              <div className="menu"  ref = {menuRef}>
                    <BarLinks />
                    <GetInTouch />
              </div>

    </div>
    
  )
}

export default Navbar