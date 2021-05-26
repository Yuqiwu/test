// Author: Yuqi Wu
/*
    File for all the actions and fetch
*/

import axios from 'axios'
import { 
    FETCH_DRINKS_FAILURE, 
    FETCH_DRINKS_REQUEST, 
    FETCH_DRINKS_SUCCESS
} from "./drinkTypes"
import Drink from '../../components/Drink.js'

export const fetchDrinksRequest = () => {
    return {
        type: FETCH_DRINKS_REQUEST
    }
}

export const fetchDrinksSuccess = drinks => {
    return {
        type: FETCH_DRINKS_SUCCESS,
        payload: drinks
    }
}

export const fetchDrinksFailure = error => {
    return {
        type: FETCH_DRINKS_FAILURE,
        payload: error
    }
}

export const fetchDrinks = () => {
    return (dispatch) => {
        // first thing to do: request
        dispatch(fetchDrinksRequest)
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
            .then(response => { // if do get response
                const results = response.data.drinks
                let drinks = []
                // go through each individual drink,
                // make sure they are not null
                results.forEach(element => {
                    // utilizing the Drink model
                    let drink = new Drink(element)
                    drink.strInstructions = 
                        drink.strInstructions.filter(cur => {
                            return cur !== null
                        })
                    drink.strIngredients = 
                        drink.strIngredients.filter(cur => {
                            return cur !== null
                        })
                    drink.strMeasures =
                        drink.strMeasures.filter(cur => {
                            return cur !== null
                        })
                    drinks.push(drink)
                });
                // here means everything is done correctly, dispatch
                dispatch(fetchDrinksSuccess(drinks))
            })
            .catch(error => { // else catching the error
                const errorMsg = error.message
                dispatch(fetchDrinksFailure(errorMsg))
            })
    }
}