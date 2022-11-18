import React from 'react'
import Navbar from '../components/Navbar'
import HeaderAturan from '../components/HeaderAturan'
import ContohSoal from '../components/ContohSoal'
import AnswerCosinus from '../components/AnswerCosinus'

export default function Cosinus() {
  return (
    <div>
      <Navbar props={{
        judul: 'Aturan Cosinus',
        subjudul: 'Aturan cosinus adalah rumus yang dapat digunakan untuk menghitung panjang sisi atau besar sudut yang belum diketahui pada suatu segitiga. Rumus aturan cosinus digunakan apabila pada suatu segitiga terdapat dua panjang sisi yang diketahui dan besar sebuah sudut yang diapit kedua sisi tersebut. Panjang sisi yang berhadapan dengan sudut apit dapat ditentukan panjangnya dengan aturan cosinus.'
        }}/>
      <HeaderAturan props={{
        title: 'Aturan Cosinus',
        subtitle: 'Misalkan sebuah segitiga ABC memiliki tiga panjang sisi yaitu satuan a , b , dan c . Dan besar ketiga sudut segitiga ABC adalah α, β, dan γ. Rumus aturan sinus pada segitiga ABC memenuhi tiga persamaan berikut.',
        image: './aturan-cosinus.png',
        image_title: 'Aturan Cosinus'
      }}/>
      <ContohSoal props={{
        image: './contoh-cosinus.jpg',
        image_title: 'Contoh Cosinus',
        title: 'Dua kapal A dan B meninggalkan pelabuhan P bersama-sama. Kapal A boat dengan arah 30 o  dan kecepatan 30 km/jam, sedangkan kapal B boat dengan arah 90 o  dan kecepatan 45 km/jam. Jika kedua kapal kapal selama 2 jam, maka jarak kedua kapal tersebut adalah...',
      }}/>
      <AnswerCosinus/>
    </div>
  )
}
