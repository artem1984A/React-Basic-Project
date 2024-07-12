import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Checkbox,
  CheckboxGroup,
  Stack,
  SimpleGrid,
  Image,
  Text,
  Badge,
  VStack
} from '@chakra-ui/react';

const healthLabels = [
  'Vegan',
  'Vegetarian',
  'Pescatarian',
  'Gluten-Free',
  'Sesame-Free',
  ];

export const RecipeListPage = ({ recipes, onSelectRecipe }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHealthLabels, setSelectedHealthLabels] = useState([]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCheckboxChange = (labels) => {
    setSelectedHealthLabels(labels);
  };

  const filteredRecipes = recipes.filter(({ recipe }) => {
    const matchesSearchTerm =
      recipe.label.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesHealthLabels = selectedHealthLabels.every((label) =>
      recipe.healthLabels.includes(label)
    );
    return matchesSearchTerm && matchesHealthLabels;
  });

  return (
    <Box>
      <Heading as="h1" mb={4}>Recipe List</Heading>
      <Input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={handleSearchChange}
        mb={4}
      />
      <CheckboxGroup value={selectedHealthLabels} onChange={handleCheckboxChange}>
        <Stack direction="row" mb={4} wrap="wrap">
          {healthLabels.map((label) => (
            <Checkbox key={label} value={label}>
              {label}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredRecipes.map(({ recipe }) => (
          <Box
            key={recipe.label}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            cursor="pointer"
            onClick={() => onSelectRecipe(recipe)}
          >
            <VStack spacing={4}>
              <Image src={recipe.image} alt={recipe.label} boxSize="200px" objectFit="cover" />
              <Text fontWeight="bold" fontSize="xl">{recipe.label}</Text>
              <Text>Diet: {recipe.dietLabels.join(', ') || 'None'}</Text>
              <Text>Cautions: {recipe.cautions.join(', ') || 'None'}</Text>
              <Text>Meal Type: {recipe.mealType.join(', ')}</Text>
              <Text>Dish Type: {recipe.dishType.join(', ')}</Text>
              <Box>
                {recipe.healthLabels.includes('Vegan') && <Badge colorScheme="green">Vegan</Badge>}
                {recipe.healthLabels.includes('Vegetarian') && <Badge colorScheme="blue">Vegetarian</Badge>}
              </Box>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

