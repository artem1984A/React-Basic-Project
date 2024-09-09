Recipe App

Overview

The Recipe App is a React-based application that allows users to browse and view recipes. 
It fetches data about different recipes and displays detailed information such as ingredients, calories, and health labels.

This project leverages several React components to build a modular and scalable application.
Chakra UI is used for styling, ensuring a clean and responsive user interface.


Features

	•	Browse a list of recipes.
	•	View detailed information about each recipe.
	•	Filter recipes by categories and health labels.
	•	Responsive design for an enhanced mobile experience.
 Getting Started

Prerequisites

Make sure you have the following installed:

	•	Node.js
	•	npm or yarn

Installation
git clone https://github.com/artem1984A/React_basic
cd React_basic

npm install
# or
yarn install

npm run dev
# or
yarn dev

To create an optimized build for production:
npm run build
# or
yarn build

Linting

Run the following command to check for linting issues:
npm run lint
# or
yarn lint
Components

App.jsx

The main component that renders the routing structure of the app and holds the global context for the recipes.

RecipeListPage.jsx

Displays a list of recipes. It fetches the data from data.js and shows the basic information like title and an image.

RecipePage.jsx

Renders detailed information about a specific recipe, such as its ingredients, calories, and other health-related labels.

data.js

Contains mock data about recipes, including their names, images, nutritional information, and ingredients. The app fetches this data for display.

Data Format

The recipes are stored in data.js in JSON format. Here’s an example structure for each recipe:

{
  "recipe": {
    "label": "Paleo Chocolate Covered Caramels",
    "image": "https://example.com/image.jpg",
    "url": "https://recipe-site.com",
    "yield": 12,
    "ingredientLines": [
      "1/2 cup honey",
      "1 cup chocolate chips"
    ],
    "calories": 1912.56,
    "totalTime": 45,
    "cuisineType": ["american"],
    "mealType": ["dessert"],
    "healthLabels": ["Low-Sodium", "Vegetarian"]
  }
}

License

This project is licensed under the MIT License.

Feel free to customize the README according to your specific needs.
