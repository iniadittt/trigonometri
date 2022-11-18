import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import Pythagoras from './pages/Pythagoras';
import Sinus from './pages/Sinus';
import Cosinus from './pages/Cosinus';
import Latihan from './pages/Latihan';
import PageNotFound from './pages/PageNotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pythagoras" element={<Pythagoras />} />
        <Route path="/sinus" element={<Sinus />} />
        <Route path="/cosinus" element={<Cosinus />} />
        <Route path="/latihan" element={<Latihan />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
