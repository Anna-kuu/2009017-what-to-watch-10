import { useState } from 'react';
import { Film, Reviews } from '../../types/films';
import Details from '../film-details/details';
import Overview from '../film-overview/overview';
import Review from '../film-reviews/reviews';

type TabsProps = {
  film: Film;
  reviews: Reviews;
}

export default function Tabs({film, reviews}: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState('Overview');

  const handleTabClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    if (evt.currentTarget.textContent !== null) {
      setActiveTab(evt.currentTarget.textContent);
    }
  };

  const renderActiveTab = (tab: string) => {
    switch(tab) {
      case 'Overview':
        return <Overview film={film}/>;
      case 'Details':
        return <Details film={film}/>;
      case 'Reviews':
        return <Review reviews={reviews}/>;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={activeTab === 'Overview' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a onClick={handleTabClick} href="/" className="film-nav__link">Overview</a>
          </li>
          <li className={activeTab === 'Details' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a onClick={handleTabClick} href="/" className="film-nav__link">Details</a>
          </li>
          <li className={activeTab === 'Reviews' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a onClick={handleTabClick} href="/" className="film-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>
      {renderActiveTab(activeTab)}
    </div>

  );
}
