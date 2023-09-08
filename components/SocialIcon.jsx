import React from 'react'
import Image from 'next/image'

const SocialIcon = ({ link, url, icon }) => {
  return (
    <a
      href={url}
      target='_blank'
      className='cursor-pointer flex gap-2 font-semibold items-center mb-4'>
      <Image src={icon}
        alt='Social'
        className='w-5 h-5 md:w-8 md:h-8'
      /> 
      {link}
    </a>
  )
}

export default SocialIcon