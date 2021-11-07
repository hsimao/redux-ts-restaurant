import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { addFoodToCustomer } from "../features/customerSlice";

interface CustomerCardProps {
  id: string;
  name: string;
  food: string[];
}

export default function CustomerCard({ id, name, food }: CustomerCardProps) {
  const dispatch = useAppDispatch();
  const [foodName, setFoodName] = useState("");

  const handleAddFood = () => {
    if (!foodName) return;

    dispatch(addFoodToCustomer({ id, food: foodName }));
    setFoodName("");
  };

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
          />
          <button onClick={handleAddFood}>Add</button>
        </div>
      </div>
    </div>
  );
}
