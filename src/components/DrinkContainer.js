import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchDrinks } from  '../redux/drink/drinkActions'
import drinks from '../redux/drink/drinkReducer'

function DrinkContainer({ drinkData, fetchDrinks }) {
    useEffect(() => {
        fetchDrinks()
    }, []) // need an empty dependency array, so that fetchDrinks()
           // is dispatched only once
    console.log(drinkData)
    return drinkData.loading ? (
        <h2>Loading</h2>
    ) 
    : drinkData.error ? (
        <h2>{drinkData.error}</h2>
    )
    : (
        <div>
            <h2>Drink List</h2>
            <div>
                {
                    drinkData && 
                    drinkData.drinks && 
                    drinkData.drinks.map(drink => 
                        <div>
                            <h2>{drink.strDrink}</h2>
                            <ul>
                                {drink.strDrinkAlternate ?
                                    <li>Alternate Name: {drink.strDrinkAlternate}</li>
                                    : ''}
                                {drink.strTags ?
                                    <li>Tags: {drink.strTags}</li>
                                    : ''}
                                {drink.strInstructions &&
                                 drink.strInstructions.length > 0 ?
                                    drink.strInstructions.map(instruction => {
                                        return <li>{instruction}</li>
                                    })
                                    : ''}
                                {drink.strDrinkThumb &&
                                drink.strImageAttribution ?
                                    <img src={drink.strDrinkThumb}
                                        alt={drink.strImageAttribution}
                                        style={{maxWidth:250}}></img>
                                    : ''}
                                

                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

// access state in your components, retrieve approprite
// state properties
const mapStateToProps = state => {
    return {
        drinkData: state
    }
}

// dispatch actions, allows us to map action creators to
// props component
const mapDispatchToProps = dispatch => {
    return {
        fetchDrinks: () => dispatch(fetchDrinks())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DrinkContainer)
