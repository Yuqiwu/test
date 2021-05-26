import { Provider } from 'react-redux'
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
