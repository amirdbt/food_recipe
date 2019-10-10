import React from "react"

const Recipe = ({ title, image, ingredients }) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>

            <img src={image} alt="food" />
        </div>
    )
}
export default Recipe
