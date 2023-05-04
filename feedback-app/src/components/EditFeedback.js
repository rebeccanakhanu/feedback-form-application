import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

function EditFeedback() {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios.get(`/api/feedbacks/${id}`).then((response) => {
      setRating(response.data.rating);
      setComment(response.data.comment);
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`/api/feedbacks/${id}`, { rating, comment }).then(() => {
      history.push('/');
    });
  };

  return (
    <div>
      <h1>Edit Feedback</h1>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditFeedback;
