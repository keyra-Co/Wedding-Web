import Lottie from 'react-lottie';

// Animations
import loadingLove from '../../assets/animations/loadingLove.json';
import './Loading.css';

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingLove,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="loadingLove">
      <Lottie options={defaultOptions} height={400} width={400} />;
    </div>
  );
}
