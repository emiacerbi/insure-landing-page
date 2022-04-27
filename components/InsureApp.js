import React from 'react'
import { DifferentSection } from './DifferentSection'
import { HowWeWork } from './HowWeWork'
import { Main } from './Main'
import { Navbar } from './Navbar'

export const InsureApp = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <DifferentSection />
      <HowWeWork />
    </div>
  )
}
