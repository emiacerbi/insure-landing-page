import Image from 'next/image'
import React, {useState} from 'react'

import logo from '../public/assets/logo.svg'
import hamIcon from '../public/assets/icon-hamburger.svg'
import closeIcon from '../public/assets/icon-close.svg'
import { MobileMenu } from './MobileMenu'

export const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // const mobMenu = document.querySelector('.mobile-menu')

  const mobileMenuLogo = isMobileMenuOpen ? closeIcon : hamIcon

  return (
    <>
      <nav className='navbar'>
        <Image src={logo} alt='logo' layout='intrinsic' className='navbar__logo' />

        <div className='navbar__ham'>
          <Image 
            src={mobileMenuLogo} 
            alt='menu-icon' 
            layout='intrinsic' 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}  
          />

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
      {/* {
        isMobileMenuOpen && <MobileMenu isMobileMenuOpen={isMobileMenuOpen} />
      } */}
      
      <MobileMenu isMobileMenuOpen={isMobileMenuOpen}/>

    </>
  )
}
