/* eslint-disable react/prop-types */
// Components
import Hero from './hero/Hero';
import Proposition from './proposition/Proposition';
import About from './about/About';
import Story from './story/Story';
import Detail from './detail/Detail';
import CountDown from './countdown/CountDown';
import Gift from './gift/Gift';
import Gallery from './gallery/gallery';
import Comment from './comment/Comment';
import Ending from './ending/Ending';

// Style
// import './Main.css';

export default function Main({ isOpen, onBtn }) {
  return (
    <main className="main">
      <Hero isOpen={isOpen} />
      <Proposition />
      <About />
      <Story />
      <Detail />
      <CountDown />
      <Gift onBtn={onBtn} />
      <Gallery />
      <Comment />
      <Ending />
    </main>
  );
}
