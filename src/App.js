import React, { Component } from 'react'
import './App.css';
import PostList from './components/PostList';

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <PostList />
      </div>
    );
  }
}

export default App;
