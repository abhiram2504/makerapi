import React,{useEffect,useState} from 'react';
//importing react
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = "e3b8e07d";
  const APP_KEY = "77ea5d3449649d50105466c81610163d";


//crating a state to get teh data that comes from the api.
//all teh recipes are in teh state.
//react needs a different key for each recipe or we don't re-render.
const [recipe,setRecipe] = useState([]);


//now creatinga  state for teh serach, when the user searches for the recipe.
const [search,setSearch] = useState("");

//creating another state that returns teh value when we only click teh button, otherwise if we type a lettter
//in the search bar then for each letter, a request is sent to eh api and, that we know if very bad, as we only have a limited number of requests.
const [query,setQuery] = useState('maggi');


//takes an arrow funciton as a paramter. Also takes an empty array as a paramter, because we want to request
//from the api
useEffect(() => {
  getRecipe();
  //now we can add it as we made the onSubmit in teh form.
},[query])



const getRecipe = async() =>{
  //fetch is ot get the data frmo teh api, and await is to wait for a but before getting it.
  //this is the request to teh eduman api
  const respose = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${query}&app_id=e3b8e07d&app_key=77ea5d3449649d50105466c81610163d`);
  const data = await respose.json();
  console.log(data.hits);
  //now all are reciepes are in teh state.
  setRecipe(data.hits);
  console.log(data.hits)
};

function totaltiming(recipe){
  const total = recipe.recipe.totalTime;
  if(total != 0){
    return total
  }
  return "Not avaiable";
}

//creating a fucniton  for seraching in the input box.
//e is for creating an event
const updateKaro =  e =>{
  setSearch(e.target.value);
  //what we are trying to search
  console.log(search);
}

const getSearch = e =>{
  //to stop teh page from refreshing, we do
  e.preventDefault();
  //this is to get teh searched valued when teh user presses teh submit
  setQuery(search);
  //now after pressing submit, we want our input text to get removed, so we put setSearch as empty
  setSearch('');
}


  return(
    <div className="App">
      <h1 align="center">Create a recipe with your items!</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" placeholder="Search your recipe!" value={search} onChange={updateKaro}></input>
        <button type="submit" className="serach-button">
          makeIT!
        </button>
      </form>
      <div className='recipeslol'>
      {recipe.map(recipe => (
        //hence as for each recipe to be unique, we add a key to each reicpie, for now
        //just adding the name of the recipe to tbe teh specific key.
        <Recipe 
        key={recipe.recipe.image}
        name={recipe.recipe.label}
        calories={recipe.recipe.calories}
        timetaken={totaltiming(recipe)}
        image={recipe.recipe.image}
        //adding ingridenents
        ingredients={recipe.recipe.ingredients}
         />
      ))}
      </div>
    </div>
  )
}

export default App;
