import Image from 'next/image'
import React from 'react'

import logo from '../public/assets/logo.svg'
import hamIcon from '../public/assets/icon-hamburger.svg'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <Image src={logo} alt='logo' layout='intrinsic' className='navbar__logo' />

      <div className='navbar__ham'>
        <Image src={hamIcon} alt='menu-icon' layout='intrinsic'/>
      </div>

      <div className='navbar__wide'>
        <ul className='navbar__wide__links'>
          <li ><a href='#'>HOW WE WORK</a></li>
          <li><a href='#'>BLOG</a></li>
          <li><a href='#'>ACCOUNT</a></li>
          <button className='btn'>VIEW PLANS</button>
        </ul>
      </div>
    </nav>
  )
}
