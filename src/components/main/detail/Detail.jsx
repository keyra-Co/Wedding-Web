/* eslint-disable react/prop-types */
import './Detail.css';

export default function Detail() {
  return (
    <section className="detail section">
      <div className="detail__wedding autoDownScroll fast">
        <h2 className="detail__wedding-date second-title">Minggu, 25 Desember 2024</h2>
        <DetailEvent />
      </div>
    </section>
  );
}

function DetailEvent() {
  return (
    <div className="detail__wedding-info">
      <img src="decorations/love-letter.svg" alt="detail__icon envelope" className="detail__icon envelope" />
      <DetailInfo title={'Akad Nikah'}>09.00 s/d 10.00 WIB</DetailInfo>
      <DetailInfo title={'Resepsi Pernikahan'}>11.00 s/d 12.00 WIB</DetailInfo>
      <img src="decorations/location.svg" alt="detail__icon location" className="detail__icon location" />
      <DetailInfo title={'Hotel Gran Melia Jakarta'}>
        Jl. H. R. Rasuna Said No.Kav X, RW.0, Kuningan Tim., Kecamatan Setiabudi, Kota Jakarta Selatan
      </DetailInfo>
      <a className="button-main btnw" href="https://maps.app.goo.gl/Ry6YTz4NaxCZ4r2k8" target="_blank">
        <i className="bi bi-geo-alt-fill"></i>Lihat Lokasi
      </a>
    </div>
  );
}

function DetailInfo({ title, children }) {
  return (
    <div className="detail__wedding-item">
      <div className="detail__wedding-event">{title}</div>
      <div className="detail__wedding-description">{children}</div>
    </div>
  );
}
