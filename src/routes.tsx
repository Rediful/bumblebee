import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './pages/App';
import Chat from './pages/Chat';

const Routes: React.FC = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={App} />
      <Route path="/chat" component={Chat} />
    </React.Fragment>
  </Router>
);

export default Routes;
