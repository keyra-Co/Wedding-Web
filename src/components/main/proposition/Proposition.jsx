import './Proposition.css';

export default function Proposition() {
  return (
    <section className="proposition section">
      <Border />
      <Pictures />
    </section>
  );
}

function Border() {
  return (
    <div className="border autoAppearScroll">
      <p className="paragraph autoLeftScroll">
        “Dan di antara tanda-tanda kekuasaan Allah ialah diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu merasa tentram di
        samping-Nya dan dijadikan-Nya rasa kasih sayang di antara kamu. Sesungguhnya yang demikian itu menjadi bukti kekuasaan Allah bagi kaum yang
        berfikir.“
      </p>
      <span className="surah">(QS. Ar- Rum 21)</span>
    </div>
  );
}

function Pictures() {
  return (
    <div className="pictures">
      <div className="pictures__item autoLeftScroll fast">
        <img className="item__img" src="images/6PT.jpg" alt="img 1" />
      </div>
      <div className="pictures__item autoLeftScroll normal">
        <img className="item__img" src="images/3PT.jpg" alt="img 2" />
      </div>
      <div className="pictures__item autoLeftScroll">
        <img className="item__img" src="images/5PT.jpg" alt="img 3" />
      </div>
    </div>
  );
}
