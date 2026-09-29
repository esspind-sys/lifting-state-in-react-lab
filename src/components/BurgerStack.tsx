import type { Ingredient } from '../shared.types';


type BurgerStackProps = {
  stack: Ingredient[];
  removeFromStack: (index: number) => void;
};

const BurgerStack = ({ stack, removeFromStack }: BurgerStackProps) => {
  return (
    <ul>
      {stack.length === 0 ? (
        <p>No Ingredients</p>
      ) : (
        stack.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => removeFromStack(index)}>X</button>
          </li>
        ))
      )}
    </ul>
  );
};
export default BurgerStack;