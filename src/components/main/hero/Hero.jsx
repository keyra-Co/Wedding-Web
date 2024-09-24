/* eslint-disable react/prop-types */
import './Hero.css';

export default function Hero({ isOpen }) {
  return (
    <section className="hero">
      <img className="hero__bg-img" src="images/1LS.jpg" alt="wedding bg hero" />
      <div className="hero__wrapper">
        <h2 className={`hero__sub-title ${isOpen ? 'grow' : ''}`}>The Wedding of</h2>
        <HeroTitle isOpen={isOpen} />
        <h3 className={`hero__date ${isOpen ? 'grow' : ''}`}>25 Desember 2024</h3>
      </div>
    </section>
  );
}

function HeroTitle({ isOpen }) {
  return (
    <h1 className={`hero__title ${isOpen ? 'grow' : ''}`}>
      <span className="hero__male">pernama</span>
      <span className="hero__ampersan">&</span>
      <span className="hero__female">Wulan</span>
    </h1>
  );
}
