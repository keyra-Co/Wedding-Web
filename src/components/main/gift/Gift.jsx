/* eslint-disable react/prop-types */
import { dataReceiver1, dataReceiver2 } from '../../../data/dataReceiver';
import './Gift.css';

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
      <p className="gift__description autoAppearScroll">
        Bagi keluarga dan sahabat yang ingin mengirimkan hadiah, silakan mengirimkannya melalui tautan berikut:
      </p>
      {children}
    </div>
  );
}

function ButtonWrapper({ onBtn }) {
  return (
    <div className="gift__btn-wrapper">
      <button
        onClick={() => onBtn(dataReceiver1)}
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        type="button"
        className="button-main btnw gift__btn autoLeftScroll"
      >
        <i className="bi bi-gift me-2"></i>
        Kirim Hadiah
      </button>
      <button
        onClick={() => onBtn(dataReceiver2)}
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        type="button"
        className="button-main btnw gift__btn autoLeftScroll"
      >
        <i className="bi bi-credit-card me-2"></i>
        Transfer Bank
      </button>
    </div>
  );
}
