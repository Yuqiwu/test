import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errorMsg: ''
        }
    }
    
    // activate once only
    componentDidMount() {
        // get request using axios
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
            .then(response => {
                console.log(response)
                // save the drinks into state
                this.setState({posts: response.data.drinks})
            })
            .catch(error => {
                console.log(error)
                // save the error message into state
                this.setState({errorMsg: 'Error retrieving data'})
            })
    }

    render() {
        const { posts, errorMsg } = this.state;
        return (
            <div>
                <h1>List of Drinks</h1>
                {
                    posts.length ?
                    // if not empty, display
                    posts.map(post => <div key={post.idDrink}>
                        <h2>{post.strDrink}</h2>
                        <ol>
                            {
                                Object.keys(post).map((key, index) => (
                                    <li> {key} : {post[key]} </li>
                                ))
                            }
                        </ol>
                    </div>) :
                    // if empty, do nothing
                    null 
                }
                {
                    errorMsg ?
                    // display error message if there is any
                    <div> {errorMsg} </div> :
                    // else do nothing
                    null
                }
            </div>
        )
    }
}

export class Drink {
    constructor(drinkData) {
        this.idDrink = drinkData.idDrink
        this.strDrink = drinkData.strDrink
        this.strDrinkAlternate = drinkData.strDrinkAlternate
        this.strTags = drinkData.strTags
        this.strVideo = drinkData.strVideo
        this.strCategory = drinkData.strCategory
        this.strIBA = drinkData.strIBA
        this.strAlcoholic = drinkData.strAlcoholic
        this.strGlass = drinkData.strGlass
        this.strInstructions = drinkData.strInstructions
        this.strInstructionsES = drinkData.strInstructionsES
        this.strInstructionsDE = drinkData.strInstructionsDE
    }
}

export default PostList
