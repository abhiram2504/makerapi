import React from "react";
import style from './recipe.module.css';

//this is to show what should we shown when we call recipe
const Recipe =({name,calories,timetaken,image,ingredients})=>{
    return(
        <div className={style.recipe}>
            <h2 >{name}</h2>
            <p>{calories}</p>
            <p>{timetaken}</p>
            <img className={style.image} src={image} alt="rip"></img>
            <ol>
                {ingredients.map(ingredients =>(
                    <li>{ingredients.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe;
