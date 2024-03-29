import { Reviews } from '../../types/films';
import { convertDateFormat } from '../../utils';

const COUNT_COLUMNS = 2;

type ReviewProps = {
  reviews: Reviews,
}

export default function Review({reviews}: ReviewProps): JSX.Element {
  const countHalfReviews = Math.ceil(reviews.length / COUNT_COLUMNS);

  const reviewList = (comments: Reviews) => comments.map((review) => (
    <div key={`review-${review.id}`} className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{convertDateFormat(review.date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  ));

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviewList(reviews.slice(0, countHalfReviews))}
      </div>
      <div className="film-card__reviews-col">
        {reviewList(reviews.slice(countHalfReviews, reviews.length))}
      </div>
    </div>

  );
}
