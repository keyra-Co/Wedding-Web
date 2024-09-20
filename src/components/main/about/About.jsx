/* eslint-disable react/prop-types */
import './About.css';

export default function About() {
  return (
    <section className="about section">
      <div className="about__couple">
        <Couple className="autoLeftScroll fast" image={'Female.jpg'}>
          <CoupleName firstName={'Wulan'} lastName={'Duanita'} />
          <ParentsCp bapak={'Setia Budi'} ibu={'Susi Marya'} anak={'Putri'} />
          <Insta>Wlandnt</Insta>
        </Couple>
        <span className="ampersand autoAppearScroll">&</span>
        <Couple className="autoLeftScroll veryfast" image={'Male.jpg'}>
          <CoupleName firstName={'Pernama'} lastName={'Pratama'} />
          <ParentsCp bapak={'Muda Bakti'} ibu={'Elis Siswanti'} anak={'Putra'} />
          <Insta>Prnmprt</Insta>
        </Couple>
      </div>
    </section>
  );
}

function Couple({ children, image, className }) {
  return (
    <div className={`couple ${className}`}>
      <img src={`images/${image}`} alt={image} className="couple__img autoAppearScroll normal" />
      <div className="couple__description autoLeftScroll">{children}</div>
    </div>
  );
}

function CoupleName({ firstName, lastName }) {
  return (
    <div className="couple__name">
      {firstName} <span className="couple__lastname">{lastName}</span>
    </div>
  );
}

function ParentsCp({ bapak, ibu, anak }) {
  return (
    <div className="couple__parents">
      <span>{anak} dari</span>
      <span className="couple__father">Bpk. {bapak}</span>
      <span className="couple__mother">& Ibu. {ibu}</span>
    </div>
  );
}

function Insta({ children }) {
  return (
    <a className="insta" href="#">
      <i className="bi bi-instagram me-2"></i>
      {children}
    </a>
  );
}
