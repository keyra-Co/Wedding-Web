import './Footer.css';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="name">
        <h3 className="creator">Made with 💖 by</h3>
        <h2 className="footer__creator">
          <a href="https://www.instagram.com/bagasaputra666/" target="_blank">
            Bagas Saputra
          </a>
        </h2>
      </div>
      <div className="credit">
        <h3 className="fourth-title">Don&apos;t hesitate to contact me on</h3>
        WA : 085718333538 | IG : @bagasaputra666
      </div>
      <div className="copyright-songs">
        <p className="copyright-song">Backsound by :</p>
        <p className="copyright-song">
          <a href="https://youtu.be/i8fa3JIrgpY?si=UWRK_f8ykD8SYjJ3" target="_blank">
            At My Worst - Pink Sweat$ - Vocal and acoustic guitar cover Ft. Renee Foy
          </a>
        </p>
        <p className="copyright">© all rights reserved by keyraCo.</p>
      </div>
    </footer>
  );
}
