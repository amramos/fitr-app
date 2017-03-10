import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers/rootReducer'
import rootSaga from '../sagas/rootSaga'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga)

export default store
