import {useState, ChangeEvent} from 'react';
import Rating from '../rating/rating';

export default function AddReviewComment(): JSX.Element {
  const [comment, setComment] = useState('');
  const commentHandleChange = ( evt: ChangeEvent<HTMLTextAreaElement>) => setComment(evt.target.value);
  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <Rating />
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
