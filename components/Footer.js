import Image from 'next/image'
import React from 'react'

import logo from '../public/assets/logo.svg'
import facebook from '../public/assets/icon-facebook.svg'
import instagram from '../public/assets/icon-instagram.svg'
import pint from '../public/assets/icon-pinterest.svg'
import twitter from '../public/assets/icon-twitter.svg'


export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__social'>
          <Image src={logo} alt='logo' className='footer__social__logo' />

          <div className='flex'>
            <Image src={facebook} alt='facebook' className='footer__social__logo' />
            <Image src={twitter} alt='twitter' className='footer__social__logo' />
            <Image src={pint} alt='pinterest' className='footer__social__logo' />
            <Image src={instagram} alt='instagram' className='footer__social__logo' />
          </div>
        </div>

        <div className='footer__contact'>

          <div className='footer__contact__links'>
            <p className='footer__contact__links__title'>our company</p>
            <a className='footer__contact__links__link'>how we work</a>
            <a className='footer__contact__links__link'>why insure?</a>
            <a className='footer__contact__links__link'>check price</a>
            <a className='footer__contact__links__link'>reviews</a>
          </div>

          <div className='footer__contact__links'>
            <p className='footer__contact__links__title'>help me</p>
            <a className='footer__contact__links__link'>faq</a>
            <a className='footer__contact__links__link'>terms of use</a>
            <a className='footer__contact__links__link'>privacy policy</a>
            <a className='footer__contact__links__link'>cookies</a>
          </div>

          <div className='footer__contact__links'>
            <p className='footer__contact__links__title'>contact</p>
            <a className='footer__contact__links__link'>sales</a>
            <a className='footer__contact__links__link'>support</a>
            <a className='footer__contact__links__link'>live chat</a>
          </div>

          <div className='footer__contact__links'>
            <p className='footer__contact__links__title'>others</p>
            <a className='footer__contact__links__link'>careers</a>
            <a className='footer__contact__links__link'>press</a>
            <a className='footer__contact__links__link'>licenses</a>
          </div>
        </div>

      </div>


    </footer>
  )
}
