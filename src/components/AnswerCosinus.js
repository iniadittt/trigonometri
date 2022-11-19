import React, { useEffect, useState } from 'react'
import { Dropdown } from 'flowbite-react'

export default function AnswerCosinus() {

    const resultJawaban = '30√7'
    const [imageBenar, setImageBenar] = useState('hidden')
    const [imageSalah, setImageSalah] = useState('hidden')
    const [benar, setBenar] = useState('hidden')
    const [salah, setSalah] = useState('hidden')
    const [jawaban, setJawaban] = useState('')
    const [simbol, setSimbol] = useState({})

    useEffect(()=>{
        if(jawaban === ''){
            setBenar('hidden')
            setSalah('hidden')
            setImageBenar('hidden')
            setImageSalah('hidden')
        }else if(jawaban === resultJawaban){
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
    },[jawaban])

    function handlerSimbol(e){
        e.preventDefault()
        setJawaban(`${jawaban}${e.target.value}`)
    }

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
        })
    },[])

  return (
    <div className='lg:w-full lg:py-12 lg:flex lg:justify-center lg:gap-10 lg:flex-col'>
        <div className='lg:w-full lg:h-auto lg:flex lg:justify-center lg:gap-1'>
            <input type="text" className='lg:w-2/3 lg:py-3 lg:px-6 lg:bg-gray-100 lg:font-medium lg:text-sm lg:rounded-l-full lg:font-poppins lg:ring-0 lg:focus:ring-1 lg:focus:ring-inset lg:focus:ring-slate-800' placeholder='Masukkan Jawaban Disini' onChange={e => setJawaban(e.target.value)} value={jawaban}/>
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
                </Dropdown.Item>                
            </Dropdown>
        </div>
        <div className='lg:w-full lg:h-auto lg:flex lg:flex-col lg:justify-center'>
            <div className='lg:flex lg:justify-center lg:w-10/12'>
                <div className={salah}>
                    <div className='absolute lg:w-1/5 lg:bg-red-400 lg:text-red-900 lg:px-7 lg:py-2 lg:rounded-md lg:font-poppins lg:text-sm lg:mb-6 lg:mx-auto lg:text-center lg:font-semibold'>Jawaban Salah</div>
                </div>
                <div className={benar}>
                    <div className='absolute lg:w-1/5 lg:bg-green-400 lg:text-green-900 lg:px-7 lg:py-2 lg:rounded-md lg:font-poppins lg:text-sm lg:mb-6 lg:mx-auto lg:text-center lg:font-semibold'>Jawaban Benar</div>
                </div>
            </div>
            <div className='lg:w-1/3 lg:mx-auto lg:flex lg:flex-col lg:mt-14'>
                <div className={imageBenar}>
                    <img src='./jawaban-cosinus.png' alt="Jawaban Cosinus" className='lg:w-full'/>
                </div>    
                <div className={imageSalah}>
                    <img src='./salah-cosinus.png' alt="Jawaban Cosinus" className='lg:w-full'/>
                </div>
            </div>
        </div>
    </div>
  )
}
