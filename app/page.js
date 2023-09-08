"use client"
import { useEffect, useState } from 'react'
import axios from 'axios'
import Homescreen from '@/components/Homescreen'
import Officers from '@/components/Officers'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center md:px-16 2xl:px-24 sm:px-8 gap-8 bg-[#f5f8f1]">      
      <Homescreen />
      <Officers />
    </main>
  )
}
