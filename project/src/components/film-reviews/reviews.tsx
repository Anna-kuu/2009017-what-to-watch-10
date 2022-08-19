import { Reviews } from '../../types/films';

type ReviewProps = {
  reviews: Reviews,
}

export default function Review({reviews}: ReviewProps): JSX.Element {
  const reviewList = reviews.map((review) => (
    <div key={review.id} className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  ));

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviewList}
      </div>
    </div>

  );
}
