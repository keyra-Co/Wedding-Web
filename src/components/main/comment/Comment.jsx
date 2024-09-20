import './Comment.css';
export default function Comment() {
  return (
    <section className="comment section">
      <h2 className="comment__title second-title autoDownScroll">Ucapan & Do&apos;a</h2>
      <div className="comment__container">
        <div className="comment__item">
          <div className="comment__account autoAppearScroll">BS</div>
          <div className="comment__bubble autoDownScroll">
            <span className="account__name paragraph">Bagas Saputra</span>
            <span className="account__place">di Bogor</span>
            <div className="account__comment">Selamat ya semoga langgeng terus 🥰</div>
          </div>
        </div>
        <div className="comment__item">
          <div className="comment__account autoAppearScroll">BS</div>
          <div className="comment__bubble autoDownScroll">
            <span className="account__name">Bagas Saputra</span>
            <span className="account__place">di Bogor</span>
            <div className="account__comment">Selamat ya semoga langgeng terus 🥰</div>
          </div>
        </div>
        <div className="comment__item">
          <div className="comment__account autoAppearScroll">BS</div>
          <div className="comment__bubble autoDownScroll">
            <span className="account__name">Bagas Saputra</span>
            <span className="account__place">di Bogor</span>
            <div className="account__comment">Selamat ya semoga langgeng terus 🥰</div>
          </div>
        </div>
      </div>
    </section>
  );
}
