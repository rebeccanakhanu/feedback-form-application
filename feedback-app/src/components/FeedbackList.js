import { useState, useEffect } from 'react';
import axios from 'axios';

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get('/api/feedbacks').then((response) => {
      setFeedbacks(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/feedbacks/${id}`).then(() => {
      setFeedbacks((prevFeedbacks) =>
        prevFeedbacks.filter((feedback) => feedback.id !== id)
      );
    });
  };

  return (
    <div>
      <h1>Feedback List</h1>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.id}>
            <div>
              <strong>Rating:</strong> {feedback.rating}
            </div>
            {feedback.comment && (
              <div>
                <strong>Comment:</strong> {feedback.comment}
              </div>
            )}
            <button onClick={() => handleDelete(feedback.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeedbackList;

