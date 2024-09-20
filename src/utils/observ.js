import { useEffect, useRef, memo } from 'react';

export const useAnimate = () => {
  const elRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // Hentikan pengamatan
        }
      });
    });

    elRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      elRefs.current.forEach((element) => {
        if (element) {
          observer.unobserve(element); // Hentikan pengamatan saat unmount
        }
      });
    };
  }, []);

  return (ref) => {
    elRefs.current.push(ref); // Tambahkan referensi elemen ke array
  };
};

export default memo(useAnimate);
