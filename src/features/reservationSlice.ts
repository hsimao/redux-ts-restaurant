import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationsState {
  value: string[];
}

const initialState: ReservationsState = {
  value: []
};

export const reservationsSlice = createSlice({
  name: "reserviations",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    }
  }
});

export const { addReservation, removeReservation } = reservationsSlice.actions;

export default reservationsSlice.reducer;
