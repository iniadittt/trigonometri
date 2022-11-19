import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Dropdown } from 'flowbite-react'
import axios from 'axios'


export default function Latihan() {

  const [soal, setSoal] = useState('')
  const [answer, setAnswer] = useState('')
  const [imageSoal, setImageSoal] = useState('https://iili.io/H9pKfd7.png')
  const [imageSoalBenar, setImageSoalBenar] = useState('')
  const [imageSoalSalah, setImageSoalSalah] = useState('')

  const [jawaban, setJawaban] = useState('')
  const [simbol, setSimbol] = useState({})
  const [benar, setBenar] = useState('hidden') //alert
  const [salah, setSalah] = useState('hidden')  //alert
  const [imageBenar, setImageBenar] = useState('hidden')
  const [imageSalah, setImageSalah] = useState('hidden')
  
  const [displaySoal, setDisplaySoal] = useState('hidden')

  useEffect(() => {
    setSimbol({
        kurangLebih: '±',
        takHingga: '∞',
        tidakSamaDengan: '≠',
        akarDua: '√',
        akarTiga: '∛',
        segitigaAtas: '∆',
        segitigaBawah: '∇',
        alpha: 'α',
        beta: '𝛽',
        gamma: '𝛾',
        delta: '𝛿',
        teta: '𝜃',
        phi: '𝜋',
        derajat: '°'
      })
  },[])

  function handlerSimbol(e){
    e.preventDefault()
    setJawaban(`${jawaban}${e.target.value}`)
  }

  function handlerSoal(e){
    e.preventDefault()
    setDisplaySoal('block')
    axios.get('https://app-website-wulan.herokuapp.com/trigonometri')
      .then(response => {
        setImageSoal(response.data.data.imageSoal || 'https://iili.io/H9pKfd7.png')
        setSoal(response.data.data.soal)
        setAnswer(response.data.data.jawaban)
        setImageSoalBenar(response.data.data.imageJawabanBenar)
        setImageSoalSalah(response.data.data.imageJawabanSalah)
        setJawaban('')
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    if(jawaban === ''){
        setBenar('hidden')
        setSalah('hidden')
        setImageBenar('hidden')
        setImageSalah('hidden')
    }else if(jawaban === answer){
        setImageBenar('block')
        setBenar('block')
        setImageSalah('hidden')
        setSalah('hidden')
    }else{
        setImageSalah('block')
        setSalah('block')
        setImageBenar('hidden')
        setBenar('hidden')
    }
},[jawaban, answer])

  return (
    <div>
      <Navbar props={{
        judul: 'Latihan Trigonometri',
        subjudul: 'Mari kita latihan trigonometri untuk meningkatkan pengetahuan kita',
      }}/>
      <div className='lg:w-full lg:h-auto lg:flex lg:justify-center lg:relative lg:bottom-36'>
        <button className='lg:bg-slate-700 lg:px-6 lg:py-2 lg:rounded-lg lg:shadow-lg lg:text-white lg:font-poppins lg:font-xl lg:font-medium lg:duration-300 lg:cursor-pointer lg:hover:bg-slate-600' onClick={(e) => handlerSoal(e)}>Latihan Trigonometri</button>
      </div>

      <div className={displaySoal}>
        <div className='lg:w-full lg:h-screen'>
          <div className='lg:flex lg:flex-col'>
            <div className='lg:w-full lg:h-36'>
              <img src={imageSoal} alt={imageSoal} className='lg:mx-auto lg:h-full'/>
            </div>
            <p className='lg:font-poppins lg:text-2xl lg:font-medium lg:text-center lg:py-8'>{soal}</p>
            <div className='lg:w-2/3 lg:h-auto lg:flex lg:justify-center lg:gap-1 lg:p-4 lg:mx-auto bg:red-700'>
              <input type="text" className='lg:w-2/3 lg:py-3 lg:px-6 lg:bg-gray-100 lg:font-medium lg:text-sm lg:rounded-l-full lg:font-poppins lg:ring-0 lg:focus:ring-1 lg:focus:ring-inset lg:focus:ring-slate-800' placeholder='Masukkan Jawaban Disini' onChange={e => setJawaban(e.target.value)} value={jawaban} name={answer}/>
              <Dropdown label="Simbol" className='lg:rounded-lg lg:shadow-lg'>
                  <Dropdown.Item className='lg:flex lg:gap-1 lg:hover:bg-transparent'>
                      <button className='lg:bg-gray-100 lg:px-2 lg:py-1 lg:rounded-md lg:font-poppins lg:font-medium lg:text-base' onClick={e => handlerSimbol(e)} value={simbol.kurangLebih}>{simbol.kurangLebih}</button>
                      <button className='lg:bg-gray-100 lg:px-2 lg:py-1 lg:rounded-md lg:font-poppins lg:font-medium lg:text-base' onClick={e => handlerSimbol(e)} value={simbol.takHingga}>{simbol.takHingga}</button>
                      <button className='lg:bg-gray-100 lg:px-2 lg:py-1 lg:rounded-md lg:font-poppins lg:font-medium lg:text-base' onClick={e => handlerSimbol(e)} value={simbol.tidakSamaDengan}>{simbol.tidakSamaDengan}</button>
                      <button className='lg:bg-gray-100 lg:px-2 lg:py-1 lg:rounded-md lg:font-poppins lg:font-medium lg:text-base' onClick={e => handlerSimbol(e)} value={simbol.akarDua}>{simbol.akarDua}</button>
                      <button className='lg:bg-gray-100 lg:px-2 lg:py-1 lg:rounded-md lg:font-poppins lg:font-medium lg:text-base' onClick={e => handlerSimbol(e)} value={simbol.akarTiga}>{simbol.akarTiga}</button>
                      <button className='lg:bg-gray-100 lg:px-2 lg:py-1 lg:rounded-md lg:font-poppins lg:font-medium lg:text-base' onClick={e => handlerSimbol(e)} value={simbol.segitigaAtas}>{simbol.segitigaAtas}</button>
                      <button className='lg:bg-gray-100 lg:px-2 lg:py-1 lg:rounded-md lg:font-poppins lg:font-medium lg:text-base' onClick={e => handlerSimbol(e)} value={simbol.segitigaBawah}>{simbol.segitigaBawah}</button>
                      <button className='lg:bg-gray-100 lg:px-2 lg:py-1 lg:rounded-md lg:font-poppins lg:font-medium lg:text-base' onClick={e => handlerSimbol(e)} value={simbol.alpha}>{simbol.alpha}</button>
                      <button className='lg:bg-gray-100 lg:px-2 lg:py-1 lg:rounded-md lg:font-poppins lg:font-medium lg:text-base' onClick={e => handlerSimbol(e)} value={simbol.beta}>{simbol.beta}</button>
                      <button className='lg:bg-gray-100 lg:px-2 lg:py-1 lg:rounded-md lg:font-poppins lg:font-medium lg:text-base' onClick={e => handlerSimbol(e)} value={simbol.gamma}>{simbol.gamma}</button>
                      <button className='lg:bg-gray-100 lg:px-2 lg:py-1 lg:rounded-md lg:font-poppins lg:font-medium lg:text-base' onClick={e => handlerSimbol(e)} value={simbol.delta}>{simbol.delta}</button>
                      <button className='lg:bg-gray-100 lg:px-2 lg:py-1 lg:rounded-md lg:font-poppins lg:font-medium lg:text-base' onClick={e => handlerSimbol(e)} value={simbol.teta}>{simbol.teta}</button>
                      <button className='lg:bg-gray-100 lg:px-2 lg:py-1 lg:rounded-md lg:font-poppins lg:font-medium lg:text-base' onClick={e => handlerSimbol(e)} value={simbol.phi}>{simbol.phi}</button>
                      <button className='lg:bg-gray-100 lg:px-2 lg:py-1 lg:rounded-md lg:font-poppins lg:font-medium lg:text-base' onClick={e => handlerSimbol(e)} value={simbol.derajat}>{simbol.derajat}</button>
                  </Dropdown.Item>                
              </Dropdown>
              </div>
              <div className='lg:w-full lg:h-auto lg:flex lg:flex-col lg:justify-center'>
                <div className='lg:flex lg:justify-center lg:w-10/12 lg:px-20'>
                    <div className={salah}>
                        <div className='absolute lg:w-1/5 lg:bg-red-400 lg:text-red-900 lg:px-7 lg:py-2 lg:rounded-md lg:font-poppins lg:text-sm lg:mb-6 lg:mx-auto lg:text-center lg:font-semibold'>Jawaban Salah</div>
                    </div>
                    <div className={benar}>
                        <div className='absolute lg:w-1/5 lg:bg-green-400 lg:text-green-900 lg:px-7 lg:py-2 lg:rounded-md lg:font-poppins lg:text-sm lg:mb-6 lg:mx-auto lg:text-center lg:font-semibold'>Jawaban Benar</div>
                    </div>
                </div>
                <div className='lg:w-1/3 lg:mx-auto lg:flex lg:flex-col lg:mt-14'>
                    <div className={imageBenar}>
                        <img src={imageSoalBenar} alt="Jawaban Benar" className='lg:w-2/3 lg:mx-auto'/>
                    </div>    
                    <div className={imageSalah}>
                        <img src={imageSoalSalah} alt="Jawaban Salah" className='lg:w-2/3 lg:mx-auto'/>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
