import React from 'react'
import Image from 'next/image'

import boltLogo from '../public/assets/icon-snappy-process.svg'
import moneyLogo from '../public/assets/icon-affordable-prices.svg'
import peopleLogo from '../public/assets/icon-people-first.svg'

export const DifferentSection = () => {
  return (
    <section className='section'>
      <h2 className='section__header' >We re different</h2>

      <div className='section__card' >
        <Image 
          src={boltLogo}
          alt='bolt logo'
        />
        <h3 className='section__card__header' >Snappy Process</h3>
        <p className='section__card__text'>Our application process can be completed in minutes, not hours. {`Don't`} get stuck filling in tedious forms.</p>
      </div>

      <div className='section__card' >
        <Image 
          src={moneyLogo}
          alt='affordable logo'
        />
        <h3 className='section__card__header' >Affordable Prices</h3>
        <p className='section__card__text'>We {`don't`} want you worrying about high monthyly costs. Our prices may be low, but we still offer the best coverage possible.</p>
      </div>

      <div className='section__card' >
        <Image 
          src={peopleLogo}
          alt='people logo'
        />
        <h3 className='section__card__header' >People First</h3>
        <p className='section__card__text'>Our plans arent full of conditions and clauses to prevent payouts. We make sure {`you're`} covered when you need it.</p>
      </div>
    </section>

    
  )
}
