import React from "react";
import style from './recipe.module.css';

//this is to show what should we shown when we call recipe
const Recipe =({name,calories,timetaken,image,ingredients})=>{
    return(
        <div className={style.recipe}>
            <h2>{name}</h2>
            <p className="calories">Calories: {calories}</p>
            <p font-family="Times New Roman">Time taken to prepare in minutes: {timetaken}</p>
            <img className={style.image} src={image} alt="rip"></img>
            <p>These are the ingredients you need to make your Recipe!</p>
            <ol>
                {ingredients.map(ingredients =>(
                    <li>{ingredients.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe;
