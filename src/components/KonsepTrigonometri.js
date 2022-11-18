import React, { useEffect, useState } from 'react'

export default function KonsepTrigonometri() {
  const [imageTrigonometri, setImageTrigonometri] = useState('./konsep-trigonometri.png')

  function handlerClickSinus(e){
    e.preventDefault()
    setImageTrigonometri('./konsep-trigonometri-sinus.jpeg')
  }

  function handlerClickCosinus(e){
    e.preventDefault()
    setImageTrigonometri('./konsep-trigonometri-cosinus.jpeg')
  }

  function handlerClickReset(e){
    e.preventDefault()
    setImageTrigonometri('./konsep-trigonometri.png')
  }
  return (
    <div className='lg:w-full lg:h-screen lg:flex lg:flex-col'>
        <div className='lg:w-full lg:h-auto lg:mb-8'>
            <h1 className='lg:text-center lg:font-bold lg:text-4xl'>Konsep Trigonometri</h1>
        </div>
        <div className='lg:w-full lg:h-auto lg:flex lg:justify-center'>
            <p className='lg:w-2/3 mt-6 text-md leading-8 text-gray-600 font-medium px-4 lg:text-center font-poppins'>
              Jika salah satu satu sudut 90 derajat dan sudut lainnya diketahui, dengan demikian sudut ketiga dapat ditemukan, karena tiga sudut segitiga bila dijumlahkan menjadi 180 derajat. Karena itu dua sudut (yang kurang dari 90 derajat) bila dijumlahkan menjadi 90 derajat: ini sudut komplementer.</p>
        </div>
        <div className='lg:w-full lg:h-auto lg:flex lg:justify-center lg:py-8'>
          <img src={imageTrigonometri} alt="Konsep Trigonometri" className='w-4/12 relative' id='img-trigonometri'/>
        </div>
        <div className='lg:w-full lg:h-auto lg:flex lg:justify-center'>
          <div className='lg:w-8/12 lg:h-auto lg:flex lg:justify-center lg:gap-4'>
            <button className='font-poppins lg:px-5 lg:py-0 lg:bg-blue-800 lg:text-white lg:rounded-md lg:font-medium lg:text-sm lg:leading-8 lg:duration-300 lg:hover:bg-blue-700' onClick={e => handlerClickSinus(e)}>Sinus</button>
            <button className='font-poppins lg:px-5 lg:py-0 lg:bg-blue-800 lg:text-white lg:rounded-md lg:font-medium lg:text-sm lg:leading-8 lg:duration-300 lg:hover:bg-blue-700' onClick={e => handlerClickCosinus(e)}>Cosinus</button>
            <button className='font-poppins lg:px-5 lg:py-0 lg:bg-blue-800 lg:text-white lg:rounded-md lg:font-medium lg:text-sm lg:leading-8 lg:duration-300 lg:hover:bg-blue-700' onClick={e => handlerClickReset(e)}>Reset</button>
          </div>
        </div>

    </div>
  )
}
