import React from 'react'
import dp1 from '../../assets/dp1.jpg'

function ClientProfileCard() {
  return (
    <div>
      <figure className='p-5'>
          <img
            alt="client"
            className='w-28 h-28 rounded-full mx-auto'
            src= {dp1}
          />
          <figcaption className='text-center mt-5 flex-wrap'>
            <p className='text-gray-700 font-semibold text-xl mb-2'>
              John Doe
            </p>
          </figcaption>
        </figure>
    </div>
  )
}

export default ClientProfileCard
