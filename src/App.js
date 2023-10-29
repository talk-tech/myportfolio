import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import WebDevelopment from './components/WebDevelopment';
import GraphicDesign from './components/GraphicDesign';
import Contact from './components/Contact';
import { Route ,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HeroSection />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/webdevelopment' element={<WebDevelopment/>}/>
        <Route path='/graphicdesign' element={<GraphicDesign/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>      
    </div>
  );
}

export default App;

