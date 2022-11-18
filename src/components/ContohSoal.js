import React from 'react'

export default function ContohSoal({ props }) {
  return (
    <div className='lg:w-full lg:h-auto lg:px-24'>
        <div className='lg:w-full lg:h-auto lg:font-bold lg:text-4xl lg:text-center font-poppins lg:mb-10'>Contoh Soal & Pembahasan</div>
        <div className='lg:w-full lg:h-auto lg:flex lg:px-16 lg:gap-6'>
            <img src={props.image} alt={props.image_title} className='lg:w-2/5 lg:h-2/3 mx-auto'/>
            <div className='lg:w-3/5 lg:flex lg:flex-col lg:justify-start lg:py-16'>
                <div className=' font-poppins lg:text-lg lg:font-medium lg:text-gray-800 lg:text-center'>{props.title}</div>
            </div>
        </div>
    </div>
  )
}
