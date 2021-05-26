// Author: Yuqi Wu
/*
    This file is created for learning purpose. Did not utilized
    Redux inside this file, so can be discard for this assignment.
*/

import React, { Component } from 'react'
import axios from 'axios'
import { createStore } from 'redux'

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
                const store = createStore()
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
                            {   // go through the dictionary like an array
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

export default PostList
