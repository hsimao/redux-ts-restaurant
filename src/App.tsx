import React, { useState } from "react";
import { useAppSelector } from "./app/hooks";
import ReservationCard from "./components/ReservationCard";
import CustomerCard from "./components/CustomerCard";
import { useActions } from "./app/hooks";
import "./App.css";

function App() {
  const [reservationName, setReservationName] = useState("");
  const reservations = useAppSelector((state) => state.reservations.value);
  const customers = useAppSelector((state) => state.customers.value);

  const { addReservation } = useActions();

  const handleAddReservation = () => {
    if (!reservationName) return;
    addReservation(reservationName);
    setReservationName("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => (
                <ReservationCard name={name} index={index} key={index} />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationName}
              onChange={(e) => setReservationName(e.target.value)}
            />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => (
            <CustomerCard {...customer} key={customer.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
