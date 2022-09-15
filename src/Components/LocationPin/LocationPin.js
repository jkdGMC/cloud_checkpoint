import React from 'react'

const LocationPin = ({text}) => {
  return (
    <div className='location-pin'>
        <div className='pin-icon'>
            <i className="fa-solid fa-location-pin"></i>
        </div>
        <div className='location-pin-adress'>
            <h1>{text}</h1>
        </div>
    </div>

  )
}

export default LocationPin;