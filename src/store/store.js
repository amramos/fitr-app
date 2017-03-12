import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../ducks'


const logger = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
)


export default store
