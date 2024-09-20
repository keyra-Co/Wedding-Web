/* eslint-disable react/prop-types */
import './CountDown.css';

import { useEffect, useState } from 'react';
import { calculateTimeLeft } from '../../../utils/countDownTimer';

export default function CountDown() {
  const targetDate = new Date('Dec 25, 2024 08:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const countDownTimer = timeLeft.map((time) => <CountDownItem key={time.name} {...time} />);

  return (
    <section className="countDown section">
      <h2 className="countDown__title second-title autoDownScroll">Hari yang ditunggu</h2>
      <div className="countDown__item-wrapper">{countDownTimer}</div>
    </section>
  );
}

function CountDownItem({ time, name }) {
  return (
    <div className="countDown__item autoLeftScroll">
      <div className="countDown__time">{time}</div>
      <div className="countDown__time-name">{name}</div>
    </div>
  );
}
