import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import drinks from './drink/drinkReducer'

const store = createStore(drinks, 
    composeWithDevTools(applyMiddleware(logger, thunk)) )

export default store
