export const addRoom = async room =>{
    const res = await fetch(`${import.meta.env.VITE_API_URL}/addRooms`,{
        method :'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(room)
    })
    const data = await res.json();
    return data
}

export const getRooms = async ()=>{
    const url = `${import.meta.env.VITE_API_URL}/rooms`;
    const res = await fetch(url)
    const data = await res.json()
    return data
}

export const getRoom = async (id) =>{
    const url = `${import.meta.env.VITE_API_URL}/rooms/${id}`
    const res = await fetch(url)
    const data = await res.json()
    return data
}

//checkMyListing which rooms was I am added 

export const getMyRooms = async email =>{
    const url = `${import.meta.env.VITE_API_URL}/getMyAddedRooms/${email}`

    const res = await fetch(url)
    const data = await res.json()
    return data
}