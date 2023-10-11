import React from 'react'
import logo from '../images/logo.png';
import avatar from '../images/avatar.jpg';
import { BsFillSunFill } from "react-icons/bs"

import "../components/Header.css"

function Header() {
   return (
      <div>
         <header>
            <div className='HeaderOne'>
               <img src={logo} alt="logo" className='logo-image' />

               <div className='dotted-line'></div>
               <div className='logo-image1'>
                  <img src={avatar} alt="image-avatar" className='logoimage1-profile' />
               </div>
            </div>
         </header>

         {/* sidebar */}

         <div className='side-bar'>
            <div className='side-bar1'>
               <div className='side-logo'>
                  <img src={logo} alt="logo-image" className='side-logo-image' />
                  <div className='SunIcon'><BsFillSunFill/></div>
                  <div className='bottom-dotted'></div>
                  <div className='bottom-image'>
                     <img src={avatar} alt="" className='bottom-image1' />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Header