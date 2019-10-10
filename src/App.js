import React, { useState, useEffect } from "react"
import "./App.css"
import Recipe from "./Recipe"

const App = () => {
    const APP_ID = "8f3d0dee"
    const APP_KEY = "108afd22bc6e610b8f77a32d1973551f"

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState("chicken")

    useEffect(() => {
        getRecipes()
    }, [query])

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        )
        const data = await response.json()
        setRecipes(data.hits)
    }
    const handleChange = e => {
        const { value } = e.target
        setSearch(value)
        console.log(search)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setQuery(search)
        setSearch("")
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="pa3 ba b--green bg-lightest-blue"
                    value={search}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="pa3 ba b--green bg-lightest-blue"
                >
                    Search
                </button>
            </form>

            {recipes.map(recipe => (
                <Recipe
                    key={recipe.recipe.url}
                    title={recipe.recipe.label}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                />
            ))}
        </div>
    )
}

export default App
