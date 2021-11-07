import { useAppDispatch } from "../app/hooks";
import { removeReservation } from "../features/reservationSlice";
import { addCustomer } from "../features/customerSlice";
import { v4 as uuid } from "uuid";

interface ReservationCardProps {
  name: string;
  index: number;
}

export default function ReservationCard({ name, index }: ReservationCardProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(removeReservation(index));
    dispatch(
      addCustomer({
        id: uuid(),
        name,
        food: []
      })
    );
  };

  return (
    <div className="reservation-card-container" onClick={handleClick}>
      {name}
    </div>
  );
}
