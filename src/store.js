import { createStore, applyMiddleware } from 'redux'
import { loggerMiddleware } from './exampleAddons/middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'

const composedEnhancer = composeWithDevTools(applyMiddleware(loggerMiddleware))

const store = createStore(rootReducer, composedEnhancer)

export default store
