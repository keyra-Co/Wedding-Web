import { useState, useEffect } from 'react';

export function useImgSlider(images, isOpen = true) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval;

    // Auto-scroll hanya dijalankan ketika isOpen bernilai true
    if (isOpen) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }, 3500);
    }

    // Bersihkan interval saat komponen di-unmount atau ketika isOpen berubah menjadi false
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [images.length, isOpen]);

  return { currentIndex };
}
