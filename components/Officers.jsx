import React from 'react'
import OfficerCard from './OfficerCard'
import Trique from '@/public/photos/officers/trique.jpg'
import Karthik from '@/public/photos/officers/karthik.png'
import Shirley from '@/public/photos/officers/shirleyli.png'
import Anne from '@/public/photos/officers/annemai.jpg'
import Bineet from '@/public/photos/officers/bineet.png'
import Galit from '@/public/photos/officers/galitbolotin.png'
import Tim from '@/public/photos/officers/tim.png'



const Officers = () => {
  const officers = [
    {
      name: "Karthik Manishankar",
      role: "President",
      photo: Karthik,
      linkedin: "https://www.linkedin.com/in/karthikmanishankar/"
    },
    {
      name: "Shirley Li",
      role: "Vice President",
      photo: Shirley,
      linkedin: "https://www.linkedin.com/in/shirley-shuhua-li/"
    },
    {
      name: "Galit Bolotin",
      role: "Event Chair",
      photo: Galit,
      linkedin: "https://www.linkedin.com/in/gbolotin/"
    },
    {
      name: "Anne Mai",
      role: "Event Chair",
      photo: Anne,
      linkedin: "https://www.linkedin.com/in/annepmai/"
    },
    {
      name: "Bineet Anand",
      role: "Social Media",
      photo: Bineet,
      linkedin: "https://www.linkedin.com/in/bineet-anand/"
    },
    {
      name: "Timnothy Kim",
      role: "Treasurer",
      photo: Tim,
      linkedin: "https://www.linkedin.com/in/timothy-kim712/"
    },
    {
      name: "Trique Nguyen",
      role: "Dev Team Lead",
      photo: Trique,
      linkedin: "https://www.linkedin.com/in/triquenguyen"
    },
  ]
  return (
    <div className="flex flex-col items-center justify-center gap-8 max-w-[1080px]">
      <h1 className="font-black text-4xl">Our Officers</h1>
      <div className="xl:grid xl:grid-cols-4 sm:flex sm:flex-wrap md:flex md:flex-wrap gap-8 items-center justify-center">
        {officers.map((officer) => (
          <OfficerCard name={officer.name} role={officer.role} photo={officer.photo} linkedin={officer.linkedin} />
        ))}
      </div>
    </div>
  )
}

export default Officers