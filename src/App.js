import React,{useState,useEffect} from "react";
import "./App.css"
import Recipe  from './Recipe';

function App(){
  //get api keys from edamam.com
  const APP_ID="";
  const API_KEY="";
  const [search,setSearch]=useState('banana');
  const [recipeList,setRecipeList]=useState([]);
  const url=`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${API_KEY}`;

  useEffect(()=>{
    fetchRecipes();
  },[]);


  const updateSearch=(e)=>{
    setSearch(e.target.value);
  }

  const getData=(e)=>{
     e.preventDefault(); 
     fetchRecipes();
     setSearch('');
  }

  const headerStyle=()=>{
    return{
      font:"12px",
      textAlign:"center"
    }
  }

  const fetchRecipes = async()=>{
    const response = await fetch(url,{ crossDomain:true});
    const data = await response.json()
    setRecipeList(data.hits);

  }

 
  return(

      <div>
          <div style={headerStyle()}>
            <h1>Recipe App</h1>
            <small>Find best recipe</small>
          </div>
          <div className="searchForm">
            <form onSubmit={getData}>
              <input id="recipeInput" type="text" onChange={updateSearch} value={search}/>
              <button id="searchButton" type="submit">Search</button>
            </form>
          </div>
          <div className="recipeList">
            {
              recipeList.map(recipe =>(
                <Recipe
                name={recipe.recipe.label} 
                key={recipe.recipe.yield}
                image={recipe.recipe.image}
                calories={recipe.recipe.calories}
                />
              ))
            }
          </div>
      </div>

  );





}

export default App;

