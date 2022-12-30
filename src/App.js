import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = "e3b8e07d";
  const APP_KEY = "77ea5d3449649d50105466c81610163d";



  return(
    <div className="App">
      <h1>This is a recipe making website.</h1>
      <form className="search-form">
        <input type="text" className="search-bar" name="recipesearch" placeholder="enter your recipie...">Enter your recipe</input>
        <button type="submit" className="serach-button">makeIT!</button>
      </form>
    </div>
  )
}

export default App;
