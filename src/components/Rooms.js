import React, { useState, useEffect} from 'react'


const Rooms = () => {

  const [rooms, setRooms] = useState([])  

  useEffect(() => {
    const fetchData = async () => {
        const data = await window.fetch('/api/rooms')
        const response = await data.json();
        console.log(response);
        setRooms(response)
    }
    fetchData();
  }, [])

  return (
    <>
      {rooms.map(room => (
        <div key={room._id}>
          <h2>{room.name}</h2>
        </div>
      ))}
    </>
  )
}

export default Rooms