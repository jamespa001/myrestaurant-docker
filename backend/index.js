import express from 'express';
import cors from 'cors';
import axios from 'axios';

const PORT = process.env.PORT || 3000;
const API_URL = 'https://www.themealdb.com/api/json/v1/1';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/recipes/random', async (req, res) => {
  try {
    const response = await await axios.get(`${API_URL}/random.php`, {
      validateStatus: () => true,
    });

    if (
      !response.data ||
      !response.data.meals ||
      response.data.meals.length === 0
    ) {
      return res.status(404).json({ error: 'No random recipe found' });
    }

    const meal = response.data.meals[0];
    res.json(meal);
  } catch (error) {
    console.error('Failed to fetch data:', error);
    res.status(500).json({ error: 'Failed to fetch random recipe' });
  }
});

app.get('/api/recipes/search', async (req, res) => {
  const ingredient = req.query.ingredient;
  if (!ingredient) {
    return res
      .status(400)
      .json({ error: 'Ingredient query parameter is required' });
  }

  try {
    const response = await axios.get(`${API_URL}/filter.php?i=${ingredient}`);
    const meals = response.data.meals;
    res.json(meals || []);
  } catch (error) {
    console.error('Error searching recipes by ingredient:', error);
    res.status(500).json({ error: 'Failed to search recipes by ingredient' });
  }
});

app.get('/api/recipes/:id', async (req, res) => {
  const recipeId = req.params.id;
  if (!recipeId) {
    return res.status(400).json({ error: 'Recipe ID is required' });
  }

  try {
    const response = await axios.get(`${API_URL}/lookup.php?i=${recipeId}`);
    const meal = response.data.meals ? response.data.meals[0] : null;
    if (!meal) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.json(meal);
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    res.status(500).json({ error: 'Failed to fetch recipe details' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
