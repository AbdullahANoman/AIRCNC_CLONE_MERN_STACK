import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../providers/AuthProvider";
import { findBooking } from "../../../api/bookings";
import { toast } from "react-hot-toast";
import TableRow from "../TableRow";

const MyBookings = () => {
    const [bookRooms,setBookRooms] = useState([]);
    const {user} = useContext(AuthContext)
   
    useEffect(()=>{
        findBooking(user?.email).then(data=>setBookRooms(data)).catch(err=>{
            toast.error(err.message)
        })
    },[user])

    console.log("bookRoom", bookRooms);


    
    return (
      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Location
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Price
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      From
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      To
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                    {
                        bookRooms.map((bookRoom)=>(
                            <TableRow key={bookRoom?._id} booking={bookRoom} findBooking={findBooking}></TableRow>
                        ))
                    }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default MyBookings