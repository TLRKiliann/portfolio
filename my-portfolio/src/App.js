import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Curriv } from './Pages/Curriv';
import { Certifications } from './Pages/Certifications';
import { Projects } from './Pages/Projects';
import { Videos } from './Pages/Videos';
import './App.scss';


const App = () => {
  return (
    <div className="div--origin">
      <Navbar />
      <Routes>
        <Route path='/' element={<Curriv />} />
        <Route path='/Certifications' element={<Certifications />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Videos' element={<Videos />} />
      </Routes>
    </div>
  );
}

export default App;