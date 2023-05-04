import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FeedbackList from './FeedbackList';
import AddFeedback from './AddFeedback';
import EditFeedback from './EditFeedback';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FeedbackList} />
        <Route exact path="/add" component={AddFeedback} />
        <Route exact path="/edit/:id" component={EditFeedback} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
