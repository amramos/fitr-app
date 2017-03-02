import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import rootSaga from '../sagas/rootSaga';
import createLogger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

let store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;
