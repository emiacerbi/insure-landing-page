import React, {useEffect} from 'react'

export const MobileMenu = ({isMobileMenuOpen}) => {

  const test = isMobileMenuOpen ? 'animate__fadeInDown' : 'animate__fadeOutUp'

  useEffect(() => {
    isMobileMenuOpen ? 
      document.body.style.overflow = "hidden" : 
      document.body.style.overflow = "visible"
  
  }, [isMobileMenuOpen])
  


  return (
    <>
      <nav className={`mobile-menu animate__animated ${test}`} >
        <a className='mobile-menu__link'>how we work</a>
        <a className='mobile-menu__link'>blog</a>
        <a className='mobile-menu__link'>account</a>
        <a className='btn btn-secondary'>view plans</a>
      </nav>
    </>
  )
}
