import {Fragment, useState} from 'react';

const RATING_VALUES = 10;

export default function Rating(): JSX.Element {
  const [rating, setRating] = useState(0);
  const stars = Array.from({ length: RATING_VALUES }, (it, index) => (
    <Fragment key={index}>
      <input className="rating__input" id={`star-${index}`} type="radio" name="rating" value={index} onChange={() => setRating(index)} checked={rating === index}/>
      <label className="rating__label" htmlFor={`star-${index}`}>{`Rating ${index}`}</label>
    </Fragment>
  ));
  return (
    <div className="rating__stars">
      {stars}
    </div>
  );
}
