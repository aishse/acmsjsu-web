import React from 'react'
import EventCard from './EventCard'

const Events = () => {
  const events = [
    {
      title: "CS Club Fair 1",
      description: "Come to learn more about us at the Club Fair!",
      schedule: "Sept 08, 11 AM - 2 PM",
      location: "MQH 225",
    },
    {
      title: "Engineering Club Fair",
      description: "Come to learn more about us at the Club Fair!",
      schedule: "Sept 13, 11 AM - 2 PM",
      location: "7th Street Plaza",
    },
    {
      title: "CS Club Fair 2",
      description: "Come to learn more about us at the Club Fair!",
      schedule: "Sept 15, 11 AM - 2 PM",
      location: "MQH 225",
    },
  ]
  return (
    <div className="flex flex-col gap-4">
       <div className="flex gap-6">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
       </div>
    </div>
  )
}

export default Events