import React from 'react'

export default function HeaderAturan({ props }) {
  return (
    <div className='lg:w-full lg:h-auto lg:flex lg:px-24 lg:py-12 lg:mb-24 lg:shadow-lg'>
        <div className='lg:w-11/12 lg:flex lg:justify-between'>
            <div className='lg:w-3/5'>
                <p className='lg:text-4xl lg:font-bold lg:text-right lg:py-8 lg:px-24 font-poppins'>{props.title}</p>
                <p className='lg:text-md lg:font-medium lg:text-center font-poppins lg:px-24 lg:text-right lg:text-gray-700 lg:leading-8'>{props.subtitle}</p>
            </div>
            <div className='lg:w-2/5'>
                <img src={ props.image } alt={props.image_title} className='w-full'/>
            </div>
        </div>
    </div>
  )
}
