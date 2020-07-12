import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { createEpicMiddleware } from 'redux-observable'

import user from './app/duck'
// Bundling Epics
// const rootEpic = combineEpics(userEpic)

// Creating Bundled Epic
const epicMiddleware = createEpicMiddleware()

// Define Middleware
const middleware = [thunk, promise, epicMiddleware]

// Define Reducers
const reducers = combineReducers({
  user,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Store
export default createStore(
  reducers,
  composeEnhancer(applyMiddleware(...middleware))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // {},  
)
