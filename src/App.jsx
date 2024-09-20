// Styles
import './styles/css-reset.css';
import './styles/Global.css';
import './styles/animation.css';

// Components
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';
import Audio from './components/audiocompt/Audio';

// Hooks
import { useState, useEffect } from 'react';
import { useToggle } from './utils/useToggle';
import { useAudio } from './utils/useAudio';

function App() {
  const { toggle, handleToggle } = useToggle();
  const [data, setData] = useState('');
  console.log(data);
  const { audioRef, togglePlay, isPlaying } = useAudio();

  useEffect(() => {
    toggle && document.body.classList.remove('no-scroll');
    window.scrollTo(0, 0);
  }, [toggle]); // Efek hanya dijalankan saat navOpen berubah

  return (
    <>
      <Header onPlay={togglePlay} isOpen={toggle} onOpen={handleToggle} />
      <Main onBtn={setData} isOpen={toggle} />
      <Footer />
      <Modal data={data} />
      <Audio audioRef={audioRef} onPlay={togglePlay} isPlaying={isPlaying} />
    </>
  );
}

export default App;
