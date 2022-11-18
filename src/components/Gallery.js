import React from 'react'

export default function Gallery() {
  return (
    <div className='w-full h-screen lg:flex lg:px-28 lg:py-10 lg:mt-8 lg:bg-gradient-to-b from-slate-600 to-slate-800 lg:gap-16 lg:justify-between'>
        <div className='lg:w-3/12'>
            <div className='lg:w-full lg:h-full lg:py-24 lg:flex lg:items-center lg:pt-8'>
                <h1 className='lg:font-bold lg:text-6xl lg:text-white'>Skema Pythagoras</h1>
            </div>    
        </div>
        <div className='lg:w-9/12 lg:flex w-full h-full lg:gap-4'>
            <div className='lg:w-1/3 lg:flex lg:flex-col lg:gap-4'>
                <div className='lg:w-full lg:h-1/2 bg-slate-200 lg:rounded-2xl lg:overflow-hidden'>
                    <img src="/image2.jpeg" alt="Trigonometri" className='lg:w-full' />
                </div>
                <div className='lg:w-full lg:h-1/2 bg-slate-200 lg:rounded-2xl lg:overflow-hidden'>
                    <img src="/image6.jpeg" alt="Trigonometri" className='lg:h-full' />
                </div>
            </div>
            <div className='lg:w-1/3'>
                <div className='lg:w-full lg:h-full bg-slate-200 lg:rounded-2xl lg:overflow-hidden'>
                    <img src="/image1.png" alt="Trigonometri" className='lg:h-full lg:w-full' />
                </div>
            </div>
            <div className='lg:w-1/3 lg:flex lg:flex-col lg:gap-4'>
                <div className='lg:w-full lg:h-1/2 bg-slate-200 lg:rounded-2xl lg:overflow-hidden'>
                    <img src="/image5.jpeg" alt="Trigonometri" className='lg:h-full' />
                </div>
                <div className='lg:w-full lg:h-1/2 bg-slate-200 lg:rounded-2xl lg:overflow-hidden'>
                    <img src="/image4.jpeg" alt="Trigonometri" className='lg:h-full' />
                </div>
            </div>
        </div>
    </div>
  )
}
