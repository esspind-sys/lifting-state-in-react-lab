import type { Ingredient } from '../shared.types';


type IngredientListProps = {
  ingredients: Ingredient[];
  addToStack: (ingredient: Ingredient) => void;
};

const IngredientList = ({ ingredients, addToStack }: IngredientListProps) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => addToStack(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  );
};
export default IngredientList;