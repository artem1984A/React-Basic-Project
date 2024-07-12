import React from 'react';
import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  List,
  ListItem,
  Badge,
  VStack,
  SimpleGrid,
  HStack,
  Divider,
  Stack
} from '@chakra-ui/react';

export const RecipePage = ({ recipe, onBackClick }) => {
  return (
    <Box>
      <Button onClick={onBackClick} mb={4}>Back to Recipes</Button>
      <VStack spacing={4} align="start">
        <Heading>{recipe.label}</Heading>
        <Image src={recipe.image} alt={recipe.label} boxSize="400px" objectFit="cover" />
        <SimpleGrid columns={[1, 2]} spacing={10} width="100%">
          <Box>
            <Text fontSize="lg" fontWeight="bold">Meal Type:</Text>
            <Text>{recipe.mealType.join(', ')}</Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold">Dish Type:</Text>
            <Text>{recipe.dishType.join(', ')}</Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold">Total Cooking Time:</Text>
            <Text>{recipe.totalTime} minutes</Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold">Diet Label:</Text>
            <Text>{recipe.dietLabels.join(', ') || 'None'}</Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold">Health Labels:</Text>
            <List spacing={2}>
              {recipe.healthLabels.map((label, index) => (
                <ListItem key={index}>
                  <Badge>{label}</Badge>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold">Cautions:</Text>
            <Text>{recipe.cautions.join(', ') || 'None'}</Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold">Servings:</Text>
            <Text>{recipe.yield}</Text>
          </Box>
        </SimpleGrid>
        <Divider />
        <Heading as="h2" size="md">Ingredients:</Heading>
        <List spacing={2}>
          {recipe.ingredientLines.map((ingredient, index) => (
            <ListItem key={index}>{ingredient}</ListItem>
          ))}
        </List>
        <Divider />
        <Heading as="h2" size="md">Total Nutrients:</Heading>
        <Stack spacing={2}>
          <HStack>
            <Text fontWeight="bold">Energy:</Text>
            <Text>{recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)} kcal</Text>
          </HStack>
          <HStack>
            <Text fontWeight="bold">Protein:</Text>
            <Text>{recipe.totalNutrients.PROCNT.quantity.toFixed(2)} g</Text>
          </HStack>
          <HStack>
            <Text fontWeight="bold">Fat:</Text>
            <Text>{recipe.totalNutrients.FAT.quantity.toFixed(2)} g</Text>
          </HStack>
          <HStack>
            <Text fontWeight="bold">Carbs:</Text>
            <Text>{recipe.totalNutrients.CHOCDF.quantity.toFixed(2)} g</Text>
          </HStack>
          <HStack>
            <Text fontWeight="bold">Cholesterol:</Text>
            <Text>{recipe.totalNutrients.CHOLE.quantity.toFixed(2)} mg</Text>
          </HStack>
          <HStack>
            <Text fontWeight="bold">Sodium:</Text>
            <Text>{recipe.totalNutrients.NA.quantity.toFixed(2)} mg</Text>
          </HStack>
        </Stack>
      </VStack>
    </Box>
  );
};


