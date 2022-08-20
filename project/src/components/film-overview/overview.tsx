import { Film } from '../../types/films';

type OverviewProps = {
  film: Film,
}

export default function Overview({film}: OverviewProps): JSX.Element{
  const {rating, scoresCount, description, director, starring} = film;
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {starring}</strong></p>
      </div>
    </>
  );
}
