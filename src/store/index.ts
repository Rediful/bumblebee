import { createStore, combineReducers, applyMiddleware, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { systemReducer } from './system/reducers';
import { chatReducer } from './chat/reducers';

const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer,
});

export type State = ReturnType<typeof rootReducer>;

export default function configureStore(): Store {
  const middlewareList = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewareList);

  const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));

  return store;
}
