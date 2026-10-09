import { useState, useEffect } from 'react';
import RecipeDetail from './components/RecipeDetail.jsx';
import RecipeCard from './components/RecipeCard.jsx';

const API_URL =
  'https://myrestaurant-backend-231710237888.us-central1.run.app/api/recipes';

export default function App() {
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchRandomRecipe() {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/random`);
      if (!response.ok) {
        throw new Error('Failed to fetch random recipe');
      }

      const data = await response.json();
      setSelectedRecipe(data || null);
    } catch (error) {
      console.error('Error fetching random recipe:', error);
    } finally {
      setLoading(false);
    }
  }

  async function searchRecipes() {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/search?ingredient=${search}`);

      if (!response.ok) {
        throw new Error('Failed to search recipes');
      }

      const data = await response.json();
      setRecipes(data || []);
    } catch (error) {
      console.error('Error searching recipes:', error);
    } finally {
      setLoading(false);
    }
  }

  async function viewRecipe(recipeId) {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/${recipeId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch recipe details');
      }

      const data = await response.json();
      setSelectedRecipe(data || null);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // Fetch recipes from the API
  }, []);

  return (
    <div className="container">
      <h1>Recipe Remix</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by ingredient"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchRecipes} style={{ marginLeft: '10px' }}>
          Search
        </button>
        <button onClick={fetchRandomRecipe} style={{ marginLeft: '10px' }}>
          Surprise Me!
        </button>
      </div>

      {loading && <p>Loading recipes...</p>}

      {selectedRecipe && !loading && (
        <RecipeDetail
          recipe={selectedRecipe}
          onBack={() => setSelectedRecipe(null)}
        />
      )}

      {!selectedRecipe && !loading && recipes.length > 0 && (
        <div className="recipe-list">
          {recipes.map((meal) => (
            <RecipeCard key={meal.idMeal} recipe={meal} onSelect={viewRecipe} />
          ))}
        </div>
      )}

      {!selectedRecipe && !loading && recipes.length === 0 && (
        <p>No recipes found. Try searching for a different ingredient.</p>
      )}
    </div>
  );
}
