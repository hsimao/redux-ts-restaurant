import { useActions } from "../app/hooks";
import { v4 as uuid } from "uuid";

interface ReservationCardProps {
  name: string;
  index: number;
}

export default function ReservationCard({ name, index }: ReservationCardProps) {
  const { removeReservation, addCustomer } = useActions();

  const handleClick = () => {
    removeReservation(index);
    addCustomer({
      id: uuid(),
      name,
      food: []
    });
  };

  return (
    <div className="reservation-card-container" onClick={handleClick}>
      {name}
    </div>
  );
}
