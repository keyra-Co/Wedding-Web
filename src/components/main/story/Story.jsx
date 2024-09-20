/* eslint-disable react/prop-types */
import './Story.css';

import { dataStories } from '../../../data/dataStory';

export default function Story() {
  const displayStories = dataStories.map((story) => <StoryItem key={story.year} {...story} />);
  return (
    <section className="story section">
      <div className="story__line scrollAnimation"></div>
      <h2 className="story__title second-title autoAppearScroll">Our Stories</h2>
      <div className="story__wrapper">{displayStories}</div>
    </section>
  );
}

function StoryItem({ position, year, story }) {
  return (
    <div className={`story__item ${position} autoDownScroll fast`}>
      <h4 className="story__year">{year}</h4>
      <p className="story__description">{story}</p>
      <span className="love">
        <i className="bi bi-heart-fill"></i>
      </span>
    </div>
  );
}
