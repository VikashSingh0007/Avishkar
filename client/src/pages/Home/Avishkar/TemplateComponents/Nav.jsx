import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import { x } from 'react-icons-kit/feather/x';
import "./Nav.css";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <div className='nav-wrapper'>
      <nav className={`avishkar-navbar ${toggle ? 'expanded bg-zinc-900 bg-opacity-70 border-white rounded-full  border-2' : 'bg-opacity-80 rounded-b-3xl '}`}>
      <img className='avishkar-logo hover:text-black  cursor-pointer w-fit h-16 transition duration-500 ease-in-out transform hover:bg-teal-400 hover:bg-opacity-90 hover:border-2 hover:rounded-3xl hover:p-[2px]  hover:scale-110' src="./images/avishkar_logo_19.png" alt="Avishkar Logo" />
        <div className='avishkar-toggle-icon' onClick={handleToggle}>
          {toggle ? (
            <Icon icon={x} size={28} className="cursor-pointer  mt-12 rotate-icon" />
          ) : (
            <Icon icon={menu} size={28}  className='bg-opacity-60 rounded-lg py-1 pl-4 pr-2 cursor-pointer rotate-icon transform hover:rotate-180 transition-all duration-300 ease-in-out hover:bg-teal-400'/>
          )}
        </div>
        <ul className='nav-links  pt-8 font-custom'>
          <Link className='flex justify-center' to="/"><li >Home</li></Link>
          
          <li className='flex justify-center' to="/Events">Events</li>
          <li className='flex justify-center' to='/sponsors'>Sponsors</li>
          <li className='flex justify-center' to="/teamPage">Our Team</li>


        </ul>
        <Link className='' to="/profile">
  <CgProfile className='absolute  top-3 right-3 transition-all duration-300 ease-in-out hover:-rotate-45 hover:p-1 hover:bg-teal-400 rounded-full text-white hover:text-black' size={50} />
</Link>
      </nav>
    </div>
  )
}

export default Nav


