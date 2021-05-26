// Author: Yuqi Wu
/*
  This file can be ignored. After with the help from
  Justin, I moved everything to index.js
*/

import './App.css';
import PostList, { Drink } from './components/PostList';
import DrinkContainer from './components/DrinkContainer'
import store from './redux/store'
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <DrinkContainer />
      </div>
      </Provider>
    )
    
  }
}

export default App;
