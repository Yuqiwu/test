// Author
/*
    Would contains more functionalities if this is not just
    a webpage for display purpose only. Now it only handles
    the request and its outcome, either success or failure.
*/

import { 
    FETCH_DRINKS_FAILURE, 
    FETCH_DRINKS_REQUEST, 
    FETCH_DRINKS_SUCCESS
} from "./drinkTypes"

const initialState = {
    loading: false,
    drinks: [],
    error: ''
}

const drinks = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DRINKS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_DRINKS_SUCCESS:
            console.log(action)
            return {
                loading: false,
                drinks: action.payload,
                error: ''
            }
        case FETCH_DRINKS_FAILURE:
            return {
                loading: false,
                drinks: [],
                error: action.payload
            }
        default: return state
    }
}

export default drinks