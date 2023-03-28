import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { About } from './Components/about/About';
import { Contact } from './Components/contacts/Contact';
import { Work } from './Components/work/Work';
import { HomePage } from './Pages/HomePage/HomePage';

export const Routing = () => {
  return (
    <div className='pt-16'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}
