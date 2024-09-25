/* eslint-disable react/prop-types */
import './Gift.css';
import { dataReceiver1, dataReceiver2 } from '../../../data/dataReceiver';
import { useAnimate } from '../../../utils/observ';

export default function Gift({ onBtn }) {
  return (
    <section className="gift section">
      <div className="gift__wrapper">
        <img src="decorations/love.svg" alt="svg love" className="gift__icon autoDownScroll" />
        <h2 className="second-title autoAppearScroll">Amplop Digital</h2>
        <GiftDetail>
          <ButtonWrapper onBtn={onBtn} />
        </GiftDetail>
      </div>
    </section>
  );
}

function GiftDetail({ children }) {
  return (
    <div className="gift__detail">
      <p className="gift__description autoAppearScroll fourth-title">
        Bagi keluarga dan sahabat yang ingin mengirimkan hadiah, silakan mengirimkannya melalui tautan berikut:
      </p>
      {children}
    </div>
  );
}

function ButtonWrapper({ onBtn }) {
  return (
    <div className="gift__btn-wrapper">
      <ButtonGift onClick={() => onBtn(dataReceiver1)} cls="bi-gift" text="Kirim Hadiah" />
      <ButtonGift onClick={() => onBtn(dataReceiver2)} cls="bi-credit-card" text="Transfer Bank" />
    </div>
  );
}

function ButtonGift({ onClick, cls, text }) {
  const setRef = useAnimate();

  return (
    <button
      ref={setRef}
      onClick={onClick}
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
      type="button"
      className="button-main btnw gift__btn hidden"
    >
      <i className={`bi ${cls} me-2`}></i>
      {text}
    </button>
  );
}
