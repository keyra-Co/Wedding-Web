/* eslint-disable react/prop-types */
import './Comment.css';
import { comments } from '../../../data/dataComments';

export default function Comments() {
  const commentsPerson = comments.map((comment) => <CommentPerson key={comment.name} {...comment} />);
  return (
    <section className="comment section">
      <h2 className="comment__title second-title autoDownScroll">Ucapan & Do&apos;a</h2>
      <div className="comment__container">{commentsPerson}</div>
    </section>
  );
}

function CommentPerson({ initial, color, name, place, comment }) {
  return (
    <div className="comment__item">
      <div className={`comment__account autoAppearScroll ${color}`}>{initial}</div>
      <div className="comment__bubble autoDownScroll">
        <span className="account__name">{name}</span>
        <span className="account__place">{place}</span>
        <div className="account__comment paragraph">{comment}</div>
      </div>
    </div>
  );
}
