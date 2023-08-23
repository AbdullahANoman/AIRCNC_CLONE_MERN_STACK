const RoomInfo = ({room}) => {
  const {host,guest,bedRooms,bathrooms,description} = room || {};

  const {name,photoUrl,email} = host || {}
    return (
      <div className='col-span-4 flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <div
            className='
              text-xl 
              font-semibold 
              flex 
              flex-row 
              items-center
              gap-2
            '
          >
            <div>Hosted by {name}</div>
  
            <img
              className='rounded-full'
              height='30'
              width='30'
              alt='Avatar'
              src={photoUrl}
            />
          </div>
          <div
            className='
              flex 
              flex-row 
              items-center 
              gap-4 
              font-light
              text-neutral-500
            '
          >
            <div>{guest} guests</div>
            <div>{bedRooms} rooms</div>
            <div>{bathrooms} bathrooms</div>
          </div>
        </div>
  
        <hr />
        <div
          className='
        text-lg font-light text-neutral-500'
        >
          {description}
        </div>
        <hr />
      </div>
    )
  }
  
  export default RoomInfo