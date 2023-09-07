"use client"
import { useEffect, useState } from 'react'
import axios from 'axios'
import Homescreen from '@/components/Homescreen'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-24 bg-[#f5f8f1]">      
      <Homescreen />
    </main>
  )
}
