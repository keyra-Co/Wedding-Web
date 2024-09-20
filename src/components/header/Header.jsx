/* eslint-disable react/prop-types */
import './Header.css';

export default function Header({ isOpen, onOpen, onPlay }) {
  return (
    <header className={`header ${isOpen ? 'hide' : ''}`}>
      <img className="header__bg-img" src="/images/12PT.jpg" />
      <HeaderHead />
      <HeaderBody onOpen={onOpen} onPlay={onPlay} />
    </header>
  );
}

function HeaderHead() {
  return (
    <div className="header__head growBlur">
      <span className="header__greet">Dear,</span>
      <h3 className="header__guest">wedding guests</h3>
      <span className="header__greet">You are invited!</span>
    </div>
  );
}

function HeaderBody({ onOpen, onPlay }) {
  function onClick() {
    onOpen();
    onPlay();
  }
  return (
    <div className="header__body">
      <span className="header__greet growBlur">The wedding celebration of</span>
      <h1 className="header__title growBlur">Purnama & Wulan</h1>
      <button onClick={onClick} className="btnw header__btn-invite">
        <i className="bi bi-envelope-open-heart"></i>
        Open Invitation
      </button>
    </div>
  );
}
