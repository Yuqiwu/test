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
        dispatch(fetchDrinksRequest)
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
            .then(response => {
                const results = response.data.drinks
                let drinks = []
                results.forEach(element => {
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
                dispatch(fetchDrinksSuccess(drinks))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchDrinksFailure(errorMsg))
            })
    }
}