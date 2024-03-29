import {useState, ChangeEvent, FormEvent, Fragment} from 'react';
import { useParams } from 'react-router-dom';
import { ReviewLength } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addReviewAction } from '../../store/api-actions';
import { getIsCommentSend } from '../../store/film-data/selectors';

const MAX_RATING_VALUES = 10;
const RATING_VALUES = Array.from({ length: MAX_RATING_VALUES }, (it, index) => index + 1).reverse();

export default function AddReviewComment(): JSX.Element {
  const params = useParams();
  const id = Number(params.id);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const dispatch = useAppDispatch();
  const handleCommentChange = ( evt: ChangeEvent<HTMLTextAreaElement>) => setComment(evt.target.value);
  const isCommentSend = useAppSelector(getIsCommentSend);
  const isFotmValid = comment.length >= ReviewLength.Min && comment.length <= ReviewLength.Max && rating;

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(addReviewAction({
      comment: comment,
      rating: rating,
      id: id,
    }));
  };

  const stars = RATING_VALUES.map((index) => (
    <Fragment key={`star-${index}`}>
      <input disabled={isCommentSend} className="rating__input" id={`star-${index}`} type="radio" name="rating" value={index} onChange={() => setRating(index)} checked={rating === index}/>
      <label className="rating__label" htmlFor={`star-${index}`}>{`Rating ${index}`}</label>
    </Fragment>
  ));
  return (
    <form onSubmit={handleSubmit} action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {stars}
        </div>
      </div>

      <div className="add-review__text">
        <textarea maxLength={400} disabled={isCommentSend} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={comment} onChange={handleCommentChange}></textarea>
        <div className="add-review__submit">
          <button disabled={isCommentSend || !isFotmValid} className="add-review__btn" type="submit">{isCommentSend ? 'Posting...' : 'Post'}</button>
        </div>
      </div>
    </form>
  );
}
