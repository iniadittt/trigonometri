import React from 'react'
import Navbar from '../components/Navbar'

export default function Latihan() {

  function handlerSoal(e){
    e.preventDefault()
  }

  return (
    <div>
      <Navbar props={{
        judul: 'Latihan Trigonometri',
        subjudul: 'Mari kita latihan trigonometri untuk meningkatkan pengetahuan kita',
      }}/>
      <div className='lg:w-full lg:h-auto lg:flex lg:justify-center lg:relative lg:bottom-36'>
        <button className='lg:bg-slate-700 lg:px-6 lg:py-2 lg:rounded-lg lg:shadow-lg lg:text-white lg:font-poppins lg:font-xl lg:font-medium lg:duration-300 lg:cursor-pointer lg:hover:bg-slate-600' onClick={(e)=> handlerSoal(e)}>Latihan Trigonometri</button>
      </div>
    </div>
  )
}
