import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import configureStore from './store';

import App from './pages/Chat';

const store = configureStore();

const Root: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
