/* eslint-disable react/prop-types */
// Audio
import backgroundOpus from '../../assets/audio/videoplayback.opus';
import backgroundMp3 from '../../assets/audio/lether.mp3';

export default function Audio({ audioRef, onPlay, isPlaying }) {
  return (
    <div onClick={onPlay} className="audio-icon">
      <i className={`bi ${isPlaying ? 'bi-vinyl-fill autoRotate' : 'bi-stop-circle-fill'}`}></i>
      <audio ref={audioRef} loop>
        <source src={backgroundOpus} type="audio/ogg" />
        <source src={backgroundMp3} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}
