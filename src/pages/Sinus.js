import React from 'react'
import Navbar from '../components/Navbar'
import HeaderAturan from '../components/HeaderAturan'
import ContohSoal from '../components/ContohSoal'
import AnswerSinus from '../components/AnswerSinus'

export default function Sinus() {
  return (
    <div>
      <Navbar props={{
        judul: 'Aturan Sinus',
        subjudul: 'Aturan sinus merupakan hubungan antara besar sudut dan panjang sisi yang berlawanan. Rumus aturan sinus dapat digunakan untuk menentukan panjang sisi atau besar sudut suatu segitiga. Namun aturan sinus hanya dapat digunakan ketika terdapat informasi sudut dan sisi yang berhadapan serta sudut/sisi lain yang berhadapan. ',
      }}/>
      <HeaderAturan props={{
        title: 'Aturan Sinus',
        subtitle: 'Misalkan sebuah segitiga ABC memiliki tiga panjang sisi yaitu satuan a , b , dan c . Dan besar ketiga sudut segitiga ABC adalah α, β, dan γ. Rumus aturan sinus pada segitiga ABC memenuhi tiga persamaan berikut.',
        image: './aturan-sinus.png',
        image_title: 'Aturan Sinus'
      }}/>
      <ContohSoal props={{
        image: './contoh-sinus.png',
        image_title: 'Contoh Sinus',
        title: 'Panjang segitiga PQR, panjang sisi QR = 8 cm, ∠P = 45 o  dan ∠R = 45 o . Panjang sisi PQ adalah...',
      }}/>
      <AnswerSinus/>
    </div>
  )
}
