import React, { useState } from 'react';
import MyNavbar from './components/MyNavbar';
import Hero from './components/Hero';
import VideoModal from './components/VideoModal';
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Team from './components/Team'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  const handleOpenModal = (src) => {
    setVideoSrc(src);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setVideoSrc('');
    setShowModal(false);
  };

  return (
    <div>
      <MyNavbar />
      <Hero handleOpenModal={handleOpenModal} />
      <VideoModal show={showModal} handleClose={handleCloseModal} videoSrc={videoSrc} />
      <About />
      <Skills />
      <Projects />
      <Team />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
