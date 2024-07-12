import React, { useState } from 'react';
import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from './components/ui/RecipePage';
import { data } from './utils/data';

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackClick = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} onBackClick={handleBackClick} />
      ) : (
        <RecipeListPage recipes={data.hits} onSelectRecipe={handleRecipeSelect} />
      )}
    </div>
  );
};

