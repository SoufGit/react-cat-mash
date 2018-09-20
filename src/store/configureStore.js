import { createStore, applyMiddleware, compose } from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';


const configureStore = () => {
  const middlewares = [thunk];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(reduxLogger, ...middlewares));

  return createStore(reducers, {}, enhancer);
};

export default configureStore;
