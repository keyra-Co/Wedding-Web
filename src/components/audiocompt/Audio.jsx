/* eslint-disable react/prop-types */
import './Audio.css';
// Audio
import backgroundOpus from '../../assets/audio/videoplayback.opus';
import backgroundMp3 from '../../assets/audio/lether.mp3';

export default function Audio({ audioRef, onPlay, isPlaying }) {
  return (
    <div onClick={onPlay} className="audio-icon">
      <img className={`audio-disc ${isPlaying ? 'autoRotate' : ''}`} src="decorations/vinyl-record.png" alt="disc-audio" />
      <audio ref={audioRef} loop>
        <source src={backgroundOpus} type="audio/ogg" />
        <source src={backgroundMp3} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}
