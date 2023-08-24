
// post the bookings api with booking details the room

export const makeBookings = async (bookingInfo) =>{
     const url = `${import.meta.env.VITE_API_URL}/bookings`
     const res = await fetch(url,{
        method : 'POST',
        headers: {
            "content-type" : 'application/json'
        },
        body : JSON.stringify(bookingInfo)
     })

     const data = await res.json();
     return data
}


//update singleRoom Details add booked status true 
export const updateRoomBooked = async (id,status) =>{
    const room = {
        booked : status
    }

    const url = `${import.meta.env.VITE_API_URL}/booked/${id}`

    const res = await fetch(url, {
        method:'PATCH',
        headers : {
            "content-type" : 'application/json',
        },
        body : JSON.stringify(room)
    })

    const data = await res.json();
    return data ;
}

// find with email myBooking dashboard show the value 
export const findBooking = async(email)=>{
    
    const url = `${import.meta.env.VITE_API_URL}/bookings?email=${email}`

    const res = await fetch(url)

    const data = await res.json()
    return data 
}



// delete the my booking list of my single booked room 
export const deleteBookRoom = async(id)=>{
    const url = `${import.meta.env.VITE_API_URL}/bookings/${id}`

    const res = await fetch(url,{
        method : 'DELETE'
    })
    const data = await res.json()
    return data ;
}