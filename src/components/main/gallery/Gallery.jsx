/* eslint-disable react/prop-types */
import './Gallery.css';

import { dataImgLS, dataImgPT } from '../../../data/dataImgs';
import { useImgSlider } from '../../../utils/sliderImg';
import { useAnimate } from '../../../utils/observ';

export default function Gallery() {
  return (
    <section className="galery section">
      <h2 className="autoDownScroll second-title gallery-title">Our Memories</h2>
      <GallerySlider />
      <GallerySlide />
    </section>
  );
}

function GallerySlider() {
  const setRef = useAnimate();

  const images = dataImgLS.map((image) => <ImageMainItem key={image.name} {...image} />);
  const { currentIndex } = useImgSlider(images);

  return (
    <div ref={setRef} className="gallery__main-slider hidden">
      <div className="gallery__main-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images}
      </div>
    </div>
  );
}

function GallerySlide() {
  const setRef = useAnimate();

  const images = dataImgPT.map((image) => <ImageItem key={image.name} {...image} />);
  return (
    <div ref={setRef} className="gallery__items-slide hidden">
      {images}
    </div>
  );
}

function ImageMainItem({ imageLg, name }) {
  return <img src={`images/${imageLg}`} alt={name} className="gallery__image-item" />;
}
function ImageItem({ imageSm, name }) {
  return <img src={`images/${imageSm}`} alt={name} className="gallery__image-item" />;
}
