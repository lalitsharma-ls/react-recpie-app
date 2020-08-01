import React from "react";


function Recipe ({name,id,image,calories}){

    return(
        <div className="recipe">
            <h1>{name}</h1>
            <img src={image} alt={name}/>
            <p>calories: {calories}</p>
        </div>
    );    


}

export default Recipe;