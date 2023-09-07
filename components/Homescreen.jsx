import React from 'react'
import LinkToButton from './LinkToButton'
import Events from './Events'

const Homescreen = () => {
  return (
    <div className='min-h-[90vh] flex flex-col gap-6 justify-center items-center'>
      <h1 className="text-4xl font-black">
        <span className="text-[#196096]">ACM-CS</span> at <span className="text-[#eabc4e]">SJSU</span>
      </h1>
      <p className="text-lg">We are the largest Computer Science organization at San José State University</p>
      <LinkToButton url="https://discord.gg/yHky9bXRdE" text="Join our Discord" />
      <Events />
    </div>
  )
}

export default Homescreen