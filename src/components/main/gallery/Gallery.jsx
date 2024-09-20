/* eslint-disable react/prop-types */
import './Gallery.css';

import { dataImgLS, dataImgPT } from '../../../data/dataImgs';
import { useImgSlider } from '../../../utils/sliderImg';

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
  const images = dataImgLS.map((image) => <ImageMainItem key={image.name} {...image} />);
  const { currentIndex } = useImgSlider(images);

  return (
    <div className="gallery__main-slider autoDownScroll">
      <div className="gallery__main-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images}
      </div>
    </div>
  );
}

function GallerySlide() {
  const images = dataImgPT.map((image) => <ImageMainItem key={image.name} {...image} />);
  return <div className="gallery__items-slide autoAppearScroll">{images}</div>;
}

function ImageMainItem({ image, name }) {
  return <img src={`images/${image}`} alt={name} className="gallery__image-item" />;
}
