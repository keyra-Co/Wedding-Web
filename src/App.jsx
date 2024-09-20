// Styles
import './styles/css-reset.css';
import './styles/Global.css';
import './styles/animation.css';

// Components
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { Modal } from './components/modal/Modal';
import Audio from './components/audiocompt/Audio';

// Hooks
import { useState, useEffect, useRef } from 'react';
import { useToggle } from './utils/useToggle';

// Data
import { dataReceiver1 } from './data/dataReceiver';

function App() {
  const { toggle, handleToggle } = useToggle();
  const [data, setData] = useState(dataReceiver1);

  useEffect(() => {
    toggle && document.body.classList.remove('no-scroll');
    window.scrollTo(0, 0);
  }, [toggle]); // Efek hanya dijalankan saat navOpen berubah

  const [isPlaying, setIsPlaying] = useState(false); // State untuk play/pause
  const audioRef = useRef(null); // Reference ke elemen audio

  // Fungsi untuk toggle play/pause
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Pause audio
    } else {
      audioRef.current.play(); // Play audio
    }
    setIsPlaying(!isPlaying); // Ubah state
  };

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = 'images/3LS.jpg';
    img.onload = () => setImagesLoaded(true);

    const audio = new Audio('assets/audio/videoplayback.opus');
    audio.oncanplaythrough = () => setAudioLoaded(true);
  }, []);

  const isLoading = !(imagesLoaded && audioLoaded);

  return (
    <>
      {isLoading ? (
        <div className="loading-screen">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <Header onPlay={togglePlay} isOpen={toggle} onOpen={handleToggle} />
          <Main onBtn={setData} isOpen={toggle} />
          <Footer />
          <Modal data={data} />
          <Audio audioRef={audioRef} onPlay={togglePlay} isPlaying={isPlaying} />
        </>
      )}
    </>
  );
}

export default App;
