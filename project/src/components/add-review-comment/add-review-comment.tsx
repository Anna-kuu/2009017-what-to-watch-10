import {useState, ChangeEvent, Fragment} from 'react';

export default function AddReviewComment(): JSX.Element {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const commentHandleChange = ( evt: ChangeEvent<HTMLTextAreaElement>) => setComment(evt.target.value);
  const starsList = Array.from({ length: 10 }, (it, index) => (
    <Fragment key={index}>
      <input className="rating__input" id={`star-${index}`} type="radio" name="rating" value={index} onChange={() => setRating(index)} checked={rating === index}/>
      <label className="rating__label" htmlFor={`star-${index}`}>{`Rating ${index}`}</label>
    </Fragment>
  ));

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {starsList}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={comment} onChange={commentHandleChange}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}
