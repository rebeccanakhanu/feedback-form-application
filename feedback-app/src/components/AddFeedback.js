import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function AddFeedback() {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/feedbacks', { rating, comment }).then(() => {
      history.push('/');
    });
  };

  return (
    <div>
      <h1>How would you rate the support you received?</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="radio"
            id="good"
            name="rating"
            value="good"
            checked={rating === 'good'}
            onChange={(e) => setRating(e.target.value)}
          />
          <label htmlFor="good">Good, I'm satisfied</label>
        </div>
        <div>
          <input
            type="radio"
            id="bad"
            name="rating"
            value="bad"
            checked={rating === 'bad'}
            onChange={(e) => setRating(e.target.value)}
          />
          <label htmlFor="bad">Bad</label>
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddFeedback;
