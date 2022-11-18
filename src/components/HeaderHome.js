import React from 'react'

export default function HeaderHome() {
  return (
    <div className='isolate h-screen w-full'>
      <div className="px-10 pt-16 lg:px-28 mt-3">
        
        <div className='w-full h-auto lg:flex lg:gap-x-12 lg:justify-between'>
          
          <div className='lg:w-7/12 lg:drop-shadow-2xl rounded-lg'>
            <img src="./trigonometri.png" alt="Trigonometri" className='w-full rounded-lg'/>
          </div>

          <div className='lg:w-5/12 pt-8'>
            <h1 className="text-2xl font-bold tracking-tight sm:text-4xl px-4">
              Pengertian <span className='text-blue-800'>Trigonometri</span>
            </h1>
            <p className='mt-6 text-md leading-8 text-gray-600 sm:text-start font-medium px-4 font-poppins'>
              Trigonometri dari bahasa Yunani trigonon = "tiga sudut" dan metron = "mengukur". Adalah sebuah cabang matematika yang mempelajari hubungan yang meliputi panjang dan sudut segitiga.
            </p>
          </div>
        </div>


      </div>
    </div>
  )
}
