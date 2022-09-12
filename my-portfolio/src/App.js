import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Contact } from './Pages/Contact';
import { Certifications } from './Pages/Certifications';
import { About } from './Pages/About';
import { Videos } from './Pages/Videos';
import './App.scss';


const App = () => {
  return (
    <div className="div--origin">
      <Navbar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/Certifications' element={<Certifications />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Videos' element={<Videos />} />
      </Routes>
    </div>
  );
}

export default App;