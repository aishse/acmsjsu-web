"use client"
import React from 'react'
import Logo from '@/public/icons/logo.jpg'
import Image  from 'next/image'

const Navbar = () => {
  return (
    <div className="bg-[#f5f8f1] px-16 py-3 flex items-center sticky top-0 drop-shadow-md">
      <Image src={Logo} alt="Logo" width={100} height={100} className="mr-auto" />
    </div>
  )
}

export default Navbar