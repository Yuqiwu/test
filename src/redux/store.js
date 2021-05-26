// Author: Yuqi Wu
/*
    Here created the store, and had the logger and thunk
    to better assist dedbugging purpose. Displayed all
    the changes in state. But not that helpful in this
    particular assignment.
*/

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import drinks from './drink/drinkReducer'

const store = createStore(drinks, 
    composeWithDevTools(applyMiddleware(logger, thunk)) )

export default store
