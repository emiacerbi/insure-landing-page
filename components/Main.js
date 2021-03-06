import React from 'react'
import Image from 'next/image'


import imgDesktop from '../public/assets/image-intro-desktop.jpg'

export const Main = () => {
  return (
    <main className='main'>
      <div className='main__wrapper'>
        <div className='main__wrapper__image'>
          <Image src={imgDesktop} alt='family photo' className='main__wrapper__image__desktop' />
        </div>

        <div className='main__wrapper__container'>
          <h1 className='main__wrapper__container__header' >Humanizing <br/> your insurance.</h1>
          <p className='main__wrapper__container__text'>
            Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan {`that's`} right for you. Ensure you and your loved ones are protected
          </p>
          <button className='btn btn-secondary'>View Plans</button>
        </div>
      </div>

    </main>

  )
}
